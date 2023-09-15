import React from "react";

import { useNavigate, Link} from "react-router-dom";

import { Item } from "../../types/types";
import "./Category.css";

type Prop = {
  items : Item[];
}

export default function CategoryList({items}:Prop) {

  const uniqueArr = [...new Set(items.map((item) => item.category))];

  const navigate = useNavigate();

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
      <div className="category-container">
        {uniqueArr.map((item) => {
          return (
            <div key={item}>
              <Link to={`/products/category/${item.toString()}`}>
                <p className="categories-list">{item.toUpperCase()}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
