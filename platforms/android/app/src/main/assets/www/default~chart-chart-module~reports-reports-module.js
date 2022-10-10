(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~chart-chart-module~reports-reports-module"],{

/***/ "/YwH":
/*!******************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/decorators/interfaces.js ***!
  \******************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=interfaces.js.map

/***/ }),

/***/ "/nDd":
/*!************************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/decorators/cordova-instance.js ***!
  \************************************************************************************************/
/*! exports provided: cordovaInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cordovaInstance", function() { return cordovaInstance; });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "AT/+");

/**
 * @param pluginObj
 * @param methodName
 * @param config
 * @param args
 */
function cordovaInstance(pluginObj, methodName, config, args) {
    args = Array.from(args);
    return Object(_common__WEBPACK_IMPORTED_MODULE_0__["wrapInstance"])(pluginObj, methodName, config).apply(this, args);
}
//# sourceMappingURL=cordova-instance.js.map

/***/ }),

/***/ "5npb":
/*!******************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/bootstrap.js ***!
  \******************************************************************************/
/*! exports provided: checkReady */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkReady", function() { return checkReady; });
/**
 *
 */
function checkReady() {
    if (typeof process === 'undefined') {
        var win_1 = typeof window !== 'undefined' ? window : {};
        var DEVICE_READY_TIMEOUT_1 = 5000;
        // To help developers using cordova, we listen for the device ready event and
        // log an error if it didn't fire in a reasonable amount of time. Generally,
        // when this happens, developers should remove and reinstall plugins, since
        // an inconsistent plugin is often the culprit.
        var before_1 = Date.now();
        var didFireReady_1 = false;
        win_1.document.addEventListener('deviceready', function () {
            console.log("Ionic Native: deviceready event fired after " + (Date.now() - before_1) + " ms");
            didFireReady_1 = true;
        });
        setTimeout(function () {
            if (!didFireReady_1 && win_1.cordova) {
                console.warn("Ionic Native: deviceready did not fire within " + DEVICE_READY_TIMEOUT_1 + "ms. This can happen when plugins are in an inconsistent state. Try removing plugins from plugins/ and reinstalling them.");
            }
        }, DEVICE_READY_TIMEOUT_1);
    }
}
//# sourceMappingURL=bootstrap.js.map

/***/ }),

/***/ "AT/+":
/*!**************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/decorators/common.js ***!
  \**************************************************************************************/
/*! exports provided: ERR_CORDOVA_NOT_AVAILABLE, ERR_PLUGIN_NOT_INSTALLED, getPromise, wrapPromise, checkAvailability, instanceAvailability, setIndex, callCordovaPlugin, callInstance, getPlugin, get, pluginWarn, cordovaWarn, wrap, wrapInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERR_CORDOVA_NOT_AVAILABLE", function() { return ERR_CORDOVA_NOT_AVAILABLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERR_PLUGIN_NOT_INSTALLED", function() { return ERR_PLUGIN_NOT_INSTALLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPromise", function() { return getPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapPromise", function() { return wrapPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkAvailability", function() { return checkAvailability; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "instanceAvailability", function() { return instanceAvailability; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setIndex", function() { return setIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callCordovaPlugin", function() { return callCordovaPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callInstance", function() { return callInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPlugin", function() { return getPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pluginWarn", function() { return pluginWarn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cordovaWarn", function() { return cordovaWarn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return wrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapInstance", function() { return wrapInstance; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");

var ERR_CORDOVA_NOT_AVAILABLE = { error: 'cordova_not_available' };
var ERR_PLUGIN_NOT_INSTALLED = { error: 'plugin_not_installed' };
/**
 * @param callback
 */
