import React, { useEffect, useState, useRef, createRef } from "react";
import {
  Box,
  Grid,
  Typography,
  IconButton,
  FormHelperText,
  FormControl,
  TextField,
  List,
  Input,
} from "@mui/material";
import { Button, Paper } from "@material-ui/core";
import ItemList from "../../components/ItemList";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { v4 as uuidv4 } from "uuid";
import { auth, onAuthStateChanged } from "../../firebase-config";
import { useRouter } from "next/router";
import axios from "../../axios-config"
import server from "../../axios-config";


export default function NewList() {
  const [listName, setListName] = useState("");
  const [description, setDescription] = useState("");
  const [item, setItem] = useState("");
  const [listOfItems, setListOfItems] = useState([]);
  const listNameRef = createRef("");
  const descriptionRef = useRef("");
  const itemRef = useRef("");
  const router = useRouter();
  const [userInfo, setUserInfo] = useState({});
  
  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (user) => {
        if (userInfo) {
            setUserInfo({
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
                photo: user.photoURL
            })
        }else{
            setUserInfo(Null);
        }
    })
    return () => unsuscribe()
},[])


  function handleDelete({ id }) {
    setListOfItems(listOfItems.filter((item) => item.id !== id));
  }
 
  function handleAddItem(event) {
    if (item === "") return;
    setListOfItems([...listOfItems, { id: uuidv4(), itemName: item }]);
    setItem("");
  }


  const saveCollection = async () => {
    const payload = { 
      nameOfList: listName,
      userEmail: userInfo.email,
      uId: userInfo.uid,
      listDescription: description,
      initialList: listOfItems,
  }

    server.post("https://minimize.onrender.com/collection/add",payload)
    .then((res) => {console.log(res)})
    .catch((error) => {console.log(error)})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    saveCollection();
    router.push('/dashboard/sort');
  };

  return (
    <>
      <div
        id="wrapper__resetpass"
        sx={{ position: "absolute", overflow: "scroll" }}
      >
        <Grid
          component={Paper}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxHeight: "100%",
            overflow: "auto",
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
                value={listName}
                onChange={(e) => setListName(e.target.value)}
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
                value={description}
                onChange={(e) => setDescription(e.target.value)}
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
            <Grid container sx={{ my: 2 }}>
              <Grid item xs>
                {" "}
                <Input
                  placeholder="Item"
                  ref={itemRef}
                  value={item}
                  onChange={(e) => setItem(e.target.value)}
                  inputProps={{
                    "aria-label": "Description",
                  }}
                  style={{ width: "90%" }}
                />
              </Grid>

              <Grid item>
                {" "}
                <IconButton
                  sx={{ mx: 2 }}
                  type="submit"
                  onClick={handleAddItem}
                >
                  <AddCircleOutlineIcon />
                </IconButton>
              </Grid>
            </Grid>

            <Paper>
              <List>
                <ItemList
                  listOfItems={listOfItems}
                  handleDelete={handleDelete}
                />
              </List>
            </Paper>

            <br></br>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSubmit}
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
