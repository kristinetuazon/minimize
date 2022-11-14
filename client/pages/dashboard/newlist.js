import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  IconButton,
  FormHelperText,
  FormControl,
  TextField,
  List,
  ListItem,
  ListItemText,
  Avatar,
  ListItemAvatar,
} from "@mui/material";
import { Button, Paper } from "@material-ui/core";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

export default function newList() {
  const [dense, setDense] = React.useState(false);

  return (
    <>
      <div id="wrapper__resetpass">
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
              Create a New List
            </Typography>
            <br></br>
            <FormControl>
              <TextField
                id="email"
                required
                fullWidth
                autoFocus
                label="List Name"
                aria-describedby="list-name-input"
              />

              <FormHelperText id="password-helper">
                What is your list name?
              </FormHelperText>

              <br></br>

              <TextField
                id="description"
                fullWidth
                autoFocus
                multiline
                rows={2}
                label="Description"
                aria-describedby="list-descriprion-input"
              />

              <FormHelperText id="description-helper">
                What is this list for?
              </FormHelperText>
            </FormControl>

            <br></br>

            <Paper>
              <List>
                {generate(
                  <ListItem
                    secondaryAction={
                      <IconButton edge="end" aria-label="delete">
                        <DeleteOutlineIcon />
                      </IconButton>
                    }
                  >
                    <IconButton sx={{ mx: 2 }}>
                      <AddCircleOutlineIcon />
                    </IconButton>
                    <ListItemText primary="Single-line item" />
                  </ListItem>
                )}
              </List>
            </Paper>

            <br></br>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Start Sorting
            </Button>

            <br></br>
          </Box>
        </Grid>
      </div>
    </>
  );
}
