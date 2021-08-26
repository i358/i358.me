
# Proje Hakkında

Kendim hakkında bir özet içeren, projelerimin yer aldığı ufak çaplı bir kişisel site projesi. Eğer beğenirseniz starlayabilir ve kullanmak isterseniz fork edebilirsiniz.
Ekran görüntüleri ve detaylı bilgiler için [bu sayfaya](https://github.com/i358/i358.me/wiki/) göz atın.

**• Ekran Görüntüsü (v0.8.2)**

![scr](https://github.com/i358/i358.me/raw/master/screenshot.png)

# Özellikler

- Gerçek zamanlı durum güncellemeleri.
- Hızlı ve az kaynak tüketimine sahip.
- Diğer cihazlarda uyumlu tasarım.
- Açık kaynak kodlu yazılım.

  
# Renk Paleti

| Renk             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------------------ |
| Arkaplan | ![#181b29](https://via.placeholder.com/10/181b29?text=+) #181b29      |
| Yazılar | ![#f1f2f3](https://via.placeholder.com/10/f1f2f3?text=+) #f1f2f3    |
| Gölgeler | ![#5e5f6b](https://via.placeholder.com/10/5e5f6b?text=+) #5e5f6b    |
| Kenarlıklar| ![#e55169](https://via.placeholder.com/10/e55169?text=+) #e55169    | 

# Yükleme ve Kurulum 

Projeyi çalıştırmadan önce yapmanız gereken bir kaç adım var, gerekli modülleri yüklemek ve ayarları yapmak.

 - Projeyi indirin
```sh 
$ git clone https://github.com/i358/i358.me
```
    
  - Modülleri kurun 
```sh
$ cd i358.me
$ npm install
```

- Projeyi kendinize göre ayarlayın. (*Gerekli ayarları **src/__1.json** içerisinde düzenleyebilirsiniz)*
  
| Anahtar             | Değer      | Varsayılan                                        |
| ----------------- | -------------|----------------------------------------------------------------- |
| `ID` | Discord'da ki kullanıcı ID numaranız.   | 453336745967091722 |
| `NAME` | Sitede görünecek nickiniz veya isminiz.   | 358 | 
| `BIO` | Anasayfada görünen kişisel bilginizi içeren kısım.   | - | 
| `SITENAME` | Navbar bölümünde görünecek ve yönlendirmede kullanılacak site ismi.  | i358 | 
| `DOMAIN ` | Navbar bölümünde görünecek ve yönlendirmelerde kullanılacak site alan adı. | .me


- Dağıtım için hazırlayın 

```sh
$ npm install -g @vue/cli serve
$ npm run build
```

# Dağıtım

Dağıtım için hazırladıktan sonra siteyi aktif etmek için aşağıdaki yönergeleri izleyin.

- Siteyi uzak sunucuda çalıştırma
```sh
$ serve -s dist -p 80
```
- Projeyi ücretsiz depolama servislerinde çalıştırma 
*(Aşağıdaki bağlantılardan birine tıklayarak siteyi nasıl ücretsiz servisler üzerinde dağıtacağınızı öğrenebilirsiniz)*
  
  [![App Icon](https://badges.netlify.com/api/i358.svg?branch=master
)](https://www.netlify.com/blog/2019/11/30/how-to-deploy-a-vue-site/) 

  [![App Icon](http://therealsujitk-vercel-badge.vercel.app/?app=i358)](https://vercel.com/guides/deploying-vuejs-to-vercel)

  
# Yardım ve Destek

Yardım ve destek için [help@i358.me](mailto:help@i358.me) adresinden bana ulaşabilir veya sosyal medya hesaplarımdan iletişime geçebilirsiniz.
  

# Lisans

[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)
