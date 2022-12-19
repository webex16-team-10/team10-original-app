<template>
  <div class="lastpageview">
    <title>Congratulations</title>
    <div class="pagelink">
      <h1>もう一度学びたいページに飛べるよ</h1>
      <button v-on:click="linkpage2">Quiz</button>
      <button v-on:click="linkpage3">パレット</button>
      <button v-on:click="linkpage4">クロスワード</button>
      <button v-on:click="linkpage5">電卓</button>
      <button v-on:click="linkpage6">Drag-and-Drop</button>
    </div>
    <div class="site">
      <p>実際にコードを書いてみよう</p>
      <a
        href="https://www.pref.yamagata.jp/020026/kensei/shoukai/yamagataken/best1.html"
      >
        おすすめリンク
      </a>
    </div>

    <div class="start">
      <button v-on:click="linktitle">スタート画面に戻る</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    linktitle() {
      this.$router.push("/title")
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

<style>
.lastpageview {
  float: left;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  font-family: "Segoe UI", Tahoma, Verdana, sans-serif;
}

.pagelink {
  display: flex;
  height: 2em;
  width: 400px;
  padding: 1em;
  justify-content: space-around;
}
</style>
