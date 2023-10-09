import './assets/main.css'
import Blog from "@/components/Blog.vue";
import About from "@/components/About.vue";
import Contact from "@/components/Contact.vue";
import Home from "@/components/Home.vue";
import Post from "@/components/Post.vue";
import Comments from "@/components/Comments.vue";

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'


const routes = [
    {path:'/', component: Home},
    {path:'/blog', component: Blog},
    {path:'/about', component: About},
    {path:'/contact', component: Contact},
    {path:'/post/:id',component: Post, props:true, children: [
            {path:'comments', component: Comments }
        ]}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
const app = createApp(App)
app.use(router);
app.mount('#app')
