import React from "react";
import {
  Grid,
  Typography,
  Paper,
  Box,
  Button,
  IconButton,
} from "@mui/material";
import ListIcon from "@mui/icons-material/List";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import CollectionGallery from "../../components/CollectionGallery";

export default function Dashboard() {
  return (
    <>
      <div id="wrapper__dashboard">
        <Grid
          container
          spacing={3}
          sx={{
            my: 17,
            display: "flex",
            alignItems: "center",
            height: 1,
            width: 1,
          }}
        >
          <Grid item xs={8} sx={{ height: 1, width: 1 }}>
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
              <Typography variant="h5"> Collections </Typography>
            </Box>
            <Paper
              sx={{
                mx: 2,
                padding: 2,
                display: "flex",
                alignItems: "center",
                height: 1,
                width: 1,
              }}
            >
              {/* <CollectionGallery /> */}
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
                <ListIcon fontSize="medium" />
              </IconButton>
              <Typography variant="h5"> List </Typography>
            </Box>
            <Paper
              sx={{
                mx: 2,
                padding: 3,
                display: "flex",
                alignItems: "center",
                height: 1,
                width: 1,
              }}
            >
              <Typography align="center" variant="h6">
                Welcome, what do you want to do today?
              </Typography>{" "}
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
