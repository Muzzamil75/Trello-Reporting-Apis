// Functions for checking if date exists between the two dates
const checkDateRange = (dateFrom, dateTo, dateToCheck) => {
  var dateFrom  = new Date(dateFrom);
  var dateTo = new Date(dateTo);
  var dateCheck = new Date(dateToCheck);

  var from = new Date(
    dateFrom.getFullYear(),
    dateFrom.getMonth() - 1,
    dateFrom.getDate(),
  );
  var to = new Date(
    dateTo.getFullYear(),
    dateTo.getMonth() - 1,
    dateTo.getDate(),
  );
  var check = new Date(
    dateCheck.getFullYear(),
    dateCheck.getMonth() - 1,
    dateCheck.getDate(),
  );
  return check > from && check < to;
};

// check if ComparisonWith-date is greater then dateTocheck and returns true
const DateIsGreater = (comparisonWith,  dateToCheck) => {
  var comparisonWith  = new Date(comparisonWith);
  var dateCheck = new Date(dateToCheck);

  var from = new Date(
    comparisonWith.getFullYear(),
    comparisonWith.getMonth() - 1,
    comparisonWith.getDate(),
    comparisonWith.getHours(),
    comparisonWith.getMinutes(),
    comparisonWith.getSeconds(),
  );
 
  var check = new Date(
    dateCheck.getFullYear(),
    dateCheck.getMonth() - 1,
    dateCheck.getDate(),
    dateCheck.getHours(),
    dateCheck.getMinutes(),
    dateCheck.getSeconds(),
  );
  var result = from > check;
  return result
};

export { checkDateRange ,DateIsGreater} ;