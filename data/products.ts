import { Product, Category, Brand } from './types.ts';

export const products: Product[] = [
 
  /**Lepen**/
  {
    id: 'l-01',
    name: 'Moquehue Vintage 9000', 
    price: 304790.00,
    installments: [3, 6],
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/Lepen/Moquehue9000.png',
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
    installments: [3, 6],
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/Lepen/Moquehue13900 .png',
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
    installments: [3, 6],
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: '/fotos/Lepen/Moquehue20000.png',
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
    installments: [3, 6],
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: '/fotos/Lepen/Rond7000.png',
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
    installments: [3, 6],
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: '/fotos/Lepen/Rond7000ConHorno.png',
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
    installments: [3, 6],
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: '/fotos/Lepen/7000Premium.png',
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
    installments: [3, 6],
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: '/fotos/Lepen/Moquehue8000.png',
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
    installments: [3, 6],
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/Lepen/Moquehue13500.png',
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
    installments: [3, 6],
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/Lepen/Moquehue13500horno.png',
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
    installments: [3, 6],
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/Lepen/rinconero.png',
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
    installments: [3, 6],
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/Lepen/11000premium.png',
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
    installments: [3, 6],
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/Lepen/12000premiumConHorno.png',
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
    installments: [3, 6],
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/Lepen/14000AltaPremium.png',
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
    installments: [3, 6],
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/Lepen/14000ConBasePremium.png',
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
    installments: [3, 6],
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/Lepen/15000Rinconero.png',
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
    installments: [3, 6],
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/Lepen/17000PremiumConHorno.png',
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
    installments: [3, 6],
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/Lepen/19000premConHorno.png',
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
    installments: [3, 6],
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/Lepen/2000Prem.png',
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
    installments: [3, 6],
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/Lepen/27000.png',
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
    installments: [3, 6],
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/Lepen/27000RinconeroConHorno.png',
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
    installments: [3, 6],
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/Lepen/Campana27000.png',
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
    installments: [3, 6],
    category: Category.PUERTAS,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/Lepen/n1.png',
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
    installments: [3, 6],
    category: Category.PUERTAS,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/Lepen/n2.png',
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
    installments: [3, 6],
    category: Category.PUERTAS,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/Lepen/n3.png',
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
    imageUrl: 'fotos/Lepen/n4.png',
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
    name: 'Puerta para Hogar Nº 5 ',
    price: 531180.00,
    category: Category.PUERTAS,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/Lepen/n5H.png',
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
    name: 'Puerta para Hogar Nº 6 ',
    price: 746680.00,
    category: Category.PUERTAS,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/Lepen/n6.png',
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
    name: 'Puerta para hogar Nº 4 Con Horno ',
    price: 1490790.00,
    category: Category.CASSETTES,
    brand: Brand.LEPEN,
    imageUrl: 'fotos/Lepen/n4H.png',
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
    imageUrl: 'fotos/Lepen/n5H.png',
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
    imageUrl: 'fotos/Lepen/15000C.png',
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
    imageUrl: 'fotos/Lepen/20000C.png',
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
    imageUrl: './fotos/Lepen/20000C.png',
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
    imageUrl: 'fotos/Lepen/Untitled (20).png',
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
    imageUrl: 'fotos/Lepen/Untitled (20).png',
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
    imageUrl: 'fotos/Lepen/fourface.png',
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
    imageUrl: 'fotos/Lepen/HDobleCamara.png',
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
    imageUrl: 'fotos/Lepen/Moquehue13500horno.png',
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
    imageUrl: 'fotos/Lepen/mesa1.png',
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
    imageUrl: 'fotos/Lepen/HornoPizzero.png',
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
    imageUrl: 'fotos/Lepen/Cocina.png',
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
    imageUrl: 'fotos/Lepen/CocinaNewCook.png',
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
    imageUrl: 'fotos/Lepen/Barbacoa.png',
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
    imageUrl: 'fotos/Lepen/FastFood.png',
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
    imageUrl: 'fotos/Lepen/ParrilaArgento.png',
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
    imageUrl: 'fotos/Lepen/FogoneroParrilleroPremium.png',
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
    imageUrl: 'fotos/Lepen/FogoneroWheels.png',
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
    imageUrl: 'fotos/Lepen/FogoneroCircular.png',
    isBestSeller: true,
    specs: [
   
    { label: 'Alto', value: '39 cm' },
    { label: 'Ancho', value: '80 cm' },
    { label: 'Profundidad', value: '110 cm' }
    ],
  },




  /*VULE */


  {
  id: 'l-54',
  name: 'Parrilla Nórdica',
  price: 317179.00,
  category: Category.CALEFACCION,
  brand: Brand.VULE,
  imageUrl: 'fotos/Vule/ParrillaNórdica.png',
  isBestSeller: false,
  specs: [
    { label: 'Alto', value: '104 cm' },
    { label: 'Ancho', value: '97 cm' },
    { label: 'Profundidad', value: '48 cm' }
  ],
},
{
  id: 'l-55',
  name: 'Parrilla Eco Con Pala y Atizador',
  price: 486612.00,
  category: Category.CALEFACCION,
  brand: Brand.VULE,
  imageUrl: 'fotos/Vule/ParrillaEco.png',
  isBestSeller: false,
  specs: [
    { label: 'Alto', value: '115 cm' },
    { label: 'Ancho', value: '105 cm' },
    { label: 'Profundidad', value: '52 cm' }
  ],
},
{
  id: 'l-56',
  name: 'Parrilla Polo',
  price: 558456.00,
  category: Category.CALEFACCION,
  brand: Brand.VULE,
  imageUrl: 'fotos/Vule/ParrillaPolo.png',
  isBestSeller: false,
  specs: [
    { label: 'Alto', value: '111 cm' },
    { label: 'Ancho', value: '105 cm (70 cm guardada)' },
    { label: 'Profundidad', value: '53 cm' }
  ],
},
{
  id: 'l-57',
  name: 'Parrilla Mega',
  price: 699900.00,
  category: Category.PARRILLAS,
  brand: Brand.VULE,
  imageUrl: 'fotos/Vule/ParrillaMega.png',
  isBestSeller: false,
  specs: [
    { label: 'Alto', value: '111 cm' },
    { label: 'Ancho', value: '130 cm' },
    { label: 'Profundidad', value: '53 cm' }
  ],
},
{
  id: 'l-58',
  name: 'Fogonero Gurú',
  price: 438872.00,
  category: Category.FOGONES,
  brand: Brand.VULE,
  imageUrl: 'fotos/Vule/FogoneroGurú.png',
  isBestSeller: false,
  specs: [
    { label: 'Diámetro', value: '80 cm' },
    { label: 'Peso', value: '35 kg' },
    { label: 'Incluye', value: 'Parrilla, plancha y manta' }
  ],
},
{
  id: 'l-59',
  name: 'Fogonero Asador Gurú Con Carro',
  price: 683563.00,
  category: Category.FOGONES,
  brand: Brand.VULE,
  imageUrl: 'fotos/Vule/FogoneroGurúConCarro.png',
  isBestSeller: false,
  specs: [
    { label: 'Diámetro', value: '80 cm' },
    { label: 'Peso', value: '62 kg' },
    { label: 'Incluye', value: 'Parrilla, plancha, manta y carro' }
  ],
},
{
  id: 'l-60',
  name: 'Fogonero Orion',
  price: 817250.00,
  category: Category.FOGONES,
  brand: Brand.VULE,
  imageUrl: 'fotos/Vule/FogoneroOrión.png',
  isBestSeller: false,
  specs: [
    { label: 'Diámetro', value: '120 cm' },
    { label: 'Peso', value: '71 kg' },
    { label: 'Incluye', value: '2 parrillas, plancha y manta' }
  ],
},
{
  id: 'l-61',
  name: 'Fogonero Asador Orion Con Carro',
  price: 1145486.00,
  category: Category.FOGONES,
  brand: Brand.VULE,
  imageUrl: 'fotos/Vule/FogoneroOriónConCaro.png',
  isBestSeller: false,
  specs: [
    { label: 'Diámetro', value: '120 cm' },
    { label: 'Peso', value: '103 kg' },
    { label: 'Incluye', value: '2 parrillas, plancha, manta y carro' }
  ],
},
{
  id: 'l-62',
  name: 'Fogón Luno 500',
  price: 250440.00,
  category: Category.FOGONES,
  brand: Brand.VULE,
  imageUrl: 'fotos/Vule/FogónLuno500.png',
  isBestSeller: false,
  specs: [
    { label: 'Alto', value: '47 cm' },
    { label: 'Ancho', value: '58 cm' },
    { label: 'Profundidad', value: '42 cm' }
  ],
},
{
  id: 'l-63',
  name: 'Fogón Luno 700',
  price: 311401.00,
  category: Category.FOGONES,
  brand: Brand.VULE,
  imageUrl: 'fotos/Vule/FogónLuno700.png',
  isBestSeller: false,
  specs: [
    { label: 'Alto', value: '100 cm' },
    { label: 'Ancho', value: '58 cm' },
    { label: 'Profundidad', value: '75 cm' }
  ],
},

{
  id: 'l-64',
  name: 'Fogonero Zen 700',
  price: 267928.00,
  category: Category.FOGONES,
  brand: Brand.VULE,
  imageUrl: 'fotos/Vule/FogónZen700.png',
  isBestSeller: false,
  specs: [
    { label: 'Alto', value: '50 cm' },
    { label: 'Diámetro', value: '70 cm' },
    { label: 'Peso', value: '32 kg' }
  ],
},
{
  id: 'l-65',
  name: 'Fogón Chimenea de Jardín Origami 120',
  price: 286000.00,
  category: Category.CALEFACCION,
  brand: Brand.VULE,
  imageUrl: 'fotos/Vule/fogon-origami-120.png',
  isBestSeller: false,
  specs: [
    { label: 'Alto', value: '120 cm' },
    { label: 'Uso', value: 'Exterior' },
    { label: 'Diseño', value: 'Origami' }
  ],
},
{
  id: 'l-66',
  name: 'Fogón Chimenea de Jardín Pirámide 120',
  price: 331760.00,
  category: Category.CALEFACCION,
  brand: Brand.VULE,
  imageUrl: 'fotos/Vule/fogon-piramide-120.png',
  isBestSeller: false,
  specs: [
    { label: 'Alto', value: '120 cm' },
    { label: 'Uso', value: 'Exterior' },
    { label: 'Diseño', value: 'Pirámide' }
  ],
},
{
  id: 'l-67',
  name: 'Maula 7',
  price: 361627.00,
  category: Category.CALEFACCION,
  brand: Brand.VULE,
  imageUrl: 'fotos/Vule/Maula7.png',
  isBestSeller: false,
  specs: [
    { label: 'Alto', value: '56 cm' },
    { label: 'Ancho', value: '48 cm' },
    { label: 'Profundidad', value: '45 cm' }
  ],
},
{
  id: 'l-68',
  name: 'Maula 10',
  price: 516610.00,
  category: Category.CALEFACCION,
  brand: Brand.VULE,
  imageUrl: 'fotos/Vule/Maula10.png',
  isBestSeller: false,
  specs: [
    { label: 'Alto', value: '58 cm' },
    { label: 'Ancho', value: '50 cm' },
    { label: 'Profundidad', value: '46 cm' }
  ],
},
{
  id: 'l-69',
  name: 'Euca 8',
  price: 675517.00,
  category: Category.CALEFACCION,
  brand: Brand.VULE,
  imageUrl: 'fotos/Vule/Euca8.png',
  isBestSeller: false,
  specs: [
    { label: 'Alto', value: '60 cm' },
    { label: 'Ancho', value: '43.4 cm' },
    { label: 'Profundidad', value: '49 cm' }
  ],
},
{
  id: 'l-70',
  name: 'Euca 10',
  price: 933716.00,
  category: Category.CALEFACCION,
  brand: Brand.VULE,
  imageUrl: 'fotos/Vule/Euca10.png',
  isBestSeller: false,
  specs: [
    { label: 'Alto', value: '72 cm' },
    { label: 'Ancho', value: '48 cm' },
    { label: 'Profundidad', value: '49 cm' }
  ],
},
{
  id: 'l-71',
  name: 'Euca 15',
  price: 1087532.00,
  category: Category.CALEFACCION,
  brand: Brand.VULE,
  imageUrl: 'fotos/Vule/Euca15.png',
  isBestSeller: false,
  specs: [
    { label: 'Alto', value: '90 cm' },
    { label: 'Ancho', value: '64 cm' },
    { label: 'Profundidad', value: '49 cm' }
  ],
},
{
  id: 'l-72',
  name: 'Buho 13',
  price: 1108324.00,
  category: Category.CALEFACCION,
  brand: Brand.VULE,
  imageUrl: 'fotos/Vule/Buho13.png',
  isBestSeller: false,
  specs: [
    { label: 'Alto', value: '91.3 cm' },
    { label: 'Ancho', value: '69 cm' },
    { label: 'Profundidad', value: '45.8 cm' }
  ],
},
{
  id: 'l-73',
  name: 'Buho 16',
  price: 1202947.00,
  category: Category.CALEFACCION,
  brand: Brand.VULE,
  imageUrl: 'fotos/Vule/Buho16.png',
  isBestSeller: false,
  specs: [
    { label: 'Alto', value: '91.3 cm' },
    { label: 'Ancho', value: '80.3 cm' },
    { label: 'Profundidad', value: '45.8 cm' }
  ],
},
{
  id: 'l-74',
  name: 'Buho 23',
  price: 1610825.00,
  category: Category.CALEFACCION,
  brand: Brand.VULE,
  imageUrl: 'fotos/Vule/Buho23.png',
  isBestSeller: false,
  specs: [
    { label: 'Alto', value: '98 cm' },
    { label: 'Ancho', value: '88 cm' },
    { label: 'Profundidad', value: '58.5 cm' }
  ],
},

{
  id: 'l-75',
  name: 'Set Pala y Atizador',
  price: 32340.00,
  category: Category.CALEFACCION,
  brand: Brand.VULE,
  imageUrl: 'fotos/Vule/SetDePalaYAtizador.png',
  isBestSeller: false,
  specs: [
    { label: 'Largo Pala', value: '59 cm' },
    { label: 'Largo Atizador', value: '55 cm' },
    { label: 'Uso', value: 'Accesorio para parrilla o fogón' }
  ],
},
{
  id: 'l-76',
  name: 'Plancha 1 Hornalla',
  price: 30177.00,
  category: Category.CALEFACCION,
  brand: Brand.VULE,
  imageUrl: 'fotos/Vule/Plancha1Hornalla.png',
  isBestSeller: false,
  specs: [
    { label: 'Alto', value: '27 cm' },
    { label: 'Ancho', value: '27 cm' },
    { label: 'Uso', value: 'Cocción sobre fogón o parrilla' }
  ],
},


/*Tromen */

{
  id: 't-01',
  name: 'Paris 4 Caras',
  price: 6731748.00,
  category: Category.CALEFACCION,
  brand: Brand.TROMEN,
  imageUrl: 'fotos/Tromen/paris4.png',
  isBestSeller: false,
  specs: [
    { label: 'Potencia', value: '27000 kcal' },
    { label: 'Salida de humo', value: '10"' },
    { label: 'Superficie', value: '240 m2' },
    { label: 'Ancho', value: '113 cm' },
    { label: 'Alto', value: '89.2 cm' },
    { label: 'Profundidad', value: '66.4 cm' }
  ],
},
{
  id: 't-02',
  name: 'Paris Black',
  price: 3574128.00,
  category: Category.CALEFACCION,
  brand: Brand.TROMEN,
  imageUrl: 'fotos/Tromen/Parisblack.png',
  isBestSeller: false,
  specs: [],
},
{
  id: 't-03',
  name: 'Paris Doble Puerta',
  price: 5289285.00,
  category: Category.CALEFACCION,
  brand: Brand.TROMEN,
  imageUrl: 'fotos/Tromen/Parisblack.png',
  isBestSeller: false,
  specs: [
    { label: 'Potencia', value: '27000 kcal' },
    { label: 'Salida de humo', value: '10"' }
  ],
},
{
  id: 't-04',
  name: 'Roma Doble Puerta',
  price: 3829507.00,
  category: Category.CALEFACCION,
  brand: Brand.TROMEN,
  imageUrl: 'fotos/Tromen/romadoblepuerta.png',
  isBestSeller: false,
  specs: [
    { label: 'Potencia', value: '23000 kcal' },
    { label: 'Salida de humo', value: '8"' }
  ],
},
{
  id: 't-05',
  name: 'Roma Black',
  price: 2800413.00,
  category: Category.CALEFACCION,
  brand: Brand.TROMEN,
  imageUrl: 'fotos/Tromen/Romablack.png',
  isBestSeller: false,
  specs: [],
},
{
  id: 't-06',
  name: 'Lisboa',
  price: 1908748.00,
  category: Category.CALEFACCION,
  brand: Brand.TROMEN,
  imageUrl: 'fotos/Tromen/Lisboa.png',
  isBestSeller: false,
  specs: [
    { label: 'Potencia', value: '25000 kcal' },
    { label: 'Salida de humo', value: '8"' }
  ],
},
{
  id: 't-07',
  name: 'Ombú 1120 Doble Puerta',
  price: 4209331.00,
  category: Category.CALEFACCION,
  brand: Brand.TROMEN,
  imageUrl: 'fotos/Tromen/ombu1120.png',
  isBestSeller: false,
  specs: [],
},
{
  id: 't-08',
  name: 'Ombú 890 Doble Puerta',
  price: 2936760.00,
  category: Category.CALEFACCION,
  brand: Brand.TROMEN,
  imageUrl: 'fotos/Tromen/ombu890.png',
  isBestSeller: false,
  specs: [],
},
{
  id: 't-09',
  name: 'Argentina',
  price: 1625756.00,
  category: Category.CALEFACCION,
  brand: Brand.TROMEN,
  imageUrl: 'fotos/Tromen/CalefactorALeñaLíneaTradicionalArgentina.jpg',
  isBestSeller: false,
  specs: [],
},
{
  id: 't-10',
  name: 'Calafate',
  price: 1234588.00,
  category: Category.CALEFACCION,
  brand: Brand.TROMEN,
  imageUrl: 'fotos/Tromen/CalefactorALeñaLíneaTradicionalCalafate.jpg',
  isBestSeller: false,
  specs: [],
},
{
  id: 't-11',
  name: 'Chaltén',
  price: 1064911.00,
  category: Category.CALEFACCION,
  brand: Brand.TROMEN,
  imageUrl: 'fotos/Tromen/CalefactorALeñaLíneaTradicionalChalten.jpg',
  isBestSeller: false,
  specs: [],
},
{
  id: 't-12',
  name: 'Brooklyn Multigas',
  price: 583153.00,
  category: Category.CALEFACCION,
  brand: Brand.TROMEN,
  imageUrl: 'fotos/Tromen/CalefactorAGasBrooklyn.jpg',
  isBestSeller: false,
  specs: [],
},
{
  id: 't-13',
  name: 'Austral 7000',
  price: 394210.00,
  category: Category.CALEFACCION,
  brand: Brand.TROMEN,
  imageUrl: 'fotos/Tromen/CalefactorALeñaAustral7000.jpg',
  isBestSeller: false,
  specs: [],
},
{
  id: 't-14',
  name: 'Austral 9000',
  price: 478626.00,
  category: Category.CALEFACCION,
  brand: Brand.TROMEN,
  imageUrl: 'fotos/Tromen/CalefactorALeñaAustral9000.jpg',
  isBestSeller: false,
  specs: [],
},
{
  id: 't-15',
  name: 'Austral A15',
  price: 687931.00,
  category: Category.CALEFACCION,
  brand: Brand.TROMEN,
  imageUrl: 'fotos/Tromen/CalefactorALeñaAustral15000.jpg',
  isBestSeller: false,
  specs: [],
},
{
  id: 't-16',
  name: 'Austral 15000 con Horno',
  price: 746906.00,
  category: Category.CALEFACCION,
  brand: Brand.TROMEN,
  imageUrl: 'fotos/Tromen/CalefactorALeñaAustral15000ConHorno.jpg',
  isBestSeller: false,
  specs: [],
},
{
  id: 't-17',
  name: 'Eco Tromen 7000',
  price: 290488.00,
  category: Category.CALEFACCION,
  brand: Brand.TROMEN,
  imageUrl: 'fotos/Tromen/EcoTromen7000.jpg',
  isBestSeller: false,
  specs: [],
},
{
  id: 't-18',
  name: 'Pehuén 6000',
  price: 424437.00,
  category: Category.CALEFACCION,
  brand: Brand.TROMEN,
  imageUrl: 'fotos/Tromen/CalefactorALeñaPehuen6000.jpg',
  isBestSeller: false,
  specs: [],
},
{
  id: 't-19',
  name: 'TR 13001',
  price: 1100406.00,
  category: Category.CALEFACCION,
  brand: Brand.TROMEN,
  imageUrl: 'fotos/Tromen/CalefactorALeñaLíneaTradicionalTr13001.jpg',
  isBestSeller: false,
  specs: [],
},
{
  id: 't-20',
  name: 'TR 8000',
  price: 838772.00,
  category: Category.CALEFACCION,
  brand: Brand.TROMEN,
  imageUrl: 'fotos/Tromen/CalefactorALeñaLíneaTradicionalTr8000.jpg',
  isBestSeller: false,
  specs: [],
},
{
  id: 't-21',
  name: 'TR Hogar',
  price: 1169207.00,
  category: Category.CALEFACCION,
  brand: Brand.TROMEN,
  imageUrl: 'fotos/Tromen/CalefactorALeñaLíneaTradicionalTrHogar.jpg',
  isBestSeller: false,
  specs: [],
},
{
  id: 't-22',
  name: 'P 14000 Esquinero',
  price: 819474.00,
  category: Category.CALEFACCION,
  brand: Brand.TROMEN,
  imageUrl: 'fotos/Tromen/CalefactorALeñaPehuen14000Esquinero.jpg',
  isBestSeller: false,
  specs: [],
},
{
  id: 't-23',
  name: 'P 16000 Insertable',
  price: 947827.00,
  category: Category.CALEFACCION,
  brand: Brand.TROMEN,
  imageUrl: 'fotos/Tromen/Pehuen16000.png',
  isBestSeller: false,
  specs: [
    { label: 'Potencia', value: '16000 kcal' },
    { label: 'Salida de humo', value: '6"' }
  ],
},
{
  id: 't-24',
  name: 'Pehuén 11000',
  price: 623690.00,
  category: Category.CALEFACCION,
  brand: Brand.TROMEN,
  imageUrl: 'fotos/Tromen/CalefactorALeñaPehuen11000.jpg',
  isBestSeller: false,
  specs: [],
},
{
  id: 't-25',
  name: 'Pehuén 14000',
  price: 832041.00,
  category: Category.CALEFACCION,
  brand: Brand.TROMEN,
  imageUrl: 'fotos/Tromen/CalefactorALeñaPehuen14000.jpg',
  isBestSeller: false,
  specs: [],
},
{
  id: 't-26',
  name: 'Pehuén 18000',
  price: 904611.00,
  category: Category.CALEFACCION,
  brand: Brand.TROMEN,
  imageUrl: 'fotos/Tromen/CalefactorALeñaPehuen18000.jpg',
  isBestSeller: false,
  specs: [],
},
{
  id: 't-27',
  name: 'Pehuén 18000 con Horno',
  price: 1172455.00,
  category: Category.CALEFACCION,
  brand: Brand.TROMEN,
  imageUrl: 'fotos/Tromen/CalefactorALeñaPehuen18000ConHorno.jpg',
  isBestSeller: false,
  specs: [],
},
{
  id: 't-28',
  name: 'Pehuén 24000',
  price: 1014918.00,
  category: Category.CALEFACCION,
  brand: Brand.TROMEN,
  imageUrl: 'fotos/Tromen/CalefactorALeñaPehuen24000.jpg',
  isBestSeller: false,
  specs: [],
},
{
  id: 't-29',
  name: 'Pehuén 24000 con Horno',
  price: 1449986.00,
  category: Category.CALEFACCION,
  brand: Brand.TROMEN,
  imageUrl: 'fotos/Tromen/CalefactorALeñaPehuen24000ConHorno.jpg',
  isBestSeller: false,
  specs: [],
},

{
  id: 't-30',
  name: 'Parrilla Federal',
  price: 1641106.00,
  category: Category.PARRILLAS,
  brand: Brand.TROMEN,
  imageUrl: 'fotos/Tromen/ParrillaALeñaFederal.jpg',
  isBestSeller: false,
  specs: [
    { label: 'Ancho', value: '148 cm' },
    { label: 'Alto', value: '112.5 cm' },
    { label: 'Profundidad', value: '54 cm' }
  ],
},
{
  id: 't-31',
  name: 'Parrilla Gaucha',
  price: 1159922.00,
  category: Category.PARRILLAS,
  brand: Brand.TROMEN,
  imageUrl: 'fotos/Tromen/ParrillaALeñaGaucha.jpg',
  isBestSeller: false,
  specs: [],
},
{
  id: 't-32',
  name: 'Chulenguito',
  price: 335228.00,
  category: Category.PARRILLAS,
  brand: Brand.TROMEN,
  imageUrl: 'fotos/Tromen/ParrillaALeñaChulenguito.jpg',
  isBestSeller: false,
  specs: [],
},
{
  id: 't-33',
  name: 'Chulengo a Leña',
  price: 476000.00,
  category: Category.PARRILLAS,
  brand: Brand.TROMEN,
  imageUrl: 'fotos/Tromen/ParrillaALeñaChulengo.jpg',
  isBestSeller: false,
  specs: [],
},
{
  id: 't-34',
  name: 'Angus E480 Dimmer',
  price: 546000.00,
  category: Category.PARRILLAS,
  brand: Brand.TROMEN,
  imageUrl: 'fotos/Tromen/ParrillaEléctricaAnguse480ConDimmer.jpg',
  isBestSeller: false,
  specs: [
    { label: 'Tipo', value: 'Eléctrica' }
  ],
},
{
  id: 't-35',
  name: 'Horno Tango 780',
  price: 1216192.00,
  category: Category.HORNOS,
  brand: Brand.TROMEN,
  imageUrl: 'fotos/Tromen/HornoAGasTango780.jpg',
  isBestSeller: false,
  specs: [],
},

{
  id: 't-37',
  name: 'Horno Tango a Leña',
  price: 840375.00,
  category: Category.HORNOS,
  brand: Brand.TROMEN,
  imageUrl: 'fotos/Tromen/HornoALeñaTangoConBase.jpg',
  isBestSeller: false,
  specs: [],
},

/*{
  id: 'numero cualquiera',
  name: 'nombre del producto',
  price: precio.00,
  category: Category.HORNOS/PARRILLAS/FOGONEROS/ACCESORIOS,
  brand: Brand.TROMEN/LEPEN/VULE,
  imageUrl: '',
  isBestSeller: false/TRUE,
  specs: [],
},*/

 
];


