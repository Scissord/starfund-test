import { Review } from "./review";

export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  // discountPercentage: number;
  // stock: number;
  rating: number;
  // tags: string[];
  // brand: string;
  // sku: string;
  // weight: number;
  // dimensions: {
  //   width: number;
  //   height: number;
  //   depth: number;
  // };
  // warrantyInformation: string;
  // shippingInformation: string;
  // availabilityStatus: string;
  // reviews: Review[],
  // returnPolicy: string;
  // minimumOrderQuantity: number;
  // meta: {
  //   createdAt: Date;
  //   updatedAt: Date;
  //   barcode: number;
  //   qrCode: string;
  // };
  // thumbnail: string;
  images: string[];
};
