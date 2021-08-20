<template>
   <div class="cardb54 bg-[#23263a] rounded-[15px] hover:cursor-pointer transition-all delay-[200ms] p-[25px] h-[297px] grid grid-rows-[auto,auto] gap-[15px]" style="z-index:31;">
         <div class="grid grid-cols-[max-content,max-content] place-items-center gap-[15px]"> 
           <i :class="ick"></i> 
          <div class="font-bold text-[22px] text-[white]">{{title}}</div>
          </div>
          <div class="pl-[5px] pr-[15px]" style="max-width:480px">
           {{content}}
          </div>
        </div> 
</template>

<script>
  export default {
    name:'Card',
    props:["icon", "title", "content"],
    data(){
      return {
        ick:"fa fa-code text-[35px] text-[#ff4a57]"
      } 
    },
    created(){
      this.ick = `${this.icon} text-[35px] text-[#ff4a57]`
    }
  };
</script>