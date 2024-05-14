const { arrayBuffer } = require("stream/consumers");

var purchases = [
  {
    item: 'Carrot',
    units: 20,
  },
  {
    item: 'Apple',
    units: 2,
  },
  {
    item: 'Guava',
    units: 1,
  },
];
var rates = {
  Carrot: 10,
  Apple: 200,
  Guava: 50,
};

var discounts = {
  // values are in percentages.
  Apple: 10,
};

var taxes = {
  // values are in percentages.
  Carrot: 5,
  Guava: 10,
  Apple: 5,
};
// const discount percentage
// const getTaxPercent 
// const getDiscountPercent
// const getUnitPrice  
     // discountamount  & taxAmount 
// const getLineItemPrice     
     //get unit price and multiply it by no of units                                                               
// const getSum = () => 
     // iterate all purchases by reduceMethod
/*  const main =() => {
 console.log(getSum());
 };

 main(); */
const LineItemPrice={};
const unitprice={};
const discount = function(item,units){
  const totalPrice = units*rates[item];
  return (!discounts[item])? totalPrice : totalPrice - totalPrice*discounts[item]/100;
};

const Taxpercent = function(item,discountprice){
  return (taxes[item])? discountprice+discountprice*taxes[item]/100 : 0;
}

const getUnitPrice = function(item){
  const price = (!discounts[item])? rates[item] : rates[item] - rates[item]*discounts[item]/100;
  const tax = (taxes[item])? price+price*taxes[item]/100 : 0;
  return tax; 
}


const main= purchases.reduce((accumulator,purchase)=>{
    const discountPrice = discount(purchase.item,purchase.units);
    const taxAmt = Taxpercent(purchase.item,discountPrice);
    unitprice[purchase.item] = getUnitPrice(purchase.item);
    LineItemPrice[purchase.item] = unitprice[purchase.item]*purchase.units;
return {totaldiscountPrice:accumulator.totaldiscountPrice+discountPrice,
        totalTax:accumulator.totalTax+taxAmt};},{totaldiscountPrice: 0, totalTax:0});
console.log(main);
console.log(unitprice);
console.log(LineItemPrice);