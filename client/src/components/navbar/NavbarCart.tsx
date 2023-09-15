import React from 'react'
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import { Badge, IconButton } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../redux/store';

export default function NavbarCart() {
  const cartItemValue = useSelector((state:RootState)=> state.cart.cartList)

  return (
    <div>
      <IconButton>
        <div>
          <Link to="/cart" style={{ color: "inherit", textDecoration: "none" }}>
            <Badge badgeContent={<p>{cartItemValue.length}</p>} color="error">
              <LocalGroceryStoreOutlinedIcon sx={{ width: 30, height: 30 }} />
            </Badge>
          </Link>
        </div>
      </IconButton>
    </div>
  );
}
