import { createRouter, createWebHistory } from 'vue-router'
import BuDrill1 from '@/drills/buf/BuDrill1.vue'
import DummyPage from '../pages/DummyPage.vue'

const router = createRouter({
  history: createWebHistory((import.meta as any).env.VITE_APP_BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: DummyPage
    },
    {
      path: '/drill/:id',
      name: 'drills',
      component: BuDrill1
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/AboutPage.vue')
    }
  ]
})

export default router
