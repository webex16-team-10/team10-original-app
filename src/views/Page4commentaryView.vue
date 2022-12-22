<template>
  <div class="bg" v-bind:style="pageStyle">
    <title class="B">ページ4 解説</title>
    <h1 class="B">＜a＞について</h1>
    <h2 class="B">
      ＜a
      href="https:~"＞リンク＜/a＞（＜＞は実際は半角）と入力することで、外部サイトへ移動できるリンクをつくれるよ。
    </h2>
    <div id="C">
      <img id="D" src="../assets/page4kaisetu3.png" />
    </div>
    <button v-on:click="page5">次へ</button>
  </div>
</template>

<script>
export default {
  methods: {
    page5() {
      this.$router.push("/Page5View")
    },
  },
}
</script>
<style scoped>
.C {
  height: 500px;
}
.D {
  height: 100%;
}

.B {
  color: #fe9a2e;
}
.bg {
  background-image: url(../assets/IMG_5914.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  position: "center";
}
</style>
