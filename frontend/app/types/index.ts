export type ProductImage = {
  src: string;
};
export type Product = {
  id: number;
  title: string;
  slug: string;
  description?: string;
  price: number;
  stock: number;
  isFeatured?: boolean;
  category: Category | null;
  main_image?: {
    id: number;
    url?: string;
    alternativeText?: string;
    name?: string;
    width?: number;
    height?: number;
    formats?: {
      small?: { url: string };
      medium?: { url: string };
      large?: { url: string };
    };
  };

  images?: Media[] | null;
};

export type Media = {
  id: number;
  name?: string;
  alternativeText?: string;
  caption?: string;

  url: string;

  width?: number;
  height?: number;

  formats?: {
    thumbnail?: {
      url: string;
      width: number;
      height: number;
    };

    small?: {
      url: string;
      width: number;
      height: number;
    };

    medium?: {
      url: string;
      width: number;
      height: number;
    };

    large?: {
      url: string;
      width: number;
      height: number;
    };
  };
};

export type GetProductsParams = {
  categoryId?: number;
  limit?: number;
};

export type ProductModalProps = {
  selected: Product;
  onClose: () => void;
};

export type ProductCardProps = {
  product: Product;
  onQuickView: (product: Product) => void;
};

export type Category = {
  id: number;
  title: string;
  slug?: string;
  image?: string;
};
