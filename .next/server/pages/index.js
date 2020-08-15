module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ \"isomorphic-unfetch\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/moinahmed/spacex_launch_schedule/src/pages/index.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (class extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  static async getInitialProps() {\n    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(\"https://api.spacexdata.com/v3/launches?limit=100&amp;launch_success=true&amp;land_success=true&amp;launch_year=2014\");\n    const data = await res.json();\n    let launch_year = Object.keys(data).map(value => ({\n      launch_year: value.launch_year,\n      value\n    }));\n    return {\n      data,\n      launch_year\n    };\n  }\n\n  render() {\n    console.log(this.props.data);\n    return __jsx(\"main\", {\n      className: \"container\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 7\n      }\n    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }\n    }, __jsx(\"link\", {\n      rel: \"stylesheet\",\n      href: \"https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css\",\n      integrity: \"sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu\",\n      crossorigin: \"anonymous\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 11\n      }\n    }), __jsx(\"title\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 11\n      }\n    }, \"SpaceX Launch Calender\")), __jsx(\"p\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }\n    }, \"hdd\"), __jsx(\"button\", {\n      className: \"btn btn-primary\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }\n    }, \"button\"), __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }\n    }, this.props.title), __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }\n    }, __jsx(\"img\", {\n      src: this.props.imageUrl,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 11\n      }\n    })));\n  }\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXguanM/NDU3MCJdLCJuYW1lcyI6WyJDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJyZXMiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwibGF1bmNoX3llYXIiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwidmFsdWUiLCJyZW5kZXIiLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJ0aXRsZSIsImltYWdlVXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFZSw2RUFBY0EsK0NBQWQsQ0FBd0I7QUFDckMsZUFBYUMsZUFBYixHQUErQjtBQUM3QixVQUFNQyxHQUFHLEdBQUcsTUFBTUMseURBQUssQ0FDckIscUhBRHFCLENBQXZCO0FBR0EsVUFBTUMsSUFBSSxHQUFHLE1BQU1GLEdBQUcsQ0FBQ0csSUFBSixFQUFuQjtBQUNBLFFBQUlDLFdBQVcsR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlKLElBQVosRUFBa0JLLEdBQWxCLENBQXVCQyxLQUFELEtBQVk7QUFDbERKLGlCQUFXLEVBQUVJLEtBQUssQ0FBQ0osV0FEK0I7QUFFbERJO0FBRmtELEtBQVosQ0FBdEIsQ0FBbEI7QUFJQSxXQUFPO0FBQ0xOLFVBREs7QUFFTEU7QUFGSyxLQUFQO0FBSUQ7O0FBRURLLFFBQU0sR0FBRztBQUNQQyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLQyxLQUFMLENBQVdWLElBQXZCO0FBQ0EsV0FDRTtBQUFNLGVBQVMsRUFBQyxXQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFDRSxTQUFHLEVBQUMsWUFETjtBQUVFLFVBQUksRUFBQywwRUFGUDtBQUdFLGVBQVMsRUFBQyx5RUFIWjtBQUlFLGlCQUFXLEVBQUMsV0FKZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQVJGLENBREYsRUFZRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWkYsRUFhRTtBQUFRLGVBQVMsRUFBQyxpQkFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFiRixFQWNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBTSxLQUFLVSxLQUFMLENBQVdDLEtBQWpCLENBZEYsRUFlRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxTQUFHLEVBQUUsS0FBS0QsS0FBTCxDQUFXRSxRQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FmRixDQURGO0FBcUJEOztBQXZDb0MsQyIsImZpbGUiOiIuL3NyYy9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XG5cbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgICAgXCJodHRwczovL2FwaS5zcGFjZXhkYXRhLmNvbS92My9sYXVuY2hlcz9saW1pdD0xMDAmYW1wO2xhdW5jaF9zdWNjZXNzPXRydWUmYW1wO2xhbmRfc3VjY2Vzcz10cnVlJmFtcDtsYXVuY2hfeWVhcj0yMDE0XCJcbiAgICApO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgIGxldCBsYXVuY2hfeWVhciA9IE9iamVjdC5rZXlzKGRhdGEpLm1hcCgodmFsdWUpID0+ICh7XG4gICAgICBsYXVuY2hfeWVhcjogdmFsdWUubGF1bmNoX3llYXIsXG4gICAgICB2YWx1ZSxcbiAgICB9KSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRhdGEsXG4gICAgICBsYXVuY2hfeWVhcixcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuZGF0YSk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9zdGFja3BhdGguYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvMy40LjEvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCJcbiAgICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC1IU014Y1JUUnhuTitCZGcwSmRieFlLclRoZWNPS3VINXpDWW90bFNBY3AxK2M4eG15VGU5R1lnMWw5YTY5cHN1XCJcbiAgICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcbiAgICAgICAgICA+PC9saW5rPlxuXG4gICAgICAgICAgPHRpdGxlPlNwYWNlWCBMYXVuY2ggQ2FsZW5kZXI8L3RpdGxlPlxuICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgPHA+aGRkPC9wPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPmJ1dHRvbjwvYnV0dG9uPlxuICAgICAgICA8ZGl2Pnt0aGlzLnByb3BzLnRpdGxlfTwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpbWcgc3JjPXt0aGlzLnByb3BzLmltYWdlVXJsfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICApO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-unfetch\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLXVuZmV0Y2hcIj9lYmI2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Imlzb21vcnBoaWMtdW5mZXRjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtdW5mZXRjaFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///isomorphic-unfetch\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });