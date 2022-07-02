import { funcA } from '@modules/funcA.js';
import { funcB } from '@modules/funcB.js';
import { funcC } from '@modules/funcC.js';
import { funcD } from '@modules/funcD.js';

// 実行時引数を受け取る
const name = process.argv[2] || '名無し';
const age = process.argv[3] || '0';
const birthDay = process.argv[4] || '0000-00-00';
const nickname = process.argv[5] || 'ニックネーム無し';

console.log(funcA(name));
console.log(funcB(age));
console.log(funcC(birthDay));
console.log(funcD(nickname));