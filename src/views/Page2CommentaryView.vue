<template>
  <div class="Page2Commentary">
    <title>Quiz解説</title>
    <h1>Onclickについて</h1>
    <h2>ボタンをクリックすると指定した文章が表示されます。</h2>
    <img class="commentary-image1" src="@/assets/page2kaisetu.png" />
    <button v-on:click="page3">次へ</button>
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

<style scoped>
.Page2Commentary {
  background-image: url(@/assets/森１.jpg);
  background-size: cover;
  position: "center";
  background-repeat: no-repeat;
  background-color: rgba(255, 255, 255, 0.5);
  background-blend-mode: lighten;
  display: flex;
  color: #800080;
  width: 100%;
  flex-direction: column;
  align-items: center;
  font-family: "Segoe UI", Tahoma, Verdana, sans-serif;
}
.commentary-image1 {
  height: 700px;
  width: 700px;
  object-fit: contain;
  align-items: center;
}
</style>
