# IEEE İKÇÜ TechOps — Web Sitesi

**https://ieeetechops.github.io**

IEEE İzmir Kâtip Çelebi Üniversitesi Öğrenci Kolu TechOps ekibinin tanıtım sitesi.

## Teknolojiler

- [Vite](https://vite.dev) + [React](https://react.dev) + TypeScript
- [Tailwind CSS](https://tailwindcss.com) v4
- [Motion](https://motion.dev) (animasyonlar)
- [Lucide](https://lucide.dev) (ikonlar)
- GitHub Pages + GitHub Actions (otomatik yayın)

## İçerik güncelleme

Sitedeki metinlerin, projelerin ve yol haritasının **tamamı** tek bir dosyadan gelir:

```
src/data/site.ts
```

Yeni proje eklemek, durum değiştirmek veya yol haritasındaki bir maddeyi tamamlandı olarak işaretlemek için yalnızca bu dosyayı düzenleyip PR açmak yeterli. `main` dalına birleşen her değişiklik birkaç dakika içinde otomatik yayınlanır.

"GitHub'daki açık depolarımız" bölümü, `ieeetechops` hesabındaki public depoları GitHub API'den canlı olarak çeker.

## Yerelde çalıştırma

Node.js 20.19+ veya 22.12+ gerekir.

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # dist/ klasörüne üretim çıktısı
npm run preview   # üretim çıktısını yerelde önizle
```

## Yapı

```
src/
├── data/site.ts        # tüm içerik
├── components/
│   ├── ui.tsx          # ortak bileşenler (Reveal, SectionHeading, SpotlightCard, Counter, Logo)
│   ├── Hero.tsx        # giriş, yaşam döngüsü animasyonu, istatistikler
│   ├── About.tsx       # TechOps nedir, ilkeler
│   ├── Areas.tsx       # çalışma alanları
│   ├── ProjectLab.tsx  # Project Lab tanıtımı ve 14 haftalık döngü
│   ├── Projects.tsx    # proje kataloğu + canlı GitHub depoları
│   ├── Ecosystem.tsx   # kullanılan sistemler bandı
│   ├── Roadmap.tsx     # yol haritası
│   ├── Join.tsx        # katılım çağrısı
│   └── Footer.tsx
└── index.css           # tema renkleri ve özel efektler
```

## Erişilebilirlik

İşletim sisteminde "hareketi azalt" tercihi açık olan ziyaretçiler için animasyonlar otomatik olarak devre dışı kalır.

## Lisans

Kod [MIT](LICENSE) lisanslıdır.
