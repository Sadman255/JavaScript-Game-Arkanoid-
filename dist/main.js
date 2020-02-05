/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ball.js":
/*!*********************!*\
  !*** ./src/ball.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Ball; });\nclass Ball {\n\n    constructor(gameWidth,gameHeight){\n        this.image = document.getElementById(\"image-ball\");\n\n        this.gameWidth = gameWidth;\n        this.gameHeight = gameHeight;\n\n        this.position = { x: 10, y: 10};\n        this.speed = {x: 2, y: 2};\n        this.width = 26; //28\n        this.height = 26; //26\n        this.size = 26;\n    }\n\n    draw(ctx){\n        ctx.drawImage(this.image, this.position.x,this.position.y, 28, 26)\n    }\n\n    update(){\n        this.position.x += this.speed.x;\n        this.position.y += this.speed.y;\n\n        if (this.position.x + this.size > this.gameWidth || this.position.x < 0){\n            this.speed.x = -this.speed.x;\n        }\n\n        if(this.position. y + this.size > this.gameHeight || this.position.y < 0){\n            this.speed.y = -this.speed.y;\n        }\n    }\n}\n\n//# sourceURL=webpack:///./src/ball.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _paddle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paddle.js */ \"./src/paddle.js\");\n/* harmony import */ var _input_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input.js */ \"./src/input.js\");\n/* harmony import */ var _ball_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ball.js */ \"./src/ball.js\");\nconsole.log(\"Webpack is working!\")\n\n\n\n\n\nlet canvas = document.getElementById(\"arkanoid\");\nlet ctx = canvas.getContext(\"2d\");\n\nconst GAME_WIDTH = 800;\nconst GAME_HEIGHT = 600;\n\nctx.clearRect(0,0,800,600)\n\nlet paddle = new _paddle_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](GAME_WIDTH, GAME_HEIGHT);\n\nnew _input_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](paddle);\n\nlet ball = new _ball_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](GAME_WIDTH, GAME_HEIGHT)\n\nlet lastTime = 0;\n\n\n\nfunction gameLoop(timestamp) {\n    let deltaTime = timestamp - lastTime;\n    lastTime = timestamp;\n    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT)\n    paddle.update(deltaTime);\n    paddle.draw(ctx);\n\n    ball.update(deltaTime);\n    ball.draw(ctx);\n \n\n    requestAnimationFrame(gameLoop);\n}\n\nrequestAnimationFrame(gameLoop);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/input.js":
/*!**********************!*\
  !*** ./src/input.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return InputHandler; });\n/* harmony import */ var _paddle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paddle */ \"./src/paddle.js\");\n\n\nclass InputHandler {\n\n    constructor(paddle){\n        document.addEventListener('keydown', (event) =>{\n          \n\n            switch(event.keyCode){\n                case 37: \n                    paddle.moveLeft();\n                    break;\n                \n                case 39: \n                    paddle.moveRight();\n                    break;\n            }\n        })\n\n        document.addEventListener('keyup', (event) => {\n\n\n            switch (event.keyCode) {\n                case 37:\n                     if(paddle.speed < 0) paddle.stop();\n                     break;\n\n                case 39:\n                      if(paddle.speed > 0) paddle.stop();\n                      break;\n            }\n        })\n    }\n}\n\n//# sourceURL=webpack:///./src/input.js?");

/***/ }),

/***/ "./src/paddle.js":
/*!***********************!*\
  !*** ./src/paddle.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Paddle; });\n\n\n class Paddle{\n\n    constructor(gameWidth, gameHeight){\n        this.gameWidth = gameWidth;\n\n        this.width = 150;\n        this.height = 20; //20 instead of 30\n\n        this.maxSpeed = 7;\n        this.speed = 0;\n\n        this.position ={\n            x: gameWidth / 2 - this.width / 2,\n            y: gameHeight - this.height -10\n        }\n    }\n\n    moveLeft(){\n        this.speed = -this.maxSpeed;\n    }\n\n    moveRight(){\n        this.speed = this.maxSpeed;\n    }\n\n    stop(){\n        this.speed = 0;\n    }\n\n    draw(ctx){\n        ctx.fillStyle = 'red'\n        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)\n        ctx.strokeStyle = 'yellow'\n        ctx.strokeRect(this.position.x, this.position.y, this.width, this.height)\n        ctx.lineWidth = 4;\n        \n    }\n\n    update(deltaTime){\n\n         this.position.x += this.speed;\n\n        if(this.position.x < 0) this.position.x = 0\n        if(this.position.x + this.width > this.gameWidth){\n            this.position.x = this.gameWidth - this.width;\n        }\n    }\n\n   \n\n   \n\n}\n\n \n\n//# sourceURL=webpack:///./src/paddle.js?");

/***/ })

/******/ });