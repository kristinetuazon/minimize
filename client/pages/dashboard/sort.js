import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
// import { auth, onAuthStateChanged } from "../../firebase-config";
// import { useRouter } from "next/router";
import TinderCards from "../../components/TinderCards";
import { auth, onAuthStateChanged } from "../../firebase-config";
import server from "../../axios-config";



export default function Sort() {
  let hasTriggered = useRef(false);
  const [open, setOpen] = useState(true);
  const [sortList, setSortList] = useState([]);
  const [userInfo, setUserInfo] = useState({});
let userid = userInfo.uid
  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (user) => {
      if (userInfo) {
        setUserInfo({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photo: user.photoURL,
        });
      } else {
        setUserInfo(null);
      }
    });
    return () => unsuscribe();
  }, []);

  useEffect(() => {
    if (!hasTriggered.current) {
      server
      .get(`/collection/getlist/member/j4EiCKue5oMUn0iIKwtQJezcbF93/latest`)
      .then((res) => {
        console.log(res.data);
        setSortList(res.data);
      });
      hasTriggered.current = true;
    }
  }, [hasTriggered]);



  console.log(sortList), console.log(userInfo);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  
  return (
    <>
      <div>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>
            {" "}
            <SyncAltIcon fontSize="small" /> Sorting Instructions
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              When an item is shown on the screen, press your{" "}
              <KeyboardArrowRightIcon fontSize="small" /> key to add it to your
              yes pile and <KeyboardArrowLeftIcon fontSize="small" /> to your no
              pile.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Okay! Let me START! ✨</Button>
          </DialogActions>
        </Dialog>
      </div>
      <div id="wrapper__sort">
        {/* <Box
          sx={{
            mt: "6",
            position: "relative",
            boxShadow: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            alignContent: "center",
            width: "70vw",
            height: "70vw",
          }}
          backgroundColor={grey[50]}
        > */}

          <TinderCards sortList={sortList}/>

        {/* </Box> */}
      </div>
    </>
  );
}
