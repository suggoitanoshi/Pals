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
  body{
    margin:0px;
    display : flex;
    flex-flow : row;
  }
	.container{
		display: flex;
		flex-flow: row;
		width: 100vw;
		height: 100vh;
		box-sizing: border-box;
	}
</style>
