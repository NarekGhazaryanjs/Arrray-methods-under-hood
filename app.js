// Array methods under hood


// Array foreach method under hood
// Array.prototype.myForEach = function(callback) {
//  for (let i = 0; i < this.length; i++) {
//     callback(this[i], i, this)
//  }
// }

// let array = [1,2,3];
// array.myForEach((el,i,array) => {
//     return array[i] = el * 15
// })


// Array map method under hood
// Array.prototype.myMap = function(callback) {
//  let mapedArray = [];
//  for (let i = 0; i < this.length; i++) {
//    let mapedItems =  callback(this[i], i, this);
//    mapedArray.push(mapedItems)
//  }
//  return mapedArray
// }

// let array = [1,2,3];
// let maped = array.myMap(el => el  * 10)



