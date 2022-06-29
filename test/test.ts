import {expect} from 'chai';
import * as _mocha from 'mocha';
import { funcA } from '../built/modules/funcA.js';
import { funcB } from '../built/modules/funcB.js';
import { funcC } from '../built/modules/funcC.js';
// mochaを利用したテストコード
describe('モジュール群のテスト', () => {
	it('funcAのテスト', () => {
		funcA('山田太郎');
		expect(funcA('山田太郎')).to.equal('名前: 山田太郎');
	});
	it('funcBのテスト', () => {
		expect(funcB('20')).to.equal('年齢: 20歳');
	});
	it('funcCのテスト', () => {
		expect(funcC('2000-01-01')).to.equal('生年月日: 2000-01-01');
	});
});
