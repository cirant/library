import React, { createRef, useState } from 'react';
import Tippy from '@tippyjs/react';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}var AsyncMode=l;var ConcurrentMode=m;var ContextConsumer=k;var ContextProvider=h;var Element=c;var ForwardRef=n;var Fragment=e;var Lazy=t;var Memo=r;var Portal=d;
var Profiler=g;var StrictMode=f;var Suspense=p;var isAsyncMode=function(a){return A(a)||z(a)===l};var isConcurrentMode=A;var isContextConsumer=function(a){return z(a)===k};var isContextProvider=function(a){return z(a)===h};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};var isForwardRef=function(a){return z(a)===n};var isFragment=function(a){return z(a)===e};var isLazy=function(a){return z(a)===t};
var isMemo=function(a){return z(a)===r};var isPortal=function(a){return z(a)===d};var isProfiler=function(a){return z(a)===g};var isStrictMode=function(a){return z(a)===f};var isSuspense=function(a){return z(a)===p};
var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};var typeOf=z;

var reactIs_production_min = {
	AsyncMode: AsyncMode,
	ConcurrentMode: ConcurrentMode,
	ContextConsumer: ContextConsumer,
	ContextProvider: ContextProvider,
	Element: Element,
	ForwardRef: ForwardRef,
	Fragment: Fragment,
	Lazy: Lazy,
	Memo: Memo,
	Portal: Portal,
	Profiler: Profiler,
	StrictMode: StrictMode,
	Suspense: Suspense,
	isAsyncMode: isAsyncMode,
	isConcurrentMode: isConcurrentMode,
	isContextConsumer: isContextConsumer,
	isContextProvider: isContextProvider,
	isElement: isElement,
	isForwardRef: isForwardRef,
	isFragment: isFragment,
	isLazy: isLazy,
	isMemo: isMemo,
	isPortal: isPortal,
	isProfiler: isProfiler,
	isStrictMode: isStrictMode,
	isSuspense: isSuspense,
	isValidElementType: isValidElementType,
	typeOf: typeOf
};

var reactIs_development = createCommonjsModule(function (module, exports) {



if (process.env.NODE_ENV !== "production") {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}
});

