// import React, { useEffect, useState } from "react";
// import Box from '@mui/material/Box';
// import { DataGrid } from '@mui/x-data-grid';
// import Button from '@mui/material/Button';
// import { useDispatch, useSelector } from "react-redux";
// import { showPromotion } from '../../Store/promotionSlice';

// const columns = [
//   { field: 'id', headerName: 'ID', width: 90 },
//   {
//     field: 'firstName',
//     headerName: 'First name',
//     width: 150,
//     editable: true,
//   },
//   {
//     field: 'lastName',
//     headerName: 'Last name',
//     width: 150,
//     editable: true,
//   },
//   {
//     field: 'age',
//     headerName: 'Age',
//     type: 'number',
//     width: 110,
//     editable: true,
//   },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
//   },
//   {
//     field: 'actions',
//     headerName: 'Actions',
//     width: 230,
//     renderCell: (params) => (
//       <strong>
//         <Button
//           variant="contained"
//           color="primary"
//           size="small"
//           style={{ marginLeft: 16 }}
//           // onClick={() => handleAddRow(params.row.id)}
//         >
//           Schedule
//         </Button>
//         <Button
//           variant="contained"
//           color="secondary"
//           size="small"
//           sx={{ marginLeft: 2, backgroundColor: 'red', color: 'white', '&:hover': { backgroundColor: 'darkred' } }}
//           // onClick={() => handleDeleteRow(params.row.id)}
//         >
//           Delete
//         </Button>
//       </strong>
//     ),
//   },

// ];

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14,},
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];


// export default function Promotiontable() {
//   const dispatch = useDispatch();

//   const { promotion, loading, searchData } = useSelector((state) => state.promotion);
  
//   useEffect(() => {
//     dispatch(showPromotion());
//     console.log(promotion);
//   }, []);
  
//   if(loading){
//     return <h2>Loading</h2>;
//   }
//   return (
//     <Box sx={{ height: 500, width: '100%' }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         initialState={{
//           pagination: {
//             paginationModel: {
//               pageSize: 8,
//             },
//           },
//         }}
//         pageSizeOptions={[5]}
//         checkboxSelection
//         disableRowSelectionOnClick
//       />
//     </Box>
//   );
// }


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
    { field: 'creation_time', headerName: 'Creation Time', width: 150 },
    { field: 'start_time', headerName: 'Start Time', width: 200 },
    { field: 'end_time', headerName: 'End Time', width: 200 },
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
