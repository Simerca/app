<template>
  <div class="col-12">
      <div class="form-group">
          <label>Raison</label>
          <select v-model="subject" class="form-control">
              <option>Insulte</option>
              <option>Racisme</option>
              <option>Autre</option>
              <option>Violence</option>
          </select>
      </div>
      <div class="form-group">
          <label>Détails</label>
          <textarea v-model="description" class="form-control" placeholder="donnez nous les détails de votre signalement"></textarea>
      </div>
      <div class="form-group">
          <button @click="submitReport()" class="btn btn-success btn-sm btn-block">Soumettre </button>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {

    data(){
        return {
            subject:null,
            description:null,
            videoId:this.$route.params.id
        }
    },
    methods:{
        submitReport(){
            axios.post('reports',{
                sujet:this.subject,
                description:this.description,
                video:this.videoId
            }).then(()=>{
                this.$toasted.show('Votre signalement à bien été soumis', {
                    type:'success',
                    duration:2000
                })
                this.$router.push(`/videos/trend`);
            })
        }
    }

}
</script>

<style>

</style>