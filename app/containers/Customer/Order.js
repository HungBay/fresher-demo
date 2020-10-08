import { Input, List } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { default as React, memo, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { subtotal } from 'utils/helpers';
import { useHistory } from 'react-router-dom';
import { getMenu } from './actions';
import { makeSelectMenu } from './selectors';
const useStyles = makeStyles({
  table: {
    Width: '100%',
    minHeight: 100,
    marginTop: 30,
  },
});

function Order(props) {
  const { getListMenu, listMenu } = props;
  const total = subtotal(listMenu);
  const classes = useStyles();
  const [dataTable, setDataTable] = useState(listMenu);
  const history = useHistory();
  console.log(listMenu);
  useEffect(() => {
    getListMenu();
  }, []);

  const handClickRow = row => {
    const dataInRows = listMenu.filter(item => item.name === row.name)[0];
    if (!dataInRows.orderName) {
      dataInRows.orderName = row.name;
      dataInRows.orderMoney = row.money;
      dataInRows.orderQuantity = 1;
      dataInRows.orderPrice = dataInRows.orderMoney * dataInRows.orderQuantity;
      row.quantity -= 1;
    } else {
      dataInRows.orderQuantity += 1;
      dataInRows.orderPrice = dataInRows.orderMoney * dataInRows.orderQuantity;
      row.quantity -= 1;
    }

    const newRows = listMenu.map(item => {
      if (item.orderName === row.orderName) {
        return dataInRows;
      }
      return item;
    });
    if (row.quantity == 0 || row.quantity < 0) {
      alert('Mặt hàng này đã hết');
    }
    console.log(dataInRows);
    setDataTable(newRows);
    // const productSl = dataInRows.orderSl;
    // const product = Math.max.apply(productSl ,List)
    // console.log("this is product", product)
  };

  const OnFinish = () => {
    if (total === 0) {
      alert('bạn chưa chọn sản phẩm nào');
    } else {
      history.push('/customer');
      alert('mua hàng thành công');
    }
  };

  return (
    <>
      <div style={{ display: 'block', marginTop: 30 }}>
        Tên khách hàng
        <Input style={{ paddingLeft: 15 }} />
        Số điện thoại
        <Input style={{ paddingLeft: 15 }} />
        Địa chỉ
        <Input style={{ paddingLeft: 15 }} />
      </div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Button
                  variant="contained"
                  align="right"
                  size="small"
                  color="primary"
                >
                  In hóa đơn
                </Button>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">Tên sản phẩm</TableCell>
              <TableCell align="center">Giá sản phẩm</TableCell>
              <TableCell align="center">Số lượng</TableCell>
              <TableCell align="center">Giá tiền</TableCell>
              <TableCell align="center">Tên sản phẩm</TableCell>
              <TableCell align="center">Giá sản phẩm</TableCell>
              <TableCell align="center">số lượng hàng còn</TableCell>
              <TableCell align="center">Mua hàng</TableCell>
            </TableRow>
            {listMenu.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {' '}
                  {row.orderName}
                </TableCell>
                <TableCell align="center">{row.orderMoney}</TableCell>
                <TableCell align="center"> {row.orderQuantity}</TableCell>
                <TableCell align="center">{row.orderPrice}</TableCell>
                <TableCell align="center" component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.money}</TableCell>
                <TableCell align="center">{row.quantity}</TableCell>
                <TableCell align="center" onClick={() => handClickRow(row)}>
                  <a>+</a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={2}>Tổng tiền</TableCell>
              <TableCell align="right">{total}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        onClick={() => OnFinish()}
      >
        Mua hàng
      </Button>
    </>
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
)(Order);
