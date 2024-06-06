
import Sidenav from '../component/Layout/Sidenav';
import Box from '@mui/material/Box';
import Navbar from '../component/Layout/Navbar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';

function Profile() {
  
  const authToken = localStorage.getItem('auth');
    const auth = JSON.parse(authToken);

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
                User Id : {auth.id} 
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Email: {auth.email}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Role: {auth.role}
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
