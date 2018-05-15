import bindSelectors from './bindSelectors.js';

describe('bindSelectors', function () {
  it('should work', function () {
    var state = { a: 1 };
    var selectors = {
      getA: function getA(state) {
        return state.a;
      },
      getB: function getB(state) {
        return state.b;
      }
    };
    var binded = bindSelectors(selectors, state);
    expect(binded.getA).toBeInstanceOf(Function);
    expect(binded.getB()).toBe(undefined);
  });

  it('should work with 1 selector', function () {
    var state = { a: 1 };
    var selector = function selector(state) {
      return state.a;
    };
    var binded = bindSelectors(selector, state);
    expect(binded).toBeInstanceOf(Function);
    expect(binded()).toBe(1);
  });

  it('should work', function () {
    expect(function () {
      return bindSelectors(null, 1);
    }).toThrow();
  });
});