import { Request, Response, NextFunction } from "express";

import Order from "../models/Order";
import { createNewOrderService, getOrderByIdService } from "../services/orders";

export const createNewOrder = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const orderInformation = new Order({
      userId: request.params.id,
      productList: request.body.productList,
    });
    const order = await createNewOrderService(orderInformation);
    response.json(order);
  } catch (error) {
    next(error);
  }
};

export const getOrderById = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const userId = request.params.id;
    const orderList = await getOrderByIdService(userId);
    response.status(200).json(orderList);
  } catch (error) {
    next(error);
  }
};
