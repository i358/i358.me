<template>
  <div>
   
    <link href='https://fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet' type='text/css'>

    <div id="stars"></div>
<div id="stars2"></div>
<div id="stars3"></div>
    <Keypress key-event="keyup" @any="keyControl" />
    <div
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
export default {
  components: { Navbar, PreLoader, Keypress: () => import("vue-keypress") },
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
@function multiple-box-shadow ($n) 
  $value: '#{random(2000)}px #{random(2000)}px #FFF'
  @for $i from 2 through $n
    $value: '#{$value} , #{random(2000)}px #{random(2000)}px #FFF'

  @return unquote($value)

$shadows-small:  multiple-box-shadow(700)
$shadows-medium: multiple-box-shadow(200)
$shadows-big:    multiple-box-shadow(100)
    
#stars
  width: 1px
  height: 1px
  background: transparent
  box-shadow: $shadows-small
  animation     : animStar 50s linear infinite
    
  &:after
    content: " "
    position: absolute
    top: 2000px
    width: 1px
    height: 1px
    background: transparent
    box-shadow: $shadows-small
    
#stars2
  width: 2px
  height: 2px
  background: transparent
  box-shadow: $shadows-medium
  animation     : animStar 100s linear infinite
    
  &:after
    content: " "
    position: absolute
    top: 2000px
    width: 2px
    height: 2px
    background: transparent
    box-shadow: $shadows-medium
    
#stars3
  width: 3px
  height: 3px
  background: transparent
  box-shadow: $shadows-big
  animation     : animStar 150s linear infinite
    
  &:after
    content: " "
    position: absolute
    top: 2000px
    width: 3px
    height: 3px
    background: transparent
    box-shadow: $shadows-big

#title
  position: absolute
  top: 50%
  left: 0
  right: 0
  
  color: #FFF
  text-align: center
  font-family: 'lato',sans-serif
  font-weight: 300
  font-size: 50px
  letter-spacing: 10px
  
  margin-top: -60px
  padding-left: 10px
  
  span
    background: -webkit-linear-gradient(white, #38495a)
    -webkit-background-clip: text
    -webkit-text-fill-color: transparent
    
@keyframes animStar
  from  
    transform: translateY(0px)
  to    
    transform: translateY(-2000px)
    
   </style>