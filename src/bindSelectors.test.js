import bindSelectors from './bindSelectors.js';

describe('bindSelectors', () => {
  it('should work', () => {
    const state = { a: 1 };
    const selectors = {
      getA: state => state.a,
      getB: state => state.b,
    };
    const binded = bindSelectors(selectors, state);
    expect(binded.getA).toBeInstanceOf(Function);
    expect(binded.getB()).toBe(undefined);
  });

  it('should work with 1 selector', () => {
    const state = { a: 1 };
    const selector = state => state.a;
    const binded = bindSelectors(selector, state);
    expect(binded).toBeInstanceOf(Function);
    expect(binded()).toBe(1);
  });

  it('should work', () => {
    expect(() => bindSelectors(null, 1)).toThrow();
  });
});
