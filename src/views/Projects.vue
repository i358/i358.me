<template>
<div id="projects" class="grid gap-[15px] grid-cols-[auto,auto,auto]" style="overflow:scroll!important;">
    <PreLoader />
    <vue-topprogress color="#ff4a57" ref="topProgress"></vue-topprogress>
  <div class="bg-[#23263a] w-[250px] h-[170px] p-[15px] rounded-[15px]" v-for="val in test" :key="val.key">
      <h1 style="font-size:18px;" class="font-bold"><a :href="val.html_url">{{val.name}}</a></h1>
   <div style="overflow:scroll;height:100px;">
       <p>{{val.description}}</p>
    </div>
    <p>{{val.stargazers_count}} Stars</p>
   </div>

  </div>
</div>
</template>
<script>
import PreLoader from '@/components/PreLoader.vue'
import { vueTopprogress } from 'vue-top-progress'
import { get } from 'axios'
export default { 
    data(){
        return {
          ENDPOINTS:{
              GITHUB_USER:"https://api.github.com/users/i358/repos",
              GITHUB_USER_REPOS:"https://api.github.com/users/i358/repos"
          },
         test:""
        }
    }, 
    mounted(){
        get(this.ENDPOINTS.GITHUB_USER_REPOS)
        .then(({ data }) => this.test = data)
        .catch(console.error)
    },
    components:{ vueTopprogress, PreLoader }
}
</script>
<style lang="scss">
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

</style>