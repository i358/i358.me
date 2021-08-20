<template>

  <div>
   <Stars />
    <Keypress key-event="keyup" @any="keyControl" />
    <div
    id="main"
    class="h-screen text-[#dad7d7] grid grid-rows-[100px,auto] lg:text-[16px] text-[1.6rem]"
     >
    <Navbar />
    
     <div class="grid justify-center">
 <transition name="slither">
        <router-view id="caption" />
      </transition>
      </div>
       
    </div>
  </div>
</template> 

<script>
import Navbar from "@/components/Navbar.vue";
import PreLoader from "@/components/PreLoader.vue";
import Stars from "@/components/Effects/Stars.vue";
export default {
  components: { Navbar, PreLoader, Keypress: () => import("vue-keypress"), Stars },
  data() {
    return {

    }; 
  },
  methods: { 
    keyControl(e) {
  
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/styles/index.scss";
</style>
<style lang="sass"> 
@import "@/assets/styles/index.sass";
</style> 