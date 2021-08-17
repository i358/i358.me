<template>
 <div>
    <vue-topprogress color="#ff4a57" ref="topProgress"></vue-topprogress>
<PreLoader/>
    <div id="grid-home" class="w-max grid grid-cols-[6fr,3fr] gap-[145px] mt-[8rem] mediaview">
    <div id="padding1-home" class="p-[2rem] pt-[1rem]">
    <Accounts />
      <h1 class="mt-[50px] mb-[25px] text-white font-bold text-[45px]" style="font-family:Curly">Merhaba, ben <font color="#ff4a57"> 358. </font></h1>
      <p id="text-home" class="text-[18px] text-white mb-[50px] w-[630px]" v-html="bio">
 </p>
<a href="https://github.com/i358/i358.me" id="v-to-github" class="w-[171px] font-medium h-[55px] pt-[13px] text-[15px] pb-[13px] pl-[40px] pr-[40px] rounded-[50px] border-[#ff4a57] border-2 hover:bg-[#ff4a57] text-white" style="transition: .3s ease;">Github'da görüntüle.</a>
    </div>
  <Presence />

  </div> 
  </div>
</template> 
<script>
import PreLoader from '@/components/PreLoader.vue'
import { vueTopprogress } from 'vue-top-progress'
import { get, post } from 'axios'
import { VueTyper } from 'vue-typer'
import Accounts from '@/components/Home/Accounts.vue';
import _x from "../__1.json";
import Presence from "@/components/Card/Presence.vue";

export default { 
  name: 'Home', 
  mounted(){
    this.$refs.topProgress.start()
    this.thumbStyle = `border-radius:15px 15px 0 0;background:${this.thumbnailColor}`;
    get("https://api.lanyard.rest/v1/users/"+this.id, {})
    .then((data)=>{
     this.setUserData(data.data.data)
      this.$refs.topProgress.done()
       const socket = new WebSocket("wss://api.lanyard.rest/socket");
    socket.addEventListener("open", () => {
      socket.send(
        JSON.stringify({ op: 2, d: { subscribe_to_id: this.id } })
      );
      setInterval(() => {
        socket.send(JSON.stringify({ op: 3 }));
      }, 30000);
    });
    socket.addEventListener("error", () => {
      this.lanyard.error = true;
    });
    socket.addEventListener("message", ({ data }) => {
    var _d = JSON.parse(data)
    if(_d.op===0){
      this.setUserData(_d.d)
    }
    })
 
    }

)
    .catch((err)=>{console.log(err); this.$refs.topProgress.fail()})
    
    document.title = this.name+": Homepage"
  },
  data(){
    return _x;
  },
  methods:{
    setUserData(data){
      console.log("WS_EVENT::UPDATE_PRESENCE / SOCK-1")
       this.presence=data; 
      this.avatarURL = data.discord_user.avatar ? `https://cdn.discordapp.com/avatars/${data.discord_user.id}/${data.discord_user.avatar}` : "https://cdn.discordapp.com/avatars/embed/3.png";
      this.username = data.discord_user.username;      
      this.tag = data.discord_user.discriminator;
      this.status = data.activities.find(n=>n.id==="custom") ? data.activities.find(n=>n.id==="custom").state : "";
     this.spotify = data.listening_to_spotify? this.spotifyParser(data.spotify) : ""
      this.discord_status = data.discord_status;
      switch(data.discord_status){
        case "online":
          this.statusColor="background:hsl(139, calc(var(--saturation-factor, 1) * 47.3%), 43.9%)";
          this.statusAltBadge="hidden";
          break;
        case "idle":
          this.statusColor=`background:hsl(38, calc(var(--saturation-factor, 1) * 95.7%), 54.1%);`;
          this.statusAltBadge="bg-[#191b23] h-[12px] left-[3px] top-[4px] absolute w-[16px] roundedw"
          break;
        case "dnd":
          this.statusColor="background:hsl(359, calc(var(--saturation-factor, 1) * 82.6%), 59.4%)";
          this.statusAltBadge="bg-[#191b23] left-[8px] top-[12.4px] absolute rounded-[5px] w-[12px] h-[3.8px]";
          break;
        case "offline":
          this.statusColor="background:hsl(214, calc(var(--saturation-factor, 1) * 9.9%), 50.4%)";
          this.statusAltBadge="bg-[#191b23] left-[10px] top-[10px] rounded-[90%] absolute h-[8px] w-[8px] lg:h-[9px] lg:w-[9px] rounded-[90%]";
          break;
        default:
          this.statusColor="";
          this.statusAltBadge=""
          break;
      }
    },
    spotifyParser(data){
      console.log("WS_EVENT::UPDATE_SPOTIFY / SOCK-1") 
      data.artist = this.nameNormalize(data.artist);
      return data
    },
    nameNormalize(v){ 
      var _v = v.split("; ")
      return _v.join(', ')
    }
  }, 
  components:{ PreLoader, vueTopprogress, VueTyper, Accounts, Presence }
};
</script>
 
<style lang="scss">
@import "../assets/styles/Home.scss";
</style>   