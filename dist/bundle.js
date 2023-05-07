/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/dotenv/lib/main.js":
/*!*****************************************!*\
  !*** ./node_modules/dotenv/lib/main.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const fs = __webpack_require__(/*! fs */ \"fs\")\nconst path = __webpack_require__(/*! path */ \"path\")\nconst os = __webpack_require__(/*! os */ \"os\")\nconst packageJson = __webpack_require__(/*! ../package.json */ \"./node_modules/dotenv/package.json\")\n\nconst version = packageJson.version\n\nconst LINE = /(?:^|^)\\s*(?:export\\s+)?([\\w.-]+)(?:\\s*=\\s*?|:\\s+?)(\\s*'(?:\\\\'|[^'])*'|\\s*\"(?:\\\\\"|[^\"])*\"|\\s*`(?:\\\\`|[^`])*`|[^#\\r\\n]+)?\\s*(?:#.*)?(?:$|$)/mg\n\n// Parser src into an Object\nfunction parse (src) {\n  const obj = {}\n\n  // Convert buffer to string\n  let lines = src.toString()\n\n  // Convert line breaks to same format\n  lines = lines.replace(/\\r\\n?/mg, '\\n')\n\n  let match\n  while ((match = LINE.exec(lines)) != null) {\n    const key = match[1]\n\n    // Default undefined or null to empty string\n    let value = (match[2] || '')\n\n    // Remove whitespace\n    value = value.trim()\n\n    // Check if double quoted\n    const maybeQuote = value[0]\n\n    // Remove surrounding quotes\n    value = value.replace(/^(['\"`])([\\s\\S]*)\\1$/mg, '$2')\n\n    // Expand newlines if double quoted\n    if (maybeQuote === '\"') {\n      value = value.replace(/\\\\n/g, '\\n')\n      value = value.replace(/\\\\r/g, '\\r')\n    }\n\n    // Add to object\n    obj[key] = value\n  }\n\n  return obj\n}\n\nfunction _log (message) {\n  console.log(`[dotenv@${version}][DEBUG] ${message}`)\n}\n\nfunction _resolveHome (envPath) {\n  return envPath[0] === '~' ? path.join(os.homedir(), envPath.slice(1)) : envPath\n}\n\n// Populates process.env from .env file\nfunction config (options) {\n  let dotenvPath = path.resolve(process.cwd(), '.env')\n  let encoding = 'utf8'\n  const debug = Boolean(options && options.debug)\n  const override = Boolean(options && options.override)\n\n  if (options) {\n    if (options.path != null) {\n      dotenvPath = _resolveHome(options.path)\n    }\n    if (options.encoding != null) {\n      encoding = options.encoding\n    }\n  }\n\n  try {\n    // Specifying an encoding returns a string instead of a buffer\n    const parsed = DotenvModule.parse(fs.readFileSync(dotenvPath, { encoding }))\n\n    Object.keys(parsed).forEach(function (key) {\n      if (!Object.prototype.hasOwnProperty.call(process.env, key)) {\n        process.env[key] = parsed[key]\n      } else {\n        if (override === true) {\n          process.env[key] = parsed[key]\n        }\n\n        if (debug) {\n          if (override === true) {\n            _log(`\"${key}\" is already defined in \\`process.env\\` and WAS overwritten`)\n          } else {\n            _log(`\"${key}\" is already defined in \\`process.env\\` and was NOT overwritten`)\n          }\n        }\n      }\n    })\n\n    return { parsed }\n  } catch (e) {\n    if (debug) {\n      _log(`Failed to load ${dotenvPath} ${e.message}`)\n    }\n\n    return { error: e }\n  }\n}\n\nconst DotenvModule = {\n  config,\n  parse\n}\n\nmodule.exports.config = DotenvModule.config\nmodule.exports.parse = DotenvModule.parse\nmodule.exports = DotenvModule\n\n\n//# sourceURL=webpack://CRUD-API/./node_modules/dotenv/lib/main.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/native.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/native.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  randomUUID: (crypto__WEBPACK_IMPORTED_MODULE_0___default().randomUUID)\n});\n\n//# sourceURL=webpack://CRUD-API/./node_modules/uuid/dist/esm-node/native.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/regex.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/regex.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);\n\n//# sourceURL=webpack://CRUD-API/./node_modules/uuid/dist/esm-node/regex.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/rng.js":