function getPromise(callback) {
    var tryNativePromise = function () {
        if (Promise) {
            return new Promise(function (resolve, reject) {
                callback(resolve, reject);
            });
        }
        else {
            console.error('No Promise support or polyfill found. To enable Ionic Native support, please add the es6-promise polyfill before this script, or run with a library like Angular or on a recent browser.');
        }
    };
    if (typeof window !== 'undefined' && window.angular) {
        var doc = window.document;
        var injector = window.angular.element(doc.querySelector('[ng-app]') || doc.body).injector();
        if (injector) {
            var $q = injector.get('$q');
            return $q(function (resolve, reject) {
                callback(resolve, reject);
            });
        }
        console.warn("Angular 1 was detected but $q couldn't be retrieved. This is usually when the app is not bootstrapped on the html or body tag. Falling back to native promises which won't trigger an automatic digest when promises resolve.");
    }
    return tryNativePromise();
}
/**
 * @param pluginObj
 * @param methodName
 * @param args
 * @param opts
 */
function wrapPromise(pluginObj, methodName, args, opts) {
    if (opts === void 0) { opts = {}; }
    var pluginResult, rej;
    var p = getPromise(function (resolve, reject) {
        if (opts.destruct) {
            pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return resolve(args);
            }, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return reject(args);
            });
        }
        else {
            pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, resolve, reject);
        }
        rej = reject;
    });
    // Angular throws an error on unhandled rejection, but in this case we have already printed
    // a warning that Cordova is undefined or the plugin is uninstalled, so there is no reason
    // to error
    if (pluginResult && pluginResult.error) {
        p.catch(function () { });
        typeof rej === 'function' && rej(pluginResult.error);
    }
    return p;
}
/**
 * @param pluginObj
 * @param methodName
 * @param args
 * @param opts
 */
function wrapOtherPromise(pluginObj, methodName, args, opts) {
    if (opts === void 0) { opts = {}; }
    return getPromise(function (resolve, reject) {
        var pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts);
        if (pluginResult) {
            if (pluginResult.error) {
                reject(pluginResult.error);
            }
            else if (pluginResult.then) {
                pluginResult.then(resolve).catch(reject);
            }
        }
        else {
            reject({ error: 'unexpected_error' });
        }
    });
}
/**
 * @param pluginObj
 * @param methodName
 * @param args
 * @param opts
 */
function wrapObservable(pluginObj, methodName, args, opts) {
    if (opts === void 0) { opts = {}; }
    return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
        var pluginResult;
        if (opts.destruct) {
            pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return observer.next(args);
            }, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return observer.error(args);
            });
        }
        else {
            pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, observer.next.bind(observer), observer.error.bind(observer));
        }
        if (pluginResult && pluginResult.error) {
            observer.error(pluginResult.error);
            observer.complete();
        }
        return function () {
            try {
                if (opts.clearFunction) {
                    if (opts.clearWithArgs) {
                        return callCordovaPlugin(pluginObj, opts.clearFunction, args, opts, observer.next.bind(observer), observer.error.bind(observer));
                    }
                    return callCordovaPlugin(pluginObj, opts.clearFunction, []);
                }
            }
            catch (e) {
                console.warn('Unable to clear the previous observable watch for', pluginObj.constructor.getPluginName(), methodName);
                console.warn(e);
            }
        };
    });
}
/**
 * Wrap the event with an observable
 *
 * @private
 * @param event event name
 * @param element The element to attach the event listener to
 * @returns {Observable}
 */
function wrapEventObservable(event, element) {
    element =
        typeof window !== 'undefined' && element
            ? get(window, element)
            : element || (typeof window !== 'undefined' ? window : {});
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(element, event);
}
/**
 * @param plugin
 * @param methodName
 * @param pluginName
 */