var reactIs = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min;
} else {
  module.exports = reactIs_development;
}
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning$1 = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning$1(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning$1(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning$1(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = objectAssign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

var icons = {"size-1":"_E20oA","size-2":"_1LAUs","size-3":"_3tmzu","size-4":"_f8f2b","size-5":"_3WQf-","size-6":"_325my","size-7":"_vbJDw","size-8":"_HfeIC","icon-alert":"_1sBsM","icon-line-alarm":"_2RIcO","icon-line-alert":"_3KOrG","icon-line-app-notification":"_RJ0_m","icon-line-block":"_1g4pS","icon-line-bookmark":"_2GpnG","icon-line-bug":"_3AZWC","icon-line-check-double":"_3wnRC","icon-line-check":"_18ly6","icon-line-cloud-disable":"_1ysM1","icon-line-cloud-download":"_1Da4J","icon-line-cloud-upload":"_1x9gk","icon-line-cloud":"_2BF9r","icon-line-cogwheel":"_4L5xo","icon-line-copy":"_2UUan","icon-line-cross":"_3h620","icon-line-cut":"_3nbjj","icon-line-dashboard":"_3-F1c","icon-line-down":"_1BtUm","icon-line-download-queue":"_1Bzeq","icon-line-download":"_1ya1g","icon-line-draft":"_2zcb0","icon-line-exit-fullscreen":"_3-iPg","icon-line-eye-close":"_iKLUO","icon-line-eye-open":"_X00tw","icon-line-female-user":"_28nK6","icon-line-file":"_12bYG","icon-line-filter":"_2qj3b","icon-line-flag":"_1wEMk","icon-line-fullscreen":"_30nA4","icon-line-heart":"_2xUV8","icon-line-help":"_17kCM","icon-line-home":"_GFJAK","icon-line-information":"_2TJyw","icon-line-left":"_3u1Le","icon-line-lifebuoy":"_2Rcxc","icon-line-list":"_2mHVG","icon-line-loading":"_1LR3j","icon-line-lock":"_2JH2p","icon-line-login":"_O6oaf","icon-line-logout":"_gJ9V9","icon-line-menu-burger":"_19B15","icon-line-menu-dots":"_2RBwG","icon-line-microphone-disable":"_3rb1K","icon-line-microphone":"_3vYJg","icon-line-minus":"_2oxpx","icon-line-note":"_2PhOj","icon-line-notification-disable":"_o2GP1","icon-line-notification":"_z7NJH","icon-line-paste":"_ur2CY","icon-line-plus":"_1ycj4","icon-line-power-sign":"_20soH","icon-line-print":"_2FWOI","icon-line-puzzle":"_2f5ID","icon-line-refresh":"_1j7oR","icon-line-reply-all":"_1Umhx","icon-line-reply":"_2XD0m","icon-line-right":"_2rqJI","icon-line-save":"_3VoE0","icon-line-screenshot":"_R7-Gr","icon-line-search-check":"_3CN2k","icon-line-search-cross":"_1BCb2","icon-line-search-minus":"_2qNnr","icon-line-search-plus":"_2j5Ww","icon-line-search":"_3fI_D","icon-line-share":"_1yWG4","icon-line-shield":"_MoEtt","icon-line-snooze":"_1UARO","icon-line-star":"_2bbq2","icon-line-stars":"_62pAb","icon-line-sync":"_2whw7","icon-line-task":"_3w3Ha","icon-line-time":"_1YMzG","icon-line-trash-empty":"_3iI-C","icon-line-trash-full":"_24vII","icon-line-trash":"_2jR7w","icon-line-umbrella":"_3EW_O","icon-line-unlock":"_1neIQ","icon-line-up":"_Z4C7v","icon-line-upload-queue":"_290Df","icon-line-upload":"_2yyds","icon-line-user":"_1TgpF","icon-line-verification-fail":"_1R5fL","icon-line-verification":"_9ButY","icon-line-wrench":"_1EXlz","icon-line-write":"_3NGI7","icon-arrow-down":"_2VkIL","icon-arrow-left":"_36it-","icon-arrow-right":"_3fBJt","icon-arrow-up":"_gcIuu","icon-alarm1":"_2uq-r","icon-alert1":"_v3xRs","icon-app-notification1":"_2GJcD","icon-block":"_2FJt0","icon-bookmark":"_2Gg_H","icon-bug":"_1oFzp","icon-check-double":"_2pvnG","icon-check":"_Wb2XK","icon-cloud-disable":"_j_7gN","icon-cloud-download":"_1dzy1","icon-cloud-upload":"_2jnFK","icon-cloud":"_XL8Xi","icon-cogwheel":"_3mCNb","icon-copy":"_1fOSF","icon-cross":"_10QIh","icon-cut":"_3fs14","icon-dashboard":"_QRta1","icon-down":"_HXmn3","icon-download-queue":"_3ICli","icon-download":"_2SdS4","icon-draft":"_P7At8","icon-exit-fullscreen":"_Mh01S","icon-eye-close":"_1KjPQ","icon-eye-open":"_3ATsw","icon-female-user":"_2Dfx_","icon-file":"_3bdqj","icon-filter":"_295_z","icon-flag":"_1TXC1","icon-fullscreen":"_FIx0R","icon-heart":"_2g-zt","icon-help":"_1qlUa","icon-home":"_2JGHi","icon-information":"_2iZcp","icon-left":"_1WSQ-","icon-lifebuoy":"_1SMNH","icon-list":"_ZRgfq","icon-loading":"_3CMbC","icon-lock":"_163V5","icon-login":"_2ii93","icon-logout":"_1Z960","icon-menu-burger":"_2boVJ","icon-menu-dots":"_Li-Ov","icon-microphone-disable":"_1bA0I","icon-microphone":"_TfNxZ","icon-minus":"_2QDQO","icon-note":"_38j6H","icon-notification-disable":"_K1T2z","icon-notification":"_2Ra63","icon-paste":"_51DLi","icon-plus":"_1HBpS","icon-power-sign":"_1mx6V","icon-print":"_1GulE","icon-puzzle":"_2lbdS","icon-refresh":"_Lubaw","icon-reply-all":"_3KEs9","icon-reply":"_8CChY","icon-right":"_xteAB","icon-save":"_2bqpv","icon-screenshot":"_3SlDa","icon-search-alt":"_1TlAn","icon-search-check":"_2TIsj","icon-search-cross":"_2NZWr","icon-search-minus":"_3c04X","icon-search-plus":"_3deTb","icon-share":"_3rHQW","icon-shield":"_2HTIc","icon-snooze":"_1H3-p","icon-star":"_ot_K-","icon-stars":"_3n6WS","icon-sync":"_g4AKq","icon-task":"_2iDpn","icon-time":"_rVrZO","icon-trash-empty":"_2rUqI","icon-trash-full":"_2M4JD","icon-trash":"_H5UfA","icon-umbrella":"_1MSD1","icon-unlock":"_5VZLW","icon-up":"_1tEMX","icon-upload-queue":"_2EQnt","icon-upload":"_MTrj9","icon-user":"_2cuT3","icon-verification-fail":"_3CYbD","icon-verification":"_3hYBR","icon-wrench":"_2swwf","icon-write":"_2oNry"};

var Icon = function Icon(_ref) {
  var name = _ref.name,
      size = _ref.size,
      className = _ref.className,
      props = _objectWithoutPropertiesLoose(_ref, ["name", "size", "className"]);

  var icon = icons["icon-" + name];
  var sizeWith = size > 0 && size <= 8 ? size : '1';
  var sizeSelected = icons["size-" + size] || icons["size-1"];
  var renderStyles = ['coopeuch-icon'];

  if (className) {
    renderStyles = [].concat(renderStyles).concat(className);
  }

  if (icon) {
    renderStyles = [].concat(renderStyles).concat(icon);
  }

  if (sizeSelected) {
    renderStyles = [].concat(renderStyles).concat(sizeSelected);
  }

  return /*#__PURE__*/React.createElement("i", _extends({}, props, {
    className: renderStyles.join(' '),
    "data-size": sizeWith
  }));
};

Icon.defaultProps = {
  name: 'alarm',
  size: 2
};
Icon.propTypes = {
  name: propTypes.string,
  size: propTypes.oneOfType([propTypes.string, propTypes.number]),
  className: propTypes.string
};

var styles = {"elevation-1":"_dPRPV","elevation-2":"_1y5iI","elevation-3":"_1InEo","elevation-4":"_3oVmu","elevation-5":"_2qhR9","elevation-element-1":"_f0eVU","elevation-element-2":"_zNhrj","btn":"_2p8qe","elevation-element-3":"_2kct1","elevation-element-4":"_5Pyxa","btn-primary":"_2fp8y","btn-secondary":"_3lx5h","prefix":"_3KDDD","suffix":"_11hS9","btn-primary-outline":"_13wED","btn-primary-text":"_1r-Fe","btn-secondary-outline":"_y6P2K","btn-secondary-text":"_3TQXb"};

var Button = function Button(_ref) {
  var children = _ref.children,
      color = _ref.color,
      variant = _ref.variant,
      disabled = _ref.disabled,
      prefix = _ref.prefix,
      suffix = _ref.suffix,
      props = _objectWithoutPropertiesLoose(_ref, ["children", "color", "variant", "disabled", "prefix", "suffix"]);

  var btnVariant = variant !== '' ? "-" + variant : '';
  var btnStyles = [styles.btn, styles["btn-" + color + btnVariant] || ''];
  return /*#__PURE__*/React.createElement("button", _extends({}, props, {
    className: btnStyles.join(' '),
    disabled: disabled
  }), prefix && /*#__PURE__*/React.createElement(Icon, {
    className: styles.prefix,
    name: prefix
  }), variant !== 'text' ? children : !prefix && !suffix ? /*#__PURE__*/React.createElement("span", null, children) : children, suffix && /*#__PURE__*/React.createElement(Icon, {
    className: styles.suffix,
    name: suffix
  }));
};

Button.defaultProps = {
  variant: '',
  color: 'primary',
  disabled: false,
  onClick: function onClick() {
    return null;
  }
};
Button.propTypes = {
  prefix: propTypes.string,
  suffix: propTypes.string,
  color: propTypes.oneOf(['primary', 'secondary']),
  variant: propTypes.oneOf(['', 'outline', 'text']),
  onClick: propTypes.func.isRequired,
  disabled: propTypes.bool
};

var gridStyles = {"container":"_14kEn","container-fluid":"_3HzEQ","container-sm":"_z_9u9","container-md":"_2qcSz","container-lg":"_3VnX7","container-xl":"_bhEqE","row":"_UYIH9","no-gutters":"_3497d","col":"_WdUKx","col-1":"_2oac2","col-2":"_2aKQ6","col-3":"_1Ja7k","col-4":"_b0o_p","col-5":"_2y9KV","col-6":"_j6U_N","col-7":"_2cnib","col-8":"_j_GRF","col-9":"_3BV2S","col-10":"_aijt7","col-11":"_1uF6h","col-12":"_16Mq4","col-auto":"_2Mnx4","col-sm-1":"_g_BYh","col-sm-2":"_p2Bkv","col-sm-3":"_2tBAn","col-sm-4":"_2Zrnf","col-sm-5":"_gq2Q6","col-sm-6":"_36wvN","col-sm-7":"_-xjYm","col-sm-8":"_qCgI9","col-sm-9":"_jglMn","col-sm-10":"_1Ddzm","col-sm-11":"_qAOmb","col-sm-12":"_360Zl","col-sm":"_2eo6T","col-sm-auto":"_xYrp3","col-md-1":"_1MDP_","col-md-2":"_QnY1p","col-md-3":"_2nlsV","col-md-4":"_HQIaP","col-md-5":"_1NiLw","col-md-6":"_3bPY2","col-md-7":"_wciee","col-md-8":"_1H4wt","col-md-9":"_KrrZO","col-md-10":"_1gKWm","col-md-11":"_1j8Cn","col-md-12":"_ExYPp","col-md":"_1Jn07","col-md-auto":"_1hpEj","col-lg-1":"_1kYkS","col-lg-2":"_3Ve2f","col-lg-3":"_38JX2","col-lg-4":"_1fUJA","col-lg-5":"_uKYiC","col-lg-6":"_jq4-x","col-lg-7":"_4TRJM","col-lg-8":"_28FDI","col-lg-9":"_5od1R","col-lg-10":"_3l02V","col-lg-11":"_1M3kU","col-lg-12":"_3b23J","col-lg":"_g2MV9","col-lg-auto":"_38l7t","col-xl-1":"_1TFKO","col-xl-2":"_3H5NW","col-xl-3":"_2-3I8","col-xl-4":"_2bCzv","col-xl-5":"_FiM51","col-xl-6":"_22zbY","col-xl-7":"_Uz6KO","col-xl-8":"_3xW-U","col-xl-9":"_tx7dN","col-xl-10":"_g8oUp","col-xl-11":"_1NMog","col-xl-12":"_3xWBZ","col-xl":"_1obk1","col-xl-auto":"_3B4QJ","row-cols-1":"_2KDZX","row-cols-2":"_2AZ0L","row-cols-3":"_1_Jez","row-cols-4":"_TPZ-D","row-cols-5":"_2VBE2","row-cols-6":"_1NJXc","order-first":"_1ZEA2","order-last":"_1FlxM","order-0":"_3g6N8","order-1":"_27fZm","order-2":"_1-n0m","order-3":"_1rlAk","order-4":"_1xXWr","order-5":"_2fRKt","order-6":"_2TwlZ","order-7":"_OxRQt","order-8":"_Fniow","order-9":"_1TRrL","order-10":"_2qPqQ","order-11":"_Uy2O6","order-12":"_1Pbsy","offset-1":"_2Robc","offset-2":"_Zx4LU","offset-3":"_1RMUT","offset-4":"_lKEsr","offset-5":"_1C2Lc","offset-6":"_L8nKJ","offset-7":"_2wdLz","offset-8":"_2cugz","offset-9":"_2f92V","offset-10":"_3HEcr","offset-11":"_1FjQ3","row-cols-sm-1":"_2Cqfh","row-cols-sm-2":"_aRq2C","row-cols-sm-3":"_mdj6b","row-cols-sm-4":"_2YLRY","row-cols-sm-5":"_2ytCO","row-cols-sm-6":"_2Sv2Y","order-sm-first":"_37-vl","order-sm-last":"_nQLHh","order-sm-0":"_1nBLx","order-sm-1":"_3B5ZD","order-sm-2":"_2_7dp","order-sm-3":"_fFJcI","order-sm-4":"_1P-il","order-sm-5":"_3svwq","order-sm-6":"_2-X2m","order-sm-7":"_qv6ue","order-sm-8":"_1mVZg","order-sm-9":"_3leZv","order-sm-10":"_14eYB","order-sm-11":"_3fHA9","order-sm-12":"_3YGbr","offset-sm-0":"_Ji6GE","offset-sm-1":"_1xwIb","offset-sm-2":"_1uaVT","offset-sm-3":"_3JY3T","offset-sm-4":"_1UZxV","offset-sm-5":"_1sjCS","offset-sm-6":"_shONY","offset-sm-7":"_3apzC","offset-sm-8":"_1VVCu","offset-sm-9":"_2lE77","offset-sm-10":"_1Jg_Q","offset-sm-11":"_1VzVm","row-cols-md-1":"_3ROj2","row-cols-md-2":"_2NJM4","row-cols-md-3":"_3IouR","row-cols-md-4":"_1zciP","row-cols-md-5":"_3GPlG","row-cols-md-6":"_3Yypo","order-md-first":"_YId5-","order-md-last":"_FoL1t","order-md-0":"_11X2_","order-md-1":"_29ppz","order-md-2":"_BX_wA","order-md-3":"_3vovI","order-md-4":"_1DG-r","order-md-5":"_1t-wS","order-md-6":"_xhpHy","order-md-7":"_1KW3a","order-md-8":"_12iOD","order-md-9":"_2o7SZ","order-md-10":"_30TSh","order-md-11":"_3a2ES","order-md-12":"_17gjx","offset-md-0":"_3SIYS","offset-md-1":"_9sDKs","offset-md-2":"_2LaPL","offset-md-3":"_3tebD","offset-md-4":"_18n2k","offset-md-5":"_joIgt","offset-md-6":"_1q1LS","offset-md-7":"_K5T5U","offset-md-8":"_1bjmQ","offset-md-9":"_1jm7r","offset-md-10":"_1SlPm","offset-md-11":"_PRoM9","row-cols-lg-1":"_1l-Ab","row-cols-lg-2":"_1VCF7","row-cols-lg-3":"_38pSz","row-cols-lg-4":"_3MNUX","row-cols-lg-5":"_1ZPJw","row-cols-lg-6":"_25fN8","order-lg-first":"_6acFv","order-lg-last":"_2AuqS","order-lg-0":"_2GeAp","order-lg-1":"_1H7K7","order-lg-2":"_MYlUI","order-lg-3":"_3Q3rS","order-lg-4":"_Rl2vD","order-lg-5":"_2mrT8","order-lg-6":"_3FBi8","order-lg-7":"_3-wtn","order-lg-8":"_2KbpA","order-lg-9":"_2-Zpx","order-lg-10":"_1Ksq5","order-lg-11":"_3oMde","order-lg-12":"_3tvoB","offset-lg-0":"_3ANrG","offset-lg-1":"_1dJCm","offset-lg-2":"_7RGUZ","offset-lg-3":"_3HK2f","offset-lg-4":"_2j5R6","offset-lg-5":"_2QCMg","offset-lg-6":"_3jf4w","offset-lg-7":"_pOUQI","offset-lg-8":"_2fHoJ","offset-lg-9":"_1U4zu","offset-lg-10":"_16S5i","offset-lg-11":"_2SkJN","row-cols-xl-1":"_3RG4D","row-cols-xl-2":"_ZvXCx","row-cols-xl-3":"_EUhdv","row-cols-xl-4":"_3RRjt","row-cols-xl-5":"_1Cq7j","row-cols-xl-6":"_3XAEM","order-xl-first":"_3AJuA","order-xl-last":"_289w5","order-xl-0":"_3wkjk","order-xl-1":"_1qVNF","order-xl-2":"_3KD7H","order-xl-3":"_2CmD8","order-xl-4":"_3hL_C","order-xl-5":"_YEmoW","order-xl-6":"_3iHlB","order-xl-7":"_1D3Bm","order-xl-8":"_2lHpd","order-xl-9":"_IMgOv","order-xl-10":"_2gsV6","order-xl-11":"_1cf7J","order-xl-12":"_2iwf0","offset-xl-0":"_1xbZ5","offset-xl-1":"_rSZgC","offset-xl-2":"_2-q6r","offset-xl-3":"_18aVH","offset-xl-4":"_L_fbC","offset-xl-5":"_1-42j","offset-xl-6":"_1nSva","offset-xl-7":"_27qri","offset-xl-8":"_3wrlN","offset-xl-9":"_JTcR4","offset-xl-10":"_2Lf0i","offset-xl-11":"_2pahu"};

var Grid = function Grid(_ref) {
  var _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'div' : _ref$variant,
      col = _ref.col,
      row = _ref.row,
      children = _ref.children,
      sm = _ref.sm,
      md = _ref.md,
      lg = _ref.lg,
      xl = _ref.xl,
      props = _objectWithoutPropertiesLoose(_ref, ["variant", "col", "row", "children", "sm", "md", "lg", "xl"]);

  var styles = row ? [gridStyles.row] : [gridStyles.col];

  if (col) {
    styles = styles.concat(gridStyles["col-" + col]);
  }

  if (sm) {
    styles = styles.concat(gridStyles["col-sm-" + sm]);
  }

  if (md) {
    styles = styles.concat(gridStyles["col-md-" + md]);
  }

  if (lg) {
    styles = styles.concat(gridStyles["col-lg-" + lg]);
  }

  if (xl) {
    styles = styles.concat(gridStyles["col-xl-" + xl]);
  }

  return React.createElement(variant, _extends({}, props, {
    className: styles.concat(props.className || '').join(' ')
  }), children);
};

Grid.defaultProps = {
  variant: 'div',
  onClick: function onClick() {
    return null;
  }
};
Grid.propTypes = {
  variant: propTypes.string,
  sm: propTypes.number,
  md: propTypes.number,
  lg: propTypes.number,
  xl: propTypes.number,
  onClick: propTypes.func,
  row: propTypes.bool
};

var styles$1 = {"card":"_3sTov","border":"_11O64","elevation-1":"_fQijz","elevation-2":"_1FoZl","elevation-3":"_2Gzj7","elevation-4":"_G6ONN","animated":"_31-Hr","elevation-5":"_2NrqS","selected":"_1xLNT","all":"_2tVcK"};

var Card = function Card(_ref) {
  var border = _ref.border,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["border", "animated", "children"]);

  var cardStules = [styles$1.card];
  cardStules = border ? cardStules.concat(styles$1.border) : cardStules.concat(styles$1['elevation-1']);

  if (props.onClick && !border) {
    cardStules = cardStules.concat(styles$1.animated);
  }

  if (props.selected) {
    cardStules = cardStules.concat(styles$1.selected);
  }

  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: cardStules.concat(props.className).join(' ')
  }), children);
};

