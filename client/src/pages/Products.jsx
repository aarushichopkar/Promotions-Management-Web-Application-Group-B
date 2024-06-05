import React from 'react'
import Sidenav from '../component/Layout/Sidenav'
import Box from '@mui/material/Box';
import Navbar from '../component/Layout/Navbar';
import Producttable from '../component/Layout/Producttable'


function Product() {
  return (
    <>
    <Navbar />
   <Box height={30}/>
    <Box sx={{ display: 'flex' }}>
    <Sidenav />
    <Box component="main" sx={{ flexGrow:1, p:3}}>
     <h2>PRODUCTS</h2>
        <Producttable />
   </Box>
    </Box>
    </>
  )
}

export default Product