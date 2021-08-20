<template>
<div>
     <PreLoader />
    <vue-topprogress color="#ff4a57" ref="topProgress"></vue-topprogress>
    <div id="projects" class="grid gap-[15px] grid-cols-[auto,auto,auto,auto] mediaview">
    <Card v-for="project in repos" :project="project" :key="project" />
   </div>
</div>
</template>
<script>
import PreLoader from '@/components/PreLoader.vue'
import { vueTopprogress } from 'vue-top-progress'
import { get } from 'axios'
import _x from "../__1.json";
import Card from "@/components/Card/Project.vue";  
export default { 
    name:"Projects",
        mounted(){ 
  
    this.$refs.topProgress.start()
        get(this.ENDPOINTS.GITHUB_USER_REPOS)
        .then(({ data }) =>{ this.repos = data; this.$refs.topProgress.done() })
        .catch(console.error)
          document.title = this.name+": Projects";
    }, 
    data(){
        return _x;
    }, 
    components:{ vueTopprogress, PreLoader, Card }
}
</script>
<style lang="scss">
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
@media (max-width:800px){
  #projects{
    display:grid;
    grid-template:auto / auto;
    .project{
    height:auto!important;
      width:370px!important;
    }
  }
}
</style>