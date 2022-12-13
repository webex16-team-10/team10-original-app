<template>
  <title>ページ4 解説</title>
  <h1>＜a＞について</h1>
  <h2>
    ＜a
    href="https:~"＞リンク＜/a＞（＜＞は実際は半角）と入力することで、外部サイトへ移動できるりんくをつくれるよ。
  </h2>
  <button v-on:click="page5">次へ</button>
</template>
<script>
export default {
  methods: {
    page5() {
      this.$router.push("/page5")
    },
  },
}
</script>
