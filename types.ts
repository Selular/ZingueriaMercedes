
export enum Category {
  CALEFACCION = 'Calefacción',
  COCINA = 'Cocina & Parrillas',
  ZINGUERIA = 'Zinguería',
  ACCESORIOS = 'Accesorios',
  ELECTRO = 'Electro',
  KAMADOS = 'Kamados',
  HORNOS = 'Hornos',
  FOGONES = 'Fogones'


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
