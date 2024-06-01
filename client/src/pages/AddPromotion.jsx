// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Button, Stack, TextField, Box, Typography } from '@mui/material';
// import { styled } from '@mui/system';
// import MultipleSelect from '../component/Layout/MultipleSelectPro';

// const StyledBox = styled(Box)({
//   maxWidth: '500px',
//   margin: '2rem auto',
//   padding: '2rem',
//   boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
//   borderRadius: '8px',
//   backgroundColor: '#fff',
// });

// const FormComponent = () => {

//   return (
//     <StyledBox>
//       <Typography variant="h4" component="h1" gutterBottom  sx={{
//         textAlign: 'center',
//       }}>
//         Add Promotion
//       </Typography>
//       <form >
//         <Stack spacing={3}>
//           <TextField
//             variant="outlined"
//             label="Promotion Type"
//             name="promotionType"
//             // value={formData.promotionType}
//             // onChange={handleChange}
//             fullWidth
//           />
//           <TextField
//             variant="outlined"
//             label="Manager Id"
//             name="managerId"
//             // value={formData.managerId}
//             // onChange={handleChange}
//             fullWidth
//           />
//           <TextField
//             variant="outlined"
//             label="Discount Rate(%)"
//             name="discountRate"
//             // value={formData.discountRate}
//             // onChange={handleChange}
//             fullWidth
//           />
//           <MultipleSelect />
//           <Button
//             color="primary"
//             variant="contained"
//             type="submit"
//             fullWidth
//             sx={{
//               padding: '0.75rem',
//               fontSize: '1rem',
//               backgroundColor: '#1976d2',
//               '&:hover': {
//                 backgroundColor: '#115293',
//               },
//             }}
//           >
//             Submit
//           </Button>
//         </Stack>
//       </form>
//     </StyledBox>
//   );
// };

// export default FormComponent;


import React, { useState } from 'react';
import { Button, Stack, TextField, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import MultipleSelect from '../component/Layout/MultipleSelectPro'; // Import the MultipleSelect component

const StyledBox = styled(Box)({
  maxWidth: '500px',
  margin: '2rem auto',
  padding: '2rem',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  borderRadius: '8px',
  backgroundColor: '#fff',
});

const FormComponent = () => {
  const [selectedNames, setSelectedNames] = useState([]);

  const handleNamesChange = (names) => {
    setSelectedNames(names);
    console.log('Selected names:', names); // Print the selected names to the console
  };

  return (
    <StyledBox>
      <Typography variant="h4" component="h1" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold', textDecoration: 'underline' }}>
        Add Promotion
      </Typography>
      <form>
        <Stack spacing={3}>
          <TextField
            variant="outlined"
            label="Promotion Type"
            name="promotionType"
            fullWidth
          />
          <TextField
            variant="outlined"
            label="Manager Id"
            name="managerId"
            fullWidth
          />
          <TextField
            variant="outlined"
            label="Discount Rate(%)"
            name="discountRate"
            fullWidth
          />
          {/* Pass the handleNamesChange function to MultipleSelect */}
          <MultipleSelect onChange={handleNamesChange} />
          <Button
            color="primary"
            variant="contained"
            type="submit"
            fullWidth
            sx={{
              padding: '0.75rem',
              fontSize: '1rem',
              backgroundColor: '#1976d2',
              '&:hover': {
                backgroundColor: '#115293',
              },
            }}
          >
            Add
          </Button>
        </Stack>
      </form>
    </StyledBox>
  );
};

export default FormComponent;
