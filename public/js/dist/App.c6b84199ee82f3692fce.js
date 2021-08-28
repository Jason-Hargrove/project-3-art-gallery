/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"App": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendors~App"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/AddAd.js":
/*!*********************************!*\
  !*** ./src/components/AddAd.js ***!
  \*********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\nconst AddAd = _ref => {\n  let {\n    onAdd\n  } = _ref;\n  const [name, setName] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n  const [description, setDescription] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n  const [imageUrl, setImageUrl] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n\n  const onSubmit = e => {\n    e.preventDefault();\n\n    if (!name || !description || !imageUrl) {\n      alert('Please add an Ad');\n      return;\n    }\n\n    onAdd({\n      name,\n      description,\n      imageUrl\n    });\n    setName('');\n    setDescription('');\n    setImageUrl('');\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    onSubmit: onSubmit\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    htmlFor: \"name\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"Name\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    id: \"name\",\n    placeholder: \"Add Ad\",\n    value: name,\n    onChange: e => setName(e.target.value)\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    htmlFor: \"image\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"Image URL\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    id: \"image\",\n    placeholder: \"Add Image URL\",\n    value: imageUrl,\n    onChange: e => setImageUrl(e.target.value)\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    htmlFor: \"description\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"Description\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    id: \"description\",\n    placeholder: \"Add Description\",\n    value: description,\n    onChange: e => setDescription(e.target.value)\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    className: \"standard-button savead-button\",\n    type: \"submit\",\n    value: \"Save Ad\"\n  }))));\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (AddAd);\n\n//# sourceURL=webpack:///./src/components/AddAd.js?");

/***/ }),

/***/ "./src/components/ArtInfo.js":
/*!***********************************!*\
  !*** ./src/components/ArtInfo.js ***!
  \***********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst ArtInfo = props => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, props.art.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: props.art.primaryImage,\n    alt: props.art.title\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h4\", null, props.art.artistDisplayName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, props.art.objectEndDate, \"; \", props.art.medium, \"; Dimensions:\", ' ', props.art.dimensions));\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (ArtInfo);\n\n//# sourceURL=webpack:///./src/components/ArtInfo.js?");

/***/ }),

