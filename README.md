# CRM - AI Agents (Centernex AI)

Centernex AI, işletmeler için özelleştirilmiş, insan sesine yakın AI sesli asistan çözümleri sunan modern bir landing page ve CRM yönetim platformudur. Proje, yüksek performanslı ve kullanıcı dostu bir deneyim sunmak için **React** ve **Tailwind CSS v2** standartları ile geliştirilmiştir.

## 🚀 Özellikler

- **Canlı Sesli Demo:** Farklı sektörlere (Emlak, Sağlık, Restoran vb.) özel AI sesli asistan simülasyonları ve interaktif widget entegrasyonu.
- **ROI Hesaplayıcı:** İşletmelerin AI sesli asistan kullanımından elde edeceği tasarrufu ve ek kazancı dinamik olarak hesaplayan araç.
- **Dinamik Hero Bileşeni:** Tüm sayfalar (Home, ROI, Demo, Contact) için tek bir merkezden yönetilen, yüksek oranda özelleştirilebilir Hero alanı.
- **Responsive Navigasyon:** Mobil uyumlu, hamburger menü destekli ve kaydırma (scroll) efektli gelişmiş Navbar.
- **Tailwind v2 Optimizasyonu:** Modern tasarım trendlerini eski nesil tarayıcı desteği ve stabiliteyle birleştiren CSS yapısı.

## 🛠️ Teknolojiler

- **Frontend:** [React.js](https://reactjs.org/)
- **Styling:** [Tailwind CSS v2.x](https://tailwindcss.com/docs/v2) (v3 özelliklerinden arındırılmış, optimize yapı)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/) / npm

## 📦 Kurulum ve Çalıştırma

Projeyi yerel ortamınızda ayağa kaldırmak için aşağıdaki komutları izleyin:

1. **Depoyu Klonlayın:**
   ```bash
   git clone [repo-url-buraya]
   cd crm-ai-agents

2. **Bağımlılıkları Yükleyin:**
   ```bash
   npm install

3. **Geliştirme Sunucusunu Başlatın:**
   ```bash
   npm run dev

4. **Üretim (Production) Build'i Alın:**
   ```bash
   npm run build

## 📂 Proje Yapısı

    Plaintext
    src/
    ├── assets/             # Logolar, ikonlar ve görseller
    ├── components/         # Ortak bileşenler
    │   ├── PageHero.jsx    # Çok amaçlı merkezi Hero bileşeni
    │   ├── Navbar.jsx      # Mobil uyumlu navigasyon çubuğu
    │   └── ui/             # Temel UI elemanları (Button, Badge vb.)
    ├── constants/          # Global değişkenler ve yardımcı fonksiyonlar (general.js)
    ├── pages/              # Sayfa bazlı ana bileşenler
    └── App.jsx             # Ana uygulama çatısı ve yönlendirme mantığı

## ⚠️ Önemli Geliştirme Notları (Tailwind v2 Standartları)

Proje Tailwind CSS v2 üzerine inşa edildiği için yeni geliştirme yaparken aşağıdaki v3 öncesi kurallara dikkat edilmelidir:

Transform: translate-x-0 veya scale-95 gibi sınıfların çalışması için elemente mutlaka transform sınıfı eklenmelidir.

Opacity: bg-blue-500/20 gibi kısa yazımlar yerine bg-blue-500 bg-opacity-20 yazımı tercih edilmelidir.

Blur Efektleri: backdrop-blur efekti kullanıldığında tarayıcı desteği için backdrop-filter sınıfı da eklenmelidir.

Renk Paleti: Varsayılan olarak indigo, purple, green ve gray paletleri kullanılmıştır.

##💡 PageHero Bileşeni Kullanımı

PageHero.jsx bileşeni props üzerinden yönetilir. Örnek kullanım:

JavaScript

import PageHero from './components/PageHero';
import { Sparkles } from 'lucide-react';

<PageHero 
  badgeText="Yeni Nesil CRM"
  titleNormal="Yapay Zeka"
  titleHighlight="Sesli Asistanlar"
  isItalic={true}
  description="Müşteri görüşmelerinizi otomatikleştirin."
  primaryBtnText="Hemen Dene"
  primaryBtnAction={() => setPage('demo')}
  Icon={Sparkles}
/>

## 📄 Lisans
Bu proje Centernex AI mülkiyetindedir. İzinsiz kopyalanamaz veya ticari amaçla dağıtılamaz.