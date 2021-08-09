<template>
  <div>
     <vue-topprogress color="#ff4a57" ref="topProgress"></vue-topprogress>
      <PreLoader/>
    <div class="mt-[0rem] grid place-items-center mediaview"> 
      <div class="mt-[75px] grid place-items-center grid-cols-[auto,auto] gap-[25px]">
        <Card icon="fas fa-meteor" title="Web Designer" content="You can tell what you need, for example (plenty squeezed fresh fruit juice) or a more creative thing... A website? I think this can be useful, a portfolio or administration panel? Do you know? In space, your thoughts go deeper the more you think, like a black hole. I'm sure there are a lot of things that come to your mind, think about and design in your head. Now, choose one of the thousands of designs, ideas you have designed in your mind and contact me after you get freshly squeezed space water." />
        <Card icon="fa fa-atom" title="Full-Stack Developer" content="It must have difficult working in the kitchen and bringing orders. Instead of doing both at the same time, we can try doing them one by one. Hold on, let's try. That got better. If the topic comes to me, yeah my friend if you get in front of me I can design even you. From the simple schemas to multi-page web projects and including these I can do perfectly such things as API, Database, Security. If you have anything to do get a fresh squeezed space water and contact me." />
        <Card icon="fa fa-headphones" title="Music Producer" content="Music producer.
Who doesn't need to listen to good music after 2 hours of quiet and boring work? Hey, grab 2 drinks from there and come over! How about making some music and then listening to it? Don't have time, can't find something suitable for your musical taste? Grab your freshly squeezed space drink now and come to me :)" />
        <Card icon="fa fa-book-dead" title="Death Note" content="I'm no different than a toy with an unlimited battery but a broken battery bed. The rule mentioned in article 358 of alien rights is that you can never give up in space, time keeps flowing and even when you give up, you rewind and try again. If you feel like a broken toy, a dying seagull, a drowning fish (this really unusual) you need to change some things. Always try again, there will be a day. Y-yes... Yes, you can leave this as a death note, dear postman, give my regards." />
      </div>
    </div>      
  </div>  
</template>    
 
<script> 
import PreLoader from '@/components/PreLoader.vue'
import { vueTopprogress } from 'vue-top-progress'
import { get, post } from 'axios'
import Card from '@/components/Card.vue'

export default {
  mounted(){
    this.$refs.topProgress.start() 
   get("/", {})      
    .then((data)=>{
      this.$refs.topProgress.done()
    })
    document.title="358: About"
  },
  components:{ PreLoader, vueTopprogress, Card }
};
</script>

<style lang="scss">
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

</style>