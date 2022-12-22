<template>
  <div class="allcontainer">
    <title>Question2</title>
    <h1 class="text1">パスワードを探せ</h1>
    <h2 class="text2">ヒント：(2^4-1)×10</h2>
    <section>
      <input
        type="number"
        placeholder="数字を入力"
        min="0"
        max="255"
        v-model="green"
      />
      <input type="range" min="0" max="1" step="0.1" v-model="alpha" />
    </section>
    <section id="page3">
      <label class="text3">解答欄<input type="text" size="40" /></label>
      <button v-on:click="next">回答</button>
      <div v-if="answer === 'mousemove'">
        <h3 class="text4">正解!</h3>
        <button v-on:click="Page3commentaryView">次へ</button>
      </div>
    </section>
    <div class="app">
      <p class="text5">
        rgba( {{ red }}, {{ green }}, {{ blue }}, {{ alpha }})
      </p>
      <div
        class="palette"
        v-on:mousemove="changeColor"
        v-on:click="pickColor"
        v-bind:style="{ backgroundColor: `rgba(${red}, ${green}, 200, 0.5)` }"
      >
        <p
          v-if="passDisplay"
          v-on:mousemove="changeAlpha"
          v-bind:style="{ color: `rgba(200, 150, 0, ${alphaNum})` }"
        >
          mousemove
        </p>
      </div>

      <div class="colors-container">
        <div class="mini-palette"></div>
      </div>
    </div>
  </div>
</template>

<script>
//import { assertClassPrivateMethod } from '@babel/types'

export default {
  data() {
    return {
      red: 0,
      green: 0,
      blue: 0,
      alpha: 0.5,
      colors: [
        // { red: 0, green: 0 }
      ],
      alphaNum: 0,
      answer: false,
      keyword: false,
    }
  },
  computed: {
    passDisplay() {
      if (this.green === 150) {
        return true
      } else {
        return false
      }
    },
  },
  methods: {
    next: function () {
      this.answer = true
      this.answer = "mousemove"
    },

    changeColor(e) {
      this.red = e.offsetX
      this.blue = e.offsetY
      this.alphaNum = e.offsetY * 0.00392
    },
    changeAlpha(f) {
      this.alphaNum = f.offsetY
    },
    pickColor() {
      const newColor = {
        red: this.red,
        green: this.green,
      }
      this.colors.push(newColor)
    },
    showColor(color) {
      this.red = color.red
      this.green = color.green
    },
    Page3commentaryView() {
      this.$router.push("/Page3commentary")
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
}
.text1 {
  color: aquamarine;
}
.text2 {
  color: aquamarine;
}
.text3 {
  color: rgb(202, 81, 194);
}
.text4 {
  color: aquamarine;
}
.text5 {
  color: rgb(202, 81, 194);
}
.app {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
}
.palette {
  width: 255px;
  height: 255px;
}
</style>
