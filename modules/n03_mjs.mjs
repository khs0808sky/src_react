// default => 이름이 지정되지 않은 export
import a1 from './esm/esm01.mjs';
console.log(a1);

import fnA2 from './esm/esm02.mjs';
fnA2();

import objA3 from './esm/esm03.mjs';
console.log(objA3.a);
objA3.fnA();

//named
import * as mA from './esm/esm04.mjs';
console.log(mA.a);
mA.fnA();

import { a, fnA } from './esm/esm04.mjs'; // 객체구조분해할당
console.log(a);
fnA();

import { a as a2, fnA as fnA3 } from './esm/esm04.mjs'; // 객체구조분해할당
console.log(a2);
fnA3();

import { m_a, m_fnA, m_a2 } from './esm/esm05.mjs';
console.log(m_a);
m_fnA();
