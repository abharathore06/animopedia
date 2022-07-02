import * as React from 'react';
import "../Pets/AllPets.css";
import { DataGrid } from '@mui/x-data-grid';
import styled from 'styled-components';
import Button from '@mui/material/Button';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue(params.id, 'firstName') || ''} ${
        params.getValue(params.id, 'lastName') || ''
      }`,
  },
];

const rows = [
  { id: 1, lastName: 'uy', firstName: 'Aa', age: 35 },
  { id: 2, lastName: 'it', firstName: 'Bb', age: 42 },
  { id: 3, lastName: 'R', firstName: 'A', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function AllPets() {
  return (
    <>
    <header>
      <h2>All Pets</h2>
      <Button class = "btn" variant="add">Add New Pet</Button>
    </header>
    <div style={{ height: 400, width: '75%', marginLeft: 300, marginTop: 40}}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
    </>
  );
}
