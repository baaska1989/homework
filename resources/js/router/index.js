import Vue from "vue";
import Router from "vue-router";
import Home from "../views/pages/Home.vue";
import AboutUS from "../views/pages/AboutUS";
import Layout from "../views/layouts/MainLayout.vue";
import OnlineCourse from "../views/pages/OnlineCourse.vue";
import Contact from "../views/pages/Contact.vue";
import News from "../views/pages/News.vue";
import Advice from "../views/pages/Advice.vue";

Vue.use(Router);

const router = new Router({
    mode: "history",
    linkExactActiveClass: "active current menu-active",
    routes: [{
        path: "/",
        component: Layout,
        children: [{
                path: "/",
                name: "Home",
                component: Home,
            },

        ],
    }, ],
});
export default router;