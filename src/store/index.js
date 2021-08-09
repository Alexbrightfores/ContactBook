import { createStore } from 'vuex'
import * as fb from '../firebase'
// Create a new store instance.
fb.usersCollection.orderBy('firstname', 'asc').onSnapshot(snapshot => {
  let postsArray = []

  snapshot.forEach(doc => {
    let post = doc.data()
    postsArray.push(post)
  })

  store.commit('setUsers', postsArray)
})
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
    async fetchUserProfile({ commit }) {
      // fetch user profile
      const events = await fb.usersCollection.get()
        .then(querySnapshot => {
          let users = [];
          querySnapshot.docs.map(doc => {
            console.log(doc.id)
            let data = {
              id: doc.id
            }
            users.push({ ...data, ...doc.data() });
          });
          commit('setUsers', users)
        });
    },
    async createUser({ state, commit }, data) {
      // create post in firebase
      await fb.usersCollection.add({
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        status: data.status
      })
    },
    async deleteUser({ state, commit }, id) {
      // create post in firebase
      await fb.usersCollection.doc(id).delete().then(() => {
        const events = fb.usersCollection.get()
          .then(querySnapshot => {
            let users = [];
            querySnapshot.docs.map(doc => {
              console.log(doc.id)
              let data = {
                id: doc.id
              }
              users.push({ ...data, ...doc.data() });
            });
            commit('setUsers', users)
          });
      }).catch((error) => {
        console.error("Error removing document: ", error);
      });
    },
    async editUser({ state, commit }, data) {
      // create post in firebase
     await fb.usersCollection.doc(data.id).update({
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email
      }).then(() => {
        const events = fb.usersCollection.get()
          .then(querySnapshot => {
            let users = [];
            querySnapshot.docs.map(doc => {
              console.log(doc.id)
              let data = {
                id: doc.id
              }
              users.push({ ...data, ...doc.data() });
            });
            commit('setUsers', users)
          });
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
            else if(name === '') {
              users.push({ ...data, ...doc.data() });
            }
          });
          commit('setUsers', users)
        });
    },
  }
})

export default store;