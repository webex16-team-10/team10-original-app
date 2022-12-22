<template>
  <div class="bg" v-bind:style="pageStyle">
    <div>タイトル</div>
    <div><button id="start" v-on:click="page1">START</button></div>
    <div>
      ABOUT
      <p>謎解き×プログラミング学習</p>
      <p>
        プログラミングで何が出来るのか、実際のコードを見ながら、遊んで学べる
      </p>
      <p>クリック、ドラッグ、入力のみの簡単操作！</p>
    </div>
    <div>
      PASSWORD
      <p>
        <input type="text" class="secret" id="secret" v-model="fusianasan" />
      </p>
      <p><button v-on:click="secretBtn()">認証</button></p>
      <div v-if="secret">
        <p>正解!</p>
        <button v-on:click="gotolastpage">GO</button>
      </div>
    </div>
    <p><img id="A" src="../assets/opna.png" /></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "secret",
      count: "",
      nextpage: true,
      fusianasan: "",
      secret: false,
    }
  },
  methods: {
    page1() {
      this.$router.push("/Page1View")
    },
    secretBtn() {
      if (this.fusianasan === "fusianasan") {
        this.secret = true
      }
    },
    gotolastpage() {
      this.$router.push("/LastPageView")
    },
  },
}
</script>
<style scoped>
.A {
  size: 500px;
}
.bg {
  background-image: url(../assets/798871_s.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  position: "center";
}
</style>