/***/ "./src/components/Button.js":
/*!**********************************!*\
  !*** ./src/components/Button.js ***!
  \**********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst Button = _ref => {\n  let {\n    color,\n    text,\n    onClick\n  } = _ref;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"create-button\",\n    onClick: onClick,\n    style: {\n      backgroundColor: color\n    }\n  }, text);\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (Button);\n\n//# sourceURL=webpack:///./src/components/Button.js?");

/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button */ \"./src/components/Button.js\");\n\n\n\nconst Footer = _ref => {\n  let {\n    onAdd,\n    showAdd\n  } = _ref;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"], {\n    color: showAdd ? 'red' : 'green',\n    text: showAdd ? 'Close' : 'Add an Ad',\n    onClick: onAdd\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (Footer);\n\n//# sourceURL=webpack:///./src/components/Footer.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ \"./src/router/index.js\");\n/* harmony import */ var bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/scss/bootstrap.scss */ \"./node_modules/bootstrap/scss/bootstrap.scss\");\n/* harmony import */ var bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_scss_bootstrap_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst app = document.getElementById('app');\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_router__WEBPACK_IMPORTED_MODULE_2__[/* default */ \"a\"], null), app);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/pages/App.js":
/*!**************************!*\
  !*** ./src/pages/App.js ***!
  \**************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Button */ \"./src/components/Button.js\");\n/* harmony import */ var _components_ArtInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ArtInfo */ \"./src/components/ArtInfo.js\");\n/* harmony import */ var _components_AddAd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/AddAd */ \"./src/components/AddAd.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Footer */ \"./src/components/Footer.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\n\n\nfunction App(props) {\n  const [objectIDs, setObjectIDs] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n  const [art, updateArt] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({});\n  const [populate, updatePopulate] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({});\n  const [ads, setAds] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  const [showAddAd, setShowAddAd] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false); // ========== MOMA API Call ==========\n  // ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ Grabing the objectIDs ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓\n\n  const getArt = /*#__PURE__*/function () {\n    var _ref = _asyncToGenerator(function* (searchTerm) {\n      try {\n        // Make fetch request and store response.\n        const response = yield fetch(\"https://collectionapi.metmuseum.org/public/collection/v1/search?title=true&q=\".concat(searchTerm)); // Parse JSON response into a javascript object.\n\n        const data = yield response.json(); // Set the Art state to the Art.\n\n        updateArt(data);\n        updatePopulate('');\n      } catch (err) {\n        console.error(err);\n      }\n    });\n\n    return function getArt(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  const handleChange = e => {\n    setObjectIDs(e.target.value);\n  };\n\n  const handleSubmit = e => {\n    e.preventDefault();\n    getArt(objectIDs);\n    setObjectIDs('');\n  }; // ↑↑↑↑↑↑↑↑↑↑↑  End - Grabbing the objectIDs ↑↑↑↑↑↑↑↑↑↑↑\n  // ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ Add an Object to the Page ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓\n\n\n  const postArt = /*#__PURE__*/function () {\n    var _ref2 = _asyncToGenerator(function* (searchTerm) {\n      try {\n        // Make fetch request and store response.\n        const response = yield fetch(\"https://collectionapi.metmuseum.org/public/collection/v1/objects/\".concat(searchTerm)); // Parse JSON response into a javascript object.\n\n        const data = yield response.json();\n        updatePopulate(data);\n        updateArt('');\n      } catch (err) {\n        console.error(err);\n      }\n    });\n\n    return function postArt(_x2) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  const handleIDClick = e => {\n    e.preventDefault();\n    postArt(e.target.value);\n  }; // ↑↑↑↑↑↑↑↑↑↑↑  End - Add an Object to the Page ↑↑↑↑↑↑↑↑↑↑↑\n  // ========== End - MOMA API Call ==========\n  // ========== Advertisements ==========\n  // ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ Right Panel Ads ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    _asyncToGenerator(function* () {\n      try {\n        const response = yield fetch('/api/ads');\n        const data = yield response.json();\n        setAds(data);\n      } catch (error) {\n        console.error(error);\n      }\n    })();\n  }, []); // Add an Ad\n\n  const addAd = /*#__PURE__*/function () {\n    var _ref4 = _asyncToGenerator(function* (e) {\n      try {\n        const response = yield fetch('/api/ads/', {\n          method: 'POST',\n          headers: {\n            'Content-Type': 'application/json'\n          },\n          body: JSON.stringify(e)\n        });\n        const data = yield response.json();\n        setAds([...ads, data]);\n      } catch (error) {\n        res.status(404).json({\n          message: error.message\n        });\n      }\n    });\n\n    return function addAd(_x3) {\n      return _ref4.apply(this, arguments);\n    };\n  }(); // ↑↑↑↑↑↑↑↑↑↑↑  End - Add an Object to the Page ↑↑↑↑↑↑↑↑↑↑↑\n  // ========== End - Advertisements ==========\n\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", {\n    className: \"app-page\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    className: \"logo\",\n    src: \"/img/serch-the-moma-api.png\",\n    id: \"imgTag\",\n    alt: \"Test Image\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"main\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"article\", {\n    className: \"main\"\n  }, Object.keys(populate).length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ArtInfo__WEBPACK_IMPORTED_MODULE_3__[/* default */ \"a\"], {\n    art: populate\n  }) : ''), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"aside\", {\n    className: \"sidebar1\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    onSubmit: handleSubmit\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    htmlFor: \"title\"\n  }, \"Title\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    id: \"title\",\n    type: \"text\",\n    value: objectIDs,\n    onChange: handleChange\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    className: \"standard-button\",\n    type: \"submit\",\n    value: \"Find Art\"\n  })), art.objectIDs && art.objectIDs.map(word => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    key: word\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"objectid-button\",\n    value: word,\n    onClick: handleIDClick\n  }, word)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"aside\", {\n    className: \"sidebar2\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, ads.map(ad => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      key: ad._id\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, ad.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* Link */ \"b\"], {\n      to: \"\".concat(ad._id)\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      src: \"\".concat(ad.imageUrl)\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, ad.description));\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"footer\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_5__[/* default */ \"a\"], {\n    onAdd: () => setShowAddAd(!showAddAd),\n    showAdd: showAddAd\n  }), showAddAd && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AddAd__WEBPACK_IMPORTED_MODULE_4__[/* default */ \"a\"], {\n    onAdd: addAd\n  }))));\n}\n\n//# sourceURL=webpack:///./src/pages/App.js?");

/***/ }),

