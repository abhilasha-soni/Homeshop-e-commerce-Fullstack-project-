import React from 'react';

import { ProductOrder } from '../../types/types';

type Prop = {
  product : ProductOrder;
}


export default function ProductOrderList({product}:Prop) {
  return (
    <div>ProductOrderList
      <p>{product.title}</p>
      <p>{product.quantity}</p>
    </div>
  )
}
