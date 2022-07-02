
import {expect} from 'chai';
import * as mocha from 'mocha';
import { funcA } from '../built/modules/funcA.js';
import { funcB } from '../built/modules/funcB.js';
import { funcC } from '../built/modules/funcC.js';

// mochaをつかったテスト
describe('モジュールのテスト' , () => {
	it('funcAのテスト' , () => {
		const inputStr = '山田太郎';
		expect(funcA(inputStr)).to.equal('名前： 山田太郎');
	});
	it('funcBのテスト' , () => {
		const inputStr = '20';
		expect(funcB(inputStr)).to.equal('年齢: 20');
	});
	it('funcCのテスト' , () => {
		const inputStr = '2000-01-01';
		expect(funcC(inputStr)).to.equal('生年月日: 2000-01-01');
	});
});