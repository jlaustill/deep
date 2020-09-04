import deepUtils from '../index';

describe('deepUtils', () => {
    it('should have the things', () => {
        expect(deepUtils.setAllByValue).toBeTruthy();
        expect(deepUtils.findAllByValue).toBeTruthy();
    })
});
