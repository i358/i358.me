(function(t){function e(e){for(var s,r,o=e[0],c=e[1],l=e[2],u=0,d=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);p&&p(e);while(d.length)d.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,r=1;r<a.length;r++){var o=a[r];0!==i[o]&&(s=!1)}s&&(n.splice(e--,1),t=c(c.s=a[0]))}return t}var s={},r={app:0},i={app:0},n=[];function o(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"106928c0","chunk-47941980":"df405baa"}[t]+".js"}function c(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={about:1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise((function(e,a){for(var s="css/"+({about:"about"}[t]||t)+"."+{about:"fb92fb23","chunk-47941980":"31d6cfe0"}[t]+".css",i=c.p+s,n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var l=n[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===s||u===i))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){l=d[o],u=l.getAttribute("data-href");if(u===s||u===i)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var s=e&&e.target&&e.target.src||i,n=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");n.code="CSS_CHUNK_LOAD_FAILED",n.request=s,delete r[t],p.parentNode.removeChild(p),a(n)},p.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){r[t]=0})));var s=i[t];if(0!==s)if(s)e.push(s[2]);else{var n=new Promise((function(e,a){s=i[t]=[e,a]}));e.push(s[2]=n);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(p);var a=i[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+s+": "+r+")",d.name="ChunkLoadError",d.type=s,d.request=r,a[1](d)}i[t]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=s,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(a,s,function(e){return t[e]}.bind(null,s));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var p=u;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0ea4":function(t,e,a){"use strict";a("6dea")},"1de5":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{style:t.visible,attrs:{id:"preloader"}},[t._m(0)])},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"spinner"},[a("div",{staticClass:"uil-ripple-css",staticStyle:{transform:"scale(0.29)"}},[a("div"),a("div")])])}],i={data:function(){return{visible:""}},mounted:function(){var t=this;setTimeout((function(){t.visible="transition:all 0.3s; opacity:0;",setTimeout((function(){return t.visible="display:none;"}),300)}),700)}},n=i,o=(a("0ea4"),a("2877")),c=Object(o["a"])(n,s,r,!1,null,null,null);e["a"]=c.exports},"21bb":function(t,e,a){"use strict";a("2dad")},"2dad":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("f0eb"),r=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Stars"),a("Keypress",{attrs:{"key-event":"keyup"},on:{any:t.keyControl}}),a("div",{staticClass:"h-screen text-[#dad7d7] grid grid-rows-[100px,auto] lg:text-[16px] text-[1.6rem]"},[a("Navbar"),a("div",{staticClass:"grid justify-center"},[a("transition",{attrs:{name:"slither"}},[a("router-view",{attrs:{id:"caption"}})],1)],1)],1)],1)},n=[],o=(a("d3b7"),a("3ca3"),a("ddb0"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"lg:p-[10px] rounded-[15px] m-[20px] p-[0] w-[100%] flex justify-center items-center",staticStyle:{"z-index":"77"},attrs:{id:"navbar"}},[a("div",{staticClass:"container pl-[3rem] pr-[1rem] flex flex-1 gap-2 items-center"},[a("router-link",{attrs:{to:"/","aria-current":"page"}},[a("h1",{staticClass:"font-bold text-white text-3xl w-[max-content]",attrs:{id:"logo"}},[t._v(t._s(t.sitename)),a("font",{attrs:{color:"#ff4a57"}},[t._v("."+t._s(t.domain))])],1)]),a("div",{staticClass:"hidden lg:flex gap-6 pr-[35px] font-semibold text-[18px] justify-end w-full",attrs:{id:"items"}},[a("router-link",{staticClass:"item",attrs:{to:"/","aria-current":"page"}},[t._v("Anasayfa")]),a("router-link",{staticClass:"item flex items-center gap-[8px]",attrs:{to:"/about"}},[t._v("Hakkımda "),a("span",{staticClass:"rounded-[5px] pl-[10px] pr-[10px] flex items-center text-white",staticStyle:{background:"#13bc9130","font-size":"14px!important"}},[t._v("Demo")])]),a("div",{staticClass:"item text-[#aaa!important]",attrs:{disabled:""}},[t._v("Projeler ")]),a("a",{staticClass:"item",attrs:{href:"https://github.com/i358"}},[t._v("Github")])],1)],1)])}),c=[],l=a("b752"),u={name:"Navbar",data:function(){return l}},d=u,p=a("2877"),f=Object(p["a"])(d,o,c,!1,null,null,null),m=f.exports,h=a("1de5"),b=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{attrs:{id:"stars"}}),a("div",{attrs:{id:"stars2"}}),a("div",{attrs:{id:"stars3"}})])}],x={},g=Object(p["a"])(x,b,v,!1,null,null,null),y=g.exports,_={components:{Navbar:m,PreLoader:h["a"],Keypress:function(){return a.e("chunk-47941980").then(a.bind(null,"365a"))},Stars:y},data:function(){return{}},methods:{keyControl:function(t){}}},C=_,w=(a("5c0b"),a("b184"),Object(p["a"])(C,i,n,!1,null,null,null)),k=w.exports,S=a("9483");Object(S["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var E=a("8c4f"),j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("vue-topprogress",{ref:"topProgress",attrs:{color:"#ff4a57"}}),a("PreLoader"),a("div",{staticClass:"w-max grid grid-cols-[6fr,3fr] gap-[145px] mt-[8rem] mediaview",attrs:{id:"grid-home"}},[a("div",{staticClass:"p-[2rem] pt-[1rem]",attrs:{id:"padding1-home"}},[a("Accounts"),a("h1",{staticClass:"mt-[50px] mb-[25px] text-white font-bold text-[45px]",staticStyle:{"font-family":"Curly"}},[t._v("Merhaba, ben "),a("font",{attrs:{color:"#ff4a57"}},[t._v(" 358. ")])],1),a("p",{staticClass:"text-[18px] text-white mb-[50px] w-[630px]",attrs:{id:"text-home"},domProps:{innerHTML:t._s(t.bio)}}),a("a",{staticClass:"w-[171px] font-medium h-[55px] pt-[13px] text-[15px] pb-[13px] pl-[40px] pr-[40px] rounded-[50px] border-[#ff4a57] border-2 hover:bg-[#ff4a57] text-white",staticStyle:{transition:".3s ease"},attrs:{href:"https://github.com/i358/i358.me"}},[t._v("Github'da görüntüle.")])],1),a("Presence")],1)],1)},O=[],P=(a("99af"),a("7db0"),a("ac1f"),a("1276"),a("a15b"),a("a36f")),A=a.n(P),T=a("bc3a"),N=a("e956"),L=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},$=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"flex gap-[15px] list-none",attrs:{id:"accounts-router"}},[a("a",{staticClass:"account-item",attrs:{href:"https://instagram.com/358.xd"}},[a("i",{staticClass:"fa fa-instagram"})]),a("a",{staticClass:"account-item",attrs:{href:"https://github.com/i358"}},[a("i",{staticClass:"fab fa-github"})]),a("a",{staticClass:"account-item",attrs:{href:"/"}},[a("i",{staticClass:"fab fa-spotify"})]),a("a",{staticClass:"account-item",attrs:{href:"https://discord.gg/6bAg88URyz"}},[a("i",{staticClass:"fab fa-discord"})])])}],B={},U=Object(p["a"])(B,L,$,!1,null,null,null),z=U.exports,R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex justify-center w-full items-center pl-[4rem]",staticStyle:{"z-index":"32"},attrs:{id:"presence"}},[a("div",{staticClass:"bg-[#181b23] rounded-[15px] grid absolute grid-rows-[5fr,auto] grid-cols-[auto] pb-[35px]",staticStyle:{"box-shadow":"0 10px 25px 5px rgba(0, 0, 0, 0.2)","z-index":"32"}},[a("div",{staticClass:"h-[80px] w-[350px] p-[15px] pt-[25px] pb-[15px] flex",staticStyle:{"border-radius":"15px 15px 0 0",background:"#222732"}}),a("div",[t.avatarURL?a("img",{staticClass:"rounded-[50%] absolute ml-[7%] top-[40px] av3",attrs:{src:t.avatarURL,height:"90",width:"90",alt:"Avatar"}}):t._e(),a("div",{staticClass:"absolute rounded-[50%] h-[28px] w-[28px] av2 left-[90px] mt-[25px] flex items-center justify-center",style:t.statusColor},[a("span",{class:t.statusAltBadge})])]),t.username&&t.tag?a("div",{staticClass:"pt-[55px] pb-[15px]",staticStyle:{"z-index":"32"}},[t.username&&t.tag&&t.discord_status?a("div",{staticClass:"text-[22px] items-center flex w-[max-content] pt-3 pb-0 pl-5 font-bold"},[t._v(t._s(t.username)),a("font",{attrs:{color:"#aaa"}},[t._v("#"+t._s(t.tag))])],1):t._e(),t.status?a("div",{staticClass:"pt-0 pl-5 flex items-center text-[16px] pr-[15px] mt-[5px]",staticStyle:{"max-width":"350px"}},[t._v(t._s(t.status))]):t._e()]):t._e(),t._m(0),t.spotify?a("div",{staticClass:"grid p-[20px] pb-[0] gap-[15px] grid-rows[2fr,6fr]",staticStyle:{"font-family":"Rubik","max-width":"350px"},attrs:{id:"spotify"}},[t._m(1),a("div",{staticClass:"grid grid-cols-[max-content,auto] gap-[12px]",attrs:{id:"song_details"}},[a("img",{staticClass:"rounded-[10px]",attrs:{src:t.spotify.album_art_url,height:"70",width:"70"}}),a("div",[a("p",{staticClass:"font-medium text-[16px]"},[t._v(" "+t._s(t.spotify.song)+" ")]),a("p",{staticClass:"text-[14px]"},[t._v(" by "+t._s(t.spotify.artist)+" ")]),a("p",{staticClass:"text-[14px]"},[t._v(" on "+t._s(t.spotify.album)+" ")])])])]):t._e(),t.presence&&t.presence.discord_user&&t.avatarURL&&t.username&&t.tag?t._e():a("div",{staticClass:"spinner"},[t._m(2)])])])},D=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex items-center justify-center p-[0]"},[a("hr",{staticStyle:{width:"90%",margin:"0 auto",padding:"1px"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"grid grid-cols-[8fr,auto] items-center"},[a("p",{staticClass:"font-bold text-[14px] uppercase text-[#cad1d7]",staticStyle:{"font-family":"Curly"}},[t._v("Listening to Spotify")]),t._v(" "),a("i",{staticClass:"fa fa-spotify text-[22px] mr-[10px]"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"uil-ripple-css",staticStyle:{transform:"scale(0.29)"}},[a("div"),a("div")])}],V={data:function(){return l}},H=V,J=Object(p["a"])(H,R,D,!1,null,null,null),M=J.exports,G={name:"Home",mounted:function(){var t=this;this.$refs.topProgress.start(),this.thumbStyle="border-radius:15px 15px 0 0;background:".concat(this.thumbnailColor),Object(T["get"])("https://api.lanyard.rest/v1/users/"+this.id,{}).then((function(e){t.setUserData(e.data.data),t.$refs.topProgress.done();var a=new WebSocket("wss://api.lanyard.rest/socket");a.addEventListener("open",(function(){a.send(JSON.stringify({op:2,d:{subscribe_to_id:t.id}})),setInterval((function(){a.send(JSON.stringify({op:3}))}),3e4)})),a.addEventListener("error",(function(){t.lanyard.error=!0})),a.addEventListener("message",(function(e){var a=e.data,s=JSON.parse(a);0===s.op&&t.setUserData(s.d)}))})).catch((function(e){console.log(e),t.$refs.topProgress.fail()})),document.title="358: Homepage"},data:function(){return l},methods:{setUserData:function(t){switch(console.log("WS_EVENT::UPDATE_PRESENCE / SOCK-1"),this.presence=t,this.avatarURL=t.discord_user.avatar?"https://cdn.discordapp.com/avatars/".concat(t.discord_user.id,"/").concat(t.discord_user.avatar):"https://cdn.discordapp.com/avatars/embed/3.png",this.username=t.discord_user.username,this.tag=t.discord_user.discriminator,this.status=t.activities.find((function(t){return"custom"===t.id}))?t.activities.find((function(t){return"custom"===t.id})).state:"",this.spotify=t.listening_to_spotify?this.spotifyParser(t.spotify):"",this.discord_status=t.discord_status,t.discord_status){case"online":this.statusColor="background:hsl(139, calc(var(--saturation-factor, 1) * 47.3%), 43.9%)",this.statusAltBadge="hidden";break;case"idle":this.statusColor="background:hsl(38, calc(var(--saturation-factor, 1) * 95.7%), 54.1%);",this.statusAltBadge="bg-[#191b23] h-[12px] left-[3px] top-[4px] absolute w-[16px] roundedw";break;case"dnd":this.statusColor="background:hsl(359, calc(var(--saturation-factor, 1) * 82.6%), 59.4%)",this.statusAltBadge="bg-[#191b23] left-[8px] top-[12.4px] absolute rounded-[5px] w-[12px] h-[3.8px]";break;case"offline":this.statusColor="background:hsl(214, calc(var(--saturation-factor, 1) * 9.9%), 50.4%)",this.statusAltBadge="bg-[#191b23] left-[10px] top-[10px] rounded-[90%] absolute h-[8px] w-[8px] lg:h-[9px] lg:w-[9px] rounded-[90%]";break;default:this.statusColor="",this.statusAltBadge="";break}},spotifyParser:function(t){return console.log("WS_EVENT::UPDATE_SPOTIFY / SOCK-1"),t.artist=this.nameNormalize(t.artist),t},nameNormalize:function(t){var e=t.split("; ");return e.join(", ")}},components:{PreLoader:h["a"],vueTopprogress:P["vueTopprogress"],VueTyper:N["VueTyper"],Accounts:z,Presence:M}},K=G,F=(a("21bb"),Object(p["a"])(K,j,O,!1,null,null,null)),q=F.exports;r["a"].use(E["a"]);var I=[{path:"/",name:"Home",component:q},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],W=new E["a"]({mode:"history",base:"/",routes:I}),Y=W;a("ba8c");r["a"].config.productionTip=!1,new r["a"]({router:Y,VuePageTransition:s["default"],vueTopprogress:A.a,render:function(t){return t(k)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"6dea":function(t,e,a){},"9c0c":function(t,e,a){},b184:function(t,e,a){"use strict";a("fca8")},b752:function(t){t.exports=JSON.parse('{"statusAltBadge":"bg-[#191b23] left-[10px] top-[10px] rounded-[90%] absolute h-[8px] w-[8px] lg:h-[9px] lg:w-[9px] rounded-[90%]","statusColor":"background:hsl(214, calc(var(--saturation-factor, 1) * 9.9%), 50.4%)","tag":"","id":"453336745967091722","name":"358","spotify":{},"discord_status":"","username":"","bio":"Yaklaşık 3 yıldır yazılımla uğraşmaktayım. Bu süreç içinde bir çok web sitesi, uygulama, teknoloji v.s geliştirdim ve geliştirmeye devam ediyorum. Genellikle kullandığım teknolojiler ise Vue, React, Vite, NativeScript ve TailwindCSS. Geliştirdiğim çoğu projeyi <a class=\'link-item\' href=\'https://github.com/i358\'>Github</a> hesabımda paylaşıyorum, eğer işinize yarayan bir şey olursa fork edebilir ve starlayabilirsiniz. ","status":"","avatarURL":"","presence":{},"sitename":"i358","domain":"me"}')},ba8c:function(t,e,a){},fca8:function(t,e,a){}});
//# sourceMappingURL=app.53a3965c.js.map