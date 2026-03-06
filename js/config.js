/**
 * @file config.js
 * @description Brand configuration and constants for modamood.
 */

export const BRAND = {
  name: 'modamood',
  tagline: 'Bebek Giyim Mağazası',
  description: 'Türkiye’nin en sevilen online bebek giyim mağazası.',
  email: 'info@modamood.com',
  kvkkEmail: 'kvkk@modamood.com',
  phone: '0212 555 00 00',
  whatsapp: '0532 555 00 00',
  address: 'Atatürk Cad. No:42, Kadıköy, İstanbul',
  postalCode: '34710',
  legalName: 'modamood Ticaret A.Ş.',
  workHours: 'Pazartesi–Cumartesi 09:00–18:00',
  currency: '₺',
  freeShippingMin: 150,
  standardShipping: 29.90,
  expressShipping: 49.90,
};

/** Shipping providers */
export const SHIPPING_OPTIONS = [
  { id: 'Standart', label: 'Yurtici Kargo — Standart', time: '3–5 iş günü' },
  { id: 'Ekspres',  label: 'Aras Kargo — Ekspres',    time: '1–2 iş günü' },
  { id: 'MNG',      label: 'MNG Kargo — Standart',    time: '3–5 iş günü' },
];

/** Payment methods */
export const PAYMENT_OPTIONS = [
  { id: 'Kredi Kartı', label: 'Kredi / Banka Kartı', desc: 'Taksit seçenekleri mevcut' },
  { id: 'BKM Express',      label: 'BKM Express',              desc: 'Hızlı ödeme' },
  { id: 'Havale',           label: 'Havale / EFT',             desc: 'Banka havalesi' },
];

/** Installment options */
export const INSTALLMENTS = [1, 3, 6, 9];
