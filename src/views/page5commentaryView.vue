<template>
  <div class="maincontainer">
    <title>ページ5 解説</title>
    <h1 class="text1">演算子について</h1>
    <h2 class="text2">
      演算子は、足し算や引き算などのさまざまな処理（演算）を行うための<br />プログラミングの記号です。
    </h2>
    <h3 class="text3">
      +は足し算を、-は引き算を、*はかけ算を、/は割り算をするための演算子として機能します。
    </h3>
    <button v-on:click="page6">次へ</button>
    <img src="@/assets/page5com.png" width="730" height="370" />
  </div>
</template>
<script>
export default {
  methods: {
    page6() {
      this.$router.push("/Page6View")
    },
  },
}
</script>

<style scoped>
.maincontainer {
  background-image: url(@/assets/page5image\(kari\).jpg);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
.text1 {
  color: aquamarine;
}
.text2 {
  color: aquamarine;
}
.text3 {
  color: aquamarine;
}
</style>
