<template>
		<div class="container-menu">
				<div class="profpic"></div>
				<p class="name">{{ name }}</p>
				<router-link to="/" class='chat-room route-button'>Chat room</router-link>
				<router-link to="/Settings" class='settings route-button'>Settings</router-link>
		</div>
</template>

<script>
		export default{
				name : 'SideMenu',
				props: ['name']
		}
</script>

<style scoped>
		@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
		.container-menu{
				display : flex;
				flex-flow : column;
				align-items: center;
				justify-items: center;
				height : 100vh;
				width : 30vw;
				min-width:300px;
				padding : none;
				background-color : #2053AF;
				text-align : center;
		}
		.name{
				font-family : 'Roboto',sans-serif;
				color:#ffffff;
				font-size:40px;
				margin:30px 0px 30px 0px;
		}
		.profpic{
				background-image: url("~@/assets/blue.png");
				--scale: 0.35;
				min-width: calc(504px * var(--scale));
				min-height: calc(504px * var(--scale));
				background-size: contain;
				background-repeat: no-repeat;
				margin-top: 50px;
		}
		.route-button{
				background-color:#ffffff;
				font-size:24px;
				border-radius:8px;
				margin-bottom : 20px;
				width : 250px;
				padding-top:20px;
				padding-bottom:20px;
				text-align:center;
				font-family:'Roboto',sans-serif;
				color : #2053AF;
		}

		.link {
				text-decoration:none;
		}

		.link:visited{
			color:#2053AF;
		}

</style>
