
export enum Category {
  CALEFACCION = 'Calefacción',
  CASSETTES = 'Cassettes',
  COCINA = 'Cocina & Parrillas',
  PUERTAS = 'Puertas',
  CENTRALES = 'Centrales',
  ZINGUERIA = 'Zinguería',
  ACCESORIOS = 'Accesorios',
  ELECTRO = 'Electro',
  KAMADOS = 'Kamados',
  HORNOS = 'Hornos',
  FOGONES = 'Fogones',
  PARRILLAS = 'Parrillas',



}

export enum Brand {
  TROMEN = 'Tromen',
  LEPEN = 'Lepen',
  VULE = 'Vule',
  MERCEDES = 'Zinguería Mercedes'
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: Category;
  brand: Brand;
  imageUrl: string;
  features?: string[];
  isBestSeller?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}
