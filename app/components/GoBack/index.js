import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, Tooltip } from '@material-ui/core';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

GoBack.propTypes = {
  history: PropTypes.object,
};

function GoBack({ history }) {
  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <Tooltip title="Back" onClick={handleGoBack}>
      <IconButton aria-label="Back">
        <KeyboardBackspaceIcon />
      </IconButton>
    </Tooltip>
  );
}

export default GoBack;
