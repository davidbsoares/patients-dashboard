import { useState } from 'react';
import styled from 'styled-components';

import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';

import { FormControlLabel, Checkbox, MenuItem } from '@mui/material';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { usePatients } from '../../context/patients';

const Filter = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const { gender, setGender } = usePatients();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <StyledButton
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Gender
      </StyledButton>
      <StyledMenu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <FormControl component="fieldset" variant="standard">
          <FormGroup>
            <StyledMenuItem>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={gender === 'male'}
                    onChange={() => setGender('male')}
                    name={gender}
                  />
                }
                label="Male"
              />
            </StyledMenuItem>
            <StyledMenuItem>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={gender === 'female'}
                    onChange={() => setGender('female')}
                    name={gender}
                  />
                }
                label="Female"
              />
            </StyledMenuItem>
            <StyledMenuItem>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={gender === 'both'}
                    onChange={() => setGender('both')}
                    name={gender}
                  />
                }
                label="Both"
              />
            </StyledMenuItem>
          </FormGroup>
        </FormControl>
      </StyledMenu>
    </>
  );
};

const StyledButton = styled(Button)`
  &.MuiButton-root {
    width: 135px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: Source Sans Pro;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.2569rem;

    box-shadow: 2px 2px 2px rgba(33, 33, 33, 0.1);
    border-radius: 4px;

    text-transform: capitalize;

    color: black;
    margin: 1rem auto;
  }
`;

const StyledMenu = styled(Menu)`
  left: 0;
  && .MuiMenu-paper {
    max-width: 100%;
  }
`;

const StyledMenuItem = styled(MenuItem)`
  padding-top: 0;
  padding-bottom: 0;

  &.MuiMenuItem-root label {
    width: 100%;
  }
  &.MuiMenuItem-root * {
    font-family: Source Sans Pro;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.2569rem;
  }
`;

export default Filter;