Card.defaultProps = {
  border: false,
  selected: false
};
Card.propTypes = {
  onClick: propTypes.func,
  border: propTypes.bool,
  selected: propTypes.bool
};

var styles$2 = {"checkbox":"_thjTm","checked":"_33SlG","disabled":"_3ZT4M","unchecked":"_35rqG"};

var Checkbox = function Checkbox(_ref) {
  var variant = _ref.variant,
      checked = _ref.checked,
      onChange = _ref.onChange,
      disabled = _ref.disabled,
      props = _objectWithoutPropertiesLoose(_ref, ["variant", "checked", "onChange", "disabled"]);

  var color = disabled ? "#9C9A9F" : checked ? "#007DB7" : "#646569";
  var disabledClass = disabled ? styles$2.disabled : '';
  var checkedClass = checked ? styles$2.checked : styles$2.unchecked;
  return /*#__PURE__*/React.createElement("label", {
    className: [styles$2.checkbox].concat(disabledClass).concat(checkedClass).join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    "data-testid": "checkbox",
    disabled: disabled,
    type: "checkbox",
    checked: checked,
    onChange: onChange ? function (_ref2) {
      var target = _ref2.target;
      return onChange(target.checked);
    } : null
  }, props)), variant ? /*#__PURE__*/React.createElement("svg", {
    width: "24px",
    height: "24px",
    viewBox: "0 0 24 24"
  }, checked ? /*#__PURE__*/React.createElement("g", {
    "data-testid": "checked-variant-active",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(-2031.000000, -2448.000000)",
    fill: color
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2052.33333,2448 L2033.66667,2448 C2032.2,2448 2031,2449.2 2031,2450.66667 L2031,2469.33333 C2031,2470.8 2032.2,2472 2033.66667,2472 L2052.33333,2472 C2053.8,2472 2055,2470.8 2055,2469.33333 L2055,2450.66667 C2055,2449.2 2053.8,2448 2052.33333,2448 Z M2048.14286,2461 L2037.85714,2461 C2037.38571,2461 2037,2460.55 2037,2460 C2037,2459.45 2037.38571,2459 2037.85714,2459 L2048.14286,2459 C2048.61429,2459 2049,2459.45 2049,2460 C2049,2460.55 2048.61429,2461 2048.14286,2461 Z",
    id: "color_checkbox"
  }))) : /*#__PURE__*/React.createElement("g", {
    "data-testid": "checked-variant-inactive",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(-2079.000000, -2448.000000)",
    fill: color
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2100,2470 L2082,2470 C2081.45,2470 2081,2469.55 2081,2469 L2081,2451 C2081,2450.45 2081.45,2450 2082,2450 L2100,2450 C2100.55,2450 2101,2450.45 2101,2451 L2101,2469 C2101,2469.55 2100.55,2470 2100,2470 Z M2101,2448 L2081,2448 C2079.9,2448 2079,2448.9 2079,2450 L2079,2470 C2079,2471.1 2079.9,2472 2081,2472 L2101,2472 C2102.1,2472 2103,2471.1 2103,2470 L2103,2450 C2103,2448.9 2102.1,2448 2101,2448 Z",
    id: "checkbox_disabled"
  })))) : /*#__PURE__*/React.createElement("svg", {
    width: "24px",
    height: "24px",
    viewBox: "0 0 24 24"
  }, checked ? /*#__PURE__*/React.createElement("g", {
    "data-testid": "checked-active",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(-1993.000000, -2448.000000)",
    fill: color
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2014.33333,2448 L1995.66667,2448 C1994.2,2448 1993,2449.2 1993,2450.66667 L1993,2469.33333 C1993,2470.8 1994.2,2472 1995.66667,2472 L2014.33333,2472 C2015.8,2472 2017,2470.8 2017,2469.33333 L2017,2450.66667 C2017,2449.2 2015.8,2448 2014.33333,2448 Z M2003.43221,2465.6338 C2002.95822,2466.12207 2002.19256,2466.12207 2001.71857,2465.6338 L1997.35549,2461.13928 C1996.8815,2460.65102 1996.8815,2459.86228 1997.35549,2459.37402 C1997.82947,2458.88576 1998.59514,2458.88576 1999.06912,2459.37402 L2002.56931,2462.97966 L2010.93088,2454.3662 C2011.40486,2453.87793 2012.17053,2453.87793 2012.64451,2454.3662 C2013.1185,2454.85446 2013.1185,2455.64319 2012.64451,2456.13146 L2003.43221,2465.6338 Z",
    id: "color_checkbox"
  }))) : /*#__PURE__*/React.createElement("g", {
    "data-testid": "checked-inactive",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(-2079.000000, -2448.000000)",
    fill: color
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2100,2470 L2082,2470 C2081.45,2470 2081,2469.55 2081,2469 L2081,2451 C2081,2450.45 2081.45,2450 2082,2450 L2100,2450 C2100.55,2450 2101,2450.45 2101,2451 L2101,2469 C2101,2469.55 2100.55,2470 2100,2470 Z M2101,2448 L2081,2448 C2079.9,2448 2079,2448.9 2079,2450 L2079,2470 C2079,2471.1 2079.9,2472 2081,2472 L2101,2472 C2102.1,2472 2103,2471.1 2103,2470 L2103,2450 C2103,2448.9 2102.1,2448 2101,2448 Z",
    id: "checkbox_disabled"
  })))));
};

Checkbox.defaultProps = {
  disabled: false,
  checked: false,
  onChange: function onChange() {
    return null;
  }
};
Checkbox.propTypes = {
  disabled: propTypes.bool,
  variant: propTypes.bool,
  checked: propTypes.bool.isRequired,
  onChange: propTypes.func
};

