/**
 * VideosServices
 */
import Axios from 'axios';

export default class VideosServices {

    /**
     * subscribe() 
     * Un utilisateur s'abonne à une vidéo
     * @param {*} userId 
     * @param {*} videoId 
     */
    async subscribe(userId, videoId) {
        return new Promise((resolve, reject)=>{
          Axios.get(`videos/${videoId}`).then(get=>{
            get.data.subscribers.push(userId);
            Axios.put(`videos/${videoId}`,get.data).then(put=>{
              resolve(put);
            }).catch(err=>{
              reject(err);
            })
          })
        })
    }
    /**
     * unsubscribe() 
     * Un utilisateur s'abonne à une vidéo
     * @param {*} userId 
     * @param {*} videoId 
     */
    async unsubscribe(userId, videoId) {
        return new Promise((resolve, reject)=>{
          Axios.get(`videos/${videoId}`).then(get=>{
            let newList = [];
            get.data.subscribers.forEach(user=>{
              if(user.id != userId){
                newList.push(user);
              }
            });
            get.data.subscribers = newList;
            Axios.put(`videos/${videoId}`,get.data).then(put=>{
              resolve(put);
            }).catch(err=>{
              reject(err);
            })
          })
        })
    }

    /**
     * like() 
     * Un utilisateur s'abonne à une vidéo
     * @param {*} userId 
     * @param {*} videoId 
     */
    async like(userId, videoId) {
        return new Promise((resolve, reject)=>{
          Axios.get(`videos/${videoId}`).then(get=>{
            get.data.likes.push(userId);
            Axios.put(`videos/${videoId}`,get.data).then(put=>{
              resolve(put);
            }).catch(err=>{
              reject(err);
            })
          })
        })
    }
    /**
     * unlike() 
     * Un utilisateur s'abonne à une vidéo
     * @param {*} userId 
     * @param {*} videoId 
     */
    async unlike(userId, videoId) {
        return new Promise((resolve, reject)=>{
          Axios.get(`videos/${videoId}`).then(get=>{
            let newList = [];
            get.data.likes.forEach(user=>{
              if(user.id != userId){
                newList.push(user);
              }
            });
            get.data.likes = newList;
            Axios.put(`videos/${videoId}`,get.data).then(put=>{
              resolve(put);
            }).catch(err=>{
              reject(err);
            })
          })
        })
    }
  
}