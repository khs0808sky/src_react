// 배열
let ary = [100, 200, 300, 400, 500];

for (let i = 0; i < ary.length; i++) {
    console.log(ary[i]);
}

for (let i in ary) {
    // index
    console.log(ary[i]);
}

let obj = {
    a: 100,
    b: 200,
    c: 300,
};

for (let item of ary) {
    console.log(item);
}

ary.forEach(function (item) {
    console.log(item);
});

ary.forEach((item) => console.log(item)); // 화살표 함수
ary.map((x) => x * 2).forEach((item) => console.log(item));
// map, filter, reduce, some, every
let total = ary.filter((x) => x >= 300).reduce((tot, x) => (tot += x));
console.log(total);

let result = ary.some((x) => x >= 500);
console.log(result);

// while문 직접확인
