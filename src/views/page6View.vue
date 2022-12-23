<template>
  <div class="allcontainer">
    <div class="maincontainer">
      <title>Question5</title>
      <h1 class="write1">空欄に対応した選択肢を当てはめろ</h1>
      <img src="@/assets/testimage.png" width="730" height="370" />

      <section class="app_section">
        <draggable
          class="item_Area"
          v-model="items"
          item-key="no"
          tag="div"
          group="ITEMS"
        >
          <template #item="{ element }">
            <div class="drag_el">{{ element.title }}</div>
          </template>
        </draggable>

        <div class="answer_button">
          <button @click="answer()" class="btn btn-danger">回答</button>
        </div>
      </section>

      <section class="finalAnswer_section">
        <div class="finalAnswer">
          <p>{{ finalAnswer }}</p>
        </div>
        <div class="next_div">
          <button
            class="btn btn-warning nextPage_btn"
            @click="nextPageBtn()"
            v-if="nextPage"
          >
            解説
          </button>
        </div>
      </section>

      <section>
        <div class="answer_zones">
          <div class="answer_section">
            <p class="answer_number">１：</p>
            <draggable
              class="answer_zone"
              v-model="item1"
              item-key="no"
              tag="div"
              group="ITEMS"
            >
              <template #item="{ element }">
                <div class="drog_el">{{ element.title }}</div>
              </template>
            </draggable>
          </div>

          <div class="answer_section">
            <p class="answer_number">２：</p>
            <draggable
              class="answer_zone"
              v-model="item2"
              item-key="no"
              tag="div"
              group="ITEMS"
            >
              <template #item="{ element }">
                <div class="drog_el">{{ element.title }}</div>
              </template>
            </draggable>
          </div>

          <div class="answer_section">
            <p class="answer_number">３：</p>
            <draggable
              class="answer_zone"
              v-model="item3"
              item-key="no"
              tag="div"
              group="ITEMS"
            >
              <template #item="{ element }">
                <div class="drog_el">{{ element.title }}</div>
              </template>
            </draggable>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import draggable from "vuedraggable"
export default {
  components: {
    draggable,
  },
  data() {
    return {
      finalAnswer: "",
      nextPage: false,
      items: [
        { id: 0, title: "head", list: 1 },
        { id: 1, title: "h2", list: 1 },
        { id: 2, title: "const", list: 1 },
      ],
      item1: [],
      item2: [],
      item3: [],
    }
  },
  methods: {
    answer() {
      let serach = []
      if (this.item1[0] !== undefined) {
        serach.push(this.item1[0].title)
      }
      if (this.item2[0] !== undefined) {
        serach.push(this.item2[0].title)
      }
      if (this.item3[0] !== undefined) {
        serach.push(this.item3[0].title)
      }

      if (serach[0] === "head" && serach[1] === "h2" && serach[2] === "const") {
        this.finalAnswer = "正解！"
        this.nextPage = true
      } else {
        this.finalAnswer = "ちがう😡"
      }
    },
    nextPageBtn() {
      this.$router.push("/Page6commentary")
    },
  },
}
</script>
<style scoped>
.allcontainer {
  background-image: url(@/assets/page6image.jpg);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
.write1 {
  color: aquamarine;
  text-align: center;
}
.answer_number {
  color: aquamarine;
}
.quiz_section {
  border: 2px solid blue;
  min-height: 200px;
}
.app_section {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.img {
  width: 50%;
  margin: 5px 0 5px 0;
}
.item_Area {
  border: 2px solid rgb(255, 186, 58);
  background-color: rgb(255, 216, 145);
  width: 60%;
  max-width: 600px;
  min-height: 50px;
  /* margin: 0 auto; */
  display: flex;
  justify-content: center;
}
.answer_button {
  font-size: 20px;
  font-weight: bold;
  margin-left: 10px;
}
.answer_button:active {
  transform: scale(0.98);
}
.finalAnswer_section {
  display: flex;
  justify-content: center;
  align-items: center;
}
.finalAnswer {
  border: 2px solid rgb(201, 200, 200);
  background-color: rgb(231, 231, 231);
  width: 50%;
  min-height: 50px;
  margin: 7px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.finalAnswer p {
  font-size: 20px;
  font-weight: bold;
}
.next_div {
  margin-left: 7px;
}
.nextPage_btn {
  color: rgb(255, 54, 54);
  font-size: 15px;
  font-weight: bold;
}
.drag_el {
  background-color: #3498db;
  color: white;
  width: 100px;
  height: 100%;
  font-size: 20px;
  font-weight: bold;
  margin: 3px 5px 3px 5px;
  padding: 5px;
}
.drag_el:nth-last-of-type(1) {
  margin-bottom: 0;
}
.answer_zones {
  /* border: 2px solid black; */
  width: 300px;
  max-width: 800px;
  margin: 0 auto;
  margin-bottom: 30px;
}
.answer_zone {
  border: 2px solid rgb(255, 49, 49);
  background-color: rgba(255, 176, 176, 0.918);
  margin: 5px;
  display: flex;
  align-items: center;
  min-height: 50px;
  width: 100%;
}
.answer_section {
  display: flex;
  align-items: center;
}
.answer_number {
  /* border: 2px solid green; */
  font-size: 20px;
  font-weight: bold;
  margin: 3px 5px 3px 5px;
}
.drog_el {
  background-color: #3498db;
  color: white;
  width: 100px;
  height: 100%;
  font-size: 20px;
  font-weight: bold;
  margin: 3px 0;
  margin-left: 20px;
  padding: 5px;
}
.drog_el:nth-last-of-type(1) {
  margin-bottom: 0;
}
</style>
