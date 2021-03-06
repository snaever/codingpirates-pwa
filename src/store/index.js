import Vue from 'vue'
import Vuex from 'vuex'
import * as auth from '../services/AuthService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    apiUrl: `${window.location.protocol}//${window.location.hostname}:3000/api`,
    email: null,
    name: null,
    nameOfChild: null,
    userId: null,
    isAdmin: false
  },
  mutations: {
    authenticate(state) {
      state.isLoggedIn = auth.isLoggedIn();
      if (state.isLoggedIn) {
        state.email = auth.getLogin();
        state.userId = auth.getUserId();
        state.name = auth.getName();
        state.nameOfChild = auth.getNameOfChild();
        state.isAdmin = auth.isAdmin();
      } else {
        state.email = null;
        state.userId = null;
        state.name = null;
        state.nameOfChild = null;
        state.isAdmin = false;
      }
    }
  },
  actions: {
    authenticate(context) {
      context.commit('authenticate');
    }
  },
  modules: {
  }
})
