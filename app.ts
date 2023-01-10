//서로 다른 두 종류의 값을 사용해야 하는 애플리케이션에서//함수나 상수 혹은 변수의 매개변수를 사용해야 한다면 유니언 타입을 사용

function combine(input1: number | string, input2: number | string) {
  let result;
  //런타입 타입 검사
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combineAges = combine(30, 26);
console.log(combineAges);

const combineNames = combine("Max", "Anna");
console.log(combineNames);
