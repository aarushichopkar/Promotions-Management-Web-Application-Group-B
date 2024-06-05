
import Sidenav from '../component/Layout/Sidenav';
import Box from '@mui/material/Box';
import Navbar from '../component/Layout/Navbar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';

function Profile() {
  // const userRole = localStorage.getItem('token');
  
  // const [userRole, setUserRole] = useState(null);
  // useEffect(() => {
  //   const auth = localStorage.getItem('auth');
    
  //   // setUserRole(role);
    
  // console.log(auth.role);
  // }, []);


  return (
    <>
      <Navbar />
      <Box height={30} />
      <Box sx={{ display: 'flex' }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Profile</h1>
          <Box sx={{ display: 'flex', justifyContent: 'left', mt: 4 }}>
            <Card sx={{ width: '40%', height: 140 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                Aarushi Chopkar
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Email: {"aarushi@gmail.com"}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {/* Role: {role || 'Manager'} */}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Profile;
