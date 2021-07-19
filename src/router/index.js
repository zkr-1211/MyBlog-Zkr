import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import My from '../views/My/My.vue'
import Loading from '../views/Loading/Loading.vue'
import Lavoratory from '../views/Lavoratory/Lavoratory.vue'
import Game from '../views/Game/Game.vue'
import Movie from '../views/Movie/Movie.vue'
import Planet from '../views/Planet/Planet.vue'
import SkillArticle from '../views/SkillArticle/SkillArticle.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Loading',
    component: Loading
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/my',
    name: 'My',
    component: My
  },
  {
    path: '/lavoratory',
    name: 'Lavoratory',
    component: Lavoratory
  },
  // {
  //   path: '/game',
  //   name: 'Game',
  //   component: Game
  // },
  // {
  //   path: '/movie',
  //   name: 'Movie',
  //   component: Movie
  // },
  // {
  //   path: '/planet',
  //   name: 'Planet',
  //   component: Planet
  // },
  {
    path: '/skillarticle',
    name: 'SkillArticle',
    component: SkillArticle
  },

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
