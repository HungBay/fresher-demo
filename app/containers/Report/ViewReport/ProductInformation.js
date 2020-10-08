import React, { memo } from 'react';
import PropTypes from 'prop-types';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import { formatVND } from 'utils/helpers';
import { compose } from 'redux';

ProductInformation.propTypes = {
  order: PropTypes.object,
};

function ProductInformation(props) {
  const { order } = props;

  return (
    <Paper className="Products">
      <Typography variant="h3" component="h3" gutterBottom>
        Thông tin sản phẩm
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className="col">#</TableCell>
            <TableCell className="col">Tên sản phẩm</TableCell>
            <TableCell className="col">Hình ảnh</TableCell>
            <TableCell className="col">Giá</TableCell>
            <TableCell className="col">Số lượng</TableCell>
            <TableCell className="col">Tiền</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {order &&
            order.products &&
            order.products.map((product, index) => (
              <TableRow hover key={index} className="Products__Information_Row">
                <TableCell className="col">
                  <span>{index}</span>
                </TableCell>
                <TableCell className="col">
                  <p>{product.name}</p>
                </TableCell>
                <TableCell className="col">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="products__image"
                  />
                </TableCell>
                <TableCell className="col">
                  <span>{formatVND(product.price)}</span>
                </TableCell>
                <TableCell className="col">
                  <span>{product.quantity}</span>
                </TableCell>
                <TableCell className="col">
                  <span>{formatVND(product.price * product.quantity)}</span>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan="5" className="col">
              Tổng tiền
            </TableCell>
            <TableCell className="col">{formatVND(10000)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan="5" className="col">
              Tổng tiền
            </TableCell>
            <TableCell className="col">{formatVND(10000)}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </Paper>
  );
}

export default compose(memo)(ProductInformation);
