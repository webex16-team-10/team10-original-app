<template>
  <title>Question2</title>
  <h1>緑色を表示せよ</h1>
  <h2>ヒント：回答欄にスペルを入力すると色が変化するぞ</h2>
  <label>解答欄<input type="text" size="40" /></label>
  <button>回答</button>
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
    }
  },
  methods: {
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
