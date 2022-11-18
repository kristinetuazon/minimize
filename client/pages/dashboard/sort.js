import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";
// import { grey } from "@mui/material/colors";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
// import { auth, onAuthStateChanged } from "../../firebase-config";
// import { useRouter } from "next/router";
import TinderCards from "../../components/TinderCards";
import { auth, onAuthStateChanged } from "../../firebase-config";
import server from "../../axios-config";
import  Link  from "next/link";



export default function Sort() {
  // let hasTriggered = useRef(false);
  const [open, setOpen] = useState(true);
  const [sortList, setSortList] = useState([]);
  const [userInfo, setUserInfo] = useState({});

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
    // (() => unsuscribe())();
    if (userInfo) {
      console.log('second useEffect')
      console.log('🦋', userInfo)
      server
      // .get(`https://minimize.onrender.com/collection/getlist/member/j4EiCKue5oMUn0iIKwtQJezcbF93/latest`)
      .get(`https://minimize.onrender.com/collection/getlist/member/${userInfo.uid}/latest`)
      .then((res) => {
        console.log(res.data);
        setSortList(res.data);
      });
    }
  }, []);
  
  // useEffect(() => {
  // }, [userInfo]);



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
      <Link href="/dashboard/endsort" id="link">
           <Button
           
                type="submit"          
                variant="contained"
                sx={{ padding: 2 }}>
                <Typography variant="h6">See your results ⭐️</Typography>
              </Button>
              </Link>



          <TinderCards sortList={sortList}/>

      </div>
    </>
  );
}
