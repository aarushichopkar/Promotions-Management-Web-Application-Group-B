
import React, { useState } from 'react';
import { Button, Stack, TextField, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import MultipleSelect from '../component/Layout/MultipleSelectPro'; // Import the MultipleSelect component
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { editProduct } from '../Store/productSlice';
import { useNavigate } from 'react-router-dom';

const StyledBox = styled(Box)({
  maxWidth: '500px',
  margin: '2rem auto',
  padding: '2rem',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  borderRadius: '8px',
  backgroundColor: '#fff',
});

const FormComponent = () => {

  const { id } = useParams();

  const [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
        proId: ''
      });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({
          ...product,
          [name]: value
        });
      };

  const dispatch = useDispatch();
  const navigate = useNavigate();

//    const handleSubmit = (e) => {
//        e.preventDefault();
//        const product_id = id;
//             const promotion_id = product.proId;
//             console.log("Submitting product ID: ", product_id);
//             console.log("Submitting new promotion ID: ", promotion_id);
//             dispatch(editProduct({ product_id, product })).then(() => {
//                                                                 navigate('/product');
//                                                               });
//      };

   const editProductCall = () => {
     const product_id = id;
     const promotion_id = product.proId;
     console.log("Submitting product ID: ", product_id);
     console.log("Submitting new promotion ID: ", promotion_id);
     dispatch(editProduct({ product_id, product })).then((results) => {
                                                         navigate('/product');
                                                       });
   }

  return (
    <StyledBox>
      <Typography variant="h4" component="h1" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold', textDecoration: 'underline' }}>
        Edit Product
      </Typography>
      <form>
        <Stack spacing={3}>
          <Typography>
             Editing Product with ID: {id}
          </Typography>
          <TextField
            variant="outlined"
            label="Product name"
            name="name"
            fullWidth
            value={product.name}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            label="Description"
            name="description"
            fullWidth
            value={product.description}
            onChange={handleChange}

          />
          <TextField
            variant="outlined"
            label="Price"
            name="price"
            fullWidth
            value={product.price}
            onChange={handleChange}

          />
          <TextField
            variant="outlined"
            label="New Promotion Id"
            name="proId"
            fullWidth
            value={product.proId}
            onChange={handleChange}

          />

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
//             onClick={() => editProductCall()}
          >
            Edit
          </Button>
        </Stack>
      </form>
    </StyledBox>
  );
};

export default FormComponent;