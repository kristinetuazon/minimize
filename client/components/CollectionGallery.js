import React from "react";
import {
  Grid,
  Paper,
  Typography,
  Item,
  Card,
  Box,
  CardActions,
  CardContent,
  Button,
  IconButton,
} from "@mui/material/";
import Link from "next/link";
import AddIcon from "@mui/icons-material/Add";

const card = (
  <React.Fragment>
    <Box sx={{ minWidth: 100 }}>
      <Card variant="outlined" sx={{ bgcolor: "background.default" }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            [Collection ID]
          </Typography>
          <Typography variant="h5" component="div">
            Name of Collection
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            [Collection Detals]
          </Typography>
          <br />
        </CardContent>
        <CardActions>
          <Button size="small">Edit list</Button>
        </CardActions>
      </Card>
    </Box>
  </React.Fragment>
);

const addAList = (
  <>
    <Card
      sx={{
        minWidth: 100,
        height: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        alignContent: "center",
        bgcolor: "background.default",
      }}
    >
      <CardContent
        sx={{
          my: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        <IconButton>
          <AddIcon fontSize="large" />
        </IconButton>
        {/* <Typography variant="h6"> a New List </Typography> */}
      </CardContent>
      <CardActions>
        <Button size="small">ADD A NEW LIST</Button>
      </CardActions>
    </Card>
  </>
);

export default function CollectionGallery() {
  return (
    <>
      <Grid
        container
        sx={{ position: "relative", overflow: "auto" }}
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={2} sm={4} md={4}>
          <Link href="/dashboard/newlist" id="link">
            {" "}
            {addAList}
          </Link>
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          {card}
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          {card}
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          {card}
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          {card}
        </Grid>
        <Grid item xs={2} sm={4} md={4}>
          {card}
        </Grid>

        {/* {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item>xs=2</Item>
          </Grid>
        ))} */}
      </Grid>
    </>
  );
}
