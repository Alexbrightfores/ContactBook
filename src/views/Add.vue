<template>
  <div class="add-contact">
    <div class="add-contact-block">
      <button class="btn btn-info btn-contact" @click="contactClick"> &#8918;Contacts</button>
      <h1>New Contact</h1>
      <div class="add-form">
        <form class="row g-3">
          <div class="col-md-6 form-input">
            <input
              type="text"
              v-model="firstname"
              class="form-control"
              id="inputEmail4"
              placeholder="First Name"
            />
          </div>
          <div class="col-md-6 form-input">
            <input
              type="text"
              v-model="lastname"
              class="form-control"
              id="inputPassword4"
              placeholder="Last Name"
            />
          </div>
          <div class="col-md-6 form-input">
            <input
              type="email"
              v-model="email"
              class="form-control"
              id="inputAddress"
              placeholder="Email"
            />
          </div>
          <div class="col-md-6 form-input">
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              v-model="phone"
              placeholder="Phone"
            />
          </div>
          <div class="col-12 form-input">
            <input
              type="text"
              class="form-control"
              id="inputAddress2"
              v-model="street"
              placeholder="Street"
            />
          </div>
          <div class="col-md-4 form-input">
            <input type="text" class="form-control" v-model="city" placeholder="City" id="inputCity" />
          </div>
          <div class="col-md-4 form-input">
            <input type="text" class="form-control" v-model="state" placeholder="Province/State" id="inputZip" />
          </div>
          <div class="col-md-4 form-input">
            <input type="text" class="form-control" v-model="postal" placeholder="Postal/Zip" id="inputZip" />
          </div>
          <div class="col-6 form-input">
            <button @click="addClick" class="btn btn-primary">
              Add Contact
            </button>
          </div>
          <div class="col-6 form-input">
            <button class="btn btn-danger"  @click="contactClick">Cancel</button>
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
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      street: '',
      city: '',
      state: '',
      postal: ''
    };
  },
  methods: {
    addClick: function () {
      if (this.firstname !== "" && this.lastname !== "" && this.email !== "") {
        let data = {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          phone: this.phone,
          street: this.street,
          city: this.city,
          state: this.state,
          postal: this.postal
        };
        this.$store.dispatch("createUser", data);
      }
      router.push("/");
    },
    contactClick: function () {
      router.push("/");
    }
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
