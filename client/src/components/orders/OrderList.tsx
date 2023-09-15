import React , {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '../../redux/store';
import ProductOrderList from './ProductOrderList';
import { fetchOrderData } from '../../redux/thunk/orders';


export default function OrderList() {

  const orderList = useSelector ((state:RootState)=> state.order.orderList);

  const userDetails = useSelector ((state:RootState)=> state.user.userInfo);

  console.log(userDetails, "userDetails");

  const dispatch = useDispatch<AppDispatch>();

useEffect (()=>{
  if (userDetails){
    dispatch(fetchOrderData(userDetails._id));
  }
}, []);

console.log (orderList, "order")

  return (
    <div style={{ marginTop: 150, padding: 50 }}>
      <h1>Order List</h1>
      {orderList.map((item) => (
        <div>
          <div>{new Date(item.createdAt).toLocaleDateString()} </div>
          <div>
            {item.productList.map((product) => (
              <ProductOrderList product={product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
