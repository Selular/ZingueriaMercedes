
import { Product, Category, Brand } from '../types';

export const products: Product[] = [
 
  /**Lepen**/
  {
    id: 'l-01',
    name: 'Moquehue Vintage 9000', 
    price: 304790.00,
    installments:
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: '/fotos/Moquehue9000.png',
    features: ['9000 kcal/h', 'Vidrio vitrocerámico', 'Cajón cenicero','Doble combustión'],
    isBestSeller: false,
    specs: [
    { label: 'Potencia', value: '7000 kcal/h' },
    { label: 'Ambiente', value: 'Hasta 90m2' },
    { label: 'Salida', value: '6 pulgadas' },
    { label: 'Peso', value: '85 kg' }
    ],
    
  },
  
  {
    id: 'l-02',
    name: 'Moquehue Vintage 13900',
    price: 455790,
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: '/fotos/Moquehue13900 .png',
    features: [' 13900 kcal/h', 'Cajón cenicero', 'Hasta 100m2'],
    isBestSeller: false
  },
  {
    id: 'l-03',
    name: 'Moquehue 20000 ',
    price: 596190,
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: '/fotos/Moquehue20000.png',
    features: ['20000 kcal/h', 'Refractarios de alta calidad', 'Manija fría'],
    isBestSeller: false
  },
 {
    id: 'l-04',
    name: 'Rond 7000 ',
    price: 596190,
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: '/fotos/Rond7000.png',
    features: ['20000 kcal/h', 'Refractarios de alta calidad', 'Manija fría'],
    isBestSeller: false
  },
 
   {
    id: 'l-05',
    name: 'Rond 7000 Con Horno ',
    price: 596.190,
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: '/fotos/Rond7000ConHorno.png',
    features: ['20000 kcal/h', 'Refractarios de alta calidad', 'Manija fría'],
    isBestSeller: false
  },
  {
    id: 'l-06',
    name: '7000 Premium ',
    price: 596.190,
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: '/fotos/7000Premium.png',
    features: ['20000 kcal/h', 'Refractarios de alta calidad', 'Manija fría'],
    isBestSeller: false
  },
  {
    id: 'l-07',
    name: 'Moquehue 8000 ',
    price: 596.190,
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: '/fotos/Moquehue8000.png',
    features: ['20000 kcal/h', 'Refractarios de alta calidad', 'Manija fría'],
    isBestSeller: false
  },
  {
    id: 'l-08',
    name: 'Moquehue 13500 ',
    price: 596.190,
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/Moquehue13500.png',
    features: ['20000 kcal/h', 'Refractarios de alta calidad', 'Manija fría'],
    isBestSeller: false
  },
  {
    id: 'l-09',
    name: 'Moquehue 13500 Con Horno ',
    price: 596.190,
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/Moquehue13500horno.png',
    features: ['20000 kcal/h', 'Refractarios de alta calidad', 'Manija fría'],
    isBestSeller: true
  },
  {
    id: 'l-10',
    name: '10000 Rinconero ',
    price: 596.190,
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/rinconero.png',
    features: ['20000 kcal/h', 'Refractarios de alta calidad', 'Manija fría'],
    isBestSeller: true
  },

  {
    id: 'l-11',
    name: '11000 Premium ',
    price: 596.190,
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/11000premium.png',
    features: ['20000 kcal/h', 'Refractarios de alta calidad', 'Manija fría'],
    isBestSeller: true
  },
  {
    id: 'l-12',
    name: '12000 Premium Con Horno',
    price: 596.190,
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/12000premiumConHorno.png',
    features: ['20000 kcal/h', 'Refractarios de alta calidad', 'Manija fría'],
    isBestSeller: true
  },
  {
    id: 'l-13',
    name: '14000 Alta Premium ',
    price: 596.190,
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/14000AltaPremium.png',
    features: ['20000 kcal/h', 'Refractarios de alta calidad', 'Manija fría'],
    isBestSeller: true
  },

  {
    id: 'l-14',
    name: '14000 Alta Premium ',
    price: 596.190,
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/14000AltaPremium.png',
    features: ['20000 kcal/h', 'Refractarios de alta calidad', 'Manija fría'],
    isBestSeller: true
  },
    {
    id: 'l-15',
    name: '14000 Alta Premium Con Base Premium ',
    price: 596.190,
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/14000ConBasePremium.png',
    features: ['20000 kcal/h', 'Refractarios de alta calidad', 'Manija fría'],
    isBestSeller: true
  },
    {
    id: 'l-16',
    name: '15000 Rinconero ',
    price: 596.190,
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/15000Rinconero.png',
    features: ['20000 kcal/h', 'Refractarios de alta calidad', 'Manija fría'],
    isBestSeller: true
  },
    {
    id: 'l-17',
    name: '17000 Premium Con Horno ',
    price: 596.190,
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/17000PremiumConHorno.png',
    features: ['20000 kcal/h', 'Refractarios de alta calidad', 'Manija fría'],
    isBestSeller: true
  },
    {
    id: 'l-18',
    name: '19000 Rinconero Premium Con Horno',
    price: 596.190,
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/19000premConHorno.png',
    features: ['20000 kcal/h', 'Refractarios de alta calidad', 'Manija fría'],
    isBestSeller: true
  },
    {
    id: 'l-19',
    name: '20000 Premium ',
    price: 596.190,
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/20000C.png',
    features: ['20000 kcal/h', 'Refractarios de alta calidad', 'Manija fría'],
    isBestSeller: true
  },
    {
    id: 'l-20',
    name: '27000 Premium',
    price: 596.190,
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/27000.png',
    features: ['20000 kcal/h', 'Refractarios de alta calidad', 'Manija fría'],
    isBestSeller: true
  },
    {
    id: 'l-21',
    name: '27000 Rinconero Premium',
    price: 596.190,
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: './fotos/3.png',
    features: ['20000 kcal/h', 'Refractarios de alta calidad', 'Manija fría'],
    isBestSeller: true
  },
    {
    id: 'l-22',
    name: '27000 Rinconero Premium Con Horno ',
    price: 596.190,
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/27000RinconeroConHorno.png',
    features: ['20000 kcal/h', 'Refractarios de alta calidad', 'Manija fría'],
    isBestSeller: true
  },
    {
    id: 'l-23',
    name: 'Campana 27000 Premium',
    price: 596.190,
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/Campana27000.png',
    features: ['20000 kcal/h', 'Refractarios de alta calidad', 'Manija fría'],
    isBestSeller: true
  },

  {
    id: 'l-24',
    name: 'Campana 27000 Doble Puerta Premium ',
    price: 596.190,
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/Campana27000.png',
    features: ['20000 kcal/h', 'Refractarios de alta calidad', 'Manija fría'],
    isBestSeller: true
  },
    {
    id: 'l-25',
    name: '14000 Alta Premium ',
    price: 596.190,
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/14000AltaPremium.png',
    features: ['20000 kcal/h', 'Refractarios de alta calidad', 'Manija fría'],
    isBestSeller: true
  },
    {
    id: 'l-26',
    name: 'Nº 1 ',
    price: 596.190,
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/n1.png',
    features: ['20000 kcal/h', 'Refractarios de alta calidad', 'Manija fría'],
    isBestSeller: true
  },
   {
    id: 'l-27',
    name: 'Nº 2 ',
    price: 596.190,
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/n2.png',
    features: ['20000 kcal/h', 'Refractarios de alta calidad', 'Manija fría'],
    isBestSeller: true
  },
   {
    id: 'l-28',
    name: 'Nº 3 ',
    price: 596.190,
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/n3.png',
    features: ['20000 kcal/h', 'Refractarios de alta calidad', 'Manija fría'],
    isBestSeller: true
  },
   {
    id: 'l-29',
    name: 'Nº 4 ',
    price: 596.190,
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/n4.png',
    features: ['20000 kcal/h', 'Refractarios de alta calidad', 'Manija fría'],
    isBestSeller: true
  },
   {
    id: 'l-30',
    name: 'Nº 5 ',
    price: 596.190,
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/n5H.png',
    features: ['20000 kcal/h', 'Refractarios de alta calidad', 'Manija fría'],
    isBestSeller: true
  },
   {
    id: 'l-31',
    name: 'Nº 6 ',
    price: 596.190,
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/n6.png',
    features: ['20000 kcal/h', 'Refractarios de alta calidad', 'Manija fría'],
    isBestSeller: true
  },
   {
    id: 'l-32',
    name: 'Nº 4 Con Horno ',
    price: 596.190,
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/n4H.png',
    features: ['20000 kcal/h', 'Refractarios de alta calidad', 'Manija fría'],
    isBestSeller: true
  },
   {
    id: 'l-33',
    name: 'Nº 5 Con Horno',
    price: 596.190,
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/n5H.png',
    features: ['20000 kcal/h', 'Refractarios de alta calidad', 'Manija fría'],
    isBestSeller: true
  },
 
   {
    id: 'l-34',
    name: 'Central 15000 ',
    price: 596.190,
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/15000C.png',
    features: ['20000 kcal/h', 'Refractarios de alta calidad', 'Manija fría'],
    isBestSeller: true
  },
  {
    id: 'l-35',
    name: 'Central 20000 ',
    price: 596.190,
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/20000C.png',
    features: ['20000 kcal/h', 'Refractarios de alta calidad', 'Manija fría'],
    isBestSeller: true
  },
  {
    id: 'l-36',
    name: 'Central 25000 ',
    price: 596.190,
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: './fotos/3.png',
    features: ['20000 kcal/h', 'Refractarios de alta calidad', 'Manija fría'],
    isBestSeller: true
  },
  {
    id: 'l-37',
    name: 'Central 30000 ',
    price: 596.190,
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: './fotos/3.png',
    features: ['20000 kcal/h', 'Refractarios de alta calidad', 'Manija fría'],
    isBestSeller: true
  },
  {
    id: 'l-38',
    name: 'Central 39000 ',
    price: 596190,
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: './fotos/3.png',
    features: ['20000 kcal/h', 'Refractarios de alta calidad', 'Manija fría'],
    isBestSeller: true
  },
  {
    id: 'l-39',
    name: 'Four Face ',
    price: 596.190,
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: '',
    features: ['20000 kcal/h', 'Refractarios de alta calidad', 'Manija fría'],
    isBestSeller: true
  },
 {
    id: 'l-40',
    name: 'Horno Para Empotrar ',
    price: 596.190,
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/hornoParaEm.png',
    features: ['20000 kcal/h', 'Refractarios de alta calidad', 'Manija fría'],
    isBestSeller: true
  },
 {
    id: 'l-41',
    name: 'Horno Doble Cámara ',
    price: 596.190,
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/HDobleCamara.png',
    features: ['20000 kcal/h', 'Refractarios de alta calidad', 'Manija fría'],
    isBestSeller: true
  },
 {
    id: 'l-42',
    name: 'Horno Familiar',
    price: 596.190,
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/Moquehue13500horno.png',
    features: ['20000 kcal/h', 'Refractarios de alta calidad', 'Manija fría'],
    isBestSeller: true
  },
];
