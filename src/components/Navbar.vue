<template>
<div id="navbar" class="lg:p-[10px] rounded-[15px] m-[20px] p-[0] w-[100%] flex justify-center items-center" style="z-index: 77;">
   <div class="container pl-[3rem] pr-[1rem] flex flex-1 gap-2 items-center">
      
         
       
     
     
      <router-link to="/" aria-current="page">
         <h1 id="logo" class="font-bold text-white text-3xl w-[max-content]">{{sitename}}<font color="#ff4a57">.{{domain}}</font></h1>
      </router-link>
      <div class="hidden" id="no_tap"></div>
        <svg id="brand" class="rounded-[5px]" width="25" height="25" style="border:1px solid white;" viewBox="0 0 448 512"><path fill="currentColor" d="M432 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-128H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-128H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-128H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path></svg>
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
#brand{display:none;}
@media (max-width:800px){
    #navbar{
       padding:0!important;
        .container{
 grid-template-columns:auto 8fr 3fr;
  display:grid;
  margin:0;
  
        padding:0!important;
        align-items:center;
        }
       #no_tap{display:block;}
        #brand{display:block;width:40px;padding:8px;height:35px;}
    }
    #logo{
        width:100%;
        
    }
}
</style>