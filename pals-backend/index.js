const fetch = require('node-fetch');
require('dotenv').config();
const Koa = require('koa');
const app = new Koa();
const server = require('http').createServer(app.callback());
const router = require('koa-better-router')().loadMethods();
const body = require('koa-body');

const io = require('socket.io')(server);

const port = process.env.PORT;
const kataHook = process.env.KATA_HOOK;

let activeChat = false;
let activeUser = {};
let activePartner = {};

io.on('connection', client => {
  console.log(`${client.id} connected`);
	client.on('auth', data =>{
		data == 'A' ? activeUser = client : activePartner = client;
		client.ident = data;
	});
	client.on('name', name => {
		client.name = name;
		io.sockets.sockets.forEach((socket) => socket.broadcast.emit('name', socket.name));
	});
  client.on('message', async msg => {
		if(client.ident != 'A'){
			const body = await fetch(kataHook, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					userId: client.id,
					messages: [
						{
							type: 'text',
							content: msg
						}
					]
				})
			});
		}
    client.broadcast.emit('message', msg);
    console.log(`${client.id}, ${client.auth}, ${msg}`);
  });
  client.on('disconnect', () => {
    io.emit('free');
  });
});

router.post('/', body(), ctx => {
	const body = ctx.request.body;
	console.log(body);
	const content = body.messages[0].content;
	let hint = {hintType: 'text'};
	if(content == 'nama'){
		hint.hintType = 'nama';
	}
	else if(content == 'makan'){
		hint.hintText = ['Nasi goreng', 'Mie goreng', 'Kentang goreng', 'terserah', 'mau makan apa'];
	}
	else if (content == 'minum') {
		hint.hintText = ['Jus Apel','Air Putih','Susu'];
	}
	else if (content == 'alamat') {
		hint.hintType = 'alamat';
	}
	else if (content == 'apakah') {
		hint.hintText = ['Ya','Tidak','Mungkin'];
	}
	else if (content == 'umur') {
		hint.hintType = 'umur';
	}
	else if (content == 'goldar') {
		hint.hintText = ['A','B','AB','O'];
	}
	else if (content == 'kabar') {
		hint.hintText = ['Baik','Kurang Baik','Saya tidak Nyaman','Tidak Baik','Bisakah kita pergi dari sini'];
	}
	else{
		hint.hintText = ['boleh ulangi?'];
	}			
	activeUser.emit('hint', hint);
	ctx.status = 200;
})

app.use(router.middleware());

server.listen(port);
console.log(`Socket started at ${port}`);
