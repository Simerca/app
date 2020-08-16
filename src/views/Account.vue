<template>
    <div class="col-12">
        <template v-if="!auth">
            <div class="col-12">
                <Login redirect="/account"/>
            </div>
        </template>
        <template v-else>
            <div class="col-12">
                <h3>Mon compte</h3>
            </div>
            <div class="col-12">
                <ul class="list-group list-group-flush">
                <router-link tag="li" to="/account/proposal" class="list-group-item">Proposer une vidéo</router-link>
            </ul>
            </div>
            <div class="col-12">
                <transition>
                <router-view></router-view>
                </transition>
            </div>
        </template>
    </div>
</template>

<script>
import {mapState} from 'vuex';
import Login from '@/views/Login'
export default {

components:{
    Login
},
computed:{
    ...mapState(['auth']),
},
data(){
    return {
        logged:false,
    }
},
watch:{
    auth:function(){
        console.log('auth change')
        if(this.auth.user){
            this.logged = true;
        }
    }
}

}
</script>

<style>

</style>