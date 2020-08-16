import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

Axios.defaults.baseURL = "https://api-vidzdev.herokuapp.com/"
// Axios.defaults.baseURL = "http://localhost:1337/"

export default new Vuex.Store({
  state: {
    videos:[],
    videos_favorites:[],
    categories:[],
    auth:null,
  },
  mutations: {
    SAVE_VIDS(state,videos){
      state.videos = videos
    },
    SAVE_VIDS_FAV(state,videos_favorites){
      state.videos_favorites = videos_favorites
    },
    SAVE_CATS(state, categories){
      state.categories = categories
    },
    SAVE_AUTH(state, auth){
      state.auth = auth
    }
  },
  actions: {
    /** 
     * loadVideos
     * On charge les videos de bases pour l'affichage en list
     */
    async loadVideos({commit}, options = {}){
      let page = options.page || 1;
      
      console.log(page);
      let limit = page + 3;
      return new Promise((resolve,reject) =>{
        let query = 'videos?_start=0';
        if(options.key != null){
          query += `&_where[_or][0][categories.key_contains]=${options.key}`;
        }
        if(options.search != null){
          query += `&_where[_or][1][tags_contains]=${options.search}&_where[_or][2][title_contains]=${options.search}`;
        }
        if(options.getFavorites){
          query = `videos?subscribers.id=${options.getFavorites}`
        }
        query += `&_limit=${limit}`
        Axios.get(query).then(result => {
          commit('SAVE_VIDS', result.data);
          resolve(result.data)
        }).catch(error => {
          reject()
          throw new Error(`API ${error}`);
        });
      });
    },
    /** 
     * loadVideos
     * On charge les videos de bases pour l'affichage en list
     */
    async loadFavoritesVideos({commit},options = {}){
      return new Promise((resolve,reject) =>{
        Axios.get(`videos?subscribers_contains=${options.userId}`).then(result => {
          commit('SAVE_VIDS_FAV', result.data);
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
        Axios.get(`videos?_where[_or][0][tags_contains]=${options.key}&_where[_or][1][title_contains]=${options.key}`).then(result => {
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
    },
    /**
     * Login 
     * @param {*} param0 
     * @param {*} credentials 
     */
    async login({commit}, credentials){
      if(localStorage.getItem('auth')){
        commit('SAVE_AUTH', JSON.parse(localStorage.getItem('auth')));
        return localStorage.getItem('auth');
      }else{
      return new Promise((resolve, reject)=>{
        // localStorage.clear();
          console.log('auth non exist');
          Axios.post('auth/local', credentials).then(login=>{
            localStorage.setItem('auth',JSON.stringify(login.data));
            commit('SAVE_AUTH', login.data);
            resolve(login.data)
          }).catch(err=>{
            reject(err);
          })
        })
      }
    },
    /**
     * Auth 
     * @param {*} param0 
     * @param {*} credentials 
     */
    async auth({commit}){
      if(localStorage.getItem('auth')){
        commit('SAVE_AUTH', JSON.parse(localStorage.getItem('auth')));
      }
    }
  },
  modules: {
  }
})
