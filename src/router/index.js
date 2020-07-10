import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

//懒加载组件
const Home = () => import('../views/home/home')
const Profile = () => import('../views/profile/profile')
const shopCart = () => import('../views/shopCart/shopCart')
const type = () => import('../views/type/type')

const routes = [
  {
    path:'',
    name:'',
    redirect:'/home'
  },
  {
    path:'/home',
    name:'Home',
    component:Home
  },
  {
    path:'/type',
    name:'Type',
    component:type
  },
  {
    path:'/profile',
    name:'profile',
    component:Profile
  },
  {
    path:'/shopCart',
    name:'shopCart',
    component:shopCart
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
