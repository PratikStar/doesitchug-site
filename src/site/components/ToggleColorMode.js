import * as React from 'react';
import PropTypes from 'prop-types';

import IconButton from '@mui/material/IconButton';
import ModeNightRoundedIcon from '@mui/icons-material/ModeNightRounded';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import {Fab} from "@mui/material";
import {styled} from "@mui/material/styles";


// Styled component for positioning the FAB
const StyledFab = styled(Fab)`
  position: fixed;
  bottom: ${({ theme }) => theme.spacing(4)};
  right: ${({ theme }) => theme.spacing(4)};
  z-index: 1000;
  box-shadow: ${({ theme }) => theme.shadows[4]};
  
  &:hover {
    cursor: pointer;
  }
`;
function ToggleColorMode({ mode, toggleColorMode, ...props }) {
  const handleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    toggleColorMode();
  };
  return (
      <StyledFab
          onClick={handleClick}
          size="small"
          aria-label="Theme toggle button"
          // color="primary"
          sx={{ pointerEvents: 'auto' }}
          {...props}
      >
        {mode === 'dark' ? (
            <WbSunnyRoundedIcon fontSize="small" />
        ) : (
            <ModeNightRoundedIcon fontSize="small" />
        )}
      </StyledFab>
  );
}

ToggleColorMode.propTypes = {
  mode: PropTypes.oneOf(['dark', 'light']).isRequired,
  toggleColorMode: PropTypes.func.isRequired,
};

export default ToggleColorMode;
