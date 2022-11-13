import React from "react";
import {
  Box,
  Toolbar,
  Menu,
  MenuItem,
  AppBar,
  MenuList,
  Stack,
  IconButton,
} from "@mui/material/";
import MenuIcon from "@mui/icons-material/Menu";
// import SyncAltIcon from "@mui/icons-material/SyncAlt";
import { logout } from "../firebase-config";
import Image from "next/image";
import logo from "../public/logo-long.png";

export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div id="nav__wrapper">
      <Box id="nav__box" sx={{ flexGrow: 4 }}>
        <AppBar style={{ background: "transparent", boxShadow: "none" }}>
          <Toolbar>
            <Image src={logo} alt="logo" width={150} />
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              sx={{ mr: 2 }}
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuList>
                <Stack direction="column" sx={{ mx: 2 }}>
                  <MenuItem>Profile</MenuItem>
                  <MenuItem>My account</MenuItem>
                  <MenuItem
                    onClick={() => {
                      handleClose();
                      return logout();
                    }}
                  >
                    Logout
                  </MenuItem>
                </Stack>
              </MenuList>
            </Menu>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
