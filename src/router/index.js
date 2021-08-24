import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import ContactTest from '../views/ContactTest.vue'
import Blog from '../views/Blog'
import FindResult from '../views/FindResult.vue'
import Post from "../views/Post.vue"
import EditPost from "../views/EditPost.vue"
import ViewPost from "../views/ViewPost.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/contact-test',
    name: 'contact-test',
    component: ContactTest
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/find/:id',
    name: 'Find',
    component: FindResult,
    props: {PostList:[]}
  },
  {
    path: '/post/:id',
    component: Post,
    children: [
      {
        path: 'edit',
        component: EditPost
      },
      {
        path: 'view',
        component: ViewPost
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
