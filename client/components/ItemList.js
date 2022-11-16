import React from "react";
import { IconButton, ListItem, ListItemText } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export default function ItemList({ listOfItems, handleDelete }) {
  return listOfItems.map((item) => {
    return (
      <div key = {item.id}>
      <ListItem
        secondaryAction={
          <IconButton edge="end" aria-label="delete" onClick={()=>handleDelete(item)}>
            <DeleteOutlineIcon />
          </IconButton>
        }
      >
        <ListItemText primary={item.itemName}  sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}/>
      </ListItem>
      </div>
    );
  });
}
