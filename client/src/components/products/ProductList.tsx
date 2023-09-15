import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

import { fetchdata } from "../../redux/thunk/products";
import { AppDispatch, RootState } from "../../redux/store";
import { Item } from "../../types/types";
import ProductCard from "./ProductCard";
import "./Product.css";

export default function ProductsPage() {
  const [productsPage, setProductsPage] = useState(1);
  const [sortBy, setSortBy] = useState("name");
  const [userInput, setUserInput] = useState(" ");

  const products = useSelector((state: RootState) => state.product.products);

  const isLoading = useSelector((state:RootState)=>state.product.isLoading);

  const result = products.filter((item) =>
    item.title.toLowerCase().includes(userInput.toLowerCase())
  );

  const dispatch = useDispatch<AppDispatch>();

  let sortedList = [...result];
  if (sortBy === "price") {
    sortedList.sort((a: Item, b: Item) => a.price - b.price);
  } else if (sortBy === "pricereverse") {
    sortedList.sort((a: Item, b: Item) => b.price - a.price);
  } else if (sortBy === "namereverse") {
    sortedList.sort((a, b) => b.title.localeCompare(a.title));
  } else {
    sortedList.sort((a, b) => a.title.localeCompare(b.title));
  }

  useEffect(() => {
    dispatch(fetchdata());
  }, [dispatch]);

  if (isLoading){
return (
  <div>
    <div className="emptyDiv"></div>
    <h1>...Loading</h1>
  </div>
)
  }

  const itemsPerPage = 20;

  const startIndex = (productsPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const productList = sortedList.slice(startIndex, endIndex);

  const totalPages = Math.ceil(sortedList.length / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    setProductsPage(newPage);
  };

  return (
    <div>
      <Box>
        <FormControl variant="outlined" className="product_sort">
          <InputLabel id="sort-label" sx={{backgroundColor:"white", fontSize:24, marginLeft:15}}>
            Sort By
          </InputLabel>
          <Select
            labelId="sort-label"
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
            label="Sort By"
            className="product_sort_box"
            sx={{borderRadius:"10px"}}
          >
            <MenuItem value="name">A to Z</MenuItem>
            <MenuItem value="price">Lowest to Highest</MenuItem>
            <MenuItem value="namereverse">Z to A</MenuItem>
            <MenuItem value="pricereverse">Highest to lowest</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Grid container spacing={0} className="cardGrid">
        {productList.map((item: Item) => {
          return (
            <div key={item._id}>
              <Grid item key={item._id} xs>
                <ProductCard key={item._id} item={item} />
              </Grid>
            </div>
          );
        })}
      </Grid>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={productsPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
