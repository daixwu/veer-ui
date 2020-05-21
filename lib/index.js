(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["veer"] = factory();
	else
		root["veer"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 81);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(31)('wks');
var uid = __webpack_require__(32);
var Symbol = __webpack_require__(2).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(8)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(0);
var ctx = __webpack_require__(25);
var hide = __webpack_require__(5);
var has = __webpack_require__(9);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(6);
var createDesc = __webpack_require__(19);
module.exports = __webpack_require__(3) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(7);
var IE8_DOM_DEFINE = __webpack_require__(43);
var toPrimitive = __webpack_require__(44);
var dP = Object.defineProperty;

exports.f = __webpack_require__(3) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(18);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(17);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(66), __esModule: true };

/***/ }),
/* 16 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(49);
var enumBugKeys = __webpack_require__(33);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(31)('keys');
var uid = __webpack_require__(32);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(77), __esModule: true };

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(42);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(18);
var document = __webpack_require__(2).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(28);
var defined = __webpack_require__(17);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(29);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(16);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(0);
var global = __webpack_require__(2);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(24) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 32 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 33 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(6).f;
var has = __webpack_require__(9);
var TAG = __webpack_require__(1)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(37);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(38), __esModule: true };

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(39);
__webpack_require__(54);
module.exports = __webpack_require__(0).Array.from;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(40)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(41)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(16);
var defined = __webpack_require__(17);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(24);
var $export = __webpack_require__(4);
var redefine = __webpack_require__(45);
var hide = __webpack_require__(5);
var Iterators = __webpack_require__(20);
var $iterCreate = __webpack_require__(46);
var setToStringTag = __webpack_require__(34);
var getPrototypeOf = __webpack_require__(53);
var ITERATOR = __webpack_require__(1)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(3) && !__webpack_require__(8)(function () {
  return Object.defineProperty(__webpack_require__(26)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(18);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(47);
var descriptor = __webpack_require__(19);
var setToStringTag = __webpack_require__(34);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(5)(IteratorPrototype, __webpack_require__(1)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(7);
var dPs = __webpack_require__(48);
var enumBugKeys = __webpack_require__(33);
var IE_PROTO = __webpack_require__(22)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(26)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(52).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(6);
var anObject = __webpack_require__(7);
var getKeys = __webpack_require__(21);

module.exports = __webpack_require__(3) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(9);
var toIObject = __webpack_require__(27);
var arrayIndexOf = __webpack_require__(50)(false);
var IE_PROTO = __webpack_require__(22)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(27);
var toLength = __webpack_require__(30);
var toAbsoluteIndex = __webpack_require__(51);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(16);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(2).document;
module.exports = document && document.documentElement;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(9);
var toObject = __webpack_require__(10);
var IE_PROTO = __webpack_require__(22)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(25);
var $export = __webpack_require__(4);
var toObject = __webpack_require__(10);
var call = __webpack_require__(55);
var isArrayIter = __webpack_require__(56);
var toLength = __webpack_require__(30);
var createProperty = __webpack_require__(57);
var getIterFn = __webpack_require__(58);

$export($export.S + $export.F * !__webpack_require__(60)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(7);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(20);
var ITERATOR = __webpack_require__(1)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(6);
var createDesc = __webpack_require__(19);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(59);
var ITERATOR = __webpack_require__(1)('iterator');
var Iterators = __webpack_require__(20);
module.exports = __webpack_require__(0).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(29);
var TAG = __webpack_require__(1)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(1)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(67);
module.exports = __webpack_require__(0).Object.assign;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(4);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(68) });


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(3);
var getKeys = __webpack_require__(21);
var gOPS = __webpack_require__(69);
var pIE = __webpack_require__(70);
var toObject = __webpack_require__(10);
var IObject = __webpack_require__(28);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(8)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),
/* 69 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 70 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_video_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_video_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_video_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_video_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_btn_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_btn_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_btn_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_btn_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_file_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_file_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_file_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_file_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(78);
module.exports = __webpack_require__(0).Object.keys;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(10);
var $keys = __webpack_require__(21);

__webpack_require__(79)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(4);
var core = __webpack_require__(0);
var fails = __webpack_require__(8);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_upload_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_upload_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_upload_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_ref_9_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_2_node_modules_sass_loader_dist_cjs_js_ref_9_3_node_modules_vue_loader_lib_index_js_vue_loader_options_upload_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./packages/common/style/index.scss
var style = __webpack_require__(36);

// CONCATENATED MODULE: ./packages/components/Style/index.js


/* harmony default export */ var Style = ({
  install: function install() {}
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/icon/icon.vue?vue&type=template&id=168d4387&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('i',{class:'veer-icon-' + _vm.name})}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/icon/icon.vue?vue&type=template&id=168d4387&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/icon/icon.vue?vue&type=script&lang=js&
//
//
//
//

/* harmony default export */ var iconvue_type_script_lang_js_ = ({
  name: 'veer-icon',
  props: {
    name: String
  }
});
// CONCATENATED MODULE: ./packages/components/icon/icon.vue?vue&type=script&lang=js&
 /* harmony default export */ var icon_iconvue_type_script_lang_js_ = (iconvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/components/icon/icon.vue





/* normalize component */

var component = normalizeComponent(
  icon_iconvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var icon = (component.exports);
// CONCATENATED MODULE: ./packages/components/icon/index.js


icon.install = function (Vue) {
  Vue.component(icon.name, icon);
};

/* harmony default export */ var components_icon = (icon);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/flex/flex.vue?vue&type=template&id=0a712262&
var flexvue_type_template_id_0a712262_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"veer-flex",style:(_vm.styles)},[_vm._t("default")],2)}
var flexvue_type_template_id_0a712262_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/flex/flex.vue?vue&type=template&id=0a712262&

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(35);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/flex/flex.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//

