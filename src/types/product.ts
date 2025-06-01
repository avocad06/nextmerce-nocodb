import { ReactNode } from "react";

export type Product = {
  brand?: ReactNode;
  compound?: ReactNode;
  category?: ReactNode;
  image?: any;
  name?: ReactNode;
  title: string;
  reviews: number;
  price: number;
  discountedPrice: number;
  id: number;
  imgs?: {
    thumbnails: string[];
    previews: string[];
  };
};
