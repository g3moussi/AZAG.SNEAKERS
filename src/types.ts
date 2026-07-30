export interface ProductColor {
  name: string;
  hex: string;
  image: string;
}

export interface Review {
  id: string;
  author: string;
  city: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
  avatar?: string;
  sandalPhoto?: string;
}

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  originalPrice?: number;
  discountBadge?: string;
  isNew?: boolean;
  isBestSeller?: boolean;
  category: 'mocassins' | 'baskets' | 'escarpins' | 'sandales' | 'mules' | 'bottines' | 'cuir' | 'raphia';
  targetAudience?: 'homme' | 'femme' | 'enfant';
  colors: ProductColor[];
  sizes: number[];
  mainImage: string;
  secondaryImage: string;
  gallery: string[];
  description: string;
  materials: string[];
  rating: number;
  reviewsCount: number;
  reviews: Review[];
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  selectedColor: ProductColor;
  selectedSize: number;
  quantity: number;
}

export interface FilterState {
  category: string;
  sizes: number[];
  colors: string[];
  maxPrice: number;
  materials: string[];
  inStockOnly: boolean;
  sortBy: 'newest' | 'price-asc' | 'price-desc' | 'rating' | 'popular';
}

export interface CODOrder {
  id: string;
  fullName: string;
  phone: string;
  city: string;
  address: string;
  notes?: string;
  items: CartItem[];
  subtotal: number;
  shipping: number;
  discount: number;
  total: number;
  createdAt: string;
}
