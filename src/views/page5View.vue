<template>
  <div class="maincontainer">
    <title>Question4</title>
    <h1 class="text1">以下のボタンを使って、 255を表示せよ</h1>
    <h2 class="text2">*指定した数字が出たら次に進めるよ</h2>
    <div id="count" class="count">
      <span class="text3" v-if="answer">
        <h2>正解!</h2>
        <button v-on:click="Page5commentaryView">次へ</button> </span
      >{{ num }}
    </div>
    <button v-on:click="plusbutton">+1</button>
    <button v-on:click="multipliedbutton">×2</button>
    <button v-on:click="minusbutton">-3</button>
    <button v-on:click="resetbutton">リセット</button>
  </div>
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
      this.$router.push("/Page5commentary")
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
  width: 1200px;
  height: 700px;
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
.num {
  color: aquamarine;
}
.count {
  color: aquamarine;
}
</style>
