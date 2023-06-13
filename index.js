var customerName = "bob";

var upperCaseCustomerName = function () {
  customerName = customerName.toUpperCase();
};

var setBestCustomer = function () {
  bestCustomer = "not bob";
};

var overwriteBestCustomer = function () {
  bestCustomer = "maybe bob";
};

const leastFavoriteCustomer = "Jojo";

var changeLeastFavoriteCustomer = function () {
  leastFavoriteCustomer = leastFavoriteCustomer.toLocaleUpperCase();
};
