<template>
  <navbar />
  <router-view></router-view>
</template>

<script>
import Navbar from './components/Navbar.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  name: 'Diego-Portfolio',
  components: {
    Navbar
  },
  mounted: function () {
    AOS.init();
    document.title = 'Diego Ribeiro | Web Developer'
  }
}
</script>

<style>
#app {
  font-family: 'Josefin Sans', sans-serif;
}
</style>
