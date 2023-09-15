import React from 'react'
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';

export default function UserAccount() {
  return (
    <div>
      UserAccount
      <Link to={"/login"}>
        <IconButton>
          <PermIdentityIcon sx={{ width: 30, height: 30 }} />
        </IconButton>
      </Link>
    </div>
  );
}
