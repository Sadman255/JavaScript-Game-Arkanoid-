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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Ball; });\n/* harmony import */ var _collisionDetection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collisionDetection */ \"./src/collisionDetection.js\");\n\n\nclass Ball {\n\n    constructor(game){\n        this.image = document.getElementById(\"image-ball\");\n        \n        this.game = game;\n\n        this.gameWidth = game.gameWidth;\n        this.gameHeight = game.gameHeight;\n\n        this.position = { x: 10, y: 400};\n        \n        this.speed = {x: 4, y: -2};\n        this.width = 26; //28\n        this.height = 26; //26\n        this.size = 26;\n    }\n\n    draw(ctx){\n        \n        ctx.drawImage(this.image, this.position.x,this.position.y, 28, 26)\n    }\n\n    update(){\n        // collision with wall\n        this.position.x += this.speed.x;\n        this.position.y += this.speed.y;\n\n        if (this.position.x + this.size > this.gameWidth || this.position.x < 0){\n            this.speed.x = -this.speed.x;\n        }\n\n        if(this.position. y + this.size > this.gameHeight || this.position.y < 0){\n            this.speed.y = -this.speed.y;\n        }\n\n        //collision with paddle\n\n        // let bottomOfBall = this.position.y + this.size;\n        // let topOfPaddle = this.game.paddle.position.y;\n        // let leftSideOfPaddle = this.game.paddle.position.x;\n        // let rightSideOfPaddle = this.game.paddle.position.x + this.game.paddle.width; \n\n        // if(bottomOfBall >= topOfPaddle && this.position.x >= leftSideOfPaddle && this.position.x + this.size <= rightSideOfPaddle){\n        //     this.speed.y = -this.speed.y;\n        //     this.position.y = this.game.paddle.position.y - this.size\n        // }\n\n         if(Object(_collisionDetection__WEBPACK_IMPORTED_MODULE_0__[\"detectCollision\"])(this,this.game.paddle)){\n             this.speed.y = -this.speed.y;\n             this.position.y = this.game.paddle.position.y - this.size\n         }\n    }\n}\n\n//# sourceURL=webpack:///./src/ball.js?");

/***/ }),

/***/ "./src/brick.js":
/*!**********************!*\
  !*** ./src/brick.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Brick; });\n/* harmony import */ var _collisionDetection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collisionDetection */ \"./src/collisionDetection.js\");\n\n\n\nclass Brick {\n\n    constructor(game, position){\n        this.image = document.getElementById(\"fish-brick\");\n\n        this.game = game;\n\n        this.gameWidth = game.gameWidth;\n        this.gameHeight = game.gameHeight;\n\n        this.position = position;\n        this.width = 120;\n        this.height = 50;\n\n        this.markedForDeletion = false;\n        \n    }\n\n    update(deltaTime,ctx){\n\n        \n        // ctx.fillText(this.game.score, 500, 40)\n\n        if(Object(_collisionDetection__WEBPACK_IMPORTED_MODULE_0__[\"detectCollision\"])(this.game.ball, this)){\n            this.game.ball.speed.y = -this.game.ball.speed.y;\n            this.markedForDeletion = true;\n            this.game.score += 5;\n            // console.log(ctx)\n           \n           \n            //  ctx.fillText(this.game.score, 20,20);\n\n        }\n        ctx.font = \"30px Comic Sans MS\";\n        ctx.fillStyle = \"lightgreen\";\n        ctx.textAlign = \"center\";\n        let score = this.game.score ;\n        ctx.fillText(\"Score: \", 680, 40);\n        ctx.fillStyle = \"yellow\";\n        ctx.fillText( score, 750, 40)\n    }\n\n    draw(ctx){\n        ctx.drawImage( this.image, this.position.x, this.position.y, this.width, this.height)\n    }\n}\n\n//# sourceURL=webpack:///./src/brick.js?");

/***/ }),

/***/ "./src/brickLevels.js":
/*!****************************!*\
  !*** ./src/brickLevels.js ***!
  \****************************/
