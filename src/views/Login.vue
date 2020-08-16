<template>
  <div class="row">
      <div class="col-10 mx-auto mt-5 text-center">
          <h3>Se connecter</h3>
      </div>
      <div class="col-10 mx-auto bg-light p-2 shadow-sm">
          <div class="form-group">
              <label>Email / Identifiant</label>
              <input v-model="email" type="text" class="form-control" placeholder="Email....">
          </div>
          <div class="form-group">
              <label>Mot de passe</label>
              <input v-model="password" type="password" class="form-control" placeholder="Mot de passe...">
          </div>
          <div class="form-group">
              <router-link tag="a" to="/signin">S'enregistrer</router-link>
          </div>
          <div class="form-group my-2">
              <button @click="login()" class="btn btn-success btn-sm btn-block" >Se connecter</button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            email:null,
            password:null
        }
    },
    props:['redirect'],
    methods:{
        login(){
            this.$store.dispatch('login',{
                identifier:this.email,
                password:this.password
            }).then(()=>{
                if(this.redirect != null){
                    this.$router.push(this.redirect);
                }else{
                    this.$router.push('/');
                }
            }).catch(err=>{
                console.log(err);
                this.$toasted.show('Email ou mot de passe incorect',{
                    type:'error',
                    duration:2000
                })
            });
        }
    }
}
</script>

<style>

</style>