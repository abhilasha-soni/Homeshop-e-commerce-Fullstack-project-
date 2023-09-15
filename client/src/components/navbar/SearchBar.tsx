import React from 'react';
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";


const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderStyle: "solid",
  borderWidth: 2,
  borderColor: "rgb(226, 88, 60)",
  borderRadius: 10,
  // backgroundColor: alpha(theme.palette.common.black, 0.15),
  // "&:hover": {
  //   backgroundColor: alpha(theme.palette.common.black, 0.25),
  // },
  marginLeft: 0,
  padding: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: 700,
    height: 60,
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "rgb(226, 88, 60)",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color:"rgb(226, 88, 60)",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 600,
      height: 40,
    },
  },
}));

export default function SearchBar() {
  return (
    <div>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="search anything here...."
          inputProps={{ "aria-label": "search anything here...." }}
        />
      </Search>
    </div>
  );
}
