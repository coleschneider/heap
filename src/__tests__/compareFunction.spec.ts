import { defaultCompareFunction } from '../utils/compareFunction';

describe('defaultCompareFunction', () => {
  it('should return true if the first integer is less than the second', () => {
    expect(defaultCompareFunction(5, 10)).toEqual(true);
  });
  it('should return false if the first integer is greater than the second', () => {
    expect(defaultCompareFunction(7, 4)).toEqual(false);
  });
  it('should return true if the first integer is equal to the second', () => {
    expect(defaultCompareFunction(9, 9)).toEqual(true);
  });
});
