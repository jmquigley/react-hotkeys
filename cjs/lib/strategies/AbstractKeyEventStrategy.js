"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _KeyEventBitmapManager = _interopRequireDefault(require("../KeyEventBitmapManager"));

var _KeyEventBitmapIndex = _interopRequireDefault(require("../../const/KeyEventBitmapIndex"));

var _Logger = _interopRequireDefault(require("../Logger"));

var _KeyCombinationSerializer = _interopRequireDefault(require("../KeyCombinationSerializer"));

var _arrayFrom = _interopRequireDefault(require("../../utils/array/arrayFrom"));

var _indexFromEnd = _interopRequireDefault(require("../../utils/array/indexFromEnd"));

var _isObject = _interopRequireDefault(require("../../utils/object/isObject"));

var _isUndefined = _interopRequireDefault(require("../../utils/isUndefined"));

var _isEmpty = _interopRequireDefault(require("../../utils/collection/isEmpty"));

var _describeKeyEventType = _interopRequireDefault(require("../../helpers/logging/describeKeyEventType"));

var _KeyEventSequenceIndex = _interopRequireDefault(require("../../const/KeyEventSequenceIndex"));

var _KeySequenceParser = _interopRequireDefault(require("../KeySequenceParser"));

var _printComponent = _interopRequireDefault(require("../../helpers/logging/printComponent"));

var _resolveUnaltShiftedAlias = _interopRequireDefault(require("../../helpers/resolving-handlers/resolveUnaltShiftedAlias"));

var _resolveUnshiftedAlias = _interopRequireDefault(require("../../helpers/resolving-handlers/resolveUnshiftedAlias"));

var _resolveUnaltedAlias = _interopRequireDefault(require("../../helpers/resolving-handlers/resolveUnaltedAlias"));

var _resolveKeyAlias = _interopRequireDefault(require("../../helpers/resolving-handlers/resolveKeyAlias"));

var _resolveAltShiftedAlias = _interopRequireDefault(require("../../helpers/resolving-handlers/resolveAltShiftedAlias"));

var _resolveShiftedAlias = _interopRequireDefault(require("../../helpers/resolving-handlers/resolveShiftedAlias"));

var _resolveAltedAlias = _interopRequireDefault(require("../../helpers/resolving-handlers/resolveAltedAlias"));

var _Configuration = _interopRequireDefault(require("../Configuration"));

var _ModifierFlagsDictionary = _interopRequireDefault(require("../../const/ModifierFlagsDictionary"));

var _without = _interopRequireDefault(require("../../utils/collection/without"));

