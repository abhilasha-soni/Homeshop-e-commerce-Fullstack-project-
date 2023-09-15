import mongoose, { Document } from "mongoose";
import { ProductDocument} from "./Product";

export type ProductOrder = ProductDocument & {
  quantity: number;
};

export type OrderDocument = Document & {
  createdAt: Date;
  productList: ProductOrder[];
  userId: string;
  total:number;
};

const ProductOrderSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  price: {
    type: Number,
  },
  image: {
    type: String,
  },
  quantity: {
    type: Number,
  },
});

const OrderSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  productList: {
    type: [ProductOrderSchema],
    // required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  total: { type: Number },
});

export default mongoose.model<OrderDocument>("Order", OrderSchema);
