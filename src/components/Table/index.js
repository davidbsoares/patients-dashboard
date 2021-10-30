import React from 'react';

import { usePatients } from '../../context/patients';

import { Table as MuiTable } from '@mui/material/';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import MuiTableHead from '@mui/material/TableHead';

import MuiButton from '@mui/material/Button';

import { withStyles } from '@mui/styles';

const Table = ({ search, openModal }) => {
  const { patients, gender, setPatient } = usePatients();

  function filterFunction(value) {
    if (
      value?.name.first.toLowerCase().includes(search.toLowerCase()) ||
      value?.name.last.toLowerCase().includes(search.toLowerCase()) ||
      value?.location.country.toLowerCase().includes(search.toLowerCase())
    )
      return value;
  }

  function filterGender(value) {
    if (value?.gender === gender || gender === 'both') return value;
  }

  const handleModal = (p) => {
    setPatient(p);
    openModal();
  };

  return (
    <MuiTable>
      <TableHead>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Gender</TableHeaderCell>
          <TableHeaderCell>Birth</TableHeaderCell>
          <TableHeaderCell>Actions</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <>
          {patients
            ?.filter(filterGender)
            .filter(filterFunction)
            .map((p, i) => {
              const dob = new Date(p.dob.date).toLocaleDateString();
              return (
                <TableRow
                  key={i}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>
                    {p.name.first} {p.name.last}
                  </TableCell>
                  <TableBodyCell>{p.gender}</TableBodyCell>
                  <TableCell>{dob}</TableCell>
                  <TableCell>
                    <Button variant="outlined" onClick={() => handleModal(p)}>
                      Details
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
        </>
      </TableBody>
    </MuiTable>
  );
};

const TableHead = withStyles(() => ({
  root: {
    backgroundColor: '#C6C6C6',
  },
}))(MuiTableHead);

const TableHeaderCell = withStyles(() => ({
  root: {
    color: '#474747',
    fontSize: 16,
    fontWeight: 'bold',
  },
}))(TableCell);

const TableBodyCell = withStyles(() => ({
  root: {
    textTransform: 'capitalize',
  },
}))(TableCell);

const Button = withStyles(() => ({
  outlined: {
    color: 'grey',
    border: '1px solid grey',
  },
}))(MuiButton);

export default Table;
