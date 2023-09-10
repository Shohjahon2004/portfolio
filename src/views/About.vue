<template>
    <main class="main">
        <Upcoming/>
    </main>
</template>

<script setup>
import Upcoming from '../components/Upcoming/Upcoming.vue'
import { upcoming } from '@/stores/upcoming'
import { computed,ref } from 'vue'


const upcomingStore = upcoming()
upcomingStore.getUpcoming()



</script>