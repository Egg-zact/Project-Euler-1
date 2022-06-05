//This is Project Eueler 1

//Print start message
console.log("Start of Program");

//Start Function
function sumOfMultiples(upToNum) {
    let sum = 0;

    for(let i = 1; i < upToNum; i++) {
        let tmp3 = i / 3;
        let tmp5 = i / 5;
        if (Number.isInteger(tmp3) || Number.isInteger(tmp5)) {
            sum = sum + i
        }
    }
    return (sum);
}

const ans = sumOfMultiples(20);

//Print answer
console.log(ans);