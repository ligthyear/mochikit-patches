/*
 * Dual-licensed under the MIT License & the Academic Free License v. 2.1.
 * See the file LICENSE for more information.
 *
 * (c) 2007-2008 by Per Cederberg & Dynabyte AB. All rights reserved.
 */

// Check for loaded MochiKit
if (typeof(MochiKit) == "undefined") {
    throw new ReferenceError("MochiKit must be loaded before loading this script");
}

/**
 * @name MochiKit.Base
 * @namespace Provides functional programming and useful comparisons.
 */
// Check for loaded MochiKit.Base
if (typeof(MochiKit.Base) == "undefined") {
    throw new ReferenceError("MochiKit.Base must be loaded before loading this script");
}

/**
 * Returns the first function argument that is not undefined.
 *
 * @param {Object} [...] the values to check
 *
 * @return {Object} the first non-undefined argument, or
 *         undefined if all arguments were undefined 
 */
MochiKit.Base.defaultValue = function(/* ... */) {
    for (var i = 0; i < arguments.length; i++) {
        if (typeof(arguments[i]) != "undefined") {
            return arguments[i];
        }
    }
    return undefined;
}

/**
 * Creates a dictionary object from a list of keys and values. It
 * can be used either as a reverse of items(), or as a reverse of
 * keys() and values(). That is, either the function take a single
 * list where each element contains both key and value, or it takes
 * two separate lists, one with keys and the other with values. If
 * a key is specified twice, only the last value will be used.
 *
 * @code dict([['a', 1], ['b', 2]]) --> { a: 1, b: 2 }
 *       dict(['a','b'], [1, 2]) --> { a: 1, b: 2 }
 *
 * @param {Array} itemsOrKeys the list of items or keys
 * @param {Array} [values] the optional list of values
 *
 * @return {Object} a dictionary object with all the keys set to the
 *         corresponding value
 */
MochiKit.Base.dict = function(itemsOrKeys, values) {
    var o = {};
    if (!MochiKit.Base.isArrayLike(itemsOrKeys)) {
        throw new TypeError("First argument must be array-like");
    }
    if (MochiKit.Base.isArrayLike(values) && itemsOrKeys.length !== values.length) {
        throw new TypeError("Both arrays must be of same length");
    }
    for (var i = 0; i < itemsOrKeys.length; i++) {
        var k = itemsOrKeys[i];
        if (k === null || k === undefined) {
            throw new TypeError("Key at index " + i + " is null or undefined");
        } else if (MochiKit.Base.isArrayLike(k)) {
            o[k[0]] = k[1];
        } else if (MochiKit.Base.isArrayLike(values)) {
            o[k] = values[i];
        } else {
            o[k] = values;
        }
    }
    return o;
}

/**
 * Creates a new object by copying keys and values from another
 * object. A list of key names (or an object whose property names
 * will be used as keys) must be specified as an argument. The
 * returned object will only contain properties that were defined in
 * the source object, keeping the source object values. The source
 * object will be left unmodified.
 *
 * @param {Object} src the source object to select values from
 * @param {Array/Object} keys the list of keys to select, or an
 *            object with the keys to select
 *
 * @return {Object} a new object containing the matching keys and
 *             values found in the source object
 */
MochiKit.Base.select = function(src, keys) {
    var res = {};
    if (!MochiKit.Base.isArrayLike(keys)) {
        keys = MochiKit.Base.keys(keys);
    }
    for (var i = 0; i < keys.length; i++) {
        var k = keys[i];
        if (k in src) {
            res[k] = src[k];
        }
    }
    return res;
}

/**
 * Filters an object by removing a list of keys. A list of key names
 * (or an object whose property names will be used as keys) must be
 * specified as an argument. A new object containing the source
 * object values for the specified keys will be returned. The source
 * object will be modified by removing all the specified keys.
 *
 * @param {Object} src the source object to select and modify
 * @param {Array/Object} keys the list of keys to remove, or an
 *            object with the keys to remove
 *
 * @return {Object} a new object containing the matching keys and
 *             values found in the source object
 */
MochiKit.Base.mask = function(src, keys) {
    var res = {};
    if (!MochiKit.Base.isArrayLike(keys)) {
        keys = MochiKit.Base.keys(keys);
    }
    for (var i = 0; i < keys.length; i++) {
        var k = keys[i];
        if (k in src) {
            res[k] = src[k];
            delete src[k];
        }
    }
    return res;
}

/**
 * Returns the name of a function. This is often useful for debugging
 * or logging purposes. If the function is anonymous or the
 * JavaScript environment doesn't provide function <code>name</code>
 * properties, any registered function name or undefined will be
 * returned.
 *
 * @param {Function} func the function to name
 *
 * @return {String} the function name, or undefined if not available
 *
 * @see MochiKit.Base.registerFunctionNames
 */
