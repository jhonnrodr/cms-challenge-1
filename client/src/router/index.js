import Vue from 'vue'
import VueRouter from 'vue-router'
// Blog
import HomeView from '../views/HomeView.vue'
import PostView from '../views/PostView.vue'
// CMS
import loginView from '../views/cms/auth/LoginView.vue'
import registerView from '../views/cms/auth/RegisterView.vue'
import dashboardView from '../views/cms/IndexView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/post/:id',
    name: 'post',
    component: PostView
  },
  {
    path: '/login',
    name: 'login',
    component: loginView
  },
  {
    path: '/register',
    name: 'register',
    component: registerView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboardView,
    meta: {
      auth: true
    }
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
