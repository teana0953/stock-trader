import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Portfolio from '../views/portfolio/Portfolio.vue';
import Stocks from '../views/stocks/Stocks.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/portfolio',
        name: 'Portfolio',
        component: Portfolio,
    },
    {
        path: '/stocks',
        name: 'Stocks',
        component: Stocks,
    },
];

const router = new VueRouter({
    // mode: 'history',
    routes,
});

export default router;
