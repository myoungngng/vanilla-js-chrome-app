// console.log로 calculator 구현(덧셈, 뺄셈, 나눗셈, 곱셈, 거듭제곱)
const calculator = {
    add(a, b) {
    //add: function (a, b) {
        alert(`${a}과 ${b}의 합은 ${a + b} 입니다.`); // 경고 메시지로 결과 출력
        //console.log(`${a}과 ${b}의 합은 ${a + b} 입니다.`); // 콘솔창으로 결과 출력
    },

    subtract(a, b) {
    //subtract: function (a, b) {
        console.log(`${a}과 ${b}의 차는 ${a - b}입니다.`);
    },

    divide(a, b) {
    //divide: function (a, b) {
        console.log(`${a}과 ${b}를 나눈 값은 ${a / b}입니다.`);
    },

    multiply(a, b) {
    //multiply: function (a, b) {
        console.log(`${a}과 ${b}의 곱은 ${a * b}입니다.`);
    },

    power(a, b) {
    //power: function (a, b) {
        console.log(`${a}의 ${b}제곱은 ${a ** b}입니다.`);
    },
};

// console.log(calculator.add(10, 5));
calculator.add(10, 5);
calculator.subtract(10, 5);
calculator.divide(10, 5);
calculator.multiply(10, 5);
calculator.power(10, 5);