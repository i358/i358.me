<template>
  <div>
     <vue-topprogress color="#ff4a57" ref="topProgress"></vue-topprogress>
      <PreLoader/>
    <div class="mt-[0rem] grid place-items-center mediaview"> 
      <div id="cards" class="mt-[75px] grid place-items-center grid-cols-[auto,auto] gap-[25px]">
        <Card icon="fas fa-meteor" title="Web Tasarımcısı" content="Neye ihtiyacınız olduğunu söyleyebilirsiniz, örneğin (bol sıkılmış taze meyve suyu) veya daha yaratıcı bir şey... Web sitesi mi? Bunun yararlı olabileceğini düşünüyorum, bir portfolio veya yönetim paneli? Aklınıza gelen, düşündüğünüz, kafanızda tasarladığınız bir çok şey vardır eminim. Şimdi kafanızda tasarladığınız binlerce tasarım, fikirden birini seçin ve taze sıkılmış uzay suyunu aldıktan sonra benimle iletişime geçin." />
        <Card icon="fa fa-headphones" title="Müzik Yapımcısı" content="2 saatlik sessiz ve sıkıcı bir çalışmanın ardından güzel ve rahatlatıcı bir müzik dinlemeye kim ihtiyaç duymaz ki? Hey, oradan 2 içki al ve buraya gel! Biraz müzik yapıp biraz da dinleyelim? Müzik zevkinize uygun bir şey bulamıyor musunuz? İşte çözümü burada, sadece taze (ama gerçekten taze olsun) sıkılmış uzay içeceğinizi kapın ve yanıma gelin (bu aşamada dikkatli olun, herhangi bir uzaylı istilasına uğrayabilirsiniz.)" />
        
      </div>
    </div>      
  </div>  
</template>    
 
<script> 
import PreLoader from '@/components/PreLoader.vue'
import { vueTopprogress } from 'vue-top-progress'
import { get, post } from 'axios'
import x from "../__1.json";
import Card from '@/components/Card.vue'

export default {
  mounted(){
    this.$refs.topProgress.start() 
   get("/", {})      
    .then((data)=>{
      this.$refs.topProgress.done()
    })
    document.title= this.name+": About"
  },
  data(){
    return x;
  },
  components:{ PreLoader, vueTopprogress, Card }
};
</script>

<style lang="scss">
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
@media (max-width:800px){
  #cards{
    display:grid;
    grid-template:auto / auto;
    .cardb54{
      height:max-content!important;
      width:370px!important;
    }
  }
}
</style>