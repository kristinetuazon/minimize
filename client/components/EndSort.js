import React from "react";
import { Box, Grid, Typography, Paper, IconButton } from "@mui/material";
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export default function EndSort() {
  return (
    <>
      <div wrapper__sort>
        <Grid
          container
          spacing={1}
          sx={{
            my: 15,
            padding:1,
            display: "flex",
            alignItems: "center",
            height: 1,
            width: 1,
          }}
        >
          <Grid item xs={4} sx={{ height: 1, width: 1 }}>
          <Box
              sx={{
                mx: 2,
                display: "flex",
                alignItems: "center",
                
              }}
              display="flex"
              flexDirection="row"
            >
              <IconButton>
              <TaskAltIcon fontSize="medium"/>
              </IconButton>
              <Typography variant="h5"> Yes, this brings me joy ✨ </Typography>
            </Box>
            <Paper
              sx={{
        
                padding: 2,
                display: "flex",
                alignItems: "center",
                maxHeight: "100%",
                overflow: "auto",
              }}
            >
              <h1>Hello</h1>
            </Paper>
          </Grid>
          <Grid item xs={4} sx={{ height: 1, width: 1 }}>
          <Box
              sx={{
                mx: 2,
                display: "flex",
                alignItems: "center",
                
              }}
              display="flex"
              flexDirection="row"
            >
              <IconButton>
           <SyncAltIcon fontSize="medium"/>
              </IconButton>
              <Typography variant="h5"> Sort </Typography>
            </Box>
            <Paper
              sx={{
                padding: 2,
                display: "flex",
                alignItems: "center",
                maxHeight: "100%",
                overflow: "auto",
              }}
            >
              <h1>Hello again</h1>
            </Paper>
          </Grid>
          <Grid item xs={4} sx={{ height: 1, width: 1 }}>
          <Box
              sx={{
                mx: 2,
                display: "flex",
                alignItems: "center",
                
              }}
              display="flex"
              flexDirection="row"
            >
              <IconButton>
             <HighlightOffIcon fontSize="medium"/>
              </IconButton>
              <Typography variant="h5"> No, this makes me sad 💧 </Typography>
            </Box>
            <Paper
              sx={{
                padding: 2,
                display: "flex",
                alignItems: "center",
                maxHeight: "100%",
                overflow: "auto",
              }}
            >
              <h1>Hello again again</h1>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