var Logo = function Logo(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({}, props, {
    width: "170px",
    height: "30px",
    viewBox: "0 0 170 30"
  }), /*#__PURE__*/React.createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "03.Organismo/header/desktop/desktop",
    transform: "translate(-92.000000, -21.000000)",
    fill: "#FFFFFF"
  }, /*#__PURE__*/React.createElement("g", {
    id: "01.Atomo/brand/Marca",
    transform: "translate(92.000000, 21.000000)"
  }, /*#__PURE__*/React.createElement("g", {
    id: "Coopeuch",
    transform: "translate(0.000000, -0.000000)"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M28.6382169,12.9940002 C20.1501254,13.3029497 13.3021331,20.1505911 12.994058,28.6382475 C12.9815926,28.9641137 13.2433673,29.2356688 13.5701406,29.2356688 L25.7925292,29.2356688 C27.6944031,29.2356688 29.2356688,27.6944821 29.2356688,25.7927057 L29.2356688,13.5709435 C29.2356688,13.244187 28.9649901,12.9824256 28.6382169,12.9940002",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25.836663,0 L10.835155,0 C4.85107652,0 0,4.85107651 0,10.8351549 L0,25.836663 C0,27.7141588 1.52238893,29.2356688 3.39900578,29.2356688 L5.42592777,29.2356688 C5.73356987,29.2356688 5.98232049,28.9877972 5.98407844,28.681034 C6.27589896,16.2944839 16.2988788,6.27326202 28.6854289,5.98407844 C28.9904341,5.97968355 29.2356688,5.73181192 29.2356688,5.42680674 L29.2356688,3.39988476 C29.2356688,1.52238893 27.7141588,0 25.836663,0",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M44.522656,17.9815831 C43.3793182,17.9815831 42.4418518,17.6085099 41.7093734,16.8909284 C40.976895,16.1439164 40.5960769,15.196951 40.5960769,14.0768659 C40.5960769,11.7804317 42.2660217,10.143584 44.522656,10.143584 C45.7755563,10.143584 46.8641129,10.668137 47.5285566,11.5311392 C47.7476816,11.8167869 48.1426368,11.9068092 48.4571872,11.7267646 L50.5052994,10.5521467 C50.8578432,10.3495965 50.9594536,9.89688828 50.7306094,9.56536378 C49.4229278,7.66797076 47.1185807,6.49681529 44.5518138,6.49681529 C42.3543785,6.49681529 40.50772,7.21526248 39.0127219,8.67899044 C37.547765,10.143584 36.8152866,11.9232556 36.8152866,14.0768659 C36.8152866,16.2296107 37.547765,18.0101479 39.0127219,19.4747414 C40.50772,20.9384693 42.3543785,21.656051 44.5518138,21.656051 C47.11593,21.656051 49.3928864,20.4658523 50.7615343,18.5675936 C51.0018649,18.234338 50.899371,17.7695114 50.5371078,17.5669612 L48.4828107,16.4174457 C48.1700274,16.2417291 47.7803736,16.332617 47.5621322,16.6139367 C46.8976885,17.4743421 45.8038305,17.9815831 44.522656,17.9815831",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M110.606752,6.49681529 C108.348956,6.49681529 106.472174,7.21439688 105.035636,8.67899042 C103.599098,10.1141536 102.866242,11.9232556 102.866242,14.0760003 C102.866242,16.2581755 103.599098,18.0672775 105.064809,19.5024406 C106.531404,20.9384694 108.466531,21.656051 110.900248,21.656051 C113.503697,21.656051 115.529879,20.7714088 116.956693,19.0263612 C117.142338,18.7995742 117.076036,18.4619906 116.818786,18.31657 L114.772271,17.1601297 C114.487615,16.9991283 114.122514,17.032021 113.886479,17.2570767 C113.167768,17.9443624 112.180314,18.2966612 110.958594,18.2966612 C108.700797,18.2966612 107.322605,17.4068254 106.824015,15.5977234 L116.484625,15.5977234 C117.335055,15.5977234 118.024594,14.9234218 118.025478,14.0907156 L118.025478,14.0760003 C118.025478,11.9232556 117.321795,10.1427184 115.914429,8.67899042 C114.536237,7.21439688 112.747857,6.49681529 110.606752,6.49681529 Z M106.76567,12.7265315 C107.205914,10.8897304 108.584106,9.82677471 110.606752,9.82677471 C112.33767,9.82677471 113.803381,10.7746057 114.243625,12.7265315 L106.76567,12.7265315 Z",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M132.736423,14.080019 C132.736423,15.2283916 132.363978,16.1750594 131.619088,16.9209189 C130.874197,17.6667784 129.956514,18.0397082 128.839178,18.0397082 C127.721843,18.0397082 126.804159,17.6667784 126.059269,16.9209189 C125.343028,16.1750594 124.970583,15.2283916 124.970583,14.080019 L124.970583,7.0956544 C124.970583,6.76485855 124.702888,6.49681529 124.372522,6.49681529 L121.963267,6.49681529 C121.581869,6.49681529 121.273885,6.80609597 121.273885,7.18709391 L121.273885,14.080019 C121.273885,16.2037464 121.990126,18.0110212 123.451257,19.4749498 C124.913284,20.9379819 126.71821,21.656051 128.839178,21.656051 C130.960146,21.656051 132.765073,20.9379819 134.227099,19.4749498 C135.688231,18.0110212 136.433121,16.2037464 136.433121,14.080019 L136.433121,7.18709391 C136.433121,6.80609597 136.124242,6.49681529 135.743739,6.49681529 L133.425805,6.49681529 C133.045302,6.49681529 132.736423,6.80609597 132.736423,7.18709391 L132.736423,14.080019 Z",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M166.345208,7.12629803 L166.345208,12.0525357 C164.115784,12.4507799 161.795905,12.4336512 159.578359,12.0011494 L159.578359,7.12629803 C159.578359,6.77858375 159.277753,6.49681529 158.906791,6.49681529 L156.595135,6.49681529 C156.224174,6.49681529 155.923567,6.77858375 155.923567,7.12629803 L155.923567,19.9437656 C155.923567,20.2914799 156.224174,20.5732484 156.595135,20.5732484 L158.906791,20.5732484 C159.277753,20.5732484 159.578359,20.2914799 159.578359,19.9437656 L159.578359,15.5253963 C160.737842,15.7112436 161.914685,15.8157291 163.101579,15.8157291 C164.191621,15.8157291 165.274353,15.727516 166.345208,15.5699311 L166.345208,19.9437656 C166.345208,20.2914799 166.645814,20.5732484 167.016776,20.5732484 L169.328432,20.5732484 C169.699393,20.5732484 170,20.2914799 170,19.9437656 L170,7.12629803 C170,6.77858375 169.699393,6.49681529 169.328432,6.49681529 L167.016776,6.49681529 C166.645814,6.49681529 166.345208,6.77858375 166.345208,7.12629803",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M101.597919,10.3484647 C101.138388,8.14409397 99.1415334,6.49681529 96.6570845,6.49681529 L89.4185946,6.49681529 C89.0713155,6.49681529 88.7898089,6.77279017 88.7898089,7.11218786 L88.7898089,19.9578759 C88.7898089,20.2981306 89.0713155,20.5732484 89.4185946,20.5732484 L91.7346658,20.5732484 C92.0828219,20.5732484 92.3643285,20.2981306 92.3643285,19.9578759 L92.3643285,17.9652001 L92.3643285,16.8835842 L96.2221086,16.8835842 C98.6241226,16.8835842 100.817418,15.4111468 101.545301,13.1733505 C101.87241,12.1671564 101.835578,11.2175285 101.597919,10.3484647 M95.8239653,13.8058643 L92.2827705,13.8058643 L92.2827705,9.4314053 L95.8239653,9.4314053 C97.0596126,9.4314053 98.0619864,10.4101734 98.0619864,11.6186348 C98.0619864,12.8270963 97.0596126,13.8058643 95.8239653,13.8058643",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M60.6229027,6.49681529 C58.5017934,6.49681529 56.6969065,7.24382724 55.2350259,8.70755522 C53.7735772,10.1712832 53.0573248,11.9518204 53.0573248,14.0760003 C53.0573248,16.201046 53.7735772,18.0101479 55.2350259,19.4738758 C56.6969065,20.9384693 58.5017934,21.656051 60.6229027,21.656051 C62.7431481,21.656051 64.548899,20.9384693 66.0099156,19.4738758 C67.4717963,18.0101479 68.2165605,16.201046 68.2165605,14.0760003 C68.2165605,11.9518204 67.4717963,10.1712832 66.0099156,8.70755522 C64.548899,7.24382724 62.7431481,6.49681529 60.6229027,6.49681529 M63.4023768,16.9186275 C62.6576125,17.6656395 61.7400491,18.0378471 60.6229027,18.0378471 C59.5048924,18.0378471 58.588193,17.6656395 57.8434287,16.9186275 C57.1263124,16.1724812 56.7539302,15.2246502 56.7539302,14.0760003 C56.7539302,12.928216 57.1263124,11.9803851 57.8434287,11.2342387 C58.588193,10.4880924 59.5048924,10.1141536 60.6229027,10.1141536 C61.7400491,10.1141536 62.6576125,10.4880924 63.4023768,11.2342387 C64.147141,11.9803851 64.5203871,12.928216 64.5203871,14.0760003 C64.5203871,15.2246502 64.147141,16.1724812 63.4023768,16.9186275",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M77.9475271,6.49681529 C75.8272214,6.49681529 74.021419,7.24382724 72.5594967,8.70755522 C71.0984384,10.1712832 70.3821656,11.9518204 70.3821656,14.0760003 C70.3821656,16.201046 71.0984384,18.0101479 72.5594967,19.4738758 C74.021419,20.9384693 75.8272214,21.656051 77.9475271,21.656051 C80.0678329,21.656051 81.8736352,20.9384693 83.3346935,19.4738758 C84.7966158,18.0101479 85.5414013,16.201046 85.5414013,14.0760003 C85.5414013,11.9518204 84.7966158,10.1712832 83.3346935,8.70755522 C81.8736352,7.24382724 80.0678329,6.49681529 77.9475271,6.49681529 M80.7270803,16.9186275 C79.9822948,17.6656395 79.0647053,18.0378471 77.9475271,18.0378471 C76.8294849,18.0378471 75.9127594,17.6656395 75.1679739,16.9186275 C74.4517011,16.1724812 74.0784443,15.2246502 74.0784443,14.0760003 C74.0784443,12.928216 74.4517011,11.9803851 75.1679739,11.2342387 C75.9127594,10.4880924 76.8294849,10.1141536 77.9475271,10.1141536 C79.0647053,10.1141536 79.9822948,10.4880924 80.7270803,11.2342387 C81.4718658,11.9803851 81.8451226,12.928216 81.8451226,14.0760003 C81.8451226,15.2246502 81.4718658,16.1724812 80.7270803,16.9186275",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M146.306095,17.9813733 C145.162758,17.9813733 144.225291,17.6082788 143.492813,16.8897906 C142.760334,16.1436016 142.379516,15.1957166 142.379516,14.0764331 C142.379516,11.7798678 144.049461,10.1429266 146.306095,10.1429266 C147.558996,10.1429266 148.647552,10.6675095 149.311996,11.5305611 C149.531121,11.816225 149.926076,11.9062525 150.240627,11.7261976 L152.288739,10.5515126 C152.641283,10.3489509 152.742893,9.89621678 152.514049,9.56467343 C151.206367,7.66717199 148.90202,6.49681529 146.335253,6.49681529 C144.136934,6.49681529 142.29116,7.21443785 140.796161,8.67824939 C139.331205,10.1429266 138.598726,11.9226998 138.598726,14.0764331 C138.598726,16.2293008 139.331205,18.0099397 140.796161,19.4746168 C142.29116,20.9384284 144.136934,21.656051 146.335253,21.656051 C148.898486,21.656051 151.176326,20.4657843 152.544974,18.568283 C152.785304,18.2341426 152.68281,17.7692894 152.320547,17.5667276 L150.26625,16.4162809 C149.953467,16.2414199 149.563813,16.3314473 149.345572,16.6136487 C148.681128,17.4741033 147.58727,17.9813733 146.306095,17.9813733",
    fillRule: "nonzero"
  }))))));
};

