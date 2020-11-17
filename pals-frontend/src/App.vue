<template>
	<div>
		<SideMenu />
		<Chat />
	</div>
</template>

<script>
import SideMenu from './views/SideMenu.vue'
import Chat from './views/Chat'

export default {
  name: 'App',
  components: {
    SideMenu,
    Chat
  }
}
</script>

<style>
  body{
    margin:0px;
    display : flex;
    flex-flow : row;
  }
</style>
