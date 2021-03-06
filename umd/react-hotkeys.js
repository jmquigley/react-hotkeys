/**
 * ISC License
 *
 * Copyright (c) 2018, Aleck Greenham
 *
 * Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('prop-types'), require('react')) :
  typeof define === 'function' && define.amd ? define(['exports', 'prop-types', 'react'], factory) :
  (global = global || self, factory(global.ReactHotkeys = {}, global.PropTypes, global.React));
}(this, function (exports, PropTypes, React) { 'use strict';

  PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;
  var React__default = 'default' in React ? React['default'] : React;

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

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

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
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

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

      return arr2;
    }
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  function dictionaryFrom(array) {
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    return array.reduce(function (memo, element) {
      memo[element] = value || {
        value: element
      };
      return memo;
    }, {});
  }

  /**
   * Default configuration values
   * @private
   */

  var _defaultConfiguration = {
    /**
     * The level of logging of its own behaviour React HotKeys should perform.
     * @type {LogLevel}
     */
    logLevel: 'warn',

    /**
     * Default key event key maps are bound to, if left unspecified
     * @type {KeyEventName}
     */
    defaultKeyEvent: 'keydown',

    /**
     * The default component type to wrap HotKey components' children in, to provide
     * the required focus and keyboard event listening for HotKeys to function
     */
    defaultComponent: 'div',

    /**
     * The default tabIndex value passed to the wrapping component used to contain
     * HotKey components' children. -1 skips focusing the element when tabbing through
     * the DOM, but allows focusing programmatically.
     */
    defaultTabIndex: '-1',

    /**
     * The HTML tags that React HotKeys should ignore key events from. This only works
     * if you are using the default ignoreEventsCondition function.
     * @type {String[]}
     */
    ignoreTags: ['input', 'select', 'textarea'],

    /**
     * Whether to allow hard sequences, or the binding of handlers to actions that have
     * names that are valid key sequences, which implicitly define actions that are
     * triggered by that key sequence
     */
    enableHardSequences: false,

    /**
     * Whether to ignore changes to keyMap and handlers props by default (this reduces
     * a significant amount of unnecessarily resetting internal state)
     *
     * @type {Boolean}
     */
    ignoreKeymapAndHandlerChangesByDefault: true,

    /**
     * The function used to determine whether a key event should be ignored by React
     * Hotkeys. By default, keyboard events originating elements with a tag name in
     * ignoreTags, or a isContentEditable property of true, are ignored.
     *
     * @type {Function<KeyboardEvent>}
     */
    ignoreEventsCondition: function ignoreEventsCondition(event) {
      var target = event.target;

      if (target && target.tagName) {
        var tagName = target.tagName.toLowerCase();
        return Configuration.option('_ignoreTagsDict')[tagName] || target.isContentEditable;
      } else {
        return false;
      }
    },

    /**
     * Whether React HotKeys should simulate keypress events for the keys that do not
     * natively emit them.
     * @type {Boolean}
     */
    simulateMissingKeyPressEvents: true,

    /**
     * Whether to call stopPropagation() on events after they are handled (preventing
     * the event from bubbling up any further, both within React Hotkeys and any other
     * event listeners bound in React).
     *
     * This does not affect the behaviour of React Hotkeys, but rather what happens to
     * the event once React Hotkeys is done with it (whether it's allowed to propagate
     * any further through the Render tree).
     */
    stopEventPropagationAfterHandling: true,

    /**
     * Whether to call stopPropagation() on events after they are ignored (preventing
     * the event from bubbling up any further, both within React Hotkeys and any other
     * event listeners bound in React).
     *
     * This does not affect the behaviour of React Hotkeys, but rather what happens to
     * the event once React Hotkeys is done with it (whether it's allowed to propagate
     * any further through the Render tree).
     */
    stopEventPropagationAfterIgnoring: true
  };

  var _configuration = _objectSpread({}, _defaultConfiguration);
  /**
   * Turn our array of tags to ignore into a dictionary, for faster lookup
   */


  _configuration._ignoreTagsDict = dictionaryFrom(_configuration.ignoreTags, true);
  /**
   * Handles getting and setting global configuration values, that affect how
   * React Hotkeys behaves
   * @class
   */

  var Configuration =
  /*#__PURE__*/
  function () {
    function Configuration() {
      _classCallCheck(this, Configuration);
    }

    _createClass(Configuration, null, [{
      key: "init",

      /**
       * Merges the specified configuration options with the current values.
       * @see _configuration
       */
      value: function init(configuration) {
        var _this = this;

        var ignoreTags = configuration.ignoreTags;

        if (ignoreTags) {
          configuration._ignoreTagsDict = dictionaryFrom(configuration.ignoreTags);
        }

        Object.keys(configuration).forEach(function (key) {
          _this.set(key, configuration[key]);
        });
      }
      /**
       * Sets a single configuration value by name
       * @param {String} key - Name of the configuration value to set
       * @param {*} value - New value to set
       */

    }, {
      key: "set",
      value: function set(key, value) {
        _configuration[key] = value;
      }
    }, {
      key: "reset",
      value: function reset(key) {
        _configuration[key] = _defaultConfiguration[key];
      }
      /**
       * Gets a single configuration value by name
       * @param {String} key - Name of the configuration value
       * @returns {*} Configuration value
       */

    }, {
      key: "option",
      value: function option(key) {
        return _configuration[key];
      }
    }]);

    return Configuration;
  }();

  /**
   * Encapsulates all logging behaviour and provides the ability to specify the level
   * of logging desired.
   * @class
   */
  var Logger =
  /*#__PURE__*/
  function () {
    _createClass(Logger, [{
      key: "noop",

      /**
       * Icons prefixed to the start of logging statements that cycled through each
       * time a focus tree changes, making it easier to quickly spot events related
       * to the same focus tree.
       */

      /**
       * Icons prefixed to the start of logging statements that cycled through each
       * time a component ID changes, making it easier to quickly spot events related
       * to the same component.
       */

      /**
       * Icons prefixed to the start of logging statements that cycled through each
       * time an event ID changes, making it easier to quickly trace the path of KeyEvent
       * objects as they propagate through multiple components.
       */

      /**
       * The level of logging to perform
       * @typedef {'none'|'error'|'warn'|'info'|'debug'|'verbose'} LogLevel
       */

      /**
       * Levels of log severity - the higher the log level, the greater the amount (and
       * lesser the importance) of information logged to the console about React HotKey's
       * behaviour
       * @enum {Number} LogLevel
       */
      value: function noop() {}
      /**
       * By default, calls to all log severities are a no-operation. It's only when the
       * user specifies a log level, are they replaced with logging statements
       * @type {Logger.noop}
       */

    }]);

    function Logger() {
      var _this = this;

      var logLevel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'warn';

      _classCallCheck(this, Logger);

      _defineProperty(this, "verbose", this.noop);

      _defineProperty(this, "debug", this.noop);

      _defineProperty(this, "info", this.noop);

      _defineProperty(this, "warn", this.noop);

      _defineProperty(this, "error", this.noop);

      this.logLevel = this.constructor.levels[logLevel];

      if (this.logLevel >= this.constructor.levels.error) {
        this.error = console.error;
      } else {
        return;
      }

      if (this.logLevel >= this.constructor.levels.warn) {
        this.warn = console.warn;
      } else {
        return;
      }

      ['info', 'debug', 'verbose'].some(function (logLevel) {
        if (_this.logLevel >= _this.constructor.levels[logLevel]) {
          _this[logLevel] = console.log;
          return false;
        }

        return true;
      });
    }

    return Logger;
  }();

  _defineProperty(Logger, "logIcons", ['📕', '📗', '📘', '📙']);

  _defineProperty(Logger, "componentIcons", ['🔺', '⭐️', '🔷', '🔶', '⬛️']);

  _defineProperty(Logger, "eventIcons", ['❤️', '💚', '💙', '💛', '💜', '🧡']);

  _defineProperty(Logger, "levels", {
    none: 0,
    error: 1,
    warn: 2,
    info: 3,
    debug: 4,
    verbose: 5
  });

  function isUndefined(object) {
    return typeof object === 'undefined';
  }

  /**
   * Creates and modifies KeyEventBitmaps
   * @class
   */

  var KeyEventBitmapManager =
  /*#__PURE__*/
  function () {
    function KeyEventBitmapManager() {
      _classCallCheck(this, KeyEventBitmapManager);
    }

    _createClass(KeyEventBitmapManager, null, [{
      key: "newBitmap",

      /**
       * Makes a new KeyEventBitmap with one of the bits set to true
       * @param {KeyEventBitmapIndex=} eventBitmapIndex Index of bit to set to true
       * @returns {KeyEventBitmap} New key event bitmap with bit set to true
       */
      value: function newBitmap(eventBitmapIndex) {
        var bitmap = [false, false, false];

        if (!isUndefined(eventBitmapIndex)) {
          for (var i = 0; i <= eventBitmapIndex; i++) {
            bitmap[i] = true;
          }
        }

        return bitmap;
      }
      /**
       * Sets a bit in the map to true
       * @param {KeyEventBitmap} bitmap Map to set a bit to true
       * @param {KeyEventBitmapIndex} index Index of bit to set
       */

    }, {
      key: "setBit",
      value: function setBit(bitmap, index) {
        bitmap[index] = true;
        return bitmap;
      }
      /**
       * Returns a new bitmap with the same values as the one passed to it
       * @param {KeyEventBitmap} original Bitmap to copy
       * @returns {KeyEventBitmap} Bitmap with the same values as the original
       */

    }, {
      key: "clone",
      value: function clone(original) {
        var bitmap = this.newBitmap();

        for (var i = 0; i < original.length; i++) {
          bitmap[i] = original[i];
        }

        return bitmap;
      }
    }, {
      key: "and",
      value: function and(bitmap1, bitmap2) {
        var newBitmap = [];

        for (var i = 0; i < bitmap1.length; i++) {
          newBitmap[i] = bitmap1[i] & bitmap2[i];
        }

        return newBitmap;
      }
    }]);

    return KeyEventBitmapManager;
  }();

  /**
   * @typedef {Number} KeyEventBitmapIndex index (0-2) of which position in an event bitmap
   * a particular event is located
   */

  /**
   * Enum for index values for KeyEventBitmaps
   * @readonly
   * @enum {KeyEventBitmapIndex}
   */
  var KeyEventBitmapIndex = {
    keydown: 0,
    keypress: 1,
    keyup: 2
  };

  /**
   * Dictionary of symbols that correspond to keys when pressed with the shift key
   * also held down. Used for combinations involving the shift key and one or more
   * others. (e.g. shift+1)
   */
  var ShiftedKeysDictionary = {
    '`': ['~'],
    '1': ['!'],
    '2': ['@',
    /** UK Keyboard: **/
    '"'],
    '3': ['#',
    /** UK Keyboard: **/
    '£'],
    '4': ['$'],
    '5': ['%'],
    '6': ['^'],
    '7': ['&'],
    '8': ['*'],
    '9': ['('],
    '0': [')'],
    '-': ['_'],
    '=': ['plus'],
    ';': [':'],
    "'": ['"',
    /** UK Keyboard: **/
    '@'],
    ',': ['<'],
    '.': ['>'],
    '/': ['?'],
    '\\': ['|'],
    '[': ['{'],
    ']': ['}'],

    /**
     * UK Keyboard:
     */
    '#': ['~']
  };

  /**
   * Returns the corresponding symbol or character for a particular key, when it is
   * pressed with the shift key also held down
   * @param {NormalizedKeyName} keyName Name of the key
   * @returns {ReactKeyName[]} Symbol or character for the key, when it is pressed with the
   *          shift key
   */

  function resolveShiftedAlias(keyName) {
    return ShiftedKeysDictionary[keyName] || [keyName.length === 1 ? keyName.toUpperCase() : keyName];
  }

  function hasKey(object, key) {
    return object.hasOwnProperty(key);
  }

  function invertArrayDictionary(dictionary) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return Object.keys(dictionary).reduce(function (memo, key) {
      var arrayValue = dictionary[key];
      arrayValue.forEach(function (shiftedKey) {
        if (!hasKey(memo, shiftedKey)) {
          memo[shiftedKey] = [];
        }

        memo[shiftedKey].push(key);
      });

      if (options.includeOriginal) {
        if (!hasKey(memo, key)) {
          memo[key] = [];
        }

        memo[key] = [].concat(_toConsumableArray(memo[key]), _toConsumableArray(arrayValue));
      }

      return memo;
    }, {});
  }

  var UnshiftedKeysDictionary = invertArrayDictionary(ShiftedKeysDictionary);

  /**
   * Returns the name of the key that must be pressed with the shift key, to yield the
   * specified symbol
   * @param {NormalizedKeyName} keyName Name of the key
   * @returns {ReactKeyName[]} Name of the key that must be pressed with the shift key, to
   *          yield the specified symbol
   */

  function resolveUnshiftedAlias(keyName) {
    return UnshiftedKeysDictionary[keyName] || [keyName.length === 1 ? keyName.toLowerCase() : keyName];
  }

  /**
   * A dictionary of key aliases to make it easier to specify key maps that work
   * across different keyboard layouts and operating systems - this builds on top
   * of what React already does.
   */
  var KeyOSAndLayoutAliasesDictionary = {};
  var KeyOSAndLayoutAliasesDictionary$1 = invertArrayDictionary(KeyOSAndLayoutAliasesDictionary, {
    includeOriginal: true
  });

  function isString(object) {
    return typeof object === 'string';
  }

  function stripSuperfluousWhitespace(target) {
    if (isString(target)) {
      return target.trim().replace(/\s+/g, ' ');
    }

    return target;
  }

  /**
   * A mapping between Mousetrap syntax and React syntax to support the use of both
   */
  var MousetrapToReactKeyNamesDictionary = {
    /**
     * Generic
     */
    'tab': 'Tab',
    'capslock': 'CapsLock',
    'shift': 'Shift',
    'meta': 'Meta',
    'alt': 'Alt',
    'ctrl': 'Control',
    'space': ' ',
    'spacebar': ' ',
    'escape': 'Escape',
    'esc': 'Escape',
    'left': 'ArrowLeft',
    'right': 'ArrowRight',
    'up': 'ArrowUp',
    'down': 'ArrowDown',

    /**
     * Mac
     */
    'return': 'Enter',
    'del': 'Delete',
    'command': 'Meta',
    'option': 'Alt',

    /**
     * Windows
     */
    'enter': 'Enter',
    'backspace': 'Backspace',
    'ins': 'Insert',
    'pageup': 'PageUp',
    'pagedown': 'PageDown',
    'end': 'End',
    'home': 'Home',
    'contextmenu': 'ContextMenu',
    'numlock': 'Clear'
  };

  /**
   * A mapping between key names and official names
   */
  var KeyShorthandDictionary = {
    'cmd': 'Meta'
  };

  /**
   * @typedef {String} KeyName Name of the keyboard key
   */

  /**
   * @typedef {String} ReactKeyName Name used by React to refer to key
   */

  /**
   * Returns the name for the specified key used by React. Supports translating key aliases
   * used by mousetrap to their counterparts in React
   * @param {KeyName} keyName Name of the key to resolve to the React equivalent
   * @returns {ReactKeyName} Name used by React to refer to the key
   */

  function standardizeKeyName(keyName) {
    var _keyName = keyName.toLowerCase();

    return MousetrapToReactKeyNamesDictionary[_keyName] || KeyShorthandDictionary[_keyName] || (keyName.match(/^f\d+$/) ? keyName.toUpperCase() : keyName);
  }

  /**
   * Dictionary of keys whose name is not a single symbol or character
   */
  var SpecialKeysDictionary = {
    Shift: true,
    Control: true,
    Alt: true,
    Meta: true,
    Enter: true,
    Tab: true,
    CapsLock: true,
    BackSpace: true,
    Escape: true
  };

  /**
   * Whether the specified key is a valid key name that is not a single character or
   * symbol
   * @param {ReactKeyName} key Name of the key
   * @returns {boolean} Whether the key is a valid special key
   */

  function isSpecialKey(key) {
    return !!SpecialKeysDictionary[key];
  }

  function isValidKey(keyName) {
    return isSpecialKey(keyName) || String.fromCharCode(keyName.charCodeAt(0)) === keyName;
  }

  var InvalidKeyNameError =
  /*#__PURE__*/
  function (_Error) {
    _inherits(InvalidKeyNameError, _Error);

    function InvalidKeyNameError() {
      _classCallCheck(this, InvalidKeyNameError);

      return _possibleConstructorReturn(this, _getPrototypeOf(InvalidKeyNameError).apply(this, arguments));
    }

    return InvalidKeyNameError;
  }(_wrapNativeSuper(Error));

  /**
   * Returns a normalized KeyCombinationString (with the key names in the combination
   * sorted in alphabetical order)
   * @param {KeyName[]} keys List of key names to sort and reconstitute as a
   *        KeyCombinationString
   * @returns {NormalizedKeyCombinationString} Normalized KeyCombinationString
   */

  function normalizedCombinationId(keys) {
    return keys.sort().join('+');
  }
  /**
   * Parses KeySequenceStrings and returns KeySequenceOptions
   *
   * Used primarily to parse strings describing hot key sequences and combinations
   * so that they may be matched with key events when they occur.
   * @class
   */


  var KeySequenceParser =
  /*#__PURE__*/
  function () {
    function KeySequenceParser() {
      _classCallCheck(this, KeySequenceParser);
    }

    _createClass(KeySequenceParser, null, [{
      key: "parse",

      /**
       * @typedef {Object} BasicKeyCombination Object containing the basic information that
       *          describes a key combination
       * @property {KeyCombinationString} id - String description of keys involved in the key
       *          combination
       * @property {Number} size - Number of keys involved in the combination
       * @property {Object.<KeyName, Boolean>} keyDictionary - Dictionary of key names involved
       *           in the key combination
       * @property {KeyEventBitmapIndex} eventBitmapIndex - Bitmap index for key event that
       *          the matcher should match on
       */

      /**
       * @typedef {String} KeySequenceString String describing a sequence of one or more key
       * combinations with whitespace separating key combinations in the sequence and '+'
       * separating keys within a key combination.
       */

      /**
       * @typedef {KeySequenceString} NormalizedKeySequenceId key sequence id with all of the
       * combination id's normalized
       */

      /**
       * @typedef {Object} BasicKeySequence Object containing the basic information that
       *          describes a key sequence
       * @property {NormalizedKeySequenceId} prefix - Normalized key sequence id
       * @property {Number} size - Number of combinations involved in the sequence
       */

      /**
       * @typedef {Object} KeySequenceObject Object containing description of a key sequence
       *          to compared against key events
       * @property {KeySequenceString} id Id describing key sequence used for matching against
       *            key events
       * @property {ComponentId} componentId Id associated with the HotKeys component
       *          that registered the key sequence
       * @property {BasicKeyCombination[]} sequence A list of key combinations involved in
       *            the sequence
       * @property {Number} size Number of key combinations in the key sequence
       * @property {KeyEventBitmapIndex} eventBitmapIndex Index that matches key event type
       * @property {ActionName} actionName Name of the action that should be triggered if a
       *           keyboard event matching the sequence and event type occur
       */

      /**
       * @typedef {Object} KeySequenceOptions Object containing the results of parsing a
       *          KeySequenceString
       * @property {BasicKeyCombination} combination Properties of the final combination in
       *        the sequence
       * @property {BasicKeySequence} sequence Properties of the sequence of keys leading
       *        up to the final combination
       */

      /**
       * Parses a KeySequenceString and returns a KeySequenceOptions object containing
       * information about the sequence in a format that is easier to query
       * @param {KeySequenceString} sequenceString String describing a key sequence to
       *        parse
       * @param {Object} options Configuration object describing how the KeySequenceString
       *        should be parsed.
       * @param {KeyEventBitmapIndex} options.eventBitmapIndex Event bitmap index indicating
       *        what key event the sequence should match
       * @param {Boolean} options.ensureValidKeys Whether to throw an exception if an invalid
       *        key name is found in the key combination string.
       * @returns {KeySequenceOptions} Object containing information about the key
       *        sequence described by the KeySequenceString
       */
      value: function parse(sequenceString) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var trimmedSequenceString = stripSuperfluousWhitespace(sequenceString);
        var keyCombinationsArray = trimmedSequenceString.split(' ');

        try {
          var nonTerminalCombinations = keyCombinationsArray.slice(0, keyCombinationsArray.length - 1);
          var terminalCombination = keyCombinationsArray[keyCombinationsArray.length - 1];
          var prefix = nonTerminalCombinations.map(function (keyCombination) {
            var keysInComboDict = parseCombination(keyCombination, options);
            return normalizedCombinationId(Object.keys(keysInComboDict));
          }).join(' ');
          var keysInComboDict = parseCombination(terminalCombination, options);
          var normalizedComboString = normalizedCombinationId(Object.keys(keysInComboDict));
          var combination = {
            id: normalizedComboString,
            keyDictionary: keysInComboDict,
            eventBitmapIndex: options.eventBitmapIndex,
            size: Object.keys(keysInComboDict).length
          };
          return {
            sequence: {
              prefix: prefix,
              size: nonTerminalCombinations.length + 1
            },
            combination: combination
          };
        } catch (InvalidKeyNameError) {
          return {
            sequence: null,
            combination: null
          };
        }
      }
    }]);

    return KeySequenceParser;
  }();
  /**
   * @typedef {String} KeyCombinationString String describing a combination of one or more
   * keys separated by '+'
   */

  /**
   * @typedef {KeyCombinationString} NormalizedKeyCombinationString key combination id where
   * the keys have been normalized (sorted in alphabetical order)
   */

  /**
   * @typedef {Object.<ReactKeyName, Boolean>} KeyDictionary Registry of the names
   * of keys in a particular combination, for easy/quick checking if a particular
   * key is in the key combination
   */

  /**
   * Parses a key combination string and returns the corresponding KeyDictionary
   * @param {KeyCombinationString} string Describes key combination
   * @param {Object} options Options hash of how the string should be parsed
   * @param {Boolean} options.ensureValidKeys Whether to throw an exception if an invalid
   *        key name is found in the key combination string.
   * @returns {KeyDictionary} Dictionary of keys in the parsed combination
   */


  function parseCombination(string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return string.replace(/^\+|(\s|[^+]\+)\+/, '$1plus').split('+').reduce(function (keyDictionary, keyName) {
      var finalKeyName = standardizeKeyName(keyName);

      if (options.ensureValidKeys) {
        if (!isValidKey(finalKeyName)) {
          throw new InvalidKeyNameError();
        }
      }

      keyDictionary[finalKeyName] = true;
      return keyDictionary;
    }, {});
  }

  /**
   * A dictionary of symbols for each key, when pressed with the alt key also held.
   * Used for combinations that involve the alt key and one or more others. (e.g.
   * shift+a)
   */
  var AltedKeysDictionary = {
    '`': ['`'],
    '1': ['¡'],
    '2': ['™'],
    '3': ['£'],
    '4': ['¢'],
    '5': ['∞'],
    '6': ['§'],
    '7': ['¶'],
    '8': ['•'],
    '9': ['ª'],
    '0': ['º'],
    '-': ['–'],
    '=': ['≠'],
    'a': ['å'],
    'b': ['∫'],
    'c': ['ç'],
    'd': ['∂'],
    'e': ['´'],
    'f': ['ƒ'],
    'g': ['©'],
    'h': ['˙'],
    'i': ['ˆ'],
    'j': ['∆'],
    'k': ['˚'],
    'l': ['¬'],
    'm': ['µ'],
    'n': ['˜'],
    'o': ['ø'],
    'p': ['π'],
    'q': ['œ'],
    'r': ['®'],
    's': ['ß'],
    't': ['†'],
    'u': ['¨'],
    'v': ['√'],
    'w': ['∑'],
    'x': ['≈'],
    'y': ['¥'],
    'z': ['Ω'],
    '[': ['“'],
    ']': ['‘'],
    "\\": ['«'],
    "'": ['æ'],
    ';': ['…'],
    ',': ['≤'],
    '.': ['≥'],
    '/': ['÷']
  };

  var UnaltedKeysDictionary = invertArrayDictionary(AltedKeysDictionary);

  /**
   * Returns the name of the key that must be pressed with the alt key, to yield the
   * specified symbol
   * @param {ReactKeyName} keyName Name of the key
   * @returns {ReactKeyName[]} Name of the key that must be pressed with the alt key, to
   *          yield the specified symbol
   */

  function resolveUnaltedAlias(keyName) {
    return UnaltedKeysDictionary[keyName] || [keyName];
  }

  /**
   * Returns the corresponding symbol or character for a particular key, when it is
   * pressed with the alt key also held down
   * @param {NormalizedKeyName} keyName Name of the key
   * @returns {ReactKeyName[]} Symbol or character for the key, when it is pressed with the
   *          alt key
   */

  function resolveAltedAlias(keyName) {
    return AltedKeysDictionary[keyName] || [keyName];
  }

  /**
   * A dictionary of symbols for each key, when pressed with the alt and shift key also
   * held. Used for combinations that involve the shift and alt key and one or more
   * others (e.g. shift+alt+a)
   */
  var AltShiftedKeysDictionary = {
    '`': ['`'],
    '1': ['⁄'],
    '2': ['€'],
    '3': ['‹'],
    '4': ['›'],
    '5': ['ﬁ'],
    '6': ['ﬂ'],
    '7': ['‡'],
    '8': ['°'],
    '9': ['·'],
    '0': ['‚'],
    '-': ['—'],
    '=': ['±'],
    'a': ['Å'],
    'b': ['ı'],
    'c': ['Ç'],
    'd': ['Î'],
    'e': ['´'],
    'f': ['Ï'],
    'g': ['˝'],
    'h': ['Ó'],
    'i': ['ˆ'],
    'j': ['Ô'],
    'k': [''],
    'l': ['Ò'],
    'm': ['Â'],
    'n': ['˜'],
    'o': ['Ø'],
    'p': ['π'],
    'q': ['Œ'],
    'r': ['‰'],
    's': ['Í'],
    't': ['Î'],
    'u': ['¨'],
    'v': ['◊'],
    'w': ['„'],
    'x': ['˛'],
    'y': ['Á'],
    'z': ['¸'],
    '[': ['”'],
    ']': ['’'],
    "\\": ['»'],
    "'": ['Æ'],
    ';': ['Ú'],
    ',': ['¯'],
    '.': ['˘']
  };

  var UnaltShiftedKeysDictionary = invertArrayDictionary(AltShiftedKeysDictionary);

  /**
   * Returns the name of the key that must be pressed with the shift and alt keys,
   * to yield the specified symbol
   * @param {ReactKeyName} keyName Name of the key
   * @returns {ReactKeyName[]} Name of the key that must be pressed with the alt key, to
   *          yield the specified symbol
   */

  function resolveUnaltShiftedAlias(keyName) {
    return UnaltShiftedKeysDictionary[keyName] || resolveUnshiftedAlias(keyName);
  }

  /**
   * Returns the corresponding symbol or character for a particular key, when it is
   * pressed with the alt and shift keys also held down
   * @param {NormalizedKeyName} keyName Name of the key
   * @returns {ReactKeyName[]} Symbol or character for the key, when it is pressed with the
   *          alt and shit keys
   */

  function resolveAltShiftedAlias(keyName) {
    return AltShiftedKeysDictionary[keyName] || [keyName];
  }

  /**
   * Serializes instances of KeyCombinationRecord to KeyCombinationString.
   *
   * Used primarily to serialize string representations of key events as they happen.
   * @class
   */

  var KeyCombinationSerializer =
  /*#__PURE__*/
  function () {
    function KeyCombinationSerializer() {
      _classCallCheck(this, KeyCombinationSerializer);
    }

    _createClass(KeyCombinationSerializer, null, [{
      key: "serialize",

      /**
       * Returns a string representation of a single KeyCombinationRecord
       * @param {KeyCombinationRecord} keyCombination KeyCombinationRecord to serialize
       * @returns {string[]} Serialization of KeyCombinationRecord
       */
      value: function serialize(keyCombination) {
        var combinationIncludesShift = keyCombination['Shift'];
        var combinationIncludesAlt = keyCombination['Alt'];
        var keyCombinationIdDict = {};
        var sortedKeys = Object.keys(keyCombination).sort();
        sortedKeys.forEach(function (keyName) {
          var keyAliases = [];

          if (combinationIncludesShift) {
            if (combinationIncludesAlt) {
              var unaltShiftedKeyNames = resolveUnaltShiftedAlias(keyName);
              var altShiftedKeyNames = resolveAltShiftedAlias(keyName);
              keyAliases = [].concat(_toConsumableArray(keyAliases), [keyName], _toConsumableArray(unaltShiftedKeyNames), _toConsumableArray(altShiftedKeyNames));
            } else {
              var unshiftedKeyNames = resolveUnshiftedAlias(keyName);
              var shiftedKeyNames = resolveShiftedAlias(keyName);
              keyAliases = [].concat(_toConsumableArray(keyAliases), [keyName], _toConsumableArray(unshiftedKeyNames), _toConsumableArray(shiftedKeyNames));
            }
          } else if (combinationIncludesAlt) {
            var unaltedKeyNames = resolveUnaltedAlias(keyName);
            var altedKeyNames = resolveAltedAlias(keyName);
            keyAliases = [].concat(_toConsumableArray(keyAliases), [keyName], _toConsumableArray(unaltedKeyNames), _toConsumableArray(altedKeyNames));
          } else {
            keyAliases.push(keyName);
            var keyAlias = KeyOSAndLayoutAliasesDictionary$1[keyName];

            if (keyAlias) {
              keyAliases = [].concat(_toConsumableArray(keyAliases), _toConsumableArray(keyAlias));
            }
          }

          var keyCombinationIds = Object.keys(keyCombinationIdDict);

          if (keyCombinationIds.length > 0) {
            keyCombinationIds.forEach(function (keyCombinationId) {
              keyAliases.forEach(function (keyAlias) {
                keyCombinationIdDict[keyCombinationId + "+".concat(keyAlias)] = _objectSpread({}, keyCombinationIdDict[keyCombinationId], _defineProperty({}, keyAlias, true));
              });
              delete keyCombinationIdDict[keyCombinationId];
            });
          } else {
            keyAliases.forEach(function (keyAlias) {
              keyCombinationIdDict[keyAlias] = _defineProperty({}, keyAlias, true);
            });
          }
        });
        return Object.values(keyCombinationIdDict).map(function (keysInCombo) {
          return Object.keys(keysInCombo).sort().join('+');
        });
      }
      /**
       * Whether the specified key sequence is valid (is of the correct format and contains
       * combinations consisting entirely of valid keys)
       * @param {KeySequenceString} keySequence Key sequence to validate
       * @returns {boolean} Whether the key sequence is valid
       */

    }, {
      key: "isValidKeySerialization",
      value: function isValidKeySerialization(keySequence) {
        if (keySequence.length > 0) {
          return !!KeySequenceParser.parse(keySequence, {
            ensureValidKeys: true
          }).combination;
        } else {
          return false;
        }
      }
    }]);

    return KeyCombinationSerializer;
  }();

  function arrayFrom(target) {
    if (Array.isArray(target)) {
      return target;
    } else if (!target) {
      return [];
    } else {
      return [target];
    }
  }

  /**
   * Returns the element in an array at a particular index from the end
   * @param {Array.<T>} array Array to iterate over to find the item
   * @param {Number} placesFromEnd Number of places from the end of the array to find
   *        the item to return
   * @returns {T} The item found in the array at the particular index
   * @template T
   */
  function indexFromEnd(array, placesFromEnd) {
    return array[array.length - (placesFromEnd + 1)];
  }

  function isObject(target) {
    return !Array.isArray(target) && _typeof(target) === 'object' && target !== null;
  }

  function isEmpty(target) {
    if (isObject(target)) {
      return Object.keys(target).length === 0;
    } else {
      return !target ? true : target.length === 0;
    }
  }

  /**
   * Returns the name of the event at a specified event bitmap index
   * @param {KeyEventBitmapIndex} eventBitmapIndex
   * @returns {KeyEventName} Name of the key event
   */
  function describeKeyEventType(eventBitmapIndex) {
    switch (parseInt(eventBitmapIndex, 10)) {
      case 0:
        return 'keydown';

      case 1:
        return 'keypress';

      default:
        return 'keyup';
    }
  }

  /**
   * Enum for index values for KeyEventBitmaps
   * @readonly
   * @enum {Number}
   */
  var KeyEventSequenceIndex = {
    previous: 0,
    current: 1
  };

  /**
   * Returns a list of accepted aliases for the specified key
   * @param {NormalizedKeyName} keyName Name of the key
   * @returns {ReactKeyName[]} List of key aliases
   */

  function resolveKeyAlias(keyName) {
    return KeyOSAndLayoutAliasesDictionary$1[keyName] || [keyName];
  }

  var ModifierFlagsDictionary = {
    Shift: ['shiftKey'],
    Meta: ['metaKey'],
    Control: ['ctrlKey'],
    Alt: ['altKey']
  };

  function without(target) {
    var attributesToOmit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var omitDict = dictionaryFrom(arrayFrom(attributesToOmit));

    if (Array.isArray(target)) {
      return target.reduce(function (memo, element) {
        if (!(omitDict[element] && (options.stringifyFirst || omitDict[element].value === element))) {
          memo.push(element);
        }

        return memo;
      }, []);
    } else if (isObject(target)) {
      return Object.keys(target).reduce(function (memo, key) {
        if (!omitDict[key]) {
          memo[key] = target[key];
        }

        return memo;
      }, {});
    } else {
      return target;
    }
  }

  /**
   * Dictionary of keys that do not natively have a keypress event
   */
  var KeysWithoutPressEventDictionary = {
    Shift: true,
    Control: true,
    Alt: true,
    Meta: true,
    Enter: true,
    Tab: true,
    BackSpace: true,
    ArrowRight: true,
    ArrowLeft: true,
    ArrowUp: true,
    ArrowDown: true,

    /**
     * Caps lock is a strange case where it not only does not have a key press event,
     * but it's keyup event is triggered when caps lock is toggled off
     */
    CapsLock: true
  };

  for (var i = 1; i < 13; i++) {
    KeysWithoutPressEventDictionary["F".concat(i)] = true;
  }

  /**
   * Whether the specified key name is for a key that has a native keypress event
   * @param {NormalizedKeyName} keyName Name of the key
   * @returns {Boolean} Whether the key has a native keypress event
   */

  function hasKeyPressEvent(keyName) {
    return !KeysWithoutPressEventDictionary[keyName];
  }

  /**
   * Defines common behaviour for key event strategies
   * @abstract
   * @class
   */

  var AbstractKeyEventStrategy =
  /*#__PURE__*/
  function () {
    _createClass(AbstractKeyEventStrategy, null, [{
      key: "emptyKeyCombination",

      /********************************************************************************
       * Init & Reset
       ********************************************************************************/

      /**
       * Returns a new, empty key combination
       * @returns {KeyCombinationRecord} A new, empty key combination
       */
      value: function emptyKeyCombination() {
        return {
          keys: {},
          ids: [''],
          keyAliases: {}
        };
      }
      /**
       * Creates a new instance of a event strategy (this class is an abstract one and
       * not intended to be instantiated directly)
       * @param {Object} options Options for how event strategy should behave
       * @param {Logger} options.logger The Logger to use to report event strategy actions
       * @param {KeyEventManager} keyEventManager KeyEventManager used for passing
       *        messages between key event strategies
       */

    }]);

    function AbstractKeyEventStrategy() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var keyEventManager = arguments.length > 1 ? arguments[1] : undefined;

      _classCallCheck(this, AbstractKeyEventStrategy);

      this.logger = options.logger || new Logger('warn');
      /**
       * @typedef {Number} ComponentId Unique index associated with every HotKeys component
       * as it becomes active.
       *
       * For focus-only components, this happens when the component is focused. The HotKeys
       * component closest to the DOM element in focus gets the smallest number (0) and
       * those further up the render tree get larger (incrementing) numbers. When a different
       * element is focused (triggering the creation of a new focus tree) all component indexes
       * are reset (de-allocated) and re-assigned to the new tree of HotKeys components that
       * are now in focus.
       *
       * For global components, component indexes are assigned when a HotKeys component is
       * mounted, and de-allocated when it unmounts. The component index counter is never reset
       * back to 0 and just keeps incrementing as new components are mounted.
       */

      /**
       * Counter to maintain what the next component index should be
       * @type {ComponentId}
       */

      this.componentId = -1;
      /**
       * Reference to key event manager, so that information may pass between the
       * global strategy and the focus-only strategy
       * @type {KeyEventManager}
       */

      this.keyEventManager = keyEventManager;
      this.keyMapRegistry = {};
      this.componentRegistry = {};
      this.rootComponentId = null;

      this._reset();

      this.resetKeyCombinationHistory();
    }
    /**
     * Resets all strategy state to the values it had when it was first created
     * @protected
     */


    _createClass(AbstractKeyEventStrategy, [{
      key: "_reset",
      value: function _reset() {
        this._initRegisteredKeyMapsState();

        this._initHandlerResolutionState();
      }
      /**
       * Resets all state used to record information about the keymaps that HotKey
       * components have registered.
       *
       * After initialization, this state is generally maintained manually by
       * the _buildKeyMatcherMap() method and this method should not be called.
       */

    }, {
      key: "_initRegisteredKeyMapsState",
      value: function _initRegisteredKeyMapsState() {
        /**
         * Object containing a component's defined key maps and handlers
         * @typedef {Object} ComponentOptions
         * @property {ActionDictionary} actions - Dictionary of actions the component
         *          has defined in its keymap
         * @property {HandlersMap} handlers - Dictionary of handler functions the
         *          component has defined
         * @property {ComponentId} componentId - Index of the component the options
         *          correspond with
         */

        /**
         * List of actions and handlers registered by each component currently in focus.
         * The component closest to the element in focus is last in the list.
         * @type {ComponentOptions[]}
         */
        this.componentList = [];
        /**
         * Counter for the longest sequence registered by the HotKeys components currently
         * in focus. Allows setting an upper bound on the length of the key event history
         * that must be kept.
         * @type {Number}
         */

        this.longestSequence = 1;
        /**
         * The component index of the component that defines the longest key sequence, so
         * we can quickly determine if the longest sequence needs to be re-calculated when
         * that component is updated or removed.
         * @type {ComponentId}
         */

        this.longestSequenceComponentIndex = null;
        /**
         * Bitmap to record whether there is at least one keymap bound to each event type
         * (keydown, keypress or keyup) so that we can skip trying to find a matching keymap
         * on events where we know there is none to find
         * @type {KeyEventBitmap}
         */

        this.keyMapEventBitmap = KeyEventBitmapManager.newBitmap();
        /**
         * Set of ComponentOptions indexed by ComponentId to allow efficient retrieval
         * when components need to be updated or unmounted by their ComponentId
         * @type {Object<ComponentId, ComponentOptions>}
         */

        this.componentIdDict = {};
      }
      /**
       * Resets the state of the values used to resolve which handler function should be
       * called when key events match a registered key map
       * @protected
       */

    }, {
      key: "_initHandlerResolutionState",
      value: function _initHandlerResolutionState() {
        /**
         * List of mappings from key sequences to handlers that is constructed on-the-fly
         * as key events propagate up the render tree
         */
        this.keyMaps = null;
        /**
         * Index marking the number of places from the end of componentList for which the
         * keyMaps have been matched with event handlers. Used to build this.keyMaps as
         * key events propagate up the React tree.
         * @type {Number}
         */

        this.handlerResolutionSearchIndex = 0;
        /**
         * Array of counters - one for each component - to keep track of how many handlers
         * for that component still need actions assigned to them
         * @type {Number[]}
         */

        this.unmatchedHandlerStatus = null;
        /**
         * A dictionary of handlers to the components that register them. This is populated
         * as this.handlerResolutionSearchIndex increases, moving from the end of this.componentList to the
         * front, populating this.keyMaps as needed
         * @type {Object<ActionName, ComponentId>}
         */

        this.handlersDictionary = {};
        /**
         * A dictionary of sequences already encountered in the process of building the
         * list of keyMaps on the fly, as key events propagate up the component tree
         */

        this.keySequencesDictionary = {};
      }
      /**
       * Reset the state values that record the current and recent state of key events
       * @param {Object} options An options hash
       * @param {Boolean} options.force Whether to force a hard reset of the key
       *        combination history.
       */

    }, {
      key: "resetKeyCombinationHistory",
      value: function resetKeyCombinationHistory() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        /**
         * Whether the current key combination includes at least one keyup event - indicating
         * that the current combination is ending (and keys are being released)
         */
        this.keyCombinationIncludesKeyUp = false;
        this.keypressEventsToSimulate = [];
        this.keyupEventsToSimulate = [];

        if (!this.keyCombinationHistory || this.keyCombinationHistory.length < 1 || options.force) {
          this.keyCombinationHistory = [];
        } else {
          var currentKeyCombination = this._getCurrentKeyCombination();

          var keysStillPressed = Object.keys(currentKeyCombination.keys).reduce(function (memo, keyName) {
            var keyState = currentKeyCombination.keys[keyName];
            var currentKeyState = keyState[KeyEventSequenceIndex.current];

            if (currentKeyState[KeyEventBitmapIndex.keydown] && !currentKeyState[KeyEventBitmapIndex.keyup]) {
              memo[keyName] = keyState;
            }

            return memo;
          }, {});
          this.keyCombinationHistory = [{
            keys: keysStillPressed,
            ids: KeyCombinationSerializer.serialize(keysStillPressed),
            keyAliases: this._buildCombinationKeyAliases(keysStillPressed)
          }];
        }
      }
      /********************************************************************************
       * Generating key maps
       ********************************************************************************/

      /**
       * Returns a mapping of all of the application's actions and the key sequences
       * needed to trigger them.
       *
       * @returns {ApplicationKeyMap} The application's key map
       */

    }, {
      key: "getApplicationKeyMap",
      value: function getApplicationKeyMap() {
        if (this.rootComponentId === null) {
          return {};
        }

        return this._buildApplicationKeyMap([this.rootComponentId], {});
      }
    }, {
      key: "_buildApplicationKeyMap",
      value: function _buildApplicationKeyMap(componentIds, keyMapSummary) {
        var _this = this;

        componentIds.forEach(function (componentId) {
          var component = _this.componentRegistry[componentId];
          var keyMap = _this.keyMapRegistry[componentId];

          if (keyMap) {
            Object.keys(keyMap).forEach(function (actionName) {
              keyMapSummary[actionName] = [];
              arrayFrom(keyMap[actionName]).forEach(function (keySequenceOptions) {
                var sequence = function () {
                  if (isObject(keySequenceOptions)) {
                    return keySequenceOptions.sequence;
                  } else {
                    return keySequenceOptions;
                  }
                }();

                keyMapSummary[actionName].push(sequence);
              });
            });
          }

          _this._buildApplicationKeyMap(component.childIds, keyMapSummary);
        });
        return keyMapSummary;
      }
      /********************************************************************************
       * Registering key maps
       ********************************************************************************/

      /**
       * Registers a new mounted component's key map so that it can be included in the
       * application's key map
       * @param {KeyMap} keyMap - Map of actions to key expressions
       * @returns {ComponentId} Unique component ID to assign to the focused HotKeys
       *          component and passed back when handling a key event
       */

    }, {
      key: "registerKeyMap",
      value: function registerKeyMap(keyMap) {
        this.componentId += 1;
        this.keyMapRegistry[this.componentId] = keyMap;
        this.componentRegistry[this.componentId] = newComponentRegistryItem();
        return this.componentId;
      }
      /**
       * Re-registers (updates) a mounted component's key map
       * @param {ComponentId} componentId - Id of the component that the keyMap belongs to
       * @param {KeyMap} keyMap - Map of actions to key expressions
       */

    }, {
      key: "reregisterKeyMap",
      value: function reregisterKeyMap(componentId, keyMap) {
        this.keyMapRegistry[componentId] = keyMap;
      }
      /**
       * Registers that a component has now mounted, and declares its parent hot keys
       * component id so that actions may be properly resolved
       * @param {ComponentId} componentId - Id of the component that has mounted
       * @param {ComponentId} parentId - Id of the parent hot keys component
       */

    }, {
      key: "registerComponentMount",
      value: function registerComponentMount(componentId, parentId) {
        if (!isUndefined(parentId)) {
          this.componentRegistry[componentId].parentId = parentId;
          this.componentRegistry[parentId].childIds.push(componentId);
        } else {
          this.rootComponentId = componentId;
        }
      }
      /**
       * De-registers (removes) a mounted component's key map from the registry
       * @param {ComponentId} componentId - Id of the component that the keyMap
       *        belongs to
       */

    }, {
      key: "deregisterKeyMap",
      value: function deregisterKeyMap(componentId) {
        var parentId = this.componentRegistry[componentId].parentId;
        var parent = this.componentRegistry[parentId];

        if (parent) {
          parent.childIds = without(parent.childIds, componentId);
        }

        delete this.componentRegistry[componentId];
        delete this.keyMapRegistry[componentId];

        if (componentId === this.rootComponentId) {
          this.rootComponentId = null;
        }
      }
      /********************************************************************************
       * Registering key maps and handlers
       ********************************************************************************/

      /**
       * Registers the hotkeys defined by a HotKeys component
       * @param {ComponentId} componentId - Index of the component
       * @param {KeyMap} actionNameToKeyMap - Definition of actions and key maps defined
       *        in the HotKeys component
       * @param {HandlersMap} actionNameToHandlersMap - Map of ActionNames to handlers
       *        defined in the HotKeys component
       * @param {Object} options - Hash of options that configure how the key map is built.
       * @protected
       */

    }, {
      key: "_addComponentToList",
      value: function _addComponentToList(componentId) {
        var actionNameToKeyMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var actionNameToHandlersMap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var options = arguments.length > 3 ? arguments[3] : undefined;

        var componentOptions = this._buildComponentOptions(componentId, actionNameToKeyMap, actionNameToHandlersMap, options);

        this.componentList.push(componentOptions);

        this._setComponentPosition(componentId, this.componentList.length - 1);
      }
      /**
       * Builds the internal representation that described the options passed to a HotKeys
       * component
       * @param {ComponentId} componentId - Index of the component
       * @param {KeyMap} actionNameToKeyMap - Definition of actions and key maps defined
       *        in the HotKeys component
       * @param {HandlersMap} actionNameToHandlersMap - Map of ActionNames to handlers
       *        defined in the HotKeys component
       * @param {Object} options - Hash of options that configure how the key map is built.
       * @param {String} options.defaultKeyEvent - The default key event to use for any
       *        action that does not explicitly define one.
       * @returns {ComponentOptions} Options for the specified component
       * @protected
       */

    }, {
      key: "_buildComponentOptions",
      value: function _buildComponentOptions(componentId, actionNameToKeyMap, actionNameToHandlersMap, options) {
        var _this$_applyHardSeque = this._applyHardSequences(actionNameToKeyMap, actionNameToHandlersMap),
            hardSequenceKeyMap = _this$_applyHardSeque.keyMap,
            includingHardSequenceHandlers = _this$_applyHardSeque.handlers;

        return {
          actions: this._buildActionDictionary(_objectSpread({}, actionNameToKeyMap, hardSequenceKeyMap), options, componentId),
          handlers: includingHardSequenceHandlers,
          componentId: componentId,
          options: options
        };
      }
      /**
       * Applies hard sequences (handlers attached to actions with names that are valid
       * KeySequenceStrings) that implicitly define a corresponding action name.
       * @param {KeyMap} actionNameToKeyMap - KeyMap specified by HotKeys component
       * @param {HandlersMap} actionNameToHandlersMap - HandlersMap specified by HotKeys
       *        component
       * @returns {{keyMap: {}, handlers: {}}} Object containing keymap and handlers map
       *        with the hard sequence actions applied
       * @private
       */

    }, {
      key: "_applyHardSequences",
      value: function _applyHardSequences(actionNameToKeyMap, actionNameToHandlersMap) {
        if (Configuration.option('enableHardSequences')) {
          return Object.keys(actionNameToHandlersMap).reduce(function (memo, actionNameOrKeyExpression) {
            var actionNameIsInKeyMap = !!actionNameToKeyMap[actionNameOrKeyExpression];

            if (!actionNameIsInKeyMap && KeyCombinationSerializer.isValidKeySerialization(actionNameOrKeyExpression)) {
              memo.keyMap[actionNameOrKeyExpression] = actionNameOrKeyExpression;
            }

            memo.handlers[actionNameOrKeyExpression] = actionNameToHandlersMap[actionNameOrKeyExpression];
            return memo;
          }, {
            keyMap: {},
            handlers: {}
          });
        } else {
          return {
            keyMap: actionNameToKeyMap,
            handlers: actionNameToHandlersMap
          };
        }
      }
      /**
       * Object containing all the information required to match a key event to an action
       * @typedef {Object} ActionConfiguration
       * @property {KeyCombinationString} id - String description of keys involved in the
       *          final key combination in the sequence
       * @property {ActionName} actionName - Name of the action associated with the key map
       * @property {NormalizedKeySequenceId} prefix - String describing sequence of key
       *          combinations involved key map, before the final key combination
       * @property {Number} sequenceLength - Number of combinations involved in the
       *           sequence
       * @property {Number} size - Number of keys involved in the combination
       * @property {Object.<KeyName, Boolean>} keyDictionary - Dictionary of key names involved
       *           in the key combination
       * @property {KeyEventBitmapIndex} eventBitmapIndex - Bitmap index for key event that
       *          the matcher should match on
       */

      /**
       * A mapping between ActionNames and FullKeyEventOptions
       * @typedef {Object<ActionName,ActionConfiguration>} ActionDictionary
       */

      /**
       * Returns a mapping between ActionNames and FullKeyEventOptions
       * @param {KeyMap} actionNameToKeyMap - Mapping of ActionNames to key sequences.
       * @param {Object} options - Hash of options that configure how the key map is built.
       * @param {String} options.defaultKeyEvent - The default key event to use for any
       *        action that does not explicitly define one.
       * @param {ComponentId} componentId Index of the component the matcher belongs to
       * @return {ActionDictionary} Map from ActionNames to FullKeyEventOptions
       * @private
       */

    }, {
      key: "_buildActionDictionary",
      value: function _buildActionDictionary(actionNameToKeyMap, options, componentId) {
        var _this2 = this;

        return Object.keys(actionNameToKeyMap).reduce(function (keyMapMemo, actionName) {
          var keyMapOptions = arrayFrom(actionNameToKeyMap[actionName]);
          keyMapOptions.forEach(function (keyMapOption) {
            var _ref = function () {
              if (isObject(keyMapOption)) {
                var _sequence = keyMapOption.sequence,
                    action = keyMapOption.action;
                return {
                  keySequence: _sequence,
                  eventBitmapIndex: isUndefined(action) ? KeyEventBitmapIndex[options.defaultKeyEvent] : KeyEventBitmapIndex[action]
                };
              } else {
                return {
                  keySequence: keyMapOption,
                  eventBitmapIndex: KeyEventBitmapIndex[options.defaultKeyEvent]
                };
              }
            }(),
                keySequence = _ref.keySequence,
                eventBitmapIndex = _ref.eventBitmapIndex;

            var _KeySequenceParser$pa = KeySequenceParser.parse(keySequence, {
              eventBitmapIndex: eventBitmapIndex
            }),
                sequence = _KeySequenceParser$pa.sequence,
                combination = _KeySequenceParser$pa.combination;

            if (sequence.size > _this2.longestSequence) {
              _this2.longestSequence = sequence.size;
              _this2.longestSequenceComponentIndex = componentId;
            }
            /**
             * Record that there is at least one key sequence in the focus tree bound to
             * the keyboard event
             */


            KeyEventBitmapManager.setBit(_this2.keyMapEventBitmap, eventBitmapIndex);

            if (!keyMapMemo[actionName]) {
              keyMapMemo[actionName] = [];
            }

            keyMapMemo[actionName].push(_objectSpread({
              prefix: sequence.prefix,
              actionName: actionName,
              sequenceLength: sequence.size
            }, combination));
          });
          return keyMapMemo;
        }, {});
      }
      /********************************************************************************
       * Recording key events
       ********************************************************************************/

      /**
       * Record of the combination of keys that are currently being pressed
       * @typedef {Object} KeyCombinationRecord
       * @property {Object<ReactKeyName, KeyEventBitmap[]>} keys - A dictionary
       * of keys that have been pressed down at once. The keys of the map are the lowercase
       * names of the keyboard keys. May contain 1 or more keyboard keys.
       * @property {KeySequenceString} ids - Serialization of keys currently pressed in
       *        combination
       * @property {Object<ReactKeyName, ReactKeyName>} keyAliases - Dictionary of key
       *      aliases, when modifier keys like alt or shift are pressed.
       */

      /**
       * Returns the current key combination, i.e. the key combination that represents
       * the current key events.
       * @returns {KeyCombinationRecord} The current key combination
       * @protected
       */

    }, {
      key: "_getCurrentKeyCombination",
      value: function _getCurrentKeyCombination() {
        if (this.keyCombinationHistory.length > 0) {
          return this.keyCombinationHistory[this.keyCombinationHistory.length - 1];
        } else {
          return this.constructor.emptyKeyCombination();
        }
      }
      /**
       * Adds a key event to the current key combination (as opposed to starting a new
       * keyboard combination).
       * @param {ReactKeyName} keyName - Name of the key to add to the current combination
       * @param {KeyEventBitmapIndex} bitmapIndex - Index in bitmap to set to true
       * @protected
       */

    }, {
      key: "_addToCurrentKeyCombination",
      value: function _addToCurrentKeyCombination(keyName, bitmapIndex) {
        if (this.keyCombinationHistory.length === 0) {
          this.keyCombinationHistory.push(this.constructor.emptyKeyCombination());
        }

        var keyCombination = this._getCurrentKeyCombination();

        var keyAlias = getKeyAlias(keyCombination, keyName);
        var existingBitmap = getKeyState(keyCombination, keyName);

        if (!existingBitmap) {
          keyCombination.keys[keyAlias] = [KeyEventBitmapManager.newBitmap(), KeyEventBitmapManager.newBitmap(bitmapIndex)];
        } else {
          keyCombination.keys[keyAlias] = [KeyEventBitmapManager.clone(existingBitmap[1]), KeyEventBitmapManager.newBitmap(bitmapIndex)];
        }

        keyCombination.ids = KeyCombinationSerializer.serialize(keyCombination.keys);
        keyCombination.keyAliases = this._buildCombinationKeyAliases(keyCombination.keys);

        if (bitmapIndex === KeyEventBitmapIndex.keyup) {
          this.keyCombinationIncludesKeyUp = true;
        }
      }
      /**
       * Adds a new KeyCombinationRecord to the event history and resets the
       * keyCombinationIncludesKeyUp flag to false.
       * @param {ReactKeyName} keyName - Name of the keyboard key to add to the new
       *        KeyCombinationRecord
       * @param {KeyEventBitmapIndex} eventBitmapIndex - Index of bit to set to true in new
       *        KeyEventBitmap
       * @protected
       */

    }, {
      key: "_startNewKeyCombination",
      value: function _startNewKeyCombination(keyName, eventBitmapIndex) {
        if (this.keyCombinationHistory.length > this.longestSequence) {
          /**
           * We know the longest key sequence registered for the currently focused
           * components, so we don't need to keep a record of history longer than
           * that
           */
          this.keyCombinationHistory.shift();
        }

        var lastKeyCombination = this._getCurrentKeyCombination();

        var keys = _objectSpread({}, this._withoutKeyUps(lastKeyCombination), _defineProperty({}, keyName, [KeyEventBitmapManager.newBitmap(), KeyEventBitmapManager.newBitmap(eventBitmapIndex)]));

        this.keyCombinationHistory.push({
          keys: keys,
          ids: KeyCombinationSerializer.serialize(keys),
          keyAliases: this._buildCombinationKeyAliases(keys)
        });
        this.keyCombinationIncludesKeyUp = false;
      }
      /**
       * Returns a new KeyCombinationRecord without the keys that have been
       * released (had the keyup event recorded). Essentially, the keys that are
       * currently still pressed down at the time a key event is being handled.
       * @param {KeyCombinationRecord} keyCombinationRecord Record of keys currently
       *        pressed down that should have the release keyed omitted from
       * @returns {KeyCombinationRecord} New KeyCombinationRecord with all of the
       *        keys with keyup events omitted
       * @private
       */

    }, {
      key: "_withoutKeyUps",
      value: function _withoutKeyUps(keyCombinationRecord) {
        return Object.keys(keyCombinationRecord.keys).reduce(function (memo, keyName) {
          var keyState = keyCombinationRecord.keys[keyName];

          if (!keyState[KeyEventSequenceIndex.current][KeyEventBitmapIndex.keyup]) {
            memo[keyName] = keyState;
          }

          return memo;
        }, {});
      }
    }, {
      key: "_shouldSimulate",
      value: function _shouldSimulate(eventType, keyName) {
        var keyHasNativeKeypress = hasKeyPressEvent(keyName);

        if (eventType === KeyEventBitmapIndex.keypress) {
          return !keyHasNativeKeypress || keyHasNativeKeypress && this._keyIsCurrentlyDown('Meta');
        } else if (eventType === KeyEventBitmapIndex.keyup) {
          return keyHasNativeKeypress && keyIsCurrentlyTriggeringEvent(this._getCurrentKeyState('Meta'), KeyEventBitmapIndex.keyup);
        }

        return false;
      }
    }, {
      key: "_cloneAndMergeEvent",
      value: function _cloneAndMergeEvent(event, extra) {
        var eventAttributes = Object.keys(ModifierFlagsDictionary).reduce(function (memo, eventAttribute) {
          memo[eventAttribute] = event[eventAttribute];
          return memo;
        }, {});
        return _objectSpread({}, eventAttributes, extra);
      }
      /********************************************************************************
       * Matching and calling handlers
       ********************************************************************************/

    }, {
      key: "_callMatchingHandlerClosestToEventTarget",
      value: function _callMatchingHandlerClosestToEventTarget(event, keyName, eventBitmapIndex, componentPosition, componentSearchIndex) {
        var _this3 = this;

        if (!this.keyMaps || !this.unmatchedHandlerStatus) {
          this.keyMaps = [];
          this.unmatchedHandlerStatus = [];
          this.componentList.forEach(function (_ref2) {
            var handlers = _ref2.handlers;

            _this3.unmatchedHandlerStatus.push([Object.keys(handlers).length, {}]);

            _this3.keyMaps.push({});
          });
        }

        while (componentSearchIndex <= componentPosition) {
          var unmatchedHandlersStatus = this.unmatchedHandlerStatus[componentSearchIndex];
          var unmatchedHandlersCount = unmatchedHandlersStatus[0];

          if (unmatchedHandlersCount > 0) {
            var _loop = function _loop() {
              var _this3$componentList$ = _this3.componentList[_this3.handlerResolutionSearchIndex],
                  handlers = _this3$componentList$.handlers,
                  actions = _this3$componentList$.actions;
              /**
               * Add current component's handlers to the handlersDictionary so we know
               * which component has defined them
               */

              Object.keys(handlers).forEach(function (actionName) {
                if (!_this3.handlersDictionary[actionName]) {
                  _this3.handlersDictionary[actionName] = [];
                }

                _this3.handlersDictionary[actionName].push(_this3.handlerResolutionSearchIndex);
              });
              /**
               * Iterate over the actions of a component (starting with the current component
               * and working through its ancestors), matching them to the current component's
               * handlers
               */

              Object.keys(actions).forEach(function (actionName) {
                var handlerComponentIndexArray = _this3.handlersDictionary[actionName];

                if (handlerComponentIndexArray) {
                  /**
                   * Get action handler closest to the event target
                   */
                  var handlerComponentIndex = handlerComponentIndexArray[0];
                  var handler = _this3.componentList[handlerComponentIndex].handlers[actionName];
                  /**
                   * Get key map that corresponds with the component that defines the handler
                   * closest to the event target
                   */

                  var _keyMap = _this3.keyMaps[handlerComponentIndex];
                  /**
                   * Store the key sequence with the handler that it should call at
                   * a given component level
                   */

                  if (!_keyMap.sequences) {
                    _keyMap.sequences = {};
                  }
                  /**
                   * At least one child HotKeys component (or the component itself) has
                   * defined a handler for the action, so now we need to associate them
                   */


                  var keyMatchers = actions[actionName];
                  keyMatchers.forEach(function (keyMatcher) {
                    var keySequence = [keyMatcher.prefix, keyMatcher.id].join(' ');

                    var closestSequenceHandlerAlreadyFound = _this3.keySequencesDictionary[keySequence] && _this3.keySequencesDictionary[keySequence].some(function (dictEntry) {
                      return dictEntry[1] === keyMatcher.eventBitmapIndex;
                    });

                    if (closestSequenceHandlerAlreadyFound) {
                      /**
                       * Return if there is already a component with handlers for the current
                       * key sequence closer to the event target
                       */
                      return;
                    }

                    if (!_keyMap.sequences[keyMatcher.prefix]) {
                      _keyMap.sequences[keyMatcher.prefix] = {
                        combinations: {}
                      };
                    }

                    var prefix = keyMatcher.prefix,
                        sequenceLength = keyMatcher.sequenceLength,
                        id = keyMatcher.id,
                        keyDictionary = keyMatcher.keyDictionary,
                        size = keyMatcher.size,
                        matcherEventBitmapIndex = keyMatcher.eventBitmapIndex,
                        actionName = keyMatcher.actionName;
                    var combination = _keyMap.sequences[keyMatcher.prefix].combinations[keyMatcher.id];

                    if (!combination) {
                      _keyMap.sequences[keyMatcher.prefix].combinations[keyMatcher.id] = {
                        prefix: prefix,
                        sequenceLength: sequenceLength,
                        id: id,
                        keyDictionary: keyDictionary,
                        size: size,
                        events: _defineProperty({}, matcherEventBitmapIndex, {
                          actionName: actionName,
                          eventBitmapIndex: matcherEventBitmapIndex,
                          handler: handler
                        })
                      };
                    } else {
                      _keyMap.sequences[keyMatcher.prefix].combinations[keyMatcher.id] = _objectSpread({}, combination, {
                        events: _objectSpread({}, combination.events, _defineProperty({}, matcherEventBitmapIndex, {
                          actionName: actionName,
                          eventBitmapIndex: matcherEventBitmapIndex,
                          handler: handler
                        }))
                      });
                    }
                    /**
                     * Merge event bitmaps so we can quickly determine if a given component
                     * has any handlers bound to particular key events
                     */


                    if (!_keyMap.eventBitmap) {
                      _keyMap.eventBitmap = KeyEventBitmapManager.newBitmap();
                    }

                    KeyEventBitmapManager.setBit(_keyMap.eventBitmap, keyMatcher.eventBitmapIndex);
                    /**
                     * Record the longest sequence length so we know to only check for sequences
                     * of that length or shorter for a particular component
                     */

                    if (!_keyMap.longestSequence || _keyMap.longestSequence < keyMatcher.sequenceLength) {
                      _keyMap.longestSequence = keyMatcher.sequenceLength;
                    }
                    /**
                     * Record that we have already found a handler for the current action so
                     * that we do not override handlers for an action closest to the event target
                     * with handlers further up the tree
                     */


                    if (!_this3.keySequencesDictionary[keySequence]) {
                      _this3.keySequencesDictionary[keySequence] = [];
                    }

                    _this3.keySequencesDictionary[keySequence].push([handlerComponentIndex, keyMatcher.eventBitmapIndex]);
                  });
                  handlerComponentIndexArray.forEach(function (handlerComponentIndex) {
                    var handlerComponentStatus = _this3.unmatchedHandlerStatus[handlerComponentIndex];

                    if (!handlerComponentStatus[1][actionName]) {
                      handlerComponentStatus[1][actionName] = true;
                      /**
                       * Decrement the number of remaining unmatched handlers for the
                       * component currently handling the propagating key event, so we know
                       * when all handlers have been matched to sequences and we can move on
                       * to matching them against the current key event
                       */

                      handlerComponentStatus[0]--;
                    }
                  });
                }
              });
              /**
               * Search next component up in the hierarchy for actions that match outstanding
               * handlers
               */

              _this3.handlerResolutionSearchIndex++;
            };

            /**
             * Component currently handling key event has handlers that have not yet been
             * associated with a key sequence. We need to continue walking up the component
             * tree in search of the matching actions that describe the applicable key
             * sequence.
             */
            while (this.handlerResolutionSearchIndex < this.componentList.length && unmatchedHandlersCount > 0) {
              _loop();
            }
          }

          var keyMap = this.keyMaps[componentSearchIndex];

          if (!keyMap || isEmpty(keyMap.sequences) || !keyMap.eventBitmap[eventBitmapIndex]) ; else {
            var sequences = keyMap.sequences,
                longestSequence = keyMap.longestSequence;

            var currentKeyState = this._getCurrentKeyCombination();

            var normalizedKeyName = getKeyAlias(currentKeyState, keyName);
            var sequenceLengthCounter = longestSequence;

            while (sequenceLengthCounter >= 0) {
              var sequenceHistory = this.keyCombinationHistory.slice(-sequenceLengthCounter, -1);
              var sequenceHistoryIds = sequenceHistory.map(function (_ref3) {
                var ids = _ref3.ids;
                return ids;
              });

              var matchingSequence = this._tryMatchSequenceWithKeyAliases(sequences, sequenceHistoryIds);

              if (matchingSequence) {
                if (!matchingSequence.order) {
                  (function () {
                    /**
                     * The first time the component that is currently handling the key event has
                     * its handlers searched for a match, order the combinations based on their
                     * size so that they may be applied in the correct priority order
                     */
                    var combinationsPartitionedBySize = Object.values(matchingSequence.combinations).reduce(function (memo, _ref4) {
                      var id = _ref4.id,
                          size = _ref4.size;

                      if (!memo[size]) {
                        memo[size] = [];
                      }

                      memo[size].push(id);
                      return memo;
                    }, {});
                    matchingSequence.order = Object.keys(combinationsPartitionedBySize).sort(function (a, b) {
                      return b - a;
                    }).reduce(function (memo, key) {
                      return memo.concat(combinationsPartitionedBySize[key]);
                    }, []);
                  })();
                }

                var combinationOrder = matchingSequence.order;
                var combinationIndex = 0;

                while (combinationIndex < combinationOrder.length) {
                  var combinationId = combinationOrder[combinationIndex];
                  var combinationMatcher = matchingSequence.combinations[combinationId];

                  if (this._combinationMatchesKeys(normalizedKeyName, currentKeyState, combinationMatcher, eventBitmapIndex)) {
                    var subMatchDescription = KeyCombinationSerializer.serialize(combinationMatcher.keyDictionary);
                    combinationMatcher.events[eventBitmapIndex].handler(event);

                    this._stopEventPropagationAfterHandlingIfEnabled(event, componentSearchIndex);

                    return true;
                  }

                  combinationIndex++;
                }
              }

              sequenceLengthCounter--;
            }
          }

          componentSearchIndex++;
        }
      }
    }, {
      key: "_stopEventPropagationAfterHandlingIfEnabled",
      value: function _stopEventPropagationAfterHandlingIfEnabled(event, componentId) {
        if (Configuration.option('stopEventPropagationAfterHandling')) {
          this._stopEventPropagation(event, componentId);

          return true;
        }

        return false;
      }
    }, {
      key: "_stopEventPropagationAfterIgnoringIfEnabled",
      value: function _stopEventPropagationAfterIgnoringIfEnabled(event, componentId) {
        if (Configuration.option('stopEventPropagationAfterIgnoring')) {
          this._stopEventPropagation(event, componentId);

          return true;
        }

        return false;
      }
    }, {
      key: "_describeCurrentKeyCombination",
      value: function _describeCurrentKeyCombination() {
        return this._getCurrentKeyCombination().ids[0];
      }
    }, {
      key: "_tryMatchSequenceWithKeyAliases",
      value: function _tryMatchSequenceWithKeyAliases(keyMatcher, sequenceIds) {
        if (sequenceIds.length === 0) {
          return keyMatcher[''];
        }

        var idSizes = sequenceIds.map(function (ids) {
          return ids.length;
        });
        var indexCounters = sequenceIds.map(function () {
          return 0;
        });
        var triedAllPossiblePermutations = false;

        while (!triedAllPossiblePermutations) {
          var sequenceIdPermutation = indexCounters.map(function (sequenceIdIndex, index) {
            return sequenceIds[index][sequenceIdIndex];
          });
          var candidateId = sequenceIdPermutation.join(' ');

          if (keyMatcher[candidateId]) {
            return keyMatcher[candidateId];
          }

          var incrementer = 0;
          var carry = true;

          while (carry && incrementer < indexCounters.length) {
            var count = indexFromEnd(indexCounters, incrementer);
            var newIndex = (count + 1) % (indexFromEnd(idSizes, incrementer) || 1);
            indexCounters[indexCounters.length - (incrementer + 1)] = newIndex;
            carry = newIndex === 0;

            if (carry) {
              incrementer++;
            }
          }

          triedAllPossiblePermutations = incrementer === indexCounters.length;
        }
      }
    }, {
      key: "_combinationMatchesKeys",
      value: function _combinationMatchesKeys(keyBeingPressed, keyCombination, combinationMatch, eventBitmapIndex) {
        var combinationHasHandlerForEventType = combinationMatch.events[eventBitmapIndex];

        if (!combinationHasHandlerForEventType) {
          return false;
        }

        var keyCompletesCombination = false;
        var combinationMatchesKeysPressed = !Object.keys(combinationMatch.keyDictionary).some(function (candidateKeyName) {
          var keyState = getKeyState(keyCombination, candidateKeyName);

          if (keyState) {
            if (keyIsCurrentlyTriggeringEvent(keyState, eventBitmapIndex)) {
              if (keyBeingPressed && keyBeingPressed === getKeyAlias(keyCombination, candidateKeyName)) {
                keyCompletesCombination = !keyAlreadyTriggeredEvent(keyState, eventBitmapIndex);
              }

              return false;
            } else {
              return true;
            }
          } else {
            return true;
          }
        });
        return combinationMatchesKeysPressed && keyCompletesCombination;
      }
      /**
       * Synchronises the key combination history to match the modifier key flag attributes
       * on new key events
       * @param {KeyboardEvent} event - Event to check the modifier flags for
       * @protected
       */

    }, {
      key: "_checkForModifierFlagDiscrepancies",
      value: function _checkForModifierFlagDiscrepancies(event) {
        var _this4 = this;

        /**
         * If a new key event is received with modifier key flags that contradict the
         * key combination history we are maintaining, we can surmise that some keyup events
         * for those modifier keys have been lost (possibly because the window lost focus).
         * We update the key combination to match the modifier flags
         */
        Object.keys(ModifierFlagsDictionary).forEach(function (modifierKey) {
          var modifierStillPressed = _this4._keyIsCurrentlyDown(modifierKey);

          ModifierFlagsDictionary[modifierKey].forEach(function (attributeName) {
            if (event[attributeName] === false && modifierStillPressed) {
              _this4._addToCurrentKeyCombination(modifierKey, KeyEventBitmapIndex.keyup);
            }
          });
        });
      }
    }, {
      key: "_keyIsCurrentlyDown",
      value: function _keyIsCurrentlyDown(keyName) {
        var keyState = this._getCurrentKeyState(keyName);

        var keyIsDown = keyIsCurrentlyTriggeringEvent(keyState, KeyEventBitmapIndex.keypress) && !keyIsCurrentlyTriggeringEvent(keyState, KeyEventBitmapIndex.keyup);
        return !!keyIsDown;
      }
    }, {
      key: "_getCurrentKeyState",
      value: function _getCurrentKeyState(keyName) {
        var currentCombination = this._getCurrentKeyCombination();

        return getKeyState(currentCombination, keyName);
      }
    }, {
      key: "_buildCombinationKeyAliases",
      value: function _buildCombinationKeyAliases(keyDictionary) {
        var aliasFunctions = function () {
          if (keyDictionary['Shift']) {
            if (keyDictionary['Alt']) {
              return [resolveAltShiftedAlias, resolveUnaltShiftedAlias];
            } else {
              return [resolveShiftedAlias, resolveUnshiftedAlias];
            }
          } else {
            if (keyDictionary['Alt']) {
              return [resolveAltedAlias, resolveUnaltedAlias];
            } else {
              var nop = function nop(keyName) {
                return [keyName];
              };

              return [nop, nop];
            }
          }
        }();

        return Object.keys(keyDictionary).reduce(function (memo, keyName) {
          resolveKeyAlias(keyName).forEach(function (normalizedKey) {
            aliasFunctions.forEach(function (aliasFunction) {
              aliasFunction(normalizedKey).forEach(function (keyAlias) {
                if (keyAlias !== keyName || keyName !== normalizedKey) {
                  memo[keyAlias] = keyName;
                }
              });
            });
          });
          return memo;
        }, {});
      }
    }, {
      key: "_setComponentPosition",
      value: function _setComponentPosition(componentId, position) {
        this.componentIdDict[componentId] = position;
      }
    }, {
      key: "_getComponentPosition",
      value: function _getComponentPosition(componentId) {
        return this.componentIdDict[componentId];
      }
    }, {
      key: "_getComponent",
      value: function _getComponent(componentId) {
        var componentPosition = this._getComponentPosition(componentId);

        return this.componentList[componentPosition];
      }
    }, {
      key: "_getComponentAndPosition",
      value: function _getComponentAndPosition(componentId) {
        var componentPosition = this._getComponentPosition(componentId);

        return [this.componentList[componentPosition], componentPosition];
      }
      /**
       * Returns a prefix for all log entries related to the current event strategy
       * @protected
       * @abstract
       */

    }, {
      key: "_logPrefix",
      value: function _logPrefix() {}
    }]);

    return AbstractKeyEventStrategy;
  }();

  function keyIsCurrentlyTriggeringEvent(keyState, eventBitmapIndex) {
    return keyState && keyState[KeyEventSequenceIndex.current][eventBitmapIndex];
  }

  function getKeyAlias(keyCombination, keyName) {
    var keyState = keyCombination.keys[keyName];

    if (keyState) {
      return keyName;
    } else {
      var keyAlias = keyCombination.keyAliases[keyName];

      if (keyAlias) {
        return keyAlias;
      } else {
        return keyName;
      }
    }
  }

  function getKeyState(keyCombination, keyName) {
    var keyState = keyCombination.keys[keyName];

    if (keyState) {
      return keyState;
    } else {
      var keyAlias = keyCombination.keyAliases[keyName];

      if (keyAlias) {
        return keyCombination.keys[keyAlias];
      }
    }
  }

  function newComponentRegistryItem() {
    return {
      childIds: [],
      parentId: null
    };
  }

  function keyAlreadyTriggeredEvent(keyState, eventBitmapIndex) {
    return keyState && keyState[KeyEventSequenceIndex.previous][eventBitmapIndex];
  }

  /**
   * Manages the incrementing of a globally unique event id
   * @class
   */

  var KeyEventCounter =
  /*#__PURE__*/
  function () {
    function KeyEventCounter() {
      _classCallCheck(this, KeyEventCounter);
    }

    _createClass(KeyEventCounter, null, [{
      key: "getId",

      /**
       * Globally unique event id
       * @typedef {Number} EventId
       */

      /**
       * Get the current event id
       * @returns {EventId} The current event ID
       */
      value: function getId() {
        if (isUndefined(this.id)) {
          this.id = 0;
        }

        return this.id;
      }
      /**
       * Increment the current event id
       */

    }, {
      key: "incrementId",
      value: function incrementId() {
        this.id = this.getId() + 1;
      }
    }]);

    return KeyEventCounter;
  }();

  /**
   * Lowercased string representing a particular keyboard key
   * @typedef {String} NormalizedKeyName
   */

  /**
   * Returns normalized name of key
   * @param {KeyboardEvent.key} keyName Name of key
   * @returns {NormalizedKeyName} Normalized name of the key
   */
  function normalizeKeyName(keyName) {
    if (keyName === '+') {
      return 'plus';
    } else {
      return keyName;
    }
  }

  /**
   * Returns whether the current key name matches the command key
   * @param {ReactKeyName} keyName Key name to compare to the command key's
   * @returns {boolean} Whether the key name matches the command key's
   */
  function isCmdKey(keyName) {
    return keyName === 'Meta';
  }

  /**
   * @typedef {Number} EventResponseType
   */

  /**
   * Enum for different ways to respond to a key event
   * @readonly
   * @enum {EventResponseType}
   */
  var EventResponse = {
    unseen: 0,
    ignored: 1,
    seen: 2,
    recorded: 3,
    handled: 4
  };

  /**
   * Defines behaviour for dealing with key maps defined in focus-only HotKey components
   * @class
   */

  var FocusOnlyKeyEventStrategy =
  /*#__PURE__*/
  function (_AbstractKeyEventStra) {
    _inherits(FocusOnlyKeyEventStrategy, _AbstractKeyEventStra);

    /********************************************************************************
     * Init & Reset
     ********************************************************************************/
    function FocusOnlyKeyEventStrategy() {
      var _this;

      var configuration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var keyEventManager = arguments.length > 1 ? arguments[1] : undefined;

      _classCallCheck(this, FocusOnlyKeyEventStrategy);

      /**
       * Set state that DOES get cleared on each new focus tree
       */
      _this = _possibleConstructorReturn(this, _getPrototypeOf(FocusOnlyKeyEventStrategy).call(this, configuration, keyEventManager));
      /**
       * State that doesn't get cleared on each new focus tree
       */

      /**
       * Unique identifier given to each focus tree - when the focus in the browser
       * changes, and a different tree of elements are focused, a new id is allocated
       * @typedef {Number} FocusTreeId
       */

      /**
       * Counter to keep track of what focus tree ID should be allocated next
       * @type {FocusTreeId}
       */

      _this.focusTreeId = 0;
      /**
       * Record of the event currently bubbling up through the React application (and
       * beyond). This state is *not* cleared when the event propagation is finished
       * or when the component focus tree changes. It persists until it is overridden
       * by a new event, so that the global strategy is able to inspect the last
       * event seen by the React application, even after focus is lost.
       */

      _this.currentEvent = {
        /**
         * The name of the key the event belongs to
         * @type {ReactKeyName}
         */
        key: null,

        /**
         * The event bitmap index of the type of key event
         * @type {KeyEventBitmapIndex}
         */
        type: null,
        handled: false,
        ignored: false
      };
      return _this;
    }
    /**
     * Clears the internal state, wiping any history of key events and registered handlers
     * so they have no effect on the next tree of focused HotKeys components
     * @private
     */


    _createClass(FocusOnlyKeyEventStrategy, [{
      key: "_reset",
      value: function _reset() {
        _get(_getPrototypeOf(FocusOnlyKeyEventStrategy.prototype), "_reset", this).call(this);

        this.keypressEventsToSimulate = [];
        /**
         * Increase the unique ID associated with each unique focus tree
         * @type {number}
         */

        this.focusTreeId += 1;

        this._clearEventPropagationState();
      }
      /**
       * Clears the history that is maintained for the duration of a single keyboard event's
       * propagation up the React component tree towards the root component, so that the
       * next keyboard event starts with a clean state.
       * @private
       */

    }, {
      key: "_clearEventPropagationState",
      value: function _clearEventPropagationState() {
        /**
         * Object containing state of a key events propagation up the render tree towards
         * the document root
         * @type {{previousComponentPosition: number, actionHandled: boolean}}}
         */
        this.eventPropagationState = {
          /**
           * Index of the component last seen to be handling a key event
           * @type {ComponentId}
           */
          previousComponentPosition: -1,

          /**
           * Whether the keyboard event currently being handled has already matched a
           * handler function that has been called
           * @type {Boolean}
           */
          actionHandled: false,

          /**
           * Whether the keyboard event current being handled should be ignored
           * @type {Boolean}
           */
          ignoreEvent: false,

          /**
           * Whether the keyboard event current being handled should be observed, even
           * if matches the ignoreEventCondition
           * @type {Boolean}
           */
          forceObserveEvent: false,

          /**
           * Whether the strategy is in the process of stopping propagation and tidying
           * up
           */
          stopping: false
        };
      }
      /********************************************************************************
       * Registering key maps and handlers
       ********************************************************************************/

      /**
       * Registers the actions and handlers of a HotKeys component that has gained focus
       * @param {ComponentId} componentId - Id of the component that the keyMap belongs to
       * @param {KeyMap} actionNameToKeyMap - Map of actions to key expressions
       * @param {HandlersMap} actionNameToHandlersMap - Map of actions to handler functions
       * @param {Object} options Hash of options that configure how the actions
       *        and handlers are associated and called.
       * @returns {[FocusTreeId, ComponentId]} The current focus tree's ID and a unique
       *         component ID to assign to the focused HotKeys component and passed back
       *         when handling a key event
       */

    }, {
      key: "enableHotKeys",
      value: function enableHotKeys(componentId) {
        var actionNameToKeyMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var actionNameToHandlersMap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var options = arguments.length > 3 ? arguments[3] : undefined;

        if (this.resetOnNextFocus || this.keyMaps) {
          /**
           * We know components have just lost focus or keymaps have already been built,
           * meaning we are either anticipating a new set of components to be focused or
           * we are receiving notice of a component being focused when we aren't expecting it.
           * In either case, the internal state needs to be reset.
           */
          this._reset();

          this.resetOnNextFocus = false;
        }

        this._addComponentToList(componentId, actionNameToKeyMap, actionNameToHandlersMap, options);

        var component = this._getComponent(componentId);
        return this.focusTreeId;
      }
      /**
       * Handles when a HotKeys component that is in focus updates its props and changes
       * either the keyMap or handlers prop value
       * @param {FocusTreeId} focusTreeId - The ID of the focus tree the component is part of.
       *        Used to identify (and ignore) stale updates.
       * @param {ComponentId} componentId - The component index of the component to
       *        update
       * @param {KeyMap} actionNameToKeyMap - Map of key sequences to action names
       * @param {HandlersMap} actionNameToHandlersMap - Map of action names to handler
       *        functions
       * @param {Object} options Hash of options that configure how the actions
       *        and handlers are associated and called.
       */

    }, {
      key: "updateEnabledHotKeys",
      value: function updateEnabledHotKeys(focusTreeId, componentId) {
        var actionNameToKeyMap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var actionNameToHandlersMap = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
        var options = arguments.length > 4 ? arguments[4] : undefined;

        var componentPosition = this._getComponentPosition(componentId);

        if (focusTreeId !== this.focusTreeId || isUndefined(componentPosition)) {
          return;
        }

        this.componentList[componentPosition] = this._buildComponentOptions(componentId, actionNameToKeyMap, actionNameToHandlersMap, options);

        var component = this._getComponent(componentId);
      }
      /**
       * Handles when a component loses focus by resetting the internal state, ready to
       * receive the next tree of focused HotKeys components
       * @param {FocusTreeId} focusTreeId - Id of focus tree component thinks it's
       *        apart of
       * @param {ComponentId} componentId - Index of component that is blurring
       * @returns {Boolean} Whether the component still has event propagation yet to handle
       */

    }, {
      key: "disableHotKeys",
      value: function disableHotKeys(focusTreeId, componentId) {
        if (!this.resetOnNextFocus) {
          this.resetOnNextFocus = true;
        }

        var componentPosition = this._getComponentPosition(componentId);

        var previousComponentPosition = this.eventPropagationState.previousComponentPosition;
        var outstandingEventPropagation = previousComponentPosition !== -1 && previousComponentPosition + 1 < componentPosition;
        return outstandingEventPropagation;
      }
      /********************************************************************************
       * Recording key events
       ********************************************************************************/

      /**
       * @typedef {KeyboardEvent} SyntheticKeyboardEvent
       * @property {Function} persist
       */

      /**
       * Records a keydown keyboard event and matches it against the list of pre-registered
       * event handlers, calling the first matching handler with the highest priority if
       * one exists.
       *
       * This method is called many times as a keyboard event bubbles up through the React
       * render tree. The event is only registered the first time it is seen and results
       * of some calculations are cached. The event is matched against the handlers registered
       * at each component level, to ensure the proper handler declaration scoping.
       * @param {SyntheticKeyboardEvent} event - Event containing the key name and state
       * @param {FocusTreeId} focusTreeId - Id of focus tree component thinks it's apart of
       * @param {ComponentId} componentId - The id of the component that is currently handling
       *        the keyboard event as it bubbles towards the document root.
       * @param {Object} options - Hash of options that configure how the event is handled.
       * @returns Whether the event was discarded because it was part of an old focus tree
       */

    }, {
      key: "handleKeydown",
      value: function handleKeydown(event, focusTreeId, componentId) {
        var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

        var _key = normalizeKeyName(event.key);

        if (focusTreeId !== this.focusTreeId) {

          this._ignoreEvent(event, componentId);

          return true;
        }

        var responseAction = this._howToHandleKeyDownEvent(event, focusTreeId, componentId, _key, options, KeyEventBitmapIndex.keydown);

        if (responseAction === EventResponse.handled) {
          var keyInCurrentCombination = !!this._getCurrentKeyState(_key);

          if (keyInCurrentCombination || this.keyCombinationIncludesKeyUp) {
            this._startAndLogNewKeyCombination(_key, KeyEventBitmapIndex.keydown, focusTreeId, componentId);
          } else {
            this._addToAndLogCurrentKeyCombination(_key, KeyEventBitmapIndex.keydown, focusTreeId, componentId);
          }

          this._callHandlerIfActionNotHandled(event, _key, KeyEventBitmapIndex.keydown, componentId, focusTreeId);
        }

        this._simulateKeyPressesMissingFromBrowser(event, _key, focusTreeId, componentId, options);

        this._updateEventPropagationHistory(componentId);

        return false;
      }
    }, {
      key: "_howToHandleKeyDownEvent",
      value: function _howToHandleKeyDownEvent(event, focusTreeId, componentId, key, options, keyEventBitmapIndex) {
        if (this._shouldIgnoreEvent()) {

          this._ignoreEvent(event, componentId);

          return EventResponse.ignored;
        }

        if (this._isNewKeyEvent(componentId)) {
          this._setNewEventParameters(event, keyEventBitmapIndex);
          /**
           * We know that this is a new key event and not the same event bubbling up
           * the React render tree towards the document root, so perform actions specific
           * to the first time an event is seen
           */


          this._setIgnoreEventFlag(event, options);

          if (this._shouldIgnoreEvent()) {

            this._ignoreEvent(event, componentId);

            return EventResponse.ignored;
          }

          this._checkForModifierFlagDiscrepancies(event);
        }

        return EventResponse.handled;
      }
      /**
       * Records a keypress keyboard event and matches it against the list of pre-registered
       * event handlers, calling the first matching handler with the highest priority if
       * one exists.
       *
       * This method is called many times as a keyboard event bubbles up through the React
       * render tree. The event is only registered the first time it is seen and results
       * of some calculations are cached. The event is matched against the handlers registered
       * at each component level, to ensure the proper handler declaration scoping.
       * @param {KeyboardEvent} event - Event containing the key name and state
       * @param {FocusTreeId} focusTreeId Id - of focus tree component thinks it's apart of
       * @param {ComponentId} componentId - The index of the component that is currently handling
       *        the keyboard event as it bubbles towards the document root.
       * @param {Object} options - Hash of options that configure how the event
       *        is handled.
       * @return {Boolean} Whether the HotKeys component should discard its current focus
       *        tree Id, because it belongs to an old focus tree.
       */

    }, {
      key: "handleKeypress",
      value: function handleKeypress(event, focusTreeId, componentId, options) {
        var _key = normalizeKeyName(event.key);

        var shouldDiscardFocusTreeId = focusTreeId !== this.focusTreeId;
        /**
         * We first decide if the keypress event should be handled (to ensure the correct
         * order of logging statements)
         */

        var responseAction = this._howToHandleKeyDownEvent(event, focusTreeId, componentId, _key, options, KeyEventBitmapIndex.keypress);

        if (this._isNewKeyEvent(componentId) && this._getCurrentKeyState(_key)) {
          this._addToAndLogCurrentKeyCombination(_key, KeyEventBitmapIndex.keypress, focusTreeId, componentId);
        }
        /**
         * We attempt to find a handler of the event, only if it has not already
         * been handled and should not be ignored
         */


        if (responseAction === EventResponse.handled) {
          this._callHandlerIfActionNotHandled(event, _key, KeyEventBitmapIndex.keypress, componentId, focusTreeId);
        }

        this._updateEventPropagationHistory(componentId);

        return shouldDiscardFocusTreeId;
      }
      /**
       * Records a keyup keyboard event and matches it against the list of pre-registered
       * event handlers, calling the first matching handler with the highest priority if
       * one exists.
       *
       * This method is called many times as a keyboard event bubbles up through the React
       * render tree. The event is only registered the first time it is seen and results
       * of some calculations are cached. The event is matched against the handlers registered
       * at each component level, to ensure the proper handler declaration scoping.
       * @param {KeyboardEvent} event Event containing the key name and state
       * @param {FocusTreeId} focusTreeId Id of focus tree component thinks it's apart of
       * @param {ComponentId} componentId The index of the component that is currently handling
       *        the keyboard event as it bubbles towards the document root.
       * @param {Object} options Hash of options that configure how the event
       *        is handled.
       * @return {Boolean} Whether HotKeys component should discard its current focusTreeId
       *        because it's stale (part of an old focus tree)
       */

    }, {
      key: "handleKeyup",
      value: function handleKeyup(event, focusTreeId, componentId, options) {
        var _key = normalizeKeyName(event.key);

        var shouldDiscardFocusId = focusTreeId !== this.focusTreeId;
        /**
         * We first decide if the keyup event should be handled (to ensure the correct
         * order of logging statements)
         */

        var responseAction = this._howToHandleKeyDownEvent(event, focusTreeId, componentId, _key, options, KeyEventBitmapIndex.keyup);
        /**
         * We then add the keyup to our current combination - regardless of whether
         * it's to be handled or not. We need to do this to ensure that if a handler
         * function changes focus to a context that ignored events, the keyup event
         * is not lost (leaving react hotkeys thinking the key is still pressed).
         */


        if (this._isNewKeyEvent(componentId) && this._getCurrentKeyState(_key)) {
          this._addToAndLogCurrentKeyCombination(_key, KeyEventBitmapIndex.keyup, focusTreeId, componentId);
        }
        /**
         * We attempt to find a handler of the event, only if it has not already
         * been handled and should not be ignored
         */


        if (responseAction === EventResponse.handled) {
          this._callHandlerIfActionNotHandled(event, _key, KeyEventBitmapIndex.keyup, componentId, focusTreeId);
        }
        /**
         * We simulate any hidden keyup events hidden by the command key, regardless
         * of whether the event should be ignored or not
         */


        this._simulateKeyUpEventsHiddenByCmd(event, _key, focusTreeId, componentId, options);

        this._updateEventPropagationHistory(componentId);

        return shouldDiscardFocusId;
      }
    }, {
      key: "_simulateKeyPressesMissingFromBrowser",
      value: function _simulateKeyPressesMissingFromBrowser(event, key, focusTreeId, componentId, options) {
        this._handleEventSimulation('keypressEventsToSimulate', 'simulatePendingKeyPressEvents', this._shouldSimulate(KeyEventBitmapIndex.keypress, key), {
          event: event,
          key: key,
          focusTreeId: focusTreeId,
          componentId: componentId,
          options: options
        });
      }
    }, {
      key: "_simulateKeyUpEventsHiddenByCmd",
      value: function _simulateKeyUpEventsHiddenByCmd(event, key, focusTreeId, componentId, options) {
        var _this2 = this;

        if (isCmdKey(key)) {
          /**
           * When the command key is pressed down with other non-modifier keys, the browser
           * does not trigger the keyup event of those keys, so we simulate them when the
           * command key is released
           */
          Object.keys(this._getCurrentKeyCombination().keys).forEach(function (keyName) {
            if (isCmdKey(keyName)) {
              return;
            }

            _this2._handleEventSimulation('keyupEventsToSimulate', 'simulatePendingKeyUpEvents', _this2._shouldSimulate(KeyEventBitmapIndex.keyup, keyName), {
              event: event,
              key: keyName,
              focusTreeId: focusTreeId,
              componentId: componentId,
              options: options
            });
          });
        }
      }
    }, {
      key: "_ignoreEvent",
      value: function _ignoreEvent(event, componentId) {
        this.currentEvent.ignored = true;

        if (this._stopEventPropagationAfterIgnoringIfEnabled(event, componentId)) {
          this._updateEventPropagationHistory(componentId, {
            forceReset: true
          });
        } else {
          this._updateEventPropagationHistory(componentId);
        }
      }
      /**
       * Whether KeyEventManager should ignore the event that is currently being handled
       * @returns {Boolean} Whether to ignore the event
       *
       * Do not override this method. Use setIgnoreEventsCondition() instead.
       * @private
       */

    }, {
      key: "_shouldIgnoreEvent",
      value: function _shouldIgnoreEvent() {
        var _this$eventPropagatio = this.eventPropagationState,
            ignoreEvent = _this$eventPropagatio.ignoreEvent,
            forceObserveEvent = _this$eventPropagatio.forceObserveEvent;
        return !forceObserveEvent && ignoreEvent;
      }
      /**
       * Returns whether this is a previously seen event bubbling up to render tree towards
       * the document root, or whether it is a new event that has not previously been seen.
       * @param {ComponentId} componentId Index of the component currently handling
       *        the keyboard event
       * @return {Boolean} If the event has been seen before
       * @private
       */

    }, {
      key: "_isNewKeyEvent",
      value: function _isNewKeyEvent(componentId) {
        var previousComponentPosition = this.eventPropagationState.previousComponentPosition;
        return previousComponentPosition === -1 || previousComponentPosition >= this._getComponentPosition(componentId);
      }
    }, {
      key: "_updateEventPropagationHistory",
      value: function _updateEventPropagationHistory(componentId) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
          forceReset: false
        };

        if (options.forceReset || this._isFocusTreeRoot(componentId)) {
          this._clearEventPropagationState();
        } else {
          this.eventPropagationState.previousComponentPosition = this._getComponentPosition(componentId);
        }
      }
      /**
       * Sets the ignoreEvent flag so that subsequent handlers of the same event
       * do not have to re-evaluate whether to ignore the event or not as it bubbles
       * up towards the document root
       * @param {KeyboardEvent} event The event to decide whether to ignore
       * @param {Object} options Options containing the function to use
       *        to set the ignoreEvent flag
       * @param {Function} options.ignoreEventsCondition Function used to for setting
       *        the ignoreEvent flag
       * @private
       */

    }, {
      key: "_setIgnoreEventFlag",
      value: function _setIgnoreEventFlag(event, options) {
        this.eventPropagationState.ignoreEvent = options.ignoreEventsCondition(event);
      }
    }, {
      key: "ignoreEvent",
      value: function ignoreEvent() {
        this.eventPropagationState.ignoreEvent = true;
      }
    }, {
      key: "forceObserveEvent",
      value: function forceObserveEvent() {
        this.eventPropagationState.forceObserveEvent = true;
      }
    }, {
      key: "_isFocusTreeRoot",
      value: function _isFocusTreeRoot(componentId) {
        return this._getComponentPosition(componentId) >= this.componentList.length - 1;
      }
    }, {
      key: "_setNewEventParameters",
      value: function _setNewEventParameters(event, type) {
        KeyEventCounter.incrementId();
        this.currentEvent = {
          key: event.key,
          type: type,
          handled: false,
          ignored: false
        };
      }
    }, {
      key: "_startAndLogNewKeyCombination",
      value: function _startAndLogNewKeyCombination(keyName, eventBitmapIndex, focusTreeId, componentId) {
        this._startNewKeyCombination(keyName, eventBitmapIndex);
      }
    }, {
      key: "_addToAndLogCurrentKeyCombination",
      value: function _addToAndLogCurrentKeyCombination(keyName, eventBitmapIndex, focusTreeId, componentId) {
        this._addToCurrentKeyCombination(keyName, eventBitmapIndex);
      }
      /********************************************************************************
       * Event simulation
       ********************************************************************************/

    }, {
      key: "_stopEventPropagation",
      value: function _stopEventPropagation(event, componentId) {
        if (!this.eventPropagationState.stopping) {
          this.eventPropagationState.stopping = true;

          if (!event.simulated) {
            event.stopPropagation();
          }
        }
      }
    }, {
      key: "_handleEventSimulation",
      value: function _handleEventSimulation(listName, handlerName, shouldSimulate, _ref) {
        var event = _ref.event,
            key = _ref.key,
            focusTreeId = _ref.focusTreeId,
            componentId = _ref.componentId,
            options = _ref.options;

        if (shouldSimulate && Configuration.option('simulateMissingKeyPressEvents')) {
          /**
           * If a key does not have a keypress event, we save the details of the keydown
           * event to simulate the keypress event, as the keydown event bubbles through
           * the last focus-only HotKeysComponent
           */
          var _event = this._cloneAndMergeEvent(event, {
            key: key,
            simulated: true
          });

          this[listName].push({
            event: _event,
            focusTreeId: focusTreeId,
            componentId: componentId,
            options: options
          });
        }

        if (this._isFocusTreeRoot(componentId) || this.eventPropagationState.stopping) {
          if (!this.keyEventManager.isGlobalListenersBound()) {
            this[handlerName]();
          }
          /**
           * else, we wait for keydown event to propagate through global strategy
           * before we simulate the keypress
           */

        }
      }
    }, {
      key: "simulatePendingKeyPressEvents",
      value: function simulatePendingKeyPressEvents() {
        this._simulatePendingKeyEvents('keypressEventsToSimulate', 'handleKeypress');
      }
    }, {
      key: "simulatePendingKeyUpEvents",
      value: function simulatePendingKeyUpEvents() {
        this._simulatePendingKeyEvents('keyupEventsToSimulate', 'handleKeyup');
      }
    }, {
      key: "_simulatePendingKeyEvents",
      value: function _simulatePendingKeyEvents(listName, handlerName) {
        var _this3 = this;

        if (this[listName].length > 0) {
          KeyEventCounter.incrementId();
        }

        this[listName].forEach(function (_ref2) {
          var event = _ref2.event,
              focusTreeId = _ref2.focusTreeId,
              componentId = _ref2.componentId,
              options = _ref2.options;

          _this3[handlerName](event, focusTreeId, componentId, options);
        });
        this[listName] = [];
        /**
         * If an event gets handled and causes a focus shift, then subsequent components
         * will ignore the event (including the root component) and the conditions to
         * reset the propagation state are never met - so we ensure that after we are done
         * simulating the keypress event, the propagation state is reset
         */

        this._clearEventPropagationState();
      }
      /********************************************************************************
       * Matching and calling handlers
       ********************************************************************************/

      /**
       * Calls the first handler that matches the current key event if the action has not
       * already been handled in a more deeply nested component
       * @param {KeyboardEvent} event Keyboard event object to be passed to the handler
       * @param {NormalizedKeyName} keyName Normalized key name
       * @param {KeyEventBitmapIndex} eventBitmapIndex The bitmap index of the current key event type
       * @param {FocusTreeId} focusTreeId Id of focus tree component thinks it's apart of
       * @param {ComponentId} componentId Index of the component that is currently handling
       *        the keyboard event
       * @private
       */

    }, {
      key: "_callHandlerIfActionNotHandled",
      value: function _callHandlerIfActionNotHandled(event, keyName, eventBitmapIndex, componentId, focusTreeId) {

        var combinationName = this._describeCurrentKeyCombination();

        if (this.keyMapEventBitmap[eventBitmapIndex]) {
          if (this.eventPropagationState.actionHandled) ; else {
            var previousComponentPosition = this.eventPropagationState.previousComponentPosition;

            var componentPosition = this._getComponentPosition(componentId);

            var handlerWasCalled = this._callMatchingHandlerClosestToEventTarget(event, keyName, eventBitmapIndex, componentPosition, previousComponentPosition === -1 ? 0 : previousComponentPosition);

            if (handlerWasCalled) {
              this.eventPropagationState.actionHandled = true;
              this.currentEvent.handled = true;
            }
          }
        }
      }
      /********************************************************************************
       * Logging
       ********************************************************************************/

    }, {
      key: "_logPrefix",
      value: function _logPrefix(componentId) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var logIcons = Logger.logIcons;
        var eventIcons = Logger.eventIcons;
        var componentIcons = Logger.componentIcons;
        var base = 'HotKeys (';

        if (options.focusTreeId !== false) {
          var focusTreeId = isUndefined(options.focusTreeId) ? this.focusTreeId : options.focusTreeId;
          base += "F".concat(focusTreeId).concat(logIcons[focusTreeId % logIcons.length], "-");
        }

        if (options.eventId !== false) {
          var eventId = isUndefined(options.eventId) ? KeyEventCounter.getId() : options.eventId;
          base += "E".concat(eventId).concat(eventIcons[eventId % eventIcons.length], "-");
        }

        base += "C".concat(componentId).concat(componentIcons[componentId % componentIcons.length]);

        var position = this._getComponentPosition(componentId);

        if (!isUndefined(position)) {
          base += "-P".concat(position).concat(componentIcons[position % componentIcons.length], ":");
        }

        return "".concat(base, ")");
      }
    }]);

    return FocusOnlyKeyEventStrategy;
  }(AbstractKeyEventStrategy);

  function capitalize(string) {
    return string.replace(/\b\w/g, function (l) {
      return l.toUpperCase();
    });
  }

  function removeAtIndex(array, index) {
    return [].concat(_toConsumableArray(array.slice(0, index)), _toConsumableArray(array.slice(index + 1)));
  }

  /**
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the same directory of this source tree.
   */

  /**
   * `charCode` represents the actual "character code" and is safe to use with
   * `String.fromCharCode`. As such, only keys that correspond to printable
   * characters produce a valid `charCode`, the only exception to this is Enter.
   * The Tab-key is considered non-printable and does not have a `charCode`,
   * presumably because it does not produce a tab-character in browsers.
   *
   * @param {object} nativeEvent Native browser event.
   * @return {number} Normalized `charCode` property.
   */
  function getEventCharCode(nativeEvent) {
    var charCode;
    var keyCode = nativeEvent.keyCode;

    if ('charCode' in nativeEvent) {
      charCode = nativeEvent.charCode; // FF does not set `charCode` for the Enter-key, check against `keyCode`.

      if (charCode === 0 && keyCode === 13) {
        charCode = 13;
      }
    } else {
      // IE8 does not implement `charCode`, but `keyCode` has the correct value.
      charCode = keyCode;
    } // IE and Edge (on Windows) and Chrome / Safari (on Windows and Linux)
    // report Enter as charCode 10 when ctrl is pressed.


    if (charCode === 10) {
      charCode = 13;
    } // Some non-printable keys are reported in `charCode`/`keyCode`, discard them.
    // Must not discard the (non-)printable Enter-key.


    if (charCode >= 32 || charCode === 13) {
      return charCode;
    }

    return 0;
  }

  /**
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the same directory of this source tree.
   *
   * @flow
   */
  /**
   * Normalization of deprecated HTML5 `key` values
   * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
   */

  var normalizeKey = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified'
  };
  /**
   * Translation from legacy `keyCode` to HTML5 `key`
   * Only special keys supported, all others depend on keyboard layout or browser
   * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
   */

  var translateToKey = {
    '8': 'Backspace',
    '9': 'Tab',
    '12': 'Clear',
    '13': 'Enter',
    '16': 'Shift',
    '17': 'Control',
    '18': 'Alt',
    '19': 'Pause',
    '20': 'CapsLock',
    '27': 'Escape',
    '32': ' ',
    '33': 'PageUp',
    '34': 'PageDown',
    '35': 'End',
    '36': 'Home',
    '37': 'ArrowLeft',
    '38': 'ArrowUp',
    '39': 'ArrowRight',
    '40': 'ArrowDown',
    '45': 'Insert',
    '46': 'Delete',
    '112': 'F1',
    '113': 'F2',
    '114': 'F3',
    '115': 'F4',
    '116': 'F5',
    '117': 'F6',
    '118': 'F7',
    '119': 'F8',
    '120': 'F9',
    '121': 'F10',
    '122': 'F11',
    '123': 'F12',
    '144': 'NumLock',
    '145': 'ScrollLock',
    '224': 'Meta'
  };
  /**
   * @param {object} nativeEvent Native browser event.
   * @return {string} Normalized `key` property.
   */

  function getEventKey(nativeEvent) {
    if (nativeEvent.key) {
      // Normalize inconsistent values reported by browsers due to
      // implementations of a working draft specification.
      // FireFox implements `key` but returns `MozPrintableKey` for all
      // printable characters (normalized to `Unidentified`), ignore it.
      var key = normalizeKey[nativeEvent.key] || nativeEvent.key;

      if (key !== 'Unidentified') {
        return key;
      }
    } // Browser does not implement `key`, polyfill as much of it as we can.


    if (nativeEvent.type === 'keypress') {
      var charCode = getEventCharCode(nativeEvent); // The enter-key is technically both printable and non-printable and can
      // thus be captured by `keypress`, no other non-printable key should.

      return charCode === 13 ? 'Enter' : String.fromCharCode(charCode);
    }

    if (nativeEvent.type === 'keydown' || nativeEvent.type === 'keyup') {
      // While user keyboard layout determines the actual meaning of each
      // `keyCode` value, almost all function keys have a universal value.
      return translateToKey[nativeEvent.keyCode] || 'Unidentified';
    }

    return '';
  }

  function contains(collection, item) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if (Array.isArray(collection) || isString(collection)) {
      if (options.stringifyFirst) {
        return !isUndefined(collection.find(function (collectionItem) {
          return collectionItem.toString() === item.toString();
        }));
      } else {
        return collection.indexOf(item) !== -1;
      }
    } else if (isObject(collection)) {
      return hasKey(collection, item);
    } else {
      if (options.stringifyFirst) {
        return collection.toString() === item.toString();
      } else {
        return collection === item;
      }
    }
  }

  /**
   * Defines behaviour for dealing with key maps defined in global HotKey components
   * @class
   */

  var GlobalKeyEventStrategy =
  /*#__PURE__*/
  function (_AbstractKeyEventStra) {
    _inherits(GlobalKeyEventStrategy, _AbstractKeyEventStra);

    /********************************************************************************
     * Init & Reset
     ********************************************************************************/
    function GlobalKeyEventStrategy() {
      var _this;

      var configuration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var keyEventManager = arguments.length > 1 ? arguments[1] : undefined;

      _classCallCheck(this, GlobalKeyEventStrategy);

      /**
       * Set state that gets cleared every time a component gets mounted or unmounted
       */
      _this = _possibleConstructorReturn(this, _getPrototypeOf(GlobalKeyEventStrategy).call(this, configuration, keyEventManager));
      /**
       * Set state that doesn't get cleared each time a new new component is mounted
       * or unmounted
       * @type {number}
       */

      /**
       * Whether the global key event handlers have been bound to document yet or not
       * @type {boolean}
       */

      _this.listenersBound = false;
      _this.eventOptions = {
        ignoreEventsCondition: Configuration.option('ignoreEventsCondition')
      };
      return _this;
    }
    /********************************************************************************
     * Enabling key maps and handlers
     ********************************************************************************/

    /**
     * Registers the actions and handlers of a HotKeys component that has mounted
     * @param {ComponentId} componentId - Id of the component that the keyMap belongs to
     * @param {KeyMap} actionNameToKeyMap - Map of actions to key expressions
     * @param {HandlersMap} actionNameToHandlersMap - Map of actions to handler functions
     * @param {Object} options Hash of options that configure how the actions
     *        and handlers are associated and called.
     * @param {Object} eventOptions - Options for how the event should be handled
     */


    _createClass(GlobalKeyEventStrategy, [{
      key: "enableHotKeys",
      value: function enableHotKeys(componentId) {
        var actionNameToKeyMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var actionNameToHandlersMap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var options = arguments.length > 3 ? arguments[3] : undefined;
        var eventOptions = arguments.length > 4 ? arguments[4] : undefined;
        this.eventOptions = eventOptions;

        this._addComponentToList(componentId, actionNameToKeyMap, actionNameToHandlersMap, options);

        this._updateDocumentHandlers();
      }
      /**
       * Handles when a mounted global HotKeys component updates its props and changes
       * either the keyMap or handlers prop value
       * @param {ComponentId} componentId - The component index of the component to
       *        update
       * @param {KeyMap} actionNameToKeyMap - Map of actions to key expressions
       * @param {HandlersMap} actionNameToHandlersMap - Map of actions to handler functions
       * @param {Object} options Hash of options that configure how the actions
       *        and handlers are associated and called.
       * @param {Object} eventOptions - Options for how the event should be handled
       */

    }, {
      key: "updateEnabledHotKeys",
      value: function updateEnabledHotKeys(componentId) {
        var actionNameToKeyMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var actionNameToHandlersMap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var options = arguments.length > 3 ? arguments[3] : undefined;
        var eventOptions = arguments.length > 4 ? arguments[4] : undefined;
        this.eventOptions = eventOptions;

        var componentPosition = this._getComponentPosition(componentId);
        /**
         * Manually update the registered key map state, usually reset using
         * _resetRegisteredKeyMapsState() method
         */


        this.componentList[componentPosition] = this._buildComponentOptions(componentId, actionNameToKeyMap, actionNameToHandlersMap, options);

        this._updateLongestKeySequenceIfNecessary(componentId);
        /**
         * Reset strategy state specific to the global strategy
         */


        this._updateDocumentHandlers();
        /**
         * Reset handler resolution state
         */


        this._initHandlerResolutionState();
      }
      /**
       * Handles when a component is unmounted
       * @param {ComponentId} componentId - Index of component that is being unmounted
       */

    }, {
      key: "disableHotKeys",
      value: function disableHotKeys(componentId) {
        var _this$_getComponentAn = this._getComponentAndPosition(componentId),
            _this$_getComponentAn2 = _slicedToArray(_this$_getComponentAn, 2),
            keyMapEventBitmap = _this$_getComponentAn2[0].keyMapEventBitmap,
            componentPosition = _this$_getComponentAn2[1];
        /**
         * Manually update the registered key map state, usually reset using
         * _resetRegisteredKeyMapsState() method
         */


        this.componentList = removeAtIndex(this.componentList, componentPosition);

        this._updateLongestKeySequenceIfNecessary(componentId);
        /**
         * Reset strategy state specific to the global strategy
         */


        this._updateComponentIndexDictFromList({
          startingAt: componentPosition
        });

        this._updateDocumentHandlers(keyMapEventBitmap, KeyEventBitmapManager.newBitmap());
        /**
         * Reset handler resolution state
         */


        this._initHandlerResolutionState();
      }
    }, {
      key: "_updateLongestKeySequenceIfNecessary",
      value: function _updateLongestKeySequenceIfNecessary(componentId) {
        var _this2 = this;

        if (componentId === this.longestSequenceComponentIndex) {
          this.longestSequence = 1;
          this.componentList.forEach(function (_ref) {
            var longestSequence = _ref.longestSequence;

            if (longestSequence > _this2.longestSequence) {
              _this2.longestSequence = longestSequence;
            }
          });
        }
      }
    }, {
      key: "_updateComponentIndexDictFromList",
      value: function _updateComponentIndexDictFromList() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
          startingAt: 0
        };
        var counter = options.startingAt;

        while (counter < this.componentList.length) {
          this._setComponentPosition(this.componentList[counter].componentId, counter);

          counter++;
        }
      }
    }, {
      key: "_updateDocumentHandlers",
      value: function _updateDocumentHandlers() {
        var _this3 = this;

        var listenersShouldBeBound = this.keyMapEventBitmap.some(function (eventType) {
          return eventType;
        });

        if (!this.listenersBound && listenersShouldBeBound) {
          var _loop = function _loop(bitmapIndex) {
            var eventName = describeKeyEventType(bitmapIndex);

            document["on".concat(eventName)] = function (keyEvent) {
              _this3.keyEventManager["handleGlobal".concat(capitalize(eventName))](keyEvent);
            };
          };

          for (var bitmapIndex = 0; bitmapIndex < this.keyMapEventBitmap.length; bitmapIndex++) {
            _loop(bitmapIndex);
          }

          this.listenersBound = true;
        } else if (this.listenersBound && !listenersShouldBeBound) {
          for (var bitmapIndex = 0; bitmapIndex < this.keyMapEventBitmap.length; bitmapIndex++) {
            var eventName = describeKeyEventType(bitmapIndex);
            delete document["on".concat(eventName)];
          }

          this.listenersBound = false;
        }
      }
      /********************************************************************************
       * Recording key events
       ********************************************************************************/

      /**
       * Records a keydown keyboard event and matches it against the list of pre-registered
       * event handlers, calling the first matching handler with the highest priority if
       * one exists.
       *
       * This method is called once when a keyboard event bubbles up to document, and checks
       * the keymaps for all of the mounted global HotKey components.
       * @param {KeyboardEvent} event - Event containing the key name and state
       */

    }, {
      key: "handleKeydown",
      value: function handleKeydown(event) {
        this._checkForModifierFlagDiscrepancies(event);

        var _key = normalizeKeyName(getEventKey(event));

        var reactAppResponse = this._howReactAppRespondedTo(event, _key, KeyEventBitmapIndex.keydown);

        if (reactAppResponse === EventResponse.unseen && this.eventOptions.ignoreEventsCondition(event)) {
          return;
        }

        if (reactAppResponse !== EventResponse.ignored) {
          var keyInCurrentCombination = !!this._getCurrentKeyState(_key);

          if (keyInCurrentCombination || this.keyCombinationIncludesKeyUp) {
            this._startAndLogNewKeyCombination(_key, KeyEventBitmapIndex.keydown);
          } else {
            this._addToAndLogCurrentKeyCombination(_key, KeyEventBitmapIndex.keydown);
          }
        }

        if (!contains([EventResponse.ignored, EventResponse.handled], reactAppResponse)) {
          this._callHandlerIfExists(event, _key, KeyEventBitmapIndex.keydown);
        }

        this._simulateKeyPressesMissingFromBrowser(event, _key);
      }
    }, {
      key: "_howReactAppRespondedTo",
      value: function _howReactAppRespondedTo(event, key, eventBitmapIndex) {
        var reactAppHistoryWithEvent = this.keyEventManager.reactAppHistoryWithEvent(key, eventBitmapIndex);

        switch (reactAppHistoryWithEvent) {
          case EventResponse.handled:
            break;

          case EventResponse.ignored:
            break;

          case EventResponse.seen:
            break;

          default:
            KeyEventCounter.incrementId();

        }

        return reactAppHistoryWithEvent;
      }
      /**
       * Records a keypress keyboard event and matches it against the list of pre-registered
       * event handlers, calling the first matching handler with the highest priority if
       * one exists.
       *
       * This method is called once when a keyboard event bubbles up to document, and checks
       * the keymaps for all of the mounted global HotKey components.
       * @param {KeyboardEvent} event - Event containing the key name and state
       */

    }, {
      key: "handleKeypress",
      value: function handleKeypress(event) {
        var key = normalizeKeyName(getEventKey(event));
        /**
         * We first decide if the keypress event should be handled (to ensure the correct
         * order of logging statements)
         */

        var reactAppResponse = this._howReactAppRespondedTo(event, key, KeyEventBitmapIndex.keypress);
        /**
         * Add new key event to key combination history
         */


        if (this._getCurrentKeyState(key)) {
          this._addToAndLogCurrentKeyCombination(key, KeyEventBitmapIndex.keypress);
        }

        if (reactAppResponse === EventResponse.unseen && this.eventOptions.ignoreEventsCondition(event)) {
          return;
        }

        if (!contains([EventResponse.ignored, EventResponse.handled], reactAppResponse)) {
          this._callHandlerIfExists(event, key, KeyEventBitmapIndex.keypress);
        }
      }
      /**
       * Records a keyup keyboard event and matches it against the list of pre-registered
       * event handlers, calling the first matching handler with the highest priority if
       * one exists.
       *
       * This method is called once when a keyboard event bubbles up to document, and checks
       * the keymaps for all of the mounted global HotKey components.
       * @param {KeyboardEvent} event - Event containing the key name and state
       */

    }, {
      key: "handleKeyup",
      value: function handleKeyup(event) {
        var key = normalizeKeyName(getEventKey(event));
        /**
         * We first decide if the keyup event should be handled (to ensure the correct
         * order of logging statements)
         */

        var reactAppResponse = this._howReactAppRespondedTo(event, key, KeyEventBitmapIndex.keyup);
        /**
         * We then add the keyup to our current combination - regardless of whether
         * it's to be handled or not. We need to do this to ensure that if a handler
         * function changes focus to a context that ignored events, the keyup event
         * is not lost (leaving react hotkeys thinking the key is still pressed).
         */


        if (this._getCurrentKeyState(key)) {
          this._addToAndLogCurrentKeyCombination(key, KeyEventBitmapIndex.keyup);
        }

        if (reactAppResponse === EventResponse.unseen && this.eventOptions.ignoreEventsCondition(event)) ; else {
          /**
           * We attempt to find a handler of the event, only if it has not already
           * been handled and should not be ignored
           */
          if (!contains([EventResponse.ignored, EventResponse.handled], reactAppResponse)) {
            this._callHandlerIfExists(event, key, KeyEventBitmapIndex.keyup);
          }
        }
        /**
         * We simulate any hidden keyup events hidden by the command key, regardless
         * of whether the event should be ignored or not
         */


        this._simulateKeyUpEventsHiddenByCmd(event, key);
      }
    }, {
      key: "_simulateKeyPressesMissingFromBrowser",
      value: function _simulateKeyPressesMissingFromBrowser(event, key) {
        this.keyEventManager.simulatePendingKeyPressEvents();

        this._handleEventSimulation('handleKeypress', this._shouldSimulate(KeyEventBitmapIndex.keypress, key), {
          event: event,
          key: key
        });
      }
    }, {
      key: "_simulateKeyUpEventsHiddenByCmd",
      value: function _simulateKeyUpEventsHiddenByCmd(event, key) {
        var _this4 = this;

        if (isCmdKey(key)) {
          /**
           * We simulate pending key events in the React app before we do it globally
           */
          this.keyEventManager.simulatePendingKeyUpEvents();
          Object.keys(this._getCurrentKeyCombination().keys).forEach(function (keyName) {
            if (isCmdKey(keyName)) {
              return;
            }

            _this4._handleEventSimulation('handleKeyup', _this4._shouldSimulate(KeyEventBitmapIndex.keyup, keyName), {
              event: event,
              key: keyName
            });
          });
        }
      }
    }, {
      key: "_startAndLogNewKeyCombination",
      value: function _startAndLogNewKeyCombination(keyName, eventBitmapIndex) {
        this._startNewKeyCombination(keyName, eventBitmapIndex);
      }
    }, {
      key: "_addToAndLogCurrentKeyCombination",
      value: function _addToAndLogCurrentKeyCombination(keyName, eventBitmapIndex) {
        this._addToCurrentKeyCombination(keyName, eventBitmapIndex);
      }
      /********************************************************************************
       * Event simulation
       ********************************************************************************/

    }, {
      key: "_handleEventSimulation",
      value: function _handleEventSimulation(handlerName, shouldSimulate, _ref2) {
        var event = _ref2.event,
            key = _ref2.key;

        if (shouldSimulate && Configuration.option('simulateMissingKeyPressEvents')) {
          /**
           * If a key does not have a keypress event, we simulate one immediately after
           * the keydown event, to keep the behaviour consistent across all keys
           */
          var _event = this._cloneAndMergeEvent(event, {
            key: key,
            simulated: true
          });

          this[handlerName](_event);
        }
      }
      /********************************************************************************
       * Matching and calling handlers
       ********************************************************************************/

    }, {
      key: "_callHandlerIfExists",
      value: function _callHandlerIfExists(event, keyName, eventBitmapIndex) {

        var combinationName = this._describeCurrentKeyCombination();

        if (this.keyMapEventBitmap[eventBitmapIndex]) {
          /**
           * If there is at least one handler for the specified key event type (keydown,
           * keypress, keyup), then attempt to find a handler that matches the current
           * key combination
           */

          this._callMatchingHandlerClosestToEventTarget(event, keyName, eventBitmapIndex);
        }
      }
    }, {
      key: "_callMatchingHandlerClosestToEventTarget",
      value: function _callMatchingHandlerClosestToEventTarget(event, keyName, eventBitmapIndex) {
        for (var componentPosition = 0; componentPosition < this.componentList.length; componentPosition++) {
          var matchFound = _get(_getPrototypeOf(GlobalKeyEventStrategy.prototype), "_callMatchingHandlerClosestToEventTarget", this).call(this, event, keyName, eventBitmapIndex, componentPosition, 0);

          if (matchFound) {
            return;
          }
        }
      }
    }, {
      key: "_stopEventPropagation",
      value: function _stopEventPropagation(event, componentId) {

        if (!event.simulated) {
          event.stopPropagation();
        }
      }
      /********************************************************************************
       * Logging
       ********************************************************************************/

    }, {
      key: "_logPrefix",
      value: function _logPrefix(componentId) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var eventIcons = Logger.eventIcons;
        var componentIcons = Logger.componentIcons;
        var base = 'HotKeys (GLOBAL';

        if (options.eventId !== false) {
          var eventId = isUndefined(options.eventId) ? KeyEventCounter.getId() : options.eventId;
          base = "".concat(base, "-E").concat(eventId).concat(eventIcons[eventId % eventIcons.length]);
        }

        if (isUndefined(componentId)) {
          return "".concat(base, "):");
        } else {
          return "".concat(base, "-C").concat(componentId).concat(componentIcons[componentId % componentIcons.length], "):");
        }
      }
    }]);

    return GlobalKeyEventStrategy;
  }(AbstractKeyEventStrategy);

  /**
   * Returns whether the specified component's focus tree ID indicates it is a focus-only
   * HotKeys component, or not
   * @param {FocusTreeId} focusTreeId The focus tree id for the component
   * @returns {Boolean} Whether the HotKeys component is focus-only
   */

  function isFromFocusOnlyComponent(focusTreeId) {
    return !isUndefined(focusTreeId);
  }

  /**
   * Provides a registry for keyboard sequences and events, and the handlers that should
   * be called when they are detected. Also contains the interface for processing and
   * matching keyboard events against its list of registered actions and handlers.
   * @class
   */

  var KeyEventManager =
  /*#__PURE__*/
  function () {
    _createClass(KeyEventManager, null, [{
      key: "getInstance",

      /**
       * Creates a new KeyEventManager instance if one does not already exist or returns the
       * instance that already exists.
       * @param {Object} configuration Configuration object
       * @param {Logger} configuration.logger Logger instance
       * @returns {KeyEventManager} The key event manager instance
       */
      value: function getInstance() {
        var configuration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        if (!this.instance) {
          this.instance = new KeyEventManager(configuration);
        }

        return this.instance;
      }
    }, {
      key: "clear",
      value: function clear() {
        delete this.instance;
      }
      /**
       * Creates a new KeyEventManager instance. It is expected that only a single instance
       * will be used with a render tree.
       */

    }]);

    function KeyEventManager() {
      var configuration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, KeyEventManager);

      this.logger = configuration.logger || new Logger(Configuration.option('logLevel'));
      this._focusOnlyEventStrategy = new FocusOnlyKeyEventStrategy({
        configuration: configuration,
        logger: this.logger
      }, this);
      this._globalEventStrategy = new GlobalKeyEventStrategy({
        configuration: configuration,
        logger: this.logger
      }, this);
      this.mountedComponentsCount = 0;
    }
    /********************************************************************************
     * Generating key maps
     ********************************************************************************/


    _createClass(KeyEventManager, [{
      key: "getApplicationKeyMap",
      value: function getApplicationKeyMap() {
        return Object.assign(this._globalEventStrategy.getApplicationKeyMap(), this._focusOnlyEventStrategy.getApplicationKeyMap());
      }
      /********************************************************************************
       * Registering key maps
       ********************************************************************************/

      /**
       * Registers a new mounted component's key map so that it can be included in the
       * application's key map
       * @param {KeyMap} keyMap - Map of actions to key expressions
       * @returns {ComponentId} Unique component ID to assign to the focused HotKeys
       *          component and passed back when handling a key event
       */

    }, {
      key: "registerKeyMap",
      value: function registerKeyMap() {
        var keyMap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return this._focusOnlyEventStrategy.registerKeyMap(keyMap);
      }
      /**
       * Re-registers (updates) a mounted component's key map
       * @param {ComponentId} componentId - Id of the component that the keyMap belongs to
       * @param {KeyMap} keyMap - Map of actions to key expressions
       */

    }, {
      key: "reregisterKeyMap",
      value: function reregisterKeyMap(componentId) {
        var keyMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        this._focusOnlyEventStrategy.reregisterKeyMap(componentId, keyMap);
      }
      /**
       * De-registers (removes) a mounted component's key map from the registry
       * @param {ComponentId} componentId - Id of the component that the keyMap belongs to
       */

    }, {
      key: "deregisterKeyMap",
      value: function deregisterKeyMap(componentId) {
        this._focusOnlyEventStrategy.deregisterKeyMap(componentId);
      }
      /**
       * Registers that a component has now mounted, and declares its parent HotKeys
       * component id so that actions may be properly resolved
       * @param {ComponentId} componentId - Id of the component that has mounted
       * @param {ComponentId} parentId - Id of the parent HotKeys component
       */

    }, {
      key: "registerComponentMount",
      value: function registerComponentMount(componentId, parentId) {
        this._incrementComponentCount();

        return this._focusOnlyEventStrategy.registerComponentMount(componentId, parentId);
      }
    }, {
      key: "registerComponentUnmount",
      value: function registerComponentUnmount() {
        this._decrementComponentCount();
      }
    }, {
      key: "_incrementComponentCount",
      value: function _incrementComponentCount() {
        var _this = this;

        var preMountedComponentCount = this.mountedComponentsCount;
        this.mountedComponentsCount += 1;

        if (preMountedComponentCount === 0 && this.mountedComponentsCount === 1) {
          window.onblur = function () {
            return _this._clearKeyHistory();
          };
        }
      }
    }, {
      key: "_decrementComponentCount",
      value: function _decrementComponentCount() {
        var preMountedComponentCount = this.mountedComponentsCount;
        this.mountedComponentsCount -= 1;

        if (preMountedComponentCount === 1 && this.mountedComponentsCount === 0) {
          delete window.onblur;
        }
      }
    }, {
      key: "_clearKeyHistory",
      value: function _clearKeyHistory() {

        this._focusOnlyEventStrategy.resetKeyCombinationHistory({
          force: true
        });

        this._globalEventStrategy.resetKeyCombinationHistory({
          force: true
        });
      }
      /**
       * Registers a new mounted component's global key map so that it can be included in the
       * application's key map
       * @param {KeyMap} keyMap - Map of actions to key expressions
       * @returns {ComponentId} Unique component ID to assign to the focused HotKeys
       *          component and passed back when handling a key event
       */

    }, {
      key: "registerGlobalKeyMap",
      value: function registerGlobalKeyMap() {
        var keyMap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return this._globalEventStrategy.registerKeyMap(keyMap);
      }
    }, {
      key: "registerGlobalComponentUnmount",
      value: function registerGlobalComponentUnmount() {
        this._decrementComponentCount();
      }
      /**
       * Registers that a component has now mounted, and declares its parent GlobalHotKeys
       * component id so that actions may be properly resolved
       * @param {ComponentId} componentId - Id of the component that has mounted
       * @param {ComponentId} parentId - Id of the parent GlobalHotKeys component
       */

    }, {
      key: "registerGlobalComponentMount",
      value: function registerGlobalComponentMount(componentId, parentId) {
        this._incrementComponentCount();

        return this._globalEventStrategy.registerComponentMount(componentId, parentId);
      }
      /**
       * Re-registers (updates) a mounted component's global key map
       * @param {ComponentId} componentId - Id of the component that the keyMap belongs to
       * @param {KeyMap} keyMap - Map of actions to key expressions
       */

    }, {
      key: "reregisterGlobalKeyMap",
      value: function reregisterGlobalKeyMap(componentId, keyMap) {
        this._globalEventStrategy.reregisterKeyMap(componentId, keyMap);
      }
      /**
       * De-registers (removes) a mounted component's global key map from the registry
       * @param {ComponentId} componentId - Id of the component that the keyMap belongs to
       */

    }, {
      key: "deregisterGlobalKeyMap",
      value: function deregisterGlobalKeyMap(componentId) {
        this._globalEventStrategy.deregisterKeyMap(componentId);
      }
      /********************************************************************************
       * Focus key events
       ********************************************************************************/

      /**
       * Registers the actions and handlers of a HotKeys component that has gained focus
       * @param {ComponentId} componentId - Id of the component that the keyMap belongs to
       * @param {KeyMap} actionNameToKeyMap - Map of actions to key expressions
       * @param {HandlersMap} actionNameToHandlersMap - Map of actions to handler functions
       * @param {Object} options Hash of options that configure how the actions
       *        and handlers are associated and called.
       * @returns {FocusTreeId} The current focus tree's ID
       */

    }, {
      key: "enableHotKeys",
      value: function enableHotKeys(componentId) {
        var actionNameToKeyMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var actionNameToHandlersMap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var options = arguments.length > 3 ? arguments[3] : undefined;
        return this._focusOnlyEventStrategy.enableHotKeys(componentId, actionNameToKeyMap, actionNameToHandlersMap, options);
      }
      /**
       * Handles when a HotKeys component that is in focus updates its props and changes
       * either the keyMap or handlers prop value
       * @param {FocusTreeId} focusTreeId - The ID of the focus tree the component is part of.
       *        Used to identify (and ignore) stale updates.
       * @param {ComponentId} componentId - The component index of the component to
       *        update
       * @param {KeyMap} actionNameToKeyMap - Map of key sequences to action names
       * @param {HandlersMap} actionNameToHandlersMap - Map of action names to handler
       *        functions
       * @param {Object} options Hash of options that configure how the actions
       *        and handlers are associated and called.
       */

    }, {
      key: "updateEnabledHotKeys",
      value: function updateEnabledHotKeys(focusTreeId, componentId) {
        var actionNameToKeyMap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var actionNameToHandlersMap = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
        var options = arguments.length > 4 ? arguments[4] : undefined;
        return this._focusOnlyEventStrategy.updateEnabledHotKeys(focusTreeId, componentId, actionNameToKeyMap, actionNameToHandlersMap, options);
      }
      /**
       * Handles when a component loses focus by resetting the internal state, ready to
       * receive the next tree of focused HotKeys components
       * @param {FocusTreeId} focusTreeId - Id of focus tree component thinks it's
       *        apart of
       * @param {ComponentId} componentId - Index of component that is blurring
       * @returns {Boolean} Whether the component still has event propagation yet to handle
       */

    }, {
      key: "disableHotKeys",
      value: function disableHotKeys(focusTreeId, componentId) {
        return this._focusOnlyEventStrategy.disableHotKeys(focusTreeId, componentId);
      }
      /**
       * Records a keydown keyboard event and matches it against the list of pre-registered
       * event handlers, calling the first matching handler with the highest priority if
       * one exists.
       *
       * This method is called many times as a keyboard event bubbles up through the React
       * render tree. The event is only registered the first time it is seen and results
       * of some calculations are cached. The event is matched against the handlers registered
       * at each component level, to ensure the proper handler declaration scoping.
       * @param {KeyboardEvent} event - Event containing the key name and state
       * @param {FocusTreeId} focusTreeId - Id of focus tree component thinks it's apart of
       * @param {ComponentId} componentId - The id of the component that is currently handling
       *        the keyboard event as it bubbles towards the document root.
       * @param {Object} options - Hash of options that configure how the event is handled.
       * @returns Whether the event was discarded because it was part of an old focus tree
       */

    }, {
      key: "handleKeydown",
      value: function handleKeydown(event, focusTreeId, componentId, options) {
        if (isFromFocusOnlyComponent(focusTreeId)) {
          return this._focusOnlyEventStrategy.handleKeydown(event, focusTreeId, componentId, options);
        }
      }
      /**
       * Records a keypress keyboard event and matches it against the list of pre-registered
       * event handlers, calling the first matching handler with the highest priority if
       * one exists.
       *
       * This method is called many times as a keyboard event bubbles up through the React
       * render tree. The event is only registered the first time it is seen and results
       * of some calculations are cached. The event is matched against the handlers registered
       * at each component level, to ensure the proper handler declaration scoping.
       * @param {KeyboardEvent} event - Event containing the key name and state
       * @param {FocusTreeId} focusTreeId Id - of focus tree component thinks it's apart of
       * @param {ComponentId} componentId - The index of the component that is currently handling
       *        the keyboard event as it bubbles towards the document root.
       * @param {Object} options - Hash of options that configure how the event
       *        is handled.
       */

    }, {
      key: "handleKeypress",
      value: function handleKeypress(event, focusTreeId, componentId, options) {
        if (isFromFocusOnlyComponent(focusTreeId)) {
          return this._focusOnlyEventStrategy.handleKeypress(event, focusTreeId, componentId, options);
        }
      }
      /**
       * Records a keyup keyboard event and matches it against the list of pre-registered
       * event handlers, calling the first matching handler with the highest priority if
       * one exists.
       *
       * This method is called many times as a keyboard event bubbles up through the React
       * render tree. The event is only registered the first time it is seen and results
       * of some calculations are cached. The event is matched against the handlers registered
       * at each component level, to ensure the proper handler declaration scoping.
       * @param {KeyboardEvent} event Event containing the key name and state
       * @param {FocusTreeId} focusTreeId Id of focus tree component thinks it's apart of
       * @param {ComponentId} componentId The index of the component that is currently handling
       *        the keyboard event as it bubbles towards the document root.
       * @param {Object} options Hash of options that configure how the event
       *        is handled.
       */

    }, {
      key: "handleKeyup",
      value: function handleKeyup(event, focusTreeId, componentId, options) {
        if (isFromFocusOnlyComponent(focusTreeId)) {
          return this._focusOnlyEventStrategy.handleKeyup(event, focusTreeId, componentId, options);
        }
      }
      /********************************************************************************
       * Global key events
       ********************************************************************************/

      /**
       * Registers the actions and handlers of a HotKeys component that has mounted
       * @param {ComponentId} componentId - Id of the component that the keyMap belongs to
       * @param {KeyMap} actionNameToKeyMap - Map of actions to key expressions
       * @param {HandlersMap} actionNameToHandlersMap - Map of actions to handler functions
       * @param {Object} options Hash of options that configure how the actions
       *        and handlers are associated and called.
       * @param {Object} eventOptions - Options for how the event should be handled
       * @returns {ComponentId} A unique component ID to assign to the focused HotKeys
       *        component and passed back when handling a key event
       */

    }, {
      key: "enableGlobalHotKeys",
      value: function enableGlobalHotKeys(componentId) {
        var actionNameToKeyMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var actionNameToHandlersMap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var options = arguments.length > 3 ? arguments[3] : undefined;
        var eventOptions = arguments.length > 4 ? arguments[4] : undefined;
        return this._globalEventStrategy.enableHotKeys(componentId, actionNameToKeyMap, actionNameToHandlersMap, options, eventOptions);
      }
      /**
       * Handles when a mounted global HotKeys component updates its props and changes
       * either the keyMap or handlers prop value
       * @param {ComponentId} componentId - The component index of the component to
       *        update
       * @param {KeyMap} actionNameToKeyMap - Map of actions to key expressions
       * @param {HandlersMap} actionNameToHandlersMap - Map of actions to handler functions
       * @param {Object} options Hash of options that configure how the actions
       *        and handlers are associated and called.
       * @param {Object} eventOptions - Options for how the event should be handled
       */

    }, {
      key: "updateEnabledGlobalHotKeys",
      value: function updateEnabledGlobalHotKeys(componentId) {
        var actionNameToKeyMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var actionNameToHandlersMap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var options = arguments.length > 3 ? arguments[3] : undefined;
        var eventOptions = arguments.length > 4 ? arguments[4] : undefined;
        return this._globalEventStrategy.updateEnabledHotKeys(componentId, actionNameToKeyMap, actionNameToHandlersMap, options, eventOptions);
      }
      /**
       * Handles when a component is unmounted
       * @param {ComponentId} componentId - Index of component that is being unmounted
       */

    }, {
      key: "disableGlobalHotKeys",
      value: function disableGlobalHotKeys(componentId) {
        return this._globalEventStrategy.disableHotKeys(componentId);
      }
      /**
       * Records a keydown keyboard event and matches it against the list of pre-registered
       * event handlers, calling the first matching handler with the highest priority if
       * one exists.
       *
       * This method is called once when a keyboard event bubbles up to document, and checks
       * the keymaps for all of the mounted global HotKey components.
       * @param {KeyboardEvent} event - Event containing the key name and state
       */

    }, {
      key: "handleGlobalKeydown",
      value: function handleGlobalKeydown(event) {
        return this._globalEventStrategy.handleKeydown(event);
      }
      /**
       * Records a keypress keyboard event and matches it against the list of pre-registered
       * event handlers, calling the first matching handler with the highest priority if
       * one exists.
       *
       * This method is called once when a keyboard event bubbles up to document, and checks
       * the keymaps for all of the mounted global HotKey components.
       * @param {KeyboardEvent} event - Event containing the key name and state
       */

    }, {
      key: "handleGlobalKeypress",
      value: function handleGlobalKeypress(event) {
        return this._globalEventStrategy.handleKeypress(event);
      }
      /**
       * Records a keyup keyboard event and matches it against the list of pre-registered
       * event handlers, calling the first matching handler with the highest priority if
       * one exists.
       *
       * This method is called once when a keyboard event bubbles up to document, and checks
       * the keymaps for all of the mounted global HotKey components.
       * @param {KeyboardEvent} event - Event containing the key name and state
       */

    }, {
      key: "handleGlobalKeyup",
      value: function handleGlobalKeyup(event) {
        return this._globalEventStrategy.handleKeyup(event);
      }
      /**
       * Ignores the next keyboard event immediately, rather than waiting for it to
       * match the ignoreEventsCondition
       * @param {KeyboardEvent} event keyboard event to ignore
       * @see Configuration.ignoreEventsCondition
       */

    }, {
      key: "ignoreEvent",
      value: function ignoreEvent(event) {
        this._focusOnlyEventStrategy.ignoreEvent(event);
      }
      /**
       * Forces the observation of the next keyboard event immediately, disregarding whether
       * the event matches the ignoreKeyEventsCondition
       * @param {KeyboardEvent} event keyboard event to force the observation of
       * @see Configuration.ignoreEventsCondition
       */

    }, {
      key: "forceObserveEvent",
      value: function forceObserveEvent(event) {
        this._focusOnlyEventStrategy.forceObserveEvent(event);
      }
    }, {
      key: "reactAppHistoryWithEvent",
      value: function reactAppHistoryWithEvent(key, type) {
        var currentEvent = this._focusOnlyEventStrategy.currentEvent;

        if (currentEvent.key === key && currentEvent.type === type) {
          if (currentEvent.handled) {
            return EventResponse.handled;
          } else if (currentEvent.ignored) {
            return EventResponse.ignored;
          } else {
            return EventResponse.seen;
          }
        } else {
          return EventResponse.unseen;
        }
      }
    }, {
      key: "simulatePendingKeyPressEvents",
      value: function simulatePendingKeyPressEvents() {
        this._focusOnlyEventStrategy.simulatePendingKeyPressEvents();
      }
    }, {
      key: "simulatePendingKeyUpEvents",
      value: function simulatePendingKeyUpEvents() {
        this._focusOnlyEventStrategy.simulatePendingKeyUpEvents();
      }
    }, {
      key: "isGlobalListenersBound",
      value: function isGlobalListenersBound() {
        return this._globalEventStrategy.listenersBound;
      }
    }]);

    return KeyEventManager;
  }();

  /**
   * Wraps a React component in a HotKeysEnabled component, which passes down the
   * callbacks and options necessary for React Hotkeys to work as a single prop value,
   * hotkeys. These must be unwrapped and applied to a DOM-mountable element within
   * the wrapped component (e.g. div, span, input, etc) in order for the key events
   * to be recorded.
   *
   * @param {React.ComponentClass} Component - Component class to wrap
   * @param {Object} hotKeysOptions - Options that become the wrapping component's
   *                 default prop values
   * @returns {React.ComponentClass} Wrapped component that is passed all of the React hotkeys
   * props in a single value, hotkeys.
   */

  function withHotKeys(Component) {
    var _class, _temp;

    var hotKeysOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    function mergeWithOptions(key, props) {
      return _objectSpread({}, hotKeysOptions[key] || {}, props[key] || {});
    }

    function getHandlers(props) {
      return mergeWithOptions('handlers', props);
    }

    function getKeyMap(props) {
      return mergeWithOptions('keyMap', props);
    }
    /**
     * Component that listens to key events when one of its children are in focus and
     * selectively triggers actions (that may be handled by handler functions) when a
     * sequence of events matches a list of pre-defined sequences or combinations
     */


    return _temp = _class =
    /*#__PURE__*/
    function (_PureComponent) {
      _inherits(HotKeysEnabled, _PureComponent);

      function HotKeysEnabled(props) {
        var _this;

        _classCallCheck(this, HotKeysEnabled);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(HotKeysEnabled).call(this, props));
        /**
         * The focus and blur handlers need access to the current component as 'this'
         * so they need to be bound to it when the component is instantiated
         */

        _this._handleFocus = _this._handleFocus.bind(_assertThisInitialized(_this));
        _this._handleBlur = _this._handleBlur.bind(_assertThisInitialized(_this));
        _this._handleKeyDown = _this._handleKeyDown.bind(_assertThisInitialized(_this));
        _this._handleKeyPress = _this._handleKeyPress.bind(_assertThisInitialized(_this));
        _this._handleKeyUp = _this._handleKeyUp.bind(_assertThisInitialized(_this));
        _this._componentIsFocused = _this._componentIsFocused.bind(_assertThisInitialized(_this));
        _this._id = KeyEventManager.getInstance().registerKeyMap(props.keyMap);
        return _this;
      }

      _createClass(HotKeysEnabled, [{
        key: "getChildContext",
        value: function getChildContext() {
          return {
            hotKeysParentId: this._id
          };
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props = this.props,
              keyMap = _this$props.keyMap,
              handlers = _this$props.handlers,
              allowChanges = _this$props.allowChanges,
              props = _objectWithoutProperties(_this$props, ["keyMap", "handlers", "allowChanges"]);

          var hotKeys = {
            onFocus: this._wrapFunction('onFocus', this._handleFocus),
            onBlur: this._wrapFunction('onBlur', this._handleBlur),
            tabIndex: Configuration.option('defaultTabIndex')
          };

          if (this._shouldBindKeyListeners()) {
            hotKeys.onKeyDown = this._handleKeyDown;
            hotKeys.onKeyPress = this._handleKeyPress;
            hotKeys.onKeyUp = this._handleKeyUp;
          }

          return React__default.createElement(Component, _extends({
            hotKeys: hotKeys
          }, props));
        }
      }, {
        key: "_shouldBindKeyListeners",
        value: function _shouldBindKeyListeners() {
          var keyMap = getKeyMap(this.props);
          return !isEmpty(keyMap) || Configuration.option('enableHardSequences') && this._handlersIncludeHardSequences(keyMap, getHandlers(this.props));
        }
      }, {
        key: "_handlersIncludeHardSequences",
        value: function _handlersIncludeHardSequences(keyMap, handlers) {
          return Object.keys(handlers).some(function (action) {
            return !keyMap[action] && KeyCombinationSerializer.isValidKeySerialization(action);
          });
        }
      }, {
        key: "_wrapFunction",
        value: function _wrapFunction(propName, func) {
          var _this2 = this;

          if (typeof this.props[propName] === 'function') {
            return function (event) {
              _this2.props[propName](event);

              func(event);
            };
          } else {
            return func;
          }
        }
      }, {
        key: "_focusTreeIdsPush",
        value: function _focusTreeIdsPush(componentId) {
          if (!this._focusTreeIds) {
            this._focusTreeIds = [];
          }

          this._focusTreeIds.push(componentId);
        }
      }, {
        key: "_focusTreeIdsShift",
        value: function _focusTreeIdsShift() {
          if (this._focusTreeIds) {
            this._focusTreeIds.shift();
          }
        }
      }, {
        key: "_getFocusTreeId",
        value: function _getFocusTreeId() {
          if (this._focusTreeIds) {
            return this._focusTreeIds[0];
          }
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(previousProps) {
          var keyEventManager = KeyEventManager.getInstance();
          keyEventManager.reregisterKeyMap(this._id, this.props.keyMap);

          if (this._componentIsFocused() && (this.props.allowChanges || !Configuration.option('ignoreKeymapAndHandlerChangesByDefault'))) {
            var _this$props2 = this.props,
                keyMap = _this$props2.keyMap,
                handlers = _this$props2.handlers;
            keyEventManager.updateEnabledHotKeys(this._getFocusTreeId(), this._id, keyMap, handlers, this._getComponentOptions());
          }
        }
      }, {
        key: "_componentIsFocused",
        value: function _componentIsFocused() {
          return this._focused === true;
        }
      }, {
        key: "componentDidMount",
        value: function componentDidMount() {
          var keyEventManager = KeyEventManager.getInstance();
          var hotKeysParentId = this.context.hotKeysParentId;
          keyEventManager.registerComponentMount(this._id, hotKeysParentId);
        }
        /**
         * Handles when the component gains focus by calling onFocus prop, if defined, and
         * registering itself with the KeyEventManager
         * @private
         */

      }, {
        key: "_handleFocus",
        value: function _handleFocus() {
          if (this.props.onFocus) {
            var _this$props3;

            (_this$props3 = this.props).onFocus.apply(_this$props3, arguments);
          }

          var focusTreeId = KeyEventManager.getInstance().enableHotKeys(this._id, getKeyMap(this.props), getHandlers(this.props), this._getComponentOptions());

          this._focusTreeIdsPush(focusTreeId);

          this._focused = true;
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          var keyEventManager = KeyEventManager.getInstance();
          keyEventManager.deregisterKeyMap(this._id);
          keyEventManager.registerComponentUnmount();

          this._handleBlur();
        }
        /**
         * Handles when the component loses focus by calling the onBlur prop, if defined
         * and removing itself from the KeyEventManager
         * @private
         */

      }, {
        key: "_handleBlur",
        value: function _handleBlur() {
          if (this.props.onBlur) {
            var _this$props4;

            (_this$props4 = this.props).onBlur.apply(_this$props4, arguments);
          }

          var retainCurrentFocusTreeId = KeyEventManager.getInstance().disableHotKeys(this._getFocusTreeId(), this._id);

          if (!retainCurrentFocusTreeId) {
            this._focusTreeIdsShift();
          }

          this._focused = false;
        }
        /**
         * Delegates handing the keydown event to the KeyEventManager
         * @param {KeyboardEvent} event Key board event containing key name and state
         * @private
         */

      }, {
        key: "_handleKeyDown",
        value: function _handleKeyDown(event) {
          var discardFocusTreeId = KeyEventManager.getInstance().handleKeydown(event, this._getFocusTreeId(), this._id, this._getEventOptions());

          if (discardFocusTreeId) {
            this._focusTreeIdsShift();
          }
        }
        /**
         * Delegates handing the keypress event to the KeyEventManager
         * @param {KeyboardEvent} event Key board event containing key name and state
         * @private
         */

      }, {
        key: "_handleKeyPress",
        value: function _handleKeyPress(event) {
          var discardFocusTreeId = KeyEventManager.getInstance().handleKeypress(event, this._getFocusTreeId(), this._id, this._getEventOptions());

          if (discardFocusTreeId) {
            this._focusTreeIdsShift();
          }
        }
        /**
         * Delegates handing the keyup event to the KeyEventManager
         * @param {KeyboardEvent} event Key board event containing key name and state
         * @private
         */

      }, {
        key: "_handleKeyUp",
        value: function _handleKeyUp(event) {
          var discardFocusTreeId = KeyEventManager.getInstance().handleKeyup(event, this._getFocusTreeId(), this._id, this._getEventOptions());

          if (discardFocusTreeId) {
            this._focusTreeIdsShift();
          }
        }
      }, {
        key: "_getComponentOptions",
        value: function _getComponentOptions() {
          return {
            defaultKeyEvent: Configuration.option('defaultKeyEvent')
          };
        }
      }, {
        key: "_getEventOptions",
        value: function _getEventOptions() {
          return {
            ignoreEventsCondition: Configuration.option('ignoreEventsCondition')
          };
        }
      }]);

      return HotKeysEnabled;
    }(React.PureComponent), _defineProperty(_class, "propTypes", {
      /**
       * A unique key to associate with KeyEventMatchers that allows associating handler
       * functions at a later stage
       * @typedef {String} ActionName
       */

      /**
       * Name of a key event
       * @typedef {'keyup'|'keydown'|'keypress'} KeyEventName
       */

      /**
       * A string or list of strings, that represent a sequence of one or more keys
       * @typedef {String | Array.<String>} MouseTrapKeySequence
       * @see {@link https://craig.is/killing/mice} for support key sequences
       */

      /**
       * Options for the mapping of a key sequence and event
       * @typedef {Object} KeyEventOptions
       * @property {MouseTrapKeySequence} sequence - The key sequence required to satisfy a
       *           KeyEventDescription
       * @property {KeyEventName} action - The keyboard state required to satisfy a
       *           KeyEventDescription
       */

      /**
       * A description of key sequence of one or more key combinations
       * @typedef {MouseTrapKeySequence|KeyMapOptions|Array<MouseTrapKeySequence>} KeyEventDescription
       */

      /**
       * A mapping from ActionName to KeyEventDescription
       * @typedef {Object.<ActionName, KeyEventDescription>} KeyMap
       */

      /**
       * A map from action names to Mousetrap or Browser key sequences
       * @type {KeyMap}
       */
      keyMap: PropTypes.object,

      /**
       * A map from action names to event handler functions
       * @typedef {Object<ActionName, Function>} HandlersMap
       */

      /**
       * A map from action names to event handler functions
       * @type {HandlersMap}
       */
      handlers: PropTypes.object,

      /**
       * Function to call when this component gains focus in the browser
       * @type {Function}
       */
      onFocus: PropTypes.func,

      /**
       * Function to call when this component loses focus in the browser
       * @type {Function}
       */
      onBlur: PropTypes.func,

      /**
       * Whether the keyMap or handlers are permitted to change after the
       * component mounts. If false, changes to the keyMap and handlers
       * props will be ignored
       */
      allowChanges: PropTypes.bool
    }), _defineProperty(_class, "contextTypes", {
      hotKeysParentId: PropTypes.number
    }), _defineProperty(_class, "childContextTypes", {
      hotKeysParentId: PropTypes.number
    }), _temp;
  }

  /**
   * @see HotKeysEnabled
   */

  var HotKeysWrapper =
  /*#__PURE__*/
  function (_Component) {
    _inherits(HotKeysWrapper, _Component);

    function HotKeysWrapper() {
      _classCallCheck(this, HotKeysWrapper);

      return _possibleConstructorReturn(this, _getPrototypeOf(HotKeysWrapper).apply(this, arguments));
    }

    _createClass(HotKeysWrapper, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            hotKeys = _this$props.hotKeys,
            innerRef = _this$props.innerRef,
            component = _this$props.component,
            remainingProps = _objectWithoutProperties(_this$props, ["hotKeys", "innerRef", "component"]);

        var DefaultComponent = component || Configuration.option('defaultComponent');
        return React__default.createElement(DefaultComponent, _objectSpread({}, hotKeys, {
          ref: innerRef
        }, remainingProps));
      }
    }]);

    return HotKeysWrapper;
  }(React.Component);

  var HotKeys = withHotKeys(HotKeysWrapper);
  HotKeys.propTypes = {
    /**
     * A ref to add to the underlying DOM-mountable node
     */
    innerRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
  };

  var GlobalHotKeys =
  /*#__PURE__*/
  function (_Component) {
    _inherits(GlobalHotKeys, _Component);

    _createClass(GlobalHotKeys, [{
      key: "getChildContext",
      value: function getChildContext() {
        return {
          globalHotKeysParentId: this._id
        };
      }
    }, {
      key: "render",
      value: function render() {
        return this.props.children || null;
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        var keyEventManager = KeyEventManager.getInstance();
        keyEventManager.reregisterGlobalKeyMap(this._id, this.props.keyMap);

        if (this.props.allowChanges || !Configuration.option('ignoreKeymapAndHandlerChangesByDefault')) {
          var _this$props = this.props,
              keyMap = _this$props.keyMap,
              handlers = _this$props.handlers;
          /**
           * Component defines global hotkeys, so any changes to props may have changes
           * that should have immediate effect
           */

          keyEventManager.updateEnabledGlobalHotKeys(this._id, keyMap, handlers, this._getComponentOptions(), this._getEventOptions());
        }
      }
    }]);

    function GlobalHotKeys(props) {
      var _this;

      _classCallCheck(this, GlobalHotKeys);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(GlobalHotKeys).call(this, props));
      _this._id = KeyEventManager.getInstance().registerGlobalKeyMap(props.keyMap);
      return _this;
    }

    _createClass(GlobalHotKeys, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this$props2 = this.props,
            keyMap = _this$props2.keyMap,
            handlers = _this$props2.handlers;
        var globalHotKeysParentId = this.context.globalHotKeysParentId;
        var keyEventManager = KeyEventManager.getInstance();
        keyEventManager.registerGlobalComponentMount(this._id, globalHotKeysParentId);
        keyEventManager.enableGlobalHotKeys(this._id, keyMap, handlers, this._getComponentOptions(), this._getEventOptions());
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        var keyEventManager = KeyEventManager.getInstance();
        keyEventManager.deregisterGlobalKeyMap(this._id);
        keyEventManager.disableGlobalHotKeys(this._id);
        keyEventManager.registerGlobalComponentUnmount();
      }
    }, {
      key: "_getComponentOptions",
      value: function _getComponentOptions() {
        return {
          defaultKeyEvent: Configuration.option('defaultKeyEvent')
        };
      }
    }, {
      key: "_getEventOptions",
      value: function _getEventOptions() {
        return {
          ignoreEventsCondition: Configuration.option('ignoreEventsCondition')
        };
      }
    }]);

    return GlobalHotKeys;
  }(React.Component);

  _defineProperty(GlobalHotKeys, "propTypes", {
    /**
     * A map from action names to Mousetrap or Browser key sequences
     * @type {KeyMap}
     */
    keyMap: PropTypes.object,

    /**
     * A map from action names to event handler functions
     * @typedef {Object<ActionName, Function>} HandlersMap
     */

    /**
     * A map from action names to event handler functions
     * @type {HandlersMap}
     */
    handlers: PropTypes.object,

    /**
     * Whether the keyMap or handlers are permitted to change after the
     * component mounts. If false, changes to the keyMap and handlers
     * props will be ignored
     */
    allowChanges: PropTypes.bool
  });

  GlobalHotKeys.contextTypes = {
    globalHotKeysParentId: PropTypes.number
  };
  GlobalHotKeys.childContextTypes = GlobalHotKeys.contextTypes;

  /**
   * Wraps a React component in a HotKeysIgnoreOverride component, which passes down the
   * callbacks and options necessary for React Hotkeys to work as a single prop value,
   * hotkeys. These must be unwrapped and applied to a DOM-mountable element within
   * the wrapped component (e.g. div, span, input, etc) in order for the key events
   * to be recorded.
   *
   * @param {React.ComponentClass} Component - Component class to wrap
   * @param {Object} hotKeysIgnoreOptions - Options that become the wrapping component's
   *                 default prop values
   * @returns {React.ComponentClass} Wrapped component that is passed all of the React
   * hotkeys props in a single value, hotkeys.
   */

  function withHotKeysIgnoreOverride(Component) {
    var _class, _temp;

    var hotKeysIgnoreOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      only: [],
      except: []
    };
    var eventManagerMethod = arguments.length > 2 ? arguments[2] : undefined;

    /**
     * A component that causes React Hotkeys to ignore the results of
     * Configuration.ignoreEventCondition and instead either force the event to be
     * ignored or observed. By default, this is all key events, but you can use
     * the only prop to provide a whitelist, or the except prop to pass a blacklist.
     */
    return _temp = _class =
    /*#__PURE__*/
    function (_PureComponent) {
      _inherits(HotKeysIgnoreOverride, _PureComponent);

      function HotKeysIgnoreOverride(props) {
        var _this;

        _classCallCheck(this, HotKeysIgnoreOverride);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(HotKeysIgnoreOverride).call(this, props));
        _this._handleKeyEvent = _this._handleKeyEvent.bind(_assertThisInitialized(_this));
        _this._reloadDictionaries = _this._reloadDictionaries.bind(_assertThisInitialized(_this));
        return _this;
      }

      _createClass(HotKeysIgnoreOverride, [{
        key: "render",
        value: function render() {
          var _this$props = this.props,
              only = _this$props.only,
              except = _this$props.except,
              props = _objectWithoutProperties(_this$props, ["only", "except"]);

          var hotKeys = {
            onKeyDown: this._handleKeyEvent,
            onKeyPress: this._handleKeyEvent,
            onKeyUp: this._handleKeyEvent,
            onFocus: this._reloadDictionaries
          };
          return React__default.createElement(Component, _extends({
            hotKeys: hotKeys
          }, props));
        }
      }, {
        key: "_reloadDictionaries",
        value: function _reloadDictionaries() {
          var _this$props2 = this.props,
              only = _this$props2.only,
              except = _this$props2.except;
          this._onlyDict = keyDictionary(only);
          this._exceptDict = keyDictionary(except);
        }
      }, {
        key: "_shouldIgnoreEvent",
        value: function _shouldIgnoreEvent(_ref) {
          var key = _ref.key;

          if (isEmpty(this._onlyDict)) {
            if (isEmpty(this._exceptDict)) {
              return true;
            } else {
              return !this._exceptDict[key];
            }
          } else {
            if (isEmpty(this._exceptDict)) {
              return this._onlyDict[key];
            } else {
              return this._onlyDict[key] && !this._exceptDict[key];
            }
          }
        }
      }, {
        key: "_handleKeyEvent",
        value: function _handleKeyEvent(event) {
          if (this._shouldIgnoreEvent(event)) {
            KeyEventManager.getInstance()[eventManagerMethod](event);
          }
        }
      }]);

      return HotKeysIgnoreOverride;
    }(React.PureComponent), _defineProperty(_class, "propTypes", {
      /**
       * The whitelist of keys that keyevents should be ignored. i.e. if you place
       * a key in this list, all events related to it will be ignored by react hotkeys
       */
      only: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),

      /**
       * The blacklist of keys that keyevents should be not ignored. i.e. if you place
       * a key in this list, all events related to it will be still be observed by react
       * hotkeys
       */
      except: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)])
    }), _defineProperty(_class, "defaultProps", hotKeysIgnoreOptions), _temp;
  }

  function keyDictionary(list) {
    return arrayFrom(list).reduce(function (memo, keyName) {
      var finalKeyName = standardizeKeyName(keyName);

      if (!isValidKey(finalKeyName)) {
        throw new InvalidKeyNameError(keyName);
      }

      [resolveAltShiftedAlias, resolveUnaltShiftedAlias, resolveShiftedAlias, resolveUnshiftedAlias, resolveAltedAlias, resolveUnaltedAlias].forEach(function (func) {
        memo[func(finalKeyName)] = true;
      });
      return memo;
    }, {});
  }

  /**
   * A component that causes React Hotkeys to ignore all matching key events
   * triggered by its children. By default, this is all key events, but you can use
   * the only prop to provide a whitelist, or the except prop to pass a blacklist (and
   * cause HotKeys components to still observe these events).
   *
   * @see HotKeysIgnoreOverride
   */

  var IgnoreKeys =
  /*#__PURE__*/
  function (_Component) {
    _inherits(IgnoreKeys, _Component);

    function IgnoreKeys() {
      _classCallCheck(this, IgnoreKeys);

      return _possibleConstructorReturn(this, _getPrototypeOf(IgnoreKeys).apply(this, arguments));
    }

    _createClass(IgnoreKeys, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            hotKeys = _this$props.hotKeys,
            remainingProps = _objectWithoutProperties(_this$props, ["hotKeys"]);

        var DefaultComponent = remainingProps.component || Configuration.option('defaultComponent');
        return React__default.createElement(DefaultComponent, _objectSpread({}, hotKeys, remainingProps));
      }
    }]);

    return IgnoreKeys;
  }(React.Component);

  var IgnoreKeys$1 = withHotKeysIgnoreOverride(IgnoreKeys, {}, 'ignoreEvent');

  /**
   * A component that forces React Hotkeys to observe all matching key events
   * triggered by its children, even if they are matched by Configuration.ignoreEventsCondition.
   * By default, this is all key events, but you can use the only prop to provide a
   * whitelist, or the except prop to pass a blacklist.
   *
   * @see HotKeysIgnoreOverride
   */

  var ObserveKeys =
  /*#__PURE__*/
  function (_Component) {
    _inherits(ObserveKeys, _Component);

    function ObserveKeys() {
      _classCallCheck(this, ObserveKeys);

      return _possibleConstructorReturn(this, _getPrototypeOf(ObserveKeys).apply(this, arguments));
    }

    _createClass(ObserveKeys, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            hotKeys = _this$props.hotKeys,
            remainingProps = _objectWithoutProperties(_this$props, ["hotKeys"]);

        var DefaultComponent = remainingProps.component || Configuration.option('defaultComponent');
        return React__default.createElement(DefaultComponent, _objectSpread({}, hotKeys, remainingProps));
      }
    }]);

    return ObserveKeys;
  }(React.Component);

  var ObserveKeys$1 = withHotKeysIgnoreOverride(ObserveKeys, {}, 'forceObserveEvent');

  /**
   * Wraps a React component in a HotKeysIgnored component, which passes down the
   * callbacks and options necessary for React Hotkeys to work as a single prop value,
   * hotkeys. These must be unwrapped and applied to a DOM-mountable element within
   * the wrapped component (e.g. div, span, input, etc) in order for the key events
   * to be recorded.
   */

  function withIgnoreKeys(Component) {
    var hotKeysIgnoreOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      only: [],
      except: []
    };
    return withHotKeysIgnoreOverride(Component, hotKeysIgnoreOptions, 'ignoreEvent');
  }

  /**
   * Wraps a React component in a ObserveKeys component, which passes down the
   * callbacks and options necessary for React Hotkeys to work as a single prop value,
   * hotkeys. These must be unwrapped and applied to a DOM-mountable element within
   * the wrapped component (e.g. div, span, input, etc) in order for the key events
   * to be recorded.
   */

  function withObserveKeys(Component) {
    var hotKeysIgnoreOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      only: [],
      except: []
    };
    return withHotKeysIgnoreOverride(Component, hotKeysIgnoreOptions, 'forceObserveEvent');
  }

  /**
   * Configure the behaviour of HotKeys
   * @param {Object} configuration Configuration object
   * @see Configuration.init
   */

  function configure() {
    var configuration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    Configuration.init(configuration);
  }

  /**
   * @typedef {Object.<ActionName, KeyEventDescription[]>} ApplicationKeyMap
   */

  /**
   * Generates and returns the application's key map, including not only those
   * that are live in the current focus, but all the key maps from all the
   * HotKeys and GlobalHotKeys components that are currently mounted
   * @returns {ApplicationKeyMap} The application's key map
   */

  function getApplicationKeyMap() {
    return KeyEventManager.getInstance().getApplicationKeyMap();
  }

  exports.GlobalHotKeys = GlobalHotKeys;
  exports.HotKeys = HotKeys;
  exports.IgnoreKeys = IgnoreKeys$1;
  exports.ObserveKeys = ObserveKeys$1;
  exports.configure = configure;
  exports.getApplicationKeyMap = getApplicationKeyMap;
  exports.withHotKeys = withHotKeys;
  exports.withIgnoreKeys = withIgnoreKeys;
  exports.withObserveKeys = withObserveKeys;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
