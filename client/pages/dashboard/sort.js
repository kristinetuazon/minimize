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
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import TinderCards from "../../components/TinderCards";
import  Link  from "next/link";
import useLocalStorage from "../../hooks/useLocalStorage";



export default function Sort() {
  const [open, setOpen] = useState(true);
  const [localStorage, setLocalStorage] = useLocalStorage('list');


  //   if (userInfo) {
  //     console.log('second useEffect')
  //     console.log('🦋', userInfo)
  //     server
  //     // .get(`https://minimize.onrender.com/collection/getlist/member/j4EiCKue5oMUn0iIKwtQJezcbF93/latest`)
  //     // .get(`https://minimize.onrender.com/collection/getlist/member/${userInfo.uid}/latest`)
  //     .get(`http://localhost:8080/get/email/kristine.jane.tuazon@gmail.com`)
  //     .then((res) => {
  //       console.log(res.data[res.data.length-1].initialList);
  //       setSortList(res.data[res.data.length-1].initialList);
  //     });
  //   }
  // }, []);

console.log(localStorage);  

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
              Drag the card you wish to keep on the right, the cards you wish to discard on the left and those you are unsure of on the bottom.
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



          <TinderCards localStorage={localStorage}/>

      </div>
    </>
  );
}