/*! exports provided: buildLevel, level1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buildLevel\", function() { return buildLevel; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"level1\", function() { return level1; });\n/* harmony import */ var _brick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./brick */ \"./src/brick.js\");\n\n\n\nfunction buildLevel(game, level){\n    let bricks = []\n\n    level.forEach((row, rowIndex) => {\n        row.forEach((brick, brickIndex) =>{\n            \n            if(brick === 1){\n\n                let position ={\n                    x: 76 * brickIndex,\n                    y: 75 + 24 * rowIndex  // move level down\n                }\n\n                bricks.push( new _brick__WEBPACK_IMPORTED_MODULE_0__[\"default\"](game,position))\n            }\n        })\n    })\n\n    return bricks;\n}\n\n\nconst level1 = [\n\n    [0, 1, 1, 0, 0, 0, 0, 1, 1, 0],\n    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],\n    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],\n    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]\n]\n\n//# sourceURL=webpack:///./src/brickLevels.js?");

/***/ }),

/***/ "./src/collisionDetection.js":
/*!***********************************!*\
  !*** ./src/collisionDetection.js ***!
  \***********************************/
/*! exports provided: detectCollision */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"detectCollision\", function() { return detectCollision; });\nfunction detectCollision(ball, gameObject){\n   \n   \n    let bottomOfBall = ball.position.y + ball.size;\n    let topOfBall = ball.position.y;\n\n    let topOfObject = gameObject.position.y;\n    let leftSideOfObject = gameObject.position.x;\n    let rightSideOfObject = gameObject.position.x + gameObject.width;\n    let bottomOfObject = gameObject.position.y + gameObject.height;\n\n    if (bottomOfBall >= topOfObject && topOfBall <= bottomOfObject && ball.position.x >= leftSideOfObject && ball.position.x + ball.size <= rightSideOfObject) {\n          return true\n    }\n    else{\n        return false;\n    }\n}\n\n//# sourceURL=webpack:///./src/collisionDetection.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ball */ \"./src/ball.js\");\n/* harmony import */ var _paddle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./paddle */ \"./src/paddle.js\");\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input */ \"./src/input.js\");\n/* harmony import */ var _brick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./brick */ \"./src/brick.js\");\n/* harmony import */ var _brickLevels__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./brickLevels */ \"./src/brickLevels.js\");\n\n\n\n\n\n\n\nconst GAMESTATE = {\n    PAUSED: 0,\n    RUNNING: 1,\n    MENU: 2,\n    GAMEOVER: 3\n}\n\nclass Game {\n    \n\n    constructor(gameWidth, gameHeight){\n        this.gameWidth = gameWidth;\n        this.gameHeight = gameHeight;\n      \n    }\n\n    start(){\n        this.gameState = GAMESTATE.RUNNING;\n        this.score = 0;\n        this.ball = new _ball__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this);\n        this.paddle = new _paddle__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this);\n\n        let bricks = Object(_brickLevels__WEBPACK_IMPORTED_MODULE_4__[\"buildLevel\"])(this, _brickLevels__WEBPACK_IMPORTED_MODULE_4__[\"level1\"]);\n        \n        // for(let i=0; i<10; i++){\n        //     bricks.push(new Brick(this, {x:i*52, y: 30}))\n        // }\n\n        this.gameObjects = [this.ball, this.paddle, ...bricks];\n\n        new _input__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.paddle, this);\n    } \n\n    update(deltaTime,ctx){\n        // this.paddle.update(deltaTime);\n        // this.ball.update(deltaTime);\n\n         if(this.gameState == GAMESTATE.PAUSED) return;\n\n        this.gameObjects.forEach( object =>{\n            object.update(deltaTime,ctx)\n        })\n\n        this.gameObjects = this.gameObjects.filter( object => ! object.markedForDeletion)\n    }\n\n    draw(ctx){\n        // this.paddle.draw(ctx);\n        // this.ball.draw(ctx);\n        this.gameObjects.forEach( object =>{\n            object.draw(ctx)\n        })\n       \n        if(this.gameState == GAMESTATE.PAUSED){\n            ctx.rect(0,0,this.gameWidth,this.gameHeight)\n            ctx.fillStyle = \"rgba(0,0,0,0.5)\";\n            ctx.fill()\n        }\n    }\n\n    togglePause(){\n        console.log(\"pause entered game\")\n        if(this.gameState == GAMESTATE.PAUSED){\n            this.gameState = GAMESTATE.RUNNING;\n        } else{\n            this.gameState = GAMESTATE.PAUSED\n        }\n    }\n}\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _paddle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paddle.js */ \"./src/paddle.js\");\n/* harmony import */ var _input_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input.js */ \"./src/input.js\");\n/* harmony import */ var _ball_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ball.js */ \"./src/ball.js\");\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nconsole.log(\"Webpack is working!\")\n\n\n\n\n\n\nlet canvas = document.getElementById(\"arkanoid\");\nlet ctx = canvas.getContext(\"2d\");\n\nconst GAME_WIDTH = 800;\nconst GAME_HEIGHT = 600;\n\nctx.clearRect(0,0,800,600)\n\nlet game = new _game_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](GAME_WIDTH, GAME_HEIGHT);\ngame.start();\n\nlet lastTime = 0;\n\n\n\nfunction gameLoop(timestamp) {\n    let deltaTime = timestamp - lastTime;\n    lastTime = timestamp;\n    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT)\n    // paddle.update(deltaTime);\n    // paddle.draw(ctx);\n\n    // ball.update(deltaTime);\n    // ball.draw(ctx);\n\n     game.update(deltaTime,ctx);\n    //  game.updateScore(ctx)\n     game.draw(ctx);\n \n\n    requestAnimationFrame(gameLoop);\n}\n\nrequestAnimationFrame(gameLoop);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/input.js":
/*!**********************!*\
  !*** ./src/input.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return InputHandler; });\n/* harmony import */ var _paddle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./paddle */ \"./src/paddle.js\");\n\n\nclass InputHandler {\n\n    constructor(paddle, game){\n        document.addEventListener('keydown', (event) =>{\n          \n\n            switch(event.keyCode){\n                case 37: \n                    paddle.moveLeft();\n                    break;\n                \n                case 39: \n                    paddle.moveRight();\n                    break;\n\n                case 27:\n                    console.log(\"Pause\")\n                    game.togglePause();\n            }\n        })\n\n        document.addEventListener('keyup', (event) => {\n\n\n            switch (event.keyCode) {\n                case 37:\n                     if(paddle.speed < 0) paddle.stop();\n                     break;\n\n                case 39:\n                      if(paddle.speed > 0) paddle.stop();\n                      break;\n            }\n        })\n    }\n}\n\n//# sourceURL=webpack:///./src/input.js?");

