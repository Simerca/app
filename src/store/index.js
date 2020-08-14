import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

Axios.defaults.baseURL = "http://localhost:1337/"

export default new Vuex.Store({
  state: {
    videos:[]
  },
  mutations: {
    SAVE_VIDS(state,videos){
      state.videos = videos
    }
  },
  actions: {
    async loadVideos({commit}){
      return new Promise((resolve,reject) =>{
        Axios.get('videos').then(result => {
          commit('SAVE_VIDS', result.data);
          resolve(result.data)
        }).catch(error => {
          reject()
          throw new Error(`API ${error}`);
        });
      });
    }
  },
  modules: {
  }
})
