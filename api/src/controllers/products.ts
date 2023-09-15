import { NextFunction, Request, Response } from "express";

import Product from "../models/Product";
import { createNewProductService, getAllProductsService, getProductByIdService} from "../services/products";


export const createNewProduct = async (request:Request, response:Response, next:NextFunction) => {
  
  const productInformation = new Product({
    title: request.body.title,
    price: parseInt(request.body.price),
    productImg: request.body.productImg,
    description: request.body.description,
    material: request.body.material,
    rating: parseInt(request.body.rating),
    department: request.body.department,
    category: request.body.category,
    badge: request.body.badge,
  });
  try{
  const product = await createNewProductService (productInformation);
  response.status(201).json(product);
  } catch (error){
    next (error);
  }
};

export const getAllProducts = async (request:Request, response:Response, next:NextFunction) => {
  try {
    const productList = await getAllProductsService();
    response.status(200).json(productList);
  }catch (error){
    next (error);
  }
};

export const getProductById = async (request:Request, response:Response, next:NextFunction)=>{
  try {
    const productId = request.params.id as string;
    const product = await getProductByIdService (productId);
    response.status(200).json(product)
  }catch (error){
    next (error);
  }
}






