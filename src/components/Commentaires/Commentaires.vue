<template>
<div class="row col-12 p-2">
    <div class="col-12 p-2">
                <h6>{{ commentaires.length }} commentaires</h6>
            </div>
    <div class="col-12" v-if="auth">
        <div class="input-group mb-3">
            <input type="text" v-model="newCommentaire" class="form-control" placeholder="votre commentaire..." aria-describedby="basic-addon2">
            <div class="input-group-append">
                <button @click="postCommentaire" class="btn btn-outline-secondary" type="button">Envoyer</button>
            </div>
        </div>
    </div>
    <div class="commentary-zone">
        <div class="col-12 my-2" v-for="(commentaire, i) in commentaires" :key="i">
            <b>{{commentaire.user.username}}</b><br> {{commentaire.content}}
        </div>
    </div>
</div>
</template>

<script>
import {
    mapState
} from 'vuex';
import axios from 'axios';
export default {
    computed: {
        ...mapState(['auth'])
    },
    props: ['videoId'],
    data() {
        return {
            newCommentaire: null,
            commentaires: []
        }
    },
    methods: {
        postCommentaire(){
            axios.post(`commentaires`,{
                content:this.newCommentaire,
                user:this.auth.user.id,
                video:this.videoId
            }).then(()=>{
                this.loadCommentaires();
            })
        },
        loadCommentaires() {
            axios.get(`commentaires?video.id=${this.videoId}`).then(res => {
                this.commentaires = res.data
            })
        }
    },
    mounted() {
        this.loadCommentaires();
    }
}
</script>

<style>
.commentary-zone{
        max-height:30vh;
        overflow: scroll;
    }
</style>
