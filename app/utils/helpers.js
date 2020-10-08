import moment from 'moment';

export const api = 'http://localhost:3000/';

export function subtotal(items) {
  return items
    .map(({ orderPrice }) => orderPrice)
    .reduce((sum, i) => sum + i, 0);
}

export const formatVND = number => {
  return number.toLocaleString('vi', { style: 'currency', currency: 'VND' });
};
export const momentDateTime = date => {
  return moment(date).format('MM/DD/YYYY, h:mm');
};
