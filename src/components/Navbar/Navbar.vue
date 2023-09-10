<template>
    <div>
        <nav class="nav">
            <div class="container">
                <div class="nav__box">
                    <router-link to="" class="logo">
                        PORTFOLIO
                    </router-link>
                    <ul class="nav__box-list">
                        <li v-for="page in pages" :key="page.name">
                            <router-link :to="page.url" class="nav__box-list-link">
                                {{ page.name }}
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script setup>
import './Navbar.scss'
import { ref } from 'vue'

const pages = ref([
    {name: 'about me', url:'/'},
    {name: 'my portfolio', url:'/myportfolio'},
    {name: 'Contacts', url:'/contacts'},
])

</script>
