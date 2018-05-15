var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function bindSelector(selector, state) {
  return function () {
    return selector(state);
  };
}

/**
 * Work just like bindActionCreators but for selectors.
 * This entire file was actually copied and modified from
 * redux/src/bindActionCreators.js
 */
export default function bindSelectors(selectors, state) {
  if (typeof selectors === 'function') {
    return bindSelector(selectors, state);
  }

  if ((typeof selectors === 'undefined' ? 'undefined' : _typeof(selectors)) !== 'object' || selectors === null) {
    throw new Error('bindSelectors expected an object or a function, instead received ' + (selectors === null ? 'null' : typeof selectors === 'undefined' ? 'undefined' : _typeof(selectors)) + '. ');
  }

  var keys = Object.keys(selectors);
  var boundSelectors = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var selector = selectors[key];
    if (typeof selector === 'function') {
      boundSelectors[key] = bindSelectors(selector, state);
    }
  }
  return boundSelectors;
}