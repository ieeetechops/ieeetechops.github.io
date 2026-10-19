// Sitedeki içeriklerin tamamı bu dosyadan gelir.
// Metin, proje veya yol haritası güncellemek için yalnızca burayı düzenlemek yeterlidir.
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  BookMarked,
  BookOpen,
  CalendarCheck,
  FolderKanban,
  Gauge,
  Globe,
  Lightbulb,
  Repeat,
  Server,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Workflow,
} from "lucide-react";

const gh = "https://github.com/ieeetechops";

export const links = {
  github: gh,
  docs: "https://ieeetechops.github.io/ieeetechops/",
  techopsRepo: `${gh}/ieeetechops`,
  projectLab: `${gh}/project-lab`,
  catalog: `${gh}/project-lab/blob/main/catalog/README.md`,
  propose: `${gh}/project-lab/issues/new?template=project-proposal.yml`,
  rubric: `${gh}/project-lab/blob/main/docs/evaluation-rubric.md`,
  lifecycle: `${gh}/project-lab/blob/main/docs/lifecycle.md`,
  contributing: `${gh}/ieeetechops/blob/main/CONTRIBUTING.md`,
  governance: `${gh}/ieeetechops/blob/main/GOVERNANCE.md`,
  roadmap: `${gh}/ieeetechops/blob/main/ROADMAP.md`,
  security: `${gh}/ieeetechops/blob/main/SECURITY.md`,
  site: `${gh}/ieeetechops.github.io`,
  career: "https://ieee-ikcu-kariyer.web.app/",
  email: "sametutku16@gmail.com",
  contact: "mailto:sametutku16@gmail.com",
  kvkk: "/kvkk/",
  privacy: "/gizlilik/",
  cookies: "/cerez-politikasi/",
};

export const isExternal = (href: string) => href.startsWith("http");

export const nav = [
  { label: "Hakkımızda", href: "/#hakkimizda" },
  { label: "Faaliyet Alanları", href: "/#alanlar" },
  { label: "Project Lab", href: "/#project-lab" },
  { label: "Projeler", href: "/#projeler" },
  { label: "Yol Haritası", href: "/#yol-haritasi" },
  { label: "Kariyer", href: links.career },
];

type Step = { icon: LucideIcon; label: string; text: string };

export const flow: Step[] = [
  { icon: Lightbulb, label: "İhtiyaç analizi", text: "İhtiyaç ve kapsam belirlenir" },
  { icon: FolderKanban, label: "Proje", text: "Sorumlu, kapsam ve kabul kriterleri tanımlanır" },
  { icon: Server, label: "Servis", text: "Sistem devreye alınır ve izlenir" },
  { icon: Activity, label: "Operasyon", text: "Bakım, erişim ve süreklilik sağlanır" },
  { icon: BookOpen, label: "Dokümantasyon", text: "Kararlar ve işletim belgeleri kayıt altına alınır" },
  { icon: Repeat, label: "Devir", text: "Sistem sonraki yönetim dönemine devredilir" },
];

export const stats = [
  { value: 6, label: "faaliyet alanı" },
  { value: 60, label: "katalogdaki proje" },
  { value: 14, label: "haftalık proje dönemi" },
  { value: 100, prefix: "%", label: "açık kaynak depo" },
];

export const principles = [
  "Kritik sistemler kişilere değil, kola aittir.",
  "Erişim yetkileri görev için gereken en düşük düzeyde verilir.",
  "Kalıcı teknik kararlar yazılı ve izlenebilir şekilde kaydedilir.",
  "Canlı sistemlerdeki değişiklikler gözden geçirilir ve geri alınabilir olur.",
  "Bilgi güvenliği ve kişisel verilerin korunması her aşamada gözetilir.",
];

type Area = { icon: LucideIcon; title: string; text: string };

export const areas: Area[] = [
  { icon: Users, title: "Üyelik sistemleri", text: "Kimlik doğrulama, rol yönetimi ve üye kayıt süreçleri." },
  { icon: CalendarCheck, title: "Etkinlik operasyonları", text: "Başvuru, katılımcı yönetimi, giriş kontrolü ve sertifika süreçleri." },
  { icon: Workflow, title: "Otomasyon", text: "Tekrarlanan işlemlerin ve veri aktarımlarının otomasyonu." },
  { icon: Globe, title: "Web servisleri", text: "Web siteleri, yönetim panelleri ve uygulama arayüzleri (API)." },
  { icon: ShieldCheck, title: "Teknik altyapı", text: "Hesap ve erişim yönetimi, yedekleme ve servis sürekliliği." },
  { icon: BookMarked, title: "Kurumsal teknik bilgi", text: "Mimari kararlar, kılavuzlar, işletim belgeleri ve devir dokümanları." },
];

type Criterion = { icon: LucideIcon; title: string; text: string };

export const criteria: Criterion[] = [
  { icon: Target, title: "Tanımlı problem", text: "Projenin ele aldığı problem ve etkilediği kullanıcılar açıkça belirtilir." },
  { icon: Gauge, title: "Ölçülebilir hedef", text: "Başlangıç ölçümü, hedef metrik ve ölçüm yöntemi proje başında yazılır." },
  { icon: Sparkles, title: "Mevcut çalışmalarla karşılaştırma", text: "Benzer çözümler incelenir ve projenin bunlardan farkı belgelenir." },
];

