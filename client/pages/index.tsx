//minimize.com/

import React, { useEffect, useState, type ReactElement} from "react";
// import { type NextPage } from "next";
import {
  Box,
  Grid,
  Typography,
} from "@mui/material";
import SignIn from "../components/SignIn";
import Register from "../components/Register";

const HomePage = (): ReactElement => {
  const [toggle, setToggle] = useState<Boolean>(true);
  const handleClose = () => { setToggle(false) }
  const handleOpen = () => { setToggle(true) }

  return (
    <Grid container spacing={2} id="wrapper__homePage" className="text-center">
    <Grid item>
      <Box>
        <Typography variant="h3" align="center" gutterBottom> Curate, Sort, Free your Life.</Typography>
      </Box>
    </Grid>

    <Grid item>
 <div className="flex flex-col items-center justify-center my-5 bg-white rounded-md shadow-md">
      {toggle? <SignIn handleClose={handleClose}/>:
      <Register handleOpen={handleOpen}/>}
   </div>
      </Grid>
      </Grid>
     
  );
}

export default HomePage;