/* harmony default export */ var flexvue_type_script_lang_js_ = ({
  name: 'veer-flex',
  props: {
    gutter: {
      type: [String, Number],
      default: ''
    },
    direction: String,
    wrap: String,
    justify: String,
    alignItems: String,
    alignContent: String
  },
  computed: {
    styles: function styles() {
      var styles = {
        'flex-direction': this.direction,
        'flex-wrap': this.wrap,
        'justify-content': this.justify,
        'align-items': this.alignItems,
        'align-content': this.alignContent,
        'margin-left': -this.gutter + 'px',
        'margin-right': -this.gutter + 'px'
      };
      return styles;
    }
  },
  methods: {
    initItem: function initItem(slot) {
      for (var i = 0; i < slot.length; i++) {
        var tag = slot[i].tag;
        if (typeof tag === 'string') {
          if (tag.indexOf('veer-flex-item') !== -1) {
            var slotElm = slot[i].elm;
            slotElm.style.paddingLeft = this.gutter + 'px';
            slotElm.style.paddingRight = this.gutter + 'px';
          }
        }
      }
    }
  },
  mounted: function mounted() {
    var slot = [].concat(toConsumableArray_default()(this.$slots.default));
    this.initItem(slot);
  }
});
// CONCATENATED MODULE: ./packages/components/flex/flex.vue?vue&type=script&lang=js&
 /* harmony default export */ var flex_flexvue_type_script_lang_js_ = (flexvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/components/flex/flex.vue





/* normalize component */

var flex_component = normalizeComponent(
  flex_flexvue_type_script_lang_js_,
  flexvue_type_template_id_0a712262_render,
  flexvue_type_template_id_0a712262_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var flex = (flex_component.exports);
// EXTERNAL MODULE: ./packages/components/flex/flex.scss
var flex_flex = __webpack_require__(61);

// CONCATENATED MODULE: ./packages/components/flex/index.js



flex.install = function (Vue) {
  Vue.component(flex.name, flex);
};

/* harmony default export */ var components_flex = (flex);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/flex-item/flex-item.vue?vue&type=template&id=6beda70e&
var flex_itemvue_type_template_id_6beda70e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"veer-flex-item",style:(_vm.styles)},[_vm._t("default")],2)}
var flex_itemvue_type_template_id_6beda70e_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/flex-item/flex-item.vue?vue&type=template&id=6beda70e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/flex-item/flex-item.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var flex_itemvue_type_script_lang_js_ = ({
  name: 'veer-flex-item',
  props: {
    span: {
      type: [String, Number],
      default: '24'
    },
    offset: [String, Number],
    grow: Number,
    shrink: Number,
    self: String
  },
  methods: {
    buildSize: function buildSize(value) {
      return 100 / 24 * value;
    }
  },
  computed: {
    styles: function styles() {
      var styles = {
        'flex-grow': this.grow,
        'flex-shrink': this.shrink,
        'flex-basis': this.buildSize(this.span) + '%',
        'align-self': this.self,
        'margin-left': this.buildSize(this.offset) + '%'
      };
      return styles;
    }
  }
});
// CONCATENATED MODULE: ./packages/components/flex-item/flex-item.vue?vue&type=script&lang=js&
 /* harmony default export */ var flex_item_flex_itemvue_type_script_lang_js_ = (flex_itemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/components/flex-item/flex-item.vue





/* normalize component */

var flex_item_component = normalizeComponent(
  flex_item_flex_itemvue_type_script_lang_js_,
  flex_itemvue_type_template_id_6beda70e_render,
  flex_itemvue_type_template_id_6beda70e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var flex_item = (flex_item_component.exports);
// EXTERNAL MODULE: ./packages/components/flex-item/flex-item.scss
var flex_item_flex_item = __webpack_require__(62);

// CONCATENATED MODULE: ./packages/components/flex-item/index.js



flex_item.install = function (Vue) {
  Vue.component(flex_item.name, flex_item);
};

/* harmony default export */ var components_flex_item = (flex_item);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/button/button.vue?vue&type=template&id=9175a7fa&
var buttonvue_type_template_id_9175a7fa_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"button"},[_vm._v("\n  button组件\n")])}
var buttonvue_type_template_id_9175a7fa_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/button/button.vue?vue&type=template&id=9175a7fa&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/button/button.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var buttonvue_type_script_lang_js_ = ({
  name: 'veer-button'
});
// CONCATENATED MODULE: ./packages/components/button/button.vue?vue&type=script&lang=js&
 /* harmony default export */ var button_buttonvue_type_script_lang_js_ = (buttonvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/components/button/button.vue





/* normalize component */

var button_component = normalizeComponent(
  button_buttonvue_type_script_lang_js_,
  buttonvue_type_template_id_9175a7fa_render,
  buttonvue_type_template_id_9175a7fa_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var button_button = (button_component.exports);
// EXTERNAL MODULE: ./packages/components/button/button.scss
var components_button_button = __webpack_require__(63);

// CONCATENATED MODULE: ./packages/components/button/index.js



button_button.install = function (Vue) {
  Vue.component(button_button.name, button_button);
};

/* harmony default export */ var components_button = (button_button);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/radio/radio.vue?vue&type=template&id=ae3e08c2&
var radiovue_type_template_id_ae3e08c2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"veer-radio",class:_vm._containerClass},[_c('label',{staticClass:"veer-radio-wrap",style:(_vm._activeStyle)},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.radioValue),expression:"radioValue"}],staticClass:"veer-radio-input",attrs:{"type":"radio","disabled":_vm.option.disabled},domProps:{"value":_vm.computedOption.value,"checked":_vm._q(_vm.radioValue,_vm.computedOption.value)},on:{"change":function($event){_vm.radioValue=_vm.computedOption.value}}}),_vm._v(" "),_c('span',{directives:[{name:"show",rawName:"v-show",value:(!_vm.buttonStyle),expression:"!buttonStyle"}],staticClass:"veer-radio-ui"},[_c('i')]),_vm._v(" "),_vm._t("default",[_c('span',{staticClass:"veer-radio-label"},[_vm._v(_vm._s(_vm.computedOption.label))])])],2)])}
var radiovue_type_template_id_ae3e08c2_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/radio/radio.vue?vue&type=template&id=ae3e08c2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/radio/radio.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var EVENT_INPUT = 'input';