var headerItemStyles = {"headerItem":"_1UvJ-"};

var HeaderItem = function HeaderItem(_ref) {
  var icon = _ref.icon,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["icon", "children"]);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: headerItemStyles.headerItem
  }, props), icon && /*#__PURE__*/React.createElement(Icon, {
    name: icon
  }), children);
};

HeaderItem.defaultProps = {
  children: ''
};
HeaderItem.propTypes = {
  icon: propTypes.string,
  children: propTypes.string
};

var headerStyle = {"profileItemContainer":"_1DOtA","circleAvatar":"_37wn_","date":"_jX4xS","profileBoxUsername":"_qpvql","profileBox":"_2h4-x"};

var HeaderProfileItem = function HeaderProfileItem(_ref) {
  var name = _ref.name,
      date = _ref.date,
      props = _objectWithoutPropertiesLoose(_ref, ["name", "date"]);

  var options = {
    day: 'numeric',
    year: 'numeric',
    month: 'short'
  };
  var circlerContent = name.split(' ').reduce(function (acc, text) {
    return acc.concat(text[0]);
  }, []).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "" + headerStyle.profileItemContainer
  }, props), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: headerStyle.circleAvatar
  }, circlerContent)), /*#__PURE__*/React.createElement("div", {
    className: headerStyle.profileBox
  }, /*#__PURE__*/React.createElement("span", {
    className: headerStyle.profileBoxUsername
  }, name), /*#__PURE__*/React.createElement("p", {
    className: headerStyle.date
  }, /*#__PURE__*/React.createElement("small", null, "\xDAltimo acceso ", date.toLocaleDateString('es-ES', options), " - ", date.getHours() + ":" + date.getMinutes(), " hrs "))), /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    className: "px-1"
  }));
};
HeaderProfileItem.defaultProps = {
  date: new Date()
};
HeaderProfileItem.propTypes = {
  name: propTypes.string.isRequired,
  date: propTypes.instanceOf(Date)
};

var Styles = {"header":"_3MNoG","headerOptionsContainer":"_1zBVI","headerLeftArea":"_YJliS","flex":"_1N4JG","profileItemContainer":"_1Q2Mz","headerLogoContainer":"_MYTjX"};

var Header = function Header(_ref) {
  var children = _ref.children,
      logo = _ref.logo,
      logOut = _ref.logOut,
      userData = _ref.userData,
      props = _objectWithoutPropertiesLoose(_ref, ["children", "logo", "logOut", "userData"]);

  var headerStyleContainer = [Styles.header].concat(props.className).join(' ');
  return /*#__PURE__*/React.createElement(Grid, {
    row: true,
    className: headerStyleContainer
  }, /*#__PURE__*/React.createElement(Grid, {
    col: 7,
    xl: 8,
    className: Styles.headerOptionsContainer
  }, /*#__PURE__*/React.createElement(Grid, {
    row: true,
    className: Styles.headerLeftArea
  }, logo && /*#__PURE__*/React.createElement(Grid, {
    col: 3,
    xl: 4,
    className: Styles.headerLogoContainer
  }, logo), children)), /*#__PURE__*/React.createElement(Grid, {
    col: 3,
    lg: 4,
    xl: 3,
    className: Styles.profileItemContainer
  }, /*#__PURE__*/React.createElement(HeaderProfileItem, {
    name: userData.name,
    date: userData.date
  })), logOut && /*#__PURE__*/React.createElement(Grid, {
    col: 1,
    className: Styles.flex
  }, logOut));
};

Header.defaultProps = {
  userData: {
    name: 'coopeuch username',
    date: new Date()
  }
};
Header.propTypes = {
  logo: propTypes.element,
  logOut: propTypes.element,
  userData: propTypes.shape({
    name: propTypes.string,
    date: propTypes.date
  })
};

var inputStyles = {"inputContainer":"_2lUSM","error":"_1s8q6","success":"_UYGJi","disabled":"_1OvLQ","inputLabel":"_q2gh-","inputHelper":"_3IoKh","successText":"_1FylX","errorText":"_1-t8w"};

var inputStyles$1 = {"input":"_3kii5","suffixContainer":"_2MCdF","prefixContainer":"_3U2NA","disabled":"_2fAZb","hasPrefix":"_XciEy","hasSuffix":"_3N4XX"};

var InputCore = function InputCore(_ref) {
  var prefix = _ref.prefix,
      suffix = _ref.suffix,
      variant = _ref.variant,
      props = _objectWithoutPropertiesLoose(_ref, ["prefix", "suffix", "variant"]);

  var inputStyle = [inputStyles$1.input];

  if (prefix) {
    inputStyle = inputStyle.concat(inputStyles$1.hasPrefix);
  }

  if (suffix) {
    inputStyle = inputStyle.concat(inputStyles$1.hasSuffix);
  }

  return /*#__PURE__*/React.createElement("div", {
    className: inputStyle.join(' ')
  }, prefix && /*#__PURE__*/React.createElement("div", {
    className: inputStyles$1.prefixContainer
  }, prefix), variant && variant === 'textarea' ? /*#__PURE__*/React.createElement("textarea", props) : /*#__PURE__*/React.createElement("input", props), suffix && /*#__PURE__*/React.createElement("div", {
    className: inputStyles$1.suffixContainer
  }, suffix));
};

InputCore.propTypes = {
  maxLength: propTypes.string,
  suffix: propTypes.oneOfType([propTypes.string, propTypes.element]),
  prefix: propTypes.oneOfType([propTypes.string, propTypes.element]),
  variant: propTypes.string,
  disabled: propTypes.bool
};

var Input = function Input(_ref) {
  var label = _ref.label,
      assistText = _ref.assistText,
      error = _ref.error,
      success = _ref.success,
      props = _objectWithoutPropertiesLoose(_ref, ["label", "assistText", "error", "success"]);

  var maxLength = props.maxLength;
  var validateStyle = [];

  if (error === true) {
    validateStyle = validateStyle.concat(inputStyles.error);
  } else if (success === true) {
    validateStyle = validateStyle.concat(inputStyles.success);
  }

  if (props.disabled) {
    validateStyle = validateStyle.concat(inputStyles.disabled);
  }

  var getHelperText = function getHelperText(element) {
    switch (element.type) {
      case 'success':
        return /*#__PURE__*/React.createElement("div", null, successSvg, " ", /*#__PURE__*/React.createElement("span", {
          className: inputStyles.successText
        }, element.text));

      case 'error':
        return /*#__PURE__*/React.createElement("div", null, errorSvg, " ", /*#__PURE__*/React.createElement("span", {
          className: inputStyles.errorText
        }, element.text));

      default:
        return /*#__PURE__*/React.createElement("div", null, " ", element.text);
    }
  };

  return /*#__PURE__*/React.createElement("div", {
    className: [inputStyles.inputContainer, validateStyle].join(' ')
  }, label && /*#__PURE__*/React.createElement("span", {
    className: inputStyles.inputLabel
  }, " ", label, " "), /*#__PURE__*/React.createElement(InputCore, props), /*#__PURE__*/React.createElement("div", {
    className: [inputStyles.inputHelper].join(' ')
  }, /*#__PURE__*/React.createElement("div", null, Array.isArray(assistText) && assistText.length > 0 ? assistText.map(function (el, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: el.text + "-" + i
    }, getHelperText(el));
  }) : assistText), maxLength && /*#__PURE__*/React.createElement("div", null, Number(maxLength) - props.value.length + "/" + maxLength)));
};

Input.defaultProps = {
  onChange: function onChange() {
    return null;
  },
  type: 'text'
};
Input.propTypes = {
  label: propTypes.string,
  assistText: propTypes.oneOfType([propTypes.arrayOf(propTypes.shape({
    text: propTypes.string,
    type: propTypes.oneOf(['success', 'assist', 'error'])
  })), propTypes.string]),
  maxLength: propTypes.string,
  type: propTypes.oneOf(['text', 'password']),
  error: propTypes.bool,
  success: propTypes.bool,
  suffix: propTypes.oneOfType([propTypes.string, propTypes.element]),
  prefix: propTypes.oneOfType([propTypes.string, propTypes.element]),
  variant: propTypes.string,
  disabled: propTypes.bool
};
var errorSvg = /*#__PURE__*/React.createElement("svg", {
  width: "10px",
  height: "10px",
  "data-testid": "errorIcon"
}, /*#__PURE__*/React.createElement("g", {
  stroke: "none",
  strokeWidth: "1",
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/React.createElement("g", {
  transform: "translate(-1186.000000, -1849.000000)",
  fill: "#1F1E1E"
}, /*#__PURE__*/React.createElement("g", {
  transform: "translate(1183.000000, 1754.000000)"
}, /*#__PURE__*/React.createElement("g", {
  transform: "translate(0.000000, 92.000000)"
}, /*#__PURE__*/React.createElement("path", {
  d: "M12.2,3.80666667 C11.94,3.54666667 11.52,3.54666667 11.26,3.80666667 L8,7.06 L4.74,3.8 C4.48,3.54 4.06,3.54 3.8,3.8 C3.54,4.06 3.54,4.48 3.8,4.74 L7.06,8 L3.8,11.26 C3.54,11.52 3.54,11.94 3.8,12.2 C4.06,12.46 4.48,12.46 4.74,12.2 L8,8.94 L11.26,12.2 C11.52,12.46 11.94,12.46 12.2,12.2 C12.46,11.94 12.46,11.52 12.2,11.26 L8.94,8 L12.2,4.74 C12.4533333,4.48666667 12.4533333,4.06 12.2,3.80666667 Z",
  id: "color-icono"
}))))));
var successSvg = /*#__PURE__*/React.createElement("svg", {
  width: "12px",
  height: "9px",
  "data-testid": "successIcon"
}, /*#__PURE__*/React.createElement("g", {
  stroke: "none",
  strokeWidth: "1",
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/React.createElement("g", {
  transform: "translate(-1100.000000, -1816.000000)",
  fill: "#1F1E1E"
}, /*#__PURE__*/React.createElement("g", {
  transform: "translate(1098.000000, 1720.000000)"
}, /*#__PURE__*/React.createElement("g", {
  transform: "translate(0.000000, 92.000000)"
}, /*#__PURE__*/React.createElement("path", {
  d: "M6,10.8 L3.66666667,8.46666667 C3.40666667,8.20666667 2.99333333,8.20666667 2.73333333,8.46666667 C2.47333333,8.72666667 2.47333333,9.14 2.73333333,9.4 L5.52666667,12.1933333 C5.78666667,12.4533333 6.20666667,12.4533333 6.46666667,12.1933333 L13.5333333,5.13333333 C13.7933333,4.87333333 13.7933333,4.46 13.5333333,4.2 C13.2733333,3.94 12.86,3.94 12.6,4.2 L6,10.8 Z",
  id: "color-icono"
}))))));

var styles$3 = {"radioContainer":"_1oqQj","radio":"_2rl6s","checked":"_9EBtf","disabled":"_3FKAc","unchecked":"_uejIh"};

var Radio = function Radio(_ref) {
  var checked = _ref.checked,
      onChange = _ref.onChange,
      disabled = _ref.disabled,
      props = _objectWithoutPropertiesLoose(_ref, ["checked", "onChange", "disabled"]);

  var disabledClass = disabled ? styles$3.disabled : '';
  var checkedClass = checked ? styles$3.checked : styles$3.unchecked;
  return /*#__PURE__*/React.createElement("label", {
    className: [styles$3.radioContainer, disabledClass].concat(checkedClass).join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    "data-testid": "radio",
    disabled: disabled,
    type: "radio",
    checked: checked,
    onChange: onChange ? function (_ref2) {
      var target = _ref2.target;
      return onChange(target.checked);
    } : null
  }, props)), /*#__PURE__*/React.createElement("div", {
    className: [styles$3.radio, checkedClass, disabledClass].join(' ')
  }));
};

