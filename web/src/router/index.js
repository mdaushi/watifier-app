import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DevicesView from '../views/DevicesView.vue'
import MessagesTextView from '../views/MessagesTextView.vue'
import MessagesImageView from '../views/MessagesImageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/devices',
      name: 'devices',
      component: DevicesView
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import("../views/AboutView.vue"),
    },
    {
      path: '/messages/text',
      name: 'messageText',
      component: MessagesTextView
    },
    {
      path: '/messages/image',
      name: 'messageImage',
      component: MessagesImageView
    }
  ]
})

export default router
