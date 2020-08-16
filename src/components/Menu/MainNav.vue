<template>
<div>
    <nav class="navbar navbar-expand-lg navbar-white bg-white shadow-sm">
        <div class="row">
            <div class="col-3">
                <router-link tag="a" class="navbar-brand" to="/"><img class="logo" src="@/assets/logo.png"></router-link>
            </div>
            <div class="col-9 text-right">
                <i @click="isSearch?isSearch=false:isSearch=true;" class="uil h2 text-secondary uil-search"></i>
            </div>
        </div>
    </nav>
     <transition name="fade">
    <template v-if="isSearch">
        <div class="col-12">
            <input type="search" class="form-control" placeholder="Recherchez..." @input="search($event.target.value)" />
        </div>
    </template>
     </transition>
</div>
</template>

<script>
export default {
    data() {
        return {
            isSearch: false,
        }
    },
    methods: {
        search(val) {
            if (val.length > 1) {
                this.$store.dispatch('loadVideos', {
                    search: val
                })
            } else {
                this.$store.dispatch('loadVideos')
            }
        }
    }

}
</script>

<style>
.logo {
    height: 25px;
    margin-left: 10px;
}
</style>
