function bindSelector(selector, state) {
  return function() {
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

  if (typeof selectors !== 'object' || selectors === null) {
    throw new Error(
      `bindSelectors expected an object or a function, instead received ${
        selectors === null ? 'null' : typeof selectors
      }. `,
    );
  }

  const keys = Object.keys(selectors);
  const boundSelectors = {};
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const selector = selectors[key];
    if (typeof selector === 'function') {
      boundSelectors[key] = bindSelectors(selector, state);
    }
  }
  return boundSelectors;
}