function checkAvailability(plugin, methodName, pluginName) {
    var pluginRef, pluginPackage;
    if (typeof plugin === 'string') {
        pluginRef = plugin;
    }
    else {
        pluginRef = plugin.constructor.getPluginRef();
        pluginName = plugin.constructor.getPluginName();
        pluginPackage = plugin.constructor.getPluginInstallName();
    }
    var pluginInstance = getPlugin(pluginRef);
    if (!pluginInstance || (!!methodName && typeof pluginInstance[methodName] === 'undefined')) {
        if (typeof window === 'undefined' || !window.cordova) {
            cordovaWarn(pluginName, methodName);
            return ERR_CORDOVA_NOT_AVAILABLE;
        }
        pluginWarn(pluginName, pluginPackage, methodName);
        return ERR_PLUGIN_NOT_INSTALLED;
    }
    return true;
}
/**
 * Checks if _objectInstance exists and has the method/property
 *
 * @param pluginObj
 * @param methodName
 * @private
 */
function instanceAvailability(pluginObj, methodName) {
    return pluginObj._objectInstance && (!methodName || typeof pluginObj._objectInstance[methodName] !== 'undefined');
}
/**
 * @param args
 * @param opts
 * @param resolve
 * @param reject
 */
function setIndex(args, opts, resolve, reject) {
    if (opts === void 0) { opts = {}; }
    // ignore resolve and reject in case sync
    if (opts.sync) {
        return args;
    }
    // If the plugin method expects myMethod(success, err, options)
    if (opts.callbackOrder === 'reverse') {
        // Get those arguments in the order [resolve, reject, ...restOfArgs]
        args.unshift(reject);
        args.unshift(resolve);
    }
    else if (opts.callbackStyle === 'node') {
        args.push(function (err, result) {
            if (err) {
                reject(err);
            }
            else {
                resolve(result);
            }
        });
    }
    else if (opts.callbackStyle === 'object' && opts.successName && opts.errorName) {
        var obj = {};
        obj[opts.successName] = resolve;
        obj[opts.errorName] = reject;
        args.push(obj);
    }
    else if (typeof opts.successIndex !== 'undefined' || typeof opts.errorIndex !== 'undefined') {
        var setSuccessIndex = function () {
            // If we've specified a success/error index
            if (opts.successIndex > args.length) {
                args[opts.successIndex] = resolve;
            }
            else {
                args.splice(opts.successIndex, 0, resolve);
            }
        };
        var setErrorIndex = function () {
            // We don't want that the reject cb gets spliced into the position of an optional argument that has not been
            // defined and thus causing non expected behavior.
            if (opts.errorIndex > args.length) {
                args[opts.errorIndex] = reject; // insert the reject fn at the correct specific index
            }
            else {
                args.splice(opts.errorIndex, 0, reject); // otherwise just splice it into the array
            }
        };
        if (opts.successIndex > opts.errorIndex) {
            setErrorIndex();
            setSuccessIndex();
        }
        else {
            setSuccessIndex();
            setErrorIndex();
        }
    }
    else {
        // Otherwise, let's tack them on to the end of the argument list
        // which is 90% of cases
        args.push(resolve);
        args.push(reject);
    }
    return args;
}
/**
 * @param pluginObj
 * @param methodName
 * @param args
 * @param opts
 * @param resolve
 * @param reject
 */
function callCordovaPlugin(pluginObj, methodName, args, opts, resolve, reject) {
    if (opts === void 0) { opts = {}; }
    // Try to figure out where the success/error callbacks need to be bound
    // to our promise resolve/reject handlers.
    args = setIndex(args, opts, resolve, reject);
    var availabilityCheck = checkAvailability(pluginObj, methodName);
    if (availabilityCheck === true) {
        var pluginInstance = getPlugin(pluginObj.constructor.getPluginRef());
        // eslint-disable-next-line prefer-spread
        return pluginInstance[methodName].apply(pluginInstance, args);
    }
    else {
        return availabilityCheck;
    }
}
/**
 * @param pluginObj
 * @param methodName
 * @param args
 * @param opts
 * @param resolve
 * @param reject
 */
