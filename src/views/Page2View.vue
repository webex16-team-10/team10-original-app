<template>
  <div class="Page2View">
    <title>Question1</title>
    <h1>クイズ</h1>
    <h2>Q. {{ quiz.text }}</h2>
    <img class="quiz-image" src="@/assets/emperor.png" alt="quiz.text" />
    <div class="container">
      <button
        v-for="(choice, i) in quiz.choices"
        v-bind:key="i"
        v-on:click="choiced(choice)"
      >
        {{ choice.text }}
      </button>
    </div>
    <div>{{ feedback }}</div>
    <button v-on:click="linknextpage">解説ページへ</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      feedback: "",
      quiz: {
        text: "この動物の名前は何？",
        choices: [
          {
            text: "マレーヒヨケザル",
            feedback:
              "残念！マレーヒヨケザルは、ムササビのように飛ぶことができる動物です。",
            answer: false,
          },
          {
            text: "アカウアカリ",
            feedback: "残念！アカウアカリは、真っ赤な顔が特徴的な動物です。",
            answer: false,
          },
          {
            text: "エンペラータマリン",
            feedback:
              "正解！エンペラータマリンは、皇帝のような髭が特徴的な動物です。",
            answer: true,
          },
        ],
      },
    }
  },
  methods: {
    choiced(choice) {
      this.feedback = choice.feedback
    },

    linknextpage() {
      this.$router.push("/Page2Commentary")
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
.linknextpage {
  display: flex;
  height: 2em;
  width: 400px;
  padding: 1em;
  justify-content: space-around;
}
</style>
