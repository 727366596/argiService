/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 76);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.0' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(21)('wks');
var uid = __webpack_require__(15);
var Symbol = __webpack_require__(1).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(10);
var IE8_DOM_DEFINE = __webpack_require__(30);
var toPrimitive = __webpack_require__(16);
var dP = Object.defineProperty;

exports.f = __webpack_require__(4) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(8)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 5 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(55);
var defined = __webpack_require__(18);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(3);
var createDesc = __webpack_require__(11);
module.exports = __webpack_require__(4) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
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
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(0);
var ctx = __webpack_require__(42);
var hide = __webpack_require__(7);
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
    if (own && key in exports) continue;
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(13);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 11 */
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(36);
var enumBugKeys = __webpack_require__(22);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(13);
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
/* 17 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(21)('keys');
var uid = __webpack_require__(15);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(3).f;
var has = __webpack_require__(5);
var TAG = __webpack_require__(2)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(18);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(2);


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(0);
var LIBRARY = __webpack_require__(19);
var wksExt = __webpack_require__(25);
var defineProperty = __webpack_require__(3).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 28 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(75), __esModule: true };

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(4) && !__webpack_require__(8)(function () {
  return Object.defineProperty(__webpack_require__(31)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(13);
var document = __webpack_require__(1).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(50);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(63);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(19);
var $export = __webpack_require__(9);
var redefine = __webpack_require__(34);
var hide = __webpack_require__(7);
var has = __webpack_require__(5);
var Iterators = __webpack_require__(14);
var $iterCreate = __webpack_require__(53);
var setToStringTag = __webpack_require__(23);
var getPrototypeOf = __webpack_require__(37);
var ITERATOR = __webpack_require__(2)('iterator');
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
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
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
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(10);
var dPs = __webpack_require__(54);
var enumBugKeys = __webpack_require__(22);
var IE_PROTO = __webpack_require__(20)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(31)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(58).appendChild(iframe);
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
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(5);
var toIObject = __webpack_require__(6);
var arrayIndexOf = __webpack_require__(56)(false);
var IE_PROTO = __webpack_require__(20)('IE_PROTO');

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
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(5);
var toObject = __webpack_require__(24);
var IE_PROTO = __webpack_require__(20)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 38 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(36);
var hiddenKeys = __webpack_require__(22).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.format = format;
exports.isLeapYear = isLeapYear;
exports.getMonthDays = getMonthDays;
exports.getWeekNumber = getWeekNumber;
exports.todayWeekNumber = todayWeekNumber;
exports.fmtcnstyle = fmtcnstyle;
exports.translate = translate;
exports.dateDiff = dateDiff;
exports.months = months;
/**
 * Created by wenwang on 2017/8/28.
 */

/**
 * 日期格式化
 * @param format
 * @returns {*}
 */
function format(date, format) {
  var o = {
    'M+': date.getMonth() + 1, //month
    'd+': date.getDate(), //day
    'h+': date.getHours(), //hour
    'm+': date.getMinutes(), //minute
    's+': date.getSeconds(), //second
    'q+': Math.floor((date.getMonth() + 3) / 3), //quarter
    'S': date.getMilliseconds() //millisecond
  };
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, ('' + date.getFullYear()).substr(4 - RegExp.$1.length));
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
    }
  }
  return format;
}

/**
 * 判断年份是否为润年
 *
 * @param {Number} year
 */
