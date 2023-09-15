import React from 'react'
import { AppBar } from '@mui/material'
import MenuIcon from "@mui/icons-material/Menu";
// import IconButton from "@mui/material/IconButton";

import Header from "./Header";
import Logo from "../../images/Shopping Logo.png";
import "./Navbar.css"
import SearchBar from './SearchBar';
import UserAccount from './UserAccount';
import NavBarDrawer from './NavBarDrawer';
import NavbarCart from './NavbarCart';
import Categories from './Departments';
import NavbarWishlist from './NavbarWishlist';

export default function Navbar() {
  return (
    <div>
      <AppBar sx={{ backgroundColor: "white", boxShadow: "none" }}>
        <Header />
        <div className="Navbar-menu-header">
          <div className="Navbar-menu-header-left">
            <NavBarDrawer />
            <a href="/">
              <img
                src={Logo}
                alt="Logo"
                className="Navbar-menu-header-icon-brand"
              />
            </a>
          </div>
          <div>
            <SearchBar />
          </div>
          <div className="Navbar-menu-header-right">
            <UserAccount />
            <NavbarWishlist/>
            <NavbarCart />
          </div>
        </div>
        <hr />
        <div>
          <Categories/>
        </div>
        <hr />
      </AppBar>
    </div>
  );
}
