<template>
 <div id="navbar" class="lg:p-[10px] rounded-[15px] m-[20px] p-[0] w-[100%] flex items-center" style="z-index: 77;"><div class="container lg:pl-[12rem] lg:pr-[3rem] pl-[3rem] pr-[1rem] flex flex-1 gap-2 items-center"><router-link to="/" aria-current="page"><h1 id="logo" class="font-bold text-white text-3xl w-[max-content]">358<font color="#ff4a57">.me</font></h1></router-link><div id="items" class="hidden lg:flex gap-6 font-semibold text-[18px] justify-end w-full"><router-link to="/" class="item" aria-current="page">Home</router-link><router-link to="/about" class="item">About</router-link><div class="item text-[#aaa!important]" disabled>Projects (Soon) </div><a href="https://github.com/i358" class="item">Github</a></div></div></div>
</template>

<script>
export default {
    name:'Navbar'
}
</script>

   