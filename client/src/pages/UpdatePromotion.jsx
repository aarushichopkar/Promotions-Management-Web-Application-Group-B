import React, { useState , useEffect} from 'react';
import { Button, Stack, TextField, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { useDispatch , useSelector}from 'react-redux';
import { useNavigate } from 'react-router-dom'; 
import { addPromotion } from '../Store/promotionSlice';

const StyledBox = styled(Box)({
  maxWidth: '500px',
  margin: '2rem auto',
  padding: '2rem',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  borderRadius: '8px',
  backgroundColor: '#fff',
});

const FormComponent = () => {
  const [promotionType, setPromotionType] = useState('');
  const [discount_rate, setDiscount_rate] = useState('');
  const [start_time1, setStart_time1] = useState(dayjs());
  const [end_time1, setEnd_time1] = useState(dayjs());

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('start_time1'),
      password: data.get('end_time1'),
    });
    const timeZone = 'Asia/Kolkata';
    const start_time = start_time1.format('YYYY-MM-DDTHH:mm:ss');
    const end_time = end_time1.format('YYYY-MM-DDTHH:mm:ss');
    let promotiondata = {
      promotionType,
      discount_rate,
      start_time,
      end_time,
      timeZone
    };
    console.log(promotiondata);
    dispatch(addPromotion(promotiondata)).then((result) => {
      if (result.meta.requestStatus === 'fulfilled') {
        navigate('/promotions');
      }
    });
  };

  const handleValidFrom = (newValue) => {
    if (dayjs(newValue).isValid()) {
      setStart_time1(newValue);
      // console.log('Selected date from:', newValue.format('YYYY-MM-DDTHH:mm:ss')); // Log the selected date to the console
    }
  };

  const handleValidTill = (newValue) => {
    if (dayjs(newValue).isValid()) {
      setEnd_time1(newValue);
      // console.log('Selected date till:', newValue.format('YYYY-MM-DDTHH:mm:ss')); // Log the selected date to the console
    }
  };

  return (
    <StyledBox>
      <Typography variant="h4" component="h1" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold', textDecoration: 'underline' }}>
        Update Promotion
      </Typography>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            variant="outlined"
            label="Promotion Type"
            name="promotionType"
            value={promotionType}
            onChange={(e) => setPromotionType(e.target.value)}
            fullWidth
          />
          <TextField
            variant="outlined"
            label="Discount Rate(%)"
            name="discountRate"
            value={discount_rate}
            onChange={(e) => setDiscount_rate(e.target.value)}
            fullWidth
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimePicker
              label="Valid From"
              name="start_time1"
              value={start_time1}
              onChange={handleValidFrom}
              minDateTime={dayjs()} // This restricts to future dates and times only
              renderInput={(params) => <TextField {...params} fullWidth />}
            />
            <DateTimePicker
              label="Valid Till"
              value={end_time1}
              name="end_time1"
              onChange={handleValidTill}
              minDateTime={dayjs()} // This restricts to future dates and times only
              renderInput={(params) => <TextField {...params} fullWidth />}
            />
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
        </Stack>
      </form>
    </StyledBox>
  );
};

export default FormComponent;
