import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/courses.vue')
    },
    {
      path: '/courses',
      name: 'courses',
      component: () => import('../views/courses.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/profile.vue')
    },
  ]
})

export default router
