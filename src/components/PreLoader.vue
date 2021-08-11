<template>
 <div id="preloader" :style="visible">
      <div class="spinner">
        <div class="uil-ripple-css" style="transform:scale(0.29);">
          <div></div>
          <div></div>
        </div>
      </div>
 </div>
</template>

<script>
export default {
  data(){
      return { visible:"" }
  },
  mounted(){
    setTimeout(()=>{this.visible="transition:all 0.3s; opacity:0;"; setTimeout(()=>this.visible="display:none;",300)}, 700)
  }
}
</script>
<style lang="scss">
@import "../assets/preloader.min.css"; 
</style>