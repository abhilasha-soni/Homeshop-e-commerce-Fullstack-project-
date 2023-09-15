import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Grid } from "@mui/material";

import { fetchdata } from "../../redux/thunk/products";
import { AppDispatch, RootState } from "../../redux/store";
import ProductCard from "../products/ProductCard";
import "./Category.css";

export default function CategoryDetails() {
  const { name} = useParams();

  const products = useSelector((state: RootState) => state.product.products);

  const isLoading = useSelector((state: RootState) => state.product.isLoading);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchdata());
  }, [dispatch]);

    const navigate = useNavigate();

  if (name) {
    const filteredProducts = products.filter((product) =>
      product.category.toLowerCase().includes(name.toLowerCase())
    );

    return (
      <div>
        <Link
          to="#"
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
        >
          <p>Go back to the previous page </p>
        </Link>
        <div className="department-container">
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
      </div>
    );
  } else {
    // Return a JSX element or null
    return <div>No products found</div>;
  }
}