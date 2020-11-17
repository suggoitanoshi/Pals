<template>
	<SideMenu :name="name"/>
	<Chat :name="name"/>
</template>

<script>
import Chat from '@/components/Chat.vue'
import SideMenu from '@/components/SideMenu.vue'
export default {
	name: 'ChatView',
	components: {
		Chat,
		SideMenu
	},
	props: ['name']
}
</script>
