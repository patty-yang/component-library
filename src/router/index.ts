import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/button',
    },
    {
      path: '/button',
      component: () => import('../components/Button/index.vue'),
    },
    {
      path: '/dialog',
      component: () => import('@/components/Dialog/index.vue'),
    },
  ],
  linkActiveClass: 'active',
})

export default router
