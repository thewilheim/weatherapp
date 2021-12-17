/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\r\\n  box-sizing: border-box;\\r\\n  font-size: 62.5%;\\r\\n  --offWhite: rgba(207, 206, 206, 0.747);\\r\\n  --black: rgba(85, 83, 83, 0.13);\\r\\n}\\r\\n\\r\\n*,\\r\\n*::before,\\r\\n*::after {\\r\\n  box-sizing: inherit;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  height: 100vh;\\r\\n  width: 100%;\\r\\n  margin: 0;\\r\\n  background-size: cover;\\r\\n  font-family: \\\"Lato\\\", sans-serif;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  display: grid;\\r\\n  height: 100%;\\r\\n  width: 100%;\\r\\n  grid-template-columns: 2fr 1fr 1fr;\\r\\n  grid-template-rows: 1fr 1fr 1fr;\\r\\n  gap: 0px 0px;\\r\\n  grid-auto-flow: row;\\r\\n  grid-template-areas:\\r\\n    \\\"leftSide leftSide rightSide\\\"\\r\\n    \\\"leftSide leftSide rightSide\\\"\\r\\n    \\\"leftSide leftSide rightSide\\\";\\r\\n}\\r\\n\\r\\n.leftSide {\\r\\n  grid-area: leftSide;\\r\\n  display: flex;\\r\\n  justify-content: flex-end;\\r\\n  align-items: center;\\r\\n  flex-direction: column;\\r\\n  color: rgb(255, 255, 255);\\r\\n}\\r\\n\\r\\n.leftDivContent {\\r\\n  align-items: flex-end;\\r\\n  flex-direction: row;\\r\\n  margin-bottom: 20%;\\r\\n  height: 25%;\\r\\n  width: 75%;\\r\\n}\\r\\n\\r\\n.leftDivInfo {\\r\\n  display: flex;\\r\\n  justify-content: space-evenly;\\r\\n  align-items: center;\\r\\n  width: 100%;\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n}\\r\\n.leftDivInfo > h1 {\\r\\n  font-size: 20rem;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\n.leftDivInfo > div > h2 {\\r\\n  font-size: 8rem;\\r\\n  text-align: left;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\n.leftDivInfo > div > p {\\r\\n  font-size: 2rem;\\r\\n  text-align: center;\\r\\n  letter-spacing: 0.02rem;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\nimg {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.rightSide {\\r\\n  grid-area: rightSide;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: space-evenly;\\r\\n  padding: 4rem;\\r\\n  background-color: var(--black);\\r\\n  backdrop-filter: blur(10px);\\r\\n  color: var(--offWhite);\\r\\n}\\r\\n\\r\\n.searchBar {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  border-bottom: 2px solid var(--offWhite);\\r\\n  padding-bottom: 1rem;\\r\\n}\\r\\n\\r\\n.searchBar > input {\\r\\n  text-decoration: none;\\r\\n  border: none;\\r\\n  background-color: transparent;\\r\\n  width: 85%;\\r\\n}\\r\\n\\r\\n.searchBar > input:focus {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\ninput,\\r\\nselect,\\r\\ntextarea {\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n::placeholder {\\r\\n  color: rgba(255, 255, 255, 0.616);\\r\\n}\\r\\n\\r\\n.weatherDetails,\\r\\n.searchHistory {\\r\\n  color: white;\\r\\n  height: 25rem;\\r\\n  font-size: 1.5rem;\\r\\n  border-bottom: 2px solid var(--offWhite);\\r\\n  border-radius: 1px;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weatherapp/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://weatherapp/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weatherapp/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weatherapp/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weatherapp/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weatherapp/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weatherapp/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weatherapp/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weatherapp/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weatherapp/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/config */ \"./src/modules/config.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\r\n\r\n\r\nasync function fetchData(location) {\r\n  const response = await fetch(\r\n    `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${_modules_config__WEBPACK_IMPORTED_MODULE_0__.apiKey}`,\r\n    { mode: \"cors\" }\r\n  );\r\n\r\n  const weatherData = await response.json();\r\n  handleData.processData(weatherData);\r\n}\r\n\r\nclass handleData {\r\n  constructor(location, temperature, wind, weather, date, country) {\r\n    this.location = location;\r\n    this.temperature = temperature;\r\n    this.wind = wind;\r\n    this.weather = weather;\r\n    this.date = date;\r\n    this.country = country;\r\n    this.icon = icon;\r\n  }\r\n\r\n  static processData(weatherData) {\r\n    this.location = weatherData.name;\r\n    this.temperature = weatherData.main;\r\n    this.wind = weatherData.wind;\r\n    this.weather = weatherData.weather;\r\n    this.date = handleData.getDate(weatherData.dt);\r\n    this.country = handleData.getCountry(weatherData.sys.country);\r\n    console.log(weatherData);\r\n    this.icon = handleData.getImage(weatherData.weather[0].main);\r\n\r\n    UI.updateInformation();\r\n  }\r\n\r\n  static getDate() {\r\n    let today = new Date().getTime();\r\n    let date = new Date(today);\r\n    return date;\r\n  }\r\n\r\n  static getCountry(code) {\r\n    const regionNameInEnglish = new Intl.DisplayNames([\"en\"], {\r\n      type: \"region\",\r\n    });\r\n    return regionNameInEnglish.of(code);\r\n  }\r\n\r\n  static getImage(iconCode) {\r\n    switch (iconCode) {\r\n      case \"Clear\":\r\n        document.body.style.backgroundImage = `url(images/clearSky.jpg)`;\r\n        break;\r\n      case \"Clouds\":\r\n        document.body.style.backgroundImage = `url(images/cloudySky.jpg)`;\r\n        break;\r\n\r\n      case \"Rain\":\r\n        document.body.style.backgroundImage = `url(images/rainy.jpg)`;\r\n        break;\r\n\r\n      default:\r\n        console.log(iconCode);\r\n        break;\r\n    }\r\n  }\r\n}\r\n\r\nconst container = document.querySelector(\".container\");\r\n\r\nclass UI {\r\n  static loadUI() {\r\n    UI.loadLeft();\r\n    UI.loadRight();\r\n    UI.initEventListener();\r\n    fetchData(\"Woodrising\");\r\n  }\r\n\r\n  static loadLeft() {\r\n    const leftDiv = document.createElement(\"div\");\r\n    const leftDivContent = document.createElement(\"div\");\r\n\r\n    leftDivContent.innerHTML = `<div class=\"leftDivInfo\">\r\n                                    <h1>12 &#176;</h1>\r\n                                    <div><h2>Sydney</h2><p>11:57 - Monday, 13 Dec '21 </p></div>\r\n                                    <div><p>Cloudy</p></div>\r\n                                </div>`;\r\n\r\n    // Assign the approprate classes\r\n    leftDiv.classList.add(\"leftSide\");\r\n    leftDivContent.classList.add(\"leftDivContent\");\r\n\r\n    // Add divs to the viewport\r\n    leftDiv.appendChild(leftDivContent);\r\n    container.appendChild(leftDiv);\r\n  }\r\n  static loadRight() {\r\n    const rightDiv = document.createElement(\"div\");\r\n    const rightDivContent = document.createElement(\"div\");\r\n\r\n    rightDivContent.innerHTML = ``;\r\n\r\n    // Assign the approprate classes\r\n    rightDiv.classList.add(\"rightSide\");\r\n    rightDivContent.classList.add(\"rightDivContent\");\r\n\r\n    const form = UI.searchBar();\r\n\r\n    const oldSearch = UI.previousSearch();\r\n\r\n    const weatherDetails = UI.weatherDetails();\r\n\r\n    // Add divs to the viewport\r\n    rightDiv.appendChild(rightDivContent);\r\n    rightDiv.appendChild(form);\r\n    rightDiv.appendChild(oldSearch);\r\n    rightDiv.appendChild(weatherDetails);\r\n    container.appendChild(rightDiv);\r\n  }\r\n\r\n  static updateInformation() {\r\n    const leftDivContent = document.querySelector(\".leftDivContent\");\r\n\r\n    leftDivContent.innerHTML = `<div class=\"leftDivInfo\">\r\n                                    <h1>${Math.round(\r\n                                      handleData.temperature.temp\r\n                                    )}&#176;</h1>\r\n                                    <div><h2>${\r\n                                      handleData.location\r\n                                    }</h2><p>11:57 - Monday, 13 Dec '21 </p></div>\r\n                                    <div>\r\n                                    <img src=\" http://openweathermap.org/img/wn/${\r\n                                      handleData.weather[0].icon\r\n                                    }@2x.png\">\r\n                                    <p>${\r\n                                      handleData.weather[0].description\r\n                                    }</p></div>\r\n                                </div>`;\r\n  }\r\n\r\n  static searchBar() {\r\n    const form = document.createElement(\"form\");\r\n\r\n    form.innerHTML = `\r\n            <input type=\"text\" name=\"location\" id=\"locName\" placeholder=\"Location\">\r\n            <button type=\"submit\" id=\"searchBtn\">Search</button>\r\n    `;\r\n\r\n    form.classList.add(\"searchBar\");\r\n\r\n    return form;\r\n  }\r\n\r\n  static initEventListener() {\r\n    const searchBar = document.querySelector(\".searchBar\");\r\n    const locName = document.getElementById(\"locName\");\r\n\r\n    searchBar.addEventListener(\"submit\", (e) => {\r\n      e.preventDefault();\r\n      fetchData(locName.value);\r\n    });\r\n  }\r\n\r\n  static previousSearch() {\r\n    const oldSearch = document.createElement(\"div\");\r\n\r\n    oldSearch.innerHTML = `<p>Syndey</p>`;\r\n    oldSearch.classList.add(\"searchHistory\");\r\n\r\n    return oldSearch;\r\n  }\r\n\r\n  static weatherDetails(weatherData) {\r\n    const detailsContainer = document.createElement(\"div\");\r\n\r\n    detailsContainer.innerHTML = `<h3>Weather Details</h3>`;\r\n    detailsContainer.classList.add(\"weatherDetails\");\r\n\r\n    return detailsContainer;\r\n  }\r\n}\r\n\r\naddEventListener(\"DOMContentLoaded\", UI.loadUI());\r\n\n\n//# sourceURL=webpack://weatherapp/./src/index.js?");

/***/ }),

/***/ "./src/modules/config.js":
/*!*******************************!*\
  !*** ./src/modules/config.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"apiKey\": () => (/* binding */ apiKey)\n/* harmony export */ });\nconst apiKey = \"09fd946d01850e9d1fc861c6e346dc42\";\r\n\n\n//# sourceURL=webpack://weatherapp/./src/modules/config.js?");

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
/******/ 			id: moduleId,
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;