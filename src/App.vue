<template>
  <div id="app">
    <MainNav />
    <div class="container m-0 p-0">
    <transition name="fade">
    <router-view/>
    </transition>
    <TabBar /> 
    </div>
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
    this.$store.dispatch('auth');
  }

}
</script>

<style lang="scss">

@import 'node_modules/bootstrap/scss/bootstrap.scss';

@import 'assets/css/custom.min.css';

.nav-tab {
  overflow: hidden;
  background-color: #fff;  
  position: fixed;
  bottom: 0;
  width: 100%;
}

.nav-tab .tab-item {
    cursor:pointer;
}

.router-link-exact-active {
    color: #91c24e;
}

.navbar-brand {
    padding: 0px!important;
}

.miniature{
    width:100%;
    height:250px;
    object-fit: cover;
    object-position:center;
}

.row {
  --bs-gutter-x:none;
}

div#app {
    margin-bottom: 5em;
}

.container {
    max-width: none;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
