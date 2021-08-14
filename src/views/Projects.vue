<template>
<div>
    {{cache.filter(n=>n.t==="test")}}
</div>
</template>
<script>
import { get } from 'axios'
export default { 
    data(){
        return {
          ENDPOINTS:{
              GITHUB_USER:"https://api.github.com/users/i358/repos",
              GITHUB_USER_REPOS:"https://api.github.com/users/i358/repos"
          },
          cache:[{t:"repos"}]
        }
    }, 
    computed(){
        get(this.ENDPOINTS.GITHUB_USER_REPOS)
        .then(({ data })=>this.cache.push({t:"test", val:data}))
    }
}
</script>
<style lang="scss">
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
</style>