<template>
<div class="col-12">
    <div class="row">
        <div class="col-12">
            <CategoriesHeadView />
        </div>
        <div class="col-12">
            <router-view></router-view>
        </div>
    </div>
</div>
</template>

<script>
import CategoriesHeadView from '@/components/Menu/CategoriesHeadView.vue';
export default {
  components:{
    CategoriesHeadView
  }
}
</script>

<style>
.fast-link .nav-item {
    list-style: none;
    text-decoration: none;
    border-radius: 3px;
    width: auto;
    cursor:pointer;
    display: inline-block;
    padding: 3px 5px 3px 5px;
}
</style>
