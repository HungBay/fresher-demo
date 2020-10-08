import Paper from '@material-ui/core/Paper';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React, { memo, useEffect } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { makeSelectMenu } from './selectors';
import { getMenu } from './actions';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function Menu(props) {
  const classes = useStyles();
  const { getListMenu, listMenu } = props;

  useEffect(() => {
    getListMenu();
  }, []);

  return (
    <TableBody>
      {listMenu.map(row => (
        <StyledTableRow key={row.id}>
          <StyledTableCell align="right">{row.name}</StyledTableCell>
          <StyledTableCell align="right">{row.price}</StyledTableCell>
          <StyledTableCell align="right">{row.quality}</StyledTableCell>
        </StyledTableRow>
      ))}
    </TableBody>
  );
}

const mapStateToProps = createStructuredSelector({
  listMenu: makeSelectMenu(),
});

export function mapDispatchToProps(dispatch) {
  return {
    getListMenu: () => {
      dispatch(getMenu());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Menu);
