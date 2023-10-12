/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

//All the data
var trans={
  transaction1:{
  itemName:'nike airjordan1',
  category:'shoes',
  price:1
},
  transaction2:{
  itemName:'nike airjordan2',
  category:'shoes',
  price:2
},
  transaction3:{
  itemName:'shirt1',
  category:'shirt',
  price:3
  },
   transaction4:{
   itemName:'shirt2',
  category:'shirt',
  price:4
  },
   transaction5:{
   itemName:'pant1',
  category:'pant',
  price:5
  },
   transaction6:{
   itemName:'pant2',
  category:'pant',
  price:6
  }
}


function calculateTotalSpentByCategory(transactions) {
  //create an empty object
  var obj={};
  //check for every key in transactions which is transaction1,2,3 and so on
  for(var key in transactions){
    var number=transactions[key];
    //if category exist then it will add the price else it will create one and put the price in that key
    if(obj[number.category])
      obj[number.category]+=number.price;
    else
      obj[number.category]=number.price;
  }
  console.log(obj);//here we will have an object
  //object.keys will return an array with keys only and map function will take an array and create a new array
  var arr=Object.keys(obj).map((cat)=>{
    var obj1={};
    obj1[cat]=obj[cat];
    return obj1;
  });
  return arr;
}
console.log(calculateTotalSpentByCategory(trans));






