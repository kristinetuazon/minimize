//minimize.com/

import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  FormHelperText,
  FormControl,
  TextField,
} from "@mui/material";
// import { Button, Paper } from "@material-ui/core";
// import {
//   auth,
//   signInWithEmailAndPassword,
//   signInWithGoogle,
// } from "../firebase-config";
// import Link from "next/link";
// import { useAuthState } from "react-firebase-hooks/auth";
// import GoogleIcon from "@mui/icons-material/Google";
// import { grey } from "@mui/material/colors";
// import { useRouter } from "next/router";
import SignIn from "../components/SignIn";

export default function HomePage() {
  return (
    <Grid container spacing={2} id="wrapper__homePage">
    <Grid item  sx={3}>
      <Box>
        <Typography variant="h3" align="center" gutterBottom> Curate, Sort, Free your Life.</Typography>
      </Box>
    </Grid>

    <Grid item>
     <SignIn/>
      </Grid>
      </Grid>
     
  );
}
