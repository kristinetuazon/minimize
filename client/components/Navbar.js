import React, { useState, useEffect } from "react";
import {
  Box,
  Toolbar,
  Menu,
  MenuItem,
  AppBar,
  MenuList,
  Stack,
  IconButton,
  Drawer,
  Typography,
  ListItemIcon,
  ListItemText,
} from "@mui/material/";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import ListIcon from "@mui/icons-material/List";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { logout } from "../firebase-config";
import Image from "next/image";
import logo from "../public/logo-long.png";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, onAuthStateChanged } from "../firebase-config";
import { useRouter } from "next/router";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    if (user){
   onAuthStateChanged(auth, (user) => {
      if (userInfo) {
        setUserInfo({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photo: user.photoURL,
        });
      } else {
        setUserInfo(Null);
      }
    })}
  }, [userInfo, setUserInfo]);

  return (
    <>
      {user ? (
        <div id="nav__wrapper">
          <Box id="nav__box" sx={{ flexGrow: 4 }}>
            <AppBar style={{ background: "transparent", boxShadow: "none" }}>
              <Toolbar>
                <Link href="/dashboard" id="link">
                  <Image src={logo} alt="logo" width={150} />
                </Link>
                <IconButton
                  size="large"
                  edge="start"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={() => setOpen(true)}
                >
                  <MenuIcon />
                </IconButton>
              </Toolbar>
            </AppBar>
          </Box>
        </div>
      ) : (
        <div id="nav__wrapper">
          <Box id="nav__box" sx={{ flexGrow: 4 }}>
            <AppBar style={{ background: "transparent", boxShadow: "none" }}>
              <Toolbar>
                <Link href="/" id="link">
                  <Image src={logo} alt="logo" width={150} />
                </Link>
              </Toolbar>
            </AppBar>
          </Box>
        </div>
      )}

      <div>
        <Drawer open={open} anchor={"left"} onClose={() => setOpen(false)}>
          <div
            style={{
              width: 250,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 40,
            }}
            onClick={() => setOpen(false)}
          >
            <Typography variant="h5" component="h1">
              Hello!
            </Typography>
            <Typography variant="caption">Welcome back.</Typography>

            <MenuList>
              <Stack direction="column" sx={{ mx: 2 }}>
                <Link href="/dashboard/myaccount" id="link">
                  <MenuItem>
                    <ListItemIcon>
                      <AccountCircleIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>My Account</ListItemText>
                  </MenuItem>
                </Link>
                <Link href="/dashboard/newlist" id="link">
                  <MenuItem>
                    <ListItemIcon>
                      <ListIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText>New List</ListItemText>
                  </MenuItem>
                </Link>
                <MenuItem
                  onClick={() => {
                    setOpen(false);
                    router.push("/");
                    return logout();
                  }}
                >
                  <ListItemIcon>
                    <LogoutIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Logout</ListItemText>
                </MenuItem>
              </Stack>
            </MenuList>
          </div>
        </Drawer>
      </div>
    </>
  );
}
