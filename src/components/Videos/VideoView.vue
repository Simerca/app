<template>
<div>
    <div class="col-12" v-show="video">
        <div id="player"></div>
    </div>
    <template v-if="video"> 
        <VideoInteractSys :video="video"/>
    </template>
    <div class="col-12">
        <div class="row" v-if="commentairesReady">
            
            <div class="row col-12 p-2">
                <Commentaires :videoId="video.id"/>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {mapState} from 'vuex';
import YTPlayer from 'yt-player';
import VideoInteractSys from '@/components/Videos/VideoInteractSys.vue';
import Commentaires from '@/components/Commentaires/Commentaires.vue';
import axios from 'axios';
export default {
    computed:{
        ...mapState(['auth'])
    },
    components:{
      VideoInteractSys,
      Commentaires
    },
    data() {
        return {
            video: false,
            videoid: null,
            commentaires: [],
            commentairesReady: false
        }
    },
    methods: {
        init() {
            axios.get(`videos/${this.videoid}`).then(data => {
                this.video = data.data;
                this.video.commentaires.forEach(element => {
                    axios.get(`users/${element.user}`).then(user => {
                        element.username = user.data.username;
                        this.commentaires.push(element)
                    })
                });
                this.commentairesReady = true;
            })
        },
        async getUserName(id) {
            const username = await new Promise((resolve, reject) => {
                axios.get(`users/${id}`).then(res => {
                    resolve(res.data.username);
                }).catch(err => {
                    reject(err);
                })
            })
            return username;
        }
    },
    mounted() {
        this.videoid = this.$route.params.id
        this.init();
    },
    watch: {
        video: function (newVal) {
            if (newVal) {
                const player = new YTPlayer('#player', {
                    width: '100%'
                })
                player.load(this.video.ytbid);
                player.setVolume(100);
            }
        }
    }
}
</script>

<style>
    
</style>