var _hasKeyPressEvent = _interopRequireDefault(require("../../helpers/resolving-handlers/hasKeyPressEvent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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

    this.logger = options.logger || new _Logger["default"]('warn');
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

      this.keyMapEventBitmap = _KeyEventBitmapManager["default"].newBitmap();
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
          var currentKeyState = keyState[_KeyEventSequenceIndex["default"].current];

          if (currentKeyState[_KeyEventBitmapIndex["default"].keydown] && !currentKeyState[_KeyEventBitmapIndex["default"].keyup]) {
            memo[keyName] = keyState;
          }

          return memo;
        }, {});
        this.keyCombinationHistory = [{
          keys: keysStillPressed,
          ids: _KeyCombinationSerializer["default"].serialize(keysStillPressed),
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
            (0, _arrayFrom["default"])(keyMap[actionName]).forEach(function (keySequenceOptions) {
              var sequence = function () {
                if ((0, _isObject["default"])(keySequenceOptions)) {
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
      this.logger.verbose(this._logPrefix(this.componentId), 'Registered keyMap:\n', "".concat((0, _printComponent["default"])(keyMap)));
      this.componentRegistry[this.componentId] = newComponentRegistryItem();
      this.logger.verbose(this._logPrefix(this.componentId), 'Registered component:\n', "".concat((0, _printComponent["default"])(this.componentRegistry[this.componentId])));
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
      if (!(0, _isUndefined["default"])(parentId)) {
        this.componentRegistry[componentId].parentId = parentId;
        this.componentRegistry[parentId].childIds.push(componentId);
      } else {
        this.rootComponentId = componentId;
      }

      this.logger.verbose(this._logPrefix(componentId), 'Registered component mount:\n', "".concat((0, _printComponent["default"])(this.componentRegistry[componentId])));
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
        parent.childIds = (0, _without["default"])(parent.childIds, componentId);
      }

      delete this.componentRegistry[componentId];
      this.logger.verbose(this._logPrefix(componentId), 'De-registered component. Remaining component Registry:\n', "".concat((0, _printComponent["default"])(this.componentRegistry)));
      delete this.keyMapRegistry[componentId];
      this.logger.verbose(this._logPrefix(componentId), 'De-registered key map. Remaining key map Registry:\n', "".concat((0, _printComponent["default"])(this.keyMapRegistry)));

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
      if (_Configuration["default"].option('enableHardSequences')) {
        return Object.keys(actionNameToHandlersMap).reduce(function (memo, actionNameOrKeyExpression) {
          var actionNameIsInKeyMap = !!actionNameToKeyMap[actionNameOrKeyExpression];

          if (!actionNameIsInKeyMap && _KeyCombinationSerializer["default"].isValidKeySerialization(actionNameOrKeyExpression)) {
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
        var keyMapOptions = (0, _arrayFrom["default"])(actionNameToKeyMap[actionName]);
        keyMapOptions.forEach(function (keyMapOption) {
          var _ref = function () {
            if ((0, _isObject["default"])(keyMapOption)) {
              var _sequence = keyMapOption.sequence,
                  action = keyMapOption.action;
              return {
                keySequence: _sequence,
                eventBitmapIndex: (0, _isUndefined["default"])(action) ? _KeyEventBitmapIndex["default"][options.defaultKeyEvent] : _KeyEventBitmapIndex["default"][action]
              };
            } else {
              return {
                keySequence: keyMapOption,
                eventBitmapIndex: _KeyEventBitmapIndex["default"][options.defaultKeyEvent]
              };
            }
          }(),
              keySequence = _ref.keySequence,
              eventBitmapIndex = _ref.eventBitmapIndex;

          var _KeySequenceParser$pa = _KeySequenceParser["default"].parse(keySequence, {
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


          _KeyEventBitmapManager["default"].setBit(_this2.keyMapEventBitmap, eventBitmapIndex);

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
        keyCombination.keys[keyAlias] = [_KeyEventBitmapManager["default"].newBitmap(), _KeyEventBitmapManager["default"].newBitmap(bitmapIndex)];
      } else {
        keyCombination.keys[keyAlias] = [_KeyEventBitmapManager["default"].clone(existingBitmap[1]), _KeyEventBitmapManager["default"].newBitmap(bitmapIndex)];
      }

      keyCombination.ids = _KeyCombinationSerializer["default"].serialize(keyCombination.keys);
      keyCombination.keyAliases = this._buildCombinationKeyAliases(keyCombination.keys);

      if (bitmapIndex === _KeyEventBitmapIndex["default"].keyup) {
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

      var keys = _objectSpread({}, this._withoutKeyUps(lastKeyCombination), _defineProperty({}, keyName, [_KeyEventBitmapManager["default"].newBitmap(), _KeyEventBitmapManager["default"].newBitmap(eventBitmapIndex)]));

      this.keyCombinationHistory.push({
        keys: keys,
        ids: _KeyCombinationSerializer["default"].serialize(keys),
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

        if (!keyState[_KeyEventSequenceIndex["default"].current][_KeyEventBitmapIndex["default"].keyup]) {
          memo[keyName] = keyState;
        }

        return memo;
      }, {});
    }
  }, {
    key: "_shouldSimulate",
    value: function _shouldSimulate(eventType, keyName) {
      var keyHasNativeKeypress = (0, _hasKeyPressEvent["default"])(keyName);

      if (eventType === _KeyEventBitmapIndex["default"].keypress) {
        return !keyHasNativeKeypress || keyHasNativeKeypress && this._keyIsCurrentlyDown('Meta');
      } else if (eventType === _KeyEventBitmapIndex["default"].keyup) {
        return keyHasNativeKeypress && keyIsCurrentlyTriggeringEvent(this._getCurrentKeyState('Meta'), _KeyEventBitmapIndex["default"].keyup);
      }

      return false;
    }
  }, {
    key: "_cloneAndMergeEvent",
    value: function _cloneAndMergeEvent(event, extra) {
      var eventAttributes = Object.keys(_ModifierFlagsDictionary["default"]).reduce(function (memo, eventAttribute) {
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
                    _keyMap.eventBitmap = _KeyEventBitmapManager["default"].newBitmap();
                  }

                  _KeyEventBitmapManager["default"].setBit(_keyMap.eventBitmap, keyMatcher.eventBitmapIndex);
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
        this.logger.verbose(this._logPrefix(componentSearchIndex), 'Internal key mapping:\n', "".concat((0, _printComponent["default"])(keyMap)));

        if (!keyMap || (0, _isEmpty["default"])(keyMap.sequences) || !keyMap.eventBitmap[eventBitmapIndex]) {
          /**
           * Component doesn't define any matchers for the current key event
           */
          this.logger.debug(this._logPrefix(componentSearchIndex), "Doesn't define a handler for '".concat(this._describeCurrentKeyCombination(), "' ").concat((0, _describeKeyEventType["default"])(eventBitmapIndex), "."));
        } else {
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
                  var subMatchDescription = _KeyCombinationSerializer["default"].serialize(combinationMatcher.keyDictionary);

                  this.logger.debug(this._logPrefix(componentSearchIndex), "Found action that matches '".concat(this._describeCurrentKeyCombination(), "' (sub-match: '").concat(subMatchDescription, "'): ").concat(combinationMatcher.events[eventBitmapIndex].actionName, ". Calling handler . . ."));
                  combinationMatcher.events[eventBitmapIndex].handler(event);

                  this._stopEventPropagationAfterHandlingIfEnabled(event, componentSearchIndex);

                  return true;
                }

                combinationIndex++;
              }
            }

            sequenceLengthCounter--;
          }

          var eventName = (0, _describeKeyEventType["default"])(eventBitmapIndex);
          this.logger.debug(this._logPrefix(componentSearchIndex), "No matching actions found for '".concat(this._describeCurrentKeyCombination(), "' ").concat(eventName, "."));
        }

        componentSearchIndex++;
      }
    }
  }, {
    key: "_stopEventPropagationAfterHandlingIfEnabled",
    value: function _stopEventPropagationAfterHandlingIfEnabled(event, componentId) {
      if (_Configuration["default"].option('stopEventPropagationAfterHandling')) {
        this._stopEventPropagation(event, componentId);

        return true;
      }

      return false;
    }
  }, {
    key: "_stopEventPropagationAfterIgnoringIfEnabled",
    value: function _stopEventPropagationAfterIgnoringIfEnabled(event, componentId) {
      if (_Configuration["default"].option('stopEventPropagationAfterIgnoring')) {
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
          var count = (0, _indexFromEnd["default"])(indexCounters, incrementer);
          var newIndex = (count + 1) % ((0, _indexFromEnd["default"])(idSizes, incrementer) || 1);
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
      Object.keys(_ModifierFlagsDictionary["default"]).forEach(function (modifierKey) {
        var modifierStillPressed = _this4._keyIsCurrentlyDown(modifierKey);

        _ModifierFlagsDictionary["default"][modifierKey].forEach(function (attributeName) {
          if (event[attributeName] === false && modifierStillPressed) {
            _this4._addToCurrentKeyCombination(modifierKey, _KeyEventBitmapIndex["default"].keyup);
          }
        });
      });
    }
  }, {
    key: "_keyIsCurrentlyDown",
    value: function _keyIsCurrentlyDown(keyName) {
      var keyState = this._getCurrentKeyState(keyName);

      var keyIsDown = keyIsCurrentlyTriggeringEvent(keyState, _KeyEventBitmapIndex["default"].keypress) && !keyIsCurrentlyTriggeringEvent(keyState, _KeyEventBitmapIndex["default"].keyup);
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
            return [_resolveAltShiftedAlias["default"], _resolveUnaltShiftedAlias["default"]];
          } else {
            return [_resolveShiftedAlias["default"], _resolveUnshiftedAlias["default"]];
          }
        } else {
          if (keyDictionary['Alt']) {
            return [_resolveAltedAlias["default"], _resolveUnaltedAlias["default"]];
          } else {
            var nop = function nop(keyName) {
              return [keyName];
            };

            return [nop, nop];
          }
        }
      }();

      return Object.keys(keyDictionary).reduce(function (memo, keyName) {
        (0, _resolveKeyAlias["default"])(keyName).forEach(function (normalizedKey) {
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
  return keyState && keyState[_KeyEventSequenceIndex["default"].current][eventBitmapIndex];
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
  return keyState && keyState[_KeyEventSequenceIndex["default"].previous][eventBitmapIndex];
}

var _default = AbstractKeyEventStrategy;
exports["default"] = _default;