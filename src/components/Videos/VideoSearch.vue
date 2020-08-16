<template>
      <div class="row">
          <!-- Video List -->
          <div class="col-12 m-0 p-0" v-for="(video,i) in videos" :key="i">
              <router-link to="/videos/view/1" tag="div" class="card shadow-sm">
                <img class="card-img-top" :src="$imgUrl+video.miniature.url" />
                  <div class="card-header">
                  </div>
                  <div class="card-body text-left">
                      {{video.title}}
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
</template>

<script>
import {mapState} from 'vuex';

export default {
    computed:{
        ...mapState(['videos']),
        searchKey:function(){
            this.$store.dispatch('searchVideosByCatKey',{
                key:this.$route.params.key
            });
            return this.$route.params.key;
        }
    },
    mounted(){
        console.log(this.$route);
        this.$store.dispatch('searchVideosByCatKey',{
                key:this.$route.params.key
            });
    },
    watch:{
        searchKey:function(newVal){
            this.$store.dispatch('searchVideosByCatKey',{
                key:newVal
            });
            return newVal;
        }
    }

}
</script>

<style>

</style>