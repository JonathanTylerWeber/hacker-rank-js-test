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

function swapKeyAndValue(obj, swapKey) {
  const newObj = {};
  for (const [key, value] of Object.entries(obj)) {
    if (key === swapKey) {
      newObj[value] = key;
    } else {
      newObj[key] = value;
    }
  }
  return newObj;
}