Radio.defaultProps = {
  disabled: false,
  checked: false,
  onChange: function onChange() {
    return null;
  }
};
Radio.propTypes = {
  disabled: propTypes.bool,
  checked: propTypes.bool.isRequired,
  onChange: propTypes.func
};

var styles$4 = {"separator":"_dCaRR","horizontal":"_217mF","vertical":"_VlP6p"};

var Separator = function Separator(_ref) {
  var vertical = _ref.vertical;
  var direction = vertical ? 'vertical' : 'horizontal';
  var separatorClases = [styles$4.separator];
  separatorClases = separatorClases.concat(styles$4[direction]);
  return /*#__PURE__*/React.createElement("hr", {
    className: separatorClases.join(' '),
    "data-direction": direction
  });
};

Separator.defaultProps = {
  vertical: false
};
Separator.propTypes = {
  vertical: propTypes.bool
};

var styles$5 = {"sidebarElement":"_o3XYO","level-2":"_1XnUh","level-3":"_1OBQU","level-1":"_1tyJP","notification":"_1p9bf","textContainer":"_2HP3_","active":"_3v36b"};

var SidebarElement = function SidebarElement(_ref) {
  var text = _ref.text,
      icon = _ref.icon,
      sublevel = _ref.sublevel,
      level = _ref.level,
      notification = _ref.notification,
      active = _ref.active,
      open = _ref.open,
      props = _objectWithoutPropertiesLoose(_ref, ["text", "icon", "sublevel", "level", "notification", "active", "open"]);

  var defaultIcon = !icon && level === 3 ? /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: "1"
  }) : icon;
  var containerClasses = [styles$5.sidebarElement, styles$5['level-' + level]];

  if (active === true) {
    containerClasses = containerClasses.concat(styles$5.active);
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", _extends({
    role: "component",
    "data-status": active ? 'active' : '',
    className: containerClasses.join(' ')
  }, props), /*#__PURE__*/React.createElement("div", {
    className: [styles$5.textContainer].join(' ')
  }, defaultIcon, text), notification === true && /*#__PURE__*/React.createElement("span", {
    role: "notification",
    className: [styles$5.notification].join(' ')
  })), open && sublevel.map(function (child, index) {
    return /*#__PURE__*/React.createElement(SidebarElement, _extends({
      key: index,
      level: level + 1
    }, child));
  }));
};

SidebarElement.defaultProps = {
  level: 1,
  open: false,
  sublevel: []
};
SidebarElement.propTypes = {
  text: propTypes.string.isRequired,
  open: propTypes.bool,
  icon: propTypes.element,
  sublevel: propTypes.arrayOf(propTypes.shape({
    text: propTypes.string,
    icon: propTypes.element,
    level: propTypes.number,
    sublevel: propTypes.array,
    notification: propTypes.bool,
    active: propTypes.bool
  })),
  level: propTypes.number,
  notification: propTypes.bool,
  active: propTypes.bool
};

var styles$6 = {"sidebar":"_cwV8q"};

var Sidebar = function Sidebar(_ref) {
  var items = _ref.items;
  return /*#__PURE__*/React.createElement("div", {
    className: [styles$6.sidebar].join(' ')
  }, items.map(function (element, index) {
    return /*#__PURE__*/React.createElement(SidebarElement, _extends({
      key: index
    }, element));
  }));
};

Sidebar.propTypes = {
  items: propTypes.array.isRequired
};

var styles$7 = {"switchContainer":"_1eRWQ","disabled":"_n5mqJ","circle":"_3-WI0","switchBar":"_2eAt1","active":"_2ZPJd"};

var Switch = function Switch(_ref) {
  var status = _ref.status,
      disabled = _ref.disabled,
      props = _objectWithoutPropertiesLoose(_ref, ["status", "disabled"]);

  var switchClass = [styles$7.switchBar];
  var containerClass = [styles$7.switchContainer, disabled ? styles$7.disabled : null];

  if (status) {
    switchClass = switchClass.concat(styles$7.active);
  }

  return /*#__PURE__*/React.createElement("div", _extends({
    "data-status": status ? 'on' : 'off',
    className: containerClass.join(' ')
  }, props), /*#__PURE__*/React.createElement("div", {
    className: switchClass.join(' ')
  }, /*#__PURE__*/React.createElement("div", {
    className: styles$7.circle
  })));
};

Switch.defaultProps = {
  status: false,
  disabled: false
};
Switch.propTypes = {
  status: propTypes.bool,
  onClick: propTypes.func,
  disabled: propTypes.bool
};

var styles$8 = {"loadingContainer":"_xbslP","circle_1":"_1yHlS","circle_2":"_12Wvj","dark":"_l3QX7","circle":"_2KYdR","circleMain":"_2RXOO","circlesContainer":"_gReE6","container":"_2BLen","beforeCircle1":"_3d9vo","beforeCircle2":"_1fVOr","circleMainBorder":"_UHFy2"};

var Loading = function Loading(_ref) {
  var dark = _ref.dark;
  var styleArr = [styles$8.loadingContainer, dark ? styles$8.dark : null];
  var theme = dark ? 'dark' : 'light';
  return /*#__PURE__*/React.createElement("div", {
    className: styleArr.join(' '),
    "data-theme": theme
  }, /*#__PURE__*/React.createElement("div", {
    className: styles$8.circleMain
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$8.circlesContainer
  }, [styles$8.circle_1, styles$8.circle_2].map(function (el, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: [styles$8.circle, el].join(' ')
    });
  })));
};

Loading.defaultProps = {
  dark: false
};
Loading.propTypes = {
  dark: propTypes.bool
};

var styles$9 = {"titleContainer":"_Yw0He","suffix":"_3FgDb"};

var IconListModel = function IconListModel() {};

IconListModel.iconList = ['line-alarm', 'line-alert', 'line-app-notification', 'line-block', 'line-bookmark', 'line-bug', 'line-check-double', 'line-check', 'line-cloud-disable', 'line-cloud-download', 'line-cloud-upload', 'line-cloud', 'line-cogwheel', 'line-copy', 'line-cross', 'line-cut', 'line-dashboard', 'line-down', 'line-download-queue', 'line-download', 'line-draft', 'line-exit-fullscreen', 'line-eye-close', 'line-eye-open', 'line-female-user', 'line-file', 'line-filter', 'line-flag', 'line-fullscreen', 'line-heart', 'line-help', 'line-home', 'line-information', 'line-left', 'line-lifebuoy', 'line-list', 'line-loading', 'line-lock', 'line-login', 'line-logout', 'line-menu-burger', 'line-menu-dots', 'line-microphone-disable', 'line-microphone', 'line-minus', 'line-note', 'line-notification-disable', 'line-notification', 'line-paste', 'line-plus', 'line-power-sign', 'line-print', 'line-puzzle', 'line-refresh', 'line-reply-all', 'line-reply', 'line-right', 'line-save', 'line-screenshot', 'line-search-check', 'line-search-cross', 'line-search-minus', 'line-search-plus', 'line-search', 'line-share', 'line-shield', 'line-snooze', 'line-star', 'line-stars', 'line-sync', 'line-task', 'line-time', 'line-trash-empty', 'line-trash-full', 'line-trash', 'line-umbrella', 'line-unlock', 'line-up', 'line-upload-queue', 'line-upload', 'line-user', 'line-verification-fail', 'line-verification', 'line-wrench', 'line-write', 'arrow-down', 'arrow-left', 'arrow-right', 'arrow-up', 'alarm1', 'alert1', 'app-notification1', 'block', 'bookmark', 'bug', 'check-double', 'check', 'cloud-disable', 'cloud-download', 'cloud-upload', 'cloud', 'cogwheel', 'copy', 'cross', 'cut', 'dashboard', 'down', 'download-queue', 'download', 'draft', 'exit-fullscreen', 'eye-close', 'eye-open', 'female-user', 'file', 'filter', 'flag', 'fullscreen', 'heart', 'help', 'home', 'information', 'left', 'lifebuoy', 'list', 'loading', 'lock', 'login', 'logout', 'menu-burger', 'menu-dots', 'microphone-disable', 'microphone', 'minus', 'note', 'notification-disable', 'notification', 'paste', 'plus', 'power-sign', 'print', 'puzzle', 'refresh', 'reply-all', 'reply', 'right', 'save', 'screenshot', 'search-alt', 'search-check', 'search-cross', 'search-minus', 'search-plus', 'share', 'shield', 'snooze', 'star', 'stars', 'sync', 'task', 'time', 'trash-empty', 'trash-full', 'trash', 'umbrella', 'unlock', 'up', 'upload-queue', 'upload', 'user', 'verification-fail', 'verification', 'wrench', 'write'];

