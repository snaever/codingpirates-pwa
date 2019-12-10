import Vue from 'vue'
import Vuex from 'vuex'
import * as auth from '../services/AuthService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    apiUrl: 'http://localhost:3000/api',
    email: null,
    userId: null
  },
  mutations: {
    authenticate(state) {
      state.isLoggedIn = auth.isLoggedIn();
      if (state.isLoggedIn) {
        state.email = auth.getLogin();
        state.userId = auth.getUserId();
      } else {
        state.email = null;
        state.userId = null;
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
