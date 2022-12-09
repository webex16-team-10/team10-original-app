<template>
  <title>Question4</title>
  <h1>以下のボタンを使って、 255を表示せよ</h1>
  <h2>*数字を出せたら、それをクリックしてね</h2>
  <div id="count">
    <span v-on:click="keynumber" v-if="answer == '255'">
      <h2>正解!</h2>
      <button v-on:click="Page5commentaryView">次へ</button> </span
    >{{ num }}
  </div>
  <button v-on:click="plusbutton">+1</button>
  <button v-on:click="multipliedbutton">×2</button>
  <button v-on:click="minusbutton">-3</button>
  <button v-on:click="resetbutton">リセット</button>
</template>
<script>
export default {
  data() {
    return {
      name: "count",
      num: 0,
      answer: false,
    }
  },
  methods: {
    keynumber: function () {
      this.answer = true
      this.answer = "255"
    },
    plusbutton: function () {
      this.num = this.num + 1
    },
    multipliedbutton: function () {
      this.num = this.num * 2
    },
    minusbutton: function () {
      this.num = this.num - 3
    },
    resetbutton: function () {
      this.num = this.num * 0
    },
    Page5commentaryView() {
      this.$router.push("/")
    },
  },
}
</script>
