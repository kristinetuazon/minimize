import React, { useEffect, useState, useRef } from "react";
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
  Input,
} from "@mui/material";
import { Button, Paper } from "@material-ui/core";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";


export default function NewList() {
  const [listName, setListName] = useState('');
  const [description, setDescription] = useState('');
  const [item, setItem] = useState('');
  const [listOfItems, setListOfItems] = useState([]);
  const listNameRef = useRef("");
  const descriptionRef = useRef("");
  const itemRef = useRef ("");
  
  console.log(listOfItems)
  
  function generate(element) {
    return listOfItems.map((value, index) =>
      React.cloneElement(element, {
        itemName: value,
        keyIndex: index
      })
    );
  }
 function handleAdd(e) {
  console.log(itemRef.current)
  e.preventDefault();
  
 }

 console.log(handleAdd)

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
              id="list-name"
              ref={listNameRef}
              value = {listName}
              onChange = {e => setListName(e.target.value)}
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
                ref={descriptionRef}
                value = {description}
                onChange = {e => setDescription(e.target.value)}
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
            <Grid container>
              <Grid item xs>
                {" "}
                <Input
                  placeholder="Item"
                  ref={itemRef}
                  value = {item}
                  onChange = {e => setItem(e.target.value)}
                  inputProps={{
                    "aria-label": "Description",
                  }}
                  style={{ width: "90%" }}
                />
              </Grid>

              <Grid item>
                {" "}
                <IconButton sx={{ mx: 2 }} type="submit" onClick={()=>{listOfItems.push(item)}}>
                  <AddCircleOutlineIcon/>
                </IconButton>
              </Grid>
            </Grid>

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
                    <ListItemText/>
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
