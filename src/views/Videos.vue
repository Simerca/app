<template>
  <div class="col-12">
    <div class="row">
        <div class="col-3">
            <ul class="nav">
                <router-link to="/videos/search/node"><li class="nav-item">Node JS</li></router-link>
            </ul>
        </div>    
        <div class="col-9">
            <router-view></router-view>
        </div>    
    </div> 
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>