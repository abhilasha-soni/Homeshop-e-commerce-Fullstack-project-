export type Item = {
  _id: string,
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

export type User = {
  _id: string;
  name:string;
  email: string;
  password: string;
}

export type ProductOrder = Item & {
  quantity :number;
};

export type Order = {
  _id:string,
  userId:string,
  productList: ProductOrder[];
  createdAt: string;
};