function callInstance(pluginObj, methodName, args, opts, resolve, reject) {
    if (opts === void 0) { opts = {}; }
    args = setIndex(args, opts, resolve, reject);
    if (instanceAvailability(pluginObj, methodName)) {
        // eslint-disable-next-line prefer-spread
        return pluginObj._objectInstance[methodName].apply(pluginObj._objectInstance, args);
    }
}
/**
 * @param pluginRef
 */
function getPlugin(pluginRef) {
    if (typeof window !== 'undefined') {
        return get(window, pluginRef);
    }
    return null;
}
/**
 * @param element
 * @param path
 */
function get(element, path) {
    var paths = path.split('.');
    var obj = element;
    for (var i = 0; i < paths.length; i++) {
        if (!obj) {
            return null;
        }
        obj = obj[paths[i]];
    }
    return obj;
}
/**
 * @param pluginName
 * @param plugin
 * @param method
 */
function pluginWarn(pluginName, plugin, method) {
    if (method) {
        console.warn('Native: tried calling ' + pluginName + '.' + method + ', but the ' + pluginName + ' plugin is not installed.');
    }
    else {
        console.warn("Native: tried accessing the " + pluginName + " plugin but it's not installed.");
    }
    if (plugin) {
        console.warn("Install the " + pluginName + " plugin: 'ionic cordova plugin add " + plugin + "'");
    }
}
/**
 * @private
 * @param pluginName
 * @param method
 */
function cordovaWarn(pluginName, method) {
    if (typeof process === 'undefined') {
        if (method) {
            console.warn('Native: tried calling ' +
                pluginName +
                '.' +
                method +
                ', but Cordova is not available. Make sure to include cordova.js or run in a device/simulator');
        }
        else {
            console.warn('Native: tried accessing the ' +
                pluginName +
                ' plugin but Cordova is not available. Make sure to include cordova.js or run in a device/simulator');
        }
    }
}
/**
 * @param pluginObj
 * @param methodName
 * @param opts
 * @private
 */
var wrap = function (pluginObj, methodName, opts) {
    if (opts === void 0) { opts = {}; }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (opts.sync) {
            // Sync doesn't wrap the plugin with a promise or observable, it returns the result as-is
            return callCordovaPlugin(pluginObj, methodName, args, opts);
        }
        else if (opts.observable) {
            return wrapObservable(pluginObj, methodName, args, opts);
        }
        else if (opts.eventObservable && opts.event) {
            return wrapEventObservable(opts.event, opts.element);
        }
        else if (opts.otherPromise) {
            return wrapOtherPromise(pluginObj, methodName, args, opts);
        }
        else {
            return wrapPromise(pluginObj, methodName, args, opts);
        }
    };
};
/**
 * @param pluginObj
 * @param methodName
 * @param opts
 * @private
 */
