import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import About from "../pages/AboutUs.vue";
import Team from "../pages/Team.vue";
import Faq from "../pages/Faq.vue";
import Booking from "../pages/Booking.vue";
import Error from "../pages/Error.vue";
import Login from "../pages/Login.vue";
import Services from "../pages/Services.vue";
import ServiceDetail from "../pages/ServiceDetail.vue";
import Blog from "../pages/Blog.vue";
import BlogDetails from "../pages/BlogDetails.vue";
import Contact from "../pages/Contact.vue";
import Register from "../pages/Register.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/About",
    name: "About",
    component: About,
  },
  {
    path: "/team",
    name: "Team",
    component: Team,
  },
  {
    path: "/faq",
    name: "Faq",
    component: Faq,
  },
  {
    path: "/booking",
    name: "Booking",
    component: Booking,
  },
  {
    path: "/error-404",
    name: "Error",
    component: Error,
  },
  {
    path: "/form-login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/services",
    name: "Services",
    component: Services,
  },
  {
    path: "/service-detail",
    name: "ServiceDetail",
    component: ServiceDetail,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/blog-detail",
    name: "BlogDetails",
    component: BlogDetails,
  },
  {
    path: "/contactus",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
