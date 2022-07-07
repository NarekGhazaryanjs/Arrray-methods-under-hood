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


// Array pop method under hood
// Array.prototype.myPop = function() {
//   const popedItem = this[this.length - 1];
//   this.length = this.length - 1;
//   return popedItem
// }

// const array = [1,5,10];
// let poped = array.myPop();



// Array push method
// Array.prototype.myPush = function(...items) {
//   for (let i = 0; i < items.length; i++) {
//     this[this.length] = items[i]
//   }
// }

// let array = [5];
// array.myPush(6, 8);


// Array indexof method under hood
Array.prototype.myIndexOf = function(item) {
    let index = -1
    for(let i = 0; i < this.length; i++) {
        if(this[i] === item) {
            index = i
            return index
        }
    }
    return index
}

const arr = [1,8,5,5,5];
console.log(arr.myIndexOf(10))


