import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/login/login.vue'
import Weather from '../components/home/Weather.vue'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login
    },
    {
      path: "/weather",
      name: "Weather",
      component: Weather
    }
  ]
});
