<template>
  <form class="row g-3">
    <div class="col-md-4"></div>
    <div class="col-md-4">
      <label for="inputFirst" class="form-label">first name</label>
      <input
        type="text"
        v-model="firstname"
        class="form-control"
        id="inputFirst"
      />
    </div>
    <div class="col-md-4"></div>
    <div class="col-md-4"></div>
    <div class="col-md-4">
      <label for="inputLast" class="form-label">last name</label>
      <input
        type="text"
        v-model="lastname"
        class="form-control"
        id="inputLast"
      />
    </div>
    <div class="col-md-4"></div>
    <div class="col-md-4"></div>
    <div class="col-md-4">
      <label for="inputEmail4" class="form-label">Email</label>
      <input
        type="email"
        v-model="email"
        class="form-control"
        id="inputEmail4"
      />
    </div>
    <div class="col-md-4"></div>
    <div class="col-12">
      <button class="btn btn-success" @click="addClick">Add</button>
    </div>
  </form>
</template>
<script>
// @ is an alias to /src
import router from "../router";

export default {
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
    };
  },
  methods: {
    addClick: function () {
      if (this.firstname !== "" && this.lastname !== "" && this.email !== "") {
        let data = {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          status: Math.random() < 0.5,
        };
        this.$store.dispatch("createUser", data);
      }
      router.push("/");
    },
  },
};
</script>