function wrapInstance(pluginObj, methodName, opts) {
    if (opts === void 0) { opts = {}; }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (opts.sync) {
            return callInstance(pluginObj, methodName, args, opts);
        }
        else if (opts.observable) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
                var pluginResult;
                if (opts.destruct) {
                    pluginResult = callInstance(pluginObj, methodName, args, opts, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return observer.next(args);
                    }, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return observer.error(args);
                    });
                }
                else {
                    pluginResult = callInstance(pluginObj, methodName, args, opts, observer.next.bind(observer), observer.error.bind(observer));
                }
                if (pluginResult && pluginResult.error) {
                    observer.error(pluginResult.error);
                }
                return function () {
                    try {
                        if (opts.clearWithArgs) {
                            return callInstance(pluginObj, opts.clearFunction, args, opts, observer.next.bind(observer), observer.error.bind(observer));
                        }
                        return callInstance(pluginObj, opts.clearFunction, []);
                    }
                    catch (e) {
                        console.warn('Unable to clear the previous observable watch for', pluginObj.constructor.getPluginName(), methodName);
                        console.warn(e);
                    }
                };
            });
        }
        else if (opts.otherPromise) {
            return getPromise(function (resolve, reject) {
                var result;
                if (opts.destruct) {
                    result = callInstance(pluginObj, methodName, args, opts, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return resolve(args);
                    }, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return reject(args);
                    });
                }
                else {
                    result = callInstance(pluginObj, methodName, args, opts, resolve, reject);
                }
                if (result && result.then) {
                    result.then(resolve, reject);
                }
                else {
                    reject();
                }
            });
        }
        else {
            var pluginResult_1, rej_1;
            var p = getPromise(function (resolve, reject) {
                if (opts.destruct) {
                    pluginResult_1 = callInstance(pluginObj, methodName, args, opts, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return resolve(args);
                    }, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return reject(args);
                    });
                }
                else {
                    pluginResult_1 = callInstance(pluginObj, methodName, args, opts, resolve, reject);
                }
                rej_1 = reject;
            });
            // Angular throws an error on unhandled rejection, but in this case we have already printed
            // a warning that Cordova is undefined or the plugin is uninstalled, so there is no reason
            // to error
            if (pluginResult_1 && pluginResult_1.error) {
                p.catch(function () { });
                typeof rej_1 === 'function' && rej_1(pluginResult_1.error);
            }
            return p;
        }
    };
}
//# sourceMappingURL=common.js.map

/***/ }),

/***/ "FpJJ":
/*!************************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/decorators/cordova-property.js ***!
  \************************************************************************************************/
/*! exports provided: cordovaPropertyGet, cordovaPropertySet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cordovaPropertyGet", function() { return cordovaPropertyGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cordovaPropertySet", function() { return cordovaPropertySet; });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "AT/+");

/**
 * @param pluginObj
 * @param key
 */
function cordovaPropertyGet(pluginObj, key) {
    if (Object(_common__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(pluginObj, key) === true) {
        return Object(_common__WEBPACK_IMPORTED_MODULE_0__["getPlugin"])(pluginObj.constructor.getPluginRef())[key];
    }
    return null;
}
/**
 * @param pluginObj
 * @param key
 * @param value
 */
function cordovaPropertySet(pluginObj, key, value) {
    if (Object(_common__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(pluginObj, key) === true) {
        Object(_common__WEBPACK_IMPORTED_MODULE_0__["getPlugin"])(pluginObj.constructor.getPluginRef())[key] = value;
    }
}
//# sourceMappingURL=cordova-property.js.map

/***/ }),

/***/ "InXO":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/decorators/instance-property.js ***!
  \*************************************************************************************************/
/*! exports provided: instancePropertyGet, instancePropertySet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "instancePropertyGet", function() { return instancePropertyGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "instancePropertySet", function() { return instancePropertySet; });
/**
 * @param pluginObj
 * @param key
 */
function instancePropertyGet(pluginObj, key) {
    if (pluginObj._objectInstance && pluginObj._objectInstance[key]) {
        return pluginObj._objectInstance[key];
    }
    return null;
}
/**
 * @param pluginObj
 * @param key
 * @param value
 */
function instancePropertySet(pluginObj, key, value) {
    if (pluginObj._objectInstance) {
        pluginObj._objectInstance[key] = value;
    }
}
//# sourceMappingURL=instance-property.js.map

/***/ }),

/***/ "M0H4":
/*!***************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/decorators/cordova.js ***!
  \***************************************************************************************/
/*! exports provided: cordova */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cordova", function() { return cordova; });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "AT/+");

/**
 * @param pluginObj
 * @param methodName
 * @param config
 * @param args
 */
function cordova(pluginObj, methodName, config, args) {
    return Object(_common__WEBPACK_IMPORTED_MODULE_0__["wrap"])(pluginObj, methodName, config).apply(this, args);
}
//# sourceMappingURL=cordova.js.map

/***/ }),

/***/ "Uy5j":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/awesome-cordova-plugin.js ***!
  \*******************************************************************************************/
/*! exports provided: AwesomeCordovaNativePlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwesomeCordovaNativePlugin", function() { return AwesomeCordovaNativePlugin; });
/* harmony import */ var _decorators_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decorators/common */ "AT/+");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "xGWU");


var AwesomeCordovaNativePlugin = /** @class */ (function () {
    function AwesomeCordovaNativePlugin() {
    }
    /**
     * Returns a boolean that indicates whether the plugin is installed
     *
     * @returns {boolean}
     */
    AwesomeCordovaNativePlugin.installed = function () {
        var isAvailable = Object(_decorators_common__WEBPACK_IMPORTED_MODULE_0__["checkAvailability"])(this.pluginRef) === true;
        return isAvailable;
    };
    /**
     * Returns the original plugin object
     */
    AwesomeCordovaNativePlugin.getPlugin = function () {
        if (typeof window !== 'undefined') {
            return Object(_util__WEBPACK_IMPORTED_MODULE_1__["get"])(window, this.pluginRef);
        }
        return null;
    };
    /**
     * Returns the plugin's name
     */
    AwesomeCordovaNativePlugin.getPluginName = function () {
        var pluginName = this.pluginName;
        return pluginName;
    };
    /**
     * Returns the plugin's reference
     */
    AwesomeCordovaNativePlugin.getPluginRef = function () {
        var pluginRef = this.pluginRef;
        return pluginRef;
    };
    /**
     * Returns the plugin's install name
     */
    AwesomeCordovaNativePlugin.getPluginInstallName = function () {
        var plugin = this.plugin;
        return plugin;
    };
    /**
     * Returns the plugin's supported platforms
     */
    AwesomeCordovaNativePlugin.getSupportedPlatforms = function () {
        var platform = this.platforms;
        return platform;
    };
    AwesomeCordovaNativePlugin.pluginName = '';
    AwesomeCordovaNativePlugin.pluginRef = '';
    AwesomeCordovaNativePlugin.plugin = '';
    AwesomeCordovaNativePlugin.repo = '';
    AwesomeCordovaNativePlugin.platforms = [];
    AwesomeCordovaNativePlugin.install = '';
    return AwesomeCordovaNativePlugin;
}());

//# sourceMappingURL=awesome-cordova-plugin.js.map

/***/ }),

/***/ "aagO":
/*!**************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/index.js ***!
  \**************************************************************************/
/*! exports provided: AwesomeCordovaNativePlugin, checkAvailability, instanceAvailability, wrap, getPromise, cordova, cordovaFunctionOverride, cordovaInstance, cordovaPropertyGet, cordovaPropertySet, instancePropertyGet, instancePropertySet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap */ "5npb");
/* harmony import */ var _awesome_cordova_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./awesome-cordova-plugin */ "Uy5j");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AwesomeCordovaNativePlugin", function() { return _awesome_cordova_plugin__WEBPACK_IMPORTED_MODULE_1__["AwesomeCordovaNativePlugin"]; });

/* harmony import */ var _decorators_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./decorators/common */ "AT/+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkAvailability", function() { return _decorators_common__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "instanceAvailability", function() { return _decorators_common__WEBPACK_IMPORTED_MODULE_2__["instanceAvailability"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "wrap", function() { return _decorators_common__WEBPACK_IMPORTED_MODULE_2__["wrap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPromise", function() { return _decorators_common__WEBPACK_IMPORTED_MODULE_2__["getPromise"]; });

/* harmony import */ var _decorators_cordova__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./decorators/cordova */ "M0H4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cordova", function() { return _decorators_cordova__WEBPACK_IMPORTED_MODULE_3__["cordova"]; });

/* harmony import */ var _decorators_cordova_function_override__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./decorators/cordova-function-override */ "zPAA");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cordovaFunctionOverride", function() { return _decorators_cordova_function_override__WEBPACK_IMPORTED_MODULE_4__["cordovaFunctionOverride"]; });

/* harmony import */ var _decorators_cordova_instance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./decorators/cordova-instance */ "/nDd");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cordovaInstance", function() { return _decorators_cordova_instance__WEBPACK_IMPORTED_MODULE_5__["cordovaInstance"]; });

/* harmony import */ var _decorators_cordova_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./decorators/cordova-property */ "FpJJ");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cordovaPropertyGet", function() { return _decorators_cordova_property__WEBPACK_IMPORTED_MODULE_6__["cordovaPropertyGet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cordovaPropertySet", function() { return _decorators_cordova_property__WEBPACK_IMPORTED_MODULE_6__["cordovaPropertySet"]; });

