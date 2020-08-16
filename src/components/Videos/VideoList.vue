<template>
<div class="col-12 row p-0 m-0" ref="infinitelist" v-if="ready">
    <CategoriesHeadView />
    <!-- Video List -->
    <div class="col-xs-12 col-md-5 col-lg-3 my-2 p-0 mx-auto m-0 shadow-sm" v-for="(video,i) in videos" :key="i">
        <div class="row p-0 m-0">
            <router-link tag="div" class="col-12 p-0 m-0" :to="`/videos/view/${video.id}`">
                <img class="miniature" :src="video.miniature.url" />
            </router-link>
            <div class="col-12 p-0 m-0 text-right">
                <i @click="openPannel(video.id)" class="uil uil-ellipsis-h"></i>
            </div>
            <div class="col-12 p-2 text-left">
                <h6>{{video.title}}</h6>
                <p> {{video.description}}</p>
            </div>
            <VideoInteractSys :video="video"/>
        </div>
    </div>
    <!-- Video List -->
    <infinite-loading spinner="spiral" @infinite="loadMore">
        <div slot="spinner">Chargement en cours...</div>
        <div slot="no-more">Pas d'autres vidéos</div>
        <div slot="no-results">Pas de résultats</div>
    </infinite-loading>
</div>
</template>

<script>
/* eslint-disable */
import {
    mapState
} from 'vuex';

import CategoriesHeadView from '@/components/Menu/CategoriesHeadView.vue';
import VideoInteractSys from '@/components/Videos/VideoInteractSys.vue';
import VideosServices from '@/services/videos.service.js'
import InfiniteLoading from 'vue-infinite-loading';

export default {
    components: {
        InfiniteLoading,
        CategoriesHeadView,
        VideoInteractSys
    },
    computed: {
        ...mapState(['videos', 'auth'])
    },
    props: ['favorites'],
    data() {
        return {
            videosServices: new VideosServices(),
            ready: false,
            page: 1,
            previousLength: 0,
            options: {},
            actions: [{
                icon: 'icon-article', // 
                text: 'Signaler'
            }],
            routeKey: this.$route.params.key
        }
    },
    methods: {
        loadMore($state) {
            this.previousLenght = this.videos.length;
            this.page += 1;
            this.options.page = this.page;
            this.$store.dispatch('loadVideos', this.options).then(e => {
                if (e.length != this.previousLenght) {
                    this.previousLenght = e.length;
                    $state.loaded();
                } else {
                    $state.complete();
                }
            })
        },
        openPannel(id) {
            this.$actionSheet({
                text: 'Que souhaitez vous faire ?',
                label: true
            }, [{
                text: 'Signaler'
            }, {
                text: 'Annuler',
            }]).then(({
                button,
                selectedIndex,
                selectedGroupIndex
            }) => {
                if (selectedIndex === 0) {
                    this.$router.push(`/report/${id}`)
                } else {
                    console.log('Cancel')
                }
            }).catch(_ => {
                console.log('Click outside')
            })
        },
        
    },
    mounted() {
        if (this.favorites) {
            this.options.getFavorites = this.auth.user.id
        }
        if (this.routeKey) {
            this.options.key = this.routeKey
        };
        this.$store.dispatch('loadVideos', this.options).then(() => {
            this.ready = true;

        });
    },
    watch: {
        $route: function (newVal) {
            this.options.key = this.$route.params.key;
            this.$store.dispatch('loadVideos', this.options)
        }
    }

}
</script>

<style>

</style>
