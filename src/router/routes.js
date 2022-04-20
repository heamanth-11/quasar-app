
const routes = [
  {
    path: '/',
    component: () => import('components/HelloWorld')

  },
  {
    path: '/about',
    name: 'about',
    component: () => import('components/About')

  },
  {
    path: '/test',
    component: () => import('components/Testing')

  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
