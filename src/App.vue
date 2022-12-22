<template>
  <header>
    <a href="/"><img src="@/assets/titlerogo.png" /></a>
  </header>
  <div id="app"><router-view /></div>
  <footer>
    <p class="footer-text">© All rights reserved by Team10.WebEX.</p>
  </footer>
</template>

<style scoped>
.app {
  margin: 0px;
  padding: 0px;
}
header {
  width: 100%;
  height: 119px;
  background-color: #2668d3;
}
footer {
  width: 100%;
  height: 40px;
  text-align: center;
  background-color: #000000;
}
.footer-text {
  color: #fff;
}
</style>
