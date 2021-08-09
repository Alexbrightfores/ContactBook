<template>
  <div>
    <div class="contact-block">
      <button class="btn btn-info btn-contact1"  @click="contactClick">&#8918;Contacts</button>
      <button class="btn btn-primary btn-edit" @click="editClick">Edit</button>
    </div>
    <div class="main-block">
      <div class="detail-block">
        <table class="table table-bordered table-hover overstyle">
          <tbody>
            <tr>
              <td>
                <h1>{{ firstname }} {{ lastname }}</h1>
              </td>
            </tr>
            <tr>
              <td>
                <h5>email</h5>
                <h5>{{ email }}</h5>
              </td>
            </tr>
            <tr>
              <td>
                <h5>phone</h5>
                <h5>{{ phone }}</h5>
              </td>
            </tr>
            <tr>
              <td>
                <h5>address</h5>
                <h5>{{ street }}</h5>
                <h5>{{ city }}</h5>
                <h5>{{ state }} {{ postal }}</h5>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
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
      phone: "",
      street: "",
      city: "",
      state: "",
      postal: "",
    };
  },
  mounted() {
    let users = this.$store.state.users;
    users.forEach((element) => {
      if (element.id === this.$store.state.selectId) {
        this.firstname = element.firstname;
        this.lastname = element.lastname;
        this.email = element.email;
        this.phone = element.phone;
        this.street = element.street;
        this.city = element.city;
        this.state = element.state;
        this.postal = element.postal;
      }
    });
  },
  methods: {
    editClick: function () {
      router.push("/edit");
    },
    contactClick: function () {
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
.detail-block {
  width: 80% !important;
  display: flex;
}
.contact-block {
  display: flex;
  justify-content: space-around;
  margin: 20px;
}

.main-block {
  display: flex;
  justify-content: center;
}
</style>
