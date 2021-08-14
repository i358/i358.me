<template>
<div id="navbar" class="lg:p-[10px] rounded-[15px] m-[20px] p-[0] w-[100%] flex justify-center items-center" style="z-index: 77;">
   <div class="container pl-[3rem] pr-[1rem] flex flex-1 gap-2 items-center">
      <router-link to="/" aria-current="page">
         <h1 id="logo" class="font-bold text-white text-3xl w-[max-content]">{{sitename}}<font color="#ff4a57">.{{domain}}</font></h1>
      </router-link>
      <div id="items" class="hidden lg:flex gap-6 pr-[35px] font-semibold text-[18px] justify-end w-full">
         <router-link to="/" class="item" aria-current="page">Anasayfa</router-link>
         <router-link to="/about" class="item ">Hakkımda</router-link>
         <router-link to="/projects" class="item fxc">Projeler  <span class="rounded-[5px] pl-[10px] pr-[10px] flex items-center text-white" style="background:#13bc9130;font-size:14px!important;">Demo</span></router-link>
         <a href="https://github.com/i358" class="item">Github</a>
      </div>
   </div>
</div>
</template>

<script>
import _x from "../__1.json";
export default {
    name:'Navbar',
    data(){
        return _x;
    }
};
</script>
<style lang="scss">
.fxc{ @apply flex items-center gap-[8px] }
</style>