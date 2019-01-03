import dictionaryFrom from '../utils/object/dictionaryFrom';

/**
 * Default configuration values
 * @private
 */
const _defaultConfiguration = {
  /**
   * The level of logging of its own behaviour React HotKeys should perform.
   * @type {LogLevel}
   */
  logLevel: 'warn',

  /**
   * Default key event key maps are bound to, if left unspecified
   * @type {KeyEventName}
   */
  defaultKeyEvent: 'keypress',

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
   * The function used to determine whether a key event should be ignored by React
   * Hotkeys. By default, keyboard events originating elements with a tag name in
   * ignoreTags, or a isContentEditable property of true, are ignored.
   *
   * @type {Function<KeyboardEvent>}
   */
  ignoreEventsCondition: (event) => {
    const { target } = event;

    if (target && target.tagName) {
      const tagName = target.tagName.toLowerCase();

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
  simulateMissingKeyPressEvents: true
};

const _configuration = {
  ..._defaultConfiguration
};

/**
 * Turn our array of tags to ignore into a dictionary, for faster lookup
 */
_configuration._ignoreTagsDict = dictionaryFrom(_configuration.ignoreTags, true);

/**
 * Handles getting and setting global configuration values, that affect how
 * React Hotkeys behaves
 * @class
 */
class Configuration {
  /**
   * Merges the specified configuration options with the current values.
   * @see _configuration
   */
  static init(configuration) {
    const { ignoreTags } = configuration;

    if (ignoreTags) {
      configuration._ignoreTagsDict = dictionaryFrom(configuration.ignoreTags);
    }

    if(process.env.NODE_ENV === 'production') {
      if (['verbose', 'debug', 'info'].indexOf(configuration.logLevel) !== -1) {
        console.warn(
          `React HotKeys: You have requested log level '${configuration.logLevel}' but for performance reasons, logging below severity level 'warning' is disabled in production. Please use the development build for complete logs.`
        )
      }
    }

    Object.keys(configuration).forEach((key) => {
      this.set(key, configuration[key])
    })
  }

  /**
   * Sets a single configuration value by name
   * @param {String} key - Name of the configuration value to set
   * @param {*} value - New value to set
   */
  static set(key, value) {
    _configuration[key] = value;
  }

  static reset(key) {
    _configuration[key] = _defaultConfiguration[key];
  }

  /**
   * Gets a single configuration value by name
   * @param {String} key - Name of the configuration value
   * @returns {*} Configuration value
   */
  static option(key) {
    return _configuration[key];
  }
}

export default Configuration;