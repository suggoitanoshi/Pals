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
	client.on('auth', data => data == 'A' ? activeUser = client : activePartner = client);
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
    io.emit('message', msg);
  });
  client.on('disconnect', () => {
    io.emit('free');
  });
});

router.post('/', body(), ctx => {
	console.log(ctx.request.body);
	const body = ctx.request.body;
	const content = body.messages[0].content;
	let hint = [];
	if(content == 'nama'){
		hint = ['Nama Pengguna'];
	}
	else if(content == 'makan'){
		hint = ['Nasi goreng', 'Mie goreng', 'Kentang goreng'];
	}
	else{
		hint = ['Boleh ulangi?'];
	}
	console.log(activeUser.id);
	activeUser.emit('hint', hint);
	ctx.status = 200;
})

app.use(router.middleware());

server.listen(port);
console.log(`Socket started at ${port}`);
