/**
 * @file pages/legal.js
 * @description Legal pages: Privacy Policy, KVKK, Distance Sales Agreement.
 */

import { BRAND } from '../config.js';

// ── Privacy Policy ──
export function privacyHTML() {
  return `
    <div class="page-content">
      <h2>Gizlilik Politikası</h2>
      <p>Son güncelleme: Mart 2026</p>
      <h3>1. Toplanan Veriler</h3>
      <p>Sipariş sürecinde adınız, adresiniz, e-posta adresiniz, telefon numaranız ve ödeme bilgileriniz toplanır. Bu bilgiler yalnızca sipariş işleme ve kargo teslimatı amacıyla kullanılır.</p>
      <h3>2. Verilerin Kullanımı</h3>
      <ul>
        <li>Sipariş işleme ve teslimat</li>
        <li>Müşteri hizmetleri iletişimi</li>
        <li>Yasal yükümlülükler</li>
        <li>Hizmet iyileştirme</li>
      </ul>
      <h3>3. Verilerin Paylaşılması</h3>
      <p>Kişisel verileriniz yalnızca kargo firmaları ve ödeme altyapısı sağlayıcısı (iyzico) ile sipariş işleme amacıyla paylaşılır. Üçüncü taraflarla pazarlama amacıyla paylaşılmaz.</p>
      <h3>4. Çerezler (Cookies)</h3>
      <p>Web sitemiz, kullanıcı deneyimini iyileştirmek amacıyla çerezler kullanır. Tarayıcı ayarlarınızdan çerezleri yönetebilirsiniz.</p>
      <h3>5. Güvenlik</h3>
      <p>Verileriniz 256-bit SSL şifreleme ile korunur. Ödeme bilgileri iyzico güvenli altyapısında işlenir ve sunucularımızda saklanmaz.</p>
      <h3>6. İletişim</h3>
      <p>Gizlilik ile ilgili sorularınız için ${BRAND.email} adresine ulaşabilirsiniz.</p>
    </div>
  `;
}

// ── KVKK ──
export function kvkkHTML() {
  return `
    <div class="page-content">
      <h2>KVKK Aydınlatma Metni</h2>
      <p>6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında aydınlatma yükümlülüğünü yerine getirmek amacıyla hazırlanmıştır.</p>
      <h3>Veri Sorumlusu</h3>
      <p><strong>${BRAND.legalName}</strong><br>${BRAND.address}</p>
      <h3>Kişisel Verilerin İşlenme Amaçları</h3>
      <ul>
        <li>Sipariş ve sözleşme süreçlerinin yürütülmesi</li>
        <li>Ürün ve hizmetlerin sunulması</li>
        <li>Müşteri memnuniyeti süreçlerinin yönetimi</li>
        <li>Yasal yükümlülüklerin yerine getirilmesi</li>
        <li>İletişim faaliyetlerinin yürütülmesi</li>
        <li>Finans ve muhasebe süreçlerinin yönetimi</li>
      </ul>
      <h3>Kişisel Verilerin Aktarılması</h3>
      <p>Kişisel verileriniz; kargo firmaları, ödeme kuruluşları (iyzico), muhasebe hizmet sağlayıcıları ve yasal mercilerle KVKK'nın 8. ve 9. maddelerinde belirtilen şartlara uygun olarak aktarılabilir.</p>
      <h3>Kişisel Veri Sahibinin Hakları</h3>
      <p>KVKK'nın 11. maddesi kapsamında aşağıdaki haklara sahipsiniz:</p>
      <ul>
        <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
        <li>İşlenmişse buna ilişkin bilgi talep etme</li>
        <li>İşlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
        <li>Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme</li>
        <li>Eksik veya yanlış işlenmiş verilerin düzeltilmesini isteme</li>
        <li>KVKK'nın 7. maddesi çerçevesinde kişisel verilerin silinmesini veya yok edilmesini isteme</li>
      </ul>
      <h3>Başvuru</h3>
      <p>KVKK kapsamındaki taleplerinizi ${BRAND.kvkkEmail} adresine yazılı olarak iletebilirsiniz.</p>
    </div>
  `;
}

// ── Terms (Mesafeli Satış Sözleşmesi) ──
export function termsHTML() {
  return `
    <div class="page-content">
      <h2>Mesafeli Satış Sözleşmesi</h2>
      <p>İşbu sözleşme, 6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmeler Yönetmeliği kapsamında düzenlenmiştir.</p>
      <h3>Madde 1 — Taraflar</h3>
      <p><strong>Satıcı:</strong> ${BRAND.legalName}<br>Adres: ${BRAND.address}<br>Telefon: ${BRAND.phone}<br>E-posta: ${BRAND.email}</p>
      <p><strong>Alıcı:</strong> Sipariş sırasında belirtilen bilgiler.</p>
      <h3>Madde 2 — Sözleşmenin Konusu</h3>
      <p>İşbu sözleşmenin konusu, alıcının satıcıya ait web sitesinden elektronik ortamda sipariş verdiği ürünlerin satışı ve teslimi ile ilgili tarafların hak ve yükümlülüklerinin belirlenmesidir.</p>
      <h3>Madde 3 — Ürün Bilgileri</h3>
      <p>Ürünlerin temel nitelikleri, satış fiyatı ve ödeme şekli sipariş sayfasında belirtilmektedir. Ürün görselleri temsilidir.</p>
      <h3>Madde 4 — Teslimat</h3>
      <p>Ürünler, sipariş onayından itibaren en geç 30 gün içinde teslim edilir. Standart teslimat süresi 3–5 iş günüdür.</p>
      <h3>Madde 5 — Cayma Hakkı</h3>
      <p>Alıcı, ürünü teslim aldığı tarihten itibaren 14 gün içinde herhangi bir gerekçe göstermeksizin ve cezai şart ödemeksizin sözleşmeden cayma hakkına sahiptir.</p>
      <h3>Madde 6 — Ödeme</h3>
      <p>Ödeme işlemleri iyzico güvenli ödeme altyapısı üzerinden gerçekleştirilir. Kredi kartı bilgileri satıcı sunucularında saklanmaz.</p>
      <h3>Madde 7 — Taksit</h3>
      <p>Kredi kartı ile yapılan ödemelerde banka ve kart tipine göre taksit seçenekleri sunulabilir.</p>
      <h3>Madde 8 — Uyuşmazlık</h3>
      <p>İşbu sözleşmeden doğan uyuşmazlıklarda Tüketici Hakem Heyetleri ve Tüketici Mahkemeleri yetkilidir.</p>
      <h3>Madde 9 — Yürürlük</h3>
      <p>İşbu sözleşme, alıcı tarafından elektronik ortamda onaylandsığı tarihte yürürlüğe girer.</p>
    </div>
  `;
}
