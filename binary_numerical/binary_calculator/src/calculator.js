function binaryToDecimal(binary) {
    const binaryArray = binary.toString().split("").map(Number);
    const reverseBinary = binaryArray.reverse();
    console.log(reverseBinary);
    let result = 0;
    for (let i = 0; i < reverseBinary.length; i++) {

        switch (i) {
            case 0:
                console.log(result);
                if (reverseBinary[i] != 0) {
                    result += 1;
                    console.log("position 0 =", result);
                }
                break;
            case 1:
                console.log(result);
                if (reverseBinary[i] != 0) {
                    result += 2;
                    console.log("position 1 =", result);
                }
                break;
            case 2:
                console.log(result);
                if (reverseBinary[i] != 0) {
                    result += 4;
                    console.log("position 2 =", result);
                }
                break;
            case 3:
                console.log(result);
                if (reverseBinary[i] != 0) {
                    result += 8;
                    console.log("position 3 =", result);
                }
                break;
            case 4:
                console.log(result);
                if (reverseBinary[i] != 0) {
                    result += 16;
                    console.log("position 4 =", result);
                }
                break;
            case 5:
                console.log(result);
                if (reverseBinary[i] != 0) {
                    result += 32;
                    console.log("position 5 =", result);
                }
                break;
            case 6:
                console.log(result);
                if (reverseBinary[i] != 0) {
                    result += 64;
                    console.log("position 6 =", result);
                }
                break;
            case 7:
                console.log(result);
                if (reverseBinary[i] != 0) {
                    result += 128;
                    console.log("position 7 =", result);
                }
                break;
            default:
                console.log(`Error calculating decimal number.`);
        }
        console.log(result);
    }
}

binaryToDecimal(100101);
