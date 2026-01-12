
import { Product, Category, Brand } from '../types';

export const products: Product[] = [
  {
    id: 't-01',
    name: 'Tromen Calafate',
    description: 'Estufa a leña de alto rendimiento, ideal para ambientes grandes.',
    price: 450000,
    category: Category.CALEFACCION,
    brand: Brand.TROMEN,
    imageUrl: 'https://images.unsplash.com/photo-1545063710-859a86d26786?q=80&w=800&auto=format&fit=crop',
    features: ['7000 kcal/h', 'Vidrio vitrocerámico', 'Doble combustión'],
    isBestSeller: true
  },
  {
    id: 't-02',
    name: 'Tromen Pehuén 7000',
    description: 'Excelente balance entre diseño y eficiencia calórica.',
    price: 320000,
    category: Category.CALEFACCION,
    brand: Brand.TROMEN,
    imageUrl: 'https://images.unsplash.com/photo-1542332213-31f87348057f?q=80&w=800&auto=format&fit=crop',
    features: ['6000 kcal/h', 'Cajón cenicero', 'Hasta 80m2']
  },
  {
    id: 'l-01',
    name: 'Lepen 9000 Classic',
    description: 'Un clásico de la calefacción argentina, robusto y confiable.',
    price: 380000,
    category: Category.CALEFACCION,
    brand: Brand.LEPEN,
    imageUrl: 'https://images.unsplash.com/photo-1516663235285-84698867a7da?q=80&w=800&auto=format&fit=crop',
    features: ['9000 kcal/h', 'Refractarios de alta calidad', 'Manija fría'],
    isBestSeller: true
  },
  {
    id: 'z-01',
    name: 'Canaleta Americana 25',
    description: 'Canaleta de zinguería premium para techos de chapa o teja.',
    price: 15000,
    category: Category.ZINGUERIA,
    brand: Brand.MERCEDES,
    imageUrl: 'https://images.unsplash.com/photo-1635424710928-0544e8512eae?q=80&w=800&auto=format&fit=crop',
    features: ['Chapa C25', 'Pintura Epoxi opcional', 'Varios colores']
  },
  {
    id: 't-03',
    name: 'Tromen Dupla',
    description: 'Parrilla y horno a leña en una sola unidad compacta.',
    price: 680000,
    category: Category.COCINA,
    brand: Brand.TROMEN,
    imageUrl: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop',
    features: ['Acero inoxidable', 'Ladrillos refractarios', 'Termómetro'],
    isBestSeller: true
  },
  {
    id: 'z-02',
    name: 'Kit Ventilación 6"',
    description: 'Kit completo para salida de humos en estufas a leña.',
    price: 45000,
    category: Category.ZINGUERIA,
    brand: Brand.MERCEDES,
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop',
    features: ['Enlozado', 'Sombrerete Venturi', 'Abrazaderas incluidas'],
    isBestSeller: true
  },
  {
    id: 'l-02',
    name: 'Lepen Horno Tromen Adaptable',
    description: 'Horno de embutir de alto rendimiento Lepen.',
    price: 520000,
    category: Category.COCINA,
    brand: Brand.LEPEN,
    imageUrl: 'https://images.unsplash.com/photo-1527334134460-f21a05ef52a3?q=80&w=800&auto=format&fit=crop',
    features: ['Gran capacidad', 'Reloj de temperatura', 'Bandejas incluidas']
  }
];
