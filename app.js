function combine(input1, input2) {
    var result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combineAges = combine(30, 26);
console.log(combineAges);
var combineNames = combine("Max", "Anna");
console.log(combineNames);
//서로 다른 두 종류의 값을 사용해야 하는 애플리케이션에서//함수나 상수 혹은 변수의 매개변수를 사용해야 한다면 유니언 타입을 사용
