<template>
    <div class="bg-[#23263a] w-[340px] h-[200px] rounded-[10px] grid-rows-[2fr,8fr] gap-[15px] p-[17px] grid project">
      <div class="grid grid-cols-[auto,10fr,3fr] gap-[10px] items-center">
          <i class="fa fa-github text-[35px]"></i>
          <h1 class="text-[19px] font-medium cursor-pointer hover:underline" @click="linkTo(fuckRules(project.full_name))">{{project.full_name}}</h1>
          <p class="font-bold text-[orange] flex items-center justify-center gap-[7px]"><i class="fa fa-star font-bold"></i> <span id="stars">{{project.stargazers_count}}</span> </p>
      </div>
      <div>
<p v-if="project.description">
       {{project.description}}
       </p>
       <p v-else>
           <i>Bu proje için bir açıklama belirtilmemiş..</i>
       </p>
             </div> 
    </div>
</template> 
<script>
export default {
    name:"Project",
    data(){
        return {

        }
    },
    methods:{
        linkTo(x){
            window.location = x
        },
        fuckRules(x){
            return `https://github.com/${x}`;
        }
    },
    props:["project"]
}
</script>
<style lang="scss">
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
#stars{
    font-size:20px;
}
@media (max-width:800px){
#stars{
    font-size:28px!important;
}
}
</style>