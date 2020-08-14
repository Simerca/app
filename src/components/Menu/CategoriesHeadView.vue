<template>
  <div>
    <ul class="fast-link">
        <router-link v-for="(categorie, i) in categories" :key="i" tag="li" :to="'/videos/search/'+categorie.key" class="nav-item badge bg-secondary"><img class="img-fluid icon" :src="categorie.icon" /> {{categorie.name}}</router-link>
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
    computed:{
        ...mapState(['categories'])
    },
    created(){
        this.$store.dispatch('loadCategories',{
            limit:10
        });
    }
}
</script>

<style scopped>

.icon {
    width:20px;
    height:20px;
}

.fast-link{
    padding:5px;
}
.fast-link li{
    margin-left:1em;
}

</style>