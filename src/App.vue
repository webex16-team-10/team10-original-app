<template>
  <nav>
    <router-link to="/title">Title</router-link> |
    <router-link to="/page1View">Page1</router-link> |
    <router-link to="/Page2View">| Page2</router-link>|
    <router-link to="/page3View">Page3</router-link> |
    <router-link to="/page4View">Page4</router-link> |
    <router-link to="/page5View">page5</router-link>|
    <router-link to="/page6View">page6View</router-link>
    <router-link to="/LastPageView">lastpage</router-link>|
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
