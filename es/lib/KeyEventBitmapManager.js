function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @typedef {boolean[]} KeyEventBitmap A bitmap indicating which of the key events
 * have been registered to a particular key. The first bit is for the keydown event,
 * the second keypress and the third is for keyup.
 *
 * @example: A bitmap for an key that has seen the keydown and keypress event, but not
 * the keyup event
 *
 * [true,true,false]
 */
import isUndefined from '../utils/isUndefined';
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

export default KeyEventBitmapManager;