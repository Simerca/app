<template>
<div>
    <div class="card-footer text-left">
        <div class="row">
            <div class="col-3">
                <template v-if="checkUserLike(videoData.likes)">
                    <i @click="unLikeToVideos(videoData.id)" class="uil uil-thumbs-up text-success"></i>
                </template>
                <template v-else>
                    <i @click="likeToVideos(videoData.id)" class="uil uil-thumbs-up"></i>
                </template>
                {{ videoData.likes.length }}
            </div>
            <div class="col-3">
                <i class="uil uil-comment-alt"></i> {{ videoData.commentaires.length }}
            </div>
            <div class="col-3">
                <template v-if="checkUserSubscribe(videoData.subscribers)">
                    <i @click="unSubscribeToVideos(videoData.id)" class="uil uil-favorite text-success"></i>
                </template>
                <template v-else>
                    <i @click="subscribeToVideos(videoData.id)" class="uil uil-favorite"></i>
                </template>
                {{videoData.subscribers.length}}
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    mapState
} from 'vuex';
import axios from 'axios';
import VideosServices from '@/services/videos.service.js'
export default {
    props: ['video'],
    computed: {
        ...mapState(['auth']),
    },
    data() {
        return {
            videosServices: new VideosServices(),
            videoData: this.video
        }
    },
    methods: {
        /**
         * SUBS
         */
        // Method pour verifier si un utilisateur est sub
        checkUserSubscribe(subscribers) {
            if (subscribers.length > 0 && this.auth) {
                var check = subscribers.filter(function (user) {
                    if (user.id == this.auth.user.id) {
                        return true
                    }
                }.bind(this));
                if (check.length > 0) {
                    return true;
                }
            }
        },
        // Intermediaire avant le sub sur une video 
        subscribeToVideos(videoId) {
            if (this.auth.jwt) {
                this.videosServices.subscribe(this.auth.user.id, videoId).then(() => {
                    // this.$store.dispatch('loadVideos', this.options);
                    this.refreshVideo();
                });
            }
        },
        // Intermediaire avec le unsub sur une vidéo
        unSubscribeToVideos(videoId) {
            if (this.auth.jwt) {
                this.videosServices.unsubscribe(this.auth.user.id, videoId).then(() => {
                    // this.$store.dispatch('loadVideos', this.options);
                    this.refreshVideo();
                });
            }
        },
        /**
         * LIKE
         */
        // Method pour verifier si un utilisateur est sub
        checkUserLike(likes) {
            if (likes.length > 0 && this.auth) {
                var check = likes.filter(function (user) {
                    if (user.id == this.auth.user.id) {
                        return true
                    }
                }.bind(this));
                if (check.length > 0) {
                    return true;
                }
            }
        },
        // Intermediaire avant le sub sur une video 
        likeToVideos(videoId) {
            if (this.auth.jwt) {
                this.videosServices.like(this.auth.user.id, videoId).then(() => {
                    // this.$store.dispatch('loadVideos', this.options);
                    this.refreshVideo();
                });
            }
        },
        // Intermediaire avec le unsub sur une vidéo
        unLikeToVideos(videoId) {
            if (this.auth.jwt) {
                this.videosServices.unlike(this.auth.user.id, videoId).then(() => {
                    // this.$store.dispatch('loadVideos', this.options);
                    this.refreshVideo();
                });
            }
        },
        refreshVideo() {
            axios.get(`videos/${this.video.id}`).then(res => {
                this.videoData = res.data;
            })
        }
    }
}
</script>

<style>

</style>
