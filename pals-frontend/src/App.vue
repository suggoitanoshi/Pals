<template>
	<div class='container'>
		<router-view />
	</div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
  body{
    margin:0px;
    display : flex;
    flex-flow : row;
	font-family : 'Roboto',sans-serif;
	font-weight: 300;
  }
	.container{
		overflow:hidden;
		display: flex;
		flex-flow: row;
		width: 100vw;
		height: 100vh;
		box-sizing: border-box;
	}
</style>
