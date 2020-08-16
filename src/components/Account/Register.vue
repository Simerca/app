<template>
  <div class="row">
      <div class="col-10 mx-auto mt-5 text-center">
          <h3>S'enregistrer</h3>
      </div>
      <div class="col-10 mx-auto bg-light p-2 shadow-sm">
          <div class="form-group">
              <label>Email</label>
              <input v-model="email" type="text" class="form-control" placeholder="Email....">
          </div>
          <div class="form-group">
              <label>Nom d'utilisateur</label>
              <input v-model="username" type="text" class="form-control" placeholder="pseudo">
          </div>
          <div class="form-group">
              <label>Mot de passe</label>
              <input v-model="password" type="password" class="form-control" placeholder="Mot de passe...">
          </div>
          <div class="form-group my-2">
              <label><input type="checkbox" /> J'accpete les conditions générales d'utilisations</label>
          </div>
          <div class="form-group my-2">
              <button @click="signin()" class="btn btn-success btn-sm btn-block" >S'inscrire</button>
          </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return {
            email:null,
            username:null,
            password:null
        }
    },
    props:['redirect'],
    methods:{
        signin(){
            axios.post('users',{
                email:this.email,
                username:this.username,
                password:this.password
            }).then(()=>{
                this.$toasted.show('Inscription réussi !',{
                    type:'success',
                    duration:2000
                })
                this.$store.dispatch('login',{
                    identifier:this.email,
                    password:this.password
                }).then(()=>{
                    this.$router.push('/videos/trend');
                })
            }).catch(err=>{
                this.$toasted.show('Une erreur est survenue '+err.message, {
                    type:'error',
                    duration:2000
                });
            })
        }
    }
}
</script>

<style>

</style>