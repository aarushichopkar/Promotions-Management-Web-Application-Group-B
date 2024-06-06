import React, { useEffect } from "react";
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux";
import { showPromotion, removePromotion } from '../../Store/promotionSlice';


export default function Promotiontable() {
  const dispatch = useDispatch();
  const { promotion, loading } = useSelector((state) => state.promotion);
  
  const handleDeleteRow = (id) => {
    dispatch(removePromotion(id));
  };
  
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'managerId', headerName: 'Manager ID', width: 90 },
    { field: 'promotionType', headerName: 'Promotion Type', width: 150 },
    { field: 'creation_time', headerName: 'Created On', width: 150 },
    { field: 'start_time', headerName: 'Valid From', width: 200 },
    { field: 'end_time', headerName: 'Valid Till', width: 200 },
    { field: 'active', headerName: 'Active State', width: 100 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 130,
      renderCell: (params) => (
        <strong>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            sx={{ backgroundColor: 'red', color: 'white', '&:hover': { backgroundColor: 'darkred' } }}
            onClick={() => handleDeleteRow(params.row.id)}
          >
            Delete
          </Button>
        </strong>
      ),
    },
  ];

  useEffect(() => {
    dispatch(showPromotion());
  }, [dispatch]);

  if (loading) {
    return <h2>Loading</h2>;
  }

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
