<template>
  <div class="home">
    <button type="button" class="btn btn-success addButton" @click="addClick">
      +
    </button>
    <UserAllList />
  </div>
</template>

<script>
// @ is an alias to /src
import UserAllList from "@/components/UserAllList.vue";
import router from "../router";

export default {
  name: "Home",
  components: {
    UserAllList,
  },
  methods: {
    addClick: function () {
      console.log("event");
      router.push("/add");
    },
  },
};
</script>
<style>
.addButton {
  margin-left:37vw;
  margin-bottom: 30px;
}
</style>