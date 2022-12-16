<template>
  <h1>あらすじ</h1>
  <h2>
    我々はついにジャングルの奥地に眠る遺跡への道筋を発見した！
    <p>仕掛けを解き明かし、古代の秘宝を手に入れろ！</p>
    <p><button id="start" v-on:click="page2">挑戦する！</button></p>
  </h2>
</template>
<script>
export default {
  methods: {
    page2() {
      this.$router.push("/page3")
    },
  },
}
</script>
