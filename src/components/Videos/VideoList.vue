<template>
  <div class="container">
      <div class="row">
          <!-- Video List -->
          <div class="col-12 my-2" v-for="(video,i) in videos" :key="i">
              <router-link to="/videos/view/1" tag="div" class="row">
              <div class="col-4">
                <img class="img-thumbnail" :src="$imgUrl+video.miniature.url" />
              </div>
                  <div class="col-4 p-2 text-left">
                      <h6>{{video.title}}</h6>
                      <p> {{video.description}}</p>
                  </div>
                  <div class="card-footer text-left">
                      <div class="row">
                          <div class="col-3">
                            <i class="uil uil-thumbs-up"></i>
                          </div>
                          <div class="col-3">
                            <i class="uil uil-comment-alt"></i>
                          </div>
                      </div>
                  </div>
              </router-link>
          </div>
          <!-- Video List -->
      </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
    computed:{
        ...mapState(['videos'])
    },
    mounted(){
        this.$store.dispatch('loadVideos');
    }

}
</script>

<style>

</style>