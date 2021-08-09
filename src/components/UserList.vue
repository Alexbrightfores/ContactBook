<template>
  <div class="list">
    <table class="table table-hover overstyle">
      <tbody>
        <tr v-for="(userlist, index) in users" :key="index">
          <td>{{ userlist.firstname }}</td>
          <td>{{ userlist.lastname }}</td>
          <td>{{ userlist.email }}</td>
          <td>
            <button type="button" class="btn btn-primary" @click="editClick(userlist)" :id="userlist.id">
              Edit
            </button>
          </td>
          <td>
            <button type="button" class="btn btn-danger" @click="deleteClick(userlist.id)" :id="userlist.id">
              Delete
            </button>
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
    return {
      userlists: [
        {
          firstName: "John",
          lastName: "Doe",
          email: "john@example.com",
        },
        {
          firstName: "Mary",
          lastName: "Moe",
          email: "mary@example.com",
        },
        {
          firstName: "July",
          lastName: "Dooley",
          email: "july@example.com",
        },
        {
          firstName: "Mary",
          lastName: "Moe",
          email: "mary@example.com",
        },
        {
          firstName: "July",
          lastName: "Dooley",
          email: "july@example.com",
        },
      ],
    };
  },
  mounted() {
    this.$store.dispatch('fetchUserProfile');
  },
  computed: {
    users () {
      return this.$store.state.users
    }
  },
  methods: {
    editClick: function (user) {
      console.log(user);
      this.$store.commit('setSelectId', user.id)
      router.push('/edit');
    },
    deleteClick: function (id) {
      console.log("event");
      this.$store.dispatch('deleteUser', id)
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
  width: 70vw;
}
</style>
