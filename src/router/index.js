import Vue from "vue";
import VueRouter from "vue-router";
import Cinema from './Cinema';
import Movies from './Movies';
import Mine from './Mine';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Layout",
    component: ()=>import("@/views/Layout"),
    children:[
      Cinema,
      Movies,
      Mine
    ]
  }
  
  
  
];

const router = new VueRouter({
  routes
});

export default router;
