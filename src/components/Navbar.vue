<template>
    <nav id="nav" role="navigation">
      <ul>
          <li tabindex="0"><router-link to="/">home</router-link></li>
          <li tabindex="0"><router-link to="/about">about</router-link></li>
          <li tabindex="0"><router-link to="/work">work</router-link></li>
          <li tabindex="0"><router-link to="/skills">skills</router-link></li>
          <li tabindex="0"><router-link to="/contact">contact</router-link></li>
      </ul>
    </nav>
</template>

<script>

export default {
  name: 'Navbar',
  props: {
  }
}
</script>

<style lang="scss" scoped>

nav {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #597B6A;
  height: 3.5rem;
  ul {
    list-style: none;
    color: white;
    display: flex;
    margin: 0;
    padding: 0;
    z-index: 232;
  }
}

li a {
  width: 100%;
  display: block;
  padding: 1rem;
  font-size: 1.2rem;
}
@media (max-width: 600px) {
li a {
  padding: 0.5rem;
}
}
</style>
