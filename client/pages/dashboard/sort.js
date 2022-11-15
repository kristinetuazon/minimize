import React from "react";
import { Typography, Box, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@mui/material";
import { grey } from '@mui/material/colors';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import SyncAltIcon from '@mui/icons-material/SyncAlt';

export default function Sort() {
  const [open, setOpen] = React.useState(true);

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
        <DialogTitle> <SyncAltIcon fontSize="small"/> Sorting Instructions</DialogTitle>
        <DialogContent>
          <DialogContentText>
            When an item is shown on the screen, press your <KeyboardArrowRightIcon fontSize="small"/> key to add it to your yes pile and <KeyboardArrowLeftIcon fontSize="small"/> to your no pile.
          </DialogContentText>
        
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Okay! Let's get started ✨</Button>
        </DialogActions>
      </Dialog>
    </div>
    <div id="wrapper__sort">
    <Box
      sx={{
        boxShadow: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "30vw"
      }}
      backgroundColor= {grey[50]}
    >
      <br></br>
      <Typography component="h1" variant="h5" color="primary.dark">
        Let's Start Sorting
      </Typography>
      <br></br>
    </Box>
    </div>
    </>
  );
}
