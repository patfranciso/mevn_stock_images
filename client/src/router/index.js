import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Post from '../views/Post.vue'
import About from '../views/About.vue'
import AddPost from '../views/AddPost.vue'
import EditPost from '../views/EditPost.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/add-post',
    name: 'add-post',
    component: AddPost
  }, 
  {
    path: '/edit-post/:id',
    name: 'edit-post',
    component: EditPost
  },
  {
    path: '/post/:id',
    name: 'post',
    component: Post,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
