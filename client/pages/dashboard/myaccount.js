import React from 'react'
import {
    Box,
    Grid,
    Typography,
    Paper
  } from "@mui/material";

export default function MyAccount() {

  return (
    <>
    <div id="wrapper__myaccount">
      <Grid
        component={Paper}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            mx: 7,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <br></br>
          <Typography component="h1" variant="h5">
            Under Construction
          </Typography>
          <br></br>
         
        </Box>
      </Grid>
    </div>
  </>
  )
}
