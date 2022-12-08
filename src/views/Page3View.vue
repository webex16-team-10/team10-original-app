<template>
  <h1>クイズ</h1>
  <div class="app">
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
    <div class="link-next-page">
      <router-link to="/Page4CommentaryView_link">解説ページへ</router-link>
    </div>
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
          },
          {
            text: "アカウアカリ",
            feedback: "残念！アカウアカリは、真っ赤な顔が特徴的な動物です。",
          },
          {
            text: "エンペラータマリン",
            feedback:
              "正解！エンペラータマリンは、皇帝のような髭が特徴的な動物です。",
          },
        ],
      },
    }
  },
  methods: {
    choiced(choice) {
      this.feedback = choice.feedback
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
.link-next-page {
  display: flex;
  height: 2em;
  width: 400px;
  padding: 1em;
  justify-content: space-around;
}
</style>
