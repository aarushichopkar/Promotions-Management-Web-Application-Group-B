import React, { useState } from 'react';
import { Button, Stack, TextField, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { addNewPromotion } from '../Store/promotionSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';

const StyledBox = styled(Box)({
  maxWidth: '500px',
  margin: '2rem auto',
  padding: '2rem',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  borderRadius: '8px',
  backgroundColor: '#fff',
});

const FormComponent = () => {

  const [promotionType, setPromotionType ] = useState('');
  const [discountRate, setDiscountRate ] = useState('');
  const [validTill, setValidTill ] = useState(dayjs());
  const [validFrom, setValidFrom ] = useState(dayjs());

  const authToken = localStorage.getItem('auth');
    const auth = JSON.parse(authToken);

  const today = dayjs();
 const dispatch = useDispatch();
 const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
   const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get('promotionType'),
    //   password: data.get('discountRate'),
    // });
    console.log(validFrom.format('YYYY-MM-DDTHH:mm:ss'));
   const start_time = validFrom.format('YYYY-MM-DDTHH:mm:ss');
   const end_time = validTill.format('YYYY-MM-DDTHH:mm:ss')
   const managerId = auth.id;
   const timeZone = "Asia/Kolkata";
    let NewPromotion={
      promotionType,
      discountRate,
      start_time,
      end_time,
      managerId,
      timeZone
     }
    console.log(NewPromotion);

    dispatch(addNewPromotion(NewPromotion)).then((result)=>{
       navigate('/promotions');
      })
  };

  return (
    <StyledBox>
      <Typography variant="h4" component="h1" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold', textDecoration: 'underline' }}>
        Add Promotion
      </Typography>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            variant="outlined"
            label="Promotion Type"
            name="promotionType"
            fullWidth
            value={promotionType}
             onChange={(e)=> setPromotionType(e.target.value)}
          />
          {/* <TextField
            variant="outlined"
            label="Manager Id"
            name="managerId"
            fullWidth
          /> */}
          <TextField
            variant="outlined"
            label="Discount Rate(%)"
            name="discountRate"
            fullWidth
            value={discountRate}
            onChange={(e)=> setDiscountRate(e.target.value)}
          />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateTimePicker']}>
        <DateTimePicker
          label="Valid From"
          minDateTime={today}
          defaultValue={today}
          name = "validFrom"
          value={validFrom}
          onChange={(newValue) => setValidFrom(newValue)}
        />
      </DemoContainer>
    </LocalizationProvider>

    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateTimePicker']}>
        <DateTimePicker
          label="Valid Till"
          minDateTime={today}
          defaultValue={today}
          name="validTill"
          value={validTill}
          onChange={(newValue) => setValidTill(newValue)}
        />
      </DemoContainer>
    </LocalizationProvider>
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
          <Button
            color="secondary"
            variant="contained"
            fullWidth
            sx={{
              padding: '0.75rem',
              fontSize: '1rem',
              backgroundColor: 'grey',
              '&:hover': {
                backgroundColor: '#9a0007',
              },
            }}
            onClick={() => navigate(-1)} // Navigate back to the previous page
          >
            Back
          </Button>
        </Stack>
      </form>
    </StyledBox>
  );
};

export default FormComponent;
