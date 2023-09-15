import React from "react";
import { Drawer, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import Logo from "../../images/Shopping Logo.png"
import { Link } from "react-router-dom";

const itemHeight = 48;
type Anchor = "left";

export default function NavBarDrawer() {

   const [state, setState] = React.useState({
     left: false,
   });

    const toggleDrawer =
      (anchor: Anchor, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === "keydown" &&
          ((event as React.KeyboardEvent).key === "Tab" ||
            (event as React.KeyboardEvent).key === "Shift")
        ) {
          return;
        }

        setState({ ...state, [anchor]: open });
      };

  return (
    <div>
      {(["left"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton onClick={toggleDrawer(anchor, true)}>
            <MenuIcon sx={{ width: 40, height: 40 }} />
          </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            PaperProps={{
              style: {
                minWidth: 700,
                maxHeight: 500,
              },
            }}
          >
            <img
              src={Logo}
              alt="logo"
              className="Navbar-menu-header-icon-brand"
            />
            <ul className="drawer-list">
              <Link
                to={`/products/department/${"furniture"}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <li className="Navbar-bottom-container-list-items">
                  Furniture
                </li>
              </Link>
              <Link
                to={`/products/department/${"Outdoor"}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <li className="Navbar-bottom-container-list-items">Outdoor</li>
              </Link>
              <Link
                to={`/products/department/${"Bedding"}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <li className="Navbar-bottom-container-list-items">Bedding</li>
              </Link>
              <Link
                to={`/products/department/${"Rugs"}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <li className="Navbar-bottom-container-list-items">Rugs</li>
              </Link>
              <Link
                to={`/products/department/${"Decor"}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <li className="Navbar-bottom-container-list-items">Decor</li>
              </Link>
              <Link
                to={`/products/department/${"Bath"}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <li className="Navbar-bottom-container-list-items">Bath</li>
              </Link>
              <Link
                to={`/products/collection/${"Sale"}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <li className="Navbar-bottom-container-list-items">Sale</li>
              </Link>
              <Link
                to={`/products/collection/${"New Arrivals"}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <li className="Navbar-bottom-container-list-items">
                  New Arrivals
                </li>
              </Link>
              <Link
                to={`/products/collection/${"Best Seller"}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <li className="Navbar-bottom-container-list-items">
                  Best Sellers
                </li>
              </Link>
            </ul>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
