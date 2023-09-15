import mongoose, { Document } from "mongoose";

export type ProductDocument = Document & {
  title: string;
  price: number;
  productImg: string;
  description: string;
  material: string;
  rating: number;
  department: string;
  category: string;
  badge: string;
};

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  productImg: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  material: {
    type: String,
  },
  rating: {
    type: Number,
    required: true,
  },
  department: {
    type: String,
  },
  category: {
    type: String,
  },
  badge: {
    type: String,
  }
})

export default mongoose.model<ProductDocument>("Product", ProductSchema)