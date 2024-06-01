import React, { useEffect } from "react";
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux";
import { showPromotion } from '../../Store/promotionSlice';
import { showPromotion } from '../../Store/promotionSlice';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'productName', headerName: 'Product Name', width: 90 },

  {
    field: 'actions',
    headerName: 'Actions',
    width: 230,
    renderCell: (params) => (
      <strong>
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{ marginLeft: 16 }}
          // onClick={() => handleAddRow(params.row.id)}
        >
          Schedule
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          sx={{ marginLeft: 2, backgroundColor: 'red', color: 'white', '&:hover': { backgroundColor: 'darkred' } }}
          // onClick={() => handleDeleteRow(params.row.id)}
        >
          Delete
        </Button>
      </strong>
    ),
  },
];

export default function Promotiontable() {
  const dispatch = useDispatch();
  const { promotion, loading } = useSelector((state) => state.promotion);

  useEffect(() => {
    dispatch(showPromotion());
  }, [dispatch]);

  return (
    <Box sx={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={promotion}  // Use the promotion data from the Redux store
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
