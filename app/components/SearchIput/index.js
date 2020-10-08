import { Input, makeStyles, Paper } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import React from 'react';
import './SearchInput.css';
import SearchIcon from '@material-ui/icons/Search';

SearchInput.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  // className: PropTypes.object,
  style: PropTypes.object,
};

const useStyles = makeStyles(theme => ({
  // root: {
  //   borderRadius: '4px',
  //   alignItems: 'center',
  //   // padding: theme.spacing(1),
  //   display: 'flex',
  //   flexBasis: 420,
  // },
  SearchInput: {
    flexBasis: 420,
    flexGrow: 1,

    lineHeight: '16px',
  },
  icon: {
    marginRight: theme.spacing(1),
    color: theme.palette.text.secondary,
  },
}));
function SearchInput({
  type,
  placeholder,
  value,
  name,
  onChange,
  className,
  style,
  ...rest
}) {
  const classes = useStyles();
  const handleChange = evt => {
    evt.preventDefault();
    onChange(evt.target.value);
  };

  return (
    <div>
      <SearchIcon className={classes.icon} />
      <Input
        {...rest}
        type={type}
        placeholder="Search...."
        // className={classes.SearchInput}
        onChange={handleChange}
        className={className}
      />
    </div>
  );
}

export default SearchInput;