/* harmony default export */ var radiovue_type_script_lang_js_ = ({
  name: 'veer-radio',
  props: {
    value: [String, Number],
    option: {
      type: [String, Object],
      required: true
    },
    buttonStyle: {
      type: Boolean,
      default: false
    },
    hollowStyle: {
      type: Boolean,
      default: false
    },
    fill: String,
    textColor: String
  },
  data: function data() {
    return {
      radioValue: this.value
    };
  },

  watch: {
    value: function value(newV) {
      this.radioValue = newV;
    },
    radioValue: function radioValue(newV) {
      if (typeof this.value === 'number') {
        newV = Number(newV);
      }
      this.$emit(EVENT_INPUT, newV);
    }
  },
  computed: {
    computedOption: function computedOption() {
      var option = this.option;
      if (typeof option === 'string') {
        return {
          value: option,
          label: option
        };
      }
      return option;
    },
    _containerClass: function _containerClass() {
      var option = this.computedOption;
      return {
        'veer-radio-button': this.buttonStyle,
        'veer-radio-hollow': this.hollowStyle,
        'veer-radio_selected': this.radioValue === option.value,
        'veer-radio_disabled': option.disabled,
        'border-right-1px': this.$parent.horizontal
      };
    },
    _activeStyle: function _activeStyle() {
      var option = this.computedOption;
      if (this.radioValue === option.value) {
        return {
          backgroundColor: this.fill || '',
          color: this.textColor || ''
        };
      } else {
        return '';
      }
    }
  }
});
// CONCATENATED MODULE: ./packages/components/radio/radio.vue?vue&type=script&lang=js&
 /* harmony default export */ var radio_radiovue_type_script_lang_js_ = (radiovue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/components/radio/radio.vue





/* normalize component */

var radio_component = normalizeComponent(
  radio_radiovue_type_script_lang_js_,
  radiovue_type_template_id_ae3e08c2_render,
  radiovue_type_template_id_ae3e08c2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var radio_radio = (radio_component.exports);
// EXTERNAL MODULE: ./packages/components/radio/radio.scss
var components_radio_radio = __webpack_require__(64);

// CONCATENATED MODULE: ./packages/components/radio/index.js



radio_radio.install = function (Vue) {
  Vue.component(radio_radio.name, radio_radio);
};

/* harmony default export */ var components_radio = (radio_radio);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/radio-group/radio-group.vue?vue&type=template&id=b6fe7736&
var radio_groupvue_type_template_id_b6fe7736_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"group",staticClass:"veer-radio-group",class:_vm._groupClass,attrs:{"data-horz":_vm.horizontal}},[_vm._t("default",_vm._l((_vm.options),function(option,index){return _c('veer-radio',{key:index,attrs:{"option":option,"button-style":_vm.buttonStyle,"hollow-style":_vm.hollowStyle,"fill":_vm.fill},model:{value:(_vm.radioValue),callback:function ($$v) {_vm.radioValue=$$v},expression:"radioValue"}})}))],2)}
var radio_groupvue_type_template_id_b6fe7736_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/radio-group/radio-group.vue?vue&type=template&id=b6fe7736&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/radio-group/radio-group.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var radio_groupvue_type_script_lang_js_EVENT_INPUT = 'input';

/* harmony default export */ var radio_groupvue_type_script_lang_js_ = ({
  name: 'veer-radio-group',
  props: {
    value: [String, Number],
    options: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    buttonStyle: {
      type: Boolean,
      default: false
    },
    horizontal: {
      type: Boolean,
      default: false
    },
    hollowStyle: {
      type: Boolean,
      default: false
    },
    fill: String,
    textColor: String
  },
  data: function data() {
    return {
      radioValue: this.value
    };
  },

  watch: {
    value: function value(newV) {
      this.radioValue = newV;
    },
    radioValue: function radioValue(newV) {
      this.$emit(radio_groupvue_type_script_lang_js_EVENT_INPUT, newV);
    }
  },
  computed: {
    _groupClass: function _groupClass() {
      if (!this.horizontal) {
        return 'border-top-1px border-bottom-1px';
      } else {
        return '';
      }
    }
  },
  components: {
    veerRadio: radio_radio
  }
});
// CONCATENATED MODULE: ./packages/components/radio-group/radio-group.vue?vue&type=script&lang=js&
 /* harmony default export */ var radio_group_radio_groupvue_type_script_lang_js_ = (radio_groupvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/components/radio-group/radio-group.vue





/* normalize component */

var radio_group_component = normalizeComponent(
  radio_group_radio_groupvue_type_script_lang_js_,
  radio_groupvue_type_template_id_b6fe7736_render,
  radio_groupvue_type_template_id_b6fe7736_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var radio_group = (radio_group_component.exports);
// EXTERNAL MODULE: ./packages/components/radio-group/radio-group.scss
var radio_group_radio_group = __webpack_require__(65);

// CONCATENATED MODULE: ./packages/components/radio-group/index.js



radio_group.install = function (Vue) {
  Vue.component(radio_group.name, radio_group);
};

/* harmony default export */ var components_radio_group = (radio_group);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/input/input.vue?vue&type=template&id=38a22eca&
var inputvue_type_template_id_38a22eca_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"veer-input",class:{'veer-input_active': _vm.isFocus}},[(_vm.$slots.prepend)?_c('div',{staticClass:"veer-input-prepend"},[_vm._t("prepend")],2):_vm._e(),_vm._v(" "),((_vm._type)==='checkbox')?_c('input',_vm._b({directives:[{name:"model",rawName:"v-model",value:(_vm.inputValue),expression:"inputValue"}],ref:"input",staticClass:"veer-input-field",attrs:{"disabled":_vm.disabled,"readonly":_vm.readonly,"autocomplete":_vm.autocomplete,"autofocus":_vm.autofocus,"type":"checkbox"},domProps:{"checked":Array.isArray(_vm.inputValue)?_vm._i(_vm.inputValue,null)>-1:(_vm.inputValue)},on:{"focus":_vm.handleFocus,"blur":_vm.handleBlur,"change":function($event){var $$a=_vm.inputValue,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.inputValue=$$a.concat([$$v]))}else{$$i>-1&&(_vm.inputValue=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.inputValue=$$c}}}},'input',_vm.$props,false)):((_vm._type)==='radio')?_c('input',_vm._b({directives:[{name:"model",rawName:"v-model",value:(_vm.inputValue),expression:"inputValue"}],ref:"input",staticClass:"veer-input-field",attrs:{"disabled":_vm.disabled,"readonly":_vm.readonly,"autocomplete":_vm.autocomplete,"autofocus":_vm.autofocus,"type":"radio"},domProps:{"checked":_vm._q(_vm.inputValue,null)},on:{"focus":_vm.handleFocus,"blur":_vm.handleBlur,"change":function($event){_vm.inputValue=null}}},'input',_vm.$props,false)):_c('input',_vm._b({directives:[{name:"model",rawName:"v-model",value:(_vm.inputValue),expression:"inputValue"}],ref:"input",staticClass:"veer-input-field",attrs:{"disabled":_vm.disabled,"readonly":_vm.readonly,"autocomplete":_vm.autocomplete,"autofocus":_vm.autofocus,"type":_vm._type},domProps:{"value":(_vm.inputValue)},on:{"focus":_vm.handleFocus,"blur":_vm.handleBlur,"input":function($event){if($event.target.composing){ return; }_vm.inputValue=$event.target.value}}},'input',_vm.$props,false)),_vm._v(" "),(_vm.$slots.append  || _vm._showClear)?_c('div',{staticClass:"veer-input-append"},[(_vm._showClear)?_c('div',{staticClass:"veer-input-clear",on:{"touchend":_vm.handleClear}},[_c('i',{staticClass:"veer-icon-close"})]):_vm._e(),_vm._v(" "),_vm._t("append")],2):_vm._e()])}
var inputvue_type_template_id_38a22eca_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/input/input.vue?vue&type=template&id=38a22eca&

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/assign.js
var object_assign = __webpack_require__(15);
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// CONCATENATED MODULE: ./packages/common/mixins/input.js
var EVENT_CHANGE = 'change';

