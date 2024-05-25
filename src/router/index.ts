import { createRouter, createWebHistory } from 'vue-router'
import DummyPage from '@/pages/DummyPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/dummy',
      name: 'dummy',
      component: DummyPage
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
