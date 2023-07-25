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

}