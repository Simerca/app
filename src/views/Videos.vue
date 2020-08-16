<template>
<div>
        <div class="col-12 m-0 p-0">
            
        </div>
        <div class="col-12 m-0 p-0">
            <transition name="fade">
              <router-view></router-view>
            </transition>
        </div>
</div>
</template>

<script>
export default {
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
