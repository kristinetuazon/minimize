import React, { useState, useEffect, useRef } from "react";
import { Card, CardContent, Typography } from "@mui/material";
// import { grey } from "@mui/material/colors";
import dynamic from "next/dynamic";


const TinderCard = dynamic(
  () => {
    return import("react-tinder-card");
  },
  { ssr: false }
);

export default function TinderCards( {localStorage} ) {


  return localStorage.map((item) => {
    return (
        <>
        <TinderCard
          className="swipe"
          key={item.key}
          preventSwipe={["up"]}
          >
          <Card
            sx={{
              width: "300px",
              height:"400px",
              display: "flex",
              bgcolor: "background.primary",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              alignContent: "center",
              justifyContent: "center"
            }}
            >
            <CardContent
              sx={{
               my: 12,
               justifySelf: "center"
              }}
            >
              <Typography
                sx={{ fontSize: 16}}
                color="text.secondary"
                gutterBottom
              >
                ✨ Does this give you joy? ✨
              </Typography>
              <Typography variant="h2" component="div">
                {item.itemName}
              </Typography>
            </CardContent>
          </Card>
        </TinderCard>
      </>
    );
  });

//   return <div>TinderCards</div>;
}
