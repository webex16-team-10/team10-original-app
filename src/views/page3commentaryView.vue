<template>
  <title>ページ3 解説</title>
  <h1>mousemoveについて</h1>
  <h2>ページ上でマウスを動かすと、 mousemove イベントが行われます。</h2>
  <button v-on:click="page4">次へ</button>
</template>
<script>
export default {
  methods: {
    page4() {
      this.$router.push("/page4")
    },
  },
}
</script>
