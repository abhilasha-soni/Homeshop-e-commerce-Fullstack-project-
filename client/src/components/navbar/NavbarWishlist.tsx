import React from 'react';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Badge, IconButton } from "@mui/material";
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Link } from 'react-router-dom';

export default function NavbarWishlist() {
const wishListValue = useSelector((state:RootState)=> state.product.wishlist)

  return (
    <div>
      <IconButton>
        <div>
          <Link
            to="/wishlist"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <Badge badgeContent={<p>{wishListValue.length}</p>} color="error">
              <FavoriteBorderIcon sx={{ width: 30, height: 30 }} />
            </Badge>
          </Link>
        </div>
      </IconButton>
    </div>
  );
}
