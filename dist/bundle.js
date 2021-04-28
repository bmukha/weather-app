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

/***/ "./src/js/dom.js":
/*!***********************!*\
  !*** ./src/js/dom.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderWeather = async (weatherData) => {\r\n  const info = await weatherData;\r\n  const currentWeatherInfo = info.current.weather[0];\r\n  console.log(currentWeatherInfo);\r\n  const current = document.getElementById(\"current-weather\");\r\n  const currentWeatherPic = document.createElement(\"img\");\r\n  // const currentWeather\r\n  currentWeatherPic.src = `http://openweathermap.org/img/wn/${currentWeatherInfo.icon}@2x.png`;\r\n  current.appendChild(currentWeatherPic);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderWeather);\r\n\n\n//# sourceURL=webpack://weather-app/./src/js/dom.js?");

/***/ }),

/***/ "./src/js/fetch.js":
/*!*************************!*\
  !*** ./src/js/fetch.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchCoordinates\": () => (/* binding */ fetchCoordinates),\n/* harmony export */   \"fetchWeather\": () => (/* binding */ fetchWeather),\n/* harmony export */   \"currentSettings\": () => (/* binding */ currentSettings)\n/* harmony export */ });\n// const fetch = require(\"node-fetch\");\r\n\r\nconst apiKey = \"9d04517f3c50b24e9da372b682d112d7\";\r\n\r\nconst currentSettings = {\r\n  lat: 48.9215,\r\n  lon: 24.7097,\r\n  units: \"metric\",\r\n};\r\n\r\nconst fetchCoordinates = async (city = \"Ivano-Frankivsk\") => {\r\n  try {\r\n    const response = await fetch(\r\n      `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`\r\n    );\r\n    const json = await response.json();\r\n    currentSettings.lat = json.coord.lat;\r\n    currentSettings.lon = json.coord.lon;\r\n  } catch (error) {\r\n    console.log(error.message);\r\n  }\r\n};\r\n\r\nconst fetchWeather = async () => {\r\n  try {\r\n    const response = await fetch(\r\n      `https://api.openweathermap.org/data/2.5/onecall?lat=${currentSettings.lat}&lon=${currentSettings.lon}&exclude=minutely,hourly,alerts&units=${currentSettings.units}&appid=${apiKey}`\r\n    );\r\n    const json = await response.json();\r\n    return json;\r\n  } catch (error) {\r\n    console.log(error.message);\r\n  }\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://weather-app/./src/js/fetch.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/js/dom.js\");\n/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetch */ \"./src/js/fetch.js\");\n\r\n\r\n\r\nconst initApp = async () => {\r\n  const weatherData = await (0,_fetch__WEBPACK_IMPORTED_MODULE_1__.fetchWeather)();\r\n  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.default)(weatherData);\r\n};\r\n\r\nconst submitCityButton = document.getElementById(\"submitCityButton\");\r\nsubmitCityButton.addEventListener(\"click\", async (e) => {\r\n  e.preventDefault();\r\n  const cityInputText = document.getElementById(\"cityInputText\").value;\r\n  await (0,_fetch__WEBPACK_IMPORTED_MODULE_1__.fetchCoordinates)(cityInputText);\r\n  const weather = await (0,_fetch__WEBPACK_IMPORTED_MODULE_1__.fetchWeather)();\r\n  console.log(weather);\r\n  (0,_dom__WEBPACK_IMPORTED_MODULE_0__.default)(weather);\r\n});\r\n\r\ninitApp();\r\n\n\n//# sourceURL=webpack://weather-app/./src/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;