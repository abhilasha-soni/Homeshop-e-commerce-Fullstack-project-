import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom"; 
import { Grid } from "@mui/material";


import { fetchdata } from "../../redux/thunk/products";
import { AppDispatch, RootState } from "../../redux/store";
import { Item } from "../../types/types";
import ProductCard from "../products/ProductCard";
import "./Department.css";
import CategoryList from "../category/CategoryList";

export default function DepartmentDetails() {
  const {id} = useParams();
  console.log(id)
  
  const products = useSelector((state: RootState) => state.product.products);

  const isLoading = useSelector((state: RootState) => state.product.isLoading);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchdata());
  }, [dispatch]);

if (id) {
  // Use the id parameter to filter your products array
  const filteredProducts = products.filter((product) =>
    product.department.toLowerCase().includes(id.toLowerCase())
  );

  return (
    <div className="department-container">
      <CategoryList items = {filteredProducts}/>
      <hr />
      <Grid container spacing={0} className="cardGrid">
        {filteredProducts.map((product) => (
          <div key={product._id}>
            <Grid item key={product._id} xs>
              <ProductCard key={product._id} item={product} />
            </Grid>
          </div>
        ))}
      </Grid>
    </div>
  );
} else {
  // Return a JSX element or null
  return <div>No products found</div>;
}

}