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
					<input type='text' v-model='modelText' placeholder="Your Message">
					<button @click="sendChat()"><i class="fa fa-paper-plane-o"></i></button>
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
	padding: 1rem 5rem;
	font-size: 2rem;
	display: flex;
	flex-flow: row;
}
.container-input input{
	font-size: 2rem;
}
.message{
	font-family: 'Roboto';
	display: block;
	padding: 1rem 1.5rem;
	font-size: 1.5rem;
	margin: 1.5rem 3rem;
	border-radius: .5rem;
	word-wrap: break-word;
	max-width: 80%;
	box-sizing: border-box;
}
.message.incoming{
	background: lightblue;
}
.message.outgoing{
	background: lightgray;
	align-self: flex-end;
}
input[type="button"] {
	border-radius: 10px;
	background-color: #4CAF50;
	margin: 5px;
	padding:10px;
	border: 0;
	box-shadow: none;
	width: 100%;
}
input[type="button"]:hover, button:hover{
	background-color: black;
	color:white;

}
input[type=text] {
  transition: width 0.4s ease-in-out;
	width: 25%;
}

input[type=text]:focus, input[type=text]:hover {
  width: 100%;
}
.Buttons{
	width: 75%;
	align-content:center;
	display: flex;
	flex-flow: column;
	justify-content: center;
	height: 30%;
}
</style>
