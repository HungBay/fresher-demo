import React, { memo } from 'react';
import PropTypes from 'prop-types';
import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
} from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { momentDateTime } from 'utils/helpers';
import { Link as routerLink } from 'react-router-dom';
import { compose } from 'redux';

ReportTable.propTypes = {
  reportData: PropTypes.array,
};

function ReportTable({ reportData }) {
  console.log('renderTable');
  const renderTable = res => {
    let xhtml = null;

    if (res && res.id) {
      xhtml = (
        <TableRow hover style={{ cursor: 'pointer' }} key={res.id}>
          <TableCell className="fs_13">{res.id}</TableCell>
          <TableCell className="fs_13">{res.name}</TableCell>
          <TableCell className="fs_13">{res.address}</TableCell>
          <TableCell className="fs_13">{res.address}</TableCell>
          <TableCell className="fs_13">
            {momentDateTime(res.orderDate)}
          </TableCell>
          <TableCell>
            <Tooltip
              title="View"
              component={routerLink}
              to={`/view/${res.id}`}
              className="View__Button"
            >
              <IconButton aria-label="view">
                <VisibilityIcon />
              </IconButton>
            </Tooltip>
          </TableCell>
        </TableRow>
      );
    }
    return xhtml;
  };
  return (
    <div>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className="fs_13">#</TableCell>
            <TableCell className="fs_13">Tên khách hàng</TableCell>
            <TableCell className="fs_13">Địa chỉ</TableCell>
            <TableCell className="fs_13">Số điện thoại</TableCell>
            <TableCell className="fs_13">Ngày đặt</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {reportData.map(result => {
            return renderTable(result);
          })}
        </TableBody>
      </Table>
    </div>
  );
}

export default compose(memo)(ReportTable);
