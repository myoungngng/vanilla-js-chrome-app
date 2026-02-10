function plus(apple) {
    console.log(apple - 5);
}
// console.log(apple - 1); // apple은 지역 변수여서 함수 plus 밖에서는 접근 불가
plus(50, 10, 12, 34, 15, 48, 5 ,6, 4); //첫 번째 argument만 받아서 45 출력

/*
function plus(apple, banana) {
    console.log(apple + banana);
}

plus(5, 10);
plus(5.45135, 48110);
plus(0.01, 4);

const player = {
    name: "gil-dong",
    age: 98,
};
console.log(player);
player.name = "myoung";
console.log(player);
player.cute = "me";
console.log(player, console);
*/