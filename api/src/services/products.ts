import Product, { ProductDocument } from '../models/Product';

export const createNewProductService = async (
  product: ProductDocument
): Promise<ProductDocument> => {
  return await product.save();
};

export const getAllProductsService = async (): Promise<ProductDocument[]> => {
  return await Product.find();
};

export const getProductByIdService = async (
  productId: string
): Promise<ProductDocument | undefined | null> => {
  const foundProduct = await Product.findById(productId);
  if (!foundProduct) {
    console.log("Product not found");
  }
  return foundProduct;
};
