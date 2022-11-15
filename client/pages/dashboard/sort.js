import React from "react";
import { Card, CardContent, Typography, Box, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from "@mui/material";
import { grey } from '@mui/material/colors';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import dynamic from "next/dynamic";

const TinderCard = dynamic(
  () => {
    return import('react-tinder-card');
  },
  { ssr: false }
);

export default function Sort() {
 
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const sortCardComponent = (
    <>
    <TinderCard
    className="swipe"
    // key={item.key}
    preventSwipe={['up']}>
      <Card
        sx={{
          minWidth: 100,
          height: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          alignContent: "center",
          bgcolor: "background.primary",
        }}
      >
        <CardContent
          sx={{
            my: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            alignContent: "center"
          }}
        >
      
      <Typography sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
            ✨ Does this give you joy? ✨
          </Typography>
          <Typography variant="h5" component="div">
            [Name of Item]
          </Typography>
        </CardContent>
      
      </Card>
      </TinderCard>
    </>
  );

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
          <Button onClick={handleClose}>Okay! Let me START! ✨</Button>
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
        alignContent: "center",
        width: "50vw",
        height: "50vw"
      }}
      backgroundColor= {grey[50]}
    >




      <br></br>
      <Typography component="h1" variant="h5" color="primary.dark">
      {sortCardComponent}
      </Typography>
      <br></br>
    </Box>
    </div>
    </>
  );
}
