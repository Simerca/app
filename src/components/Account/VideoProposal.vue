<template>
  <div class="col-12 my-2 bg-light p-2 shadow-sm">
      <h5>Proposer une vidéo</h5>
      <div class="form-group">
          <label>Lien de la vidéo</label>
          <input v-model="urlVideo" type="text" class="form-control" placeholder="URL de la vidéo">
      </div>
      <div class="form-group my-2">
          <label>Description</label>
          <input v-model="descVideo" type="text" class="form-control" placeholder="Decris nous la vidéo">
      </div>
      <div class="form-group my-2">
          <label>Sujet</label>
          <select v-model="subject" name="" class="form-control">
              <option v-for="(cat, i) in categories" :key="i" :value="cat.key">{{cat.name}}</option>
          </select>
      </div>
      <div class="form-group my-2">
          <button class="btn btn-primary btn-block btn-sm" @click="addProposal()">Soumettre</button>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
import {mapState} from 'vuex';
export default {
    computed:{
        ...mapState(['categories'])
    },
    data(){
        return {
            urlVideo:null,
            subject:null,
            descVideo:null
        }
    },
    methods:{
        addProposal(){
            axios.post('proposals',{
                'url':this.urlVideo,
                'sujet':this.subject,
                'description':this.descVideo
            }).then(()=>{
                this.$toasted.show('Merci pour votre participation',{
                    duration:1000,
                    type:'success'
                })
                this.$router.push('/account')
            })
        }
    },
    mounted(){
        this.$store.dispatch('loadCategories');
    }

}
</script>

<style>

</style>