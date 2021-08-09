import { createRouter, createWebHashHistory } from 'vue-router'
import List from '../views/List.vue'

const routes = [
  {
    path: '/',
    name: 'List',
    component: List
  },
  {
    path: '/add',
    name: 'Add',
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Add.vue'),
  },
  {
    path: '/edit',
    name: 'Edit',
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Edit.vue'),
  },
  {
    path: '/detail',
    name: 'Detail',
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Detail.vue'),
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
