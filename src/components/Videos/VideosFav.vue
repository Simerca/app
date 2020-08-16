<template>
<div class="row">
    <template v-if="videos.length != 0">
        <VideoList :videos="videos" :favorites="true"/>
    </template>
    <template v-else-if="noLogin">
        <div class="col-12 text-center">
            <h4>Vous devez <router-link tag="span" to="/login"> connecter </router-link> accéder à vos favoris</h4>
        </div>
    </template>
    <template v-else>
        <div class="col-12 text-center">
            <h4>Aucune vidéos dans vos favoris</h4>
        </div>
    </template>
</div>
</template>

<script>
import {
    mapState
} from 'vuex';
import VideoList from '@/components/Videos/VideoList'
export default {
    components:{
        VideoList
    },
    computed: {
        ...mapState(['videos', 'auth']),
    },
    data(){
        return {
            noLogin:false
        }
    },
    mounted() {
        if(this.auth){
            this.$store.dispatch('loadVideos', {
                getFavorites: this.auth.user.id
            })
        }else{
            this.noLogin = true
        }
    },

}
</script>

<style>

</style>
