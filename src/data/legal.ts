// KVKK, gizlilik ve çerez sayfalarının metinleri.
// Sitede form, analiz aracı veya çerez kullanılmaya başlanırsa bu metinler güncellenmelidir.

export const legalUpdated = "19 Ekim 2026";

// Başvuruların iletileceği kanal. Kolun resmî e-posta adresi belirlendiğinde buraya yazılmalıdır.
export const legalContact =
  "IEEE İzmir Kâtip Çelebi Üniversitesi Öğrenci Kolu'nun resmî iletişim kanalları";

export type LegalSection = { heading: string; paragraphs?: string[]; list?: string[] };
export type LegalDoc = { slug: "kvkk" | "gizlilik" | "cerez-politikasi"; title: string; intro: string; sections: LegalSection[] };

const controller = "IEEE İzmir Kâtip Çelebi Üniversitesi Öğrenci Kolu";

export const legalDocs: Record<LegalDoc["slug"], LegalDoc> = {
  kvkk: {
    slug: "kvkk",
    title: "KVKK Aydınlatma Metni",
    intro: `Bu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu'nun ("KVKK") 10. maddesi uyarınca, ieeetechops.github.io adresindeki internet sitesini ziyaret eden kişileri bilgilendirmek amacıyla hazırlanmıştır.`,
    sections: [
      {
        heading: "1. Veri sorumlusu",
        paragraphs: [
          `Kişisel verileriniz, veri sorumlusu sıfatıyla ${controller} ("Kol") tarafından, Kol bünyesindeki Teknik Operasyonlar ve Altyapı Dairesi Başkanlığı (TechOps) aracılığıyla işlenmektedir.`,
        ],
      },
      {
        heading: "2. İşlenen kişisel veriler",
        paragraphs: [
          "Bu internet sitesinde üyelik, iletişim formu veya başvuru formu bulunmamaktadır; ziyaretçilerden ad, e-posta veya telefon gibi kimlik ya da iletişim bilgisi talep edilmez.",
          "Siteyi ziyaret etmeniz sırasında yalnızca aşağıdaki teknik bağlantı verileri işlenir:",
        ],
        list: [
          "IP adresi",
          "Tarayıcı ve işletim sistemi bilgisi (user-agent)",
          "Ziyaret edilen sayfa ve erişim tarihi/saati",
        ],
      },
      {
        heading: "3. İşleme amaçları ve hukuki sebep",
        paragraphs: [
          "Teknik bağlantı verileri; sitenin ziyaretçiye iletilmesi, hizmetin güvenli ve kesintisiz sunulması ile kötüye kullanımın önlenmesi amaçlarıyla işlenir.",
          "Bu veriler, KVKK'nın 5. maddesinin 2. fıkrasının (f) bendinde yer alan \"ilgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla, veri sorumlusunun meşru menfaatleri için veri işlenmesinin zorunlu olması\" hukuki sebebine dayanılarak işlenir.",
        ],
      },
      {
        heading: "4. Toplama yöntemi",
        paragraphs: [
          "Veriler, siteyi ziyaret ettiğinizde tarayıcınız ile sunucular arasında kurulan bağlantı sırasında otomatik yollarla elde edilir.",
        ],
      },
      {
        heading: "5. Aktarım",
        paragraphs: [
          "Site, GitHub, Inc. tarafından sağlanan GitHub Pages hizmeti üzerinde barındırılmaktadır. Ayrıca \"Projeler\" bölümündeki açık kaynak depo listesi, tarayıcınız tarafından doğrudan GitHub API'sinden alınır. Bu nedenle teknik bağlantı verileriniz, barındırma ve hizmet sunumu amacıyla yurt dışında (Amerika Birleşik Devletleri) bulunan GitHub, Inc. tarafından işlenir.",
          "GitHub'ın kişisel verileri işleme esasları için GitHub Genel Gizlilik Bildirimi'ne başvurabilirsiniz. Kol, bu veriler üzerinde ayrıca bir kayıt tutmaz ve verileri başka bir üçüncü kişiyle paylaşmaz.",
        ],
      },
      {
        heading: "6. Saklama süresi",
        paragraphs: [
          "Kol, ziyaretçilere ait teknik bağlantı verilerini kendi sistemlerinde saklamaz. Barındırma hizmeti sağlayıcısının tuttuğu kayıtlar, ilgili sağlayıcının saklama politikalarına tabidir.",
        ],
      },
      {
        heading: "7. KVKK kapsamındaki haklarınız",
        paragraphs: ["KVKK'nın 11. maddesi uyarınca veri sorumlusuna başvurarak aşağıdaki haklarınızı kullanabilirsiniz:"],
        list: [
          "Kişisel verilerinizin işlenip işlenmediğini öğrenme",
          "Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme",
          "Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme",
          "Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme",
          "Kişisel verilerinizin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme",
          "KVKK'nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerinizin silinmesini veya yok edilmesini isteme",
          "Düzeltme, silme veya yok etme işlemlerinin, kişisel verilerinizin aktarıldığı üçüncü kişilere bildirilmesini isteme",
          "İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme",
          "Kişisel verilerinizin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme",
        ],
      },
      {
        heading: "8. Başvuru yöntemi",
        paragraphs: [
          `Haklarınıza ilişkin taleplerinizi, Veri Sorumlusuna Başvuru Usul ve Esasları Hakkında Tebliğ'e uygun olarak, ${legalContact} üzerinden yazılı olarak iletebilirsiniz. Başvurular, talebin niteliğine göre en geç otuz gün içinde ücretsiz olarak sonuçlandırılır.`,
        ],
      },
    ],
  },
  gizlilik: {
    slug: "gizlilik",
    title: "Gizlilik Politikası",
    intro: "Bu politika, IEEE İKÇÜ TechOps internet sitesinin (ieeetechops.github.io) ziyaretçilere ait bilgileri nasıl ele aldığını açıklar.",
    sections: [
      {
        heading: "Genel ilke",
        paragraphs: [
          "Site, TechOps birimini ve çalışmalarını tanıtmak amacıyla hazırlanmış bilgilendirme amaçlı bir sitedir. Ziyaretçilerden kişisel bilgi talep edilmez; sitede üyelik, form veya ödeme işlemi bulunmaz.",
        ],
      },
      {
        heading: "Kullanılmayan teknolojiler",
        list: [
          "Ziyaretçi analizi veya istatistik araçları (ör. Google Analytics) kullanılmaz.",
          "Reklam, yeniden hedefleme veya sosyal medya takip kodları bulunmaz.",
          "Yazı tipleri ve görseller sitenin kendi sunucusundan yüklenir; üçüncü taraf yazı tipi veya içerik dağıtım hizmeti kullanılmaz.",
          "Tarayıcınızda çerez, yerel depolama (localStorage) veya oturum depolama (sessionStorage) kaydı oluşturulmaz.",
        ],
      },
      {
        heading: "Üçüncü taraf hizmetler",
        paragraphs: [
          "Site GitHub Pages üzerinde barındırılır. \"Projeler\" bölümündeki depo listesi, tarayıcınız tarafından GitHub API'sinden alınır. Bu bağlantılar sırasında IP adresiniz ve tarayıcı bilginiz GitHub, Inc. tarafından işlenir.",
          "Sitede yer alan GitHub, dokümantasyon ve IEEE İKÇÜ Kariyer platformu gibi harici bağlantılar, kendi gizlilik politikalarına tabidir.",
        ],
      },
      {
        heading: "Kişisel verilerin korunması",
        paragraphs: [
          "Kişisel verilerin işlenmesine ilişkin ayrıntılı bilgi ve KVKK kapsamındaki haklarınız için KVKK Aydınlatma Metni'ni inceleyebilirsiniz.",
        ],
      },
      {
        heading: "Güvenlik",
        paragraphs: [
          "Site HTTPS üzerinden sunulur. Sitenin kaynak kodu GitHub üzerinde herkese açıktır ve güvenlik açıkları TechOps güvenlik politikasında belirtilen yöntemle bildirilebilir.",
        ],
      },
      {
        heading: "Değişiklikler",
        paragraphs: [
          "Sitede kişisel veri işlenmesini gerektiren yeni bir özellik eklenmesi hâlinde bu politika güncellenir. Güncel sürüm her zaman bu sayfada yayımlanır.",
        ],
      },
    ],
  },
  "cerez-politikasi": {
    slug: "cerez-politikasi",
    title: "Çerez Politikası",
    intro: "Bu politika, IEEE İKÇÜ TechOps internet sitesinde (ieeetechops.github.io) çerez ve benzeri teknolojilerin kullanımına ilişkin bilgi verir.",
    sections: [
      {
        heading: "Çerez nedir?",
        paragraphs: [
          "Çerezler, ziyaret ettiğiniz internet siteleri tarafından tarayıcınıza kaydedilen küçük metin dosyalarıdır. Oturum bilgisini hatırlamak, tercihleri saklamak veya ziyaretçi davranışını analiz etmek için kullanılabilirler.",
        ],
      },
      {
        heading: "Bu sitede kullanılan çerezler",
        paragraphs: [
          "Bu site çerez kullanmamaktadır. Tarayıcınıza zorunlu, işlevsel, analitik veya pazarlama amaçlı herhangi bir çerez yerleştirilmez. Yerel depolama ve oturum depolama gibi benzer teknolojiler de kullanılmaz.",
          "Bu nedenle sitede çerez onay bildirimi gösterilmemektedir.",
        ],
      },
      {
        heading: "Harici siteler",
        paragraphs: [
          "Siteden bağlantı verilen GitHub, dokümantasyon sayfaları ve IEEE İKÇÜ Kariyer platformu gibi harici siteler kendi çerez politikalarını uygular. Bu sitelere geçtiğinizde ilgili sitenin politikasını incelemeniz önerilir.",
        ],
      },
      {
        heading: "Çerezleri yönetme",
        paragraphs: [
          "Tarayıcınızın ayarlar menüsünden çerezleri görüntüleyebilir, silebilir veya engelleyebilirsiniz.",
        ],
      },
      {
        heading: "Değişiklikler",
        paragraphs: [
          "Sitede çerez kullanımını gerektiren bir özellik eklenirse bu politika güncellenir ve mevzuatın gerektirdiği durumlarda ziyaretçilerden açık rıza alınır.",
        ],
      },
    ],
  },
};
