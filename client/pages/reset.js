//minimize.com/reset
import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Input,
  InputLabel,
  FormHelperText,
  FormControl,
} from "@mui/material";
import { Button, Paper } from "@material-ui/core";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, sendPasswordReset } from "../firebase-config";
import { useRouter } from "next/router";

export default function Reset() {
  const [email, setEmail] = useState("");
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (loading) return;
    if (user) router.push("/reset");
  }, [user, loading, router]);

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
              Reset Password
            </Typography>
            <br></br>
            <FormControl>
              <br></br>
              <InputLabel htmlFor="email">Email address</InputLabel>
              <Input
                id="email"
                required
                fullWidth
                autoFocus
                label="Outlined"
                aria-describedby="email-address-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <FormHelperText id="password-helper">
                Your e-mail address.
              </FormHelperText>
            </FormControl>

            <br></br>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => sendPasswordReset(auth, email)}
            >
              Send Password Reset Email
            </Button>

            <br></br>
          </Box>
        </Grid>
      </div>
    </>
  );
}
