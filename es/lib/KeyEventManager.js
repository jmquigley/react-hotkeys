function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

import Logger from './Logger';
import FocusOnlyKeyEventStrategy from './strategies/FocusOnlyKeyEventStrategy';
import GlobalKeyEventStrategy from './strategies/GlobalKeyEventStrategy';
import isFromFocusOnlyComponent from '../helpers/resolving-handlers/isFromFocusOnlyComponent';
import Configuration from './Configuration';
import EventResponse from '../const/EventResponse';
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
      this.logger.info('HotKeys: Window focused - clearing key history');

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

export default KeyEventManager;