import Vue from "vue";
import Router from "vue-router";
import Home from "../views/pages/Home.vue";
import AboutUS from "../views/pages/AboutUS";
import Layout from "../views/layouts/MainLayout.vue";

Vue.use(Router);

const router = new Router({
    mode: "history",
    linkExactActiveClass: "current menu-active",
    routes: [
        {
            path: "/",
            component: Layout,
            children: [
                {
                    path: "/",
                    name: "Home",
                    component: Home,
                },
                {
                    path: "/aboutus",
                    name: "AboutUS",
                    component: AboutUS,
                },
            ],
        },
    ],
});
export default router;
