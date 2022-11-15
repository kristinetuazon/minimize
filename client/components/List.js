import * as React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material/";

export default function ListComponent() {
  return (
    <>
      <List
        sx={{
          width: 1,
          height: 1,
          bgcolor: "background.default",
          position: "relative",
          overflow: "auto",
          "& ul": { padding: 0 },
        }}
        subheader={<li />}
      >
        {["Yes", "No", "Maybe"].map((sectionId, index) => (
          <li key={index}>
            <ul>
              <ListSubheader>{`${sectionId}`}</ListSubheader>
              {[1, 2, 3, 4].map((item) => (
                <ListItem key={`item-${sectionId}-${item}`}>
                  <ListItemText primary={`Item ${item}`} />
                </ListItem>
              ))}
            </ul>
          </li>
        ))}
      </List>
    </>
  );
}
