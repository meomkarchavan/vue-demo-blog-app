import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import ContactTest from '../views/ContactTest.vue'
import Blog from '../views/Blog'
import FindResult from '../views/FindResult.vue'
import EditPost from "../views/EditPost.vue"
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
    component: Blog,
    // children: [
      // {
      //   path: ':id',
      //   name: 'Find',
      //   component: FindResult,

      // },
    //   {
    //     name: 'Edit',
    //     path: 'edit',
    //     component: EditPost,
    //   },
    // ]
  },
  {
    path: '/find/:id',
    name: 'Find',
    component: FindResult,
    props: {post:{}},
    children: [
      {
        path: 'edit',
        name:'Edit',
        component: EditPost
      },]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
