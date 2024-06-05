import React from 'react'
import Sidenav from '../component/Layout/Sidenav'
import Box from '@mui/material/Box';
import Navbar from '../component/Layout/Navbar';
import Promotiontable from '../component/Layout/Promotiontable'

function Promotions() {
  return (
    <>
    <Navbar />
   <Box height={70}/>
    <Box sx={{ display: 'flex' }}>
    <Sidenav />
    <Box component="main" sx={{ flexGrow:1, p:3}}>
    <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '24px' }}>
  PROMOTIONS
</div>
     <Promotiontable />
   </Box>
    </Box>
    </>
  )
}

export default Promotions