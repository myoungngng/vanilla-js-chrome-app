const calculator = {
    add(a, b) {
        //console.log("Hello"); // 이 줄은 출력되지만
        return a + b;
        //console.log("Bye"); // 이 줄은 출력되지 않음. return문 다음에는 출력 x.
    },

    subtract(a, b) {
        return a - b;
    },

    divide(a, b) {
        return a / b;
    },

    multiply(a, b) {
        return a * b;
    },

    power(a, b) {
        return a ** b;
    },
};

const addResult = calculator.add(10, 5); // 15
const subtractResult = calculator.subtract(addResult, 13); // 2
const divideResult = calculator.divide(130, subtractResult); // 65
const multiplyResult = calculator.multiply(divideResult, addResult); // 975
const powerResult = calculator.power(multiplyResult, subtractResult); // 950,625

/*
const age = 95;
function calculatorKrAge(ageOfForeigner) {
    return ageOfForeigner + 2;
}

const krAge = calculatorKrAge(age);

console.log(krAge);
*/