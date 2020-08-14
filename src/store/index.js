import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

Axios.defaults.baseURL = "http://localhost:1337/"

export default new Vuex.Store({
  state: {
    videos:[],
    categories:[]
  },
  mutations: {
    SAVE_VIDS(state,videos){
      state.videos = videos
    },
    SAVE_CATS(state, categories){
      state.categories = categories
    }
  },
  actions: {
    /** 
     * loadVideos
     * On charge les videos de bases pour l'affichage en list
     */
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
    },
    /**
     * searchVideosByCatKey
     * On cherche des videos grâce à la clef (key de catégorie) dans options.key 
     * @param {*} options 
     */
    async searchVideosByCatKey({commit}, options = {}){
      return new Promise((resolve,reject) =>{
        Axios.get(`videos?categories.key_contains=${options.key}`).then(result => {
          commit('SAVE_VIDS', result.data);
          resolve(result.data)
        }).catch(error => {
          reject()
          throw new Error(`API ${error}`);
        });
      });
    },
    /**
     * searchVideosByTags
     * On cherche des videos grâce au tags dans tags 
     * @param {*} options 
     */
    async searchVideosByTags({commit}, options = {}){
      return new Promise((resolve,reject) =>{
        Axios.get(`videos?tags_contains=${options.key}`).then(result => {
          commit('SAVE_VIDS', result.data);
          resolve(result.data)
        }).catch(error => {
          reject()
          throw new Error(`API ${error}`);
        });
      });
    },
    /**
     * loadCategories
     * On charge les categories 
     * @param {*} options 
     */
    async loadCategories({commit},options = {}){
      var limit = options.limit || 5;
      return new Promise((resolve,reject) =>{
        Axios.get(`categories?_limit=${limit}`).then(result => {
          commit('SAVE_CATS', result.data);
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
