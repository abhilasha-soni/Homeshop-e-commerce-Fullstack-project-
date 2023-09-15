import { NotFoundError } from "../helpers/apiError";
import Order, { OrderDocument } from "../models/Order";
import { UserDocument } from "../models/User";

export const createNewOrderService = async (
  order: OrderDocument
): Promise<OrderDocument> => {
  return await order.save();
};

export const getOrderByIdService = async (userId :string): Promise <OrderDocument[]> =>{
  const foundOrders = await Order.find ({userId:userId}).populate({
    path:"userId",
  });

  if (!foundOrders){
    throw new NotFoundError (`Order with user id ${userId}not found.`);
  }
  return foundOrders;
}