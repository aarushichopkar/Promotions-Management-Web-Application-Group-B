import React, { useEffect } from "react";
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux";
import { showProduct } from '../../Store/productSlice';
import { removeProduct } from '../../Store/productSlice';
// import { showPromotion } from '../../Store/promotionSlice';
// import { showPromotion } from '../../Store/promotionSlice';


export default function Producttable() {
  const dispatch = useDispatch();

  const { product, loading } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(showProduct());
  }, [dispatch]);

  if (loading) {
      return <h2>Loading</h2>;
  }

  const deleteProduct = (id) => {
    console.log("Delete Product ID:", id);
    dispatch(removeProduct(id));
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Product Name', width: 150 },
    { field: 'price', headerName: 'Price', width: 90},
    { field: 'proId', headerName: 'Promotion Id', width: 120},

    {
      field: 'actions',
      headerName: 'Actions',
      width: 230,
      renderCell: (params) => (
        <strong>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            sx={{ marginLeft: 2, backgroundColor: 'red', color: 'white', '&:hover': { backgroundColor: 'darkred' } }}
            onClick={() => deleteProduct(params.row.id)}
          >
            Delete
          </Button>
        </strong>
      ),
    },
  ];

  return (
    <Box sx={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={product}  // Using the product data from the Redux store
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 8,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}