/*!************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/rng.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ rng)\n/* harmony export */ });\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);\n\nconst rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate\n\nlet poolPtr = rnds8Pool.length;\nfunction rng() {\n  if (poolPtr > rnds8Pool.length - 16) {\n    crypto__WEBPACK_IMPORTED_MODULE_0___default().randomFillSync(rnds8Pool);\n    poolPtr = 0;\n  }\n\n  return rnds8Pool.slice(poolPtr, poolPtr += 16);\n}\n\n//# sourceURL=webpack://CRUD-API/./node_modules/uuid/dist/esm-node/rng.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/stringify.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/stringify.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"unsafeStringify\": () => (/* binding */ unsafeStringify)\n/* harmony export */ });\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-node/validate.js\");\n\n/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\n\nconst byteToHex = [];\n\nfor (let i = 0; i < 256; ++i) {\n  byteToHex.push((i + 0x100).toString(16).slice(1));\n}\n\nfunction unsafeStringify(arr, offset = 0) {\n  // Note: Be careful editing this code!  It's been tuned for performance\n  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434\n  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();\n}\n\nfunction stringify(arr, offset = 0) {\n  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one\n  // of the following:\n  // - One or more input array values don't map to a hex octet (leading to\n  // \"undefined\" in the uuid)\n  // - Invalid input values for the RFC `version` or `variant` fields\n\n  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(uuid)) {\n    throw TypeError('Stringified UUID is invalid');\n  }\n\n  return uuid;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);\n\n//# sourceURL=webpack://CRUD-API/./node_modules/uuid/dist/esm-node/stringify.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/v4.js":
/*!***********************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/v4.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ \"./node_modules/uuid/dist/esm-node/native.js\");\n/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ \"./node_modules/uuid/dist/esm-node/rng.js\");\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/esm-node/stringify.js\");\n\n\n\n\nfunction v4(options, buf, offset) {\n  if (_native_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].randomUUID && !buf && !options) {\n    return _native_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].randomUUID();\n  }\n\n  options = options || {};\n  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`\n\n  rnds[6] = rnds[6] & 0x0f | 0x40;\n  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided\n\n  if (buf) {\n    offset = offset || 0;\n\n    for (let i = 0; i < 16; ++i) {\n      buf[offset + i] = rnds[i];\n    }\n\n    return buf;\n  }\n\n  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);\n\n//# sourceURL=webpack://CRUD-API/./node_modules/uuid/dist/esm-node/v4.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/validate.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/validate.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ \"./node_modules/uuid/dist/esm-node/regex.js\");\n\n\nfunction validate(uuid) {\n  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].test(uuid);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\n\n//# sourceURL=webpack://CRUD-API/./node_modules/uuid/dist/esm-node/validate.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-node/version.js":
/*!****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-node/version.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-node/validate.js\");\n\n\nfunction version(uuid) {\n  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(uuid)) {\n    throw TypeError('Invalid UUID');\n  }\n\n  return parseInt(uuid.slice(14, 15), 16);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (version);\n\n//# sourceURL=webpack://CRUD-API/./node_modules/uuid/dist/esm-node/version.js?");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "os":
/*!*********************!*\
  !*** external "os" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config)\n/* harmony export */ });\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv */ \"./node_modules/dotenv/lib/main.js\");\n\r\ndotenv__WEBPACK_IMPORTED_MODULE_0__.config();\r\n\r\nconst config = {\r\n  PORT: process.env.PORT || 4000,\r\n  NODE_ENV: \"development\",\r\n}\r\n\r\n\n\n//# sourceURL=webpack://CRUD-API/./src/config.js?");

/***/ }),

