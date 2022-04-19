import moment from 'moment';

export default {
 
  formatDateAndTime(date: any) {
    return moment(date).format('DD/MM/YYYY');
  },
  formatCurrency(wallet: any) {
    return Number(wallet).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  },
  formatDate(date: any) {
    return moment(date).format('YYYY-MM-DD');
  },
  currentDate() {
    return moment(new Date()).format('YYYY-MM-DD');
  },
  formattedCurrentDate() {
    return moment().format('YYYY-MM-DD');
  },
  formatTime(date: string) {
    return moment.utc(date).format('HH:mm:ss');
  },

};
