import Vue from "vue";
import VueRouter from "vue-router";

import Deposit from "../components/Deposit.vue";

import Cs from "../components/Cs.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/deposit"
  },
  {
    path: "/deposit",

    component: Deposit
  },
  {
    path:'/cs',
    component:Cs
  }

];

const router = new VueRouter({
  routes
});

export default router;
