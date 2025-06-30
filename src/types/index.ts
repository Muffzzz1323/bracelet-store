export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  images: string[];
  description: string;
  isOnSale?: boolean;
  isFeatured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: number;
  email: string;
  phone: string;
  name: string;
}

export interface Order {
  id: number;
  items: CartItem[];
  total: number;
  shippingAddress: ShippingAddress;
  paymentMethod: 'gpay' | 'cod';
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered';
  createdAt: Date;
}

export interface ShippingAddress {
  fullName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
}