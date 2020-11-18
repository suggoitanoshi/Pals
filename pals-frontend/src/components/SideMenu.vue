<template>
		<div class="container-menu">
				<div class="profpic"></div>
				<p class="name">{{ name }}</p>
				<router-link to="/" class='chat-room route-button'>Chat room</router-link>
				<router-link to="/Settings" class='settings route-button'>Settings</router-link>
				<div class="cont-footer"><div class="footer"><div class="img-footer"></div></div></div>
		</div>
</template>

<script>
		export default{
				name : 'SideMenu',
				props: ['name']
		}
</script>

<style scoped>
		.container-menu{
				display : flex;
				flex-flow : column;
				align-items: center;
				justify-items: center;
				height : 100vh;
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
				text-decoration:none;
		}
		.footer{
			display:flex;
			outline: 1px solid #C5C4C4;
			width:100%;
			height:9vw;
			background-color:#ffffff;
			outline-offset: -1px;
			align-items:center;
			justify-items:center;
			align-content:center;
			justify-content:center;
		}
		.cont-footer{
			display:flex;
			flex-flow:column;
			height:100%;
			width:100%;
			align-content:flex-end;
			justify-content:flex-end;
		}

		.img-footer{
			background-image: url("./footer.png");
			background-size: contain;
			background-repeat: no-repeat;
			--scale: 0.8;
			min-width: calc(302px * var(--scale));
			min-height: calc(90px * var(--scale));
		}

		.link {
				text-decoration:none;
		}

		.link:visited{
			color:#2053AF;
		}

</style>
