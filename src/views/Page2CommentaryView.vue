<template>
  <div class="Page2Commentary">
    <title>Quiz解説</title>
    <h1>Onclickについて</h1>
    <h2>ボタンをクリックすると指定した文章が表示されます。</h2>
    <button v-on:click="page3">次へ</button>
    >
  </div>
</template>

<script>
export default {
  methods: {
    page3() {
      this.$router.push("/Page3View")
    },
  },
}
</script>

<style>
.app {
  float: left;
  width: 100%;
  flex-direction: column;
  align-items: center;
  font-family: "Segoe UI", Tahoma, Verdana, sans-serif;
}

.quiz-image {
  height: 300px;
  width: 300px;
  object-fit: contain;
}

.container {
  display: flex;
  height: 2em;
  width: 400px;
  padding: 1em;
  justify-content: space-around;
}
</style>
