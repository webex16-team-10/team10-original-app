<template>
  <title>Question2</title>
  <h1>緑色を表示せよ</h1>
  <h2>ヒント：回答欄にスペルを入力すると色が変化するぞ</h2>
  <section id="page3">
    <label>解答欄<input type="text" size="40" /></label>
    <button v-on:click="next">回答</button>
    <div v-if="answer === 'mousemove'">
      <h3>正解!</h3>
      <button v-on:click="Page3commentaryView">次へ</button>
    </div>
  </section>
  <div class="app">
    <p>rgba( {{ red }}, {{ green }}, 200, 0.5 )</p>
    <div
      class="palette"
      v-on:mousemove="changeColor"
      v-on:click="pickColor"
      v-bind:style="{ backgroundColor: `rgba(${red}, ${green}, 200, 0.5)` }"
    ></div>

    <div class="colors-container">
      <div class="mini-palette"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      red: 0,
      green: 0,
      colors: [
        // { red: 0, green: 0 }
      ],
      answer: false,
    }
  },
  methods: {
    next: function () {
      this.answer = true
      this.answer = "mousemove"
    },

    changeColor(e) {
      this.red = e.offsetX
      this.green = e.offsetY
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
      this.$router.push("/")
    },
  },
  computed: {
    paletteStyle() {
      return {
        backgroundColor: `rgba(${this.red}, ${this.green}, 200, 0.5)`,
      }
    },
  },
}
</script>
<style>
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
