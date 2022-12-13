<template>
  <nav>
    <router-link to="/page5View">page5View</router-link>
    <router-link to="/title">Title</router-link> |
    <router-link to="/page3">Page3View</router-link> |
    <router-link to="/page3commentary">Page3commentaryView</router-link> |
    <router-link to="/page4">Page4View</router-link> |
    <router-link to="/page4commentary">Page4commentaryView</router-link> |
    <router-link to="/about">About</router-link>|
    <router-link to="/">Home</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