var TitleSection = function TitleSection(_ref) {
  var label = _ref.label,
      prefix = _ref.prefix,
      props = _objectWithoutPropertiesLoose(_ref, ["label", "prefix"]);

  var containerClass = [styles$9.titleContainer];
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: containerClass.join(' ')
  }), prefix && /*#__PURE__*/React.createElement(Icon, {
    className: styles$9.suffix,
    name: prefix
  }, " "), " ", /*#__PURE__*/React.createElement("div", {
    "data-testid": "title-section-label"
  }, label));
};
TitleSection.defaultProps = {
  label: '',
  prefix: 'line-file'
};
TitleSection.propTypes = {
  prefix: propTypes.oneOf(IconListModel.iconList).isRequired,
  label: propTypes.string.isRequired
};

var styles$a = {"chip":"_UA-fa","pressed":"_Qi9F4","disabled":"_1agHb","variant":"_32Cyg"};

var InputChip = function InputChip(_ref) {
  var value = _ref.value,
      onClose = _ref.onClose,
      variant = _ref.variant,
      disabled = _ref.disabled,
      props = _objectWithoutPropertiesLoose(_ref, ["value", "onClose", "variant", "disabled"]);

  var mainRef = React.createRef(null);

  var onPress = function onPress() {
    mainRef.current.className = classesComponent.concat(styles$a.pressed).join(' ');
  };

  var mouseUp = function mouseUp() {
    mainRef.current.className = classesComponent.join(' ');
  };

  var classesComponent = [styles$a.chip, disabled ? styles$a.disabled : null, variant ? styles$a.variant : null];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", _extends({
    ref: mainRef
  }, props, {
    className: classesComponent.join(' ')
  }), value, /*#__PURE__*/React.createElement(Icon, {
    onMouseDown: onPress,
    onClick: onClose,
    onMouseUp: mouseUp,
    name: "plus",
    size: "2",
    role: "closer"
  })));
};

InputChip.defaultProps = {
  variant: false,
  disabled: false
};
InputChip.propTypes = {
  value: propTypes.string.isRequired,
  disabled: propTypes.bool,
  variant: propTypes.bool,
  onClose: propTypes.func.isRequired
};

var styles$b = {"progressBar":"_R0HpQ","simpleLabel":"_1Jsh1","multiHeader":"_9q7I_","multiHeaderLabel":"_2mYPG","barContainer":"_3LHm2","bar":"_2T33C","bellowContent":"_1lqZ7","between":"_3muIL","end":"_1xSRa","reverse":"_kTBcR","full":"_1WMCD"};

var ProgressBar = function ProgressBar(_ref) {
  var label = _ref.label,
      progress = _ref.progress,
      assistText = _ref.assistText,
      percent = _ref.percent,
      helperAlign = _ref.helperAlign,
      reverse = _ref.reverse;
  var alignment = assistText && percent ? styles$b.between : styles$b[helperAlign];
  var direction = reverse ? styles$b.reverse : null;
  var bellowClasses = [styles$b.bellowContent, alignment, direction];
  return /*#__PURE__*/React.createElement("div", {
    className: styles$b.progressBar
  }, !Array.isArray(label) ? /*#__PURE__*/React.createElement("div", {
    className: styles$b.simpleLabel
  }, label) : /*#__PURE__*/React.createElement("div", {
    className: styles$b.multiHeader
  }, label.map(function (el, i) {
    return /*#__PURE__*/React.createElement("div", {
      key: i
    }, /*#__PURE__*/React.createElement("label", {
      className: styles$b.multiHeaderLabel
    }, el.label), /*#__PURE__*/React.createElement("div", null, el.text));
  })), /*#__PURE__*/React.createElement("div", {
    className: styles$b.barContainer
  }, /*#__PURE__*/React.createElement("div", {
    className: styles$b.bar,
    "data-progress": progress,
    style: {
      width: progress + "%"
    }
  })), assistText || percent ? /*#__PURE__*/React.createElement("div", {
    className: bellowClasses.join(' ').trim(),
    role: "helper"
  }, assistText, percent && /*#__PURE__*/React.createElement("div", {
    className: Number(progress) === 100 ? styles$b.full : null
  }, progress + "%")) : null);
};

ProgressBar.defaultProps = {
  label: '',
  assistText: '',
  progress: 0,
  percent: false,
  helperAlign: 'start',
  reverse: false
};
ProgressBar.propTypes = {
  label: propTypes.oneOfType([propTypes.string, propTypes.arrayOf(propTypes.shape({
    label: propTypes.string,
    text: propTypes.string
  }))]),
  assistText: propTypes.string,
  progress: propTypes.number,
  percent: propTypes.bool,
  reverse: propTypes.bool,
  helperAlign: propTypes.oneOf(['start', 'between', 'end'])
};

var styles$c = {"error":"_17A9A","warning":"_1o0c4","success":"_8m-fm","info":"_1CoXU","boxCircle":"_2C1_e","bulletElement":"_1OQ67","disabled":"_2hJYv","prefixContainer":"_2vm2y","prefixItem":"_3BrA8","textContainer":"_3DxYi","active":"_1eHUK"};

var BulletElement = function BulletElement(_ref) {
  var count = _ref.count,
      disabled = _ref.disabled,
      text = _ref.text,
      typeList = _ref.typeList,
      prefixType = _ref.prefixType,
      contentType = _ref.contentType,
      icon = _ref.icon,
      type = _ref.type,
      props = _objectWithoutPropertiesLoose(_ref, ["count", "disabled", "text", "typeList", "prefixType", "contentType", "icon", "type", "index"]);

  var numberList = count + 1;
  var styleContainer = [styles$c.bulletElement];
  var stylePrefixContainer = [styles$c.prefixContainer];
  var styleBoxCircle = [styles$c.boxCircle];
  var styleTextContainer = [styles$c.textContainer];

  var setStyles = function setStyles(typeParam, typeListParam, prefixParam, contentParam) {
    if (disabled !== undefined && disabled === true) {
      styleContainer = styleContainer.concat(styles$c.disabled);
      return;
    }

    var styleTypeContainer = [styles$c["" + typeParam]];

    if (type !== undefined && type !== '') {
      styleContainer = styleContainer.concat(styleTypeContainer);

      if (typeList !== undefined) {
        styleBoxCircle = styleBoxCircle.concat(styleTypeContainer);
        return;
      }
    } else if (prefixType !== undefined || contentType !== undefined) {
      var stylePrefix = [styles$c["" + prefixParam]];
      var styleContent = [styles$c["" + contentParam]];
      styleBoxCircle = [styles$c.boxCircle, styles$c["" + prefixParam]];

      if (prefixType !== undefined) {
        if (typeListParam !== 'unorder') {
          stylePrefixContainer = stylePrefixContainer.concat(stylePrefix);
        }
      }

      if (contentType !== undefined) {
        styleTextContainer = styleTextContainer.concat(styleContent);
      }
    }
  };

  setStyles(type, typeList, prefixType, contentType);
  var defaultPrefix = typeList === 'order' ? /*#__PURE__*/React.createElement("div", {
    "data-testid": "test-prefix-bullet-order",
    className: stylePrefixContainer.join(' ')
  }, numberList, ".") : typeList === 'unorder' ? /*#__PURE__*/React.createElement("div", {
    "data-testid": "test-prefix-bullet-unorder",
    className: stylePrefixContainer.join(' ')
  }, /*#__PURE__*/React.createElement("div", {
    "data-testid": "test-prefix-bullet",
    className: styleBoxCircle.join(' ')
  }, " ")) : typeList === 'icons' ? /*#__PURE__*/React.createElement("div", {
    "data-testid": "test-prefix-bullet-icons",
    className: stylePrefixContainer.join(' ')
  }, /*#__PURE__*/React.createElement(Icon, {
    size: "1",
    name: icon
  })) : '';
  return /*#__PURE__*/React.createElement("div", {
    "data-testid": "test-bullet-" + typeList,
    className: styleContainer.join(' ')
  }, defaultPrefix, /*#__PURE__*/React.createElement("p", {
    "data-testid": "test-bullet-content",
    className: styleTextContainer.join(' ')
  }, text));
};
BulletElement.defaultProps = {
  icon: 'check'
};
BulletElement.propTypes = {
  disable: propTypes.bool,
  text: propTypes.string.isRequired,
  prefixType: function prefixType(props) {
    if (props['type'] !== undefined && props['prefixType'] !== undefined) {
      return new Error('If prefixType prop it is defined not define type');
    }
  },
  type: function type(props) {
    if (props['prefixType'] !== undefined && props['type'] !== undefined) {
      return new Error('If prefixType2 prop it is defined not define type');
    }

    if (props['contentType'] !== undefined && props['type'] !== undefined) {
      return new Error('If contentType prop it is defined not define type');
    }
  }
};

var Bullets = function Bullets(_ref) {
  var items = _ref.items,
      typeList = _ref.typeList;
  var typeOfBullet = typeList ? typeList : '';
  var itemsBullets = items ? items : [];
  return /*#__PURE__*/React.createElement("div", null, typeOfBullet === 'order' ? itemsBullets.map(function (element, index) {
    return /*#__PURE__*/React.createElement(BulletElement, _extends({
      key: index,
      count: index,
      typeList: typeOfBullet
    }, element));
  }) : typeOfBullet === 'unorder' ? itemsBullets.map(function (element, index) {
    return /*#__PURE__*/React.createElement(BulletElement, _extends({
      key: index
    }, element, {
      typeList: typeOfBullet
    }));
  }) : typeOfBullet === 'icons' ? itemsBullets.map(function (element, index) {
    return /*#__PURE__*/React.createElement(BulletElement, _extends({
      key: index
    }, element, {
      typeList: typeOfBullet
    }));
  }) : '');
};

Bullets.defaults = {
  typeList: 'order',
  items: [{}]
};
Bullets.propTypes = {
  typeList: propTypes.string.isRequired,
  items: propTypes.array.isRequired
};

var styles$d = {"fadeInFromNone":"_QneFP","containerTooltip":"_2kFow","box":"_3hy_8","arrow":"_T5dKc","content":"_2N_0M"};

