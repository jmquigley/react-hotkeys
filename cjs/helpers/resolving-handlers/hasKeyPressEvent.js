"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _KeysWithoutPressEventDictionary = _interopRequireDefault(require("../../const/KeysWithoutPressEventDictionary"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Whether the specified key name is for a key that has a native keypress event
 * @param {NormalizedKeyName} keyName Name of the key
 * @returns {Boolean} Whether the key has a native keypress event
 */
function hasKeyPressEvent(keyName) {
  return !_KeysWithoutPressEventDictionary["default"][keyName];
}

var _default = hasKeyPressEvent;
exports["default"] = _default;