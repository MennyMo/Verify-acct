import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "about" */ "../views/Home.vue")
  },
  {
    path: "/sign-up",
    name: "Sign Up",
    component: () => import(/* webpackChunkName: "about" */ "../views/SignUp.vue")
  },
  {
    path: "/sign-created-success",
    name: "Successfully Created",
    component: () => import(/* webpackChunkName: "about" */ "../views/AccountCreated.vue")
  },
  {
    path: "/user-login",
    name: "Login",
    component: () => import(/* webpackChunkName: "about" */ "../views/Login.vue")
  },
  {
    path: "/user-verified",
    name: "Verified",
    component: () => import(/* webpackChunkName: "about" */ "../views/Verified.vue")
  },
  {
    path: "/user-bank-verification",
    name: "Verify Bank Account",
    component: () => import(/* webpackChunkName: "about" */ "../views/VerifyBankAccount.vue")
  },
  {
    path: "*",
    name: "NotFound",
    component: () => import(/* webpackChunkName: "notfound" */ "../views/NotFound.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