MochiKit.Base.functionName = function(func) {
    if (func == null) {
        return null;
    } else if (func.name != null && func.name != "") {
        return func.name;
    } else {
        return func.NAME;
    }
}

/**
 * Registers function names for debugging or logging. This is useful
 * when using anonymous functions or inside JavaScript environments
 * that do not provide function <code>name</code> properties. This
 * function will add the specified name as a new <code>NAME</code>
 * property to any function that doesn't already have a name. This
 * function will also process any properties or prototype properties
 * recursively adding names like <code>name.[property name]</code>.
 *
 * @param {Object} obj the function or object to register
 * @param {String} name the function or object (class) name
 * @param {Array} [stack] the object stack to avoid circular recursion
 *
 * @see MochiKit.Base.functionName
 */
MochiKit.Base.registerFunctionNames = function(obj, name, stack) {
   if (typeof(obj) === "function" &&
       (obj.name == null || obj.name == "") &&
       typeof(obj.NAME) === "undefined") {
       obj.NAME = name;
   }
   stack = stack || [];
   if (obj != null && name != null &&
       (typeof(obj) === "object" || typeof(obj) === "function") &&
       obj !== Object.prototype && obj !== Function.prototype &&
       typeof(obj.nodeType) !== "number" &&
       MochiKit.Base.findIdentical(stack, obj) < 0) {

       stack.push(obj);
       for (var prop in obj) {
           var str = name + "." + prop;
           MochiKit.Base.registerFunctionNames(obj[prop], str, stack);
       }
       var str = name + ".prototype";
       MochiKit.Base.registerFunctionNames(obj.prototype, str, stack);
       stack.pop();
   }
}

/**
 * Returns the current execution stack trace. The stack trace is an
 * array of function names with the innermost function at the lowest
 * index (0). Due to limitations in the JavaScript API:s, the stack
 * trace will be cut if recursion is detected. The stack trace will
 * also be cut if the call depth exceeds the maximum depth or if any
 * function in the chain has an injected stack trace.
 *
 * @param {Number} [maxDepth] the maximum call depth, defaults to 20
 *
 * @return {Array} the stack trace array of function names
 *
 * @see MochiKit.Base.functionName
 * @see MochiKit.Base.injectStackTrace
 */
MochiKit.Base.stackTrace = function(maxDepth) {
    var func = arguments.callee.caller;
    var visited = [];
    var res = [];
    maxDepth = maxDepth || 20;
    while (func != null) {
        if (MochiKit.Base.findIdentical(visited, func) >= 0) {
            res.push("...recursion...");
            break;
        }
        if (func.$stackTrace != null) {
            res = res.concat(func.$stackTrace);
            break;
        }
        var name = MochiKit.Base.functionName(func);
        if (name === null) {
            // Skip stack trace when null (but not when undefined)
        } else {
            res.push(name || "<anonymous>");
        }
        visited.push(func);
        if (visited.length >= maxDepth) {
            res.push("...");
            break;
        }
        func = func.caller;
    }
    return res;
}

/**
 * Injects a stack trace for a function. This method is useful for
 * creating a fake stack trace in anonymous or callback functions. A
 * null value can be used to clear any previously injected stack
 * trace for the calling function.
 *
 * @param {Array} stackTrace the stack trace, or null to clear
 * @param {Function} [func] the function to modify, or null for the
 *            currently executing function (i.e. the caller)
 */
MochiKit.Base.injectStackTrace = function(stackTrace, func) {
    func = func || arguments.callee.caller;
    if (func != null) {
        if (stackTrace) {
            func.$stackTrace = stackTrace;
        } else {
            delete func.$stackTrace;
        }
    }
}

/**
 * Resolves a relative URI to an absolute URI. This function will
 * return absolute URI:s directly and traverse any "../" directory
 * paths in the specified URI. The base URI provided must be
 * absolute.
 *
 * @param {String} uri the relative URI to resolve
 * @param {String} base the absolute base URI
 *
 * @return {String} the resolved absolute URI
 */
MochiKit.Base.resolveURI = function (uri, base) {
    if (uri.indexOf("://") > 0) {
        return uri;
    } else if (uri.indexOf("#") == 0) {
        var pos = base.lastIndexOf("#");
        if (pos >= 0) {
            base = base.substring(0, pos);
        }
        return base + uri;
    } else if (uri.indexOf("/") == 0) {
        var pos = base.indexOf("://");
        base = base.substring(0, pos + 2);
        return base + uri;
    } else if (uri.indexOf("../") == 0) {
        var pos = base.lastIndexOf("/");
        base = base.substring(0, pos);
        uri = uri.substring(3);
        return MochiKit.Base.resolveURI(uri, base);
    } else {
        var pos = base.lastIndexOf("/");
        base = base.substring(0, pos + 1);
        return base + uri;
    }
}
