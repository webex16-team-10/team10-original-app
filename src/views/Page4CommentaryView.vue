<template>
  <h1>解説</h1>
  <div class="app">
    <img
      class="commentary-image"
      src="@/assets/commentary.png"
      alt="quiz.text"
    />
    <div class="container"></div>
  </div>
</template>

<script></script>

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
</style>
