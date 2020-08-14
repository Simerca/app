<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="row">
        <div class="col-4">
            <router-link tag="a" class="navbar-brand" to="/">Navbar</router-link>
        </div>
        <div class="col-8">
          <input type="search" class="form-control" @input="search($event.target.value)"/>
        </div>
    </div>
</nav>
</template>

<script>
export default {
methods:{
  search(val){
    if(val.length > 1){
      this.$store.dispatch('searchVideosByTags',{
        key:val
      })
    }else{
        this.$store.dispatch('loadVideos')
    }
  }
}

}
</script>

<style>

</style>
