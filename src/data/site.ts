// Sitedeki içeriklerin tamamı bu dosyadan gelir.
// Metin, proje veya yol haritası güncellemek için yalnızca burayı düzenlemek yeterlidir.
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  BookMarked,
  BookOpen,
  BrainCircuit,
  CalendarCheck,
  FileSearch,
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
  Wrench,
} from "lucide-react";

const gh = "https://github.com/ieeetechops";

export const links = {
  github: gh,
  docs: "https://ieeetechops.github.io/ieeetechops/",
  techopsRepo: `${gh}/ieeetechops`,
  projectLab: `${gh}/project-lab`,
  propose: `${gh}/project-lab/issues/new?template=project-proposal.yml`,
  rubric: `${gh}/project-lab/blob/main/docs/evaluation-rubric.md`,
  lifecycle: `${gh}/project-lab/blob/main/docs/lifecycle.md`,
  contributing: `${gh}/ieeetechops/blob/main/CONTRIBUTING.md`,
  governance: `${gh}/ieeetechops/blob/main/GOVERNANCE.md`,
  roadmap: `${gh}/ieeetechops/blob/main/ROADMAP.md`,
  security: `${gh}/ieeetechops/blob/main/SECURITY.md`,
  site: `${gh}/ieeetechops.github.io`,
};

export const nav = [
  { label: "Hakkımızda", href: "#hakkimizda" },
  { label: "Çalışma Alanları", href: "#alanlar" },
  { label: "Project Lab", href: "#project-lab" },
  { label: "Projeler", href: "#projeler" },
  { label: "Yol Haritası", href: "#yol-haritasi" },
];

type Step = { icon: LucideIcon; label: string; text: string };

export const flow: Step[] = [
  { icon: Lightbulb, label: "İhtiyaç", text: "Gerçek bir problem tanımlanır" },
  { icon: FolderKanban, label: "Proje", text: "Sahip, kapsam ve kabul kriterleri" },
  { icon: Server, label: "Servis", text: "Çalışan, izlenebilir sistem" },
  { icon: Activity, label: "Operasyon", text: "Bakım, erişim ve süreklilik" },
  { icon: BookOpen, label: "Dokümantasyon", text: "Kararlar ve runbook'lar yazılır" },
  { icon: Repeat, label: "Sürdürülebilir devir", text: "Sonraki ekip kaldığı yerden devam eder" },
];

export const stats = [
  { value: 6, label: "çalışma alanı" },
  { value: 3, label: "Project Lab proje türü" },
  { value: 14, label: "haftalık proje dönemi" },
  { value: 100, prefix: "%", label: "herkese açık depo" },
];

export const principles = [
  "Kritik sistemler kişilere değil organizasyona aittir.",
  "Yetki, görev için gereken en düşük seviyede verilir.",
  "Kalıcı teknik kararlar yazılı ve izlenebilir olmalıdır.",
  "Üretim değişiklikleri gözden geçirilebilir ve geri alınabilir olmalıdır.",
  "Güvenlik ve kişisel veri, hız uğruna ikinci plana atılmaz.",
];

type Area = { icon: LucideIcon; title: string; text: string };

export const areas: Area[] = [
  { icon: Users, title: "Üyelik sistemleri", text: "Kimlik doğrulama, roller ve üye deneyimi." },
  { icon: CalendarCheck, title: "Etkinlik operasyonları", text: "Başvuru, katılımcı, check-in ve sertifika akışları." },
  { icon: Workflow, title: "Otomasyon", text: "Tekrarlayan işlerin ve veri aktarımlarının otomasyonu." },
  { icon: Globe, title: "Web servisleri", text: "Web sitesi, yönetim panelleri ve API'ler." },
  { icon: ShieldCheck, title: "Teknik altyapı", text: "Hesaplar, erişimler, yedekleme ve servis sürekliliği." },
  { icon: BookMarked, title: "Teknik hafıza", text: "Mimari kararlar, rehberler, runbook'lar ve devir belgeleri." },
];

type Track = { icon: LucideIcon; title: string; type: string; text: string };

