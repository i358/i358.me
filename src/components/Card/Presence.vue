<template>
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
  
   <div class="pt-[55px] pb-[15px]" v-if="username && tag" style="z-index:32;">
     <div v-if="username && tag && discord_status" class="text-[22px] items-center flex w-[max-content] pt-3 pb-0 pl-5 font-bold">{{username}}<font color="#aaa">#{{tag}}</font></div>
     <div v-if="status" style="max-width:350px;" class="pt-0 pl-5 flex items-center text-[16px] pr-[15px] mt-[5px]">{{status}}</div>
   </div>
    <div class="flex items-center justify-center p-[0]"><hr style="width: 90%;margin: 0 auto;padding:1px;"></div>
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
</template>

<script>
import _x from '../../__1.json';
  export default {
    data(){
      return _x;
    }
  }; 
</script>