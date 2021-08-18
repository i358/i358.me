<template>
    <div class="bg-[#23263a] w-[340px] h-[220px] rounded-[10px] p-[15px] grid">
        {{project.name}}
    sa
    </div>
</template>
<script>
export default {
    name:"Project",
    data(){
        return {

        }
    },
    props:["project"]
}
</script>
<style lang="scss">
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
</style>