/* harmony default export */ var input = ({
  methods: {
    changeHander: function changeHander(e) {
      this.$emit(EVENT_CHANGE, e);
    },
    focus: function focus() {
      this.$refs.input.focus();
    },
    blur: function blur() {
      this.$refs.input.blur();
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/input/input.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var inputvue_type_script_lang_js_EVENT_INPUT = 'input';
var EVENT_BLUR = 'blur';
var EVENT_FOCUS = 'focus';

/* harmony default export */ var inputvue_type_script_lang_js_ = ({
  name: 'veer-input',
  mixins: [input],
  props: {
    value: [String, Number],
    type: {
      type: String,
      default: 'text'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: String,
    readonly: {
      type: Boolean,
      default: false
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    autocomplete: {
      type: [Boolean, String],
      default: false
    },
    name: String,
    id: String,
    form: String,
    minlength: Number,
    maxlength: Number,
    resize: String,
    min: Number,
    max: Number,
    step: Number,
    tabindex: String,
    clearable: {
      type: [Boolean, Object],
      default: false
    }
  },
  data: function data() {
    return {
      inputValue: this.value,
      isFocus: false,
      formatedClearable: {
        visible: false,
        blurHidden: true
      }
    };
  },

  computed: {
    _type: function _type() {
      var type = this.type;
      if (type === 'password') {
        return 'text';
      }
      return type;
    },
    _showClear: function _showClear() {
      var visible = this.formatedClearable.visible && this.inputValue && !this.readonly && !this.disabled;
      if (this.formatedClearable.blurHidden && !this.isFocus) {
        visible = false;
      }
      return visible;
    }
  },
  watch: {
    value: function value(newValue) {
      this.inputValue = newValue;
    },
    inputValue: function inputValue(newValue) {
      this.$emit(inputvue_type_script_lang_js_EVENT_INPUT, newValue);
    },

    clearable: {
      handler: function handler() {
        this.formatClearable();
      },

      deep: true,
      immediate: true
    }
  },
  methods: {
    formatClearable: function formatClearable() {
      if (typeof this.clearable === 'boolean') {
        this.formatedClearable.visible = this.clearable;
      } else {
        assign_default()(this.formatedClearable, this.clearable);
      }
    },
    handleFocus: function handleFocus(e) {
      this.$emit(EVENT_FOCUS, e);
      this.isFocus = true;
    },
    handleBlur: function handleBlur(e) {
      this.$emit(EVENT_BLUR, e);
      this.isFocus = false;
    },
    handleClear: function handleClear(e) {
      this.inputValue = '';
      this.$refs.input.focus();
    }
  }
});
// CONCATENATED MODULE: ./packages/components/input/input.vue?vue&type=script&lang=js&
 /* harmony default export */ var input_inputvue_type_script_lang_js_ = (inputvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/components/input/input.vue





/* normalize component */

var input_component = normalizeComponent(
  input_inputvue_type_script_lang_js_,
  inputvue_type_template_id_38a22eca_render,
  inputvue_type_template_id_38a22eca_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var input_input = (input_component.exports);
// EXTERNAL MODULE: ./packages/components/input/input.scss
var components_input_input = __webpack_require__(71);

// CONCATENATED MODULE: ./packages/components/input/index.js



input_input.install = function (Vue) {
  Vue.component(input_input.name, input_input);
};

/* harmony default export */ var components_input = (input_input);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/switch/switch.vue?vue&type=template&id=600d2280&
var switchvue_type_template_id_600d2280_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"veer-switch"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.checkboxValue),expression:"checkboxValue"}],staticClass:"veer-switch-input",attrs:{"type":"checkbox","disabled":_vm.disabled},domProps:{"checked":Array.isArray(_vm.checkboxValue)?_vm._i(_vm.checkboxValue,null)>-1:(_vm.checkboxValue)},on:{"change":function($event){var $$a=_vm.checkboxValue,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.checkboxValue=$$a.concat([$$v]))}else{$$i>-1&&(_vm.checkboxValue=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.checkboxValue=$$c}}}}),_vm._v(" "),_c('i',{staticClass:"veer-switch-ui"}),_vm._v(" "),_c('span',{staticClass:"veer-switch-label"},[_vm._t("default")],2)])}
var switchvue_type_template_id_600d2280_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/switch/switch.vue?vue&type=template&id=600d2280&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/switch/switch.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//

