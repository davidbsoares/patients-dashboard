import React from 'react';
import styled from 'styled-components';

import { withStyles } from '@mui/styles';

import MuiDialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import CloseIcon from '@mui/icons-material/Close';
import MuiIconButton from '@mui/material/IconButton';

const Modal = ({ open, closeModal, patient }) => {
  const dob = new Date(patient?.dob?.date).toLocaleDateString();
  return (
    <Dialog open={open}>
      <DialogTitle>
        <Image src={patient?.picture?.medium} />
        <Title>
          {patient?.name?.title}. {patient?.name?.first} {patient?.name?.last}
        </Title>
        <IconButton aria-label="close" onClick={() => closeModal()}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Wrapper>
          <Field>
            <strong>Gender:</strong> {patient?.gender}{' '}
          </Field>
          <Field>
            <strong>Birth:</strong>
            {dob}
          </Field>
          <Field>
            <strong>Phone:</strong>
            {patient?.phone}
          </Field>
          <Field>
            <strong>Country:</strong>
            {patient?.location?.country}
          </Field>
          <Field>
            <strong>Address:</strong>
            {patient?.location?.street?.name}
          </Field>
          <Field>
            <strong>Email:</strong>
            {patient?.email}
          </Field>
          <Field>
            <strong>Id:</strong>
            {patient?.id?.name}
          </Field>
        </Wrapper>
      </DialogContent>
    </Dialog>
  );
};

const Dialog = withStyles(() => ({
  paper: {
    overflowY: 'visible ',
    width: '500px',
  },
}))(MuiDialog);

const DialogTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
`;

const Image = styled.img`
  width: 150px;
  aspect-ratio: 1;

  margin-top: -75px;

  border-radius: 50%;
`;

const IconButton = withStyles(() => ({
  root: {
    position: 'absolute',
    top: '10px',
    right: '10px',
  },
}))(MuiIconButton);

const Title = styled.h1`
  font-family: Roboto;
  font-size: 2rem;
  font-weight: 700;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  justify-content: center;
`;

const Field = styled.span`
  font-size: 1rem;
  margin-right: 0.5rem;
`;

export default Modal;