/***/ "./src/db/user.js":
/*!************************!*\
  !*** ./src/db/user.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nprocess.USERS = [];\r\n\r\n// check 500 status code Internal server error\r\n// const getUsers = async () => { throw new Error(\"test error handling\") };\r\n\r\nconst getUsers = async () => process.USERS;\r\n\r\nconst getUserById = async (userId) => process.USERS.find((user) => user.id === userId);\r\n\r\nconst addUser = async (user) => {\r\n  process.USERS.push(user);\r\n\r\n  return user;\r\n};\r\n\r\nconst updateUser = async (userId, data) => {\r\n  let userToUpdate = await getUserById(userId);\r\n\r\n  return Object.assign(userToUpdate, {\r\n    userName: data.userName,\r\n    age: data.age,\r\n    hobbies: data.hobbies\r\n  });\r\n};\r\n\r\nconst deleteUser = async (userId) => {\r\n  let deletedUser;\r\n  const userIndexToDelete = process.USERS.findIndex((user) => user.id === userId);\r\n\r\n  if (userIndexToDelete > -1) {\r\n    deletedUser = process.USERS.splice(userIndexToDelete, 1)[0];\r\n  }\r\n  return deletedUser;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n  getUsers,\r\n  getUserById,\r\n  addUser,\r\n  updateUser,\r\n  deleteUser,\r\n});\r\n\n\n//# sourceURL=webpack://CRUD-API/./src/db/user.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! http */ \"http\");\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.js */ \"./src/config.js\");\n/* harmony import */ var _routes_UserRouter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes/UserRouter.js */ \"./src/routes/UserRouter.js\");\n\r\n\r\n\r\n\r\n\r\nconst { PORT } = _config_js__WEBPACK_IMPORTED_MODULE_1__.config;\r\n\r\nconst serverErrorHandler = (res) => {\r\n  res.statusCode = 500;\r\n  res.write(\"Something was wrong on server side\");\r\n  res.end();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async () => {\r\n  const responseHandler = async (req, res) => {\r\n    console.log(\"The request was handled on port: \" + PORT);\r\n    try {\r\n      await _routes_UserRouter_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].handleRequest(req, res);\r\n    } catch (err) {\r\n      serverErrorHandler(res);\r\n    }\r\n  };\r\n  const server = (0,http__WEBPACK_IMPORTED_MODULE_0__.createServer)(responseHandler);\r\n\r\n  return await new Promise((res, rej) => {\r\n    server.listen(PORT, async () => {\r\n      console.log(`Server is listening on port ${PORT}`);\r\n      res(server);\r\n    });\r\n  })\r\n});\r\n\n\n//# sourceURL=webpack://CRUD-API/./src/main.js?");

/***/ }),

/***/ "./src/routes/Router.js":
/*!******************************!*\
  !*** ./src/routes/Router.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Router)\n/* harmony export */ });\nclass Router {\r\n  static httpMethodsWithBody = [\"POST\", \"PUT\"];\r\n\r\n  requests = {\r\n    GET: {},\r\n    POST: {},\r\n    PUT: {},\r\n    DELETE: {},\r\n  };\r\n\r\n  async handleRequest(req, res) {\r\n    const httpMethod = req.method;\r\n    const requests = this.requests[httpMethod];\r\n    const handler = this.findMatchingHandler(req, requests);\r\n\r\n    if (handler) {\r\n      await this.enrichRequestWithBodyIfRequired(req);\r\n\r\n      res.setHeader('Content-Type', 'application/json');\r\n      return handler(req, res);\r\n    } else {\r\n      res.statusCode = 404;\r\n      res.write(\"The request doesn't exist\");\r\n      res.end();\r\n    }\r\n  }\r\n\r\n  async enrichRequestWithBodyIfRequired(req) {\r\n    if (Router.httpMethodsWithBody.includes(req.method)) {\r\n      const body = (await Router.getRequestBody(req)) || {};\r\n\r\n      req.body = body;\r\n    }\r\n  }\r\n\r\n  findMatchingHandler(req, requests) {\r\n    let handler;\r\n\r\n    for (const path in requests) {\r\n      const re = this.getRegexpFromPath(path);\r\n\r\n      if (re.test(req.url)) {\r\n        req.parameters = req.url.match(re)?.groups || {};\r\n        handler = requests[path];\r\n      }\r\n    }\r\n\r\n    return handler;\r\n  }\r\n\r\n  getRegexpFromPath(path) {\r\n    const reString = path.replace(/(.*)({(.*)})/, \"$1(?<$3>.*)\");\r\n\r\n    return new RegExp(reString);\r\n  }\r\n\r\n  get(path, handler) {\r\n    this.requests.GET[path] = handler;\r\n  }\r\n\r\n  post(path, handler) {\r\n    this.requests.POST[path] = handler;\r\n  }\r\n\r\n  put(path, handler) {\r\n    this.requests.PUT[path] = handler;\r\n  }\r\n\r\n  delete(path, handler) {\r\n    this.requests.DELETE[path] = handler;\r\n  }\r\n\r\n  static getRequestBody(req) {\r\n    let body = \"\";\r\n\r\n    req.on(\"data\", (chunk) => {\r\n      body += chunk.toString(); // convert Buffer to string\r\n    });\r\n\r\n    return new Promise((res, rej) => {\r\n      req.on(\"end\", () => {\r\n        try {\r\n          const requestBody = JSON.parse(body);\r\n          res(requestBody);\r\n        } catch (err) {\r\n          rej(err);\r\n        }\r\n        res();\r\n      });\r\n\r\n      req.on(\"error\", (err) => {\r\n        rej(err);\r\n      });\r\n    });\r\n  }\r\n\r\n  getInstance() {\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://CRUD-API/./src/routes/Router.js?");

/***/ }),

