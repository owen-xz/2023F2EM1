<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Banner from './components/Banner.vue'
import Advocate from './components/Advocate.vue'
import Events from './components/Events.vue'
import PolicyIssues from './components/PolicyIssues.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

import AOS from 'aos'
import { onMounted } from 'vue'

onMounted(() => {
  AOS.init({
    duration: 1000,
    offset: 200,
  })
})
</script>

<template>
  <Navbar />
  <Banner />
  <Advocate />
  <Events />
  <PolicyIssues />
  <Contact />
  <Footer />
</template>

<style scoped></style>
