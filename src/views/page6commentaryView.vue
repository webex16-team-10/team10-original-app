<template>
  <div class="allcontainer">
    <title>ページ6 解説</title>
    <h1>拡張機能について</h1>
    <h2>
      vscodeは、その汎用性の高さにより、<br />ウェブ上に公開された拡張機能をダウンロードしインストールすることもできる。
    </h2>
    <h3>
      今回はVue.Draggableという拡張機能を使用し、<br />Draggable要素を追加することでドラッグアンドドロップの機能を実装している。
    </h3>
    <button v-on:click="LastPageView">次へ</button>
  </div>
</template>
<script>
export default {
  methods: {
    LastPageView() {
      this.$router.push("/LastPageView")
    },
  },
}
</script>
<style>
.allcontainer {
  background-image: url(@/assets/page6image.jpg);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 700px;
  width: 900px;
}
</style>
