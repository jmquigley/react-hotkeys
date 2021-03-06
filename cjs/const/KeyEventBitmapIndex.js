"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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
var _default = KeyEventBitmapIndex;
exports["default"] = _default;