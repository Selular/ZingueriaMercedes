
import { Product, Category, Brand } from '../types';

export const products: Product[] = [
 
  /**Lepen**/
  {
    id: 'l-01',
    name: 'Moquehue Vintage 9000', 
    price: 304790.00,
    installments:3 & 6,
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: '/fotos/Moquehue9000.png',
    features: [ 'Vidrio vitrocerámico', 'Cajón cenicero','Doble combustión'],
    isBestSeller: true,
    specs: [
    { label: 'Potencia', value: '9000 kcal/h' },
    { label: 'Ambiente', value: 'Hasta 70m2' },
    { label: 'Salidas', value: 'Doble camara' },
    { label: 'Alto', value: '57 cm' },
    { label: 'Ancho', value: '43 cm' },
    { label: 'Profundidad', value: '39 cm' }
    ],
    
  },
  
  {
    id: 'l-02',
    name: 'Moquehue Vintage 13900',
    price: 455790.00,
    installments:3 & 6,
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: '/fotos/Moquehue13900 .png',
    features: [ 'Cajón cenicero','Vidrio vitrocerámico'],
    isBestSeller: true,
    specs: [
    { label: 'Potencia', value: '139000 kcal/h' },
    { label: 'Ambiente', value: 'Hasta 100m2' },
    { label: 'Salidas', value: 'Doble camara' },
    { label: 'Alto', value: '55 cm' },
    { label: 'Ancho', value: '53 cm' },
    { label: 'Profundidad', value: '46 cm' }
    ],
  },

  {
    id: 'l-03',
    name: 'Moquehue 20000 ',
    price: 596190.00,
    installments: 3 & 6,
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: '/fotos/Moquehue20000.png',
    features: [ 'Cajón cenicero','Vidrio vitrocerámico' ],
    isBestSeller: false,
    specs: [
    { label: 'Potencia', value: '20000 kcal/h' },
    { label: 'Ambiente', value: 'Hasta 150m2' },
    { label: 'Salidas', value: 'Doble camara' },
    { label: 'Alto', value: '63 cm' },
    { label: 'Ancho', value: '65 cm' },
    { label: 'Profundidad', value: '57 cm' }
    ],
  },
 {
    id: 'l-04',
    name: 'Rond 7000 ',
    price: 299000.00,
    installments:3 & 6,
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: '/fotos/Rond7000.png',
    features: [ 'Vidrio vitrocerámico'],
    isBestSeller: true,
    specs: [
    { label: 'Potencia', value: '7000 kcal/h' },
    { label: 'Ambiente', value: 'Hasta 50m2' },
    { label: 'Alto', value: '63,5 cm' },
    { label: 'Ancho', value: '42,5cm' },
    { label: 'Profundidad', value: '37 cm' }
    ],
  },
 
   {
    id: 'l-05',
    name: 'Rond 7000 Con Horno ',
    price: 304690.00,
    installments:3 & 6,
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: '/fotos/Rond7000ConHorno.png',
    features: [ 'Vidrio vitrocerámico'],
    isBestSeller: false,
    specs: [
    { label: 'Potencia', value: '7000 kcal/h' },
    { label: 'Ambiente', value: 'Hasta 50m2' },
    { label: 'Alto', value: '82 cm' },
    { label: 'Ancho', value: '42,5cm' },
    { label: 'Profundidad', value: '52 cm' }
    ],
  },
  {
    id: 'l-06',
    name: '7000 Premium',
    price: 442190.00,
    installments:3 & 6,
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: '/fotos/7000Premium.png',
    features: [ 'Vidrio vitrocerámico'],
    isBestSeller: false,
    specs: [
    { label: 'Potencia', value: '7000 kcal/h' },
    { label: 'Ambiente', value: 'Hasta 50m2' },
    { label: 'Alto', value: '74 cm' },
    { label: 'Ancho', value: '44 cm' },
    { label: 'Profundidad', value: '40,5 cm' }
    ],
  },
  
  {
    id: 'l-07',
    name: 'Moquehue 8000 ',
    price: 261590.00,
    installments:3 & 6,
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: '/fotos/Moquehue8000.png',
    features: [ 'Vidrio vitrocerámico'],
    isBestSeller: false,
    specs: [
    { label: 'Potencia', value: '8000 kcal/h' },
    { label: 'Ambiente', value: 'Hasta 60m2' },
    { label: 'Alto', value: '57 cm' },
    { label: 'Ancho', value: '43cm' },
    { label: 'Profundidad', value: '39 cm' }
    ],
  },
  
  {
    id: 'l-08',
    name: 'Moquehue 13500 ',
    price: 438690.00,
    installments:3&6,
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/Moquehue13500.png',
    features: [ 'Vidrio vitrocerámico'],
    isBestSeller: false,
    specs: [
    { label: 'Potencia', value: '13500 kcal/h' },
    { label: 'Ambiente', value: 'Hasta 100m2' },
    { label: 'Alto', value: '73 cm' },
    { label: 'Ancho', value: '54 cm' },
    { label: 'Profundidad', value: '49 cm' }
    ],
  
  },
  {
    id: 'l-09',
    name: 'Moquehue 13500 Con Horno ',
    price: 546890.00,
    installments:3&6,
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/Moquehue13500horno.png',
    features: [ 'Vidrio vitrocerámico'],
    isBestSeller: false,
    specs: [
    { label: 'Potencia', value: '13500 kcal/h' },
    { label: 'Ambiente', value: 'Hasta 100m2' },
    { label: 'Alto', value: '86 cm' },
    { label: 'Ancho', value: '52 cm' },
    { label: 'Profundidad', value: '47 cm' }
    ],
  },
  {
    id: 'l-10',
    name: '10000 Rinconero Premium',
    price: 539990.00,
    installments:3 & 6,
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/rinconero.png',
    features: ['Vidrio vitrocerámico'],
    isBestSeller: false,
    specs: [
    { label: 'Potencia', value: '10000 kcal/h' },
    { label: 'Ambiente', value: 'Hasta 70m2' },
    { label: 'Alto', value: '74 cm' },
    { label: 'Ancho', value: '68 cm' },
    { label: 'Profundidad', value: '48 cm' }
    ],
  },

  {
    id: 'l-11',
    name: '11000 Premium ',
    price: 551690.00,
    installments:3 & 6,
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/11000premium.png',
    features: ['Vidrio vitrocerámico'],
    isBestSeller: false,
    specs: [
    { label: 'Potencia', value: '11000 kcal/h' },
    { label: 'Ambiente', value: 'Hasta 70m2' },
    { label: 'Alto', value: '74 cm' },
    { label: 'Ancho', value: '52,5 cm' },
    { label: 'Profundidad', value: '43,5 cm' }
    ],
  },
  {
    id: 'l-12',
    name: '12000 Premium Con Horno',
    price: 722190.00,
    installments:3 & 6,
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/12000premiumConHorno.png',
    features: ['Vidrio vitrocerámico'],
    isBestSeller: false,
    specs: [
    { label: 'Potencia', value: '12000 kcal/h' },
    { label: 'Ambiente', value: 'Hasta 90m2' },
    { label: 'Alto', value: '80 cm' },
    { label: 'Ancho', value: '53 cm' },
    { label: 'Profundidad', value: '42 cm' }
    ],
  },
  {
    id: 'l-13',
    name: '14000 Alta Premium ',
    price: 722990.00,
    installments:3 & 6,
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/14000AltaPremium.png',
    features: ['Vidrio vitrocerámico'],
    isBestSeller: false,
    specs: [
    { label: 'Potencia', value: '14000 kcal/h' },
    { label: 'Ambiente', value: 'Hasta 70m2' },
    { label: 'Alto', value: '74 cm' },
    { label: 'Ancho', value: '62 cm' },
    { label: 'Profundidad', value: '44,5 cm' }
    ],
  },

    {
    id: 'l-15',
    name: '14000 Alta Premium Con Base Premium ',
    price: 755990.00,
    installments:3 & 6,
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/14000ConBasePremium.png',
    features: ['Vidrio vitrocerámico'],
    isBestSeller: false,
    specs: [
    { label: 'Potencia', value: '14000 kcal/h' },
    { label: 'Ambiente', value: 'Hasta 100m2' },
    { label: 'Alto', value: '74 cm' },
    { label: 'Ancho', value: '62 cm' },
    { label: 'Profundidad', value: '44,5 cm' }
    ],
  },
    {
    id: 'l-16',
    name: '15000 Rinconero ',
    price: 694590.00,
    installments:3 & 6,
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/15000Rinconero.png',
    features: ['Vidrio vitrocerámico'],
    isBestSeller: false,
    specs: [
    { label: 'Potencia', value: '15000 kcal/h' },
    { label: 'Ambiente', value: 'Hasta 100m2' },
    { label: 'Alto', value: '74 cm' },
    { label: 'Ancho', value: '80 cm' },
    { label: 'Profundidad', value: '56 cm' }
    ],
  },
    {
    id: 'l-17',
    name: '17000 Premium Con Horno ',
    price: 948190.00,
    installments:3 & 6,
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/17000PremiumConHorno.png',
    features: ['Vidrio vitrocerámico'],
    isBestSeller: false,
    specs: [
    { label: 'Potencia', value: '17000 kcal/h' },
    { label: 'Ambiente', value: 'Hasta 130m2' },
    { label: 'Alto', value: '94 cm' },
    { label: 'Ancho', value: '55,2 cm' },
    { label: 'Profundidad', value: '51,5 cm' }
    ],
  },
    {
    id: 'l-18',
    name: '19000 Rinconero Premium Con Horno',
    price: 857390.00,
    installments:3 & 6,
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/19000premConHorno.png',
    features: ['Vidrio vitrocerámico'],
    isBestSeller: false,
    specs: [
    { label: 'Potencia', value: '19000 kcal/h' },
    { label: 'Ambiente', value: 'Hasta 140m2' },
    { label: 'Alto', value: '94 cm' },
    { label: 'Ancho', value: '86 cm' },
    { label: 'Profundidad', value: '61 cm' }
    ],
  },
    {
    id: 'l-19',
    name: '20000 Premium ',
    price: 895290.00,
    installments: 3 & 6,
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/2000Prem.png',
    features: ['Vidrio vitrocerámico'],
    isBestSeller: false,
    specs: [
    { label: 'Potencia', value: '200000 kcal/h' },
    { label: 'Ambiente', value: 'Hasta 150m2' },
    { label: 'Alto', value: '74 cm' },
    { label: 'Ancho', value: '73 cm' },
    { label: 'Profundidad', value: '48 cm' }
    ],
  },
    {
    id: 'l-20',
    name: '27000 Premium',
    price: 1123990.00,
    installments:3 & 6,
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/27000.png',
    features: ['Vidrio vitrocerámico'],
    isBestSeller: false,
    specs: [
    { label: 'Potencia', value: '27000 kcal/h' },
    { label: 'Ambiente', value: 'Hasta 170m2' },
    { label: 'Alto', value: '74 cm' },
    { label: 'Ancho', value: '82 cm' },
    { label: 'Profundidad', value: '58 cm' }
    ],
  },
    {
    id: 'l-21',
    name: '27000 Premium Con Horno',
    price: 1280590.00,
    installments:3&6,
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/27000RinconeroConHorno.png',
    features: ['Vidrio vitrocerámico'],
    isBestSeller: false,
    specs: [
    { label: 'Potencia', value: '27000 kcal/h' },
    { label: 'Ambiente', value: 'Hasta 170m2' },
    { label: 'Alto', value: '94 cm' },
    { label: 'Ancho', value: '79,5 cm' },
    { label: 'Profundidad', value: '55 cm' }
    ],
  },
   
    {
    id: 'l-23',
    name: 'Campana Doble Puerta 27000 ',
    price: 1290190.00,
    installments:3 & 6,
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/Campana27000.png',
    features: ['Vidrio vitrocerámico'],
    isBestSeller: false,
    specs: [
    { label: 'Potencia', value: '127000 kcal/h' },
    { label: 'Ambiente', value: 'Hasta 170m2' },
    { label: 'Alto', value: '107 cm' },
    { label: 'Ancho', value: '82 cm' },
    { label: 'Profundidad', value: '58 cm' }
    ],
  },

    {
    id: 'l-26',
    name: 'Puerta Para Hogar Nº 1 ',
    price: 298580.00,
    installments:3 & 6,
    category: Category.PUERTAS,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/n1.png',
    features: ['Vidrio vitrocerámico'],
    isBestSeller: false,
    specs: [
    
    { label: 'Alto', value: '56,2 cm' },
    { label: 'Ancho', value: '75,5cm' },
    { label: 'Profundidad', value: '12 cm' }
    ],
  },
   {
    id: 'l-27',
    name: 'Puerta Para Hogar Nº 2',
    price: 345380.00,
    installments:3 & 6,
    category: Category.PUERTAS,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/n2.png',
    features: ['Vidrio vitrocerámico'],
    isBestSeller: false,
    specs: [
    { label: 'Alto', value: '59,7 cm' },
    { label: 'Ancho', value: '81,5cm' },
    { label: 'Profundidad', value: '12 cm' }
    ],
  },
   {
    id: 'l-28',
    name: 'Puerta Para Hogar Nº 3 ',
    price: 384280.00,
    installments:3&6,
    category: Category.PUERTAS,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/n3.png',
    features: ['Vidrio vitrocerámico'],
    isBestSeller: false,
    specs: [
    { label: 'Alto', value: '59,8 cm' },
    { label: 'Ancho', value: '91,5 cm' },
    { label: 'Profundidad', value: '12' }
    ],
  },
   {
    id: 'l-29',
    name: 'Puerta Para Hogar Nº 4 ',
    price: 477680.00,
    category: Category.PUERTAS,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/n4.png',
    features: ['Vidrio vitrocerámico'],
    isBestSeller: false,
    specs: [

    { label: 'Alto', value: '65,8 cm' },
    { label: 'Ancho', value: '101,5 cm' },
    { label: 'Profundidad', value: '12 cm' }
    ],
  },
   {
    id: 'l-30',
    name: 'Nº 5 ',
    price: 531180.00,
    category: Category.PUERTAS,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/n5H.png',
    features: ['Vidrio vitrocerámico'],
    isBestSeller: false,
    specs: [
    { label: 'Alto', value: '65,8 cm' },
    { label: 'Ancho', value: '112,6 cm' },
    { label: 'Profundidad', value: '12 cm' }
    ],
  },
   {
    id: 'l-31',
    name: 'Nº 6 ',
    price: 746680.00,
    category: Category.PUERTAS,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/n6.png',
    features: ['Vidrio vitrocerámico'],
    isBestSeller: false,
    specs: [

    { label: 'Alto', value: '75,7 cm' },
    { label: 'Ancho', value: '132,1 cm' },
    { label: 'Profundidad', value: '12 cm' }
    ],
  },
   {
    id: 'l-32',
    name: 'Nº 4 Con Horno ',
    price: 1490790.00,
    category: Category.CASSETTES,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/n4H.png',
    features: ['Vidrio vitrocerámico'],
    isBestSeller: false,
    specs: [
    { label: 'Calorias', value: '27000 cal'},  
    { label: 'Alto', value: '86 cm' },
    { label: 'Ancho', value: '94 cm' },
    { label: 'Profundidad', value: '52,5 cm' }
    ],
  },
   {
    id: 'l-33',
    name: 'Cassette Nº 5 Con Horno',
    price: 1595890.00,
    category: Category.CASSETTES,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/n5H.png',
    features: ['Vidrio vitrocerámico'],
    isBestSeller: false,
    specs: [
    { label: 'Calorias', value: '30000 cal'},  
    { label: 'Alto', value: '86 cm' },
    { label: 'Ancho', value: '105 cm' },
    { label: 'Profundidad', value: '52,8 cm' }
    ],
  },
 
   {
    id: 'l-34',
    name: 'Central 15000 ',
    price: 813590.00,
    category: Category.CENTRALES,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/15000C.png',
    features: ['Vidrio vitrocerámico'],
    isBestSeller: false,
    specs: [
    { label: 'Calorias', value: '15000 cal'}, 
    { label: 'Ambiente', value: 'Hasta 120m2' }, 
    { label: 'Alto', value: '65,5 cm' },
    { label: 'Ancho', value: '61 cm' },
    { label: 'Profundidad', value: '51 cm' }
    ],
  },
  
  {
    id: 'l-35',
    name: 'Central De 20000 ',
    price: 951790.00,
    category: Category.CENTRALES,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/20000C.png',
    features: ['Vidrio vitrocerámico'],
    isBestSeller: false,
    specs: [
    { label: 'Calorias', value: '20000 cal'}, 
    { label: 'Ambiente', value: 'Hasta 150m2' }, 
    { label: 'Alto', value: '65,2 cm' },
    { label: 'Ancho', value: '71 cm' },
    { label: 'Profundidad', value: '51 cm' }
    ],
  },
  {
    id: 'l-36',
    name: 'Central de 25000 ',
    price: 1100390.00,
    category: Category.CENTRALES,
    brand: Brand.LEPEN,
    imageUrl: './fotos/20000C.png',
    features: ['Vidrio vitrocerámico'],
    isBestSeller: false,
    specs: [
    { label: 'Calorias', value: '25000 cal'}, 
    { label: 'Ambiente', value: 'Hasta 160m2' }, 
    { label: 'Alto', value: '65,5 cm' },
    { label: 'Ancho', value: '81 cm' },
    { label: 'Profundidad', value: '51 cm' }
    ],
  },
  {
    id: 'l-37',
    name: 'Central de 30000 ',
    price: 1206190.00,
    category: Category.CENTRALES,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/Untitled (20).png',
    features: ['Vidrio vitrocerámico'],
    isBestSeller: false,
    specs: [
    { label: 'Calorias', value: '30000 cal'}, 
    { label: 'Ambiente', value: 'Hasta 170m2' }, 
    { label: 'Alto', value: '65,5 cm' },
    { label: 'Ancho', value: '91 cm' },
    { label: 'Profundidad', value: '51 cm' }
    ],
  },
  {
    id: 'l-38',
    name: 'Central de 39000 ',
    price: 1703690.00,
    category: Category.CENTRALES,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/Untitled (20).png',
    features: ['Vidrio vitrocerámico'],
    isBestSeller: false,
    specs: [
    { label: 'Calorias', value: '39000 cal'}, 
    { label: 'Ambiente', value: 'Hasta 190m2' }, 
    { label: 'Alto', value: '75 cm' },
    { label: 'Ancho', value: '119,5 cm' },
    { label: 'Profundidad', value: '60 cm' }
    ],
  },
  {
    id: 'l-39',
    name: 'Four Face',
    price: 1808990.00,
    category: Category.CENTRALES,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/fourface.png',
    features: ['Vidrio vitrocerámico'],
    isBestSeller: false,
    specs: [
    { label: 'Calorias', value: '30000 cal'}, 
    { label: 'Ambiente', value: 'Hasta 180m2' }, 
    { label: 'Alto', value: '140 cm' },
    { label: 'Ancho', value: '77 cm' },
    { label: 'Profundidad', value: '80 cm' }
    ],
  },
 
 {
    id: 'l-41',
    name: 'Horno Doble Cámara ',
    price: 936790.00,
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/HDobleCamara.png',
    features: ['Vidrio vitrocerámico'],
    isBestSeller: true,
    specs: [
  
    { label: 'Alto', value: '85 cm' },
    { label: 'Ancho', value: '69,5 cm' },
    { label: 'Profundidad', value: '77,5 cm' }
    ],
  },
 {
    id: 'l-42',
    name: 'Horno Familiar',
    price: 679790.00,
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/Moquehue13500horno.png',
    features: ['Vidrio vitrocerámico'],
    isBestSeller: false,
    specs: [
    { label: 'Alto', value: '60 cm' },
    { label: 'Ancho', value: '53 cm' },
    { label: 'Profundidad', value: '60 cm' }
    ],
  },
   {
    id: 'l-43',
    name: 'Mesa Para Horno Familiar',
    price: 124790.00,
    category: Category.ACCESORIOS,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/mesa1.png',
    isBestSeller: true,
    specs: [
    { label: 'Alto', value: '53 cm' },
    { label: 'Ancho', value: '60 cm' },
    { label: 'Profundidad', value: '60 cm' }
    ],
  },

  {
    id: 'l-44',
    name: 'Horno Pizzero',
    price: 65690.00,
    category: Category.HORNOS,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/HornoPizzero.png',
    isBestSeller: false,
    specs: [
    { label: 'Alto', value: '12cm' },
    { label: 'Ancho', value: '49 cm' },
    { label: 'Profundidad', value: '36 cm' }
    ],
  },

   {
    id: 'l-45',
    name: 'Cocina',
    price: 1077490.00,
    category: Category.COCINA,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/Cocina.png',
    isBestSeller: false,
    specs: [
    { label: 'Alto', value: '85 cm' },
    { label: 'Ancho', value: '89 cm' },
    { label: 'Profundidad', value: '58,5 cm' }
    ],
  },

  {
    id: 'l-46',
    name: 'Cocina New Cook',
    price: 1620590.00,
    category: Category.COCINA,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/CocinaNewCook.png',
    isBestSeller: false,
    specs: [
     
    { label: 'Ambiente', value: 'Hasta 70m2' }, 
    { label: 'Alto', value: '79,5 cm' },
    { label: 'Ancho', value: '104 cm' },
    { label: 'Profundidad', value: '57 cm' }
    ],
  },
  {
    id: 'l-47',
    name: 'Parrilla Barbacoa',
    price: 589990.00,
    category: Category.PARRILLAS,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/Barbacoa.png',
    isBestSeller: true,
    specs: [
    
    { label: 'Alto', value: '111,5 cm' },
    { label: 'Ancho', value: '137 cm' },
    { label: 'Profundidad', value: '48,5 cm' }
    ],
  },

  {
    id: 'l-48',
    name: 'Parrilla Fast Food',
    price: 349900.00,
    category: Category.PARRILLAS,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/FastFood.png',
    isBestSeller: false,
    specs: [
     
    { label: 'Alto', value: '104 cm' },
    { label: 'Ancho', value: '94 cm' },
    { label: 'Profundidad', value: '53 cm' }
    ],
  },

  {
    id: 'l-49',
    name: 'Parrilla Argento',
    price: 1620590.00,
    category: Category.PARRILLAS,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/ParrilaArgento.png',
    isBestSeller: true,
    specs: [
   
    { label: 'Alto', value: '56,7 cm' },
    { label: 'Ancho', value: '90,5 cm' },
    { label: 'Profundidad', value: '66,7 cm' }
    ],
  },
  {
    id: 'l-50',
    name: 'Fogonero Parrillero Premium',
    price: 751690.00,
    category: Category.FOGONES,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/FogoneroParrilleroPremium.png',
    isBestSeller: false,
    specs: [
    { label: 'Patas Altas', value: '71 cm' },
    { label: 'Alto', value: '46,5 cm' },
    { label: 'Ancho', value: '110 cm' },
    { label: 'Profundidad', value: '110 cm' }
    ],
  },
  {
    id: 'l-51',
    name: 'Fogonero Parrillero Wheels',
    price: 481390.00,
    category: Category.FOGONES,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/FogoneroWheels.png',
    isBestSeller: false,
    specs: [

    { label: 'Alto', value: '71 cm' },
    { label: 'Ancho', value: '110 cm' },
    { label: 'Profundidad', value: '110 cm' }
    ],
  },
  {
    id: 'l-52',
    name: 'Fogonero Circular',
    price: 388890.00,
    category: Category.FOGONES,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/FogoneroCircular.png',
    isBestSeller: true,
    specs: [
   
    { label: 'Alto', value: '39 cm' },
    { label: 'Ancho', value: '80 cm' },
    { label: 'Profundidad', value: '110 cm' }
    ],
  },




  
  
  
];
