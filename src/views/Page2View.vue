<template>
  <div class="Page2View">
    <div class="contents">
      <title>Question1</title>
      <h1>クイズ</h1>
      <h2>Q. {{ quiz.text }}</h2>
      <img class="quiz-image" src="@/assets/ホトケノザ.png" alt="quiz.text" />
      <div class="container">
        <button
          v-for="(choice, i) in quiz.choices"
          v-bind:key="i"
          v-on:click="choiced(choice)"
        >
          {{ choice.text }}
        </button>
      </div>
      <div class="feedback">{{ feedback }}</div>
      <button v-if="nextpage" v-on:click="linknextpage">解説ページへ</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nextpage: false,
      feedback: "",
      quiz: {
        text: "道に植物が生えているぞ。この植物の名前は何？",
        choices: [
          {
            text: "ヒメオドリコソウ",
            feedback: "残念！ヒメオドリコソウは小さな唇型の紅紫色の花です。",
            answer: false,
          },
          {
            text: "キツリフネ",
            feedback: "残念！黄色い花で、法螺貝のような形です。",
            answer: false,
          },
          {
            text: "ホトケノザ",
            feedback: "正解！鳥の嘴のような形の花です。",
            answer: true,
          },
        ],
      },
    }
  },
  methods: {
    choiced(choice) {
      this.feedback = choice.feedback
      if (choice.answer) {
        this.nextpage = true
      }
    },

    linknextpage() {
      this.$router.push("/Page2commentary")
    },
  },
}
</script>

<style scoped>
.Page2View {
  background-image: url(@/assets/森１.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-color: rgba(255, 255, 255, 0.5);
  background-blend-mode: lighten;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.contents {
  display: flex;
  color: #800080;
  width: 100%;
  height: 100%;
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
  font-weight: 300;
  height: 2em;
  width: 400px;
  padding: 1em;
  align-items: center;
  justify-content: space-around;
  font-family: "Segoe UI", Tahoma, Verdana, sans-serif;
}
.feedback {
  font-weight: bold;
  font-family: "Segoe UI", Tahoma, Verdana, sans-serif;
}
.linknextpage {
  display: flex;
  height: 2em;
  width: 400px;
  padding: 1em;
  justify-content: space-around;
}
</style>
