import mongoose, { Schema, models, model } from "mongoose";

export interface IProduct {
  name: string;
  slug: string;
  category: string;
  price: number;
  compareAtPrice?: number;
  description: string;
  image: string;
  badge?: "BEST SELLER" | "POPULAR" | "NEW" | "PREMIUM" | "PROFESSIONAL";
  rating?: number;
  reviewCount?: number;
}

const ProductSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    compareAtPrice: { type: Number },
    description: { type: String, required: true },
    image: { type: String, required: true },
    badge: {
      type: String,
      enum: ["BEST SELLER", "POPULAR", "NEW", "PREMIUM", "PROFESSIONAL"],
    },
    rating: { type: Number, default: 4.8 },
    reviewCount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export const Product =
  (models.Product as mongoose.Model<IProduct>) ||
  model<IProduct>("Product", ProductSchema);
