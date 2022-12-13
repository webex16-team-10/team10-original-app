<template>
  <title>Question4</title>
  <h1>以下のボタンを使って、 255を表示せよ</h1>
  <h2>*数字を出せたら、それをクリックしてね</h2>
  <div id="count">
    <span v-if="answer">
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
      count: 0,
      nextpage: true,
    }
  },
  computed: {
    num() {
      let count = this.count
      return count
    },
    answer() {
      if (this.count === 255) {
        return true
      } else {
        return false
      }
    },
  },
  methods: {
    plusbutton: function () {
      this.count += 1
    },
    multipliedbutton: function () {
      this.count *= 2
    },
    minusbutton: function () {
      this.count -= 3
    },
    resetbutton: function () {
      this.count *= 0
    },
    Page5commentaryView() {
      this.$router.push("/")
    },
  },
}
</script>
