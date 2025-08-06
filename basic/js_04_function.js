function add(a, b) {
    return a + b;
}

console.log(add(1, 2));
console.log(add(1));

// 기본값 매개변수
function add2(a, b = 0) {
    return a + b;
}

console.log(add2(1, 2));
console.log(add2(1));

// 나머지값 매개변수
function add3(...a) {
    let result = 0;

    for (let item of a) {
        result += item;
    }
    //result = a.reduce((total, x) => (total += x));
    return result;
}
console.log(add3(1, 2, 3));
console.log(add3(1, 2, 3, 4, 5, 6, 77));

// 전개구문
let arr = [1, 2, 3, 4, 5];
console.log(...arr);

let str = 'hello';
console.log(...str);

// 불변형 프로그래밍
const obj = { name: '홍길동', age: 20 }; // 불변형
const obj2 = { ...obj, age: 30, addr: '광주' };
console.log(obj, obj2);

// 함수지향형
function add4(a, b, ...fn) {
    let c = 0;
    fn.forEach((f) => (c += f(a, b)));
    return c;
}

console.log(
    add4(
        10,
        20,
        (a, b) => a + b,
        (a, b) => a - b,
        (a, b) => a * b,
    ),
);
