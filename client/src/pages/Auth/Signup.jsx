import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { signUpUser } from '../../Store/UserSlice';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';

// Rename the theme to avoid redeclaration
const signUpTheme = createTheme();

function SignUp() {

  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');

    // redux state
    const {loading, error} = useSelector((state)=>state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let userCredential={
            userName,email,password,role
           }

    dispatch(signUpUser(userCredential)).then((result)=>{
      if(result.payload){
       setEmail('');
       setPassword('');
       setRole('');
       setUserName('');
       navigate('/signin');
      }
    })
  };

  return (
    <ThemeProvider theme={signUpTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="name"
                  autoFocus
                  value={userName}
                  onChange={(e)=> setUserName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e)=> setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
             onChange={(e)=> setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
        <FormControl fullWidth required>
        <InputLabel>Role</InputLabel>
        <Select
          id="role"
          name="role"
          value={role}
          label="role"
          onChange={(e) => {setRole(e.target.value);}}
        >
          <MenuItem value="MANAGER">Manager</MenuItem>
          <MenuItem value="BUISNESS_OWNER">Owner</MenuItem>
          <MenuItem value="THIRD PARTY">Third Party</MenuItem>
        </Select>
      </FormControl>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
               {loading ? 'loading...' : 'Sign Up'}
            </Button>
            {error&&(
                <Alert severity="error">{error}</Alert>
               )}
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
        </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default SignUp;
