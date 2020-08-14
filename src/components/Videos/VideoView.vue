<template>
  <div class="col-12">
      <div id="player"></div>
  </div>
</template>

<script>
import YTPlayer from 'yt-player';
export default {
    mounted(){
        const player = new YTPlayer('#player', {
            width:'100%'
        })
        player.load('GKSRyLdjsPA')
        player.setVolume(100)
    }
}
</script>

<style>

</style>