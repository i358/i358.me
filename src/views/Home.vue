<template>
 <div>
    <vue-topprogress color="#ff4a57" ref="topProgress"></vue-topprogress>
<PreLoader/>
    <div id="grid-home" class="w-max grid grid-cols-[6fr,3fr] gap-[145px] mt-[8rem] mediaview">
    <div id="padding1-home" class="p-[2rem] pt-[1rem]">
      <ul id="accounts-router" class="flex gap-[15px] list-none">
        <a href="https://instagram.com/358.xd" class="account-item"> <i class="fa fa-instagram"></i> </a>
        <a href="https://github.com/i358" class="account-item"> <i class="fab fa-github"></i> </a>
         <a href="/" class="account-item"> <i class="fab fa-spotify"></i> </a>
          <a href="https://discord.gg/6bAg88URyz" class="account-item"> <i class="fab fa-discord"></i> </a>
      </ul>
      <h1 class="mt-[50px] mb-[25px] text-white font-bold text-[45px]" style="font-family:Curly">Hello, I am <font color="#ff4a57"> 358. </font></h1>
      <p id="text-home" class="text-[18px] text-white w-[590px] mb-[50px]"><vue-typer
  :text='bio' 
  initial-action='typing'
  :pre-type-delay='70'
  :type-delay='70'
  :pre-erase-delay='60000000000000000' 
  :erase-delay='70000000000000000'
  erase-style='backspace'
  :erase-on-complete='false'
  caret-animation='phase'
></vue-typer></p>
<a href="https://github.com/i358/i358.me" class="w-[171px] font-medium h-[55px] pt-[13px] text-[15px] pb-[13px] pl-[40px] pr-[40px] rounded-[50px] border-[#ff4a57] border-2 hover:bg-[#ff4a57] text-white" style="transition: .3s ease;">View on Github</a>
    </div>
  <div id="presence" class="flex justify-center w-full items-center pl-[4rem]" style="z-index:32;">
 <div class="bg-[#181b23] rounded-[15px] grid absolute grid-rows-[5fr,auto] grid-cols-[auto] pb-[35px]" style="box-shadow: 0 10px 25px 5px rgba(0, 0, 0, 0.2);z-index:32;">
   <div style="border-radius:15px 15px 0 0;background:#222732;" class="h-[80px] w-[350px] p-[15px] pt-[25px] pb-[15px] flex">
      </div>
   <div>
     <img v-if="avatarURL" :src="avatarURL" class="rounded-[50%] absolute ml-[7%] top-[40px] av3" height="90" width="90" alt="Avatar" />
     <div class="absolute rounded-[50%] h-[28px] w-[28px] av2 left-[90px] mt-[25px] flex items-center justify-center" :style="statusColor">
       <span :class="statusAltBadge"></span>
     </div>
    </div> 
  
   <div class="pt-[55px] pb-[15px]" v-if="username && tag" style="box-shadow:0px 1px 1px gray!important;z-index:32;">
     <div v-if="username && tag && discord_status" class="text-[22px] items-center flex w-[max-content] pt-3 pb-0 pl-5 font-bold">{{username}}<font color="#aaa">#{{tag}}</font></div>
     <div v-if="status" style="max-width:350px;" class="pt-0 pl-5 flex items-center text-[16px] pr-[15px] mt-[5px]">{{status}}</div>
   </div>
   <div v-if="spotify" class="grid p-[20px] pb-[0] gap-[15px] grid-rows[2fr,6fr]" id="spotify" style="font-family:Rubik;max-width:350px;">
      <div class="grid grid-cols-[8fr,auto] items-center"><p class="font-bold text-[14px] uppercase text-[#cad1d7]" style="font-family:Curly;">Listening to Spotify</p> <i class="fa fa-spotify text-[22px] mr-[10px]"></i></div> 
    <div id="song_details" class="grid grid-cols-[max-content,auto] gap-[12px]"><img class="rounded-[10px]" :src="spotify.album_art_url" height="70" width="70" />
    <div>
       <p class="font-medium text-[16px]"> {{spotify.song}} </p>
     <p class="text-[14px]"> by {{spotify.artist}} </p>
     <p class="text-[14px]"> on {{spotify.album}} </p>
    </div>
     </div>
   </div>
   <div v-if="!presence || !presence.discord_user || !avatarURL || !username || !tag" class="spinner">
        <div class="uil-ripple-css" style="transform:scale(0.29);">
          <div></div>
          <div></div> 
        </div>
      </div>    
     </div>
    </div>

  </div> 
  </div>
</template>
<script>
import PreLoader from '@/components/PreLoader.vue'
import { vueTopprogress } from 'vue-top-progress'
import { get, post } from 'axios'
import { VueTyper } from 'vue-typer'

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
    
    document.title = "358: Homepage"
  },
  data(){
    return { 
      presence:{},
      avatarURL:"",
      id:"453336745967091722",
      username:"",
      tag:"",
      status:"",
      discord_status:"",
      bio:["My name is 358. My favorite languages HTML & CSS, Javascript and Python. I using as editor Visual Studio Code, Atom and Webstorm.."],
      spotify:{},
      statusColor:"background:hsl(214, calc(var(--saturation-factor, 1) * 9.9%), 50.4%)",
      statusAltBadge:"bg-[#191b23] left-[10px] top-[10px] rounded-[90%] absolute h-[8px] w-[8px] lg:h-[9px] lg:w-[9px] rounded-[90%]"
    } 
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
  components:{ PreLoader, vueTopprogress, VueTyper }
}
</script>
 
<style lang="scss" global>
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
@font-face {
  font-family: Curly;
  src: url(../assets/font.ttf);
}

.roundedw{border-radius:0 0 90px 90px; transform:rotate(-400deg)}



.av3{
   box-shadow: 0 0 0 10px #191b23,
                inset 0 0 0 10px #191b23,
                inset 0 0 0 10px #191b23,
                inset 0 0 0 10px #191b23,
                inset 0 0 0 10px #191b23;
}
.av2{
   box-shadow: 0 0 0 2px #191b23,
                inset 0 0 0 5px #191b23,
                inset 0 0 0 5px #191b23,
                inset 0 0 0 5px #191b23,
                inset 0 0 0 5px #191b23;
}
#accounts-router > .account-item {
  
  @apply border-2 rounded-[50%] w-[50px] h-[50px] text-white text-[19px] flex items-center justify-center cursor-pointer border-[#ff4a57] hover:bg-[#ff4a57] transition-all delay-[70ms]
} 

.vue-typer .custom.char.typed {
  color: white;
}
.vue-typer .custom.char.selected {
  color: #ff4a57;
}

.vue-typer .custom.caret.typing {
  background-color: white;
}
.vue-typer .custom.caret.selecting {
  display: inline-block;
  background-color: #ff4a57;
}
</style>