/* eslint-disable no-undef */
const isLeapYear = require('./isLeapYear');

describe('test isLeapYear function', () => {
  it('2008 - true', () => {
    const result = isLeapYear(2008);
    expect(result).toBe(true);
  });

  it('2003 - false', () => {
    expect(isLeapYear(2003)).toBe(false);
  });

  it('41 - error Year must be 42 or more', () => {
    expect(() => isLeapYear(41)).toThrow('Year must be 42 or more');
  });

  it('2008.4 - error Year must be integer', () => {
    expect(() => isLeapYear(2008.4)).toThrow('Year must be integer');
  });

  it('() - error Year must be exist', () => {
    expect(() => isLeapYear()).toThrow('Year must be exist');
  });

  it('`2008` - error Year must be number', () => {
    expect(() => isLeapYear(`2008`)).toThrow('Year must be number');
  });

  it('true - error Year must be number', () => {
    expect(() => isLeapYear(true)).toThrow('Year must be number');
  });

  it('false - error Year must be number', () => {
    expect(() => isLeapYear(false)).toThrow('Year must be number');
  });

  it('()=>{} - error Year must be number', () => {
    expect(() => isLeapYear(() => {})).toThrow('Year must be number');
  });

  it('{} - error Year must be number', () => {
    expect(() => isLeapYear({})).toThrow('Year must be number');
  });

  it('[] - error Year must be number', () => {
    expect(() => isLeapYear([])).toThrow('Year must be number');
  });
});