export const catalogAreas = [
  { code: "A", title: "Web teknolojileri ve tarayıcı mühendisliği", count: 4 },
  { code: "B", title: "Backend, API ve dağıtık sistemler", count: 4 },
  { code: "C", title: "Yazılım mühendisliği ve geliştirici araçları", count: 4 },
  { code: "D", title: "Siber güvenlik ve mahremiyet mühendisliği", count: 4 },
  { code: "E", title: "Veri mühendisliği ve uygulamalı yapay zekâ", count: 4 },
  { code: "F", title: "İnsan-bilgisayar etkileşimi ve erişilebilirlik", count: 4 },
  { code: "G", title: "İşletim sistemleri, ağlar ve altyapı", count: 4 },
  { code: "H", title: "Bilgisayar grafikleri ve etkileşimli sistemler", count: 4 },
  { code: "I", title: "Robotik ve otonom sistemler", count: 4 },
  { code: "J", title: "Gömülü sistemler ve nesnelerin interneti", count: 4 },
  { code: "K", title: "Bilgisayarlı görü", count: 4 },
  { code: "L", title: "Oyun teknolojileri", count: 4 },
  { code: "M", title: "Programlama dilleri ve derleyici araçları", count: 4 },
  { code: "N", title: "Bilimsel hesaplama ve simülasyon", count: 4 },
  { code: "O", title: "Ses, müzik ve dijital sanat teknolojileri", count: 4 },
];

export const stages = [
  { gate: "K0", title: "Öneri", week: "Hafta 0", text: "Proje önerisi ve başarı ölçütleri" },
  { gate: "K1", title: "Keşif", week: "Hafta 1–3", text: "Başlangıç ölçümü ve yöntem seçimi" },
  { gate: "K2", title: "Geliştirme", week: "Hafta 4–8", text: "Çalışan sürüm ve ara değerlendirme" },
  { gate: "K3", title: "Tamamlama", week: "Hafta 9–13", text: "Kararlı sürüm, belgeler ve hata analizi" },
  { gate: "✓", title: "Sonuç", week: "Hafta 14", text: "Final sunumu; bakım, yayın veya arşiv kararı" },
];

export type Status = "Aktif" | "Planlama" | "Hazırlanıyor";

export const projects: { title: string; text: string; status: Status; href?: string }[] = [
  { title: "IEEE Project Lab", text: "Öğrenci proje geliştirme programının yönetişim deposu ve proje kataloğu.", status: "Aktif", href: links.projectLab },
  { title: "TechOps Dokümantasyonu", text: "Birimin çalışma standartları ve teknik belgeleri.", status: "Aktif", href: links.techopsRepo },
  { title: "Başvuru Platformu", text: "Başvuru ve değerlendirme süreçlerinin yönetimi.", status: "Hazırlanıyor" },
  { title: "Üyelik Altyapısı", text: "Üye kayıt süreçleri ve veri bütünlüğü.", status: "Planlama" },
  { title: "HeptaCert Entegrasyonu", text: "Etkinlik verilerinin kontrollü aktarımı.", status: "Planlama" },
  { title: "Drive Yapılandırması", text: "Dosya, klasör ve paylaşım standardı.", status: "Planlama" },
];

export const ecosystem = [
  { area: "Web", system: "WordPress" },
  { area: "Kimlik ve üye verisi", system: "Firebase" },
  { area: "Etkinlik yönetimi", system: "HeptaCert" },
  { area: "Operasyonel çalışma", system: "Google Workspace" },
  { area: "Kaynak kodu ve dokümantasyon", system: "GitHub" },
  { area: "Entegrasyonlar", system: "REST API ve webhook" },
];

export const roadmap = [
  {
    phase: "Mevcut dönem",
    title: "Temel yapı",
    items: [
      { text: "TechOps dokümantasyon deposu", done: true },
      { text: "Katkı, güvenlik ve yönetişim kuralları", done: true },
      { text: "Issue ve pull request şablonları", done: true },
      { text: "GitHub Pages dokümantasyon altyapısı", done: true },
      { text: "Proje ve servis sorumlularının belirlenmesi", done: false },
      { text: "Kurumsal hesap ve erişim envanteri", done: false },
      { text: "GitHub organizasyonu ekip ve yetki düzeni", done: false },
    ],
  },
  {
    phase: "Sonraki adım",
    title: "Standartlaştırma",
    items: [
      { text: "Yeni proje başlangıç şablonu", done: false },
      { text: "Servis envanteri ve sorumluluk matrisi", done: false },
      { text: "Erişim gözden geçirme süreci", done: false },
      { text: "Drive klasör ve paylaşım standardı", done: false },
      { text: "Yedekleme ve kurtarma testleri", done: false },
      { text: "Teknik karar kayıtlarının tamamlanması", done: false },
    ],
  },
  {
    phase: "Orta vade",
    title: "Ürünler ve entegrasyonlar",
    items: [
      { text: "Başvuru ve operasyon platformu", done: false },
      { text: "Üyelik altyapısı iyileştirmeleri", done: false },
      { text: "HeptaCert veri entegrasyonu", done: false },
      { text: "Etkinlik raporlama otomasyonu", done: false },
      { text: "Servis durumu izleme", done: false },
      { text: "Yönetim dönemi devir paneli", done: false },
    ],
  },
];
