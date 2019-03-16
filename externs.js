// check https://groups.google.com/forum/#!searchin/closure-compiler-discuss/advanced$20object$20parameter|sort:date/closure-compiler-discuss/HPTviIVbWcI/tqMtOEEaA7wJ

/**
 * @constructor
 * @param {Object<string, string>} options
 */
var lib = function(options) {};

/**
 * @typedef {{msg: string}}
 */
var MyParam;

/**
 * @param {MyParam} msg
 */
lib.prototype.instanceMethod = function(msg) {};

/**
 * @param {MyParam} msg
 */
lib.staticMethod = function(msg) {};
