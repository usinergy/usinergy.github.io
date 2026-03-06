/**
 * @file data.js
 * @description Product catalog and categories for modamood.
 */

/** @type {string[]} */
export const CATS = [
  'Tümü', 'Tulum', 'Pijama', 'Elbise', 'Takım',
  'Dış Giyim', 'Ayakkabı', 'Şapka', 'Yenidoğan'
];

/**
 * @typedef {Object} Product
 * @property {number} id
 * @property {string} name
 * @property {string} cat
 * @property {number} price
 * @property {string} img
 * @property {string} tag
 * @property {string} size
 * @property {string} note
 * @property {string} rating
 * @property {number} reviews
 * @property {string} desc
 */

/** @type {Product[]} */
export const PRODUCTS = [
  { id: 1,  name: 'Ayıcık Desenli Tulum',       cat: 'Tulum',       price: 249, img: 'https://images.pexels.com/photos/3875219/pexels-photo-3875219.jpeg?auto=compress&cs=tinysrgb&w=800', tag: 'Yeni',       size: '0–6 ay',   note: 'Organik pamuk',    rating: '4.9', reviews: 128, desc: 'Ayıcık desenli yumuşak bej tulum seti.' },
  { id: 2,  name: 'Gri Örgü Kapuşonlu Tulum', cat: 'Tulum',     price: 289, img: 'https://images.pexels.com/photos/266004/pexels-photo-266004.jpeg?auto=compress&cs=tinysrgb&w=800',  tag: 'Premium',    size: '0–3 ay',   note: 'El örgüsü',        rating: '5.0', reviews: 63,  desc: 'Kapuşonlu gri örgü tulum. El yapımı görünüm.' },
  { id: 3,  name: 'Bej Salopet Tulum',            cat: 'Tulum',       price: 219, img: 'https://images.pexels.com/photos/961198/pexels-photo-961198.jpeg?auto=compress&cs=tinysrgb&w=800',   tag: 'Temel',      size: '0–6 ay',   note: 'Günlük',             rating: '4.8', reviews: 94,  desc: 'Bej renk salopet tulum. Rahat kesim.' },
  { id: 4,  name: 'Yeşil Uyku Tulumu',          cat: 'Tulum',       price: 199, img: 'https://images.pexels.com/photos/6849471/pexels-photo-6849471.jpeg?auto=compress&cs=tinysrgb&w=800', tag: 'Uyku',       size: '0–9 ay',   note: 'Yumuşak dokuş',       rating: '4.8', reviews: 88,  desc: 'Yeşil renk uyku tulumu. Huzurlu geceler.' },
  { id: 5,  name: 'Doğal Yenidoğan Seti',        cat: 'Takım',     price: 229, img: 'https://images.pexels.com/photos/3875082/pexels-photo-3875082.jpeg?auto=compress&cs=tinysrgb&w=800', tag: 'Temel',  size: 'Yenidoğan',  note: 'Hediye hazır',       rating: '4.8', reviews: 92,  desc: 'Body, bone ve önlük içeren temel set.' },
  { id: 6,  name: 'Pembe Layette Paketi',         cat: 'Takım',     price: 319, img: 'https://images.pexels.com/photos/7484842/pexels-photo-7484842.jpeg?auto=compress&cs=tinysrgb&w=800', tag: 'Paket',      size: '3 parça set', note: 'Pastel ton',        rating: '4.9', reviews: 76,  desc: 'Koordine mini gardırop. Hediye için ideal.' },
  { id: 7,  name: 'Güneşli Gün Takımı',        cat: 'Takım',     price: 189, img: 'https://images.pexels.com/photos/4256552/pexels-photo-4256552.jpeg?auto=compress&cs=tinysrgb&w=800', tag: 'Mevsimlik',  size: '6–12 ay',  note: 'Hafif kumaş',        rating: '4.7', reviews: 51,  desc: 'Sıcak hava için tişört ve şort seti.' },
  { id: 8,  name: 'Kapsül Koleksiyon Seti',      cat: 'Takım',     price: 349, img: 'https://images.pexels.com/photos/3875080/pexels-photo-3875080.jpeg?auto=compress&cs=tinysrgb&w=800', tag: 'Koleksiyon', size: '0–12 ay',  note: 'Çoklu parça',        rating: '4.9', reviews: 114, desc: 'Nötr tonlarda kapsül koleksiyon seti.' },
  { id: 9,  name: 'Beyaz Dantel Elbise',          cat: 'Elbise',      price: 279, img: 'https://images.pexels.com/photos/159767/baby-cute-moe-brilliant-159767.jpeg?auto=compress&cs=tinysrgb&w=800', tag: 'Özel Gün', size: '3–12 ay', note: 'Şık tasarım', rating: '4.9', reviews: 67, desc: 'Beyaz dantel elbise ve başlık seti.' },
  { id: 10, name: 'Kırmızı Bayram Kıyafeti',     cat: 'Elbise',      price: 259, img: 'https://images.pexels.com/photos/4388973/pexels-photo-4388973.jpeg?auto=compress&cs=tinysrgb&w=800', tag: 'Bayram', size: '3–9 ay', note: 'Özel gün', rating: '4.7', reviews: 43, desc: 'Kırmızı şapka ve kıyafet seti.' },
  { id: 11, name: 'Erkek Bebek Takımı',        cat: 'Elbise',      price: 299, img: 'https://images.pexels.com/photos/1602754/pexels-photo-1602754.jpeg?auto=compress&cs=tinysrgb&w=800', tag: 'Şık', size: '6–18 ay', note: 'Özel tasarım', rating: '4.8', reviews: 39, desc: 'Geleneksel görünümlü erkek bebek takım elbise.' },
  { id: 12, name: 'Sonbahar Ceketi',              cat: 'Dış Giyim',  price: 329, img: 'https://images.pexels.com/photos/3934002/pexels-photo-3934002.jpeg?auto=compress&cs=tinysrgb&w=800', tag: 'Mevsimlik', size: '6–18 ay', note: 'Sıcak tutar', rating: '4.8', reviews: 57, desc: 'Sonbahar yürüyüşleri için sıcak ceket.' },
  { id: 13, name: 'Sarı Rüzgarlık',             cat: 'Dış Giyim',  price: 269, img: 'https://images.pexels.com/photos/5789128/pexels-photo-5789128.jpeg?auto=compress&cs=tinysrgb&w=800', tag: 'Renkli', size: '3–12 ay', note: 'Hafif', rating: '4.6', reviews: 34, desc: 'Parlak sarı renk hafif bebek ceketi.' },
  { id: 14, name: 'Pembe Kış Montu',             cat: 'Dış Giyim',  price: 349, img: 'https://images.pexels.com/photos/3933392/pexels-photo-3933392.jpeg?auto=compress&cs=tinysrgb&w=800', tag: 'Kış', size: '6–18 ay', note: 'Su geçirmez', rating: '4.9', reviews: 71, desc: 'Kış günleri için sıcak pembe mont.' },
  { id: 15, name: 'Ekose Bebek Ayakkabısı',      cat: 'Ayakkabı',   price: 129, img: 'https://images.pexels.com/photos/267278/pexels-photo-267278.jpeg?auto=compress&cs=tinysrgb&w=800', tag: 'Yeni', size: '0–12 ay', note: 'Yumuşak taban', rating: '4.8', reviews: 82, desc: 'Ekose desenli şık bebek ayakkabısı.' },
  { id: 16, name: 'Kırmızı Spor Patik',          cat: 'Ayakkabı',   price: 109, img: 'https://images.pexels.com/photos/2271522/pexels-photo-2271522.jpeg?auto=compress&cs=tinysrgb&w=800', tag: 'Spor', size: '3–12 ay', note: 'Kaymaz taban', rating: '4.7', reviews: 61, desc: 'Kırmızı beyaz mini spor ayakkabı.' },
  { id: 17, name: 'Yeşil Bebek Patik',            cat: 'Ayakkabı',   price: 89,  img: 'https://images.pexels.com/photos/47220/shoes-pregnancy-child-clothing-47220.jpeg?auto=compress&cs=tinysrgb&w=800', tag: 'Günlük', size: '0–6 ay', note: 'İlk adım', rating: '4.6', reviews: 47, desc: 'Yeşil renk örgü bebek patik.' },
  { id: 18, name: 'Denim Mini Sneaker',            cat: 'Ayakkabı',   price: 119, img: 'https://images.pexels.com/photos/3026856/pexels-photo-3026856.jpeg?auto=compress&cs=tinysrgb&w=800', tag: 'Trend', size: '3–12 ay', note: 'Kot kumaş', rating: '4.9', reviews: 53, desc: 'Kot kumaş mini sneaker.' },
  { id: 19, name: 'Kahverengi Örgü Şapka',      cat: 'Şapka',      price: 69,  img: 'https://images.pexels.com/photos/421884/pexels-photo-421884.jpeg?auto=compress&cs=tinysrgb&w=800', tag: 'Sıcak', size: '0–12 ay', note: 'El örgüsü', rating: '4.9', reviews: 96, desc: 'Kahverengi el örgüsü bebek şapkası.' },
  { id: 20, name: 'Çizgili Pamuk Bere',           cat: 'Şapka',      price: 59,  img: 'https://images.pexels.com/photos/1648375/pexels-photo-1648375.jpeg?auto=compress&cs=tinysrgb&w=800', tag: 'Popüler', size: '0–18 ay', note: 'Pamuklu', rating: '4.8', reviews: 112, desc: 'Renkli çizgili pamuklu bere.' },
  { id: 21, name: 'Şeritli Fötr Şapka',           cat: 'Şapka',      price: 79,  img: 'https://images.pexels.com/photos/101537/baby-boy-hat-covered-101537.jpeg?auto=compress&cs=tinysrgb&w=800', tag: 'Şık', size: '3–12 ay', note: 'Hediye', rating: '4.7', reviews: 38, desc: 'Şeritli bebek fötr şapka.' },
  { id: 22, name: 'Yenidoğan Kundak Seti',        cat: 'Yenidoğan', price: 179, img: 'https://images.pexels.com/photos/3259626/pexels-photo-3259626.jpeg?auto=compress&cs=tinysrgb&w=800', tag: 'Kundak', size: 'Yenidoğan', note: 'Hastane çıkışı', rating: '4.9', reviews: 148, desc: 'Beyaz kundak ve şapka seti.' },
  { id: 23, name: 'Yenidoğan Hediye Sepeti',      cat: 'Yenidoğan', price: 199, img: 'https://images.pexels.com/photos/161709/newborn-baby-feet-basket-161709.jpeg?auto=compress&cs=tinysrgb&w=800', tag: 'Hediye', size: 'Yenidoğan', note: 'Hoş geldin bebek', rating: '5.0', reviews: 89, desc: 'Sepet içinde yenidoğan hediye seti.' },
  { id: 24, name: 'Ayıcık Yenidoğan Seti',       cat: 'Yenidoğan', price: 209, img: 'https://images.pexels.com/photos/14927268/pexels-photo-14927268.jpeg?auto=compress&cs=tinysrgb&w=800', tag: 'Yeni', size: 'Yenidoğan', note: 'Pelüş dahil', rating: '4.9', reviews: 74, desc: 'Şapka, tulum ve pelüş oyuncak dahil set.' },
  { id: 25, name: 'Çizgili Pijama Tulum',         cat: 'Pijama',      price: 199, img: 'https://images.pexels.com/photos/1648377/pexels-photo-1648377.jpeg?auto=compress&cs=tinysrgb&w=800', tag: 'Popüler', size: '0–6 ay', note: 'Yumuşak', rating: '4.8', reviews: 105, desc: 'Çizgili bere ile uyumlu pijama tulum.' },
  { id: 26, name: 'Bahar Pijama Seti',             cat: 'Pijama',      price: 169, img: 'https://images.pexels.com/photos/1648376/pexels-photo-1648376.jpeg?auto=compress&cs=tinysrgb&w=800', tag: 'Mevsimlik', size: '3–12 ay', note: 'Pamuklu', rating: '4.7', reviews: 66, desc: 'Bahar renkleri pijama takımı.' },
  { id: 27, name: 'Sarı Pijama Takımı',          cat: 'Pijama',      price: 189, img: 'https://images.pexels.com/photos/3845492/pexels-photo-3845492.jpeg?auto=compress&cs=tinysrgb&w=800', tag: 'Renkli', size: '0–9 ay', note: 'Eğlenceli', rating: '4.8', reviews: 79, desc: 'Sarı renk neşeli pijama seti.' },
];
