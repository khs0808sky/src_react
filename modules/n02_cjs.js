// default => 이름이 지정되지 않은 exort
const a1 = require('./cjs/cjs01.js'); // module => 1개만 export
console.log(a1);

const fnA2 = require('./cjs/cjs02.js'); // module => 1개만 export
fnA2();

const objA3 = require('./cjs/cjs03.js'); // module => 1개만 export
console.log(objA3.a);
objA3.fnA();

//named
const mA = require('./cjs/cjs04.js');
console.log(mA.a);
mA.fnA();

const { a, fnA } = require('./cjs/cjs04.js'); // 객체구조분해
console.log(a);
fnA();

const { m_a, m_fnA } = require('./cjs/cjs05.js');
const { m_a2 } = require('./cjs/cjs05.js');
console.log(m_a);
m_fnA();
console.log(m_a2);

if (a1 > 0) {
    const a2 = require('./cjs/cjs01.js');
    console.log(a2);
}
