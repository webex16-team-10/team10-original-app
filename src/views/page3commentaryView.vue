<template>
  <div class="allcontainer">
    <title>ページ3 解説</title>
    <h1 class="text1">mousemoveについて</h1>
    <h2 class="text2">
      ページ上でマウスを動かすと、 mousemove イベントが行われます。
    </h2>
    <button class="btn" v-on:click="page4">次へ</button>
    <img src="@/assets/page3com.png" width="730" height="370" />
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
<style scoped>
.allcontainer {
  background-image: url(@/assets/page3image-2-1.jpg);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
}
.text1 {
  color: aquamarine;
  text-align: center;
}
.text2 {
  color: aquamarine;
  text-align: center;
}
.btn {
  text-align: center;
}
</style>
