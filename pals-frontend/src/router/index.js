import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ChatView from '../views/ChatView.vue'
import SettingView from '../views/SettingsView'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
	{
		path: '/chat/:name',
		name: 'Chat',
		component: ChatView,
		props: true
	},
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path : '/settings',
    name : 'Settings',
    component: SettingView,
    props:{name:"Bobby"}
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
