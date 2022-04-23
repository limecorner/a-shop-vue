import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductCheckView from '../views/ProductCheckView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: ProductCheckView
  },


]

const router = new VueRouter({
  routes
})

export default router