/* harmony default export */ var switchvue_type_script_lang_js_ = ({
  name: 'veer-switch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      checkboxValue: this.value
    };
  },

  watch: {
    value: function value(newVal) {
      this.checkboxValue = newVal;
    },
    checkboxValue: function checkboxValue(newVal) {
      this.$emit('input', newVal);
    }
  }
});
// CONCATENATED MODULE: ./packages/components/switch/switch.vue?vue&type=script&lang=js&
 /* harmony default export */ var switch_switchvue_type_script_lang_js_ = (switchvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/components/switch/switch.vue





/* normalize component */

var switch_component = normalizeComponent(
  switch_switchvue_type_script_lang_js_,
  switchvue_type_template_id_600d2280_render,
  switchvue_type_template_id_600d2280_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var switch_switch = (switch_component.exports);
// EXTERNAL MODULE: ./packages/components/switch/switch.scss
var components_switch_switch = __webpack_require__(72);

// CONCATENATED MODULE: ./packages/components/switch/index.js



switch_switch.install = function (Vue) {
  Vue.component(switch_switch.name, switch_switch);
};

/* harmony default export */ var components_switch = (switch_switch);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/video/video.vue?vue&type=template&id=031bfd96&
var videovue_type_template_id_031bfd96_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"veer-video"},[_c('transition',{attrs:{"name":"fade"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isStart),expression:"!isStart"}],staticClass:"veer-video-poster",style:({backgroundImage:("url(" + (_vm.options.cover) + ")")})})]),_vm._v(" "),_c('video',{directives:[{name:"show",rawName:"v-show",value:(_vm.isStart),expression:"isStart"}],ref:"video",staticClass:"veer-video-player",style:({objectFit:("" + (_vm.options.objectFit))}),attrs:{"x-webkit-airplay":"allow","controls":_vm.options.controls,"loop":_vm.options.loop,"poster":_vm.options.cover}},_vm._l((_vm.vUrl),function(item,index){return _c('source',{key:index,attrs:{"src":item,"type":("video/" + (_vm.getUrlType(item)))}})}),0),_vm._v(" "),_vm._t("knob",[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.options.disabled),expression:"options.disabled"}],staticClass:"playing-mask",on:{"click":_vm.play}}),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isPlaying),expression:"!isPlaying"}],staticClass:"veer-play-btn",on:{"click":_vm.play}},[_c('i',{staticClass:"veer-icon-play"})])]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isError),expression:"isError"}],staticClass:"veer-video-error"},[_c('p',{staticClass:"lose"},[_vm._v("视频加载失败")]),_vm._v(" "),_c('p',{staticClass:"retry",on:{"click":_vm.retry}},[_vm._v("点击重试")])])],2)}
var videovue_type_template_id_031bfd96_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/video/video.vue?vue&type=template&id=031bfd96&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/video/video.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var videovue_type_script_lang_js_ = ({
  name: 'veer-video',
  props: {
    video: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      baseVideo: {
        url: '',
        cover: '',
        poster: '',
        autoplay: false,
        loop: false,
        controls: false,
        muted: false,
        disabled: true,
        playsInline: false,
        objectFit: 'cover'
      },
      $video: null,
      currentTime: 0,
      isStart: false,
      isPlaying: false,
      isError: false
    };
  },

  watch: {
    vUrl: {
      handler: function handler(newValue, oldValue) {
        var _this2 = this;

        if (newValue && oldValue && newValue !== oldValue) {
          this.$nextTick(function () {
            _this2.$video.load();
            _this2.isPlaying = false;
            _this2.isStart = false;
          });
        }
      },

      immediate: true
    }
  },
  computed: {
    vUrl: function vUrl() {
      var url = this.options.url || [];
      if (typeof url === 'string') {
        url = [url];
      } else if (Object.prototype.toString.call(url) === '[object Object]') {
        console.warn(new Error('视频URL只接受String或者Array'));
        return [];
      }
      return url;
    },
    options: function options() {
      return assign_default()({}, this.baseVideo, this.video);
    }
  },
  mounted: function mounted() {
    this.init();
  },

  methods: {
    getUrlType: function getUrlType(url) {
      return url.match(/[^\\.]+$/);
    },
    init: function init() {
      var _this3 = this;

      this.$video = this.$refs.video;

      if (this.options.autoplay) {
        this.play();
      }

      if (this.options.playsInline) {
        this._playInline();
      }

      this.$video.addEventListener('canplay', function () {
        _this3.width = _this3.$video.videoWidth;
        _this3.height = _this3.$video.videoHeight;
      });
      this.$video.addEventListener('play', function () {
        _this3.$emit('play', _this3.$video);
      });
      this.$video.addEventListener('pause', function () {
        _this3.$emit('pause', _this3.$video);
      });
    },
    play: function play() {
      this.isPlaying = !this.isPlaying;
      this._togglePlay();
    },
    retry: function retry() {
      this.isError = false;
      this.init();
    },
    getPlayTime: function getPlayTime() {
      var currentTime = this.$video.currentTime;
      var duration = this.$video.duration;
      var percent = currentTime / duration;
      return { currentTime: currentTime, duration: duration, percent: percent };
    },
    getLoadTime: function getLoadTime() {
      var buffered = this.$video.buffered.end(0);
      var duration = this.$video.duration;
      var loaded = buffered / duration;
      return { buffered: buffered, duration: duration, loaded: loaded };
    },
    _playInline: function _playInline() {
      this.$video.setAttribute('playsinline', this.options.playsinline);
      this.$video.setAttribute('webkit-playsinline', this.options.playsinline);
      this.$video.setAttribute('x5-playsinline', this.options.playsinline);
      this.$video.setAttribute('x5-video-player-type', 'h5');
      this.$video.setAttribute('x5-video-player-fullscreen', false);
    },
    _togglePlay: function _togglePlay() {
      if (this.$video) {
        if (this.isPlaying) {
          try {
            this.$video.play();
            if (!this.isStart) {
              this._isStartFn();
            }
            this.$video.addEventListener('ended', this._playEndFn);
          } catch (e) {
            this._handleError();
          }
        } else {
          this.$video.pause();
        }
      }
    },
    _isStartFn: function _isStartFn() {
      var _this = this;
      this.$video.addEventListener('timeupdate', function () {
        _this.currentTime = _this.$video.currentTime;
        if (_this.currentTime > 0.1) {
          _this.isStart = true;
        }
      });
    },
    _playEndFn: function _playEndFn() {
      this.$video.currentTime = 0;
      this.isStart = false;
      this.isPlaying = false;
      this.$emit('playEnd', this.videoElm);
    },
    _handleError: function _handleError() {
      this.isError = true;
    }
  },
  updated: function updated() {},
  beforeDestroy: function beforeDestroy() {},
  destroyed: function destroyed() {}
});
// CONCATENATED MODULE: ./packages/components/video/video.vue?vue&type=script&lang=js&
 /* harmony default export */ var video_videovue_type_script_lang_js_ = (videovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/components/video/video.vue?vue&type=style&index=0&lang=scss&
var videovue_type_style_index_0_lang_scss_ = __webpack_require__(73);

// CONCATENATED MODULE: ./packages/components/video/video.vue






/* normalize component */

var video_component = normalizeComponent(
  video_videovue_type_script_lang_js_,
  videovue_type_template_id_031bfd96_render,
  videovue_type_template_id_031bfd96_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var video = (video_component.exports);
// EXTERNAL MODULE: ./packages/components/video/video.scss
var video_video = __webpack_require__(74);

// CONCATENATED MODULE: ./packages/components/video/index.js



video.install = function (Vue) {
  Vue.component(video.name, video);
};

/* harmony default export */ var components_video = (video);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/upload/upload.vue?vue&type=template&id=2017115c&
var uploadvue_type_template_id_2017115c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"veer-upload"},[_vm._t("default",[_c('div',{staticClass:"veer-upload-def clear-fix"},[_vm._l((_vm.files),function(file,i){return _c('upload-file',{key:i,attrs:{"file":file},on:{"click":_vm.fileClick}})}),_vm._v(" "),_c('upload-btn',{directives:[{name:"show",rawName:"v-show",value:(_vm.isShowBtn),expression:"isShowBtn"}],attrs:{"multiple":_vm.multiple,"accept":_vm.accept}})],2)])],2)}
var uploadvue_type_template_id_2017115c_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/upload/upload.vue?vue&type=template&id=2017115c&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/upload/btn.vue?vue&type=template&id=38731f7e&
var btnvue_type_template_id_38731f7e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"veer-upload-btn"},[_vm._t("default",[_vm._m(0)]),_vm._v(" "),_c('input',{staticClass:"veer-upload-input",attrs:{"type":"file","multiple":_vm.multiple,"accept":_vm.accept},on:{"change":_vm.changeHandler}})],2)}
var btnvue_type_template_id_38731f7e_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"veer-upload-btn-def"},[_c('i')])}]


