import { createStore } from 'vuex'
import * as fb from '../db'
// Create a new store instance.
const store = createStore({
  state: {
    users: [],
    selectId: ''
  },
  mutations: {
    setUsers(state, val) {
      console.log(val)
      state.users = [...val];
    },
    setSelectId(state, id) {
      state.selectId = id;
    }
  },
  actions: {
    async fetchUsers({ commit }) {
      await fb.usersCollection.orderBy('firstname', 'asc').onSnapshot(snapshot => {
        let postsArray = []
        snapshot.forEach(doc => {
          console.log(doc.id)
          let data = {
            id: doc.id
          }
          postsArray.push({ ...data, ...doc.data() });
        })
        store.commit('setUsers', postsArray)
      })
    },
    async createUser({ state, commit }, data) {
      // create post in firebase
      await fb.usersCollection.add({
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        phone: data.phone,
        street: data.street,
        city: data.city,
        state: data.state,
        postal: data.postal
      })
    },
    async deleteUser({ state, commit }, id) {
      // create post in firebase
      await fb.usersCollection.doc(id).delete().then(() => {
        console.log('Success');
      }).catch((error) => {
        console.error("Error removing document: ", error);
      });
    },
    async editUser({ state, commit }, data) {
      // create post in firebase
      await fb.usersCollection.doc(data.id).update({
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        phone: data.phone,
        street: data.street,
        city: data.city,
        state: data.state,
        postal: data.postal
      })
    },
    async searchUser({ state, commit }, name) {
      // create post in firebase
      const events = await fb.usersCollection.get()
        .then(querySnapshot => {
          let users = [];
          querySnapshot.docs.map(doc => {
            console.log(doc.id)
            let data = {
              id: doc.id
            }
            if ((doc.data().firstname.search(name) !== -1 || doc.data().lastname.search(name) !== -1) && name !== '') {
              users.push({ ...data, ...doc.data() });
            }
            else if (name === '') {
              users.push({ ...data, ...doc.data() });
            }
          });
          commit('setUsers', users)
        });
    },
  }
})

export default store;