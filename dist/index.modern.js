import React from 'react';

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

var icons = {"size-1":"__coopeuch-icon__size-1__E20oA","size-2":"__coopeuch-icon__size-2__1LAUs","size-3":"__coopeuch-icon__size-3__3tmzu","size-4":"__coopeuch-icon__size-4__f8f2b","size-5":"__coopeuch-icon__size-5__3WQf-","size-6":"__coopeuch-icon__size-6__325my","size-7":"__coopeuch-icon__size-7__vbJDw","size-8":"__coopeuch-icon__size-8__HfeIC","icon-alert":"__coopeuch-icon__icon-alert__1sBsM","icon-line-alarm":"__coopeuch-icon__icon-line-alarm__2RIcO","icon-line-alert":"__coopeuch-icon__icon-line-alert__3KOrG","icon-line-app-notification":"__coopeuch-icon__icon-line-app-notification__RJ0_m","icon-line-block":"__coopeuch-icon__icon-line-block__1g4pS","icon-line-bookmark":"__coopeuch-icon__icon-line-bookmark__2GpnG","icon-line-bug":"__coopeuch-icon__icon-line-bug__3AZWC","icon-line-check-double":"__coopeuch-icon__icon-line-check-double__3wnRC","icon-line-check":"__coopeuch-icon__icon-line-check__18ly6","icon-line-cloud-disable":"__coopeuch-icon__icon-line-cloud-disable__1ysM1","icon-line-cloud-download":"__coopeuch-icon__icon-line-cloud-download__1Da4J","icon-line-cloud-upload":"__coopeuch-icon__icon-line-cloud-upload__1x9gk","icon-line-cloud":"__coopeuch-icon__icon-line-cloud__2BF9r","icon-line-cogwheel":"__coopeuch-icon__icon-line-cogwheel__4L5xo","icon-line-copy":"__coopeuch-icon__icon-line-copy__2UUan","icon-line-cross":"__coopeuch-icon__icon-line-cross__3h620","icon-line-cut":"__coopeuch-icon__icon-line-cut__3nbjj","icon-line-dashboard":"__coopeuch-icon__icon-line-dashboard__3-F1c","icon-line-down":"__coopeuch-icon__icon-line-down__1BtUm","icon-line-download-queue":"__coopeuch-icon__icon-line-download-queue__1Bzeq","icon-line-download":"__coopeuch-icon__icon-line-download__1ya1g","icon-line-draft":"__coopeuch-icon__icon-line-draft__2zcb0","icon-line-exit-fullscreen":"__coopeuch-icon__icon-line-exit-fullscreen__3-iPg","icon-line-eye-close":"__coopeuch-icon__icon-line-eye-close__iKLUO","icon-line-eye-open":"__coopeuch-icon__icon-line-eye-open__X00tw","icon-line-female-user":"__coopeuch-icon__icon-line-female-user__28nK6","icon-line-file":"__coopeuch-icon__icon-line-file__12bYG","icon-line-filter":"__coopeuch-icon__icon-line-filter__2qj3b","icon-line-flag":"__coopeuch-icon__icon-line-flag__1wEMk","icon-line-fullscreen":"__coopeuch-icon__icon-line-fullscreen__30nA4","icon-line-heart":"__coopeuch-icon__icon-line-heart__2xUV8","icon-line-help":"__coopeuch-icon__icon-line-help__17kCM","icon-line-home":"__coopeuch-icon__icon-line-home__GFJAK","icon-line-information":"__coopeuch-icon__icon-line-information__2TJyw","icon-line-left":"__coopeuch-icon__icon-line-left__3u1Le","icon-line-lifebuoy":"__coopeuch-icon__icon-line-lifebuoy__2Rcxc","icon-line-list":"__coopeuch-icon__icon-line-list__2mHVG","icon-line-loading":"__coopeuch-icon__icon-line-loading__1LR3j","icon-line-lock":"__coopeuch-icon__icon-line-lock__2JH2p","icon-line-login":"__coopeuch-icon__icon-line-login__O6oaf","icon-line-logout":"__coopeuch-icon__icon-line-logout__gJ9V9","icon-line-menu-burger":"__coopeuch-icon__icon-line-menu-burger__19B15","icon-line-menu-dots":"__coopeuch-icon__icon-line-menu-dots__2RBwG","icon-line-microphone-disable":"__coopeuch-icon__icon-line-microphone-disable__3rb1K","icon-line-microphone":"__coopeuch-icon__icon-line-microphone__3vYJg","icon-line-minus":"__coopeuch-icon__icon-line-minus__2oxpx","icon-line-note":"__coopeuch-icon__icon-line-note__2PhOj","icon-line-notification-disable":"__coopeuch-icon__icon-line-notification-disable__o2GP1","icon-line-notification":"__coopeuch-icon__icon-line-notification__z7NJH","icon-line-paste":"__coopeuch-icon__icon-line-paste__ur2CY","icon-line-plus":"__coopeuch-icon__icon-line-plus__1ycj4","icon-line-power-sign":"__coopeuch-icon__icon-line-power-sign__20soH","icon-line-print":"__coopeuch-icon__icon-line-print__2FWOI","icon-line-puzzle":"__coopeuch-icon__icon-line-puzzle__2f5ID","icon-line-refresh":"__coopeuch-icon__icon-line-refresh__1j7oR","icon-line-reply-all":"__coopeuch-icon__icon-line-reply-all__1Umhx","icon-line-reply":"__coopeuch-icon__icon-line-reply__2XD0m","icon-line-right":"__coopeuch-icon__icon-line-right__2rqJI","icon-line-save":"__coopeuch-icon__icon-line-save__3VoE0","icon-line-screenshot":"__coopeuch-icon__icon-line-screenshot__R7-Gr","icon-line-search-check":"__coopeuch-icon__icon-line-search-check__3CN2k","icon-line-search-cross":"__coopeuch-icon__icon-line-search-cross__1BCb2","icon-line-search-minus":"__coopeuch-icon__icon-line-search-minus__2qNnr","icon-line-search-plus":"__coopeuch-icon__icon-line-search-plus__2j5Ww","icon-line-search":"__coopeuch-icon__icon-line-search__3fI_D","icon-line-share":"__coopeuch-icon__icon-line-share__1yWG4","icon-line-shield":"__coopeuch-icon__icon-line-shield__MoEtt","icon-line-snooze":"__coopeuch-icon__icon-line-snooze__1UARO","icon-line-star":"__coopeuch-icon__icon-line-star__2bbq2","icon-line-stars":"__coopeuch-icon__icon-line-stars__62pAb","icon-line-sync":"__coopeuch-icon__icon-line-sync__2whw7","icon-line-task":"__coopeuch-icon__icon-line-task__3w3Ha","icon-line-time":"__coopeuch-icon__icon-line-time__1YMzG","icon-line-trash-empty":"__coopeuch-icon__icon-line-trash-empty__3iI-C","icon-line-trash-full":"__coopeuch-icon__icon-line-trash-full__24vII","icon-line-trash":"__coopeuch-icon__icon-line-trash__2jR7w","icon-line-umbrella":"__coopeuch-icon__icon-line-umbrella__3EW_O","icon-line-unlock":"__coopeuch-icon__icon-line-unlock__1neIQ","icon-line-up":"__coopeuch-icon__icon-line-up__Z4C7v","icon-line-upload-queue":"__coopeuch-icon__icon-line-upload-queue__290Df","icon-line-upload":"__coopeuch-icon__icon-line-upload__2yyds","icon-line-user":"__coopeuch-icon__icon-line-user__1TgpF","icon-line-verification-fail":"__coopeuch-icon__icon-line-verification-fail__1R5fL","icon-line-verification":"__coopeuch-icon__icon-line-verification__9ButY","icon-line-wrench":"__coopeuch-icon__icon-line-wrench__1EXlz","icon-line-write":"__coopeuch-icon__icon-line-write__3NGI7","icon-arrow-down":"__coopeuch-icon__icon-arrow-down__2VkIL","icon-arrow-left":"__coopeuch-icon__icon-arrow-left__36it-","icon-arrow-right":"__coopeuch-icon__icon-arrow-right__3fBJt","icon-arrow-up":"__coopeuch-icon__icon-arrow-up__gcIuu","icon-alarm1":"__coopeuch-icon__icon-alarm1__2uq-r","icon-alert1":"__coopeuch-icon__icon-alert1__v3xRs","icon-app-notification1":"__coopeuch-icon__icon-app-notification1__2GJcD","icon-block":"__coopeuch-icon__icon-block__2FJt0","icon-bookmark":"__coopeuch-icon__icon-bookmark__2Gg_H","icon-bug":"__coopeuch-icon__icon-bug__1oFzp","icon-check-double":"__coopeuch-icon__icon-check-double__2pvnG","icon-check":"__coopeuch-icon__icon-check__Wb2XK","icon-cloud-disable":"__coopeuch-icon__icon-cloud-disable__j_7gN","icon-cloud-download":"__coopeuch-icon__icon-cloud-download__1dzy1","icon-cloud-upload":"__coopeuch-icon__icon-cloud-upload__2jnFK","icon-cloud":"__coopeuch-icon__icon-cloud__XL8Xi","icon-cogwheel":"__coopeuch-icon__icon-cogwheel__3mCNb","icon-copy":"__coopeuch-icon__icon-copy__1fOSF","icon-cross":"__coopeuch-icon__icon-cross__10QIh","icon-cut":"__coopeuch-icon__icon-cut__3fs14","icon-dashboard":"__coopeuch-icon__icon-dashboard__QRta1","icon-down":"__coopeuch-icon__icon-down__HXmn3","icon-download-queue":"__coopeuch-icon__icon-download-queue__3ICli","icon-download":"__coopeuch-icon__icon-download__2SdS4","icon-draft":"__coopeuch-icon__icon-draft__P7At8","icon-exit-fullscreen":"__coopeuch-icon__icon-exit-fullscreen__Mh01S","icon-eye-close":"__coopeuch-icon__icon-eye-close__1KjPQ","icon-eye-open":"__coopeuch-icon__icon-eye-open__3ATsw","icon-female-user":"__coopeuch-icon__icon-female-user__2Dfx_","icon-file":"__coopeuch-icon__icon-file__3bdqj","icon-filter":"__coopeuch-icon__icon-filter__295_z","icon-flag":"__coopeuch-icon__icon-flag__1TXC1","icon-fullscreen":"__coopeuch-icon__icon-fullscreen__FIx0R","icon-heart":"__coopeuch-icon__icon-heart__2g-zt","icon-help":"__coopeuch-icon__icon-help__1qlUa","icon-home":"__coopeuch-icon__icon-home__2JGHi","icon-information":"__coopeuch-icon__icon-information__2iZcp","icon-left":"__coopeuch-icon__icon-left__1WSQ-","icon-lifebuoy":"__coopeuch-icon__icon-lifebuoy__1SMNH","icon-list":"__coopeuch-icon__icon-list__ZRgfq","icon-loading":"__coopeuch-icon__icon-loading__3CMbC","icon-lock":"__coopeuch-icon__icon-lock__163V5","icon-login":"__coopeuch-icon__icon-login__2ii93","icon-logout":"__coopeuch-icon__icon-logout__1Z960","icon-menu-burger":"__coopeuch-icon__icon-menu-burger__2boVJ","icon-menu-dots":"__coopeuch-icon__icon-menu-dots__Li-Ov","icon-microphone-disable":"__coopeuch-icon__icon-microphone-disable__1bA0I","icon-microphone":"__coopeuch-icon__icon-microphone__TfNxZ","icon-minus":"__coopeuch-icon__icon-minus__2QDQO","icon-note":"__coopeuch-icon__icon-note__38j6H","icon-notification-disable":"__coopeuch-icon__icon-notification-disable__K1T2z","icon-notification":"__coopeuch-icon__icon-notification__2Ra63","icon-paste":"__coopeuch-icon__icon-paste__51DLi","icon-plus":"__coopeuch-icon__icon-plus__1HBpS","icon-power-sign":"__coopeuch-icon__icon-power-sign__1mx6V","icon-print":"__coopeuch-icon__icon-print__1GulE","icon-puzzle":"__coopeuch-icon__icon-puzzle__2lbdS","icon-refresh":"__coopeuch-icon__icon-refresh__Lubaw","icon-reply-all":"__coopeuch-icon__icon-reply-all__3KEs9","icon-reply":"__coopeuch-icon__icon-reply__8CChY","icon-right":"__coopeuch-icon__icon-right__xteAB","icon-save":"__coopeuch-icon__icon-save__2bqpv","icon-screenshot":"__coopeuch-icon__icon-screenshot__3SlDa","icon-search-alt":"__coopeuch-icon__icon-search-alt__1TlAn","icon-search-check":"__coopeuch-icon__icon-search-check__2TIsj","icon-search-cross":"__coopeuch-icon__icon-search-cross__2NZWr","icon-search-minus":"__coopeuch-icon__icon-search-minus__3c04X","icon-search-plus":"__coopeuch-icon__icon-search-plus__3deTb","icon-share":"__coopeuch-icon__icon-share__3rHQW","icon-shield":"__coopeuch-icon__icon-shield__2HTIc","icon-snooze":"__coopeuch-icon__icon-snooze__1H3-p","icon-star":"__coopeuch-icon__icon-star__ot_K-","icon-stars":"__coopeuch-icon__icon-stars__3n6WS","icon-sync":"__coopeuch-icon__icon-sync__g4AKq","icon-task":"__coopeuch-icon__icon-task__2iDpn","icon-time":"__coopeuch-icon__icon-time__rVrZO","icon-trash-empty":"__coopeuch-icon__icon-trash-empty__2rUqI","icon-trash-full":"__coopeuch-icon__icon-trash-full__2M4JD","icon-trash":"__coopeuch-icon__icon-trash__H5UfA","icon-umbrella":"__coopeuch-icon__icon-umbrella__1MSD1","icon-unlock":"__coopeuch-icon__icon-unlock__5VZLW","icon-up":"__coopeuch-icon__icon-up__1tEMX","icon-upload-queue":"__coopeuch-icon__icon-upload-queue__2EQnt","icon-upload":"__coopeuch-icon__icon-upload__MTrj9","icon-user":"__coopeuch-icon__icon-user__2cuT3","icon-verification-fail":"__coopeuch-icon__icon-verification-fail__3CYbD","icon-verification":"__coopeuch-icon__icon-verification__3hYBR","icon-wrench":"__coopeuch-icon__icon-wrench__2swwf","icon-write":"__coopeuch-icon__icon-write__2oNry"};

