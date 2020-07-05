import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home.vue';
import FAQ from './components/FAQ.vue';
import Login from "./components/Login";
import TicketLayout from "./components/TicketLayout";
import Tickets from "./components/Tickets";
import NewTicket from "./components/NewTicket";

import state from "./state";
import NotFound from "./components/NotFound";

Vue.use(VueRouter);

const routes = [
  {path: '/', name: 'home', component: Home},
  {path: '/faq', name: 'faq', component: FAQ},
  {path: '/login', name: 'login', component: Login, meta: {guest: true}},
  {path: '/tickets', name: 'tickets', component: TicketLayout,
    meta: {private: true}, children: [
      {path: '', name: 'tickets', component: Tickets},
      {path: 'new', name: 'new-ticket', component: NewTicket},
    ]},
  {path: '*', component: NotFound},
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.private) && !state.user) {
    next({
      name: 'login',
      params:{
        wantedRoute: to.fullPath
      }
    })
    return
  }
  if (to.matched.some(r => r.meta.guest) && state.user){
    next({name: 'home'})
    return;
  }
  next()
})

export default  router
