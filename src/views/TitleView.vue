<template>
  <div>タイトル</div>
  <div><button id="start" v-on:click="page1">START</button></div>
  <div>
    ABOUT
    <p>謎解き×プログラミング学習</p>
    <p>プログラミングで何が出来るのか、実際のコードを見ながら、遊んで学べる</p>
    <p>クリック、ドラッグ、入力のみの簡単操作！</p>
  </div>
  <div>
    PASSWORD
    <p><input type="text" class="pass-word" id="pass-word" /></p>
    <p><button id="secret">GO</button></p>
  </div>
</template>
<script>
export default {
  methods: {
    page1() {
      this.$router.push("/page1")
    },
  },
}
</script>
