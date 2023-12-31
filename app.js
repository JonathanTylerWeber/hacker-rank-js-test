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


// old version length is number of indexes to move over
// function slice(arr, index, len) {
//     const newArray = [];
//     const end = Math.min(index + len, arr.length - index)
//     for ( let i = index; i < index + end; i++){
//         newArray.push(arr[i]);
//     }
//     return newArray
// }

function slice(arr, index, len) {
    const newArray = [];
    const end = Math.min(len, arr.length)
    for ( let i = index; i < end; i++){
        newArray.push(arr[i]);
    }
    return newArray
}
// slice([1,2,3,4,5,6,7,8,9])

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
// function twoHighest(arr) {
//     let x = -Infinity;
//     let y = -Infinity;
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] > x){
//             y = x
//             x = arr[i];
//         } 
//         if (arr[i] > y && arr[i] < x){
//             y = arr[i];
//         }
//     }
//     return [y, x]
// }
// twoHighest([1,2,3,4,5,6,7,8,9])

function twoHighest(arr) {
    if (arr.length < 2) {
        return arr;
    }
    let highest = [Math.min(...arr), Math.min(...arr)];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > highest[0]) {
            highest[1] = highest[0];
            highest[0] = arr[i];
        } 
        else if (arr[i] >= highest[1] && arr[i] < highest[0]) {
            highest[1] = arr[i];
        } 
        else if (arr[i] === highest[0]) {
            highest[1] = highest[0];
        }
    }
    return [highest[1], highest[0]];
}

function minMaxKeyInObject(obj) {
    let min = Infinity;
    let max = -Infinity;
    let arr = [min, max];
    for (let i in obj){
        i = Number(i);
        if (i < min){
            min = i;
        }
        if (i > max){
            max = i;
        }
    }
    return [min, max];
}
// minMaxKeyInObject({1:'a', 2:'b', 3:'c',4:'d'})
 
function stringFromObject(obj) {
    let str = '';
    let keys = Object.keys(obj);
    keys.forEach((key, index) => {
      str += `${key} = ${obj[key]}`;
      if (index < keys.length - 1) {
        str += ', ';
      }
    });
    return str;
  } 
// stringFromObject({1:'a', 2:'b', 3:'c',4:'d'})

function countNumbers(arr) {
    let numCount = 0;
    for (let i = 0; i < arr.length; i++){
        if (isNaN(Number(arr[i])) === false){
            numCount += 1;
        }
    }
    return numCount
}
// countNumbers([1,2,3,'apple'])