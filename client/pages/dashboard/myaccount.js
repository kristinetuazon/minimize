import React, {useEffect, useRef} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../../slices/counterSlice'

import {
    Box,
    Grid,
    Typography,
    Paper
  } from "@mui/material";

export default function MyAccount() {
//   let hasTriggered = useRef(false);

//   useEffect(() => {
//     if (!hasTriggered.current) {
//       server
//       .get('/collection/getlist/')
//       .then((res) => {
//         console.log(res.data)
//       })
//       hasTriggered.current = true
//       }
// }, [hasTriggered])

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
