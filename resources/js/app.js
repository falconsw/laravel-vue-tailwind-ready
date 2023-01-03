import { createApp } from "vue";
import App from './components/App.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    // { path: '/foo', component: Foo },
    // { path: '/bar', component: Bar }
]

const router = new createRouter({
    history: createWebHistory(),
    routes // short for `routes: routes`
})

const app = createApp(App);
app.use(router).mount("#app");

export default app;