export const tracks: Track[] = [
  {
    icon: FileSearch,
    title: "Digital Archive ve belge zekâsı",
    type: "Ürün / sistem",
    text: "Dağınık kol arşivini aranabilir ve ilişkilendirilebilir hale getirmek.",
  },
  {
    icon: BrainCircuit,
    title: "Machine Learning araştırması",
    type: "Araştırma",
    text: "Mevcut yöntemlerin yetersiz kaldığı ölçülebilir bir alt problemde anlamlı iyileşme.",
  },
  {
    icon: Wrench,
    title: "Açık kaynak mühendislik aracı",
    type: "Açık kaynak",
    text: "Mühendislik öğrencilerinin elle tekrarladığı işleri sürdürülebilir bir araçla çözmek.",
  },
];

type Criterion = { icon: LucideIcon; title: string; text: string };

export const criteria: Criterion[] = [
  { icon: Target, title: "Gerçek problem", text: "Kimin, hangi durumda, neden zorlandığı kanıtla gösterilir." },
  { icon: Gauge, title: "Ölçülebilir sonuç", text: "Baseline, hedef metrik ve ölçüm yöntemi baştan yazılır." },
  { icon: Sparkles, title: "Özgün yaklaşım", text: "Mevcut çözümlerden nasıl ayrıldığı açıkça belgelenir." },
];

export const stages = [
  { gate: "K0", title: "Öneri", week: "Hafta 0", text: "Problem kanıtı ve başarı ölçütleri" },
  { gate: "K1", title: "Keşif", week: "Hafta 1–3", text: "Baseline ölçümü ve yaklaşım seçimi" },
  { gate: "K2", title: "Geliştirme", week: "Hafta 4–8", text: "Çalışan sürüm ve ara değerlendirme" },
  { gate: "K3", title: "Tamamlama", week: "Hafta 9–13", text: "Kararlı sürüm, belgeler, hata analizi" },
  { gate: "✓", title: "Sonuç", week: "Hafta 14", text: "Final sunumu: bakım, yayın veya arşiv" },
];

export type Status = "Aktif" | "Planlama" | "Hazırlanıyor";

export const projects: { title: string; text: string; status: Status; href?: string }[] = [
  { title: "IEEE Project Lab", text: "Öğrencilerin özgün mühendislik problemleri üzerinde çalıştığı proje geliştirme programı.", status: "Aktif", href: links.projectLab },
  { title: "TechOps Dokümantasyonu", text: "Teknik hafıza ve çalışma standartları.", status: "Aktif", href: links.techopsRepo },
  { title: "Başvuru Platformu", text: "Başvuru ve değerlendirme süreçlerini yönetmek.", status: "Hazırlanıyor" },
  { title: "Üyelik Altyapısı", text: "Üyelik deneyimi ve veri bütünlüğü.", status: "Planlama" },
  { title: "HeptaCert Entegrasyonu", text: "Etkinlik verilerini kontrollü aktarmak.", status: "Planlama" },
  { title: "Drive Yapılandırması", text: "Dosya, klasör ve paylaşım standardı.", status: "Planlama" },
];

export const ecosystem = [
  { area: "Web", system: "WordPress" },
  { area: "Kimlik ve üye verisi", system: "Firebase" },
  { area: "Etkinlik yönetimi", system: "HeptaCert" },
  { area: "Operasyonel çalışma", system: "Google Workspace" },
  { area: "Kaynak kodu ve teknik hafıza", system: "GitHub" },
  { area: "Entegrasyonlar", system: "REST API ve webhook" },
];

export const roadmap = [
  {
    phase: "Şimdi",
    title: "Temel yapı",
    items: [
      { text: "TechOps dokümantasyon deposu", done: true },
      { text: "Katkı, güvenlik ve yönetişim kuralları", done: true },
      { text: "Issue ve pull request şablonları", done: true },
      { text: "GitHub Pages dokümantasyon altyapısı", done: true },
      { text: "Proje ve servis sahiplerinin doğrulanması", done: false },
      { text: "Kurumsal hesap ve erişim envanteri", done: false },
      { text: "GitHub organizasyonu takım/yetki düzeni", done: false },
    ],
  },
  {
    phase: "Sırada",
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
    phase: "Sonra",
    title: "Ürünler ve entegrasyonlar",
    items: [
      { text: "Başvuru ve operasyon platformu", done: false },
      { text: "Üyelik altyapısı iyileştirmeleri", done: false },
      { text: "HeptaCert veri entegrasyonu", done: false },
      { text: "Etkinlik raporlama otomasyonu", done: false },
      { text: "Servis durumu ve gözlemlenebilirlik", done: false },
      { text: "Yönetim dönemi devir paneli", done: false },
    ],
  },
];
