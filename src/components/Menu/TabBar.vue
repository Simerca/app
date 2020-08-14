<template>
    <div class="nav-tab row p-3 w-100 shadow">
        <router-link tag="div" to="/videos/trend" class="col-3 tab-item">Tab1</router-link>
        <div class="col-3 tab-item">Tab2</div>
        <div class="col-3 tab-item">Tab3</div>
        <div class="col-3 tab-item">Tab4</div>
    </div>
</template>

<script>
export default {

}
</script>

<style scopped>

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

</style>