/***/ "./src/pages/Post.js":
/*!***************************!*\
  !*** ./src/pages/Post.js ***!
  \***************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return Post; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\nfunction Post(props) {\n  const [ad, setAd] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({});\n  const nameInput = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null); // It's like doc.querySelector('input#title').\n\n  const urlInput = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null); // doc.querySelector('input#url').\n\n  const descriptionInput = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(null);\n\n  const handleUpdate = /*#__PURE__*/function () {\n    var _ref = _asyncToGenerator(function* (e) {\n      e.preventDefault();\n\n      try {\n        const response = yield fetch(\"/api/ads/\".concat(props.match.params.id), {\n          method: 'PUT',\n          headers: {\n            'Content-Type': 'application/json'\n          },\n          body: JSON.stringify({\n            name: nameInput.current.value,\n            // <----- Current has all the dom elements you love.\n            imageUrl: urlInput.current.value,\n            description: descriptionInput.current.value\n          })\n        });\n        const data = yield response.json();\n        setAd(data);\n      } catch (error) {\n        console.error(error);\n      } finally {\n        window.location.assign('/'); // Send us back to '/Home' / reload everyting. Had to change it to '/'\n      }\n    });\n\n    return function handleUpdate(_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    _asyncToGenerator(function* () {\n      try {\n        const response = yield fetch(\"/api/ads/\".concat(props.match.params.id));\n        const data = yield response.json();\n        setAd(data);\n      } catch (error) {\n        console.error(error);\n      }\n    })();\n  }, []);\n\n  const handleDelete = /*#__PURE__*/function () {\n    var _ref3 = _asyncToGenerator(function* (e) {\n      try {\n        const response = yield fetch(\"/api/ads/\".concat(props.match.params.id), {\n          method: 'DELETE',\n          headers: {\n            'Content-Type': 'application/json'\n          }\n        });\n        const deletedAd = yield response.json(); // Saved deleted blog if we want to use it.\n      } catch (error) {\n        console.error(error);\n      } finally {\n        window.location.assign('/'); // Send us back to '/Home' / reload everyting. Had to change it to '/'\n      }\n    });\n\n    return function handleDelete(_x2) {\n      return _ref3.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    className: \"post\",\n    onSubmit: handleUpdate\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Update or Delete Form\"), Object.keys(ad).length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, ad.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: \"\".concat(ad.imageUrl)\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, ad.description)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"Loading...\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"section\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    htmlFor: \"name\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"Name\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    id: \"name\",\n    className: \"form-control\",\n    ref: nameInput,\n    defaultValue: ad.name\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    htmlFor: \"description\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"Description\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    id: \"description\",\n    className: \"form-control\",\n    ref: descriptionInput,\n    defaultValue: ad.description\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n    htmlFor: \"image\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"Image\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    type: \"text\",\n    id: \"image\",\n    className: \"form-control\",\n    ref: urlInput,\n    defaultValue: ad.imageUrl\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"input\", {\n    className: \"standard-button\",\n    type: \"submit\",\n    value: \"Update Ad\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: \"delete-button\",\n    onClick: handleDelete,\n    type: \"button\"\n  }, \"DELETE ME\")))));\n}\n\n//# sourceURL=webpack:///./src/pages/Post.js?");

/***/ }),

/***/ "./src/router/index.js":
/*!*****************************!*\
  !*** ./src/router/index.js ***!
  \*****************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var _pages_Post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/Post */ \"./src/pages/Post.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes */ \"./src/router/routes.js\");\n\n\n\n\n\nconst AppRouter = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[/* BrowserRouter */ \"a\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[/* Switch */ \"c\"], null, _routes__WEBPACK_IMPORTED_MODULE_4__[/* default */ \"a\"].map(_ref => {\n    let {\n      Component,\n      key,\n      path\n    } = _ref;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[/* Route */ \"a\"], {\n      key: key,\n      exact: true,\n      path: path,\n      component: () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, {\n        page: key\n      })\n    });\n  }), \"// \\u2193\\u2193\\u2193\\u2193\\u2193 Added my own route \\u2193\\u2193\\u2193\\u2193\\u2193\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[/* Route */ \"a\"], {\n    path: '/:id',\n    exact: true // Gets put in props.params.id.\n    ,\n    render: routerProps => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_pages_Post__WEBPACK_IMPORTED_MODULE_3__[/* default */ \"a\"], routerProps) // Individual Post.\n\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (AppRouter);\n\n//# sourceURL=webpack:///./src/router/index.js?");

/***/ }),

/***/ "./src/router/routes.js":
/*!******************************!*\
  !*** ./src/router/routes.js ***!
  \******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/App */ \"./src/pages/App.js\");\n\n\nconst routes = [{\n  Component: _pages_App__WEBPACK_IMPORTED_MODULE_1__[/* default */ \"a\"],\n  key: 'App',\n  path: '/'\n}];\n/* harmony default export */ __webpack_exports__[\"a\"] = (routes);\n\n//# sourceURL=webpack:///./src/router/routes.js?");

/***/ })

/******/ });