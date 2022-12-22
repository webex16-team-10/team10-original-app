<template>
  <div class="allcontainer">
    <title>ページ3 解説</title>
    <h1 class="text1">mousemoveについて</h1>
    <h2 class="text2">
      ページ上でマウスを動かすと、 mousemove イベントが行われます。
    </h2>
    <button v-on:click="page4">次へ</button>
  </div>
</template>
<script>
export default {
  methods: {
    page4() {
      this.$router.push("/page4View")
    },
  },
}
</script>
<style>
.allcontainer {
  background-image: url(@/assets/page3image-2-1.jpg);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 968px;
  height: 500px;
}
.text1 {
  color: aquamarine;
}
.text2 {
  color: aquamarine;
}
</style>
