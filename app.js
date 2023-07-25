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
