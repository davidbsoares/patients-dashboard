import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import axios from 'axios';

import { withStyles } from '@mui/styles';

import MuiTextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

import AccountCircle from '@mui/icons-material/AccountCircle';

import { usePatients } from '../../context/patients';
import Filter from '../../components/Filter';
import Table from '../../components/Table';
import Modal from '../../components/Modal';
import MuiButton from '@mui/material/Button';

const Home = () => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);

  const { patients, setPatients, patient } = usePatients();

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://randomuser.me/api/',
      params: { page: page, seed: 'abc', results: 50 },
    })
      .then((response) => {
        if (patients) {
          setPatients([...patients, ...response.data.results]);
        }
        if (!patients) {
          setPatients(response.data.results);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);

  return (
    <Container>
      <TextField
        label="Pesquise um paciente"
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />
      <Filter />

      <Table search={search} openModal={() => setOpen(true)} />
      <Button
        variant="outlined"
        onClick={() => setPage((oldState) => oldState + 1)}
      >
        Load More
      </Button>
      <Modal open={open} closeModal={() => setOpen(false)} patient={patient} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding-top: 5rem;
  padding-bottom: 5rem;
`;

const TextField = withStyles(() => ({
  root: {
    alignSelf: 'center',
    maxWidth: '1200px',
    width: '100%',
  },
}))(MuiTextField);

const Button = withStyles(() => ({
  root: {
    marginTop: '2rem',
  },
  outlined: {
    color: 'grey',
    border: '1px solid grey',
  },
}))(MuiButton);

export default Home;
