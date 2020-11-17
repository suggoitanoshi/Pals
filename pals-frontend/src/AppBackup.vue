<template>
  <body>
    <SideMenu />
    <Chat />
  </body>
</template>

<script>
import SideMenu from './components/SideMenu.vue'
import Chat from './components/Chat.vue'

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
