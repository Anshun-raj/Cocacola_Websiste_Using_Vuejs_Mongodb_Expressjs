import { createRouter, createWebHistory } from "vue-router";

import Home from "./components/Home";

import Product from "./components/Product";

import About from "./components/About";

import Review from "./components/Review";

import Contact from "./components/Contact";

const routes = [
  {
    name: "Home",
    path: "/",
    component: Home,
  },
  {
    name: "Product",
    path: "/product",
    component: Product,
  },
  {
    name: "About",
    path: "/about",
    component: About,
  },
  {
    name: "Review",
    path: "/review",
    component: Review,
  },
  {
    name: "Contact",
    path: "/contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
