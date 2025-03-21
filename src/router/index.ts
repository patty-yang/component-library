import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/button'
    },
    {
      path: '/icon',
      component: () => import('@/views/Icon.vue')
    },
    {
      path: '/button',
      component: () => import('@/views/Button.vue')
    },
    {
      path: '/dialog',
      component: () => import('@/views/Dialog.vue')
    },
    {
      path: '/collapse',
      component: () => import('@/views/Collapse.vue')
    },
    {
      path: '/tooltip',
      component: () => import('@/views/Tooltip.vue')
    }
  ],
  linkActiveClass: 'active'
})

export default router
