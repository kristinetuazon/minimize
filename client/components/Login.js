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
import { Button, Paper} from "@material-ui/core";
import {
  auth,
  signInWithEmailAndPassword,
  signInWithGoogle,
} from "../firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";
import GoogleIcon from '@mui/icons-material/Google';


export default function Login({setRegister}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [user, loading, error] = useAuthState(auth);


//   useEffect(() => {
//     if (loading) {
//       // maybe trigger a loading screen
//       return;
//     }
//     if (user) navigate("/dashboard");
//   }, [user, loading]);


  return (


    <Grid component={Paper} sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      height: 1, 
      width: 1
    }}>
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
        <Typography component="h1" variant="h5" sx={{ mt: 3, mb: 2 }} color="primary.dark">
          Sign In
        </Typography>
        <FormControl>
          <TextField
            id="email"
            required
            fullWidth
            autoFocus
            label="E-mail"
            aria-describedby="email-address-input"
            value={email} 
            onChange= {(e)=> setEmail(e.target.value)} 
          />
          <FormHelperText id="password-helper">
            Your e-mail address.
          </FormHelperText>
        </FormControl>

        <br></br>
        <FormControl>
          <TextField
          label="Password"
          variant="outlined"
            id="outlined-password-input"
            required
            fullWidth
            autoFocus
            aria-describedby="password-input"
            value={password}
            onChange = {(e) => setPassword(e.target.value)}
          />
          <FormHelperText id="password-helper">
            Password for your account.
          </FormHelperText>
        </FormControl>
        <br></br>
        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 4, mb: 2, width: 1/2}}
          onClick={() => signInWithEmailAndPassword(email,password)
          }
        >
          Sign In
        </Button>
        <br></br>
        <Button
          type="submit"
          variant="outlined"
          endIcon={<GoogleIcon/>}
          sx={{ mt: 3, mb: 2, width: 1/2}}
          onClick={signInWithGoogle}
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
            <Grid item xs sx={{ mx: 1 }}>
              <Link cursor="pointer" component={Link} to="/Reset">
              <Typography color="secondary" variant="body2" sx={{ mt: 1, mb: 2 }}>
              Forgot password?
             </Typography>
              </Link>
            </Grid>
            <Grid item xs sx={{ mx: 1 }}>
            <Link cursor="pointer" onClick={()=> {setRegister(true)}}>
              <Typography color="secondary" variant="body2">
              Do not have an account? Sign up.
             </Typography>
              </Link>
            </Grid>
          </Grid>
        </Box>
        <br></br>
      </Box>
    </Grid>
  );
}
