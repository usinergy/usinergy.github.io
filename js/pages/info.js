/**
 * @file pages/info.js
 * @description Informational pages: About, FAQ, Contact, Shipping, Returns.
 */

import { BRAND } from '../config.js';
import { fmt } from '../store.js';

// ── About ──
export function aboutHTML() {
  return `
    <div class="page-content">
      <h2>Hakkımızda</h2>
      <div class="info-grid">
        <div class="info-box">
          <h3>🧸 modamood</h3>
          <p>modamood, Türkiye genelinde hizmet veren bir online bebek giyim mağazasıdır. Yumuşak kumaşlar, pastel renkler ve minik bedenler için tasarlanmış geniş ürün yelpazesiyle ailelerin güvenilir alışveriş adresi olmayı hedefliyoruz.</p>
          <p>Amacımız bebeklerin konforunu ön planda tutarak, hem şık hem de fonksiyonel kıyafetler sunmaktır.</p>
        </div>
        <div class="info-box">
          <h3>🎯 Misyonumuz</h3>
          <p>Türk ailelerine uygun fiyatlı, kaliteli ve güvenli bebek giyim ürünleri sunmak. Her ürünümüz özenle seçilir ve kalite kontrolünden geçirilir.</p>
          <ul>
            <li>%100 pamuk ve organik kumaş seçenekleri</li>
            <li>Türkiye geneli hızlı kargo</li>
            <li>iyzico ile güvenli ödeme</li>
            <li>14 gün koşulsuz iade</li>
            <li>7/24 müşteri desteği</li>
          </ul>
        </div>
        <div class="info-box">
          <h3>📍 İletişim Bilgileri</h3>
          <p><strong>Adres:</strong> ${BRAND.address}</p>
          <p><strong>Telefon:</strong> ${BRAND.phone}</p>
          <p><strong>E-posta:</strong> ${BRAND.email}</p>
          <p><strong>Çalışma Saatleri:</strong> ${BRAND.workHours}</p>
        </div>
        <div class="info-box">
          <h3>🚀 Teknoloji Yol Haritası</h3>
          <p>Bu sayfa şu an deneysel demo olarak çalışmaktadır. Planlanan gelişmeler:</p>
          <ul>
            <li><strong>Frontend:</strong> Next.js / React (SEO uyumlu)</li>
            <li><strong>Backend:</strong> Node.js + Express veya Supabase</li>
            <li><strong>Veritabanı:</strong> PostgreSQL (Supabase / AWS)</li>
            <li><strong>Ödeme:</strong> iyzico entegrasyonu</li>
            <li><strong>Güvenlik:</strong> Cloudflare CDN + Auth0</li>
            <li><strong>Kargo:</strong> Yurtici / Aras / MNG API</li>
            <li><strong>Hosting:</strong> Vercel veya DigitalOcean</li>
            <li><strong>Admin:</strong> Retool ile yönetim paneli</li>
          </ul>
        </div>
      </div>
    </div>
  `;
}

// ── FAQ ──
const FAQ_ITEMS = [
  ['Sipariş nasıl verilir?', 'Ürünü sepete ekleyin, kargo bilgilerinizi girin ve güvenli ödeme adımını tamamlayın. Siparişiniz onaylandiktan sonra e-posta ile bilgilendirileceksiniz.'],
  ['Hangi ödeme yöntemlerini kabul ediyorsunuz?', 'Kredi kartı, banka kartı, BKM Express ve havale/EFT ile ödeme yapabilirsiniz. iyzico altyapısı ile 9 taksit imkanı sunuyoruz.'],
  ['Kargo ne kadar sürer?', 'Standart kargo 3–5 iş günü, ekspres kargo 1–2 iş günü içinde teslim edilir. 150₺ üzeri alışverişlerde standart kargo ücretsizdir.'],
  ['İade politikanız nedir?', 'Ürün teslim tarihinden itibaren 14 gün içinde, kullanılmamış ve orijinal ambalajında olmak koşuluyla iade edebilirsiniz.'],
  ['Ürünler orijinal mi?', 'Tüm ürünlerimiz güvenilir tedarikçilerden temin edilir ve kalite kontrolünden geçirilir. Orijinallik garantisi sunuyoruz.'],
  ['Hangi kargo firmaları ile çalışıyorsunuz?', 'Yurtici Kargo, Aras Kargo ve MNG Kargo ile çalışmaktayız.'],
  ['Taksit yapabilir miyim?', 'Evet, iyzico altyapısı ile 3, 6 veya 9 taksit seçenekleri mevcuttur.'],
  ['KVKK kapsamında verilerim nasıl korunuyor?', 'Kişisel verileriniz KVKK mevzuatına uygun olarak işlenir ve korunur. Detaylı bilgi için KVKK Aydınlatma Metni sayfamıza bakabilirsiniz.'],
  ['Toptan satış yapıyor musunuz?', 'Toptan satış hakkında bilgi almak için lütfen ' + BRAND.email + ' adresine e-posta gönderin.'],
  ['Demo mağaza gerçek mi?', 'Hayır, bu sayfa deneysel kullanım amaçlıdır. Gerçek bir ödeme işlemi yapılmaz ve sipariş oluşturulmaz.'],
];

export function faqHTML() {
  const items = FAQ_ITEMS.map(([q, a]) =>
    `<div class="faq-item" onclick="this.classList.toggle('open')">
      <div class="faq-q">${q}</div>
      <div class="faq-a">${a}</div>
    </div>`
  ).join('');

  return `
    <div class="page-content">
      <h2>Sıkça Sorulan Sorular</h2>
      <p class="muted">En çok merak edilen konular hakkında hızlı cevaplar.</p>
      ${items}
    </div>
  `;
}

