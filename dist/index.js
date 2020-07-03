function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var Tippy = _interopDefault(require('@tippyjs/react'));

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

var icons = {"size-1":"__coopeuch-icon__size-1__E20oA","size-2":"__coopeuch-icon__size-2__1LAUs","size-3":"__coopeuch-icon__size-3__3tmzu","size-4":"__coopeuch-icon__size-4__f8f2b","size-5":"__coopeuch-icon__size-5__3WQf-","size-6":"__coopeuch-icon__size-6__325my","size-7":"__coopeuch-icon__size-7__vbJDw","size-8":"__coopeuch-icon__size-8__HfeIC","icon-alert":"__coopeuch-icon__icon-alert__1sBsM","icon-line-alarm":"__coopeuch-icon__icon-line-alarm__2RIcO","icon-line-alert":"__coopeuch-icon__icon-line-alert__3KOrG","icon-line-app-notification":"__coopeuch-icon__icon-line-app-notification__RJ0_m","icon-line-block":"__coopeuch-icon__icon-line-block__1g4pS","icon-line-bookmark":"__coopeuch-icon__icon-line-bookmark__2GpnG","icon-line-bug":"__coopeuch-icon__icon-line-bug__3AZWC","icon-line-check-double":"__coopeuch-icon__icon-line-check-double__3wnRC","icon-line-check":"__coopeuch-icon__icon-line-check__18ly6","icon-line-cloud-disable":"__coopeuch-icon__icon-line-cloud-disable__1ysM1","icon-line-cloud-download":"__coopeuch-icon__icon-line-cloud-download__1Da4J","icon-line-cloud-upload":"__coopeuch-icon__icon-line-cloud-upload__1x9gk","icon-line-cloud":"__coopeuch-icon__icon-line-cloud__2BF9r","icon-line-cogwheel":"__coopeuch-icon__icon-line-cogwheel__4L5xo","icon-line-copy":"__coopeuch-icon__icon-line-copy__2UUan","icon-line-cross":"__coopeuch-icon__icon-line-cross__3h620","icon-line-cut":"__coopeuch-icon__icon-line-cut__3nbjj","icon-line-dashboard":"__coopeuch-icon__icon-line-dashboard__3-F1c","icon-line-down":"__coopeuch-icon__icon-line-down__1BtUm","icon-line-download-queue":"__coopeuch-icon__icon-line-download-queue__1Bzeq","icon-line-download":"__coopeuch-icon__icon-line-download__1ya1g","icon-line-draft":"__coopeuch-icon__icon-line-draft__2zcb0","icon-line-exit-fullscreen":"__coopeuch-icon__icon-line-exit-fullscreen__3-iPg","icon-line-eye-close":"__coopeuch-icon__icon-line-eye-close__iKLUO","icon-line-eye-open":"__coopeuch-icon__icon-line-eye-open__X00tw","icon-line-female-user":"__coopeuch-icon__icon-line-female-user__28nK6","icon-line-file":"__coopeuch-icon__icon-line-file__12bYG","icon-line-filter":"__coopeuch-icon__icon-line-filter__2qj3b","icon-line-flag":"__coopeuch-icon__icon-line-flag__1wEMk","icon-line-fullscreen":"__coopeuch-icon__icon-line-fullscreen__30nA4","icon-line-heart":"__coopeuch-icon__icon-line-heart__2xUV8","icon-line-help":"__coopeuch-icon__icon-line-help__17kCM","icon-line-home":"__coopeuch-icon__icon-line-home__GFJAK","icon-line-information":"__coopeuch-icon__icon-line-information__2TJyw","icon-line-left":"__coopeuch-icon__icon-line-left__3u1Le","icon-line-lifebuoy":"__coopeuch-icon__icon-line-lifebuoy__2Rcxc","icon-line-list":"__coopeuch-icon__icon-line-list__2mHVG","icon-line-loading":"__coopeuch-icon__icon-line-loading__1LR3j","icon-line-lock":"__coopeuch-icon__icon-line-lock__2JH2p","icon-line-login":"__coopeuch-icon__icon-line-login__O6oaf","icon-line-logout":"__coopeuch-icon__icon-line-logout__gJ9V9","icon-line-menu-burger":"__coopeuch-icon__icon-line-menu-burger__19B15","icon-line-menu-dots":"__coopeuch-icon__icon-line-menu-dots__2RBwG","icon-line-microphone-disable":"__coopeuch-icon__icon-line-microphone-disable__3rb1K","icon-line-microphone":"__coopeuch-icon__icon-line-microphone__3vYJg","icon-line-minus":"__coopeuch-icon__icon-line-minus__2oxpx","icon-line-note":"__coopeuch-icon__icon-line-note__2PhOj","icon-line-notification-disable":"__coopeuch-icon__icon-line-notification-disable__o2GP1","icon-line-notification":"__coopeuch-icon__icon-line-notification__z7NJH","icon-line-paste":"__coopeuch-icon__icon-line-paste__ur2CY","icon-line-plus":"__coopeuch-icon__icon-line-plus__1ycj4","icon-line-power-sign":"__coopeuch-icon__icon-line-power-sign__20soH","icon-line-print":"__coopeuch-icon__icon-line-print__2FWOI","icon-line-puzzle":"__coopeuch-icon__icon-line-puzzle__2f5ID","icon-line-refresh":"__coopeuch-icon__icon-line-refresh__1j7oR","icon-line-reply-all":"__coopeuch-icon__icon-line-reply-all__1Umhx","icon-line-reply":"__coopeuch-icon__icon-line-reply__2XD0m","icon-line-right":"__coopeuch-icon__icon-line-right__2rqJI","icon-line-save":"__coopeuch-icon__icon-line-save__3VoE0","icon-line-screenshot":"__coopeuch-icon__icon-line-screenshot__R7-Gr","icon-line-search-check":"__coopeuch-icon__icon-line-search-check__3CN2k","icon-line-search-cross":"__coopeuch-icon__icon-line-search-cross__1BCb2","icon-line-search-minus":"__coopeuch-icon__icon-line-search-minus__2qNnr","icon-line-search-plus":"__coopeuch-icon__icon-line-search-plus__2j5Ww","icon-line-search":"__coopeuch-icon__icon-line-search__3fI_D","icon-line-share":"__coopeuch-icon__icon-line-share__1yWG4","icon-line-shield":"__coopeuch-icon__icon-line-shield__MoEtt","icon-line-snooze":"__coopeuch-icon__icon-line-snooze__1UARO","icon-line-star":"__coopeuch-icon__icon-line-star__2bbq2","icon-line-stars":"__coopeuch-icon__icon-line-stars__62pAb","icon-line-sync":"__coopeuch-icon__icon-line-sync__2whw7","icon-line-task":"__coopeuch-icon__icon-line-task__3w3Ha","icon-line-time":"__coopeuch-icon__icon-line-time__1YMzG","icon-line-trash-empty":"__coopeuch-icon__icon-line-trash-empty__3iI-C","icon-line-trash-full":"__coopeuch-icon__icon-line-trash-full__24vII","icon-line-trash":"__coopeuch-icon__icon-line-trash__2jR7w","icon-line-umbrella":"__coopeuch-icon__icon-line-umbrella__3EW_O","icon-line-unlock":"__coopeuch-icon__icon-line-unlock__1neIQ","icon-line-up":"__coopeuch-icon__icon-line-up__Z4C7v","icon-line-upload-queue":"__coopeuch-icon__icon-line-upload-queue__290Df","icon-line-upload":"__coopeuch-icon__icon-line-upload__2yyds","icon-line-user":"__coopeuch-icon__icon-line-user__1TgpF","icon-line-verification-fail":"__coopeuch-icon__icon-line-verification-fail__1R5fL","icon-line-verification":"__coopeuch-icon__icon-line-verification__9ButY","icon-line-wrench":"__coopeuch-icon__icon-line-wrench__1EXlz","icon-line-write":"__coopeuch-icon__icon-line-write__3NGI7","icon-arrow-down":"__coopeuch-icon__icon-arrow-down__2VkIL","icon-arrow-left":"__coopeuch-icon__icon-arrow-left__36it-","icon-arrow-right":"__coopeuch-icon__icon-arrow-right__3fBJt","icon-arrow-up":"__coopeuch-icon__icon-arrow-up__gcIuu","icon-alarm1":"__coopeuch-icon__icon-alarm1__2uq-r","icon-alert1":"__coopeuch-icon__icon-alert1__v3xRs","icon-app-notification1":"__coopeuch-icon__icon-app-notification1__2GJcD","icon-block":"__coopeuch-icon__icon-block__2FJt0","icon-bookmark":"__coopeuch-icon__icon-bookmark__2Gg_H","icon-bug":"__coopeuch-icon__icon-bug__1oFzp","icon-check-double":"__coopeuch-icon__icon-check-double__2pvnG","icon-check":"__coopeuch-icon__icon-check__Wb2XK","icon-cloud-disable":"__coopeuch-icon__icon-cloud-disable__j_7gN","icon-cloud-download":"__coopeuch-icon__icon-cloud-download__1dzy1","icon-cloud-upload":"__coopeuch-icon__icon-cloud-upload__2jnFK","icon-cloud":"__coopeuch-icon__icon-cloud__XL8Xi","icon-cogwheel":"__coopeuch-icon__icon-cogwheel__3mCNb","icon-copy":"__coopeuch-icon__icon-copy__1fOSF","icon-cross":"__coopeuch-icon__icon-cross__10QIh","icon-cut":"__coopeuch-icon__icon-cut__3fs14","icon-dashboard":"__coopeuch-icon__icon-dashboard__QRta1","icon-down":"__coopeuch-icon__icon-down__HXmn3","icon-download-queue":"__coopeuch-icon__icon-download-queue__3ICli","icon-download":"__coopeuch-icon__icon-download__2SdS4","icon-draft":"__coopeuch-icon__icon-draft__P7At8","icon-exit-fullscreen":"__coopeuch-icon__icon-exit-fullscreen__Mh01S","icon-eye-close":"__coopeuch-icon__icon-eye-close__1KjPQ","icon-eye-open":"__coopeuch-icon__icon-eye-open__3ATsw","icon-female-user":"__coopeuch-icon__icon-female-user__2Dfx_","icon-file":"__coopeuch-icon__icon-file__3bdqj","icon-filter":"__coopeuch-icon__icon-filter__295_z","icon-flag":"__coopeuch-icon__icon-flag__1TXC1","icon-fullscreen":"__coopeuch-icon__icon-fullscreen__FIx0R","icon-heart":"__coopeuch-icon__icon-heart__2g-zt","icon-help":"__coopeuch-icon__icon-help__1qlUa","icon-home":"__coopeuch-icon__icon-home__2JGHi","icon-information":"__coopeuch-icon__icon-information__2iZcp","icon-left":"__coopeuch-icon__icon-left__1WSQ-","icon-lifebuoy":"__coopeuch-icon__icon-lifebuoy__1SMNH","icon-list":"__coopeuch-icon__icon-list__ZRgfq","icon-loading":"__coopeuch-icon__icon-loading__3CMbC","icon-lock":"__coopeuch-icon__icon-lock__163V5","icon-login":"__coopeuch-icon__icon-login__2ii93","icon-logout":"__coopeuch-icon__icon-logout__1Z960","icon-menu-burger":"__coopeuch-icon__icon-menu-burger__2boVJ","icon-menu-dots":"__coopeuch-icon__icon-menu-dots__Li-Ov","icon-microphone-disable":"__coopeuch-icon__icon-microphone-disable__1bA0I","icon-microphone":"__coopeuch-icon__icon-microphone__TfNxZ","icon-minus":"__coopeuch-icon__icon-minus__2QDQO","icon-note":"__coopeuch-icon__icon-note__38j6H","icon-notification-disable":"__coopeuch-icon__icon-notification-disable__K1T2z","icon-notification":"__coopeuch-icon__icon-notification__2Ra63","icon-paste":"__coopeuch-icon__icon-paste__51DLi","icon-plus":"__coopeuch-icon__icon-plus__1HBpS","icon-power-sign":"__coopeuch-icon__icon-power-sign__1mx6V","icon-print":"__coopeuch-icon__icon-print__1GulE","icon-puzzle":"__coopeuch-icon__icon-puzzle__2lbdS","icon-refresh":"__coopeuch-icon__icon-refresh__Lubaw","icon-reply-all":"__coopeuch-icon__icon-reply-all__3KEs9","icon-reply":"__coopeuch-icon__icon-reply__8CChY","icon-right":"__coopeuch-icon__icon-right__xteAB","icon-save":"__coopeuch-icon__icon-save__2bqpv","icon-screenshot":"__coopeuch-icon__icon-screenshot__3SlDa","icon-search-alt":"__coopeuch-icon__icon-search-alt__1TlAn","icon-search-check":"__coopeuch-icon__icon-search-check__2TIsj","icon-search-cross":"__coopeuch-icon__icon-search-cross__2NZWr","icon-search-minus":"__coopeuch-icon__icon-search-minus__3c04X","icon-search-plus":"__coopeuch-icon__icon-search-plus__3deTb","icon-share":"__coopeuch-icon__icon-share__3rHQW","icon-shield":"__coopeuch-icon__icon-shield__2HTIc","icon-snooze":"__coopeuch-icon__icon-snooze__1H3-p","icon-star":"__coopeuch-icon__icon-star__ot_K-","icon-stars":"__coopeuch-icon__icon-stars__3n6WS","icon-sync":"__coopeuch-icon__icon-sync__g4AKq","icon-task":"__coopeuch-icon__icon-task__2iDpn","icon-time":"__coopeuch-icon__icon-time__rVrZO","icon-trash-empty":"__coopeuch-icon__icon-trash-empty__2rUqI","icon-trash-full":"__coopeuch-icon__icon-trash-full__2M4JD","icon-trash":"__coopeuch-icon__icon-trash__H5UfA","icon-umbrella":"__coopeuch-icon__icon-umbrella__1MSD1","icon-unlock":"__coopeuch-icon__icon-unlock__5VZLW","icon-up":"__coopeuch-icon__icon-up__1tEMX","icon-upload-queue":"__coopeuch-icon__icon-upload-queue__2EQnt","icon-upload":"__coopeuch-icon__icon-upload__MTrj9","icon-user":"__coopeuch-icon__icon-user__2cuT3","icon-verification-fail":"__coopeuch-icon__icon-verification-fail__3CYbD","icon-verification":"__coopeuch-icon__icon-verification__3hYBR","icon-wrench":"__coopeuch-icon__icon-wrench__2swwf","icon-write":"__coopeuch-icon__icon-write__2oNry"};

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

  return /*#__PURE__*/React__default.createElement("i", _extends({}, props, {
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
  return /*#__PURE__*/React__default.createElement("button", _extends({}, props, {
    className: btnStyles.join(' '),
    disabled: disabled
  }), prefix && /*#__PURE__*/React__default.createElement(Icon, {
    className: styles.prefix,
    name: prefix
  }), variant !== 'text' ? children : !prefix && !suffix ? /*#__PURE__*/React__default.createElement("span", null, children) : children, suffix && /*#__PURE__*/React__default.createElement(Icon, {
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

var gridStyles = {"container":"__grid__container__14kEn","container-fluid":"__grid__container-fluid__3HzEQ","container-sm":"__grid__container-sm__z_9u9","container-md":"__grid__container-md__2qcSz","container-lg":"__grid__container-lg__3VnX7","container-xl":"__grid__container-xl__bhEqE","row":"__grid__row__UYIH9","no-gutters":"__grid__no-gutters__3497d","col":"__grid__col__WdUKx","col-1":"__grid__col-1__2oac2","col-2":"__grid__col-2__2aKQ6","col-3":"__grid__col-3__1Ja7k","col-4":"__grid__col-4__b0o_p","col-5":"__grid__col-5__2y9KV","col-6":"__grid__col-6__j6U_N","col-7":"__grid__col-7__2cnib","col-8":"__grid__col-8__j_GRF","col-9":"__grid__col-9__3BV2S","col-10":"__grid__col-10__aijt7","col-11":"__grid__col-11__1uF6h","col-12":"__grid__col-12__16Mq4","col-auto":"__grid__col-auto__2Mnx4","col-sm-1":"__grid__col-sm-1__g_BYh","col-sm-2":"__grid__col-sm-2__p2Bkv","col-sm-3":"__grid__col-sm-3__2tBAn","col-sm-4":"__grid__col-sm-4__2Zrnf","col-sm-5":"__grid__col-sm-5__gq2Q6","col-sm-6":"__grid__col-sm-6__36wvN","col-sm-7":"__grid__col-sm-7__-xjYm","col-sm-8":"__grid__col-sm-8__qCgI9","col-sm-9":"__grid__col-sm-9__jglMn","col-sm-10":"__grid__col-sm-10__1Ddzm","col-sm-11":"__grid__col-sm-11__qAOmb","col-sm-12":"__grid__col-sm-12__360Zl","col-sm":"__grid__col-sm__2eo6T","col-sm-auto":"__grid__col-sm-auto__xYrp3","col-md-1":"__grid__col-md-1__1MDP_","col-md-2":"__grid__col-md-2__QnY1p","col-md-3":"__grid__col-md-3__2nlsV","col-md-4":"__grid__col-md-4__HQIaP","col-md-5":"__grid__col-md-5__1NiLw","col-md-6":"__grid__col-md-6__3bPY2","col-md-7":"__grid__col-md-7__wciee","col-md-8":"__grid__col-md-8__1H4wt","col-md-9":"__grid__col-md-9__KrrZO","col-md-10":"__grid__col-md-10__1gKWm","col-md-11":"__grid__col-md-11__1j8Cn","col-md-12":"__grid__col-md-12__ExYPp","col-md":"__grid__col-md__1Jn07","col-md-auto":"__grid__col-md-auto__1hpEj","col-lg-1":"__grid__col-lg-1__1kYkS","col-lg-2":"__grid__col-lg-2__3Ve2f","col-lg-3":"__grid__col-lg-3__38JX2","col-lg-4":"__grid__col-lg-4__1fUJA","col-lg-5":"__grid__col-lg-5__uKYiC","col-lg-6":"__grid__col-lg-6__jq4-x","col-lg-7":"__grid__col-lg-7__4TRJM","col-lg-8":"__grid__col-lg-8__28FDI","col-lg-9":"__grid__col-lg-9__5od1R","col-lg-10":"__grid__col-lg-10__3l02V","col-lg-11":"__grid__col-lg-11__1M3kU","col-lg-12":"__grid__col-lg-12__3b23J","col-lg":"__grid__col-lg__g2MV9","col-lg-auto":"__grid__col-lg-auto__38l7t","col-xl-1":"__grid__col-xl-1__1TFKO","col-xl-2":"__grid__col-xl-2__3H5NW","col-xl-3":"__grid__col-xl-3__2-3I8","col-xl-4":"__grid__col-xl-4__2bCzv","col-xl-5":"__grid__col-xl-5__FiM51","col-xl-6":"__grid__col-xl-6__22zbY","col-xl-7":"__grid__col-xl-7__Uz6KO","col-xl-8":"__grid__col-xl-8__3xW-U","col-xl-9":"__grid__col-xl-9__tx7dN","col-xl-10":"__grid__col-xl-10__g8oUp","col-xl-11":"__grid__col-xl-11__1NMog","col-xl-12":"__grid__col-xl-12__3xWBZ","col-xl":"__grid__col-xl__1obk1","col-xl-auto":"__grid__col-xl-auto__3B4QJ","row-cols-1":"__grid__row-cols-1__2KDZX","row-cols-2":"__grid__row-cols-2__2AZ0L","row-cols-3":"__grid__row-cols-3__1_Jez","row-cols-4":"__grid__row-cols-4__TPZ-D","row-cols-5":"__grid__row-cols-5__2VBE2","row-cols-6":"__grid__row-cols-6__1NJXc","order-first":"__grid__order-first__1ZEA2","order-last":"__grid__order-last__1FlxM","order-0":"__grid__order-0__3g6N8","order-1":"__grid__order-1__27fZm","order-2":"__grid__order-2__1-n0m","order-3":"__grid__order-3__1rlAk","order-4":"__grid__order-4__1xXWr","order-5":"__grid__order-5__2fRKt","order-6":"__grid__order-6__2TwlZ","order-7":"__grid__order-7__OxRQt","order-8":"__grid__order-8__Fniow","order-9":"__grid__order-9__1TRrL","order-10":"__grid__order-10__2qPqQ","order-11":"__grid__order-11__Uy2O6","order-12":"__grid__order-12__1Pbsy","offset-1":"__grid__offset-1__2Robc","offset-2":"__grid__offset-2__Zx4LU","offset-3":"__grid__offset-3__1RMUT","offset-4":"__grid__offset-4__lKEsr","offset-5":"__grid__offset-5__1C2Lc","offset-6":"__grid__offset-6__L8nKJ","offset-7":"__grid__offset-7__2wdLz","offset-8":"__grid__offset-8__2cugz","offset-9":"__grid__offset-9__2f92V","offset-10":"__grid__offset-10__3HEcr","offset-11":"__grid__offset-11__1FjQ3","row-cols-sm-1":"__grid__row-cols-sm-1__2Cqfh","row-cols-sm-2":"__grid__row-cols-sm-2__aRq2C","row-cols-sm-3":"__grid__row-cols-sm-3__mdj6b","row-cols-sm-4":"__grid__row-cols-sm-4__2YLRY","row-cols-sm-5":"__grid__row-cols-sm-5__2ytCO","row-cols-sm-6":"__grid__row-cols-sm-6__2Sv2Y","order-sm-first":"__grid__order-sm-first__37-vl","order-sm-last":"__grid__order-sm-last__nQLHh","order-sm-0":"__grid__order-sm-0__1nBLx","order-sm-1":"__grid__order-sm-1__3B5ZD","order-sm-2":"__grid__order-sm-2__2_7dp","order-sm-3":"__grid__order-sm-3__fFJcI","order-sm-4":"__grid__order-sm-4__1P-il","order-sm-5":"__grid__order-sm-5__3svwq","order-sm-6":"__grid__order-sm-6__2-X2m","order-sm-7":"__grid__order-sm-7__qv6ue","order-sm-8":"__grid__order-sm-8__1mVZg","order-sm-9":"__grid__order-sm-9__3leZv","order-sm-10":"__grid__order-sm-10__14eYB","order-sm-11":"__grid__order-sm-11__3fHA9","order-sm-12":"__grid__order-sm-12__3YGbr","offset-sm-0":"__grid__offset-sm-0__Ji6GE","offset-sm-1":"__grid__offset-sm-1__1xwIb","offset-sm-2":"__grid__offset-sm-2__1uaVT","offset-sm-3":"__grid__offset-sm-3__3JY3T","offset-sm-4":"__grid__offset-sm-4__1UZxV","offset-sm-5":"__grid__offset-sm-5__1sjCS","offset-sm-6":"__grid__offset-sm-6__shONY","offset-sm-7":"__grid__offset-sm-7__3apzC","offset-sm-8":"__grid__offset-sm-8__1VVCu","offset-sm-9":"__grid__offset-sm-9__2lE77","offset-sm-10":"__grid__offset-sm-10__1Jg_Q","offset-sm-11":"__grid__offset-sm-11__1VzVm","row-cols-md-1":"__grid__row-cols-md-1__3ROj2","row-cols-md-2":"__grid__row-cols-md-2__2NJM4","row-cols-md-3":"__grid__row-cols-md-3__3IouR","row-cols-md-4":"__grid__row-cols-md-4__1zciP","row-cols-md-5":"__grid__row-cols-md-5__3GPlG","row-cols-md-6":"__grid__row-cols-md-6__3Yypo","order-md-first":"__grid__order-md-first__YId5-","order-md-last":"__grid__order-md-last__FoL1t","order-md-0":"__grid__order-md-0__11X2_","order-md-1":"__grid__order-md-1__29ppz","order-md-2":"__grid__order-md-2__BX_wA","order-md-3":"__grid__order-md-3__3vovI","order-md-4":"__grid__order-md-4__1DG-r","order-md-5":"__grid__order-md-5__1t-wS","order-md-6":"__grid__order-md-6__xhpHy","order-md-7":"__grid__order-md-7__1KW3a","order-md-8":"__grid__order-md-8__12iOD","order-md-9":"__grid__order-md-9__2o7SZ","order-md-10":"__grid__order-md-10__30TSh","order-md-11":"__grid__order-md-11__3a2ES","order-md-12":"__grid__order-md-12__17gjx","offset-md-0":"__grid__offset-md-0__3SIYS","offset-md-1":"__grid__offset-md-1__9sDKs","offset-md-2":"__grid__offset-md-2__2LaPL","offset-md-3":"__grid__offset-md-3__3tebD","offset-md-4":"__grid__offset-md-4__18n2k","offset-md-5":"__grid__offset-md-5__joIgt","offset-md-6":"__grid__offset-md-6__1q1LS","offset-md-7":"__grid__offset-md-7__K5T5U","offset-md-8":"__grid__offset-md-8__1bjmQ","offset-md-9":"__grid__offset-md-9__1jm7r","offset-md-10":"__grid__offset-md-10__1SlPm","offset-md-11":"__grid__offset-md-11__PRoM9","row-cols-lg-1":"__grid__row-cols-lg-1__1l-Ab","row-cols-lg-2":"__grid__row-cols-lg-2__1VCF7","row-cols-lg-3":"__grid__row-cols-lg-3__38pSz","row-cols-lg-4":"__grid__row-cols-lg-4__3MNUX","row-cols-lg-5":"__grid__row-cols-lg-5__1ZPJw","row-cols-lg-6":"__grid__row-cols-lg-6__25fN8","order-lg-first":"__grid__order-lg-first__6acFv","order-lg-last":"__grid__order-lg-last__2AuqS","order-lg-0":"__grid__order-lg-0__2GeAp","order-lg-1":"__grid__order-lg-1__1H7K7","order-lg-2":"__grid__order-lg-2__MYlUI","order-lg-3":"__grid__order-lg-3__3Q3rS","order-lg-4":"__grid__order-lg-4__Rl2vD","order-lg-5":"__grid__order-lg-5__2mrT8","order-lg-6":"__grid__order-lg-6__3FBi8","order-lg-7":"__grid__order-lg-7__3-wtn","order-lg-8":"__grid__order-lg-8__2KbpA","order-lg-9":"__grid__order-lg-9__2-Zpx","order-lg-10":"__grid__order-lg-10__1Ksq5","order-lg-11":"__grid__order-lg-11__3oMde","order-lg-12":"__grid__order-lg-12__3tvoB","offset-lg-0":"__grid__offset-lg-0__3ANrG","offset-lg-1":"__grid__offset-lg-1__1dJCm","offset-lg-2":"__grid__offset-lg-2__7RGUZ","offset-lg-3":"__grid__offset-lg-3__3HK2f","offset-lg-4":"__grid__offset-lg-4__2j5R6","offset-lg-5":"__grid__offset-lg-5__2QCMg","offset-lg-6":"__grid__offset-lg-6__3jf4w","offset-lg-7":"__grid__offset-lg-7__pOUQI","offset-lg-8":"__grid__offset-lg-8__2fHoJ","offset-lg-9":"__grid__offset-lg-9__1U4zu","offset-lg-10":"__grid__offset-lg-10__16S5i","offset-lg-11":"__grid__offset-lg-11__2SkJN","row-cols-xl-1":"__grid__row-cols-xl-1__3RG4D","row-cols-xl-2":"__grid__row-cols-xl-2__ZvXCx","row-cols-xl-3":"__grid__row-cols-xl-3__EUhdv","row-cols-xl-4":"__grid__row-cols-xl-4__3RRjt","row-cols-xl-5":"__grid__row-cols-xl-5__1Cq7j","row-cols-xl-6":"__grid__row-cols-xl-6__3XAEM","order-xl-first":"__grid__order-xl-first__3AJuA","order-xl-last":"__grid__order-xl-last__289w5","order-xl-0":"__grid__order-xl-0__3wkjk","order-xl-1":"__grid__order-xl-1__1qVNF","order-xl-2":"__grid__order-xl-2__3KD7H","order-xl-3":"__grid__order-xl-3__2CmD8","order-xl-4":"__grid__order-xl-4__3hL_C","order-xl-5":"__grid__order-xl-5__YEmoW","order-xl-6":"__grid__order-xl-6__3iHlB","order-xl-7":"__grid__order-xl-7__1D3Bm","order-xl-8":"__grid__order-xl-8__2lHpd","order-xl-9":"__grid__order-xl-9__IMgOv","order-xl-10":"__grid__order-xl-10__2gsV6","order-xl-11":"__grid__order-xl-11__1cf7J","order-xl-12":"__grid__order-xl-12__2iwf0","offset-xl-0":"__grid__offset-xl-0__1xbZ5","offset-xl-1":"__grid__offset-xl-1__rSZgC","offset-xl-2":"__grid__offset-xl-2__2-q6r","offset-xl-3":"__grid__offset-xl-3__18aVH","offset-xl-4":"__grid__offset-xl-4__L_fbC","offset-xl-5":"__grid__offset-xl-5__1-42j","offset-xl-6":"__grid__offset-xl-6__1nSva","offset-xl-7":"__grid__offset-xl-7__27qri","offset-xl-8":"__grid__offset-xl-8__3wrlN","offset-xl-9":"__grid__offset-xl-9__JTcR4","offset-xl-10":"__grid__offset-xl-10__2Lf0i","offset-xl-11":"__grid__offset-xl-11__2pahu"};

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

  return React__default.createElement(variant, _extends({}, props, {
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

var styles$1 = {"card":"__card__card__3sTov","border":"__card__border__11O64","elevation-1":"__card__elevation-1__fQijz","elevation-2":"__card__elevation-2__1FoZl","elevation-3":"__card__elevation-3__2Gzj7","elevation-4":"__card__elevation-4__G6ONN","animated":"__card__animated__31-Hr","elevation-5":"__card__elevation-5__2NrqS","selected":"__card__selected__1xLNT","all":"__card__all__2tVcK"};

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

  return /*#__PURE__*/React__default.createElement("div", _extends({}, props, {
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

var Checkbox = function Checkbox(_ref) {
  var variant = _ref.variant,
      checked = _ref.checked,
      onChange = _ref.onChange,
      disabled = _ref.disabled,
      props = _objectWithoutPropertiesLoose(_ref, ["variant", "checked", "onChange", "disabled"]);

  var color = disabled ? "#9C9A9F" : checked ? "#007DB7" : "#646569";
  var disabledClass = disabled ? styles$2.disabled : '';
  var checkedClass = checked ? styles$2.checked : styles$2.unchecked;
  return /*#__PURE__*/React__default.createElement("label", {
    className: [styles$2.checkbox].concat(disabledClass).concat(checkedClass).join(' ')
  }, /*#__PURE__*/React__default.createElement("input", _extends({
    "data-testid": "checkbox",
    disabled: disabled,
    type: "checkbox",
    checked: checked,
    onChange: onChange ? function (_ref2) {
      var target = _ref2.target;
      return onChange(target.checked);
    } : null
  }, props)), variant ? /*#__PURE__*/React__default.createElement("svg", {
    width: "24px",
    height: "24px",
    viewBox: "0 0 24 24"
  }, checked ? /*#__PURE__*/React__default.createElement("g", {
    "data-testid": "checked-variant-active",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React__default.createElement("g", {
    transform: "translate(-2031.000000, -2448.000000)",
    fill: color
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M2052.33333,2448 L2033.66667,2448 C2032.2,2448 2031,2449.2 2031,2450.66667 L2031,2469.33333 C2031,2470.8 2032.2,2472 2033.66667,2472 L2052.33333,2472 C2053.8,2472 2055,2470.8 2055,2469.33333 L2055,2450.66667 C2055,2449.2 2053.8,2448 2052.33333,2448 Z M2048.14286,2461 L2037.85714,2461 C2037.38571,2461 2037,2460.55 2037,2460 C2037,2459.45 2037.38571,2459 2037.85714,2459 L2048.14286,2459 C2048.61429,2459 2049,2459.45 2049,2460 C2049,2460.55 2048.61429,2461 2048.14286,2461 Z",
    id: "color_checkbox"
  }))) : /*#__PURE__*/React__default.createElement("g", {
    "data-testid": "checked-variant-inactive",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React__default.createElement("g", {
    transform: "translate(-2079.000000, -2448.000000)",
    fill: color
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M2100,2470 L2082,2470 C2081.45,2470 2081,2469.55 2081,2469 L2081,2451 C2081,2450.45 2081.45,2450 2082,2450 L2100,2450 C2100.55,2450 2101,2450.45 2101,2451 L2101,2469 C2101,2469.55 2100.55,2470 2100,2470 Z M2101,2448 L2081,2448 C2079.9,2448 2079,2448.9 2079,2450 L2079,2470 C2079,2471.1 2079.9,2472 2081,2472 L2101,2472 C2102.1,2472 2103,2471.1 2103,2470 L2103,2450 C2103,2448.9 2102.1,2448 2101,2448 Z",
    id: "checkbox_disabled"
  })))) : /*#__PURE__*/React__default.createElement("svg", {
    width: "24px",
    height: "24px",
    viewBox: "0 0 24 24"
  }, checked ? /*#__PURE__*/React__default.createElement("g", {
    "data-testid": "checked-active",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React__default.createElement("g", {
    transform: "translate(-1993.000000, -2448.000000)",
    fill: color
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M2014.33333,2448 L1995.66667,2448 C1994.2,2448 1993,2449.2 1993,2450.66667 L1993,2469.33333 C1993,2470.8 1994.2,2472 1995.66667,2472 L2014.33333,2472 C2015.8,2472 2017,2470.8 2017,2469.33333 L2017,2450.66667 C2017,2449.2 2015.8,2448 2014.33333,2448 Z M2003.43221,2465.6338 C2002.95822,2466.12207 2002.19256,2466.12207 2001.71857,2465.6338 L1997.35549,2461.13928 C1996.8815,2460.65102 1996.8815,2459.86228 1997.35549,2459.37402 C1997.82947,2458.88576 1998.59514,2458.88576 1999.06912,2459.37402 L2002.56931,2462.97966 L2010.93088,2454.3662 C2011.40486,2453.87793 2012.17053,2453.87793 2012.64451,2454.3662 C2013.1185,2454.85446 2013.1185,2455.64319 2012.64451,2456.13146 L2003.43221,2465.6338 Z",
    id: "color_checkbox"
  }))) : /*#__PURE__*/React__default.createElement("g", {
    "data-testid": "checked-inactive",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React__default.createElement("g", {
    transform: "translate(-2079.000000, -2448.000000)",
    fill: color
  }, /*#__PURE__*/React__default.createElement("path", {
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
  return /*#__PURE__*/React__default.createElement("svg", _extends({}, props, {
    width: "170px",
    height: "30px",
    viewBox: "0 0 170 30"
  }), /*#__PURE__*/React__default.createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React__default.createElement("g", {
    id: "03.Organismo/header/desktop/desktop",
    transform: "translate(-92.000000, -21.000000)",
    fill: "#FFFFFF"
  }, /*#__PURE__*/React__default.createElement("g", {
    id: "01.Atomo/brand/Marca",
    transform: "translate(92.000000, 21.000000)"
  }, /*#__PURE__*/React__default.createElement("g", {
    id: "Coopeuch",
    transform: "translate(0.000000, -0.000000)"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M28.6382169,12.9940002 C20.1501254,13.3029497 13.3021331,20.1505911 12.994058,28.6382475 C12.9815926,28.9641137 13.2433673,29.2356688 13.5701406,29.2356688 L25.7925292,29.2356688 C27.6944031,29.2356688 29.2356688,27.6944821 29.2356688,25.7927057 L29.2356688,13.5709435 C29.2356688,13.244187 28.9649901,12.9824256 28.6382169,12.9940002",
    fillRule: "nonzero"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M25.836663,0 L10.835155,0 C4.85107652,0 0,4.85107651 0,10.8351549 L0,25.836663 C0,27.7141588 1.52238893,29.2356688 3.39900578,29.2356688 L5.42592777,29.2356688 C5.73356987,29.2356688 5.98232049,28.9877972 5.98407844,28.681034 C6.27589896,16.2944839 16.2988788,6.27326202 28.6854289,5.98407844 C28.9904341,5.97968355 29.2356688,5.73181192 29.2356688,5.42680674 L29.2356688,3.39988476 C29.2356688,1.52238893 27.7141588,0 25.836663,0",
    fillRule: "nonzero"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M44.522656,17.9815831 C43.3793182,17.9815831 42.4418518,17.6085099 41.7093734,16.8909284 C40.976895,16.1439164 40.5960769,15.196951 40.5960769,14.0768659 C40.5960769,11.7804317 42.2660217,10.143584 44.522656,10.143584 C45.7755563,10.143584 46.8641129,10.668137 47.5285566,11.5311392 C47.7476816,11.8167869 48.1426368,11.9068092 48.4571872,11.7267646 L50.5052994,10.5521467 C50.8578432,10.3495965 50.9594536,9.89688828 50.7306094,9.56536378 C49.4229278,7.66797076 47.1185807,6.49681529 44.5518138,6.49681529 C42.3543785,6.49681529 40.50772,7.21526248 39.0127219,8.67899044 C37.547765,10.143584 36.8152866,11.9232556 36.8152866,14.0768659 C36.8152866,16.2296107 37.547765,18.0101479 39.0127219,19.4747414 C40.50772,20.9384693 42.3543785,21.656051 44.5518138,21.656051 C47.11593,21.656051 49.3928864,20.4658523 50.7615343,18.5675936 C51.0018649,18.234338 50.899371,17.7695114 50.5371078,17.5669612 L48.4828107,16.4174457 C48.1700274,16.2417291 47.7803736,16.332617 47.5621322,16.6139367 C46.8976885,17.4743421 45.8038305,17.9815831 44.522656,17.9815831",
    fillRule: "nonzero"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M110.606752,6.49681529 C108.348956,6.49681529 106.472174,7.21439688 105.035636,8.67899042 C103.599098,10.1141536 102.866242,11.9232556 102.866242,14.0760003 C102.866242,16.2581755 103.599098,18.0672775 105.064809,19.5024406 C106.531404,20.9384694 108.466531,21.656051 110.900248,21.656051 C113.503697,21.656051 115.529879,20.7714088 116.956693,19.0263612 C117.142338,18.7995742 117.076036,18.4619906 116.818786,18.31657 L114.772271,17.1601297 C114.487615,16.9991283 114.122514,17.032021 113.886479,17.2570767 C113.167768,17.9443624 112.180314,18.2966612 110.958594,18.2966612 C108.700797,18.2966612 107.322605,17.4068254 106.824015,15.5977234 L116.484625,15.5977234 C117.335055,15.5977234 118.024594,14.9234218 118.025478,14.0907156 L118.025478,14.0760003 C118.025478,11.9232556 117.321795,10.1427184 115.914429,8.67899042 C114.536237,7.21439688 112.747857,6.49681529 110.606752,6.49681529 Z M106.76567,12.7265315 C107.205914,10.8897304 108.584106,9.82677471 110.606752,9.82677471 C112.33767,9.82677471 113.803381,10.7746057 114.243625,12.7265315 L106.76567,12.7265315 Z",
    fillRule: "nonzero"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M132.736423,14.080019 C132.736423,15.2283916 132.363978,16.1750594 131.619088,16.9209189 C130.874197,17.6667784 129.956514,18.0397082 128.839178,18.0397082 C127.721843,18.0397082 126.804159,17.6667784 126.059269,16.9209189 C125.343028,16.1750594 124.970583,15.2283916 124.970583,14.080019 L124.970583,7.0956544 C124.970583,6.76485855 124.702888,6.49681529 124.372522,6.49681529 L121.963267,6.49681529 C121.581869,6.49681529 121.273885,6.80609597 121.273885,7.18709391 L121.273885,14.080019 C121.273885,16.2037464 121.990126,18.0110212 123.451257,19.4749498 C124.913284,20.9379819 126.71821,21.656051 128.839178,21.656051 C130.960146,21.656051 132.765073,20.9379819 134.227099,19.4749498 C135.688231,18.0110212 136.433121,16.2037464 136.433121,14.080019 L136.433121,7.18709391 C136.433121,6.80609597 136.124242,6.49681529 135.743739,6.49681529 L133.425805,6.49681529 C133.045302,6.49681529 132.736423,6.80609597 132.736423,7.18709391 L132.736423,14.080019 Z",
    fillRule: "nonzero"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M166.345208,7.12629803 L166.345208,12.0525357 C164.115784,12.4507799 161.795905,12.4336512 159.578359,12.0011494 L159.578359,7.12629803 C159.578359,6.77858375 159.277753,6.49681529 158.906791,6.49681529 L156.595135,6.49681529 C156.224174,6.49681529 155.923567,6.77858375 155.923567,7.12629803 L155.923567,19.9437656 C155.923567,20.2914799 156.224174,20.5732484 156.595135,20.5732484 L158.906791,20.5732484 C159.277753,20.5732484 159.578359,20.2914799 159.578359,19.9437656 L159.578359,15.5253963 C160.737842,15.7112436 161.914685,15.8157291 163.101579,15.8157291 C164.191621,15.8157291 165.274353,15.727516 166.345208,15.5699311 L166.345208,19.9437656 C166.345208,20.2914799 166.645814,20.5732484 167.016776,20.5732484 L169.328432,20.5732484 C169.699393,20.5732484 170,20.2914799 170,19.9437656 L170,7.12629803 C170,6.77858375 169.699393,6.49681529 169.328432,6.49681529 L167.016776,6.49681529 C166.645814,6.49681529 166.345208,6.77858375 166.345208,7.12629803",
    fillRule: "nonzero"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M101.597919,10.3484647 C101.138388,8.14409397 99.1415334,6.49681529 96.6570845,6.49681529 L89.4185946,6.49681529 C89.0713155,6.49681529 88.7898089,6.77279017 88.7898089,7.11218786 L88.7898089,19.9578759 C88.7898089,20.2981306 89.0713155,20.5732484 89.4185946,20.5732484 L91.7346658,20.5732484 C92.0828219,20.5732484 92.3643285,20.2981306 92.3643285,19.9578759 L92.3643285,17.9652001 L92.3643285,16.8835842 L96.2221086,16.8835842 C98.6241226,16.8835842 100.817418,15.4111468 101.545301,13.1733505 C101.87241,12.1671564 101.835578,11.2175285 101.597919,10.3484647 M95.8239653,13.8058643 L92.2827705,13.8058643 L92.2827705,9.4314053 L95.8239653,9.4314053 C97.0596126,9.4314053 98.0619864,10.4101734 98.0619864,11.6186348 C98.0619864,12.8270963 97.0596126,13.8058643 95.8239653,13.8058643",
    fillRule: "nonzero"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M60.6229027,6.49681529 C58.5017934,6.49681529 56.6969065,7.24382724 55.2350259,8.70755522 C53.7735772,10.1712832 53.0573248,11.9518204 53.0573248,14.0760003 C53.0573248,16.201046 53.7735772,18.0101479 55.2350259,19.4738758 C56.6969065,20.9384693 58.5017934,21.656051 60.6229027,21.656051 C62.7431481,21.656051 64.548899,20.9384693 66.0099156,19.4738758 C67.4717963,18.0101479 68.2165605,16.201046 68.2165605,14.0760003 C68.2165605,11.9518204 67.4717963,10.1712832 66.0099156,8.70755522 C64.548899,7.24382724 62.7431481,6.49681529 60.6229027,6.49681529 M63.4023768,16.9186275 C62.6576125,17.6656395 61.7400491,18.0378471 60.6229027,18.0378471 C59.5048924,18.0378471 58.588193,17.6656395 57.8434287,16.9186275 C57.1263124,16.1724812 56.7539302,15.2246502 56.7539302,14.0760003 C56.7539302,12.928216 57.1263124,11.9803851 57.8434287,11.2342387 C58.588193,10.4880924 59.5048924,10.1141536 60.6229027,10.1141536 C61.7400491,10.1141536 62.6576125,10.4880924 63.4023768,11.2342387 C64.147141,11.9803851 64.5203871,12.928216 64.5203871,14.0760003 C64.5203871,15.2246502 64.147141,16.1724812 63.4023768,16.9186275",
    fillRule: "nonzero"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M77.9475271,6.49681529 C75.8272214,6.49681529 74.021419,7.24382724 72.5594967,8.70755522 C71.0984384,10.1712832 70.3821656,11.9518204 70.3821656,14.0760003 C70.3821656,16.201046 71.0984384,18.0101479 72.5594967,19.4738758 C74.021419,20.9384693 75.8272214,21.656051 77.9475271,21.656051 C80.0678329,21.656051 81.8736352,20.9384693 83.3346935,19.4738758 C84.7966158,18.0101479 85.5414013,16.201046 85.5414013,14.0760003 C85.5414013,11.9518204 84.7966158,10.1712832 83.3346935,8.70755522 C81.8736352,7.24382724 80.0678329,6.49681529 77.9475271,6.49681529 M80.7270803,16.9186275 C79.9822948,17.6656395 79.0647053,18.0378471 77.9475271,18.0378471 C76.8294849,18.0378471 75.9127594,17.6656395 75.1679739,16.9186275 C74.4517011,16.1724812 74.0784443,15.2246502 74.0784443,14.0760003 C74.0784443,12.928216 74.4517011,11.9803851 75.1679739,11.2342387 C75.9127594,10.4880924 76.8294849,10.1141536 77.9475271,10.1141536 C79.0647053,10.1141536 79.9822948,10.4880924 80.7270803,11.2342387 C81.4718658,11.9803851 81.8451226,12.928216 81.8451226,14.0760003 C81.8451226,15.2246502 81.4718658,16.1724812 80.7270803,16.9186275",
    fillRule: "nonzero"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M146.306095,17.9813733 C145.162758,17.9813733 144.225291,17.6082788 143.492813,16.8897906 C142.760334,16.1436016 142.379516,15.1957166 142.379516,14.0764331 C142.379516,11.7798678 144.049461,10.1429266 146.306095,10.1429266 C147.558996,10.1429266 148.647552,10.6675095 149.311996,11.5305611 C149.531121,11.816225 149.926076,11.9062525 150.240627,11.7261976 L152.288739,10.5515126 C152.641283,10.3489509 152.742893,9.89621678 152.514049,9.56467343 C151.206367,7.66717199 148.90202,6.49681529 146.335253,6.49681529 C144.136934,6.49681529 142.29116,7.21443785 140.796161,8.67824939 C139.331205,10.1429266 138.598726,11.9226998 138.598726,14.0764331 C138.598726,16.2293008 139.331205,18.0099397 140.796161,19.4746168 C142.29116,20.9384284 144.136934,21.656051 146.335253,21.656051 C148.898486,21.656051 151.176326,20.4657843 152.544974,18.568283 C152.785304,18.2341426 152.68281,17.7692894 152.320547,17.5667276 L150.26625,16.4162809 C149.953467,16.2414199 149.563813,16.3314473 149.345572,16.6136487 C148.681128,17.4741033 147.58727,17.9813733 146.306095,17.9813733",
    fillRule: "nonzero"
  }))))));
};

var headerItemStyles = {"headerItem":"__headerItem__headerItem__1UvJ-"};

var HeaderItem = function HeaderItem(_ref) {
  var icon = _ref.icon,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, ["icon", "children"]);

  return /*#__PURE__*/React__default.createElement("div", _extends({
    className: headerItemStyles.headerItem
  }, props), icon && /*#__PURE__*/React__default.createElement(Icon, {
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
  return /*#__PURE__*/React__default.createElement("div", _extends({
    className: "" + headerStyle.profileItemContainer
  }, props), /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("div", {
    className: headerStyle.circleAvatar
  }, circlerContent)), /*#__PURE__*/React__default.createElement("div", {
    className: headerStyle.profileBox
  }, /*#__PURE__*/React__default.createElement("span", {
    className: headerStyle.profileBoxUsername
  }, name), /*#__PURE__*/React__default.createElement("p", {
    className: headerStyle.date
  }, /*#__PURE__*/React__default.createElement("small", null, "\xDAltimo acceso ", date.toLocaleDateString('es-ES', options), " - ", date.getHours() + ":" + date.getMinutes(), " hrs "))), /*#__PURE__*/React__default.createElement(Icon, {
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

var Header = function Header(_ref) {
  var children = _ref.children,
      logo = _ref.logo,
      logOut = _ref.logOut,
      userData = _ref.userData,
      props = _objectWithoutPropertiesLoose(_ref, ["children", "logo", "logOut", "userData"]);

  var headerStyleContainer = [Styles.header].concat(props.className).join(' ');
  return /*#__PURE__*/React__default.createElement(Grid, {
    row: true,
    className: headerStyleContainer
  }, /*#__PURE__*/React__default.createElement(Grid, {
    col: 7,
    xl: 8,
    className: Styles.headerOptionsContainer
  }, /*#__PURE__*/React__default.createElement(Grid, {
    row: true,
    className: Styles.headerLeftArea
  }, logo && /*#__PURE__*/React__default.createElement(Grid, {
    col: 3,
    xl: 4,
    className: Styles.headerLogoContainer
  }, logo), children)), /*#__PURE__*/React__default.createElement(Grid, {
    col: 3,
    lg: 4,
    xl: 3,
    className: Styles.profileItemContainer
  }, /*#__PURE__*/React__default.createElement(HeaderProfileItem, {
    name: userData.name,
    date: userData.date
  })), logOut && /*#__PURE__*/React__default.createElement(Grid, {
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

var inputStyles = {"inputContainer":"__input__inputContainer__2lUSM","error":"__input__error__1s8q6","success":"__input__success__UYGJi","disabled":"__input__disabled__1OvLQ","inputLabel":"__input__inputLabel__q2gh-","inputHelper":"__input__inputHelper__3IoKh","successText":"__input__successText__1FylX","errorText":"__input__errorText__1-t8w"};

var inputStyles$1 = {"input":"__core__input__3kii5","suffixContainer":"__core__suffixContainer__2MCdF","prefixContainer":"__core__prefixContainer__3U2NA","disabled":"__core__disabled__2fAZb","hasPrefix":"__core__hasPrefix__XciEy","hasSuffix":"__core__hasSuffix__3N4XX"};

var InputCore = function InputCore(_ref) {
  var prefix = _ref.prefix,
      suffix = _ref.suffix,
      variant = _ref.variant,
      onlyNumber = _ref.onlyNumber,
      props = _objectWithoutPropertiesLoose(_ref, ["prefix", "suffix", "variant", "onlyNumber"]);

  var inputStyle = [inputStyles$1.input];

  if (prefix) {
    inputStyle = inputStyle.concat(inputStyles$1.hasPrefix);
  }

  if (suffix) {
    inputStyle = inputStyle.concat(inputStyles$1.hasSuffix);
  }

  var onProcess = function onProcess(_val) {
    if (onlyNumber === true && isNaN(_val.target.value.trim())) {
      return;
    }

    props.onChange(_val);
  };

  return /*#__PURE__*/React__default.createElement("div", {
    className: inputStyle.join(' ')
  }, prefix && /*#__PURE__*/React__default.createElement("div", {
    className: inputStyles$1.prefixContainer
  }, prefix), variant && variant === 'textarea' ? /*#__PURE__*/React__default.createElement("textarea", props) : /*#__PURE__*/React__default.createElement("input", _extends({}, props, {
    onChange: onProcess
  })), suffix && /*#__PURE__*/React__default.createElement("div", {
    className: inputStyles$1.suffixContainer
  }, suffix));
};

InputCore.propTypes = {
  maxLength: propTypes.string,
  suffix: propTypes.oneOfType([propTypes.string, propTypes.element]),
  prefix: propTypes.oneOfType([propTypes.string, propTypes.element]),
  onlyNumber: propTypes.bool,
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
        return /*#__PURE__*/React__default.createElement("div", null, successSvg, " ", /*#__PURE__*/React__default.createElement("span", {
          className: inputStyles.successText
        }, element.text));

      case 'error':
        return /*#__PURE__*/React__default.createElement("div", null, errorSvg, " ", /*#__PURE__*/React__default.createElement("span", {
          className: inputStyles.errorText
        }, element.text));

      default:
        return /*#__PURE__*/React__default.createElement("div", null, " ", element.text);
    }
  };

  return /*#__PURE__*/React__default.createElement("div", {
    className: [inputStyles.inputContainer, validateStyle].join(' ')
  }, label && /*#__PURE__*/React__default.createElement("span", {
    className: inputStyles.inputLabel
  }, " ", label, " "), /*#__PURE__*/React__default.createElement(InputCore, props), /*#__PURE__*/React__default.createElement("div", {
    className: [inputStyles.inputHelper].join(' ')
  }, /*#__PURE__*/React__default.createElement("div", null, Array.isArray(assistText) && assistText.length > 0 ? assistText.map(function (el, i) {
    return /*#__PURE__*/React__default.createElement("div", {
      key: el.text + "-" + i
    }, getHelperText(el));
  }) : assistText), maxLength && /*#__PURE__*/React__default.createElement("div", null, Number(maxLength) - props.value.length + "/" + maxLength)));
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
  type: propTypes.oneOf(['text', 'password', 'range']),
  error: propTypes.bool,
  success: propTypes.bool,
  suffix: propTypes.oneOfType([propTypes.string, propTypes.element]),
  prefix: propTypes.oneOfType([propTypes.string, propTypes.element]),
  variant: propTypes.string,
  disabled: propTypes.bool
};
var errorSvg = /*#__PURE__*/React__default.createElement("svg", {
  width: "10px",
  height: "10px",
  "data-testid": "errorIcon"
}, /*#__PURE__*/React__default.createElement("g", {
  stroke: "none",
  strokeWidth: "1",
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/React__default.createElement("g", {
  transform: "translate(-1186.000000, -1849.000000)",
  fill: "#1F1E1E"
}, /*#__PURE__*/React__default.createElement("g", {
  transform: "translate(1183.000000, 1754.000000)"
}, /*#__PURE__*/React__default.createElement("g", {
  transform: "translate(0.000000, 92.000000)"
}, /*#__PURE__*/React__default.createElement("path", {
  d: "M12.2,3.80666667 C11.94,3.54666667 11.52,3.54666667 11.26,3.80666667 L8,7.06 L4.74,3.8 C4.48,3.54 4.06,3.54 3.8,3.8 C3.54,4.06 3.54,4.48 3.8,4.74 L7.06,8 L3.8,11.26 C3.54,11.52 3.54,11.94 3.8,12.2 C4.06,12.46 4.48,12.46 4.74,12.2 L8,8.94 L11.26,12.2 C11.52,12.46 11.94,12.46 12.2,12.2 C12.46,11.94 12.46,11.52 12.2,11.26 L8.94,8 L12.2,4.74 C12.4533333,4.48666667 12.4533333,4.06 12.2,3.80666667 Z",
  id: "color-icono"
}))))));
var successSvg = /*#__PURE__*/React__default.createElement("svg", {
  width: "12px",
  height: "9px",
  "data-testid": "successIcon"
}, /*#__PURE__*/React__default.createElement("g", {
  stroke: "none",
  strokeWidth: "1",
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/React__default.createElement("g", {
  transform: "translate(-1100.000000, -1816.000000)",
  fill: "#1F1E1E"
}, /*#__PURE__*/React__default.createElement("g", {
  transform: "translate(1098.000000, 1720.000000)"
}, /*#__PURE__*/React__default.createElement("g", {
  transform: "translate(0.000000, 92.000000)"
}, /*#__PURE__*/React__default.createElement("path", {
  d: "M6,10.8 L3.66666667,8.46666667 C3.40666667,8.20666667 2.99333333,8.20666667 2.73333333,8.46666667 C2.47333333,8.72666667 2.47333333,9.14 2.73333333,9.4 L5.52666667,12.1933333 C5.78666667,12.4533333 6.20666667,12.4533333 6.46666667,12.1933333 L13.5333333,5.13333333 C13.7933333,4.87333333 13.7933333,4.46 13.5333333,4.2 C13.2733333,3.94 12.86,3.94 12.6,4.2 L6,10.8 Z",
  id: "color-icono"
}))))));

var styles$3 = {"radioContainer":"__radio__radioContainer__1oqQj","radio":"__radio__radio__2rl6s","checked":"__radio__checked__9EBtf","disabled":"__radio__disabled__3FKAc","unchecked":"__radio__unchecked__uejIh"};

var Radio = function Radio(_ref) {
  var checked = _ref.checked,
      onChange = _ref.onChange,
      disabled = _ref.disabled,
      props = _objectWithoutPropertiesLoose(_ref, ["checked", "onChange", "disabled"]);

  var disabledClass = disabled ? styles$3.disabled : '';
  var checkedClass = checked ? styles$3.checked : styles$3.unchecked;
  return /*#__PURE__*/React__default.createElement("label", {
    className: [styles$3.radioContainer, disabledClass].concat(checkedClass).join(' ')
  }, /*#__PURE__*/React__default.createElement("input", _extends({
    "data-testid": "radio",
    disabled: disabled,
    type: "radio",
    checked: checked,
    onChange: onChange ? function (_ref2) {
      var target = _ref2.target;
      return onChange(target.checked);
    } : null
  }, props)), /*#__PURE__*/React__default.createElement("div", {
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

var styles$4 = {"separator":"__separator__separator__dCaRR","horizontal":"__separator__horizontal__217mF","vertical":"__separator__vertical__VlP6p"};

var Separator = function Separator(_ref) {
  var vertical = _ref.vertical;
  var direction = vertical ? 'vertical' : 'horizontal';
  var separatorClases = [styles$4.separator];
  separatorClases = separatorClases.concat(styles$4[direction]);
  return /*#__PURE__*/React__default.createElement("hr", {
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

var SidebarElement = function SidebarElement(_ref) {
  var text = _ref.text,
      icon = _ref.icon,
      sublevel = _ref.sublevel,
      level = _ref.level,
      notification = _ref.notification,
      active = _ref.active,
      open = _ref.open,
      props = _objectWithoutPropertiesLoose(_ref, ["text", "icon", "sublevel", "level", "notification", "active", "open"]);

  var defaultIcon = !icon && level === 3 ? /*#__PURE__*/React__default.createElement(Icon, {
    name: "arrow-right",
    size: "1"
  }) : icon;
  var containerClasses = [styles$5.sidebarElement, styles$5['level-' + level]];

  if (active === true) {
    containerClasses = containerClasses.concat(styles$5.active);
  }

  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", _extends({
    role: "component",
    "data-status": active ? 'active' : '',
    className: containerClasses.join(' ')
  }, props), /*#__PURE__*/React__default.createElement("div", {
    className: [styles$5.textContainer].join(' ')
  }, defaultIcon, text), notification === true && /*#__PURE__*/React__default.createElement("span", {
    role: "notification",
    className: [styles$5.notification].join(' ')
  })), open && sublevel.map(function (child, index) {
    return /*#__PURE__*/React__default.createElement(SidebarElement, _extends({
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

var styles$6 = {"sidebar":"__sidebar__sidebar__cwV8q"};

var Sidebar = function Sidebar(_ref) {
  var items = _ref.items;
  return /*#__PURE__*/React__default.createElement("div", {
    className: [styles$6.sidebar].join(' ')
  }, items.map(function (element, index) {
    return /*#__PURE__*/React__default.createElement(SidebarElement, _extends({
      key: index
    }, element));
  }));
};

Sidebar.propTypes = {
  items: propTypes.array.isRequired
};

var styles$7 = {"switchContainer":"__switch__switchContainer__1eRWQ","disabled":"__switch__disabled__n5mqJ","circle":"__switch__circle__3-WI0","switchBar":"__switch__switchBar__2eAt1","active":"__switch__active__2ZPJd"};

var Switch = function Switch(_ref) {
  var status = _ref.status,
      disabled = _ref.disabled,
      props = _objectWithoutPropertiesLoose(_ref, ["status", "disabled"]);

  var switchClass = [styles$7.switchBar];
  var containerClass = [styles$7.switchContainer, disabled ? styles$7.disabled : null];

  if (status) {
    switchClass = switchClass.concat(styles$7.active);
  }

  return /*#__PURE__*/React__default.createElement("div", _extends({
    "data-status": status ? 'on' : 'off',
    className: containerClass.join(' ')
  }, props), /*#__PURE__*/React__default.createElement("div", {
    className: switchClass.join(' ')
  }, /*#__PURE__*/React__default.createElement("div", {
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

var Loading = function Loading(_ref) {
  var dark = _ref.dark;
  var styleArr = [styles$8.loadingContainer, dark ? styles$8.dark : null];
  var theme = dark ? 'dark' : 'light';
  return /*#__PURE__*/React__default.createElement("div", {
    className: styleArr.join(' '),
    "data-theme": theme
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles$8.circleMain
  }), /*#__PURE__*/React__default.createElement("div", {
    className: styles$8.circlesContainer
  }, [styles$8.circle_1, styles$8.circle_2].map(function (el, i) {
    return /*#__PURE__*/React__default.createElement("div", {
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

var styles$9 = {"titleContainer":"__title__titleContainer__Yw0He","suffix":"__title__suffix__3FgDb"};

var IconListModel = function IconListModel() {};

IconListModel.iconList = ['line-alarm', 'line-alert', 'line-app-notification', 'line-block', 'line-bookmark', 'line-bug', 'line-check-double', 'line-check', 'line-cloud-disable', 'line-cloud-download', 'line-cloud-upload', 'line-cloud', 'line-cogwheel', 'line-copy', 'line-cross', 'line-cut', 'line-dashboard', 'line-down', 'line-download-queue', 'line-download', 'line-draft', 'line-exit-fullscreen', 'line-eye-close', 'line-eye-open', 'line-female-user', 'line-file', 'line-filter', 'line-flag', 'line-fullscreen', 'line-heart', 'line-help', 'line-home', 'line-information', 'line-left', 'line-lifebuoy', 'line-list', 'line-loading', 'line-lock', 'line-login', 'line-logout', 'line-menu-burger', 'line-menu-dots', 'line-microphone-disable', 'line-microphone', 'line-minus', 'line-note', 'line-notification-disable', 'line-notification', 'line-paste', 'line-plus', 'line-power-sign', 'line-print', 'line-puzzle', 'line-refresh', 'line-reply-all', 'line-reply', 'line-right', 'line-save', 'line-screenshot', 'line-search-check', 'line-search-cross', 'line-search-minus', 'line-search-plus', 'line-search', 'line-share', 'line-shield', 'line-snooze', 'line-star', 'line-stars', 'line-sync', 'line-task', 'line-time', 'line-trash-empty', 'line-trash-full', 'line-trash', 'line-umbrella', 'line-unlock', 'line-up', 'line-upload-queue', 'line-upload', 'line-user', 'line-verification-fail', 'line-verification', 'line-wrench', 'line-write', 'arrow-down', 'arrow-left', 'arrow-right', 'arrow-up', 'alarm1', 'alert1', 'app-notification1', 'block', 'bookmark', 'bug', 'check-double', 'check', 'cloud-disable', 'cloud-download', 'cloud-upload', 'cloud', 'cogwheel', 'copy', 'cross', 'cut', 'dashboard', 'down', 'download-queue', 'download', 'draft', 'exit-fullscreen', 'eye-close', 'eye-open', 'female-user', 'file', 'filter', 'flag', 'fullscreen', 'heart', 'help', 'home', 'information', 'left', 'lifebuoy', 'list', 'loading', 'lock', 'login', 'logout', 'menu-burger', 'menu-dots', 'microphone-disable', 'microphone', 'minus', 'note', 'notification-disable', 'notification', 'paste', 'plus', 'power-sign', 'print', 'puzzle', 'refresh', 'reply-all', 'reply', 'right', 'save', 'screenshot', 'search-alt', 'search-check', 'search-cross', 'search-minus', 'search-plus', 'share', 'shield', 'snooze', 'star', 'stars', 'sync', 'task', 'time', 'trash-empty', 'trash-full', 'trash', 'umbrella', 'unlock', 'up', 'upload-queue', 'upload', 'user', 'verification-fail', 'verification', 'wrench', 'write'];

var TitleSection = function TitleSection(_ref) {
  var label = _ref.label,
      prefix = _ref.prefix,
      props = _objectWithoutPropertiesLoose(_ref, ["label", "prefix"]);

  var containerClass = [styles$9.titleContainer];
  return /*#__PURE__*/React__default.createElement("div", _extends({}, props, {
    className: containerClass.join(' ')
  }), prefix && /*#__PURE__*/React__default.createElement(Icon, {
    className: styles$9.suffix,
    name: prefix
  }, " "), " ", /*#__PURE__*/React__default.createElement("div", {
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

var InputChip = function InputChip(_ref) {
  var value = _ref.value,
      onClose = _ref.onClose,
      variant = _ref.variant,
      disabled = _ref.disabled,
      props = _objectWithoutPropertiesLoose(_ref, ["value", "onClose", "variant", "disabled"]);

  var mainRef = React__default.createRef(null);

  var onPress = function onPress() {
    mainRef.current.className = classesComponent.concat(styles$a.pressed).join(' ');
  };

  var mouseUp = function mouseUp() {
    mainRef.current.className = classesComponent.join(' ');
  };

  var classesComponent = [styles$a.chip, disabled ? styles$a.disabled : null, variant ? styles$a.variant : null];
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("div", _extends({
    ref: mainRef
  }, props, {
    className: classesComponent.join(' ')
  }), value, /*#__PURE__*/React__default.createElement(Icon, {
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
  return /*#__PURE__*/React__default.createElement("div", {
    className: styles$b.progressBar
  }, !Array.isArray(label) ? /*#__PURE__*/React__default.createElement("div", {
    className: styles$b.simpleLabel
  }, label) : /*#__PURE__*/React__default.createElement("div", {
    className: styles$b.multiHeader
  }, label.map(function (el, i) {
    return /*#__PURE__*/React__default.createElement("div", {
      key: i
    }, /*#__PURE__*/React__default.createElement("label", {
      className: styles$b.multiHeaderLabel
    }, el.label), /*#__PURE__*/React__default.createElement("div", null, el.text));
  })), /*#__PURE__*/React__default.createElement("div", {
    className: styles$b.barContainer
  }, /*#__PURE__*/React__default.createElement("div", {
    className: styles$b.bar,
    "data-progress": progress,
    style: {
      width: progress + "%"
    }
  })), assistText || percent ? /*#__PURE__*/React__default.createElement("div", {
    className: bellowClasses.join(' ').trim(),
    role: "helper"
  }, assistText, percent && /*#__PURE__*/React__default.createElement("div", {
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

var styles$c = {"error":"__bullet__error__17A9A","warning":"__bullet__warning__1o0c4","success":"__bullet__success__8m-fm","info":"__bullet__info__1CoXU","boxCircle":"__bullet__boxCircle__2C1_e","bulletElement":"__bullet__bulletElement__1OQ67","disabled":"__bullet__disabled__2hJYv","prefixContainer":"__bullet__prefixContainer__2vm2y","prefixItem":"__bullet__prefixItem__3BrA8","textContainer":"__bullet__textContainer__3DxYi","active":"__bullet__active__1eHUK"};

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

  if (typeList == 'icons' && type !== '' && type !== undefined) {
    switch (type) {
      case 'info':
        icon = 'line-check';
        break;

      case 'error':
        icon = 'line-cross';
        break;

      case 'warning':
        icon = 'line-alert';
        break;

      case 'success':
        icon = 'line-check';
        break;
    }
  }

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
  var defaultPrefix = typeList === 'order' ? /*#__PURE__*/React__default.createElement("div", {
    "data-testid": "test-prefix-bullet-order",
    className: stylePrefixContainer.join(' ')
  }, numberList, ".") : typeList === 'unorder' ? /*#__PURE__*/React__default.createElement("div", {
    "data-testid": "test-prefix-bullet-unorder",
    className: stylePrefixContainer.join(' ')
  }, /*#__PURE__*/React__default.createElement("div", {
    "data-testid": "test-prefix-bullet",
    className: styleBoxCircle.join(' ')
  })) : typeList === 'icons' ? /*#__PURE__*/React__default.createElement("div", {
    "data-testid": "test-prefix-bullet-icons",
    className: stylePrefixContainer.join(' ')
  }, /*#__PURE__*/React__default.createElement(Icon, {
    size: "1",
    name: icon
  })) : '';
  return /*#__PURE__*/React__default.createElement("div", {
    "data-testid": "test-bullet-" + typeList,
    className: styleContainer.join(' ')
  }, defaultPrefix, /*#__PURE__*/React__default.createElement("p", {
    "data-testid": "test-bullet-content",
    className: styleTextContainer.join(' ')
  }, text));
};
BulletElement.defaultProps = {
  icon: 'line-check'
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
  return /*#__PURE__*/React__default.createElement("div", null, typeOfBullet === 'order' ? itemsBullets.map(function (element, index) {
    return /*#__PURE__*/React__default.createElement(BulletElement, _extends({
      key: index,
      count: index,
      typeList: typeOfBullet
    }, element));
  }) : typeOfBullet === 'unorder' ? itemsBullets.map(function (element, index) {
    return /*#__PURE__*/React__default.createElement(BulletElement, _extends({
      key: index
    }, element, {
      typeList: typeOfBullet
    }));
  }) : typeOfBullet === 'icons' ? itemsBullets.map(function (element, index) {
    return /*#__PURE__*/React__default.createElement(BulletElement, _extends({
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

var styles$d = {"fadeInFromNone":"__tooltip__fadeInFromNone__QneFP","containerTooltip":"__tooltip__containerTooltip__2kFow","box":"__tooltip__box__3hy_8","arrow":"__tooltip__arrow__T5dKc","content":"__tooltip__content__2N_0M"};

var Tooltip = function Tooltip(_ref) {
  var children = _ref.children,
      content = _ref.content,
      placement = _ref.placement,
      eventListener = _ref.eventListener,
      props = _objectWithoutPropertiesLoose(_ref, ["children", "content", "placement", "eventListener"]);

  var refBoxTooltip = React.createRef();
  var refContainerTooltip = React.createRef();
  var refContainerTippy = React.createRef();

  var _useState = React.useState(false),
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
      if (visible) {
        refBoxTooltip.current.style.opacity = 0;
        setVisible(false);
      } else {
        refBoxTooltip.current.style.opacity = 1;
        setVisible(true);
      }
    }
  };

  return /*#__PURE__*/React__default.createElement("div", _extends({}, props, {
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
  }), /*#__PURE__*/React__default.createElement(Tippy, {
    offset: [0, 20],
    arrow: true,
    appendTo: "parent",
    placement: placement,
    visible: true,
    animation: false,
    render: function render(attrs) {
      return /*#__PURE__*/React__default.createElement("div", _extends({
        "data-testid": "test-box",
        ref: refBoxTooltip,
        className: styles$d.box,
        tabIndex: "-1"
      }, attrs), /*#__PURE__*/React__default.createElement("div", {
        "data-testid": "test-box-content",
        ref: refContainerTippy,
        className: styles$d.content
      }, /*#__PURE__*/React__default.createElement("p", null, " ", content)), /*#__PURE__*/React__default.createElement("div", {
        "data-testid": "test-box-arrow",
        id: "arrow",
        className: styles$d.arrow
      }, " "));
    }
  }, /*#__PURE__*/React__default.createElement("span", null, children)));
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

var styles$e = {"message":"__message__message__3g_Jc","prefix":"__message__prefix__3hi6e","textContainer":"__message__textContainer__10WAf","actionContainer":"__message__actionContainer__3_FT8","error":"__message__error__hllCz","success":"__message__success__2_19H","info":"__message__info__2aIvC","warning":"__message__warning__2x3Y6"};

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

  return /*#__PURE__*/React__default.createElement("div", {
    className: messageClasses.join(' ').trim(),
    role: "message"
  }, /*#__PURE__*/React__default.createElement(Icon, {
    name: getIcon(),
    className: styles$e.prefix
  }), /*#__PURE__*/React__default.createElement("div", {
    className: styles$e.textContainer
  }, title && /*#__PURE__*/React__default.createElement("div", null, " ", title, " "), description && /*#__PURE__*/React__default.createElement("p", null, " ", description, " ")), /*#__PURE__*/React__default.createElement("div", {
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

var InputRange = function InputRange(_ref) {
  var props = _extends({}, _ref);

  var _useState = React.useState(0),
      range = _useState[0],
      setRange = _useState[1];

  var change = function change(e) {
    setRange(Number(e.target.value));
  };

  return /*#__PURE__*/React__default.createElement(React.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
    className: "d-flex"
  }, /*#__PURE__*/React__default.createElement(Input, {
    label: props.label,
    type: "text",
    placeholder: props.placeholder,
    value: range
  })), /*#__PURE__*/React__default.createElement("div", {
    className: "d-flex"
  }, /*#__PURE__*/React__default.createElement(Input, {
    type: "range",
    min: props.min,
    max: props.max,
    step: props.step,
    onChange: change
  })));
};

var Stamp = function Stamp(_ref) {
  var width = _ref.width,
      height = _ref.height,
      props = _objectWithoutPropertiesLoose(_ref, ["label", "width", "height"]);

  var stampSvg = /*#__PURE__*/React__default.createElement("svg", _extends({
    width: width,
    height: height,
    viewBox: "0 0 170 168"
  }, props), /*#__PURE__*/React__default.createElement("title", null, "01.Atomo/comprobante sello/default"), /*#__PURE__*/React__default.createElement("g", {
    id: "Symbols",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React__default.createElement("g", {
    id: "01.Atomo/Cards/card-comprobante",
    transform: "translate(-639.000000, -293.000000)"
  }, /*#__PURE__*/React__default.createElement("g", {
    id: "01.Atomo/comprobante-sello/desktop",
    transform: "translate(724.000000, 377.000000) rotate(-360.000000) translate(-724.000000, -377.000000) translate(639.000000, 293.000000)"
  }, /*#__PURE__*/React__default.createElement("g", {
    id: "Group-2"
  }, /*#__PURE__*/React__default.createElement("g", null, /*#__PURE__*/React__default.createElement("g", {
    id: "01.Atomo/comprobante-sello/desktop-Copy"
  }, /*#__PURE__*/React__default.createElement("g", {
    id: "Group-48"
  }, /*#__PURE__*/React__default.createElement("g", {
    id: "Group",
    opacity: "0.25",
    fill: "#000000",
    fillRule: "nonzero"
  }, /*#__PURE__*/React__default.createElement("g", {
    id: "Shape"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M167.695868,83.258832 C166.283084,80.8916171 166.028669,78.2705477 167.191191,75.7320075 C169.22859,71.2843385 168.353194,67.5031663 165.059294,64.0453189 C163.221793,62.1163415 162.39676,59.6759997 162.982435,57.0559752 C164.045787,52.3043079 162.246707,48.9289892 158.407113,46.3658989 C155.999513,44.7581567 154.746128,42.4353398 154.561287,39.5896672 C154.277797,35.2182587 152.285049,32.2195424 148.084601,30.7752904 C145.197247,29.7833792 143.196192,27.8173161 142.336372,24.8499399 C141.040931,20.3824219 138.071021,18.0804985 133.539833,17.6015187 C130.679996,17.2990877 128.498255,15.8375987 127.054319,13.3455458 C124.822214,9.49281434 121.563102,7.68762997 117.118622,8.14571645 C113.895336,8.47739816 111.172053,7.50429096 108.926448,5.10886978 C106.276895,2.28252352 102.991302,1.61184741 99.4050847,2.72650698 C95.8681927,3.82549656 92.6449066,3.52202081 89.4849643,1.50163506 C86.8322953,-0.194903958 83.8436939,-0.62008338 81.1084697,1.09421497 C77.3805065,3.43113482 73.616198,4.03025125 69.4884396,2.51443962 C68.8570742,2.28252352 68.1234235,2.33162292 67.4359829,2.25066119 C67.3394089,2.06941152 67.2417965,1.88868417 67.1447034,1.70795676 C65.271895,2.63353165 63.0413477,3.18145941 61.6015647,4.564076 C58.6742309,7.37631924 55.4540598,8.53955587 51.4888154,8.16765445 C48.0765348,7.84694171 45.3195035,9.29484999 43.5816911,12.1922336 C41.4876972,15.6850773 38.5479023,17.51899 34.5764272,17.9953581 C31.2539709,18.3933762 28.9683867,20.3223536 27.9901858,23.5138109 C26.8011835,27.3905697 24.4117564,29.9217976 20.634987,31.3190395 C17.4044316,32.5136161 15.5970445,35.0208167 15.3872816,38.4452346 C15.148962,42.3308732 13.4127072,45.1629651 10.2527651,47.3102779 C7.14785981,49.4199826 5.93237762,52.3951939 6.67433578,56.1424139 C7.3088164,59.3448403 6.61566451,62.1905129 4.31398469,64.5692194 C1.34459445,67.6379283 0.580829271,71.1098785 2.33889105,75.0905815 C3.66236992,78.0856421 3.47077961,81.0117539 1.80150359,83.8401896 C-0.344411743,87.47563 -0.0500168775,90.9695183 2.47596379,94.2962598 C4.41523161,96.850993 4.82852663,99.731662 3.97026437,102.712619 C2.7682818,106.886585 3.8077501,110.233176 7.09438068,112.970725 C9.60841935,115.065282 10.7060397,117.800221 10.5092573,121.053835 C10.2678223,125.047075 11.8602545,127.974753 15.4454337,129.741808 C18.5352818,131.264932 20.4158783,133.655129 21.0378978,137.098874 C21.7601258,141.099426 24.1189192,143.61864 28.089875,144.537947 C31.3489872,145.292196 33.6729932,147.143868 34.9959529,150.277346 C36.4487163,153.717435 39.0442718,155.775951 42.7810617,155.812514 C46.9353004,155.852733 50.002303,157.605685 52.5578789,160.784084 C54.621239,163.349786 57.3808665,164.363635 60.6799582,163.529469 C64.373134,162.595536 67.6706681,163.309566 70.613059,165.825124 C73.5113168,168.302552 76.7449877,168.400228 80.0710781,166.781516 C83.2445204,165.236976 86.3842129,165.157059 89.5550587,166.745998 C93.2108506,168.577821 96.5738061,168.083172 99.6787111,165.45479 C102.163154,163.351353 105.024029,162.580389 108.166318,163.425002 C112.409342,164.565778 115.597322,163.022805 118.203262,159.756654 C120.160702,157.301687 122.640992,156.031372 125.827414,155.981228 C130.097437,155.914369 133.270879,154.043371 134.951059,149.911713 C136.161868,146.933368 138.507161,145.289062 141.551319,144.567198 C145.600676,143.605582 148.040467,141.103605 148.750754,136.956277 C149.305794,133.717288 151.036337,131.369399 153.974056,129.93925 C157.736806,128.105859 159.502137,125.14214 159.234741,120.906537 C159.036921,117.76209 160.111695,115.075729 162.560313,113.051164 C166.029707,110.184076 167.055157,106.680786 165.737389,102.332883 C164.917549,99.6287621 165.29346,96.951281 167.058272,94.645179 C169.866186,90.9763088 170.073872,87.245281 167.695868,83.258832 Z M164.450775,103.411501 C165.420148,106.694889 164.590963,109.593317 161.854181,111.830472 C159.041593,114.128216 157.722788,117.083057 157.950204,120.765507 C158.169832,124.320509 156.754971,127.02045 153.519742,128.640728 C150.105385,130.351893 148.070063,133.080563 147.393006,136.867481 C146.776179,140.319582 144.723722,142.438689 141.32546,143.203385 C137.58919,144.044864 134.997788,146.240754 133.455201,149.751879 C132.102645,152.828946 129.839907,154.459148 126.380378,154.491011 C122.663837,154.525484 119.409917,155.790576 117.149256,158.945993 C114.946746,162.020447 111.913492,162.846256 108.445136,162.067457 C104.965877,161.286568 101.917566,161.980228 99.1911687,164.183952 C96.1750486,166.622205 92.9979723,166.953364 89.5031366,165.301223 C86.4350958,163.851226 83.297999,163.859061 80.2180163,165.329952 C76.7351225,166.992539 73.5289703,166.623249 70.5336189,164.166193 C67.8908152,161.997987 64.9364822,161.284479 61.5444511,162.035073 C58.0008091,162.818573 54.8491744,162.133793 52.5848781,158.931367 C50.2686602,155.65477 46.8615718,154.571972 43.0853216,154.451313 C39.8765733,154.348936 37.6496605,152.866031 36.3988717,149.949843 C34.8012473,146.226651 32.036947,144.023449 28.1449118,143.093695 C24.9704317,142.335267 23.0607591,140.283541 22.4382204,137.040895 C21.6832819,133.10668 19.5814999,130.21922 15.9553028,128.453733 C12.8633778,126.948368 11.6068777,124.280812 11.7969103,120.968695 C12.0144614,117.190135 10.7221354,114.155378 7.85087678,111.777716 C5.1333058,109.527504 4.32540736,106.652058 5.2999738,103.349344 C6.37111421,99.7196483 5.76207516,96.4696894 3.57098809,93.4761968 C1.36795911,90.467034 1.33161407,87.4166063 3.15353928,84.2068676 C4.84617999,81.2238214 4.99311784,78.0543016 3.73661765,74.8920949 C2.30098836,71.2801592 2.7511477,68.1059392 5.48273748,65.2848162 C7.76364868,62.9301371 8.50301077,60.0191728 8.07258158,56.8564438 C7.49365696,52.6046496 8.87009574,49.4366973 12.5409453,47.1405195 C14.9552948,45.6299312 16.2278906,43.2151836 16.4200001,40.369511 C16.7149142,35.9949685 18.6868926,33.0615439 22.9366668,31.634529 C25.8177905,30.6671674 27.6916372,28.4953049 28.5774179,25.5718047 C29.7601895,21.6694515 32.1916731,19.4098371 36.3318929,18.9794343 C39.7337892,18.6258146 42.3090953,16.8112282 44.0266583,13.8302713 C46.052635,10.3149672 49.036044,9.08957298 53.0033653,9.62183077 C56.0828291,10.0349965 58.8699749,9.01696862 61.0070635,6.71817914 C63.8061513,3.70588221 67.0387835,2.86022434 70.8866854,4.23134965 C74.029493,5.35071021 77.0399016,4.99082246 79.8337971,3.19765177 C83.2761919,0.989225955 86.6277242,1.0555623 90.0451974,3.26659976 C92.7575761,5.02164008 95.7036018,5.33347321 98.7498355,4.25276526 C102.580084,2.89417602 105.81739,3.65939447 108.668399,6.63460582 C111.02875,9.0984526 114.008005,10.0381305 117.427554,9.59049075 C120.711589,9.16113263 123.459794,10.1540885 125.196049,13.1240764 C127.328984,16.7736202 130.423505,18.7673669 134.601627,19.2395564 C137.76105,19.5973548 139.813507,21.4516385 140.709672,24.5036328 C141.851945,28.391883 144.307831,30.9246778 148.100696,32.2775214 C151.06801,33.335769 152.799073,35.5243461 153.0187,38.7037897 C153.310499,42.9237216 155.144886,46.1057769 158.707738,48.3956867 C161.761241,50.3586158 162.128326,53.4215791 161.645976,56.7211594 C161.104434,60.2631025 162.253457,63.2278671 164.652749,65.7940913 C166.954429,68.2568935 167.526085,71.0827172 166.227009,74.2282097 C164.733747,77.8438013 164.872896,81.3538818 166.825664,84.7605405 C168.470536,87.6312858 168.312696,90.4027864 166.3916,93.076089 C164.135092,96.2179249 163.314213,99.5624259 164.450775,103.411501 Z M163.999525,74.775928 C165.407117,71.5698459 164.785616,68.6541805 162.439803,66.0984028 C160.205621,63.6648513 158.940295,60.9226007 159.640196,57.5462374 C160.462633,53.3879408 158.7648,50.4153412 155.394576,48.2053484 C152.887806,46.5615651 151.660382,44.1489069 151.452696,41.2066027 C151.179589,37.3543935 149.417892,34.6351256 145.741851,33.2859383 C142.612023,32.1373271 140.508165,30.016131 139.539309,26.7646054 C138.449997,23.1098382 135.913112,21.1552665 132.205398,20.69718 C128.980554,20.299162 126.518956,18.7431307 124.861622,15.9298428 C123.005948,12.7791274 120.336145,11.2429448 116.647123,11.6613339 C113.036502,12.070321 110.033882,10.842315 107.51569,8.24840719 C105.107571,5.76836797 102.217101,4.98382318 98.9709694,6.20503877 C95.4335579,7.53646668 92.2175406,6.99115058 89.0773286,5.03657888 C86.334316,3.32854847 83.4744803,3.28937347 80.7262758,5.00680582 C77.4993549,7.02301292 74.2059744,7.51243934 70.5828924,6.15959573 C67.5449662,5.02508753 64.7495129,5.70464331 62.4805436,8.04260778 C59.7546652,10.8506724 56.5303404,12.0724103 52.6383053,11.6822273 C49.4010002,11.3573358 46.8812501,12.6751831 45.2171662,15.4748904 C43.354223,18.6109803 40.6942849,20.355574 37.0722415,20.8068701 C33.6724221,21.2304825 31.3208977,23.1464016 30.3219281,26.4825453 C29.2938826,29.9184546 27.1230449,32.1597875 23.8073383,33.38257 C20.340021,34.6617646 18.6027278,37.2624628 18.3342936,40.9026046 C18.1027238,44.0465296 16.8675115,46.6232004 14.1670746,48.3286191 C10.6592585,50.5438352 9.44793001,53.7551412 10.1078522,57.732188 C10.6021449,60.710011 9.85655216,63.2694448 7.82382574,65.423548 C4.94529809,68.4744976 4.26616494,71.8529502 6.01384243,75.7208296 C7.2075176,78.3633144 7.04240727,80.9922182 5.58029798,83.4800926 C3.44632458,87.1082205 3.62960745,90.5415185 6.12287756,93.9382528 C7.80201871,96.2260732 8.43494166,98.8116235 7.56006455,101.596183 C6.25735426,105.740899 7.35237857,109.0854 10.6332978,111.848544 C12.8233463,113.692903 13.8384115,116.108696 13.6748588,119.01078 C13.4474427,123.070356 15.0476631,126.096756 18.7231856,127.930668 C21.4620445,129.297615 23.1925879,131.466343 23.7216678,134.51207 C24.449088,138.698573 26.9459926,141.076757 30.9896385,142.029493 C33.7695153,142.685021 35.8432597,144.344474 36.9637256,147.000017 C38.5608307,150.784846 41.3874368,152.730016 45.4087565,152.793218 C48.6922718,152.844407 51.2286368,154.180536 53.2219029,156.729 C55.6056187,159.775771 58.676775,160.811559 62.437968,159.974781 C65.4795291,159.297836 68.279136,159.836362 70.7163306,161.899057 C73.7516615,164.467892 77.0559456,164.877402 80.6063368,163.081097 C83.4319045,161.651471 86.2564339,161.626921 89.0809633,163.05707 C92.626682,164.852853 95.9553689,164.504978 98.9891418,161.950767 C101.520314,159.820692 104.367171,159.315073 107.504786,160.001419 C111.052063,160.776562 114.031837,159.833228 116.297691,156.954649 C118.415569,154.263587 121.052662,152.837094 124.531921,152.750909 C127.82634,152.669425 130.682022,151.443509 132.101036,148.179969 C133.640508,144.64116 136.181027,142.505338 139.923529,141.604314 C142.935494,140.879315 145.030527,138.934145 145.610489,135.809024 C146.351928,131.814218 148.477595,129.078235 152.057581,127.231264 C154.7305,125.853349 156.190013,123.409351 155.992192,120.380861 C155.731027,116.379787 157.167695,113.322047 160.118393,110.740152 C162.466803,108.68686 163.318834,106.013557 162.401901,102.945893 C161.327645,99.3532835 161.869186,96.1132489 164.091945,93.0774476 C166.07275,90.3712378 166.291858,87.4273666 164.597141,84.5002102 C162.760678,81.3280791 162.518204,78.1507249 163.999525,74.775928 Z M162.93773,92.5274305 C160.545188,95.695905 160.06076,99.1594981 161.10646,102.90254 C161.953818,105.937296 161.050384,108.403755 158.733128,110.375564 C155.970905,112.727109 154.600177,115.609867 154.815132,119.307988 C155.010357,122.665025 153.566939,125.210878 150.536801,126.732435 C147.285996,128.364728 145.320767,130.961247 144.667076,134.539754 C144.045575,137.935965 141.974427,139.869121 138.732969,140.685529 C135.330034,141.543201 132.858051,143.509786 131.444229,146.793174 C130.196037,149.689512 128.019488,151.38344 124.830988,151.429928 C120.624828,151.491041 117.412965,153.280033 114.851678,156.592671 C113.229131,158.691407 110.939393,159.364173 108.333973,158.818334 C104.391054,157.992525 100.804317,158.568136 97.6345104,161.28427 C95.4423847,163.162059 92.8930397,163.368381 90.3379823,162.129406 C86.7419002,160.385857 83.2392761,160.298105 79.6161942,162.079784 C76.8923924,163.41957 74.2013019,163.133853 71.8508157,161.126003 C68.9079053,158.61149 65.5532576,157.988347 61.8834464,158.787516 C58.7489459,159.469162 56.2380225,158.500755 54.3112158,156.006613 C52.098841,153.143704 49.2826192,151.588195 45.6387687,151.546408 C41.9632462,151.504099 39.4492075,149.716152 38.0151358,146.302702 C36.8219799,143.461731 34.621547,141.651323 31.7030398,140.937294 C27.8271003,139.988736 25.5150362,137.768297 24.8442106,133.745807 C24.3208419,130.604493 22.3919584,128.370474 19.6224659,126.988379 C16.1676097,125.263634 14.7184809,122.464972 14.8996869,118.733944 C15.0554513,115.530473 13.9152554,112.909925 11.5201168,110.898942 C8.68053036,108.515534 7.75009718,105.677697 8.7719122,102.068373 C9.67223088,98.8899741 9.2412825,95.8536493 7.18155683,93.1631099 C5.04914108,90.3790729 4.817052,87.4560951 6.56213342,84.4014888 C8.32590653,81.3155428 8.50451648,78.1491576 7.10730907,74.8830064 C5.7630616,71.7411712 6.34198629,68.9848175 8.62757043,66.4656032 C11.029978,63.8168503 12.1182525,60.7826153 11.3524104,57.1032985 C10.7309101,54.1171183 11.7236491,51.5733544 14.3301081,49.8606231 C17.6915056,47.651675 19.4345101,44.6012477 19.6858101,40.5448062 C19.861824,37.7048792 21.3857198,35.6333048 24.1048485,34.6497509 C27.869676,33.28855 30.350485,30.7724698 31.5285836,26.8899653 C32.4320177,23.9147541 34.6018169,22.3164137 37.6163788,21.956526 C41.3147468,21.5141096 44.1034502,19.7413098 46.0198725,16.5357496 C47.5910169,13.90789 49.8579093,12.6208604 52.9576225,12.9321711 C56.9052137,13.3291446 60.2619382,12.1309117 63.0584298,9.24188536 C65.1866919,7.04233926 67.776536,6.43695479 70.6789476,7.480577 C74.1613218,8.73261028 77.4619711,8.46778722 80.6120483,6.44687912 C83.4480001,4.62706942 86.3161437,4.64587344 89.1567686,6.46202685 C92.2128674,8.41607623 95.4423847,8.77491926 98.839608,7.53385502 C101.942956,6.40039145 104.668834,7.06688892 106.92015,9.40798745 C109.587876,12.1826226 112.804932,13.2983269 116.552626,12.9227691 C119.864178,12.5910874 122.225568,13.9528107 123.893287,16.7634869 C125.702231,19.8107802 128.391765,21.4937386 131.891273,21.9037703 C135.251632,22.2976097 137.435451,24.1310001 138.428189,27.3898385 C139.495176,30.8910395 141.78751,33.202365 145.192002,34.4241029 C148.311964,35.5429411 149.949569,37.815614 150.148947,41.0843766 C150.37221,44.752202 152.021755,47.507511 155.018145,49.5529687 C157.291268,51.104299 158.826587,53.1121488 158.322948,57.1988856 C157.183791,60.653599 158.987543,64.2488201 161.903974,67.5583247 C163.545212,69.4209656 163.839607,71.6685665 162.899828,73.9203459 C161.278839,77.8023284 161.374374,81.4738098 163.497444,85.1682747 C164.92892,87.6582376 164.666197,90.2385647 162.93773,92.5274305 Z M34.2251783,81.8071106 C35.2054561,69.441389 39.9479654,58.6646055 47.9199915,49.2505899 C40.6026954,52.6938119 31.3305551,74.9206666 34.2251783,81.8071106 Z M121.738233,49.341058 C129.86187,58.6432943 134.499498,69.4247792 135.592445,81.7429681 C138.044697,73.8181257 128.436105,51.3400281 121.738233,49.341058 Z M82.7474235,134.310031 C70.4648749,133.294615 59.5805724,128.864183 50.2196464,120.714214 C52.5275568,127.577154 76.1487211,137.367771 82.7474235,134.310031 Z M33.7891416,86.4690934 C31.4521552,93.2782322 40.7881589,115.524414 47.4964159,118.72684 C44.5249489,113.687889 40.9688458,108.847947 38.6884538,103.460601 C36.3774281,98.0016937 35.3275755,92.0021716 33.7891416,86.4690934 Z M109.742551,40.4991542 C113.170927,42.3435136 116.270121,44.8073605 119.514176,46.9995939 C113.976229,38.6673309 94.0778359,31.0788706 86.6307364,33.3959418 C90.952681,34.2635376 94.9625784,34.7597544 98.7725772,35.921424 C102.548308,37.0726468 106.263291,38.6276335 109.742551,40.4991542 Z M82.3722394,33.1548849 C76.0035485,31.0765201 55.6144972,38.5949876 49.9000176,46.7783857 C55.1269544,43.739972 59.9883639,40.221534 65.373142,37.9765449 C70.8472248,35.6949924 76.8374081,34.6686072 82.3722394,33.1548849 Z M131.107466,103.384758 C128.815651,108.794042 125.24501,113.6554 122.112068,118.965442 C129.542033,114.381966 138.678658,92.0992212 135.907089,86.5985275 C134.4185,92.0031118 133.401877,97.9676376 131.107466,103.384758 Z M87.1151113,134.791571 C95.1696929,136.747709 117.07641,127.520689 119.626274,121.246942 C114.574313,124.183501 109.651636,127.739547 104.201437,130.016398 C98.7964096,132.274968 92.8591868,133.245464 87.1151113,134.791571 Z"
  }))), /*#__PURE__*/React__default.createElement("g", {
    id: "Group-17",
    transform: "translate(45.730994, 69.000000)",
    fill: "#BABABA"
  }, /*#__PURE__*/React__default.createElement("g", {
    id: "Group-2",
    transform: "translate(39.082610, 8.274540) rotate(-1.000000) translate(-39.082610, -8.274540) translate(0.807756, 0.774540)",
    fillRule: "nonzero"
  }, /*#__PURE__*/React__default.createElement("g", {
    id: "Group-16",
    transform: "translate(0.646937, 0.660223)"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M12.623608,5.9551624 C8.93101534,6.09274902 5.95191855,9.14225591 5.81789599,12.9221219 C5.81247311,13.0672421 5.92635355,13.1881756 6.06851043,13.1881756 L11.3856424,13.1881756 C12.2130186,13.1881756 12.8835188,12.5018284 12.8835188,11.6548973 L12.8835188,6.21209653 C12.8835188,6.06657981 12.7657648,5.95000784 12.623608,5.9551624",
    id: "Fill-110"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M11.3857198,2.32316581e-13 L4.77484413,2.32316581e-13 C2.137776,2.32316581e-13 2.31992531e-13,2.18830172 2.31992531e-13,4.88769618 L2.31992531e-13,11.6548181 C2.31992531e-13,12.5017491 0.670887485,13.1880963 1.49787639,13.1880963 L2.39110188,13.1880963 C2.52667383,13.1880963 2.63629343,13.0762824 2.63706813,12.9379027 C2.76566781,7.35037822 7.18260199,2.82984406 12.6411161,2.69939448 C12.775526,2.69741196 12.8835962,2.58559803 12.8835962,2.44801138 L12.8835962,1.53367477 C12.8835962,0.686743719 12.2130961,2.32316581e-13 11.3857198,2.32316581e-13",
    id: "Fill-111"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M19.3214434,8.35305574 C18.8202145,8.35305574 18.4092378,8.18216282 18.088126,7.85346161 C17.7670141,7.51127924 17.6000669,7.07750462 17.6000669,6.56442936 C17.6000669,5.51250612 18.3321555,4.76271837 19.3214434,4.76271837 C19.8707035,4.76271837 20.3479167,5.00299937 20.6392027,5.39831317 C20.7352652,5.52915925 20.9084099,5.5703956 21.0463059,5.48792289 L21.9441796,4.94986791 C22.0987316,4.85708615 22.1432767,4.64971493 22.0429535,4.49785414 C21.4696778,3.62871891 20.4594731,3.09224995 19.3342259,3.09224995 C18.3708903,3.09224995 17.5613321,3.42134769 16.9059386,4.09183478 C16.2637148,4.76271837 15.942603,5.57792915 15.942603,6.56442936 C15.942603,7.55053307 16.2637148,8.36614036 16.9059386,9.03702395 C17.5613321,9.70751103 18.3708903,10.0362123 19.3342259,10.0362123 C20.458311,10.0362123 21.4565079,9.49102024 22.0565107,8.62148847 C22.1618694,8.4688347 22.116937,8.25591246 21.9581242,8.16313066 L21.0575391,7.63657428 C20.9204177,7.55608414 20.749597,7.59771696 20.653922,7.72658055 C20.362636,8.12070483 19.8830986,8.35305574 19.3214434,8.35305574",
    id: "Fill-112"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M49.217344,3.15200299 C48.2280561,3.15200299 47.4057154,3.48070423 46.7762742,4.15158782 C46.146833,4.80899031 45.8257212,5.63768219 45.8257212,6.62378589 C45.8257212,7.62337072 46.146833,8.45206264 46.7890567,9.1094651 C47.4316678,9.7672641 48.2795735,10.0959653 49.3459437,10.0959653 C50.4866848,10.0959653 51.3744875,9.69073896 51.9996678,8.89138829 C52.081011,8.78750443 52.0519599,8.63286814 51.9392415,8.56625559 L51.0425298,8.03652717 C50.9178036,7.96277757 50.7578287,7.97784467 50.6544067,8.08093552 C50.3394924,8.39575918 49.9068242,8.55713601 49.3715087,8.55713601 C48.3822208,8.55713601 47.7783446,8.1495306 47.5598801,7.32083872 L51.7928238,7.32083872 C52.165453,7.32083872 52.4675847,7.01196264 52.4679721,6.63052648 L52.4679721,6.62378589 C52.4679721,5.63768219 52.1596427,4.82207489 51.542984,4.15158782 C50.9391078,3.48070423 50.1555019,3.15200299 49.217344,3.15200299 Z M47.5343151,6.00563727 C47.7272146,5.16425727 48.3310908,4.67735119 49.217344,4.67735119 C49.9757723,4.67735119 50.617996,5.11152231 50.8108955,6.00563727 L47.5343151,6.00563727 Z",
    id: "Fill-113"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M58.5125444,6.66240535 C58.5125444,7.17032607 58.3514074,7.58903355 58.0291335,7.91892427 C57.7068596,8.24881503 57.3098275,8.41376041 56.8264166,8.41376041 C56.3430058,8.41376041 55.9459737,8.24881503 55.6236998,7.91892427 C55.313821,7.58903355 55.1526841,7.17032607 55.1526841,6.66240535 L55.1526841,3.5732481 C55.1526841,3.42693839 55.0368669,3.3083839 54.8939353,3.3083839 L53.8515807,3.3083839 C53.6865702,3.3083839 53.5533224,3.44517754 53.5533224,3.61369144 L53.5533224,6.66240535 C53.5533224,7.60172167 53.8632011,8.4010723 54.4953538,9.04856221 C55.1278938,9.69565557 55.9087882,10.0132547 56.8264166,10.0132547 C57.7440451,10.0132547 58.5249395,9.69565557 59.1574795,9.04856221 C59.7896322,8.4010723 60.111906,7.60172167 60.111906,6.66240535 L60.111906,3.61369144 C60.111906,3.44517754 59.9782708,3.3083839 59.8136478,3.3083839 L58.8108027,3.3083839 C58.6461796,3.3083839 58.5125444,3.44517754 58.5125444,3.61369144 L58.5125444,6.66240535 Z",
    id: "Fill-114"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M73.4196488,3.59981382 L73.4196488,5.88050081 C72.4745186,6.06487486 71.491041,6.0569448 70.5509463,5.85671064 L70.5509463,3.59981382 C70.5509463,3.43883348 70.4235087,3.3083839 70.2662452,3.3083839 L69.2862537,3.3083839 C69.1289902,3.3083839 69.0015526,3.43883348 69.0015526,3.59981382 L69.0015526,9.53388223 C69.0015526,9.69486257 69.1289902,9.82531217 69.2862537,9.82531217 L70.2662452,9.82531217 C70.4235087,9.82531217 70.5509463,9.69486257 70.5509463,9.53388223 L70.5509463,7.48832169 C71.0424915,7.5743629 71.5413963,7.62273631 72.0445619,7.62273631 C72.5066685,7.62273631 72.9656764,7.5818965 73.4196488,7.50893987 L73.4196488,9.53388223 C73.4196488,9.69486257 73.5470864,9.82531217 73.7043499,9.82531217 L74.6843414,9.82531217 C74.8416049,9.82531217 74.9690425,9.69486257 74.9690425,9.53388223 L74.9690425,3.59981382 C74.9690425,3.43883348 74.8416049,3.3083839 74.6843414,3.3083839 L73.7043499,3.3083839 C73.5470864,3.3083839 73.4196488,3.43883348 73.4196488,3.59981382",
    id: "Fill-115"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M44.8085442,5.09011112 C44.6055736,4.07030466 43.7235812,3.3082253 42.6262231,3.3082253 L39.4290491,3.3082253 C39.2756592,3.3082253 39.1513203,3.43589936 39.1513203,3.59291467 L39.1513203,9.53570616 C39.1513203,9.69311795 39.2756592,9.82039552 39.4290491,9.82039552 L40.4520363,9.82039552 C40.6058137,9.82039552 40.7301525,9.69311795 40.7301525,9.53570616 L40.7301525,8.61383598 L40.7301525,8.11344881 L42.4340983,8.11344881 C43.4950456,8.11344881 44.4638041,7.43225614 44.7853033,6.39698602 C44.9297842,5.93149116 44.9135156,5.49216547 44.8085442,5.09011112 M42.2582421,6.68960543 L40.6941291,6.68960543 L40.6941291,4.66585258 L42.2582421,4.66585258 C42.804016,4.66585258 43.2467553,5.11865936 43.2467553,5.67772903 C43.2467553,6.23679869 42.804016,6.68960543 42.2582421,6.68960543",
    id: "Fill-116"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M26.487738,3.09240855 C25.5367976,3.09240855 24.7276267,3.4345909 24.0722332,4.105078 C23.4170333,4.77556508 23.0959214,5.59117237 23.0959214,6.56419145 C23.0959214,7.53760708 23.4170333,8.36629896 24.0722332,9.03678603 C24.7276267,9.70766962 25.5367976,10.0363709 26.487738,10.0363709 C27.4382911,10.0363709 28.2478493,9.70766962 28.9028555,9.03678603 C29.558249,8.36629896 29.8921434,7.53760708 29.8921434,6.56419145 C29.8921434,5.59117237 29.558249,4.77556508 28.9028555,4.105078 C28.2478493,3.4345909 27.4382911,3.09240855 26.487738,3.09240855 M27.7338379,7.86630829 C27.3999436,8.20849066 26.9885795,8.37898707 26.487738,8.37898707 C25.9865091,8.37898707 25.5755324,8.20849066 25.2416381,7.86630829 C24.9201389,7.52452245 24.7531917,7.09035133 24.7531917,6.56419145 C24.7531917,6.03842808 24.9201389,5.60425696 25.2416381,5.26247112 C25.5755324,4.92068529 25.9865091,4.74939583 26.487738,4.74939583 C26.9885795,4.74939583 27.3999436,4.92068529 27.7338379,5.26247112 C28.0677323,5.60425696 28.2350668,6.03842808 28.2350668,6.56419145 C28.2350668,7.09035133 28.0677323,7.52452245 27.7338379,7.86630829",
    id: "Fill-117"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M34.3148878,3.09240855 C33.3643347,3.09240855 32.5547765,3.4345909 31.8993829,4.105078 C31.2443768,4.77556508 30.9232649,5.59117237 30.9232649,6.56419145 C30.9232649,7.53760708 31.2443768,8.36629896 31.8993829,9.03678603 C32.5547765,9.70766962 33.3643347,10.0363709 34.3148878,10.0363709 C35.2654408,10.0363709 36.0749991,9.70766962 36.7300053,9.03678603 C37.3853988,8.36629896 37.7192932,7.53760708 37.7192932,6.56419145 C37.7192932,5.59117237 37.3853988,4.77556508 36.7300053,4.105078 C36.0749991,3.4345909 35.2654408,3.09240855 34.3148878,3.09240855 M35.5609877,7.86630829 C35.2270933,8.20849066 34.8157293,8.37898707 34.3148878,8.37898707 C33.8136589,8.37898707 33.4026822,8.20849066 33.0687879,7.86630829 C32.747676,7.52452245 32.5803415,7.09035133 32.5803415,6.56419145 C32.5803415,6.03842808 32.747676,5.60425696 33.0687879,5.26247112 C33.4026822,4.92068529 33.8136589,4.74939583 34.3148878,4.74939583 C34.8157293,4.74939583 35.2270933,4.92068529 35.5609877,5.26247112 C35.894882,5.60425696 36.0622166,6.03842808 36.0622166,6.56419145 C36.0622166,7.09035133 35.894882,7.52452245 35.5609877,7.86630829",
    id: "Fill-118"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M64.7321982,8.35555374 C64.2309693,8.35555374 63.8199926,8.18466079 63.4988807,7.85556307 C63.1777689,7.5137772 63.0108217,7.07960612 63.0108217,6.56692733 C63.0108217,5.51500408 63.7429103,4.76521633 64.7321982,4.76521633 C65.2814582,4.76521633 65.7586715,5.00549733 66.0499575,5.40081113 C66.1460199,5.53165721 66.3191647,5.57289357 66.4570607,5.49042086 L67.3549344,4.95236587 C67.5094864,4.85958411 67.5540315,4.6522129 67.4537082,4.50035214 C66.8804326,3.63121689 65.8702278,3.09514442 64.7449807,3.09514442 C63.7812578,3.09514442 62.9720869,3.42384566 62.3166933,4.09433275 C61.6744696,4.76521633 61.3533578,5.58042712 61.3533578,6.56692733 C61.3533578,7.55303103 61.6744696,8.36863833 62.3166933,9.03952191 C62.9720869,9.71000899 63.7812578,10.0387102 64.7449807,10.0387102 C65.8686785,10.0387102 66.8672627,9.4935182 67.4672654,8.62438298 C67.5726242,8.47133267 67.5276918,8.25841043 67.3688789,8.16562863 L66.4682938,7.63867574 C66.3311725,7.5585821 66.1603518,7.59981842 66.0646768,7.72907851 C65.7733907,8.1232028 65.2938534,8.35555374 64.7321982,8.35555374",
    id: "Fill-119"
  }))), /*#__PURE__*/React__default.createElement("text", {
    id: "Pago-seguro",
    fontFamily: "Poppins-Bold, Poppins",
    fontSize: "10",
    fontWeight: "bold"
  }, /*#__PURE__*/React__default.createElement("tspan", {
    x: "25.7019298",
    y: "26.9038301"
  }, "Pago"), /*#__PURE__*/React__default.createElement("tspan", {
    x: "20.7769298",
    y: "41.9038301"
  }, "seguro")))))))))));
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, stampSvg);
};
Stamp.defaultProps = {
  width: '170',
  height: '168'
};
Stamp.prototype = {
  width: propTypes.string,
  height: propTypes.string
};

var styles$f = {"inputLabel":"__search__inputLabel__13ZQ9","inputRow":"__search__inputRow__3Bpsc","crossIcon":"__search__crossIcon__3SFyS","filterIcon":"__search__filterIcon__2WUK6","inputConteiner":"__search__inputConteiner__dxBJC","disabled":"__search__disabled__qZaL1"};

var InputSearch = function InputSearch(_ref) {
  var label = _ref.label,
      filterAction = _ref.filterAction,
      clearAction = _ref.clearAction,
      props = _objectWithoutPropertiesLoose(_ref, ["label", "filterAction", "clearAction"]);

  var inputContainerClases = [styles$f.inputConteiner];

  if (props.disabled) {
    inputContainerClases = inputContainerClases.concat(styles$f.disabled);
  }

  var prefix = /*#__PURE__*/React__default.createElement(Icon, {
    role: "search-icon",
    name: "line-search",
    size: 1
  });
  var suffix = /*#__PURE__*/React__default.createElement(Icon, {
    role: "cross-icon",
    onClick: clearAction,
    className: styles$f.crossIcon,
    name: "cross",
    size: 1
  });
  return /*#__PURE__*/React__default.createElement("div", {
    className: inputContainerClases.join(' ').trim()
  }, label && /*#__PURE__*/React__default.createElement("span", {
    className: styles$f.inputLabel
  }, " ", label, " "), /*#__PURE__*/React__default.createElement("div", {
    className: styles$f.inputRow
  }, /*#__PURE__*/React__default.createElement(InputCore, _extends({}, props, {
    prefix: prefix,
    suffix: suffix
  })), /*#__PURE__*/React__default.createElement(Icon, {
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

var inputStyles$2 = {"input":"__select__input__3SDeG","suffixContainer":"__select__suffixContainer__1RIWf","inputContainer":"__select__inputContainer__3ZeLa","disabled":"__select__disabled__tQrqh","inputLabel":"__select__inputLabel__30ukr","optionRow":"__select__optionRow__3k3jO","optionContainer":"__select__optionContainer__Do9PN","bellowContainer":"__select__bellowContainer__2-1yB","prefixContainer":"__select__prefixContainer__15505","currentElement":"__select__currentElement__1ZRzS","inputHelper":"__select__inputHelper__1F3qg"};

var InputSelect = function InputSelect(_ref) {
  var label = _ref.label,
      assistText = _ref.assistText,
      options = _ref.options,
      current = _ref.current,
      onSelected = _ref.onSelected,
      props = _objectWithoutPropertiesLoose(_ref, ["label", "assistText", "options", "current", "onSelected"]);

  var _useState = React.useState(false),
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
      return /*#__PURE__*/React__default.createElement("div", {
        key: key,
        className: [inputStyles$2.optionRow, isDisabled].join(' ').trim(),
        onClick: action
      }, el.prefix && /*#__PURE__*/React__default.createElement("div", {
        className: inputStyles$2.prefixContainer
      }, " ", /*#__PURE__*/React__default.createElement(Icon, {
        size: 1,
        name: el.prefix
      })), el.text);
    } catch (e) {
      return /*#__PURE__*/React__default.createElement("div", {
        role: "empty",
        className: inputStyles$2.optionRow
      });
    }
  };

  return /*#__PURE__*/React__default.createElement("div", {
    role: "select",
    className: [inputStyles$2.inputContainer, validateStyle].join(' ')
  }, optionOpen, label && /*#__PURE__*/React__default.createElement("span", {
    className: inputStyles$2.inputLabel
  }, " ", label, " "), /*#__PURE__*/React__default.createElement("div", {
    className: inputStyle.join(' ')
  }, /*#__PURE__*/React__default.createElement("div", {
    role: "dropdown",
    className: inputStyles$2.currentElement,
    onClick: handlerOpen
  }, getRow(options.find(function (ob) {
    return ob.value === current;
  }), 'selected')), /*#__PURE__*/React__default.createElement("div", {
    className: inputStyles$2.suffixContainer
  }, " ", /*#__PURE__*/React__default.createElement(Icon, {
    size: 1,
    name: optionOpen ? "arrow-up" : "arrow-down"
  }), " ")), /*#__PURE__*/React__default.createElement("div", {
    className: inputStyles$2.bellowContainer
  }, optionOpen && /*#__PURE__*/React__default.createElement("div", {
    className: inputStyles$2.optionContainer
  }, options.filter(function (el) {
    return el.disabled !== true;
  }).map(getRow)), /*#__PURE__*/React__default.createElement("div", {
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

var styles$g = {"contentAction":"__contentAction__contentAction__4Mea9","disabled":"__contentAction__disabled__1xrCo","label":"__contentAction__label__kPdKj"};

var ContentAction = function ContentAction(_ref) {
  var label = _ref.label,
      icon = _ref.icon,
      disabled = _ref.disabled,
      onClick = _ref.onClick,
      props = _objectWithoutPropertiesLoose(_ref, ["label", "icon", "disabled", "onClick"]);

  var containerClass = [styles$g.contentAction];

  if (disabled) {
    containerClass = [containerClass, styles$g.disabled];
  }

  return /*#__PURE__*/React__default.createElement("div", _extends({}, props, {
    "data-testid": "test-container-content-action",
    onClick: disabled ? null : onClick,
    className: containerClass.join(' ')
  }), /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement(Icon, {
    size: "2",
    name: icon
  })), /*#__PURE__*/React__default.createElement("div", {
    className: styles$g.label
  }, /*#__PURE__*/React__default.createElement("a", null, label)));
};
ContentAction.defaultProps = {
  label: ''
};
ContentAction.propTypes = {
  icon: propTypes.oneOf(IconListModel.iconList).isRequired,
  label: propTypes.string.isRequired,
  disabled: propTypes.bool
};

var inputStyles$3 = {"inputPhoneRow":"__phone__inputPhoneRow__2MggJ","suggestion":"__phone__suggestion__20P1c","area":"__phone__area__qPU0g","code":"__phone__code__1PQvj","countryCode":"__phone__countryCode__20O0A","inputContainer":"__phone__inputContainer__2_-Ka","error":"__phone__error__2lVf0","success":"__phone__success__3UgbK","disabled":"__phone__disabled__1_B0U","inputLabel":"__phone__inputLabel__1yMiS","inputHelper":"__phone__inputHelper__2qVn9","successText":"__phone__successText__Na6os","errorText":"__phone__errorText__2fvcW"};

var countries = [{
  AREA: "Celular",
  CODE: "56"
}, {
  AREA: "Arica",
  CODE: "58"
}, {
  AREA: "Iquique",
  CODE: "57"
}, {
  AREA: "Antofagasta",
  CODE: "55"
}, {
  AREA: "Copiapo",
  CODE: "52"
}, {
  AREA: "La Serena",
  CODE: "51"
}, {
  AREA: "Ovalle",
  CODE: "53"
}, {
  AREA: "Valparaiso",
  CODE: "32"
}, {
  AREA: "Quillota",
  CODE: "33"
}, {
  AREA: "Los Andes",
  CODE: "34"
}, {
  AREA: "San Antonio",
  CODE: "35"
}, {
  AREA: "Santiago",
  CODE: "2"
}, {
  AREA: "Rancagua",
  CODE: "72"
}, {
  AREA: "Talca",
  CODE: "71"
}, {
  AREA: "Linares",
  CODE: "73"
}, {
  AREA: "Curico",
  CODE: "75"
}, {
  AREA: "Concepción",
  CODE: "41"
}, {
  AREA: "Chillan",
  CODE: "42"
}, {
  AREA: "Los Ángeles",
  CODE: "43"
}, {
  AREA: "Temuco",
  CODE: "45"
}, {
  AREA: "Valdivia",
  CODE: "63"
}, {
  AREA: "Puerto Montt",
  CODE: "65"
}, {
  AREA: "Osorno",
  CODE: "64"
}, {
  AREA: "Coyhaique",
  CODE: "67"
}, {
  AREA: "Punta Arenas",
  CODE: "61"
}];

var InputPhone = function InputPhone(_ref) {
  var label = _ref.label,
      assistText = _ref.assistText,
      error = _ref.error,
      success = _ref.success,
      onCodeChange = _ref.onCodeChange,
      code = _ref.code,
      props = _objectWithoutPropertiesLoose(_ref, ["label", "assistText", "error", "success", "onCodeChange", "code"]);

  var _useState = React.useState(false),
      open = _useState[0],
      setOpen = _useState[1];

  var validateStyle = [];

  if (error === true) {
    validateStyle = validateStyle.concat(inputStyles$3.error);
  } else if (success === true) {
    validateStyle = validateStyle.concat(inputStyles$3.success);
  }

  if (props.disabled) {
    validateStyle = validateStyle.concat(inputStyles$3.disabled);
  }

  var handlerOpen = function handlerOpen() {
    if (open || props.disabled) return;
    setOpen(true);

    var globalClick = function globalClick() {
      setOpen(false);
      setTimeout(function () {
        return document.removeEventListener('click', globalClick);
      }, 10);
    };

    document.addEventListener('click', globalClick);
  };

  var getHelperText = function getHelperText(element) {
    switch (element.type) {
      case 'success':
        return /*#__PURE__*/React__default.createElement("div", null, successSvg$1, " ", /*#__PURE__*/React__default.createElement("span", {
          className: inputStyles$3.successText
        }, element.text));

      case 'error':
        return /*#__PURE__*/React__default.createElement("div", null, errorSvg$1, " ", /*#__PURE__*/React__default.createElement("span", {
          className: inputStyles$3.errorText
        }, element.text));

      default:
        return /*#__PURE__*/React__default.createElement("div", null, " ", element.text);
    }
  };

  return /*#__PURE__*/React__default.createElement("div", {
    className: [inputStyles$3.inputContainer, validateStyle].join(' ')
  }, label && /*#__PURE__*/React__default.createElement("span", {
    className: inputStyles$3.inputLabel
  }, " ", label, " "), /*#__PURE__*/React__default.createElement("div", {
    className: inputStyles$3.inputPhoneRow
  }, /*#__PURE__*/React__default.createElement("div", {
    className: inputStyles$3.countryCode,
    onClick: handlerOpen
  }, "+" + code, /*#__PURE__*/React__default.createElement(Icon, {
    name: open ? "arrow-up" : "arrow-down",
    size: 1
  })), /*#__PURE__*/React__default.createElement(InputCore, _extends({}, props, {
    prefix: "",
    suffix: "",
    variant: "text",
    onlyNumber: true
  })), open && /*#__PURE__*/React__default.createElement("div", {
    className: inputStyles$3.suggestion
  }, countries.map(function (el) {
    return /*#__PURE__*/React__default.createElement("div", {
      role: "region",
      key: el.CODE,
      className: inputStyles$3.area,
      onClick: function onClick() {
        return onCodeChange(el.CODE);
      }
    }, /*#__PURE__*/React__default.createElement("div", {
      className: inputStyles$3.code
    }, "+", el.CODE), " ", el.AREA);
  }))), /*#__PURE__*/React__default.createElement("div", {
    className: [inputStyles$3.inputHelper].join(' ')
  }, /*#__PURE__*/React__default.createElement("div", null, Array.isArray(assistText) && assistText.length > 0 ? assistText.map(function (el, i) {
    return /*#__PURE__*/React__default.createElement("div", {
      key: el.text + "-" + i
    }, getHelperText(el));
  }) : assistText)));
};

InputPhone.defaultProps = {
  code: '56'
};
InputPhone.propTypes = {
  label: propTypes.string,
  code: propTypes.number.isRequired,
  value: propTypes.number.isRequired,
  assistText: propTypes.oneOfType([propTypes.arrayOf(propTypes.shape({
    text: propTypes.string,
    type: propTypes.oneOf(['success', 'assist', 'error'])
  })), propTypes.string]),
  error: propTypes.bool,
  success: propTypes.bool,
  disabled: propTypes.bool,
  onChange: propTypes.func.isRequired,
  onCodeChange: propTypes.func.isRequired
};
var errorSvg$1 = /*#__PURE__*/React__default.createElement("svg", {
  width: "10px",
  height: "10px",
  "data-testid": "errorIcon"
}, /*#__PURE__*/React__default.createElement("g", {
  stroke: "none",
  strokeWidth: "1",
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/React__default.createElement("g", {
  transform: "translate(-1186.000000, -1849.000000)",
  fill: "#1F1E1E"
}, /*#__PURE__*/React__default.createElement("g", {
  transform: "translate(1183.000000, 1754.000000)"
}, /*#__PURE__*/React__default.createElement("g", {
  transform: "translate(0.000000, 92.000000)"
}, /*#__PURE__*/React__default.createElement("path", {
  d: "M12.2,3.80666667 C11.94,3.54666667 11.52,3.54666667 11.26,3.80666667 L8,7.06 L4.74,3.8 C4.48,3.54 4.06,3.54 3.8,3.8 C3.54,4.06 3.54,4.48 3.8,4.74 L7.06,8 L3.8,11.26 C3.54,11.52 3.54,11.94 3.8,12.2 C4.06,12.46 4.48,12.46 4.74,12.2 L8,8.94 L11.26,12.2 C11.52,12.46 11.94,12.46 12.2,12.2 C12.46,11.94 12.46,11.52 12.2,11.26 L8.94,8 L12.2,4.74 C12.4533333,4.48666667 12.4533333,4.06 12.2,3.80666667 Z",
  id: "color-icono"
}))))));
var successSvg$1 = /*#__PURE__*/React__default.createElement("svg", {
  width: "12px",
  height: "9px",
  "data-testid": "successIcon"
}, /*#__PURE__*/React__default.createElement("g", {
  stroke: "none",
  strokeWidth: "1",
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/React__default.createElement("g", {
  transform: "translate(-1100.000000, -1816.000000)",
  fill: "#1F1E1E"
}, /*#__PURE__*/React__default.createElement("g", {
  transform: "translate(1098.000000, 1720.000000)"
}, /*#__PURE__*/React__default.createElement("g", {
  transform: "translate(0.000000, 92.000000)"
}, /*#__PURE__*/React__default.createElement("path", {
  d: "M6,10.8 L3.66666667,8.46666667 C3.40666667,8.20666667 2.99333333,8.20666667 2.73333333,8.46666667 C2.47333333,8.72666667 2.47333333,9.14 2.73333333,9.4 L5.52666667,12.1933333 C5.78666667,12.4533333 6.20666667,12.4533333 6.46666667,12.1933333 L13.5333333,5.13333333 C13.7933333,4.87333333 13.7933333,4.46 13.5333333,4.2 C13.2733333,3.94 12.86,3.94 12.6,4.2 L6,10.8 Z",
  id: "color-icono"
}))))));

exports.Bullets = Bullets;
exports.Button = Button;
exports.Card = Card;
exports.Checkbox = Checkbox;
exports.ContentAction = ContentAction;
exports.Grid = Grid;
exports.Header = Header;
exports.HeaderItem = HeaderItem;
exports.HeaderProfileItem = HeaderProfileItem;
exports.Icon = Icon;
exports.Input = Input;
exports.InputChip = InputChip;
exports.InputPhone = InputPhone;
exports.InputRange = InputRange;
exports.InputSearch = InputSearch;
exports.InputSelect = InputSelect;
exports.Loading = Loading;
exports.Logo = Logo;
exports.Message = Message;
exports.ProgressBar = ProgressBar;
exports.Radio = Radio;
exports.Separator = Separator;
exports.Sidebar = Sidebar;
exports.SidebarElement = SidebarElement;
exports.Stamp = Stamp;
exports.Switch = Switch;
exports.TitleSection = TitleSection;
exports.Tooltip = Tooltip;
//# sourceMappingURL=index.js.map
