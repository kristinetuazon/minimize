import React from "react";
import { Grid, Typography, Paper, Box, IconButton } from "@mui/material";
import ListIcon from "@mui/icons-material/List";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import CollectionGallery from "../../components/CollectionGallery";
import List from "../../components/List";

export default function Dashboard() {
  return (
    <>
      <div
        id="wrapper__dashboard"
        className="mb-10 mt-28"
      >
        {/* <Grid
          container
          
          sx={{
            height: 1,
            width: 1,
          }}
        >*/}
          <Grid item xs={8} > 
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
                <LibraryBooksIcon fontSize="medium" />
              </IconButton>
              <Typography variant="h6"> Collections </Typography>
            </Box>
            <Paper
              sx={{
                mx: 2,
                padding: 2,
                display: "flex",
                alignItems: "center",
                maxHeight: "100%",
                overflow: "auto",
              }}
            >
              <CollectionGallery />
            </Paper>
          </Grid>

          {/* <Grid item xs={4}>
            <Box
              sx={{
                display: "flex",
                // alignItems: "center",
              }}
              display="flex"
              flexDirection="row"
            >
              <IconButton>
                <ListIcon fontSize="medium" />
              </IconButton>
              <Typography variant="h6"> Preview </Typography>
            </Box>
            <Paper
              sx={{
                // mx: 1,
                padding: 1,
                // display: "flex",
                // alignItems: "center",
              }}
            >
              <List />
            </Paper>
          </Grid> */}
        {/* </Grid> */}
      </div>
    </>
  );
}
