import react from 'react';
import Navbar from '../../Components/Navbar/Navbar.jsx';
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import for navigation
import './Login.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
const Login = () => {
  
      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');
  
      const handleSubmit = (event) => {
          event.preventDefault();
          // Handle form submission logic here (e.g., send data to the server)
          console.log('Username:', username);
          console.log('Password:', password);
      };
  
      return (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
              <form onSubmit={handleSubmit}>
                  <Grid container spacing={3} direction="column" alignItems="center">
                      <Grid item>
                          <Typography variant="h4" gutterBottom>Login</Typography>
                      </Grid>
                      <Grid item>
                          <TextField
                              label="Username"
                              variant="outlined"
                              type="username"
                              value={username}
                              onChange={(e) => setUsername(e.target.value)}
                              required
                              autofill="off"
                          />
                      </Grid>
                      <Grid item>
                          <TextField
                              label="Password"
                              variant="outlined"
                              type="password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              required
                              autofill="off"
                          />
                      </Grid>
                      <Grid item>
                          <Button variant="contained" type="submit">
                              Login
                          </Button>
                      </Grid>
                  </Grid>
              </form>
          </Box>
      );
  }
export default Login;
 