import {expect} from 'chai';
import * as _mocha from 'mocha';

import { funcA } from '../built/modules/funcA.js';
import { funcB } from '../built/modules/funcB.js';
import { funcC } from '../built/modules/funcC.js';
import { funcD } from '../built/modules/funcD.js';

// mochaを利用したテストコード
describe('モジュール群のテスト', () => {
	it('funcAのテスト', () => {
		const inputStr = '山田太郎';
		expect(funcA(inputStr)).to.equal('名前: 山田太郎');
	});
	it('funcBのテスト', () => {
		expect(funcB('20')).to.equal('年齢: 20歳');
	});
	it('funcCのテスト', () => {
		expect(funcC('2000-01-01')).to.equal('生年月日: 2000-01-01');
	});
	it('funcDのテスト', () => {
		expect(funcD('にんじん')).to.equal('ニックネーム: にんじん');
	});
});
