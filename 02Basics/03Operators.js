/* A Price Listing calculator that reflects
Selling Price Cost Price & Discount Percentage */

const itemListed = "JavaScript course";

const costPrice = 999;

//our course sells at 75% discount (pretty huge 😉) currently but might change in future.

var discountPercentage = 75;

var sellingPrice;

sellingPrice = costPrice -  (costPrice * (discountPercentage)/100);

console.log(Math.round(sellingPrice));