// CONCATENATED MODULE: ./packages/components/upload/btn.vue?vue&type=template&id=38731f7e&

// CONCATENATED MODULE: ./packages/components/upload/btn-mixin.js
/* harmony default export */ var btn_mixin = ({
  props: {
    multiple: {
      type: Boolean,
      default: true
    },
    accept: {
      type: String,
      default: 'image/*'
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/upload/btn.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//



/* harmony default export */ var btnvue_type_script_lang_js_ = ({
  name: 'veer-upload-btn',
  mixins: [btn_mixin],
  methods: {
    changeHandler: function changeHandler(e) {
      var fileEle = e.currentTarget;
      var files = fileEle.files;
      if (files) {
        this.$parent.addFiles(files);
        fileEle.value = null;
      }
    }
  }
});
// CONCATENATED MODULE: ./packages/components/upload/btn.vue?vue&type=script&lang=js&
 /* harmony default export */ var upload_btnvue_type_script_lang_js_ = (btnvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/components/upload/btn.vue?vue&type=style&index=0&lang=scss&
var btnvue_type_style_index_0_lang_scss_ = __webpack_require__(75);

// CONCATENATED MODULE: ./packages/components/upload/btn.vue






/* normalize component */

var btn_component = normalizeComponent(
  upload_btnvue_type_script_lang_js_,
  btnvue_type_template_id_38731f7e_render,
  btnvue_type_template_id_38731f7e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var btn = (btn_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/upload/file.vue?vue&type=template&id=38f1233c&
var filevue_type_template_id_38f1233c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"veer-upload-file",class:_vm.fileCls,on:{"click":_vm.clickHandler}},[_vm._t("default",[_c('div',{staticClass:"veer-upload-file-def",style:(_vm.fileStyle)},[_c('i',{staticClass:"veer-icon-wrong",on:{"click":function($event){$event.stopPropagation();return _vm.removeFile($event)}}}),_vm._v(" "),_c('div',{staticClass:"veer-upload-file-state",class:_vm.fileStatusCls},[_c('i',{staticClass:"veer-upload-file-status",class:_vm.statusCls}),_vm._v(" "),_c('span',{staticClass:"veer-upload-file-progress"},[_vm._v(_vm._s(_vm.fileProgress))])])])],{"imgStyle":_vm.fileStyle,"progress":_vm.fileProgress})],2)}
var filevue_type_template_id_38f1233c_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/upload/file.vue?vue&type=template&id=38f1233c&

// CONCATENATED MODULE: ./packages/common/helpers/env.js
// ssr support
var inBrowser = typeof window !== 'undefined';
var ua = inBrowser && navigator.userAgent.toLowerCase();
var isAndroid = ua && ua.indexOf('android') > 0;
var isIOS = ua && /iphone|ipad|ipod|ios/.test(ua);
// CONCATENATED MODULE: ./packages/components/upload/util.js


var URL = inBrowser ? window.URL || window.webkitURL || window.mozURL : null;

var STATUS_READY = 'ready';
var STATUS_UPLOADING = 'uploading';
var STATUS_ERROR = 'error';
var STATUS_SUCCESS = 'success';

function processFiles(files, eachProcessFile, eachCb, cb) {
  var fileItems = [];
  var len = files.length;
  var processedLen = 0;
  for (var i = 0; i < len; i++) {
    processFile(files[i], i, eachProcessFile, function (item, index) {
      processedLen++;
      fileItems[index] = item;
      eachCb(item, index);
      if (processedLen === len) {
        return cb(fileItems);
      }
    });
  }
}

function processFile(file, i, eachProcessFile, cb) {
  eachProcessFile(file, function (file) {
    var item = newFile(file.name, file.size, STATUS_READY, 0, file);
    cb(item, i);
  });
}

function newFile() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var status = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var progress = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var file = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

  var base64 = file && file.base64 || '';
  var url = base64 ? '' : createURL(file);

  return {
    name: name,
    size: size,
    url: url,
    base64: base64,
    status: status,
    progress: progress,
    file: file
  };
}

function createURL(file) {
  if (file && URL) {
    return URL.createObjectURL(file);
  }
  return '';
}

function evalOpts(data) {
  if (typeof data === 'function') {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return data.apply(this, args);
  }
  return data;
}
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/upload/file.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var COMPONENT_NAME = 'veer-upload-file';
var STATUS_CLASS_MAP = {
  success: 'veer-icon-right',
  error: 'veer-icon-info'
};
var EVENT_CLICK = 'click';

/* harmony default export */ var filevue_type_script_lang_js_ = ({
  name: COMPONENT_NAME,
  props: {
    file: {
      type: Object,
      required: true
    }
  },
  computed: {
    fileCls: function fileCls() {
      return 'veer-upload-file_' + this.file.status;
    },
    fileStatusCls: function fileStatusCls() {
      var file = this.file;
      var status = file.status;
      if (file.progress >= 0.01 || status === STATUS_SUCCESS || status === STATUS_ERROR) {
        return 'veer-upload-file_stat';
      } else {
        return '';
      }
    },
    fileStyle: function fileStyle() {
      var url = this.file.url || this.file.base64;
      if (!url) {
        return;
      }
      return {
        'background-image': 'url("' + url + '")'
      };
    },
    statusCls: function statusCls() {
      var status = this.file.status;
      return STATUS_CLASS_MAP[status];
    },
    fileProgress: function fileProgress() {
      if (this.statusCls) {
        return '100%';
      }
      var p = Math.min(Math.floor(this.file.progress * 100), 99);
      return p + '%';
    }
  },
  methods: {
    clickHandler: function clickHandler() {
      this.$emit(EVENT_CLICK, this.file);
    },
    removeFile: function removeFile() {
      this.$parent.removeFile(this.file);
    }
  }
});
// CONCATENATED MODULE: ./packages/components/upload/file.vue?vue&type=script&lang=js&
 /* harmony default export */ var upload_filevue_type_script_lang_js_ = (filevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/components/upload/file.vue?vue&type=style&index=0&lang=scss&
var filevue_type_style_index_0_lang_scss_ = __webpack_require__(76);

// CONCATENATED MODULE: ./packages/components/upload/file.vue






/* normalize component */

var file_component = normalizeComponent(
  upload_filevue_type_script_lang_js_,
  filevue_type_template_id_38f1233c_render,
  filevue_type_template_id_38f1233c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var upload_file = (file_component.exports);
// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/keys.js
var keys = __webpack_require__(23);
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// CONCATENATED MODULE: ./packages/components/upload/ajax.js



function ajaxUpload(file, options, changeHandler) {
  var target = options.target,
      _options$headers = options.headers,
      headers = _options$headers === undefined ? {} : _options$headers,
      _options$data = options.data,
      data = _options$data === undefined ? {} : _options$data,
      _options$fileName = options.fileName,
      fileName = _options$fileName === undefined ? 'file' : _options$fileName,
      withCredentials = options.withCredentials,
      timeout = options.timeout,
      _options$prop = options.prop,
      prop = _options$prop === undefined ? 'file' : _options$prop,
      _options$progressInte = options.progressInterval,
      progressInterval = _options$progressInte === undefined ? 100 : _options$progressInte,
      _options$checkSuccess = options.checkSuccess,
      checkSuccess = _options$checkSuccess === undefined ? function () {
    return true;
  } : _options$checkSuccess;


  var realTarget = evalOpts(target, file);

  file.progress = 0;
  file.status = STATUS_UPLOADING;

  var xhr = new window.XMLHttpRequest();
  file._xhr = xhr;
  var progressTid = 0;
  if (xhr.upload) {
    var lastProgressTime = Date.now();
    xhr.upload.onprogress = function (e) {
      if (e.total > 0) {
        if (progressTid) {
          clearTimeout(progressTid);
          var now = Date.now();
          var diff = now - lastProgressTime;
          if (diff >= progressInterval) {
            computed();
          } else {
            progressTid = setTimeout(computed, diff);
          }
        } else {
          // first time
          computed();
          progressTid = 1;
        }
      }
      function computed() {
        file.progress = e.loaded / e.total;
        lastProgressTime = Date.now();
      }
    };
  }

  var formData = new window.FormData();
  var realData = evalOpts(data, file);
  keys_default()(realData).forEach(function (key) {
    formData.append(key, realData[key]);
  });
  formData.append(fileName, file[prop]);

  xhr.onload = function () {
    if (xhr.status < 200 || xhr.status >= 300) {
      setStatus(STATUS_ERROR);
      return;
    }
    setResponse();
    var response = file.response;

    if (checkSuccess.length <= 2) {
      var isSuccess = checkSuccess(response, file);
      setStatus(isSuccess ? STATUS_SUCCESS : STATUS_ERROR);
    } else {
      // callback
      checkSuccess(response, file, function (isSuccess) {
        setStatus(isSuccess ? STATUS_SUCCESS : STATUS_ERROR);
      });
    }
  };
  xhr.onerror = function () {
    setResponse();
    setStatus(STATUS_ERROR);
  };
  xhr.ontimeout = function () {
    setResponse();
    setStatus(STATUS_ERROR);
  };

  xhr.open('POST', realTarget, true);
  if (withCredentials) {
    xhr.withCredentials = true;
  }
  var realHeaders = evalOpts(headers, file);
  keys_default()(realHeaders).forEach(function (key) {
    xhr.setRequestHeader(key, realHeaders[key]);
  });
  if (timeout > 0) {
    xhr.timeout = timeout;
  }

  xhr.send(formData);
  function setStatus(status) {
    clearTimeout(progressTid);
    progressTid = 0;
    file.progress = 1;
    file.status = status;
    changeHandler && changeHandler(file);
  }
  function setResponse() {
    var response = xhr.responseText || xhr.response;
    try {
      response = JSON.parse(response);
    } catch (e) {}
    file.response = response;
    file.responseHeaders = xhr.getAllResponseHeaders();
  }
}
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/upload/upload.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//







var uploadvue_type_script_lang_js_COMPONENT_NAME = 'veer-upload';
var uploadvue_type_script_lang_js_EVENT_INPUT = 'input';
var EVENT_ADDED = 'files-added';
var EVENT_SUBMITTED = 'file-submitted';
var EVENT_REMOVED = 'file-removed';
var EVENT_SUCCESS = 'file-success';
var EVENT_ERROR = 'file-error';
var uploadvue_type_script_lang_js_EVENT_CLICK = 'file-click';
/* harmony default export */ var uploadvue_type_script_lang_js_ = ({
  name: uploadvue_type_script_lang_js_COMPONENT_NAME,
  mixins: [btn_mixin],
  props: {
    value: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    action: {
      type: [String, Object],
      default: ''
    },
    max: {
      type: Number,
      default: 10
    },
    auto: {
      type: Boolean,
      default: true
    },
    simultaneousUploads: {
      type: Number,
      default: 1
    },
    processFile: {
      type: Function,
      default: function _default(file, cb) {
        cb(file);
      }
    }
  },
  data: function data() {
    return {
      files: this.value,
      paused: !this.auto
    };
  },

  computed: {
    actionOptions: function actionOptions() {
      var action = this.action;
      if (typeof action === 'string') {
        return action ? {
          target: action
        } : null;
      } else {
        return action;
      }
    },
    isShowBtn: function isShowBtn() {
      return this.files.length < this.max;
    }
  },
  watch: {
    value: function value(newVal) {
      this.files = newVal;
    },
    files: function files(newFiles) {
      this.$emit(uploadvue_type_script_lang_js_EVENT_INPUT, newFiles);
    }
  },
  methods: {
    addFiles: function addFiles(files) {
      var _this = this;

      this.$emit(EVENT_ADDED, files);
      var filesLen = this.files.length;
      var newFiles = [];
      var maxLen = this.max - filesLen;
      var i = 0;
      var file = files[i];
      while (newFiles.length < maxLen && file) {
        if (!file.ignore) {
          newFiles.push(file);
          this.files.push(newFile());
        }
        file = files[++i];
      }
      processFiles(newFiles, this.processFile, function (file, index) {
        _this.$set(_this.files, filesLen + index, file);
        _this.$emit(EVENT_SUBMITTED, file);
      }, function () {
        // waiting ui
        _this.$nextTick(function () {
          _this.upload();
        });
      });
    },
    removeFile: function removeFile(file) {
      this.$emit(EVENT_REMOVED, file);
      file._xhr && file._xhr.abort();
      if (file.url) {
        URL.revokeObjectURL(file.url);
      }
      var index = this.files.indexOf(file);
      this.files.splice(index, 1);
      this.upload();
    },
    fileClick: function fileClick(file) {
      this.$emit(uploadvue_type_script_lang_js_EVENT_CLICK, file);
    },
    upload: function upload(retry) {
      var _this2 = this;

      var options = this.actionOptions;
      if (this.paused || !options) {
        return;
      }
      var len = this.files.length;
      var uploadingCount = 0;
      var i = 0;

      var _loop = function _loop() {
        var file = _this2.files[i];
        var status = file.status;
        if (status === STATUS_READY || retry && status === STATUS_ERROR && file._retryId !== _this2.retryId) {
          ajaxUpload(file, options, function (file) {
            if (status === STATUS_ERROR) {
              file._retryId = _this2.retryId;
            }
            _this2.$emit(file.status === STATUS_SUCCESS ? EVENT_SUCCESS : EVENT_ERROR, file);
            _this2.upload(retry);
          });
          uploadingCount++;
        } else if (status === STATUS_UPLOADING) {
          uploadingCount++;
        }
        i++;
      };

      while (i < len && uploadingCount < this.simultaneousUploads) {
        _loop();
      }
    },
    start: function start() {
      this.paused = false;
      this.upload();
    },
    pause: function pause() {
      this.paused = true;
      this.files.forEach(function (file) {
        if (file.status === STATUS_UPLOADING) {
          file._xhr.abort();
          file.status = STATUS_READY;
        }
      });
    },
    retry: function retry() {
      this.retryId = Date.now();
      this.paused = false;
      this.upload(true);
    }
  },
  components: {
    UploadBtn: btn,
    UploadFile: upload_file
  }

});
// CONCATENATED MODULE: ./packages/components/upload/upload.vue?vue&type=script&lang=js&
 /* harmony default export */ var upload_uploadvue_type_script_lang_js_ = (uploadvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/components/upload/upload.vue?vue&type=style&index=0&lang=scss&
var uploadvue_type_style_index_0_lang_scss_ = __webpack_require__(80);

// CONCATENATED MODULE: ./packages/components/upload/upload.vue






/* normalize component */

var upload_component = normalizeComponent(
  upload_uploadvue_type_script_lang_js_,
  uploadvue_type_template_id_2017115c_render,
  uploadvue_type_template_id_2017115c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var upload_upload = (upload_component.exports);
// CONCATENATED MODULE: ./packages/components/upload/index.js




upload_upload.install = function (Vue) {
  Vue.component(upload_upload.name, upload_upload);
  Vue.component(btn.name, btn);
  Vue.component(upload_file.name, upload_file);
};

upload_upload.Btn = btn;
upload_upload.File = upload_file;

/* harmony default export */ var components_upload = (upload_upload);
// CONCATENATED MODULE: ./src/index.js












// 组件库导入
var components = [components_icon, components_flex, components_flex_item, components_button, components_radio, components_radio_group, components_input, components_switch, components_video, components_upload];

var install = function install(Vue) {
  // 判断是否安装
  if (install.installed) {
    return;
  }
  components.forEach(function (component) {
    Vue.component(component.name, component);
  });
};

/* harmony default export */ var src = __webpack_exports__["default"] = ({
  version: '1.0.0',
  total: components.length,
  install: install,
  Style: Style,
  Icon: components_icon,
  Flex: components_flex,
  FlexItem: components_flex_item,
  Button: components_button,
  Radio: components_radio,
  RadioGroup: components_radio_group,
  Input: components_input,
  Switch: components_switch,
  Video: components_video,
  Upload: components_upload

  // 单个组件可以直接这样导出
  // export default Button;

});

/***/ })
/******/ ]);
});