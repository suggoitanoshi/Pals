<template>
    <div class="container-chat">
        <div class="container-header">
            <div class="pink"></div>
            <p>{{ partnerName }}</p>
        </div>
        <div class="container-message">
					<div v-if="incoming" class='message incoming'>{{ incoming }}</div>
					<div v-if="outgoing" class='message outgoing'>{{ outgoing }}</div>
				</div>
				<div class='container-input' v-if='useHint'>
					<div class="Buttons">
						<input type='button' v-for="hint in hintText" :key="hint"
						:value='hint' @click="sendChat(hint)">
					</div>
				</div>
				<div v-else class='container-input'>
					<input type='text' v-model='modelText' placeholder="Your Message" @keyup.enter="sendChat()">
					<button class="button-send" @click="sendChat()"><i class="fa fa-paper-plane-o"></i></button>
					<!-- <input type='button' value='Send' @click="sendChat()"> -->
				</div>
    </div>
</template>

<script>
export default{
	name : 'Chat',
	data: function(){
		return {
			socket: null,
			incoming: '',
			outgoing: '',
			modelText: '',
			partnerName: '',
			useHint: this.name == 'Bobby',
			hintText: [],
		}
	},
	props: ['name', 'alamat', 'umur'],
	methods: {
		sendChat: function(msg){
			const message = this.modelText || msg;
			if(!message) return;
			this.socket.emit('message', message);
			if(this.useHint) this.hintText = [];
			else this.modelText = '';
			this.outgoing = message;
		}
	},
	mounted: function(){
		// Hook socket.io
		this.socket = require('socket.io-client')();
		this.socket.on('connect', () => {
			this.socket.emit('auth', this.useHint ? 'A' : 'B');
			this.socket.emit('name', this.name);
		});
		this.socket.on('name', name =>{
			this.partnerName = name;
		});
		this.socket.on('message', msg =>{
			this.incoming = msg;
			this.outgoing = '';
		});
		this.socket.on('hint', hint => {
			console.log(hint);
			if(hint.hintType == 'text')
				this.hintText = hint.hintText
			else if(hint.hintType == 'nama')
				this.hintText = [this.name]
			else if(hint.hintType == 'alamat')
				this.hintText = [this.alamat]
			else if(hint.hintType == 'umur')
				this.hintText = [`umur saya ${this.umur}`]
		});
	},
	beforeUnmount: function(){
		// Disconnect from chat
		this.socket.disconnect();
		this.socket = null;
	}
}
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
	
    .container-header{
        display : flex;
        flex-flow : row;
        height : 7vw;
        min-height:80px;
        border-bottom : 1px solid #C5C4C4;
        align-items: center;
        justify-items: center;
        
    }

    .pink{
        background-image: url("~@/assets/pink.png");
        --scale: 0.26;
        min-width: calc(200px * var(--scale));
        min-height: calc(200px * var(--scale));
        background-size: contain;
        background-repeat: no-repeat;
        margin-left:40px;
    }

    p{
        font-family:'roboto',sans-serif;
        font-size:35px;
        margin-left:30px;
        color : #565656;
    }

.container-chat{
	width: 100%;
	box-sizing: border-box;
}
.container-message{
	padding: 1rem .3rem;
	display: flex;
	flex-flow: column;
	height: 35%;
	width: 100%;
}
.container-input{
	font-size: 2rem;
	display: flex;
	flex-flow: row;
	align-items:center;
	justify-items:center;
	align-content:center;
	justify-content:center;
	width:90vw;
	height:2rem;
	padding-left:20px;
}
.container-input input{
	outline:none;
	font-size: 20px;
	height:2.3rem;
	padding-left:20px;
	margin-right:5px;
	border-radius:100px;
	border : 1px solid #565656;
	color : #565656;
}
.message{
	font-family: 'Roboto';
	font-weight: 300;
	display: block;
	padding: 1rem 1.5rem;
	font-size: 3rem;
	border-radius: .5rem;
	margin: 1.5rem 3rem;
	word-wrap: break-word;
	max-width: 80%;
	box-sizing: border-box;
}
.message.incoming{
	background: #5587e0;
	align-self: flex-start;
	color:white;
}
.message.outgoing{
	background: #f3f3f3;
	align-self: flex-end;
	color: #565656;
}
input[type="button"] {
	color:#565656;
	background-color: #e5e5e5;
	padding:10px;
	border: 1px;
	border-style: solid;
	border-color: #C5C4C4;
	box-shadow: none;
	width: 100%;
	transition: background-color .1s;
}
input[type="button"]:hover{
	background-color: #a5a4a4;
	color:white;
}


input[type=text] {
  width: 100%;
}
.Buttons{
	width: 70vw;
	font-weight: 300;
	align-content:center;
	display: flex;
	flex-flow: column;
	justify-content: center;
	height: 30%;
}

.button-send{
	height:43px;
	width : 43px;
	border-radius:50%;
	border:1px solid #565656;
	outline:none;
}





</style>