/***/ }),

/***/ "./src/paddle.js":
/*!***********************!*\
  !*** ./src/paddle.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Paddle; });\n\n\n class Paddle{\n\n    constructor(game){\n        this.gameWidth = game.gameWidth;\n\n        this.width = 150;\n        this.height = 20; //20 instead of 30\n\n        this.maxSpeed = 7;\n        this.speed = 0;\n\n        this.position ={\n            x: game.gameWidth / 2 - this.width / 2,\n            y: game.gameHeight - this.height -10\n        }\n    }\n\n    moveLeft(){\n        this.speed = -this.maxSpeed;\n    }\n\n    moveRight(){\n        this.speed = this.maxSpeed;\n    }\n\n    stop(){\n        this.speed = 0;\n    }\n\n    draw(ctx){\n        ctx.fillStyle = 'red'\n        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)\n        ctx.strokeStyle = 'yellow'\n        ctx.strokeRect(this.position.x, this.position.y, this.width, this.height)\n        ctx.lineWidth = 4;\n        \n    }\n\n    update(deltaTime){\n\n         this.position.x += this.speed;\n\n        if(this.position.x < 0) this.position.x = 0\n        if(this.position.x + this.width > this.gameWidth){\n            this.position.x = this.gameWidth - this.width;\n        }\n    }\n\n   \n\n   \n\n}\n\n \n\n//# sourceURL=webpack:///./src/paddle.js?");

/***/ })

/******/ });