/* harmony import */ var _decorators_instance_property__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./decorators/instance-property */ "InXO");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "instancePropertyGet", function() { return _decorators_instance_property__WEBPACK_IMPORTED_MODULE_7__["instancePropertyGet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "instancePropertySet", function() { return _decorators_instance_property__WEBPACK_IMPORTED_MODULE_7__["instancePropertySet"]; });

/* harmony import */ var _decorators_interfaces__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./decorators/interfaces */ "/YwH");
/* empty/unused harmony star reexport */

// Decorators







Object(_bootstrap__WEBPACK_IMPORTED_MODULE_0__["checkReady"])();

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "xGWU":
/*!*************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/util.js ***!
  \*************************************************************************/
/*! exports provided: get, getPromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPromise", function() { return getPromise; });
/**
 * @param element
 * @param path
 * @private
 */
function get(element, path) {
    var paths = path.split('.');
    var obj = element;
    for (var i = 0; i < paths.length; i++) {
        if (!obj) {
            return null;
        }
        obj = obj[paths[i]];
    }
    return obj;
}
/**
 * @param callback
 * @private
 */
function getPromise(callback) {
    if (callback === void 0) { callback = function () { }; }
    var tryNativePromise = function () {
        if (typeof Promise === 'function' || (typeof window !== 'undefined' && window.Promise)) {
            return new Promise(function (resolve, reject) {
                callback(resolve, reject);
            });
        }
        else {
            console.error('No Promise support or polyfill found. To enable Ionic Native support, please add the es6-promise polyfill before this script, or run with a library like Angular or on a recent browser.');
        }
    };
    return tryNativePromise();
}
//# sourceMappingURL=util.js.map

/***/ }),

/***/ "zPAA":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@awesome-cordova-plugins/core/__ivy_ngcc__/decorators/cordova-function-override.js ***!
  \*********************************************************************************************************/
/*! exports provided: cordovaFunctionOverride */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cordovaFunctionOverride", function() { return cordovaFunctionOverride; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "AT/+");


/**
 * @param pluginObj
 * @param methodName
 */
function overrideFunction(pluginObj, methodName) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (observer) {
        var availabilityCheck = Object(_common__WEBPACK_IMPORTED_MODULE_1__["checkAvailability"])(pluginObj, methodName);
        if (availabilityCheck === true) {
            var pluginInstance_1 = Object(_common__WEBPACK_IMPORTED_MODULE_1__["getPlugin"])(pluginObj.constructor.getPluginRef());
            pluginInstance_1[methodName] = observer.next.bind(observer);
            return function () { return (pluginInstance_1[methodName] = function () { }); };
        }
        else {
            observer.error(availabilityCheck);
            observer.complete();
        }
    });
}
/**
 * @param pluginObj
 * @param methodName
 * @param args
 */
function cordovaFunctionOverride(pluginObj, methodName, args) {
    if (args === void 0) { args = []; }
    return overrideFunction(pluginObj, methodName);
}
//# sourceMappingURL=cordova-function-override.js.map

/***/ })

}]);
//# sourceMappingURL=default~chart-chart-module~reports-reports-module.js.map