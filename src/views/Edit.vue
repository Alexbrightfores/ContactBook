<template>
  <div class="add-contact">
    <div class="add-contact-block">
      <button class="btn btn-info btn-contact" @click="contactClick">&#8918;Contacts</button>
      <h1>Edit Contact</h1>
      <div class="add-form">
        <form class="row g-3">
          <div class="col-md-6 form-input">
            <input
              type="text"
              :value="firstname"
              class="form-control"
              id="inputEmail4"
              @change="changefirst"
              placeholder="First Name"
            />
          </div>
          <div class="col-md-6 form-input">
            <input
              type="text"
              :value="lastname"
              class="form-control"
              id="inputPassword4"
              @change="changelast"
              placeholder="Last Name"
            />
          </div>
          <div class="col-md-6 form-input">
            <input
              type="email"
              :value="email"
              class="form-control"
              id="inputAddress"
              @change="changeemail"
              placeholder="Email"
            />
          </div>
          <div class="col-md-6 form-input">
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              :value="phone"
              @change="changephone"
              placeholder="Phone"
            />
          </div>
          <div class="col-12 form-input">
            <input
              type="text"
              class="form-control"
              id="inputAddress2"
              :value="street"
              @change="changestreet"
              placeholder="Street"
            />
          </div>
          <div class="col-md-4 form-input">
            <input
              type="text"
              class="form-control"
              :value="city"
              @change="changecity"
              placeholder="City"
              id="inputCity"
            />
          </div>
          <div class="col-md-4 form-input">
            <input
              type="text"
              class="form-control"
              :value="state"
              @change="changestate"
              placeholder="Province/State"
              id="inputZip"
            />
          </div>
          <div class="col-md-4 form-input">
            <input
              type="text"
              class="form-control"
              :value="postal"
              @change="changepostal"
              placeholder="Postal/Zip"
              id="inputZip"
            />
          </div>
          <div class="col-6 form-input">
            <button @click="editClick" class="btn btn-primary">
              Edit
            </button>
          </div>
          <div class="col-6 form-input">
            <button class="btn btn-danger" @click="deleteClick">Delete</button>
          </div>
        </form>
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
      console.log(this.firstname, this.lastname, this.email);
      let data = {
        id: this.$store.state.selectId,
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        phone: this.phone,
        street: this.street,
        city: this.city,
        state: this.state,
        postal: this.postal,
      };
      this.$store.dispatch("editUser", data);
      router.push("/");
    },
    deleteClick: function () {
      console.log("event");
      this.$store.dispatch("deleteUser", this.$store.state.selectId);
      router.push("/");
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
    changephone: function (event) {
      this.phone = event.currentTarget.value;
    },
    changestreet: function (event) {
      this.street = event.currentTarget.value;
    },
    changecity: function (event) {
      this.city = event.currentTarget.value;
    },
    changestate: function (event) {
      this.state = event.currentTarget.value;
    },
    changepostal: function (event) {
      this.postal = event.currentTarget.value;
    },
  },
};
</script>
<style scoped>
.add-form {
  border: black 1px;
  width: 60vw;
}
.add-contact {
  display: flex;
  justify-content: center;
}
.add-contact-block {
  display: flex;
  flex-direction: column;
}
.form-input {
  margin-top: 30px !important;
}
.btn-contact {
  width: 100px;
}
</style>
