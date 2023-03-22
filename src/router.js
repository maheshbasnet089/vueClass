import Vue from "vue";
import VueRouter from "vue-router";

/* User Dashboard pages */
import HelloWorld from "./components/HelloWorld.vue";
import AboutWorld from './components/AboutWorld.vue'

Vue.use(VueRouter);

const routes = [
  //Public Routes

  {
    path: "/",
    name: "home",
    component: HelloWorld,
  },
  {
    path: "/about",
    name: "about",
    component: AboutWorld,
  }

];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
