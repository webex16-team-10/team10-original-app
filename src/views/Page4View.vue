<template>
  <h1>
    クロスワードを完成させよう
    <p>回答欄には、A,B,Cの順に答えをひらがなで入力してね</p>
  </h1>
  <h2>
    <p><img alt="Vue logo" src="../assets/crossword1.png" /></p>
    <p>ヒント</p>
    <p>
      縦の1：山形県で収穫量日本1位の果物
      <a
        href="https://www.pref.yamagata.jp/020026/kensei/shoukai/yamagataken/best1.html"
        >ヒント</a
      >
    </p>
    <p>
      縦の2：兵庫県の南西の都市。忠臣蔵にゆかりある土地でもあります
      <a href="https://www.city.ako.lg.jp/">ヒント</a>
    </p>
    <p>
      横の1：相手を土俵際に詰めながら、勢い余って自分の足を先に土俵外へ出してしまい、相手に勝ち星を与えてしまう事
      <a href="https://www.sumo.or.jp/Kimarite/detail/83">ヒント</a>
    </p>
    <p>
      横の2：北斗四兄弟の長兄にして世紀末覇者拳王。
      <a href="https://dic.pixiv.net/a/%E3%83%A9%E3%82%AA%E3%82%A6">ヒント</a>
    </p>
    <p>
      横の3：1955創刊の集英社の少女漫画雑誌
      <a
        href="https://www.bing.com/ck/a?!&&p=873ff6d2c2803f99JmltdHM9MTY3MDU0NDAwMCZpZ3VpZD0wZWZmZGUyMS1jNWIzLTY4NDUtMzk4OS1jZjAyYzRjMDY5YzImaW5zaWQ9NTE2NA&ptn=3&hsh=3&fclid=0effde21-c5b3-6845-3989-cf02c4c069c2&psq=%e3%82%8a%e3%81%bc%e3%82%93%e3%80%80%e5%87%ba%e7%89%88%e7%a4%be&u=a1aHR0cDovL3JpYm9uLnNodWVpc2hhLmNvLmpwLw&ntb=1"
        >ヒント</a
      >
    </p>
    <p>
      回答欄<input type="text" class="answer1" id="answer1" v-model="bokoku" />
      <button v-on:click="answerBtn()">回答</button>
    </p>
    <div v-if="answer1">
      <p>正解!</p>
      <button v-on:click="Page4commentaryView">次へ</button>
    </div>
  </h2>
</template>
<script>
export default {
  data() {
    return {
      name: "answer1",
      count: "",
      nextpage: true,
      bokoku: "",
      answer1: false,
    }
  },
  methods: {
    answerBtn() {
      if (this.bokoku === "bokoku") {
        this.answer1 = true
      }
    },
    Page4commentaryView() {
      this.$router.push("/page4commentary")
    },
  },
}
</script>
