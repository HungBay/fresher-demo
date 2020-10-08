import moment from 'moment';

export const api = 'http://localhost:3000/';

export function subtotal(reports) {
  let sum = 0;
  reports.forEach(element => {
    if (element && element.total) {
      sum += element.total;
    }
  });
  return sum;
}

export const formatVND = number => {
  return number.toLocaleString('vi', { style: 'currency', currency: 'VND' });
};
export const momentDateTime = date => {
  return moment(date).format('MM/DD/YYYY, h:mm');
};

export function totalReportOfDay(orders) {
  const dateNow = moment().format('YYYY-MM-DDT00:00');

  if (orders) {
    const filterOrder = orders.filter(x => x.orderDate >= dateNow);
    if (filterOrder) {
      return formatVND(subtotal(filterOrder));
    }
    return formatVND(0);
  }
  return formatVND(0);
}

export function totalOrderOfDay(orders) {
  const dateNow = moment().format('YYYY-MM-DDT00:00');

  if (orders) {
    const filterOrder = orders.filter(x => x.orderDate >= dateNow);
    if (filterOrder) {
      return filterOrder.length;
    }
    return 0;
  }
  return 0;
}