// ── Contact ──
export function contactHTML() {
  return `
    <div class="page-content">
      <h2>İletişim</h2>
      <div class="contact-grid">
        <div class="info-box">
          <h3>📧 Bize Ulaşın</h3>
          <div class="field"><label>Adınız</label><input placeholder="Adınız Soyadınız"></div>
          <div class="field"><label>E-posta</label><input type="email" placeholder="ornek@email.com"></div>
          <div class="field"><label>Konu</label>
            <select>
              <option>Sipariş Hakkında</option>
              <option>İade Talebi</option>
              <option>Ürün Bilgisi</option>
              <option>İş Birliği</option>
              <option>Diğer</option>
            </select>
          </div>
          <div class="field"><label>Mesajınız</label><textarea placeholder="Mesajınızı buraya yazın..."></textarea></div>
          <button class="btn btn-p" onclick="showToast('Demo: Mesajınız gönderildi (simülasyon).')">Mesaj Gönder</button>
        </div>
        <div>
          <div class="info-box" style="margin-bottom:16px">
            <h3>📍 Mağaza Bilgileri</h3>
            <p><strong>Adres:</strong> ${BRAND.address} ${BRAND.postalCode}</p>
            <p><strong>Telefon:</strong> ${BRAND.phone}</p>
            <p><strong>WhatsApp:</strong> ${BRAND.whatsapp}</p>
            <p><strong>E-posta:</strong> ${BRAND.email}</p>
            <p><strong>Çalışma Saatleri:</strong><br>${BRAND.workHours}<br>Pazar: Kapalı</p>
          </div>
          <div class="info-box">
            <h3>🚚 Kargo Takibi</h3>
            <p>Siparişinizin kargo takip numarasını aşağıya girerek durumunu öğrenebilirsiniz.</p>
            <div class="field"><label>Takip Numarası</label><input placeholder="MM000000"></div>
            <button class="btn btn-g" onclick="showToast('Demo: Kargo takip sorgulandı (simülasyon).')">Kargo Sorgula</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ── Shipping ──
export function shippingHTML() {
  return `
    <div class="page-content">
      <h2>Kargo Bilgileri</h2>
      <div class="info-grid">
        <div class="info-box">
          <h3>🚚 Kargo Firmaları</h3>
          <ul>
            <li><strong>Yurtici Kargo:</strong> Standart teslimat 3–5 iş günü</li>
            <li><strong>Aras Kargo:</strong> Ekspres teslimat 1–2 iş günü</li>
            <li><strong>MNG Kargo:</strong> Standart teslimat 3–5 iş günü</li>
          </ul>
        </div>
        <div class="info-box">
          <h3>💰 Kargo Ücretleri</h3>
          <ul>
            <li>150₺ ve üzeri alışverişlerde <strong>ücretsiz standart kargo</strong></li>
            <li>150₺ altı alışverişlerde standart kargo: <strong>${fmt(BRAND.standardShipping)}</strong></li>
            <li>Ekspres kargo: <strong>${fmt(BRAND.expressShipping)}</strong> (tüm siparişler)</li>
          </ul>
        </div>
        <div class="info-box">
          <h3>📦 Kargo Takibi</h3>
          <p>Siparişiniz kargoya verildiğinde, takip numaranız e-posta ve SMS ile gönderilir. Kargo durumunuzu İletişim sayfamızdan veya kargo firmasının web sitesinden takip edebilirsiniz.</p>
        </div>
        <div class="info-box">
          <h3>⏰ Teslimat Süreleri</h3>
          <p>Siparişleriniz hafta içi saat 14:00'e kadar verildiğinde aynı gün kargoya teslim edilir. Hafta sonu verilen siparişler pazartesi günü gönderilir.</p>
        </div>
      </div>
    </div>
  `;
}

// ── Returns ──
export function returnsHTML() {
  return `
    <div class="page-content">
      <h2>İade Politikası</h2>
      <div class="info-box" style="margin-bottom:18px">
        <h3>14 Gün Koşulsuz İade Garantisi</h3>
        <p>modamood olarak müşteri memnuniyeti bizim için en önemli önceliktir. Satın aldığınız ürünleri 14 gün içinde iade edebilirsiniz.</p>
      </div>
      <h3>İade Koşulları</h3>
      <ul>
        <li>Ürün teslim tarihinden itibaren <strong>14 gün</strong> içinde iade talebi oluşturulmalıdır.</li>
        <li>Ürün <strong>kullanılmamış</strong> ve <strong>orijinal ambalajında</strong> olmalıdır.</li>
        <li>Etiketler çıkarılmamış olmalıdır.</li>
        <li>Hijyen ürünleri (iç çamaşırı vb.) iade edilemez.</li>
        <li>İade kargo ücreti alıcıya aittir (arızalı ürün hariç).</li>
      </ul>
      <h3>İade Süreci</h3>
      <ul>
        <li>İletişim sayfasından veya ${BRAND.email} adresine e-posta göndererek iade talebi oluşturun.</li>
        <li>Onay e-postası aldıktan sonra ürünü kargo ile gönderin.</li>
        <li>Ürün tarafımıza ulaştıktan sonra <strong>3 iş günü</strong> içinde iade tutarı kartınıza iade edilir.</li>
        <li>Banka kartı iadeleri bankanıza bağlı olarak <strong>5–10 iş günü</strong> sürebilir.</li>
      </ul>
      <h3>Değişim</h3>
      <p>Beden değişikliği talepleriniz için aynı iade süreci uygulanır. Yeni beden ayrı sipariş olarak gönderilir.</p>
    </div>
  `;
}
