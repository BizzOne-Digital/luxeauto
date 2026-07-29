import mongoose, { Schema, models, model } from "mongoose";

export interface IProductVariant {
  name: string;
  images: string[];
}

export interface IProductCompatibility {
  categories: { label: string; models: string[] }[];
  guideImage?: string;
}

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
  features?: string[];
  compatibility?: IProductCompatibility;
  variants?: IProductVariant[];
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
    features: { type: [String], default: undefined },
    compatibility: {
      type: new Schema(
        {
          categories: [
            {
              label: { type: String, required: true },
              models: { type: [String], required: true },
            },
          ],
          guideImage: { type: String },
        },
        { _id: false }
      ),
      default: undefined,
    },
    variants: {
      type: [
        new Schema(
          {
            name: { type: String, required: true },
            images: { type: [String], required: true },
          },
          { _id: false }
        ),
      ],
      default: undefined,
    },
  },
  { timestamps: true }
);

export const Product =
  (models.Product as mongoose.Model<IProduct>) ||
  model<IProduct>("Product", ProductSchema);
