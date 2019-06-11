<template>
  <div id="app">
    <div>冲啊，手榴弹扔了{{$store.state.count}}个</div>
    <div>炸死了{{$store.getters.killCount}}个柜子</div>
    <button @click="add">扔一个</button>
    <button @click="addAsync">蓄力扔俩</button>
  </div>
</template>
<script>
export default {
  name: "app",
  created() {
    console.log(this.$store);
  },
  methods: {
    add() {
      console.log("add");
      this.$store.commit("increment");
    },
    addAsync() {
      this.$store.dispatch("incrementAsync");
    }
  }
};
</script>
