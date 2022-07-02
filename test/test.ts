import {expect} from 'chai';
import * as _mocha from 'mocha';

import { funcA } from '../built/modules/funcA.js';
import { funcB } from '../built/modules/funcB.js';
import { funcC } from '../built/modules/funcC.js';

describe('モジュールのテスト', () => {
	it('funcAのテスト', () => {
		const inputStr = '迫　竜乃介';
		expect(funcA(inputStr)).to.equal('名前: 迫　竜乃介');
	});
	it('funcBのテスト', () => {
		const inputStr = '22';
		expect(funcB(inputStr)).to.equal('年齢: 22歳');
	});
	it('funcCのテスト', () => {
		const inputStr = '2000-06-17';
		expect(funcC(inputStr)).to.equal('生年月日: 2000-06-17');
	});
});