var Tooltip = function Tooltip(_ref) {
  var children = _ref.children,
      content = _ref.content,
      placement = _ref.placement,
      eventListener = _ref.eventListener,
      props = _objectWithoutPropertiesLoose(_ref, ["children", "content", "placement", "eventListener"]);

  var refBoxTooltip = createRef();
  var refContainerTooltip = createRef();
  var refContainerTippy = createRef();

  var _useState = useState(false),
      visible = _useState[0],
      setVisible = _useState[1];

  var setOpacity = function setOpacity(event) {
    if (eventListener === 'hover') {
      if (event === 'leave') {
        setVisible(false);
        refBoxTooltip.current.style.opacity = 0;
      }

      if (event === 'enter') {
        setVisible(true);
        refBoxTooltip.current.style.opacity = 1;
      }
    }

    if (eventListener === 'mouseClick') {
      console.log('click');

      if (visible) {
        refBoxTooltip.current.style.opacity = 0;
        setVisible(false);
      } else {
        refBoxTooltip.current.style.opacity = 1;
        setVisible(true);
      }
    }
  };

  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    "data-testid": "test-container",
    visible: visible.toString(),
    className: styles$d.containerTooltip,
    ref: refContainerTooltip,
    onClick: function onClick() {
      return eventListener === 'mouseClick' ? setOpacity('mouseClick') : false;
    },
    onMouseEnter: function onMouseEnter(e) {
      return eventListener === 'hover' ? setOpacity('enter') : false;
    },
    onMouseLeave: function onMouseLeave() {
      return eventListener === 'hover' ? setOpacity('leave') : false;
    }
  }), /*#__PURE__*/React.createElement(Tippy, {
    offset: [0, 20],
    arrow: true,
    appendTo: "parent",
    placement: placement,
    visible: true,
    animation: false,
    render: function render(attrs) {
      return /*#__PURE__*/React.createElement("div", _extends({
        "data-testid": "test-box",
        ref: refBoxTooltip,
        className: styles$d.box,
        tabIndex: "-1"
      }, attrs), /*#__PURE__*/React.createElement("div", {
        "data-testid": "test-box-content",
        ref: refContainerTippy,
        className: styles$d.content
      }, /*#__PURE__*/React.createElement("p", null, " ", content)), /*#__PURE__*/React.createElement("div", {
        "data-testid": "test-box-arrow",
        id: "arrow",
        className: styles$d.arrow
      }, " "));
    }
  }, /*#__PURE__*/React.createElement("span", null, children)));
};
Tooltip.defaultProps = {
  content: 'Text for tooltip',
  placement: 'top',
  eventListener: 'hover'
};
Tooltip.propTypes = {
  placement: propTypes.oneOf(['top', 'bottom', 'right', 'right-end', 'left']),
  eventListener: propTypes.oneOf(['mouseClick', 'hover']),
  content: propTypes.string.isRequired
};

var styles$e = {"message":"_3g_Jc","prefix":"_3hi6e","textContainer":"_10WAf","actionContainer":"_3_FT8","error":"_hllCz","success":"_2_19H","info":"_2aIvC","warning":"_2x3Y6"};

var Message = function Message(_ref) {
  var title = _ref.title,
      action = _ref.action,
      type = _ref.type,
      className = _ref.className,
      description = _ref.description;
  var messageClasses = [styles$e.message, styles$e[type], className];

  var getIcon = function getIcon() {
    switch (type) {
      case 'success':
        return 'check';

      case 'info':
        return 'information';

      case 'error':
        return 'cross';

      case 'warning':
        return 'alert';
    }
  };

  return /*#__PURE__*/React.createElement("div", {
    className: messageClasses.join(' ').trim(),
    role: "message"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: getIcon(),
    className: styles$e.prefix
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$e.textContainer
  }, title && /*#__PURE__*/React.createElement("div", null, " ", title, " "), description && /*#__PURE__*/React.createElement("p", null, " ", description, " ")), /*#__PURE__*/React.createElement("div", {
    className: styles$e.actionContainer
  }, action));
};

Message.defaultProps = {
  type: 'info'
};
Message.propTypes = {
  type: propTypes.oneOf(['error', 'success', 'info', 'warning']).isRequired,
  title: propTypes.string,
  description: propTypes.string,
  action: propTypes.element
};

var styles$f = {"inputLabel":"_13ZQ9","inputRow":"_3Bpsc","crossIcon":"_3SFyS","filterIcon":"_2WUK6","inputConteiner":"_dxBJC","disabled":"_qZaL1"};

var InputSearch = function InputSearch(_ref) {
  var label = _ref.label,
      filterAction = _ref.filterAction,
      clearAction = _ref.clearAction,
      props = _objectWithoutPropertiesLoose(_ref, ["label", "filterAction", "clearAction"]);

  var inputContainerClases = [styles$f.inputConteiner];

  if (props.disabled) {
    inputContainerClases = inputContainerClases.concat(styles$f.disabled);
  }

  var prefix = /*#__PURE__*/React.createElement(Icon, {
    role: "search-icon",
    name: "line-search",
    size: 1
  });
  var suffix = /*#__PURE__*/React.createElement(Icon, {
    role: "cross-icon",
    onClick: clearAction,
    className: styles$f.crossIcon,
    name: "cross",
    size: 1
  });
  return /*#__PURE__*/React.createElement("div", {
    className: inputContainerClases.join(' ').trim()
  }, label && /*#__PURE__*/React.createElement("span", {
    className: styles$f.inputLabel
  }, " ", label, " "), /*#__PURE__*/React.createElement("div", {
    className: styles$f.inputRow
  }, /*#__PURE__*/React.createElement(InputCore, _extends({}, props, {
    prefix: prefix,
    suffix: suffix
  })), /*#__PURE__*/React.createElement(Icon, {
    role: "filter-icon",
    onClick: filterAction,
    name: "line-filter",
    size: 1,
    className: styles$f.filterIcon
  })));
};

InputSearch.defaultProps = {
  filterAction: function filterAction() {
    return null;
  },
  clearAction: function clearAction() {
    return null;
  }
};
InputSearch.propTypes = {
  label: propTypes.string,
  value: propTypes.string,
  onChange: propTypes.func,
  filterAction: propTypes.func,
  clearAction: propTypes.func
};

var inputStyles$2 = {"input":"_3SDeG","suffixContainer":"_1RIWf","inputContainer":"_3ZeLa","disabled":"_tQrqh","inputLabel":"_30ukr","optionRow":"_3k3jO","optionContainer":"_Do9PN","bellowContainer":"_2-1yB","prefixContainer":"_15505","currentElement":"_1ZRzS","inputHelper":"_1F3qg"};

var InputSelect = function InputSelect(_ref) {
  var label = _ref.label,
      assistText = _ref.assistText,
      options = _ref.options,
      current = _ref.current,
      onSelected = _ref.onSelected,
      props = _objectWithoutPropertiesLoose(_ref, ["label", "assistText", "options", "current", "onSelected"]);

  var _useState = useState(false),
      optionOpen = _useState[0],
      setOptionOpen = _useState[1];

  var inputStyle = [inputStyles$2.input, inputStyles$2.hasSuffix];
  var validateStyle = [];

  if (props.disabled) {
    validateStyle = validateStyle.concat(inputStyles$2.disabled);
  }

  var handlerOpen = function handlerOpen() {
    if (optionOpen || props.disabled) return;
    setOptionOpen(true);

    var globalClick = function globalClick() {
      setOptionOpen(false);
      setTimeout(function () {
        return document.removeEventListener('click', globalClick);
      }, 10);
    };

    document.addEventListener('click', globalClick);
  };

  var getRow = function getRow(el, key) {
    try {
      var action = key === 'selected' ? null : function () {
        return onSelected(el.value);
      };
      var isDisabled = el.disabled && el.disabled === true ? inputStyles$2.disabled : '';
      return /*#__PURE__*/React.createElement("div", {
        key: key,
        className: [inputStyles$2.optionRow, isDisabled].join(' ').trim(),
        onClick: action
      }, el.prefix && /*#__PURE__*/React.createElement("div", {
        className: inputStyles$2.prefixContainer
      }, " ", /*#__PURE__*/React.createElement(Icon, {
        size: 1,
        name: el.prefix
      })), el.text);
    } catch (e) {
      return /*#__PURE__*/React.createElement("div", {
        role: "empty",
        className: inputStyles$2.optionRow
      });
    }
  };

  return /*#__PURE__*/React.createElement("div", {
    role: "select",
    className: [inputStyles$2.inputContainer, validateStyle].join(' ')
  }, optionOpen, label && /*#__PURE__*/React.createElement("span", {
    className: inputStyles$2.inputLabel
  }, " ", label, " "), /*#__PURE__*/React.createElement("div", {
    className: inputStyle.join(' ')
  }, /*#__PURE__*/React.createElement("div", {
    role: "dropdown",
    className: inputStyles$2.currentElement,
    onClick: handlerOpen
  }, getRow(options.find(function (ob) {
    return ob.value === current;
  }), 'selected')), /*#__PURE__*/React.createElement("div", {
    className: inputStyles$2.suffixContainer
  }, " ", /*#__PURE__*/React.createElement(Icon, {
    size: 1,
    name: optionOpen ? "arrow-up" : "arrow-down"
  }), " ")), /*#__PURE__*/React.createElement("div", {
    className: inputStyles$2.bellowContainer
  }, optionOpen && /*#__PURE__*/React.createElement("div", {
    className: inputStyles$2.optionContainer
  }, options.filter(function (el) {
    return el.disabled !== true;
  }).map(getRow)), /*#__PURE__*/React.createElement("div", {
    className: [inputStyles$2.inputHelper].join(' ')
  }, assistText)));
};

InputSelect.defaultProps = {
  onSelected: function onSelected() {
    return null;
  },
  current: '',
  disabled: false,
  options: []
};
InputSelect.propTypes = {
  onSelected: propTypes.func,
  label: propTypes.string,
  current: propTypes.string,
  assistText: propTypes.string,
  disabled: propTypes.bool,
  options: propTypes.arrayOf(propTypes.shape({
    prefix: propTypes.string,
    text: propTypes.string,
    value: propTypes.string.isRequired,
    disabled: propTypes.bool
  })).isRequired
};

export { Bullets, Button, Card, Checkbox, Grid, Header, HeaderItem, HeaderProfileItem, Icon, Input, InputChip, InputSearch, InputSelect, Loading, Logo, Message, ProgressBar, Radio, Separator, Sidebar, SidebarElement, Switch, TitleSection, Tooltip };
//# sourceMappingURL=index.modern.js.map
