import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  FormHelperText,
  FormControl,
  TextField,
} from "@mui/material";
import { Button, Paper } from "@material-ui/core";
import {
  auth,
  signInWithEmailAndPassword,
  signInWithGoogle,
} from "../firebase-config";
import Link from "next/link";
import GoogleIcon from "@mui/icons-material/Google";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";

// interface props {
//   setSignUp: () => void;
// }

// const SignIn = ({setSignUp}: props): ReactElement => {
  const SignIn = ({handleClose}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();
   
   useEffect(() => {
     if (loading) return;
     if (user) router.push('/dashboard');
   }, [user, loading, router]);


  return (
    <>

        <br></br>
        <Typography
          component="h1"
          variant="h5"
          sx={{ mt: 3, mb: 2 }}
          color="primary.dark"
        >
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
            onChange={(e) => setEmail(e.target.value)}
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
            type="password"
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
          variant="contained"
          sx={{ mt: 4, mb: 2, width: 1 / 2 }}
          onClick={() => signInWithEmailAndPassword(auth, email, password)}
        >
          Sign In
        </Button>
        <br></br>
        <Button
          type="submit"
          variant="outlined"
          endIcon={<GoogleIcon />}
          sx={{ mt: 3, mb: 2, width: 1 / 2 }}
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
              <Typography
                color="secondary"
                variant="body2"
                sx={{ mt: 1, mb: 2 }}
              >
                <Link href="/reset" id="link">Forgot password?</Link>
              </Typography>
            </Grid>
            <Grid item xs sx={{ mx: 1 }}>
              <Typography color="secondary" variant="body2">
              <p onClick={handleClose} className="cursor-pointer"> Do not have an account? Sign up.</p>
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <br></br>
    </>
  );
}
export default SignIn;