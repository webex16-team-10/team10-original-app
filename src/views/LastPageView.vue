<template>
  <div class="lastpageview">
    <h1>Congratulations!!!</h1>
    <div class="page">
      <h1>もう一度学びたいページに飛べるよ</h1>
      <div class="pagelink">
        <button v-on:click="linkpage2">Quiz</button>
        <button v-on:click="linkpage3">パレット</button>
        <button v-on:click="linkpage4">クロスワード</button>
        <button v-on:click="linkpage5">電卓</button>
        <button v-on:click="linkpage6">Drag-and-Drop</button>
      </div>
    </div>
    <div class="site">
      <p>実際にコードを書いてみよう</p>
      <a href="https://prog-8.com/"> おすすめリンク </a>
    </div>
    <div>password:スタート画面からこのページに移動できます :fusianasan</div>
    <div class="start">
      <button v-on:click="linktitle">スタート画面に戻る</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    linktitle() {
      this.$router.push("/")
    },
    linkpage2() {
      this.$router.push("/Page2View")
    },
    linkpage3() {
      this.$router.push("/Page3View")
    },
    linkpage4() {
      this.$router.push("/Page4View")
    },
    linkpage5() {
      this.$router.push("/Page5View")
    },
    linkpage6() {
      this.$router.push("/Page6View")
    },
    linkpage1() {
      this.$router.push("/Page1View")
    },
  },
}
</script>

<style scoped>
.lastpageview {
  background-image: url(@/assets/宝箱.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-color: rgba(255, 255, 255, 0.5);
  background-blend-mode: lighten;
  color: yellow;
  text-align: justify;
  text-justify: auto;
  float: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Sacramento", "Segoe UI", Tahoma, Verdana, sans-serif;
}

.page {
  color: black;
  text-align: justify;
  text-justify: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Sacramento", "Segoe UI", Tahoma, Verdana, sans-serif;
}
.pagelink {
  color: black;
  display: flex;
  height: 2em;
  width: 900px;
  padding: 1em;
  justify-content: space-around;
}

.site {
  color: black;
  text-align: justify;
  text-justify: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-family: "Sacramento", "Segoe UI", Tahoma, Verdana, sans-serif;
}
.start {
  color: black;
  display: flex;
  height: 2em;
  width: 900px;
  padding: 2em;
  justify-content: space-around;
}
</style>
