import { createRouter, createWebHistory } from 'vue-router'
import About from '@/views/About.vue'
import Portfolio from '@/views/portfolio.vue'
import Contacts from '@/views/Contacts.vue'
import axios from 'axios';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "about me", component: About },
    { path: "/myportfolio", name: "portfolio", component: Portfolio },
    { path: "/contacts", name: "contactspage",   component: Contacts },
  ],
});

export default router
