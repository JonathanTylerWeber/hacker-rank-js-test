function repeat(str, multiplier){
    let strSum = "";
    for (let i= 0; i < multiplier; i++ ){
        strSum += str;
    }
    return strSum
}

function removeFromString(str, index, count) {
    let modifiedStr = str.slice(0, index) + str.slice(index + count);
    return modifiedStr;
}

function reverse(arr) {
    for (let i = 0; i < Math.floor(arr.length / 2); i++){
        let x = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = x;
    }
    return arr
}

function min(arr) {
    let lowest = arr[0]
    for (let i = 1; i < arr.length; i++){
        if (lowest > arr[i]){
            lowest = arr[i];
        }
    }
    return lowest
}


// come back to this?
function slice(arr, index, len) {
    const newArray = [];
    const end = Math.min(index + len, arr.length - index)
    for ( let i = index; i < index + end; i++){
        newArray.push(arr[i]);
    }
    return newArray
}

function keys(obj){
    return Object.getOwnPropertyNames(obj);
}

function values(obj) {
    const values = [];
    for (let key in obj) {
        values.push(obj[key]);
    }
    return values;
}

// function swapKeyAndValue(obj, swapKey) {
//   const newObj = {};
//   for (const [key, value] of Object.entries(obj)) {
//     if (key === swapKey) {
//       newObj[value] = key;
//     } else {
//       newObj[key] = value;
//     }
//   }
//   return newObj;
// }

function swapKeyAndValue(obj, swapKey) {
  const newObj = {};
  for (let i in obj) {
    if (i === swapKey) {
      newObj[obj[i]] = i;
    } else {
      newObj[i] = obj[i]
    }
  }
  return newObj;
}

function multiples(x, n) {
    let sum = x;
    let arr = [x];
    for (let i = 1; i < n; i++){
        sum += x;
        arr.push(sum);
    }
    return arr
}

// my function
// function pluck(arr, key) {
//     result = [];
//     for (let i = 0; i < arr.length; i++)
//     if (key in arr[i]) {
//         result.push(arr[i][key]);
//       } else {
//         result.push(-1);
//     }
//     return result;
// }

// function for hackerrank
function pluck(obj, value) {
    let result = [];
    for (let i = 0; i < obj.length; i++)
    if (value in obj[i]) {
        result.push(obj[i][value]);
      } else {
        result.push(-1);
    }
    return result;
}
// pluck([{a:1,b:2}, {a:3,b:4}], 'a')

// x = highest, y = second highest
function twoHighest(arr) {
    let x = -Infinity;
    let y = -Infinity;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > x){
            y = x
            x = arr[i];
        } 
        if (arr[i] > y && arr[i] < x){
            y = arr[i];
        }
    }
    return [y, x]
}
// twoHighest([1,2,3,4,5,6,7,8,9])
