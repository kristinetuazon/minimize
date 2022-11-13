const express = require('express');
const router = express.Router();
const Auth = require('../models/Auth');

router.post('/register', async(req, res) => {
  const {email, password} = req.body
  const userCredentials = await Auth.register(email, password);
  res.json({"payload": userCredentials}).status(200);
})

router.post('/signin', async(req, res) => {
  const {email, password} = req.body
  const userCredentials = await Auth.signin(email, password);
  res.json({"payload": userCredentials}).status(200);
})

router.post('/googlesignin', async(req,res) => {
  const userCredentials = await Auth.signInWtihGoogle();
  res.json({"payload": userCredentials}).status(200);
})

router.post('/resetbyemail', async(req, res) => {
  const {email} = req.body;
  const userCredentials = await Auth.sendPasswordReset(email);
  res.json({"payload": userCredentials}).status(200);
})

module.exports = router;