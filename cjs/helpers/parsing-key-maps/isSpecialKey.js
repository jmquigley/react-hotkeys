"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _SpecialKeysDictionary = _interopRequireDefault(require("../../const/SpecialKeysDictionary"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Whether the specified key is a valid key name that is not a single character or
 * symbol
 * @param {ReactKeyName} key Name of the key
 * @returns {boolean} Whether the key is a valid special key
 */
function isSpecialKey(key) {
  return !!_SpecialKeysDictionary["default"][key];
}

var _default = isSpecialKey;
exports["default"] = _default;