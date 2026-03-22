export interface MenuItem {
  name: string;
  price?: string;
  priceR?: string;
  priceL?: string;
  priceQty1?: string;
  priceQty3?: string;
  pricePot?: string;
  description?: string;
  tags?: string[];
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
  columns?: number;
  headers?: string[];
}

export interface MenuData {
  day: MenuSection[];
  evening: MenuSection[];
}

export type ViewState = 'landing' | 'day' | 'evening';