const Icon = ({
  name,
  size,
  className,
  ...props
}) => {
  const icon = icons[`icon-${name}`];
  const sizeWith = size > 0 && size <= 8 ? size : '1';
  const sizeSelected = icons[`size-${size}`] || icons[`size-1`];
  let renderStyles = ['coopeuch-icon'];

  if (className) {
    renderStyles = [...renderStyles].concat(className);
  }

  if (icon) {
    renderStyles = [...renderStyles].concat(icon);
  }

  if (sizeSelected) {
    renderStyles = [...renderStyles].concat(sizeSelected);
  }

  return /*#__PURE__*/React.createElement("i", Object.assign({}, props, {
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

var styles = {"elevation-1":"__buttons__elevation-1__dPRPV","elevation-2":"__buttons__elevation-2__1y5iI","elevation-3":"__buttons__elevation-3__1InEo","elevation-4":"__buttons__elevation-4__3oVmu","elevation-5":"__buttons__elevation-5__2qhR9","elevation-element-1":"__buttons__elevation-element-1__f0eVU","elevation-element-2":"__buttons__elevation-element-2__zNhrj","btn":"__buttons__btn__2p8qe","elevation-element-3":"__buttons__elevation-element-3__2kct1","elevation-element-4":"__buttons__elevation-element-4__5Pyxa","btn-primary":"__buttons__btn-primary__2fp8y","btn-secondary":"__buttons__btn-secondary__3lx5h","prefix":"__buttons__prefix__3KDDD","suffix":"__buttons__suffix__11hS9","btn-primary-outline":"__buttons__btn-primary-outline__13wED","btn-primary-text":"__buttons__btn-primary-text__1r-Fe","btn-secondary-outline":"__buttons__btn-secondary-outline__y6P2K","btn-secondary-text":"__buttons__btn-secondary-text__3TQXb"};

const Button = ({
  children,
  color,
  variant,
  disabled,
  prefix,
  suffix,
  ...props
}) => {
  const btnVariant = variant !== '' ? `-${variant}` : '';
  const btnStyles = [styles.btn, styles[`btn-${color}${btnVariant}`] || ''];
  return /*#__PURE__*/React.createElement("button", Object.assign({}, props, {
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
  onClick: () => null
};
Button.propTypes = {
  prefix: propTypes.string,
  suffix: propTypes.string,
  color: propTypes.oneOf(['primary', 'secondary']),
  variant: propTypes.oneOf(['', 'outline', 'text']),
  onClick: propTypes.func.isRequired,
  disabled: propTypes.bool
};

var gridStyles = {"container":"__grid__container__14kEn","container-fluid":"__grid__container-fluid__3HzEQ","container-sm":"__grid__container-sm__z_9u9","container-md":"__grid__container-md__2qcSz","container-lg":"__grid__container-lg__3VnX7","container-xl":"__grid__container-xl__bhEqE","row":"__grid__row__UYIH9","no-gutters":"__grid__no-gutters__3497d","col":"__grid__col__WdUKx","col-1":"__grid__col-1__2oac2","col-2":"__grid__col-2__2aKQ6","col-3":"__grid__col-3__1Ja7k","col-4":"__grid__col-4__b0o_p","col-5":"__grid__col-5__2y9KV","col-6":"__grid__col-6__j6U_N","col-7":"__grid__col-7__2cnib","col-8":"__grid__col-8__j_GRF","col-9":"__grid__col-9__3BV2S","col-10":"__grid__col-10__aijt7","col-11":"__grid__col-11__1uF6h","col-12":"__grid__col-12__16Mq4","col-auto":"__grid__col-auto__2Mnx4","col-sm-1":"__grid__col-sm-1__g_BYh","col-sm-2":"__grid__col-sm-2__p2Bkv","col-sm-3":"__grid__col-sm-3__2tBAn","col-sm-4":"__grid__col-sm-4__2Zrnf","col-sm-5":"__grid__col-sm-5__gq2Q6","col-sm-6":"__grid__col-sm-6__36wvN","col-sm-7":"__grid__col-sm-7__-xjYm","col-sm-8":"__grid__col-sm-8__qCgI9","col-sm-9":"__grid__col-sm-9__jglMn","col-sm-10":"__grid__col-sm-10__1Ddzm","col-sm-11":"__grid__col-sm-11__qAOmb","col-sm-12":"__grid__col-sm-12__360Zl","col-sm":"__grid__col-sm__2eo6T","col-sm-auto":"__grid__col-sm-auto__xYrp3","col-md-1":"__grid__col-md-1__1MDP_","col-md-2":"__grid__col-md-2__QnY1p","col-md-3":"__grid__col-md-3__2nlsV","col-md-4":"__grid__col-md-4__HQIaP","col-md-5":"__grid__col-md-5__1NiLw","col-md-6":"__grid__col-md-6__3bPY2","col-md-7":"__grid__col-md-7__wciee","col-md-8":"__grid__col-md-8__1H4wt","col-md-9":"__grid__col-md-9__KrrZO","col-md-10":"__grid__col-md-10__1gKWm","col-md-11":"__grid__col-md-11__1j8Cn","col-md-12":"__grid__col-md-12__ExYPp","col-md":"__grid__col-md__1Jn07","col-md-auto":"__grid__col-md-auto__1hpEj","col-lg-1":"__grid__col-lg-1__1kYkS","col-lg-2":"__grid__col-lg-2__3Ve2f","col-lg-3":"__grid__col-lg-3__38JX2","col-lg-4":"__grid__col-lg-4__1fUJA","col-lg-5":"__grid__col-lg-5__uKYiC","col-lg-6":"__grid__col-lg-6__jq4-x","col-lg-7":"__grid__col-lg-7__4TRJM","col-lg-8":"__grid__col-lg-8__28FDI","col-lg-9":"__grid__col-lg-9__5od1R","col-lg-10":"__grid__col-lg-10__3l02V","col-lg-11":"__grid__col-lg-11__1M3kU","col-lg-12":"__grid__col-lg-12__3b23J","col-lg":"__grid__col-lg__g2MV9","col-lg-auto":"__grid__col-lg-auto__38l7t","col-xl-1":"__grid__col-xl-1__1TFKO","col-xl-2":"__grid__col-xl-2__3H5NW","col-xl-3":"__grid__col-xl-3__2-3I8","col-xl-4":"__grid__col-xl-4__2bCzv","col-xl-5":"__grid__col-xl-5__FiM51","col-xl-6":"__grid__col-xl-6__22zbY","col-xl-7":"__grid__col-xl-7__Uz6KO","col-xl-8":"__grid__col-xl-8__3xW-U","col-xl-9":"__grid__col-xl-9__tx7dN","col-xl-10":"__grid__col-xl-10__g8oUp","col-xl-11":"__grid__col-xl-11__1NMog","col-xl-12":"__grid__col-xl-12__3xWBZ","col-xl":"__grid__col-xl__1obk1","col-xl-auto":"__grid__col-xl-auto__3B4QJ","row-cols-1":"__grid__row-cols-1__2KDZX","row-cols-2":"__grid__row-cols-2__2AZ0L","row-cols-3":"__grid__row-cols-3__1_Jez","row-cols-4":"__grid__row-cols-4__TPZ-D","row-cols-5":"__grid__row-cols-5__2VBE2","row-cols-6":"__grid__row-cols-6__1NJXc","order-first":"__grid__order-first__1ZEA2","order-last":"__grid__order-last__1FlxM","order-0":"__grid__order-0__3g6N8","order-1":"__grid__order-1__27fZm","order-2":"__grid__order-2__1-n0m","order-3":"__grid__order-3__1rlAk","order-4":"__grid__order-4__1xXWr","order-5":"__grid__order-5__2fRKt","order-6":"__grid__order-6__2TwlZ","order-7":"__grid__order-7__OxRQt","order-8":"__grid__order-8__Fniow","order-9":"__grid__order-9__1TRrL","order-10":"__grid__order-10__2qPqQ","order-11":"__grid__order-11__Uy2O6","order-12":"__grid__order-12__1Pbsy","offset-1":"__grid__offset-1__2Robc","offset-2":"__grid__offset-2__Zx4LU","offset-3":"__grid__offset-3__1RMUT","offset-4":"__grid__offset-4__lKEsr","offset-5":"__grid__offset-5__1C2Lc","offset-6":"__grid__offset-6__L8nKJ","offset-7":"__grid__offset-7__2wdLz","offset-8":"__grid__offset-8__2cugz","offset-9":"__grid__offset-9__2f92V","offset-10":"__grid__offset-10__3HEcr","offset-11":"__grid__offset-11__1FjQ3","row-cols-sm-1":"__grid__row-cols-sm-1__2Cqfh","row-cols-sm-2":"__grid__row-cols-sm-2__aRq2C","row-cols-sm-3":"__grid__row-cols-sm-3__mdj6b","row-cols-sm-4":"__grid__row-cols-sm-4__2YLRY","row-cols-sm-5":"__grid__row-cols-sm-5__2ytCO","row-cols-sm-6":"__grid__row-cols-sm-6__2Sv2Y","order-sm-first":"__grid__order-sm-first__37-vl","order-sm-last":"__grid__order-sm-last__nQLHh","order-sm-0":"__grid__order-sm-0__1nBLx","order-sm-1":"__grid__order-sm-1__3B5ZD","order-sm-2":"__grid__order-sm-2__2_7dp","order-sm-3":"__grid__order-sm-3__fFJcI","order-sm-4":"__grid__order-sm-4__1P-il","order-sm-5":"__grid__order-sm-5__3svwq","order-sm-6":"__grid__order-sm-6__2-X2m","order-sm-7":"__grid__order-sm-7__qv6ue","order-sm-8":"__grid__order-sm-8__1mVZg","order-sm-9":"__grid__order-sm-9__3leZv","order-sm-10":"__grid__order-sm-10__14eYB","order-sm-11":"__grid__order-sm-11__3fHA9","order-sm-12":"__grid__order-sm-12__3YGbr","offset-sm-0":"__grid__offset-sm-0__Ji6GE","offset-sm-1":"__grid__offset-sm-1__1xwIb","offset-sm-2":"__grid__offset-sm-2__1uaVT","offset-sm-3":"__grid__offset-sm-3__3JY3T","offset-sm-4":"__grid__offset-sm-4__1UZxV","offset-sm-5":"__grid__offset-sm-5__1sjCS","offset-sm-6":"__grid__offset-sm-6__shONY","offset-sm-7":"__grid__offset-sm-7__3apzC","offset-sm-8":"__grid__offset-sm-8__1VVCu","offset-sm-9":"__grid__offset-sm-9__2lE77","offset-sm-10":"__grid__offset-sm-10__1Jg_Q","offset-sm-11":"__grid__offset-sm-11__1VzVm","row-cols-md-1":"__grid__row-cols-md-1__3ROj2","row-cols-md-2":"__grid__row-cols-md-2__2NJM4","row-cols-md-3":"__grid__row-cols-md-3__3IouR","row-cols-md-4":"__grid__row-cols-md-4__1zciP","row-cols-md-5":"__grid__row-cols-md-5__3GPlG","row-cols-md-6":"__grid__row-cols-md-6__3Yypo","order-md-first":"__grid__order-md-first__YId5-","order-md-last":"__grid__order-md-last__FoL1t","order-md-0":"__grid__order-md-0__11X2_","order-md-1":"__grid__order-md-1__29ppz","order-md-2":"__grid__order-md-2__BX_wA","order-md-3":"__grid__order-md-3__3vovI","order-md-4":"__grid__order-md-4__1DG-r","order-md-5":"__grid__order-md-5__1t-wS","order-md-6":"__grid__order-md-6__xhpHy","order-md-7":"__grid__order-md-7__1KW3a","order-md-8":"__grid__order-md-8__12iOD","order-md-9":"__grid__order-md-9__2o7SZ","order-md-10":"__grid__order-md-10__30TSh","order-md-11":"__grid__order-md-11__3a2ES","order-md-12":"__grid__order-md-12__17gjx","offset-md-0":"__grid__offset-md-0__3SIYS","offset-md-1":"__grid__offset-md-1__9sDKs","offset-md-2":"__grid__offset-md-2__2LaPL","offset-md-3":"__grid__offset-md-3__3tebD","offset-md-4":"__grid__offset-md-4__18n2k","offset-md-5":"__grid__offset-md-5__joIgt","offset-md-6":"__grid__offset-md-6__1q1LS","offset-md-7":"__grid__offset-md-7__K5T5U","offset-md-8":"__grid__offset-md-8__1bjmQ","offset-md-9":"__grid__offset-md-9__1jm7r","offset-md-10":"__grid__offset-md-10__1SlPm","offset-md-11":"__grid__offset-md-11__PRoM9","row-cols-lg-1":"__grid__row-cols-lg-1__1l-Ab","row-cols-lg-2":"__grid__row-cols-lg-2__1VCF7","row-cols-lg-3":"__grid__row-cols-lg-3__38pSz","row-cols-lg-4":"__grid__row-cols-lg-4__3MNUX","row-cols-lg-5":"__grid__row-cols-lg-5__1ZPJw","row-cols-lg-6":"__grid__row-cols-lg-6__25fN8","order-lg-first":"__grid__order-lg-first__6acFv","order-lg-last":"__grid__order-lg-last__2AuqS","order-lg-0":"__grid__order-lg-0__2GeAp","order-lg-1":"__grid__order-lg-1__1H7K7","order-lg-2":"__grid__order-lg-2__MYlUI","order-lg-3":"__grid__order-lg-3__3Q3rS","order-lg-4":"__grid__order-lg-4__Rl2vD","order-lg-5":"__grid__order-lg-5__2mrT8","order-lg-6":"__grid__order-lg-6__3FBi8","order-lg-7":"__grid__order-lg-7__3-wtn","order-lg-8":"__grid__order-lg-8__2KbpA","order-lg-9":"__grid__order-lg-9__2-Zpx","order-lg-10":"__grid__order-lg-10__1Ksq5","order-lg-11":"__grid__order-lg-11__3oMde","order-lg-12":"__grid__order-lg-12__3tvoB","offset-lg-0":"__grid__offset-lg-0__3ANrG","offset-lg-1":"__grid__offset-lg-1__1dJCm","offset-lg-2":"__grid__offset-lg-2__7RGUZ","offset-lg-3":"__grid__offset-lg-3__3HK2f","offset-lg-4":"__grid__offset-lg-4__2j5R6","offset-lg-5":"__grid__offset-lg-5__2QCMg","offset-lg-6":"__grid__offset-lg-6__3jf4w","offset-lg-7":"__grid__offset-lg-7__pOUQI","offset-lg-8":"__grid__offset-lg-8__2fHoJ","offset-lg-9":"__grid__offset-lg-9__1U4zu","offset-lg-10":"__grid__offset-lg-10__16S5i","offset-lg-11":"__grid__offset-lg-11__2SkJN","row-cols-xl-1":"__grid__row-cols-xl-1__3RG4D","row-cols-xl-2":"__grid__row-cols-xl-2__ZvXCx","row-cols-xl-3":"__grid__row-cols-xl-3__EUhdv","row-cols-xl-4":"__grid__row-cols-xl-4__3RRjt","row-cols-xl-5":"__grid__row-cols-xl-5__1Cq7j","row-cols-xl-6":"__grid__row-cols-xl-6__3XAEM","order-xl-first":"__grid__order-xl-first__3AJuA","order-xl-last":"__grid__order-xl-last__289w5","order-xl-0":"__grid__order-xl-0__3wkjk","order-xl-1":"__grid__order-xl-1__1qVNF","order-xl-2":"__grid__order-xl-2__3KD7H","order-xl-3":"__grid__order-xl-3__2CmD8","order-xl-4":"__grid__order-xl-4__3hL_C","order-xl-5":"__grid__order-xl-5__YEmoW","order-xl-6":"__grid__order-xl-6__3iHlB","order-xl-7":"__grid__order-xl-7__1D3Bm","order-xl-8":"__grid__order-xl-8__2lHpd","order-xl-9":"__grid__order-xl-9__IMgOv","order-xl-10":"__grid__order-xl-10__2gsV6","order-xl-11":"__grid__order-xl-11__1cf7J","order-xl-12":"__grid__order-xl-12__2iwf0","offset-xl-0":"__grid__offset-xl-0__1xbZ5","offset-xl-1":"__grid__offset-xl-1__rSZgC","offset-xl-2":"__grid__offset-xl-2__2-q6r","offset-xl-3":"__grid__offset-xl-3__18aVH","offset-xl-4":"__grid__offset-xl-4__L_fbC","offset-xl-5":"__grid__offset-xl-5__1-42j","offset-xl-6":"__grid__offset-xl-6__1nSva","offset-xl-7":"__grid__offset-xl-7__27qri","offset-xl-8":"__grid__offset-xl-8__3wrlN","offset-xl-9":"__grid__offset-xl-9__JTcR4","offset-xl-10":"__grid__offset-xl-10__2Lf0i","offset-xl-11":"__grid__offset-xl-11__2pahu"};

const Grid = ({
  variant: _variant = 'div',
  col,
  row,
  children,
  sm,
  md,
  lg,
  xl,
  ...props
}) => {
  let styles = row ? [gridStyles.row] : [gridStyles.col];

  if (col) {
    styles = styles.concat(gridStyles[`col-${col}`]);
  }

  if (sm) {
    styles = styles.concat(gridStyles[`col-sm-${sm}`]);
  }

  if (md) {
    styles = styles.concat(gridStyles[`col-md-${md}`]);
  }

  if (lg) {
    styles = styles.concat(gridStyles[`col-lg-${lg}`]);
  }

  if (xl) {
    styles = styles.concat(gridStyles[`col-xl-${xl}`]);
  }

  return React.createElement(_variant, { ...props,
    className: styles.concat(props.className || '').join(' ')
  }, children);
};

Grid.defaultProps = {
  variant: 'div',
  onClick: () => null
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

var styles$1 = {"card":"__card__card__3sTov","border":"__card__border__11O64","elevation-1":"__card__elevation-1__fQijz","elevation-2":"__card__elevation-2__1FoZl","elevation-3":"__card__elevation-3__2Gzj7","elevation-4":"__card__elevation-4__G6ONN","animated":"__card__animated__31-Hr","elevation-5":"__card__elevation-5__2NrqS","selected":"__card__selected__1xLNT","all":"__card__all__2tVcK"};

const Card = ({
  border,
  animated,
  children,
  ...props
}) => {
  let cardStules = [styles$1.card];
  cardStules = border ? cardStules.concat(styles$1.border) : cardStules.concat(styles$1['elevation-1']);

  if (props.onClick && !border) {
    cardStules = cardStules.concat(styles$1.animated);
  }

  if (props.selected) {
    cardStules = cardStules.concat(styles$1.selected);
  }

  return /*#__PURE__*/React.createElement("div", Object.assign({}, props, {
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

var styles$2 = {"checkbox":"__checkbox__checkbox__thjTm","checked":"__checkbox__checked__33SlG","disabled":"__checkbox__disabled__3ZT4M","unchecked":"__checkbox__unchecked__35rqG"};

const Checkbox = ({
  variant,
  checked,
  onChange,
  disabled,
  ...props
}) => {
  const color = disabled ? "#9C9A9F" : checked ? "#007DB7" : "#646569";
  const disabledClass = disabled ? styles$2.disabled : '';
  const checkedClass = checked ? styles$2.checked : styles$2.unchecked;
  return /*#__PURE__*/React.createElement("label", {
    className: [styles$2.checkbox].concat(disabledClass).concat(checkedClass).join(' ')
  }, /*#__PURE__*/React.createElement("input", Object.assign({
    "data-testid": "checkbox",
    disabled: disabled,
    type: "checkbox",
    checked: checked,
    onChange: onChange ? ({
      target
    }) => onChange(target.checked) : null
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
  onChange: () => null
};
Checkbox.propTypes = {
  disabled: propTypes.bool,
  variant: propTypes.bool,
  checked: propTypes.bool.isRequired,
  onChange: propTypes.func
};

const Logo = props => /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
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

var headerItemStyles = {"headerItem":"__headerItem__headerItem__1UvJ-"};

const HeaderItem = ({
  icon,
  children,
  ...props
}) => {
  return /*#__PURE__*/React.createElement("div", Object.assign({
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

var headerStyle = {"profileItemContainer":"__headerProfileItem__profileItemContainer__1DOtA","circleAvatar":"__headerProfileItem__circleAvatar__37wn_","date":"__headerProfileItem__date__jX4xS","profileBoxUsername":"__headerProfileItem__profileBoxUsername__qpvql","profileBox":"__headerProfileItem__profileBox__2h4-x"};

const HeaderProfileItem = ({
  name,
  date,
  ...props
}) => {
  const options = {
    day: 'numeric',
    year: 'numeric',
    month: 'short'
  };
  const circlerContent = name.split(' ').reduce((acc, text) => acc.concat(text[0]), []).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("div", Object.assign({
    className: `${headerStyle.profileItemContainer}`
  }, props), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: headerStyle.circleAvatar
  }, circlerContent)), /*#__PURE__*/React.createElement("div", {
    className: headerStyle.profileBox
  }, /*#__PURE__*/React.createElement("span", {
    className: headerStyle.profileBoxUsername
  }, name), /*#__PURE__*/React.createElement("p", {
    className: headerStyle.date
  }, /*#__PURE__*/React.createElement("small", null, "\xDAltimo acceso ", date.toLocaleDateString('es-ES', options), " - ", `${date.getHours()}:${date.getMinutes()}`, " hrs "))), /*#__PURE__*/React.createElement(Icon, {
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

var Styles = {"header":"__header__header__3MNoG","headerOptionsContainer":"__header__headerOptionsContainer__1zBVI","headerLeftArea":"__header__headerLeftArea__YJliS","flex":"__header__flex__1N4JG","profileItemContainer":"__header__profileItemContainer__1Q2Mz","headerLogoContainer":"__header__headerLogoContainer__MYTjX"};

const Header = ({
  children,
  logo,
  logOut,
  userData,
  ...props
}) => {
  const headerStyleContainer = [Styles.header].concat(props.className).join(' ');
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

var inputStyles = {"input":"__input__input__1uZsF","suffixContainer":"__input__suffixContainer__2zhrL","prefixContainer":"__input__prefixContainer__1GbCQ","inputContainer":"__input__inputContainer__2lUSM","error":"__input__error__1s8q6","success":"__input__success__UYGJi","disabled":"__input__disabled__1OvLQ","inputLabel":"__input__inputLabel__q2gh-","hasPrefix":"__input__hasPrefix__3N5pB","hasSuffix":"__input__hasSuffix__1KIfx","inputHelper":"__input__inputHelper__3IoKh","successText":"__input__successText__1FylX","errorText":"__input__errorText__1-t8w"};

const Input = ({
  label,
  assistText,
  error,
  success,
  suffix,
  prefix,
  variant,
  ...props
}) => {
  const {
    maxLength
  } = props;
  let inputStyle = [inputStyles.input];
  let validateStyle = [];

  if (prefix) {
    inputStyle = inputStyle.concat(inputStyles.hasPrefix);
  }

  if (suffix) {
    inputStyle = inputStyle.concat(inputStyles.hasSuffix);
  }

  if (error === true) {
    validateStyle = validateStyle.concat(inputStyles.error);
  } else if (success === true) {
    validateStyle = validateStyle.concat(inputStyles.success);
  }

  if (props.disabled) {
    validateStyle = validateStyle.concat(inputStyles.disabled);
  }

  const getHelperText = element => {
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
  }, " ", label, " "), /*#__PURE__*/React.createElement("div", {
    className: inputStyle.join(' ')
  }, prefix && /*#__PURE__*/React.createElement("div", {
    className: inputStyles.prefixContainer
  }, prefix), variant && variant === 'textarea' ? /*#__PURE__*/React.createElement("textarea", props) : /*#__PURE__*/React.createElement("input", props), suffix && /*#__PURE__*/React.createElement("div", {
    className: inputStyles.suffixContainer
  }, suffix)), /*#__PURE__*/React.createElement("div", {
    className: [inputStyles.inputHelper].join(' ')
  }, /*#__PURE__*/React.createElement("div", null, Array.isArray(assistText) && assistText.length > 0 ? assistText.map((el, i) => /*#__PURE__*/React.createElement("div", {
    key: `${el.text}-${i}`
  }, getHelperText(el))) : assistText), maxLength && /*#__PURE__*/React.createElement("div", null, `${Number(maxLength) - props.value.length}/${maxLength}`)));
};

Input.defaultProps = {
  onChange: () => null,
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
const errorSvg = /*#__PURE__*/React.createElement("svg", {
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
const successSvg = /*#__PURE__*/React.createElement("svg", {
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

var styles$3 = {"radioContainer":"__radio__radioContainer__1oqQj","radio":"__radio__radio__2rl6s","checked":"__radio__checked__9EBtf","disabled":"__radio__disabled__3FKAc","unchecked":"__radio__unchecked__uejIh"};

const Radio = ({
  checked,
  onChange,
  disabled,
  ...props
}) => {
  const disabledClass = disabled ? styles$3.disabled : '';
  const checkedClass = checked ? styles$3.checked : styles$3.unchecked;
  return /*#__PURE__*/React.createElement("label", {
    className: [styles$3.radioContainer, disabledClass].concat(checkedClass).join(' ')
  }, /*#__PURE__*/React.createElement("input", Object.assign({
    "data-testid": "radio",
    disabled: disabled,
    type: "radio",
    checked: checked,
    onChange: onChange ? ({
      target
    }) => onChange(target.checked) : null
  }, props)), /*#__PURE__*/React.createElement("div", {
    className: [styles$3.radio, checkedClass, disabledClass].join(' ')
  }));
};

Radio.defaultProps = {
  disabled: false,
  checked: false,
  onChange: () => null
};
Radio.propTypes = {
  disabled: propTypes.bool,
  checked: propTypes.bool.isRequired,
  onChange: propTypes.func
};

var styles$4 = {"separator":"__separator__separator__dCaRR","horizontal":"__separator__horizontal__217mF","vertical":"__separator__vertical__VlP6p"};

const Separator = ({
  vertical
}) => {
  const direction = vertical ? 'vertical' : 'horizontal';
  let separatorClases = [styles$4.separator];
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

var styles$5 = {"sidebarElement":"__sidebarElement__sidebarElement__o3XYO","level-2":"__sidebarElement__level-2__1XnUh","level-3":"__sidebarElement__level-3__1OBQU","level-1":"__sidebarElement__level-1__1tyJP","notification":"__sidebarElement__notification__1p9bf","textContainer":"__sidebarElement__textContainer__2HP3_","active":"__sidebarElement__active__3v36b"};

const SidebarElement = ({
  text,
  icon,
  sublevel,
  level,
  notification,
  active,
  open,
  ...props
}) => {
  const defaultIcon = !icon && level === 3 ? /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: "1"
  }) : icon;
  let containerClasses = [styles$5.sidebarElement, styles$5['level-' + level]];

  if (active === true) {
    containerClasses = containerClasses.concat(styles$5.active);
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", Object.assign({
    role: "component",
    "data-status": active ? 'active' : '',
    className: containerClasses.join(' ')
  }, props), /*#__PURE__*/React.createElement("div", {
    className: [styles$5.textContainer].join(' ')
  }, defaultIcon, text), notification === true && /*#__PURE__*/React.createElement("span", {
    role: "notification",
    className: [styles$5.notification].join(' ')
  })), open && sublevel.map((child, index) => /*#__PURE__*/React.createElement(SidebarElement, Object.assign({
    key: index,
    level: level + 1
  }, child))));
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

var styles$6 = {"sidebar":"__sidebar__sidebar__cwV8q"};

const Sidebar = ({
  items
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: [styles$6.sidebar].join(' ')
  }, items.map((element, index) => /*#__PURE__*/React.createElement(SidebarElement, Object.assign({
    key: index
  }, element))));
};

Sidebar.propTypes = {
  items: propTypes.array.isRequired
};

var styles$7 = {"switchContainer":"__switch__switchContainer__1eRWQ","disabled":"__switch__disabled__n5mqJ","circle":"__switch__circle__3-WI0","switchBar":"__switch__switchBar__2eAt1","active":"__switch__active__2ZPJd"};

const Switch = ({
  status,
  disabled,
  ...props
}) => {
  let switchClass = [styles$7.switchBar];
  const containerClass = [styles$7.switchContainer, disabled ? styles$7.disabled : null];

  if (status) {
    switchClass = switchClass.concat(styles$7.active);
  }

  return /*#__PURE__*/React.createElement("div", Object.assign({
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

var styles$8 = {"loadingContainer":"__loading__loadingContainer__xbslP","circle_1":"__loading__circle_1__1yHlS","circle_2":"__loading__circle_2__12Wvj","dark":"__loading__dark__l3QX7","circle":"__loading__circle__2KYdR","circleMain":"__loading__circleMain__2RXOO","circlesContainer":"__loading__circlesContainer__gReE6","container":"__loading__container__2BLen","beforeCircle1":"__loading__beforeCircle1__3d9vo","beforeCircle2":"__loading__beforeCircle2__1fVOr","circleMainBorder":"__loading__circleMainBorder__UHFy2"};

const Loading = ({
  dark
}) => {
  const styleArr = [styles$8.loadingContainer, dark ? styles$8.dark : null];
  const theme = dark ? 'dark' : 'light';
  return /*#__PURE__*/React.createElement("div", {
    className: styleArr.join(' '),
    "data-theme": theme
  }, /*#__PURE__*/React.createElement("div", {
    className: styles$8.circleMain
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$8.circlesContainer
  }, [styles$8.circle_1, styles$8.circle_2].map((el, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: [styles$8.circle, el].join(' ')
  }))));
};

Loading.defaultProps = {
  dark: false
};
Loading.propTypes = {
  dark: propTypes.bool
};

var styles$9 = {"titleContainer":"__title__titleContainer__Yw0He","suffix":"__title__suffix__3FgDb"};

class IconListModel {}
IconListModel.iconList = ['line-alarm', 'line-alert', 'line-app-notification', 'line-block', 'line-bookmark', 'line-bug', 'line-check-double', 'line-check', 'line-cloud-disable', 'line-cloud-download', 'line-cloud-upload', 'line-cloud', 'line-cogwheel', 'line-copy', 'line-cross', 'line-cut', 'line-dashboard', 'line-down', 'line-download-queue', 'line-download', 'line-draft', 'line-exit-fullscreen', 'line-eye-close', 'line-eye-open', 'line-female-user', 'line-file', 'line-filter', 'line-flag', 'line-fullscreen', 'line-heart', 'line-help', 'line-home', 'line-information', 'line-left', 'line-lifebuoy', 'line-list', 'line-loading', 'line-lock', 'line-login', 'line-logout', 'line-menu-burger', 'line-menu-dots', 'line-microphone-disable', 'line-microphone', 'line-minus', 'line-note', 'line-notification-disable', 'line-notification', 'line-paste', 'line-plus', 'line-power-sign', 'line-print', 'line-puzzle', 'line-refresh', 'line-reply-all', 'line-reply', 'line-right', 'line-save', 'line-screenshot', 'line-search-check', 'line-search-cross', 'line-search-minus', 'line-search-plus', 'line-search', 'line-share', 'line-shield', 'line-snooze', 'line-star', 'line-stars', 'line-sync', 'line-task', 'line-time', 'line-trash-empty', 'line-trash-full', 'line-trash', 'line-umbrella', 'line-unlock', 'line-up', 'line-upload-queue', 'line-upload', 'line-user', 'line-verification-fail', 'line-verification', 'line-wrench', 'line-write', 'arrow-down', 'arrow-left', 'arrow-right', 'arrow-up', 'alarm1', 'alert1', 'app-notification1', 'block', 'bookmark', 'bug', 'check-double', 'check', 'cloud-disable', 'cloud-download', 'cloud-upload', 'cloud', 'cogwheel', 'copy', 'cross', 'cut', 'dashboard', 'down', 'download-queue', 'download', 'draft', 'exit-fullscreen', 'eye-close', 'eye-open', 'female-user', 'file', 'filter', 'flag', 'fullscreen', 'heart', 'help', 'home', 'information', 'left', 'lifebuoy', 'list', 'loading', 'lock', 'login', 'logout', 'menu-burger', 'menu-dots', 'microphone-disable', 'microphone', 'minus', 'note', 'notification-disable', 'notification', 'paste', 'plus', 'power-sign', 'print', 'puzzle', 'refresh', 'reply-all', 'reply', 'right', 'save', 'screenshot', 'search-alt', 'search-check', 'search-cross', 'search-minus', 'search-plus', 'share', 'shield', 'snooze', 'star', 'stars', 'sync', 'task', 'time', 'trash-empty', 'trash-full', 'trash', 'umbrella', 'unlock', 'up', 'upload-queue', 'upload', 'user', 'verification-fail', 'verification', 'wrench', 'write'];

const TitleSection = ({
  label,
  prefix,
  ...props
}) => {
  const containerClass = [styles$9.titleContainer];
  return /*#__PURE__*/React.createElement("div", Object.assign({}, props, {
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

var styles$a = {"chip":"__chips__chip__UA-fa","pressed":"__chips__pressed__Qi9F4","disabled":"__chips__disabled__1agHb","variant":"__chips__variant__32Cyg"};

const InputChip = ({
  value,
  onClose,
  variant,
  disabled,
  ...props
}) => {
  const mainRef = React.createRef(null);

  const onPress = () => {
    mainRef.current.className = classesComponent.concat(styles$a.pressed).join(' ');
  };

  const mouseUp = () => {
    mainRef.current.className = classesComponent.join(' ');
  };

  const classesComponent = [styles$a.chip, disabled ? styles$a.disabled : null, variant ? styles$a.variant : null];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", Object.assign({
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

var styles$b = {"progressBar":"__progressbar__progressBar__R0HpQ","simpleLabel":"__progressbar__simpleLabel__1Jsh1","multiHeader":"__progressbar__multiHeader__9q7I_","multiHeaderLabel":"__progressbar__multiHeaderLabel__2mYPG","barContainer":"__progressbar__barContainer__3LHm2","bar":"__progressbar__bar__2T33C","bellowContent":"__progressbar__bellowContent__1lqZ7","between":"__progressbar__between__3muIL","end":"__progressbar__end__1xSRa","reverse":"__progressbar__reverse__kTBcR","full":"__progressbar__full__1WMCD"};

const ProgressBar = ({
  label,
  progress,
  assistText,
  percent,
  helperAlign,
  reverse
}) => {
  const alignment = assistText && percent ? styles$b.between : styles$b[helperAlign];
  const direction = reverse ? styles$b.reverse : null;
  const bellowClasses = [styles$b.bellowContent, alignment, direction];
  return /*#__PURE__*/React.createElement("div", {
    className: styles$b.progressBar
  }, !Array.isArray(label) ? /*#__PURE__*/React.createElement("div", {
    className: styles$b.simpleLabel
  }, label) : /*#__PURE__*/React.createElement("div", {
    className: styles$b.multiHeader
  }, label.map((el, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("label", {
    className: styles$b.multiHeaderLabel
  }, el.label), /*#__PURE__*/React.createElement("div", null, el.text)))), /*#__PURE__*/React.createElement("div", {
    className: styles$b.barContainer
  }, /*#__PURE__*/React.createElement("div", {
    className: styles$b.bar,
    "data-progress": progress,
    style: {
      width: `${progress}%`
    }
  })), assistText || percent ? /*#__PURE__*/React.createElement("div", {
    className: bellowClasses.join(' ').trim(),
    role: "helper"
  }, assistText, percent && /*#__PURE__*/React.createElement("div", {
    className: Number(progress) === 100 ? styles$b.full : null
  }, `${progress}%`)) : null);
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

var styles$c = {"message":"__message__message__3g_Jc","prefix":"__message__prefix__3hi6e","textContainer":"__message__textContainer__10WAf","actionContainer":"__message__actionContainer__3_FT8","error":"__message__error__hllCz","success":"__message__success__2_19H","info":"__message__info__2aIvC","warning":"__message__warning__2x3Y6"};

const Message = ({
  title,
  action,
  type,
  className,
  description
}) => {
  const messageClasses = [styles$c.message, styles$c[type], className];

  const getIcon = () => {
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
    className: styles$c.prefix
  }), /*#__PURE__*/React.createElement("div", {
    className: styles$c.textContainer
  }, title && /*#__PURE__*/React.createElement("div", null, " ", title, " "), description && /*#__PURE__*/React.createElement("p", null, " ", description, " ")), /*#__PURE__*/React.createElement("div", {
    className: styles$c.actionContainer
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

export { Button, Card, Checkbox, Grid, Header, HeaderItem, HeaderProfileItem, Icon, Input, InputChip, Loading, Logo, Message, ProgressBar, Radio, Separator, Sidebar, SidebarElement, Switch, TitleSection };
//# sourceMappingURL=index.modern.js.map
