<template>
  <form class="row g-3">
    <div class="col-md-12">
      <button
        type="submit"
        class="btn btn-danger custombutton"
        @click="deleteClick"
      >
        Delete
      </button>
    </div>
    <div class="col-md-4"></div>
    <div class="col-md-4">
      <label for="inputFirst" class="form-label">first name</label>
      <input
        type="text"
        class="form-control"
        id="inputFirst"
        @change="changefirst"
        :value="firstname"
      />
    </div>
    <div class="col-md-4"></div>
    <div class="col-md-4"></div>
    <div class="col-md-4">
      <label for="inputLast" class="form-label">last name</label>
      <input
        type="text"
        class="form-control"
        id="inputLast"
        @change="changelast"
        :value="lastname"
      />
    </div>
    <div class="col-md-4"></div>
    <div class="col-md-4"></div>
    <div class="col-md-4">
      <label for="inputEmail4" class="form-label">Email</label>
      <input
        type="email"
        class="form-control"
        id="inputEmail4"
        @change="changeemail"
        :value="email"
      />
    </div>
    <div class="col-md-4"></div>
    <div class="col-12">
      <button type="submit" class="btn btn-primary" @click="editClick">
        Edit
      </button>
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
  mounted() {
    let users = this.$store.state.users;
    users.forEach((element) => {
      if (element.id === this.$store.state.selectId) {
        this.firstname = element.firstname;
        this.lastname = element.lastname;
        this.email = element.email;
      }
    });
  },
  methods: {
    editClick: function () {
      console.log(this.firstname, this.lastname, this.email);
      let data = {
        id: this.$store.state.selectId,
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
      };
      this.$store.dispatch("editUser", data);
      router.push("/");
    },
    changelast: function (event) {
      this.lastname = event.currentTarget.value;
    },
    changefirst: function (event) {
      this.firstname = event.currentTarget.value;
    },
    changeemail: function (event) {
      this.email = event.currentTarget.value;
    },
    deleteClick: function () {
      console.log("event");
      this.$store.dispatch("deleteUser", this.$store.state.selectId);
      router.push("/");
    },
  },
};
</script>
<style scoped>
.custombutton {
  width: 100px;
  margin-left: 300px;
}
</style>