/***/ "./src/routes/UserRouter.js":
/*!**********************************!*\
  !*** ./src/routes/UserRouter.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-node/validate.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-node/version.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-node/v4.js\");\n/* harmony import */ var _Router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Router.js */ \"./src/routes/Router.js\");\n/* harmony import */ var _Validator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Validator.js */ \"./src/routes/Validator.js\");\n/* harmony import */ var _db_user_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../db/user.js */ \"./src/db/user.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst router = new _Router_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n\r\nconst uuidValidateV4 = (res, uuid) => {\r\n  const isValid = (0,uuid__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(uuid) && (0,uuid__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(uuid) === 4;\r\n\r\n  if (!isValid) {\r\n    res.statusCode = 400;\r\n    res.write(JSON.stringify({ message: \"The user id is not valid uuid\"}));\r\n    res.end();\r\n  }\r\n\r\n  return isValid;\r\n};\r\n\r\nrouter.get(\"/api/users\", async (req, res) => {\r\n  res.write(JSON.stringify(await _db_user_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getUsers()));\r\n  res.statusCode = 200;\r\n  res.end();\r\n});\r\n\r\nrouter.get(\"/api/users/{userId}\", async (req, res) => {\r\n  const { userId } = req.parameters;\r\n  const user = JSON.stringify(await _db_user_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getUserById(userId));\r\n\r\n  if (!user) {\r\n    res.statusCode = 404;\r\n    res.write(JSON.stringify({ message: \"The user is not found\"}));\r\n  } else {\r\n    res.write(user);\r\n    res.statusCode = 200;\r\n  }\r\n  res.end();\r\n});\r\n\r\nrouter.post(\"/api/users\", async (req, res) => {\r\n  const body = req.body;\r\n\r\n  if (!_Validator_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].isUserDataValid(body)) {\r\n    res.statusCode = 400;\r\n    res.write(JSON.stringify({ message: \"Invalid data for request\" }));\r\n    res.end();\r\n    return;\r\n  }\r\n\r\n  const user = {\r\n    id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(),\r\n    userName: body.userName,\r\n    age: body.age,\r\n    hobbies: body.hobbies,\r\n  };\r\n\r\n  const userInDB = await _db_user_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].addUser(user);\r\n\r\n  res.statusCode = 201;\r\n  res.end(JSON.stringify(userInDB));\r\n});\r\n\r\nrouter.put(\"/api/users/{userId}\", async (req, res) => {\r\n  const { userId } = req.parameters;\r\n  const body = req.body;\r\n  const user = await _db_user_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getUserById(userId);\r\n\r\n  if (!uuidValidateV4(res, userId)) {\r\n    return;\r\n  }\r\n\r\n  if (user) {\r\n    if (!_Validator_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].isUserDataValid(body)) {\r\n      res.statusCode = 400;\r\n      res.write(JSON.stringify({ message: \"Invalid data for request\" }));\r\n      res.end();\r\n      return;\r\n    }\r\n\r\n    const updatedUser = await _db_user_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].updateUser(userId, body);\r\n\r\n    res.statusCode = 200;\r\n    res.write(JSON.stringify(updatedUser));\r\n  } else {\r\n    res.statusCode = 404;\r\n    res.write(JSON.stringify({ message: \"The user is not found\" }));\r\n  }\r\n  res.end();\r\n});\r\n\r\nrouter.delete(\"/api/users/{userId}\", async (req, res) => {\r\n  const { userId } = req.parameters;\r\n\r\n  if (!uuidValidateV4(res, userId)) {\r\n    return;\r\n  }\r\n\r\n  const deletedUser = await _db_user_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].deleteUser(userId);\r\n\r\n  if (deletedUser) {\r\n    res.statusCode = 204;\r\n    res.write(JSON.stringify({ message: \"The user has been deleted\" }));\r\n  } else {\r\n    res.statusCode = 404;\r\n    res.write(JSON.stringify({ message: \"The user is not found\" }));\r\n  }\r\n\r\n  res.end();\r\n});\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\r\n\n\n//# sourceURL=webpack://CRUD-API/./src/routes/UserRouter.js?");

