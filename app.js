/* 
// const, let, var
const a = 10; //const는 재할당 X, 자주 사용됨
const b = 2;
var c = 15; //var은 재할당 O, var의 단점을 보완하고자 const와 let을 사용
let myName = "Cindy"; //let은 재할당 O, 필요할 때만 사용됨

console.log(a + b); //12
console.log(a * b); //20
console.log(a / b); //5
console.log("현재 c의 값은 " + c); //15
console.log("안녕, " + myName); //Cindy

c = 20
myName = "cindY";
console.log("업데이트된 c의 값은 " + c); //20
console.log("너의 이름은 " + myName + "?"); //cindY
*/

/*--------------------------------------------------*/

/*
// Booleans 
const amIFat = true;
const abc = null;
let something;
console.log(amIFat); //true, 문자열 "true"와는 다름
console.log(null); //null, 값이  없음을 지정함
console.log(something); //undefined, 값이 정의되지 않음 
*/

/* 
// Arrays
const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri"]; //[0]부터 시작
console.log(daysOfWeek[0]); //Get Item from Array //출력: Sun
daysOfWeek.push("Sat"); //Add one more day to the array
console.log(daysOfWeek); //출력: [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ]

const toBuy = ["potato", "tomato", "pizza"];
toBuy.push("kimbab");
console.log(toBuy); //출력: [ 'potato', 'tomato', 'pizza' ]
console.log(toBuy[3]); //출력: kimbab
console.log(toBuy[4]); //출력: undefined -> 배열은 [0]부터 시작하므로 현재 마지막 값은 [3]
 */

/* 
//Objects
const player = {
    name: "cindy",
    points: 10,
    fat: true
};
console.log(player); //{name: 'cindy', points: 10, fat: true}
console.log(player.name); //cindy
console.log(player["name"]); //위와 동일한 결과

player.fat = false; //const는 수정 불가, 그 안의 object는 수정 가능
console.log(player);

player.lastName = "gamza"; //object 추가
player.points = player.points + 10; //player.points에 10 더하기 -> 10 + 10 == 20
console.log(player); //{name: 'cindy', points: 20, fat: false}
 */

/* 
// Functions part(1)
function sayHello(){
    console.log("Hello my name is A");
}

alert(); //비어 있는 팝업창 뜸
sayHello(); //Hello my name is A
sayHello(); //Hello my name is A
sayHello(); //Hello my name is A
 */

/* 
// Functions part(2)
function sayHello(nameOfPerson, age){
    console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}
sayHello("cindy", 10); //Hello my name is cindy and I'm 10
sayHello("abc", 55); //Hello my name is abc and I'm 55

function plus(firstNumber, secondNumber){
    console.log( firstNumber + secondNumber );
}
function divide(a, b){
    console.log(a / b);
}
plus(8, 60); //68
divide(98, 20); //4.9

const player = {
    name: "happy",
    sayHello: function(otherPersonsName){
        console.log("Hello, " + otherPersonsName + " nice to meet you!");
    }
};
console.log(player.name); //happy
player.sayHello("joy"); //Hello, joy nice to meet you!

function plus(a, b){
    console.log(a+b); 
}
plus(5, 5); //10
 */


//Recap
const toBuy = ["abc", "ha", "pizza"];
console.log(toBuy); //['abc', 'ha', 'pizza']

toBuy[2] = "water";
console.log(toBuy); //['abc', 'ha', 'water'] //pizza 자리에 water로 변경

toBuy.push("meat");
console.log(toBuy); //['abc', 'ha', 'water', 'meat'] //meat 추가