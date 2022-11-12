import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  FormHelperText,
  FormControl,
  Link
} from "@mui/material";
import NextLink from 'next/link'
import { Button, Paper } from "@material-ui/core";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../firebase-config";
import GoogleIcon from "@mui/icons-material/Google";

export default function Register({setRegister}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);

  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };
  // useEffect(() => {
  //   if (loading) return;
  //   if (user) history("/dashboard");
  // }, [user, loading, history]);
  
  return (
    <Grid component={Paper} sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor:"primary",
      height: 1, 
      width: 1
    }} >
      <Box
        sx={{
          boxShadow: 3,
          my: 15,
          mx: 7,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <br></br>
        <Typography component="h1" variant="h5" color="primary.dark">
          Sign Up
        </Typography>
        <br></br>

        <FormControl>
          <TextField
            id="name"
            required
            fullWidth
            autoFocus
            label="Name"
            aria-describedby="name-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <FormHelperText id="password-helper">Your full name.</FormHelperText>
        </FormControl>
        <br></br>

        <FormControl>
          <TextField
            id="email"
            required
            autoFocus
            label="Email"
            aria-describedby="email-address-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormHelperText id="password-helper">
            Your e-mail address.
          </FormHelperText>
        </FormControl>

        <br></br>
        <FormControl>
          <TextField
            id="outlined-password-input"
            required
            fullWidth
            autoFocus
            label="Password"
            aria-describedby="password-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormHelperText id="password-helper">
            Password for your account.
          </FormHelperText>
        </FormControl>
        <br></br>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2, width: 1/2}}
          onClick={register}
        >
          Sign Up
        </Button>
        <br></br>
        <Button
          type="submit"
          variant="outlined"
          endIcon={<GoogleIcon />}
          onClick={signInWithGoogle}
          sx={{ mt: 0, mb: 2, width: 1/2}}
        >
          Sign In with
        </Button>

        <Box
          sx={{
            mx: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <br></br>
          <Grid container>
            <Grid item xs sx={{ mx: 2 }}>
               <Link cursor="pointer"> <Typography onClick={()=>{setRegister(false)}} color="secondary" variant="body2" >
                  Already have an account? Login here.
                </Typography> </Link> 
            </Grid>
          </Grid>
        </Box>
        <br></br>
      </Box>
    </Grid>
  )
}