function isLeapYear(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
/**
 * 获取某一年份的某一月份的天数
 *
 * @param {Number} year
 * @param {Number} month
 */
function getMonthDays(year, month) {
  return [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month] || (isLeapYear(year) ? 29 : 28);
}
/**
 * 获取某年的某天是第几周
 * @param {Number} y
 * @param {Number} m
 * @param {Number} d
 * @returns {Number}
 */
function getWeekNumber(y, m, d) {
  var now = new Date(y, m - 1, d);
  var year = now.getFullYear();
  var month = now.getMonth();
  var days = now.getDate();
  //那一天是那一年中的第多少天
  for (var i = 0; i < month; i++) {
    days += getMonthDays(year, i);
  }

  //那一年第一天是星期几
  var yearFirstDay = new Date(year, 0, 1).getDay() || 7;

  var week = null;
  if (yearFirstDay === 1) {
    week = Math.ceil(days / yearFirstDay);
  } else {
    days -= 7 - yearFirstDay + 1;
    week = Math.ceil(days / 7) + 1;
  }

  return week;
}

function todayWeekNumber() {
  var now = new Date();
  var y = now.getFullYear();
  var m = now.getMonth() + 1;
  var d = now.getDay();
  return getWeekNumber(y, m, d);
}

function fmtcnstyle(datestr) {
  var all = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  var ss = datestr.split(' ');
  var datess = ss[0].split('-');
  if (ss.length === 1 || !all) {
    if (datess.length === 2) {
      return datess[0] + '\u5E74' + datess[1] + '\u6708';
    } else if (datess.length === 3) {
      return datess[0] + '\u5E74' + datess[1] + '\u6708' + datess[2] + '\u65E5';
    } else {
      return datestr;
    }
  } else {
    var timess = ss[1].split(':');
    return datess[0] + '\u5E74' + datess[1] + '\u6708' + datess[2] + '\u65E5 ' + timess[0] + ':' + timess[1];
  }
}

function translate(dataStr) {
  dataStr = dataStr.replace('年', '-');
  dataStr = dataStr.replace('月', '-');
  dataStr = dataStr.replace('日', ' ');
  return dataStr.trim();
}

function dateDiff(startTime, endTime, diffType) {
  //将xxxx-xx-xx的时间格式，转换为 xxxx/xx/xx的格式
  startTime = startTime.replace(/\-/g, "/");
  endTime = endTime.replace(/\-/g, "/");
  //将计算间隔类性字符转换为小写
  diffType = diffType.toLowerCase();
  var sTime = new Date(startTime); //开始时间
  var eTime = new Date(endTime); //结束时间
  //作为除数的数字
  var timeType = 1;
  switch (diffType) {
    case "second":
      timeType = 1000;
      break;
    case "minute":
      timeType = 1000 * 60;
      break;
    case "hour":
      timeType = 1000 * 3600;
      break;
    case "day":
      timeType = 1000 * 3600 * 24;
      break;
    case "month":
      var smonth = sTime.getFullYear() * 12 + sTime.getMonth();
      var emonth = eTime.getFullYear() * 12 + eTime.getMonth();
      return emonth - smonth;
      break;
    case "year":
      return eTime.getFullYear() - sTime.getFullYear();
    default:
      break;
  }
  return parseInt((eTime.getTime() - sTime.getTime()) / parseInt(timeType));
}

function months(date1, date2) {
  // 拆分年月日
  date1 = date1.split('-');
  date2 = date2.split('-');
  var stYear = parseInt(date1[0]);
  var stMonth = parseInt(date1[1]);
  var edYear = parseInt(date2[0]);
  var edMonth = parseInt(date2[1]);
  date1 = stYear * 12 + stMonth;
  date2 = edYear * 12 + edMonth;
  var m = Math.abs(date1 - date2);
  var ret = [];
  var year = stYear,
      month = stMonth;
  for (var i = 0; i < m + 1; ++i) {
    var currmonth = month < 10 ? '0' + month : '' + month;
    ret.push(year + '-' + currmonth);
    if (year === edYear && month === edMonth) {
      break;
    }
    ++month;
    if (month > 12) {
      month = 1;
      ++year;
    }
  }
  return ret;
}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(46);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(49);
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
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(52)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(33)(String, 'String', function (iterated) {
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
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(17);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(9);
var core = __webpack_require__(0);
var fails = __webpack_require__(8);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(47), __esModule: true };

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(48);
var $Object = __webpack_require__(0).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(9);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(4), 'Object', { defineProperty: __webpack_require__(3).f });


/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(51), __esModule: true };

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(43);
__webpack_require__(59);
module.exports = __webpack_require__(25).f('iterator');


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(17);
var defined = __webpack_require__(18);
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
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(35);
var descriptor = __webpack_require__(11);
var setToStringTag = __webpack_require__(23);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(7)(IteratorPrototype, __webpack_require__(2)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(3);
var anObject = __webpack_require__(10);
var getKeys = __webpack_require__(12);

module.exports = __webpack_require__(4) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(28);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(6);
var toLength = __webpack_require__(44);
var toAbsoluteIndex = __webpack_require__(57);
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
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(17);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(1).document;
module.exports = document && document.documentElement;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(60);
var global = __webpack_require__(1);
var hide = __webpack_require__(7);
var Iterators = __webpack_require__(14);
var TO_STRING_TAG = __webpack_require__(2)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(61);
var step = __webpack_require__(62);
var Iterators = __webpack_require__(14);
var toIObject = __webpack_require__(6);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(33)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(64), __esModule: true };

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(65);
__webpack_require__(72);
__webpack_require__(73);
__webpack_require__(74);
module.exports = __webpack_require__(0).Symbol;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(1);
var has = __webpack_require__(5);
var DESCRIPTORS = __webpack_require__(4);
var $export = __webpack_require__(9);
var redefine = __webpack_require__(34);
var META = __webpack_require__(66).KEY;
var $fails = __webpack_require__(8);
var shared = __webpack_require__(21);
var setToStringTag = __webpack_require__(23);
var uid = __webpack_require__(15);
var wks = __webpack_require__(2);
var wksExt = __webpack_require__(25);
var wksDefine = __webpack_require__(26);
var keyOf = __webpack_require__(67);
var enumKeys = __webpack_require__(68);
var isArray = __webpack_require__(69);
var anObject = __webpack_require__(10);
var toIObject = __webpack_require__(6);
var toPrimitive = __webpack_require__(16);
var createDesc = __webpack_require__(11);
var _create = __webpack_require__(35);
var gOPNExt = __webpack_require__(70);
var $GOPD = __webpack_require__(71);
var $DP = __webpack_require__(3);
var $keys = __webpack_require__(12);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(39).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(27).f = $propertyIsEnumerable;
  __webpack_require__(38).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(19)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key) {
    if (isSymbol(key)) return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    replacer = args[1];
    if (typeof replacer == 'function') $replacer = replacer;
    if ($replacer || !isArray(replacer)) replacer = function (key, value) {
      if ($replacer) value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(7)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(15)('meta');
var isObject = __webpack_require__(13);
var has = __webpack_require__(5);
var setDesc = __webpack_require__(3).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(8)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys = __webpack_require__(12);
var toIObject = __webpack_require__(6);
module.exports = function (object, el) {
  var O = toIObject(object);
  var keys = getKeys(O);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) if (O[key = keys[index++]] === el) return key;
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(12);
var gOPS = __webpack_require__(38);
var pIE = __webpack_require__(27);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(28);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(6);
var gOPN = __webpack_require__(39).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(27);
var createDesc = __webpack_require__(11);
var toIObject = __webpack_require__(6);
var toPrimitive = __webpack_require__(16);
var has = __webpack_require__(5);
var IE8_DOM_DEFINE = __webpack_require__(30);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(4) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 72 */
/***/ (function(module, exports) {



/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(26)('asyncIterator');


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(26)('observable');


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(0);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(29);

var _stringify2 = _interopRequireDefault(_stringify);

var _defineProperty2 = __webpack_require__(41);

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _STATUS_DESC;

var _Ajax = __webpack_require__(77);

var _Ajax2 = _interopRequireDefault(_Ajax);

var _DateUtils = __webpack_require__(40);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var STORE_KEY = '_weekly_data_';

var STATUS_NEW = 'new'; //新建
var STATUS_CREATE = 'save'; //暂存(草稿)
var STATUS_COMMIT = 'submit'; //提交(待审阅)
var STATUS_REGION_READ = 'region_pass'; //大区经理审批通过
var STATUS_REGION_DENY = 'region_not_pass'; //大区经理审批不通过
var STATUS_DIRECTOR_READ = 'director_pass'; //总监审批通过
var STATUS_DIRECTOR_DENY = 'director_not_pass'; //总监审批不通过

var STATUS_DESC = (_STATUS_DESC = {}, (0, _defineProperty3.default)(_STATUS_DESC, STATUS_NEW, '新建'), (0, _defineProperty3.default)(_STATUS_DESC, STATUS_CREATE, '草稿'), (0, _defineProperty3.default)(_STATUS_DESC, STATUS_COMMIT, '待审阅'), (0, _defineProperty3.default)(_STATUS_DESC, STATUS_REGION_READ, '大区经理审批通过'), (0, _defineProperty3.default)(_STATUS_DESC, STATUS_REGION_DENY, '大区经理审批不通过'), (0, _defineProperty3.default)(_STATUS_DESC, STATUS_DIRECTOR_READ, '总监审批通过'), (0, _defineProperty3.default)(_STATUS_DESC, STATUS_DIRECTOR_DENY, '总监审批不通过'), _STATUS_DESC);

exports.default = {
  createNew: STATUS_NEW,
  createStatus: STATUS_CREATE,
  commitStatus: STATUS_COMMIT,
  regionStatus: STATUS_REGION_READ,
  regionNotStatus: STATUS_REGION_DENY,
  directorStatus: STATUS_DIRECTOR_READ,
  directorNotStatus: STATUS_DIRECTOR_DENY,

  getStatuDesc: function getStatuDesc(code) {
    return STATUS_DESC[code];
  },

  //控制状态代码
  isCreateNew: function isCreateNew(code) {
    return STATUS_NEW === '' + code;
  },
  isCreateStatus: function isCreateStatus(code) {
    return STATUS_CREATE === '' + code;
  },
  isCommitStatus: function isCommitStatus(code) {
    return STATUS_COMMIT === '' + code;
  },
  isRegionReadStatus: function isRegionReadStatus(code) {
    return STATUS_REGION_READ === '' + code;
  },
  isRegionDenyStatus: function isRegionDenyStatus(code) {
    return STATUS_REGION_DENY === '' + code;
  },
  isDirectorReadStatus: function isDirectorReadStatus(code) {
    return STATUS_DIRECTOR_READ === '' + code;
  },
  isDirectorDenyStatus: function isDirectorDenyStatus(code) {
    return STATUS_DIRECTOR_DENY === '' + code;
  },

  //操作数据代码

  //init weekid
  initWeekId: function initWeekId(weekId) {
    if (weekId === null) {
      this._setData('weekId', '');
    } else {
      this._setData('weekId', weekId);
    }
  },

  //1.临时缓存本周情况数据
  stageWeeklyList: function stageWeeklyList(thisDayRemarks) {
    this._setData('thisDayRemarks', thisDayRemarks);
  },

  //2.临时缓存下周情况数据
  stageNextPlan: function stageNextPlan(nextWeekRemarks) {
    this._setData('nextWeekRemarks', nextWeekRemarks);
  },


  //3.临时缓存支援事项数据
  stageSuppertItem: function stageSuppertItem(supItems) {
    this._setData('supItems', supItems);
  },

  //4.临时缓存市场信息数据
  stageMarketLetter: function stageMarketLetter(marketMsg) {
    this._setData('marketMsg', marketMsg);
  },

  //5.临时缓存状态数据
  stageStatus: function stageStatus(status) {
    this._setData('status', status);
  },

  //6.临时缓存日期
  stageThisDate: function stageThisDate(thisDate) {
    this._setData('thisDate', thisDate);
  },

  //7.临时缓存本周id
  stageThisWeeklyId: function stageThisWeeklyId(thisId) {
    this._setData('thisId', thisId);
  },

  //8.临时缓存下周id
  stageNextWeeklyId: function stageNextWeeklyId(nextId) {
    this._setData('nextId', nextId);
  },

  //9.临时缓存支援市场id
  stageBusWeeklyId: function stageBusWeeklyId(busId) {
    this._setData('busId', busId);
  },

  //10.临时缓存本周weekId
  stageThisWeekId: function stageThisWeekId(thisWeekId) {
    this._setData('thisWeekId', thisWeekId);
  },

  //11.临时缓存下周weekId
  stageNextWeekId: function stageNextWeekId(nextWeekId) {
    this._setData('nextWeekId', nextWeekId);
  },

  //11.临时缓存本周接口数据
  stageThisWeekDate: function stageThisWeekDate(thisWeekDate) {
    this._setData('thisWeekDate', thisWeekDate);
  },

  //11.临时缓存下周接口数据
  stageNextWeekDate: function stageNextWeekDate(nextWeekDate) {
    this._setData('nextWeekDate', nextWeekDate);
  },

  //11.临时缓存下周接口数据
  stageMarSupDate: function stageMarSupDate(marSupDate) {
    this._setData('marSupDate', marSupDate);
  },

  //拜访记录
  stageVisitDate: function stageVisitDate(visitData) {
    this._setData('visitData', visitData);
  },

  //农化还是业广标识
  stageFlag: function stageFlag(flag) {
    this._setData('flag', flag);
  },

  //缓存客户回访公司名称
  stageVisitInfoDate: function stageVisitInfoDate(visitInfo) {
    this._setData('visitInfo', visitInfo);
  },

  //暂存
  temData: function temData(fn) {
    var self = this;
    var data = self.getData();
    //  console.log(JSON.stringify(data))
    var thisDayRemarks = {};
    var nextDayRemarks = {};
    var busWeek = {};
    if (data.status === 'new') {
      thisDayRemarks.id = null;
      nextDayRemarks.id = null;
      busWeek.id = null;
    } else {
      thisDayRemarks.id = data.thisId;
      nextDayRemarks.id = data.nextId;
      busWeek.id = data.busId;
    }
    //本周日期和备注
    //  console.log('缓存数据的data是'+JSON.stringify(data))

    thisDayRemarks.satRemark = data.thisDayRemarks[0];
    thisDayRemarks.satDate = data.thisDate[0];

    thisDayRemarks.sunRemark = data.thisDayRemarks[1];
    thisDayRemarks.sunDate = data.thisDate[1];

    thisDayRemarks.monRemark = data.thisDayRemarks[2];
    thisDayRemarks.monDate = data.thisDate[2];

    thisDayRemarks.tueRemark = data.thisDayRemarks[3];
    thisDayRemarks.tueDate = data.thisDate[3];

    thisDayRemarks.wedRemark = data.thisDayRemarks[4];
    thisDayRemarks.wedDate = data.thisDate[4];

    thisDayRemarks.thuRemark = data.thisDayRemarks[5];
    thisDayRemarks.thuDate = data.thisDate[5];

    thisDayRemarks.friRemark = data.thisDayRemarks[6];
    thisDayRemarks.friDate = data.thisDate[6];

    thisDayRemarks.type = 'this_week';
    //下周
    if (data.status != 'new' && data.nextWeekRemarks.length < 1) {
      nextDayRemarks.satRemark = data.nextWeekDate.satRemark;
      nextDayRemarks.sunRemark = data.nextWeekDate.sunRemark;
      nextDayRemarks.monRemark = data.nextWeekDate.monRemark;
      nextDayRemarks.tueRemark = data.nextWeekDate.tueRemark;
      nextDayRemarks.wedRemark = data.nextWeekDate.wedRemark;
      nextDayRemarks.thuRemark = data.nextWeekDate.thuRemark;
      nextDayRemarks.friRemark = data.nextWeekDate.friRemark;
    } else {
      nextDayRemarks.satRemark = data.nextWeekRemarks[0];
      nextDayRemarks.sunRemark = data.nextWeekRemarks[1];
      nextDayRemarks.monRemark = data.nextWeekRemarks[2];
      nextDayRemarks.tueRemark = data.nextWeekRemarks[3];
      nextDayRemarks.wedRemark = data.nextWeekRemarks[4];
      nextDayRemarks.thuRemark = data.nextWeekRemarks[5];
      nextDayRemarks.friRemark = data.nextWeekRemarks[6];
    }

    nextDayRemarks.type = 'next_week';
    //支援和市场

    busWeek.supItems = data.supItems;
    busWeek.marketMsg = data.marketMsg;

    busWeek.weekState = 'save';
    busWeek.busType = data.flag;
    //  console.log('数据。。。。。。。。。'+JSON.stringify(data))
    var param = {
      thisDayRemarks: thisDayRemarks,
      nextDayRemarks: nextDayRemarks,
      busWeek: busWeek
    };
    console.log('暂存的数据' + (0, _stringify2.default)(param));
    _Ajax2.default.postJson('/weeklyBoth/save_weekly_remarks', param, function (res) {
      //        	console.log('暂存的接口数据'+JSON.stringify(res.data))
      api.alert({
        title: '提示',
        msg: '保存成功'
      }, function (ret) {
        if (ret.buttonIndex === 1) {
          api.sendEvent({
            name: 'submitRefresh'
          });
          api.closeWin({});
        }
      });
    });
  },
  commitData: function commitData(fn) {
    var self = this;
    var data = self.getData();
    //      console.log('提交缓存的数据' + JSON.stringify(data))
    var thisDayRemarks = {};
    var nextDayRemarks = {};
    var busWeek = {};
    //  let nextWeeklyData = data.nextWeekRemarks

    if (data.status === 'new') {
      thisDayRemarks.id = null;
      nextDayRemarks.id = null;
      busWeek.id = null;
    } else {
      thisDayRemarks.id = data.thisId;
      nextDayRemarks.id = data.nextId;
      busWeek.id = data.busId;
    }
    //  console.log("+++++++++>>>>>>>>>"+JSON.stringify(nextDayRemarks))

    //本周日期和备注
    thisDayRemarks.satRemark = data.thisDayRemarks[0];
    thisDayRemarks.satDate = data.thisDate[0];

    thisDayRemarks.sunRemark = data.thisDayRemarks[1];
    thisDayRemarks.sunDate = data.thisDate[1];

    thisDayRemarks.monRemark = data.thisDayRemarks[2];
    thisDayRemarks.monDate = data.thisDate[2];

    thisDayRemarks.tueRemark = data.thisDayRemarks[3];
    thisDayRemarks.tueDate = data.thisDate[3];

    thisDayRemarks.wedRemark = data.thisDayRemarks[4];
    thisDayRemarks.wedDate = data.thisDate[4];

    thisDayRemarks.thuRemark = data.thisDayRemarks[5];
    thisDayRemarks.thuDate = data.thisDate[5];

    thisDayRemarks.friRemark = data.thisDayRemarks[6];
    thisDayRemarks.friDate = data.thisDate[6];
    thisDayRemarks.type = 'this_week';

    //下周
    if (data.status != 'new' && data.nextWeekRemarks.length < 1) {
      nextDayRemarks.satRemark = data.nextWeekDate.satRemark;
      nextDayRemarks.sunRemark = data.nextWeekDate.sunRemark;
      nextDayRemarks.monRemark = data.nextWeekDate.monRemark;
      nextDayRemarks.tueRemark = data.nextWeekDate.tueRemark;
      nextDayRemarks.wedRemark = data.nextWeekDate.wedRemark;
      nextDayRemarks.thuRemark = data.nextWeekDate.thuRemark;
      nextDayRemarks.friRemark = data.nextWeekDate.friRemark;
    } else {
      nextDayRemarks.satRemark = data.nextWeekRemarks[0];
      nextDayRemarks.sunRemark = data.nextWeekRemarks[1];
      nextDayRemarks.monRemark = data.nextWeekRemarks[2];
      nextDayRemarks.tueRemark = data.nextWeekRemarks[3];
      nextDayRemarks.wedRemark = data.nextWeekRemarks[4];
      nextDayRemarks.thuRemark = data.nextWeekRemarks[5];
      nextDayRemarks.friRemark = data.nextWeekRemarks[6];
    }
    nextDayRemarks.type = 'next_week';

    //支援和市场
    busWeek.supItems = data.supItems;
    busWeek.marketMsg = data.marketMsg;
    busWeek.weekState = 'submit';
    busWeek.busType = data.flag;
    var param = {
      thisDayRemarks: thisDayRemarks,
      nextDayRemarks: nextDayRemarks,
      busWeek: busWeek
      //          console.log('提交的数据'+JSON.stringify(param))
    };var nowDate = (0, _DateUtils.format)(new Date(), 'yyyy-MM-dd');
    var today = new Date();
    var weekday = today.getDay();
    var friDay = new Date(1000 * 60 * 60 * 24 * (5 - weekday) + today.getTime());
    var friDate = (0, _DateUtils.format)(friDay, 'yyyy-MM-dd');
    //  console.log('本周新数据' + thisWeekData + '下周新数据' + nextWeekData)
    if (nowDate.replace(/-/g, "\/") >= friDate.replace(/-/g, "\/")) {
      //  	console.log('提交的数据'+JSON.stringify(param))
      _Ajax2.default.postJson('/weeklyBoth/save_weekly_remarks', param, function (res) {
        api.alert({
          title: '提示',
          msg: '提交成功'
        }, function (ret) {
          if (ret.buttonIndex === 1) {
            api.sendEvent({
              name: 'submitRefresh'
            });
            api.closeWin({});
          }
        });
      });
    } else {
      api.alert({
        title: '提示',
        msg: '未到周五不能提交'
      }, function (ret) {
        if (ret.buttonIndex === 1) {
          //					api.sendEvent({
          //            name: 'submitRefresh'
          //          });
          //          api.closeWin({
          //
          //          })
        }
      });
    }
  },
  getData: function getData() {
    var data = $api.getStorage(STORE_KEY);
    if (!data) {
      data = {
        visitInfo: [], //客户回访公司名称
        flag: '',
        visitData: [], //拜访记录
        thisDayRemarks: [], //本周备注
        nextWeekRemarks: [], // 下周安排备注
        supItems: '', //支援事项信息
        marketMsg: '', // 市场信息的备注
        thisDate: [], //缓存日期
        status: '',
        thisId: '', //本周ID
        nextId: '', //下周ID
        busId: '', //支援市场ID
        thisWeekId: '', //本周weekid
        nextWeekId: '', //下周weekid
        thisWeekDate: {}, //本周接口数据
        nextWeekDate: {}, //下周接口数据
        marSupDate: {} // 市场和支援接口数据
      };
    }
    return data;
  },
  _setData: function _setData(key, val) {
    var data = this.getData();
    data[key] = val;
    $api.setStorage(STORE_KEY, data);
  }
};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(29);

var _stringify2 = _interopRequireDefault(_stringify);

var _Tool = __webpack_require__(78);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var request = function request(option) {
  // 默认配置项
  var _default = {
    // ajax设置
    url: '',
    type: 'POST',
    dataType: 'json',
    data: null, // 传输数据，
    fileData: null,
    timeout: 20,
    success: null,
    error: null
  };

  var _custom = (0, _Tool.extend)(_default, option);

  var paramData = {};

  var url = _custom.url;
  if (remote) {
    url = remote.url(url);
  }
  var accessToken = remote && remote.debug() ? remote.debugUserId() : $api.getStorage('userId');

  var headers = {
    authorization: accessToken,
    mobile: 'true'
  };

  headers = (0, _Tool.extend)(headers, _custom.headers || {});
  var isBody = false;
  var isForm = _custom.type.toLowerCase() === 'post';

  if (headers['Content-Type']) {
    var js = headers['Content-Type'].indexOf('json') !== -1;
    var txt = headers['Content-Type'].indexOf('text') !== -1;
    if (js || txt) {
      isBody = true;
      isForm = false;
    }
  }
  if (isBody) {
    paramData.body = _custom.data;
  } else if (isForm) {
    paramData.values = _custom.data;
  }
  if (_custom.fileData) {
    paramData.files = _custom.fileData;
  }
  api.showProgress({
    title: '努力加载中...',
    text: '先喝杯茶...',
    modal: true
  });
  if (remote && remote.debug()) {
    console.log('param=' + (0, _stringify2.default)(_custom.data));
  }
  api.ajax({
    url: url,
    method: _custom.type,
    data: paramData,
    timeout: _custom.timeout,
    headers: headers
  }, function (ret, err) {
    api.hideProgress();
    if (remote && remote.debug()) {
      console.log('ret=' + (0, _stringify2.default)(ret));
      console.log('err=' + (0, _stringify2.default)(err));
    }
    if (ret) {
      if (ret.status !== 'ok') {
        api.alert({
          msg: ret.message || _custom.url + ':\u540E\u53F0\u672A\u63D0\u4F9B\u9519\u8BEF\u4FE1\u606F'
        });
      } else if (_custom.success) _custom.success(ret);
    } else if (_custom.error) {
      _custom.error(err);
    } else if (err.statusCode === 500) {
      api.alert({
        msg: _custom.url + ':500:\u540E\u53F0\u672A\u9A8C\u8BC1\u4F20\u9001\u7684\u6570\u636E\u6216\u5176\u5B83\u9519\u8BEF'
      });
    } else if (remote && remote.debug()) {
      api.alert({
        msg: (0, _stringify2.default)(err)
      });
    } else {
      api.alert({
        msg: err.msg || err.body || '系统未捕获到错误信息，请联系管理员'
      });
    }
  });
}; // let extend = require( 'lodash/extend' )


function toQueryPair(key, value) {
  if (typeof value === 'undefined') {
    return key;
  }
  return key + '=' + encodeURIComponent(value === null ? '' : String(value));
}

function queryStr(obj) {
  var ret = [];
  for (var key in obj) {
    key = encodeURIComponent(key);
    var values = obj[key];
    if (values && values.constructor === Array) {
      // 数组
      var queryValues = [];
      for (var i = 0, len = values.length, value; i < len; i++) {
        value = values[i];
        queryValues.push(toQueryPair(key, value));
      }
      ret = ret.concat(queryValues);
    } else {
      // 字符串
      ret.push(toQueryPair(key, values));
    }
  }
  return ret.join('&');
}

var post = function post(url, data, success) {
  if (typeof data === 'function') {
    success = data;
    data = {};
  }
  request({
    url: url,
    data: data,
    success: success,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    }
  });
};

var postJson = function postJson(url, data, success) {
  if (typeof data === 'function') {
    success = data;
    data = {};
  }

  request({
    url: url,
    data: data,
    success: success,
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  });
};

var postText = function postText(url, data, success) {
  if (typeof data === 'function') {
    success = data;
    data = '';
  }
  if ((0, _Tool.isJson)(data)) {
    data = (0, _stringify2.default)(data);
  }
  request({
    url: url,
    data: data,
    success: success,
    headers: {
      'Content-Type': 'text/plain;charset=utf-8'
    }
  });
};

var get = function get(url, data, success) {
  if (typeof data === 'function') {
    success = data;
    data = {};
  }
  var qrs = queryStr((0, _Tool.extend)(data, {
    _t: new Date().getTime()
  }));
  request({
    url: url + '?' + qrs,
    type: 'get',
    success: success
  });
};

window.Ajax = {
  request: request,
  post: post,
  get: get,
  postJson: postJson,
  postText: postText,
  postForm: post
};

exports.default = {
  request: request,
  post: post,
  get: get,
  postForm: post,
  postJson: postJson,
  postText: postText,
  //  pomise,
  queryStr: queryStr
};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extend = exports.isJson = exports.isArray = undefined;

var _getPrototypeOf = __webpack_require__(79);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _typeof2 = __webpack_require__(32);

var _typeof3 = _interopRequireDefault(_typeof2);

exports.getType = getType;
exports.type = type;
exports.isFunction = isFunction;
exports.isWindow = isWindow;
exports.isDocument = isDocument;
exports.isObject = isObject;
exports.isPlainObject = isPlainObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by wenwang on 2017/8/31.
 */

function getType(o) {
  var _t;
  return ((_t = typeof o === "undefined" ? "undefined" : (0, _typeof3.default)(o)) == "object" ? o == null && "null" || Object.prototype.toString.call(o).slice(8, -1) : _t).toLowerCase();
}

function type(obj) {
  return getType(obj);
}

function isFunction(value) {
  return type(value) == "function";
}

function isWindow(obj) {
  return obj != null && obj == obj.window;
}

function isDocument(obj) {
  return obj != null && obj.nodeType == obj.DOCUMENT_NODE;
}

function isObject(obj) {
  return type(obj) == "object";
}

function isPlainObject(obj) {
  return isObject(obj) && !isWindow(obj) && (0, _getPrototypeOf2.default)(obj) == Object.prototype;
}

var isArray = exports.isArray = Array.isArray || function (object) {
  return object instanceof Array;
};

var isJson = exports.isJson = function isJson(obj) {
  var isjson = (typeof obj === "undefined" ? "undefined" : (0, _typeof3.default)(obj)) === 'object' && Object.prototype.toString.call(obj).toLowerCase() === '[object object]' && !obj.length;
  return isjson;
};

var extend = exports.extend = function extend() {
  // 定义默认参数和变量
  // 对象分为扩展对象和被扩展的对象
  //options 代表扩展的对象中的方法
  //name 代表扩展对象的方法名
  //i 为扩展对象参数起始值
  //deep 默认为浅复制
  var options,
      name,
      src,
      copy,
      copyIsArray,
      clone,
      target = arguments[0] || {},
      i = 1,
      length = arguments.length,
      deep = false;
  //当第一个参数为布尔类型是，此参数定义是否为深拷贝
  //对接下来的参数进行处理
  if (typeof target === "boolean") {
    deep = target;
    target = arguments[1] || {};
    // 当定义是否深拷贝时，参数往后移动一位
    i = 2;
  }
  // 如果要扩展的不是对象或者函数，则定义要扩展的对象为空
  if ((typeof target === "undefined" ? "undefined" : (0, _typeof3.default)(target)) !== "object" && !isFunction(target)) {
    target = {};
  }
  if (length === i) {
    target = this;
    --i;
  }
  //对从i开始的多个参数进行遍历
  for (; i < length; i++) {
    // 只处理有定义的值
    if ((options = arguments[i]) != null) {
      // 展开扩展对象
      for (name in options) {
        src = target[name];
        copy = options[name];
        // 防止循环引用
        if (target === copy) {
          continue;
        }
        // 递归处理深拷贝
        if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
          if (copyIsArray) {
            copyIsArray = false;
            clone = src && isArray(src) ? src : [];
          } else {
            clone = src && isPlainObject(src) ? src : {};
          }
          target[name] = extend(deep, clone, copy);
          // 不处理未定义值
        } else if (copy !== undefined) {
          //给target增加属性或方法
          target[name] = copy;
        }
      }
    }
  }
  //返回
  return target;
};

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(80), __esModule: true };

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(81);
module.exports = __webpack_require__(0).Object.getPrototypeOf;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(24);
var $getPrototypeOf = __webpack_require__(37);

__webpack_require__(45)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ })
/******/ ]);