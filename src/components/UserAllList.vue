<template>
  <div class="list">
    <table class="table table-bordered table-hover overstyle">
      <tbody>
        <h1>Contacts</h1>
        <tr class="search">
          <input
            class="form-control"
            list="datalistOptions"
            id="exampleDataList"
            placeholder="Type to search..."
            @change="search"
          />
        </tr>
        <tr v-for="(userlist, index) in users" :key="index">
          <td @click="detailClick(userlist)">
            <h1>{{ userlist.firstname }} {{ userlist.lastname }}</h1>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import router from "../router";
export default {
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("fetchUsers");
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
  },
  methods: {
    detailClick: function (user) {
      console.log(user);
      this.$store.commit("setSelectId", user.id);
      router.push("/detail");
    },
    deleteClick: function (id) {
      console.log("event");
      this.$store.dispatch("deleteUser", id);
    },
    search: function (event) {
      this.$store.dispatch("searchUser", event.currentTarget.value);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list {
  display: flex;
  justify-content: center;
}
.overstyle {
  width: 700px;
}
.search {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
