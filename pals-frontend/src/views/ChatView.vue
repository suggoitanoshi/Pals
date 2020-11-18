<template>
	<div class='container'>
		<SideMenu v-if='name=="Bobby"' :name="name"/>
		<Chat :name="name" alamat="Jl. Ganesha no 10" umur="13.5" />
	</div>
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
