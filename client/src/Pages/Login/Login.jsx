import Navbar from '../../Components/Navbar/Navbar.jsx';
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import './Login.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
const Login = (props) => {
      const navigate = useNavigate()
      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');
  
      const handleSubmit = (event) => {
          event.preventDefault();
          // Handle form submission logic here (e.g., send data to the server)
          console.log('Username:', username);
          console.log('Password:', password);
      };
  
      return (<>
      <Navbar isLoggedIn={false} handleLogout={props.handleLogout}/>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
              <form onSubmit={handleSubmit}>
                  <Grid container spacing={3} direction="column" alignItems="center">
                      <Grid item>
                          <Typography variant="h4" gutterBottom>Login</Typography>
                      </Grid>
                      <Grid item>
                          <TextField
                              label="Username"
                              variant="standard"
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
                              variant="standard"
                              type="password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              required
                              autofill="off"
                          />
                      </Grid>
                      <Grid item>
                          <Button variant="contained" type="submit" onClick={() => {
                            props.handleLogin();
                            navigate("/")
                            }}>
                              Login
                          </Button>
                      </Grid>
                  </Grid>
              </form>
          </Box></>
      );
  }
export default Login;
 