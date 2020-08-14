<template>
  <div class="container" id="app">
    <MainNav />
    <router-view/>

    <TabBar /> 
  </div>
</template>
<script>
/* eslint-disable */
import MainNav from '@/components/Menu/MainNav.vue';
import TabBar from '@/components/Menu/TabBar.vue'
import 'bootstrap';

export default {
  components:{
    MainNav,
    TabBar
  },
  created(){

  }

}
</script>

<style lang="scss">

@import 'node_modules/bootstrap/scss/bootstrap.scss';

</style>
