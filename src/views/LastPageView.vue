<template>
    <div class="lastpageview">
      <title>Congratulations</title>
      <div class="pagelink">
       <h1>もう一度学びたいページに飛べるよ</h1>
       <li><a href="linkpage2">Quiz</a></li>
       <li><a href="linkpage3">パレット</a></li>
       <li><a href="linkpage4">クロスワード</a></li>
       <li><a href="linkpage5">電卓</a></li>
       <li><a href="linkpage6">Drug and Drop</a></li>
      </div>
      <div class="site">
        <p>実際にコードを書いてみよう</p>
        <li><a href="recommendation">おすすめリンク</a></li>
      </div>
      
      <div class="start">
        <button v-on:click="linkpage1">スタート画面に戻る</button>
      </div>

    </div>
  </template>
  
  <script>
    methods: {
      linkpage2() {
        this.$router.push("/Page2View")
      },
      linkpage3() {
        this.$router.push("/Page3View")
      },
      linkpage4() {
        this.$router.push("/Page4View")
      },
      linkpage5() {
        this.$router.push("/Page5View")
      },
      linkpage6() {
        this.$router.push("/Page6View")
      },
      linkpage1() {
        this.$router.push("/Page1View")
      },
    }
  </script>
  
  <style>
  .lastpageview {
    float: left;
    width: 100%;
    flex-direction: column;
    align-items: center;
    font-family: "Segoe UI", Tahoma, Verdana, sans-serif;
  }
  
  .pagelink {
    display: flex;
    height: 2em;
    width: 400px;
    padding: 1em;
    justify-content: space-around;
  }