/***/ }),

/***/ "./src/routes/Validator.js":
/*!*********************************!*\
  !*** ./src/routes/Validator.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n  isUserDataValid(user) {\r\n    const isUserNameValid = user.userName && typeof user.userName === \"string\";\r\n    const isAgeValid = isFinite(user.age) && user.age >= 0;\r\n    const isHobbiesValid = Array.isArray(user.hobbies)\r\n      && user.hobbies.every((hobby) => typeof hobby === \"string\");\r\n\r\n    return isUserNameValid && isAgeValid && isHobbiesValid;\r\n  }\r\n});\n\n//# sourceURL=webpack://CRUD-API/./src/routes/Validator.js?");

/***/ }),

/***/ "./node_modules/dotenv/package.json":
/*!******************************************!*\
  !*** ./node_modules/dotenv/package.json ***!
  \******************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('{\"name\":\"dotenv\",\"version\":\"16.0.3\",\"description\":\"Loads environment variables from .env file\",\"main\":\"lib/main.js\",\"types\":\"lib/main.d.ts\",\"exports\":{\".\":{\"require\":\"./lib/main.js\",\"types\":\"./lib/main.d.ts\",\"default\":\"./lib/main.js\"},\"./config\":\"./config.js\",\"./config.js\":\"./config.js\",\"./lib/env-options\":\"./lib/env-options.js\",\"./lib/env-options.js\":\"./lib/env-options.js\",\"./lib/cli-options\":\"./lib/cli-options.js\",\"./lib/cli-options.js\":\"./lib/cli-options.js\",\"./package.json\":\"./package.json\"},\"scripts\":{\"dts-check\":\"tsc --project tests/types/tsconfig.json\",\"lint\":\"standard\",\"lint-readme\":\"standard-markdown\",\"pretest\":\"npm run lint && npm run dts-check\",\"test\":\"tap tests/*.js --100 -Rspec\",\"prerelease\":\"npm test\",\"release\":\"standard-version\"},\"repository\":{\"type\":\"git\",\"url\":\"git://github.com/motdotla/dotenv.git\"},\"keywords\":[\"dotenv\",\"env\",\".env\",\"environment\",\"variables\",\"config\",\"settings\"],\"readmeFilename\":\"README.md\",\"license\":\"BSD-2-Clause\",\"devDependencies\":{\"@types/node\":\"^17.0.9\",\"decache\":\"^4.6.1\",\"dtslint\":\"^3.7.0\",\"sinon\":\"^12.0.1\",\"standard\":\"^16.0.4\",\"standard-markdown\":\"^7.1.0\",\"standard-version\":\"^9.3.2\",\"tap\":\"^15.1.6\",\"tar\":\"^6.1.11\",\"typescript\":\"^4.5.4\"},\"engines\":{\"node\":\">=12\"}}');\n\n//# sourceURL=webpack://CRUD-API/./node_modules/dotenv/package.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;