<template>
  <title>ページ5 解説</title>
  <h1>演算子について</h1>
  <h2>
    演算子は、足し算や引き算などのさまざまな処理（演算）を行うためのプログラミングの記号です。
  </h2>
  <h3>
    +は足し算を、-は引き算を、*はかけ算を、/は割り算をするための演算子として機能します。
  </h3>
  <button v-on:click="page6">次へ</button>
</template>
<script>
export default {
  methods: {
    page6() {
      this.$router.push("/")
    },
  },
}
</script>
