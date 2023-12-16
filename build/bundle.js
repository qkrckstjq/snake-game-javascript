/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./compile/application/Model/Domain/Documents.js":
/*!*******************************************************!*\
  !*** ./compile/application/Model/Domain/Documents.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Documents = void 0;
var ClassList_js_1 = __webpack_require__(/*! ./Enum/ClassList.js */ "./compile/application/Model/Domain/Enum/ClassList.js");
var Documents = {
  table: document.querySelector(ClassList_js_1.ClassList.TABLE),
  position: document.getElementsByTagName(ClassList_js_1.ClassList.TR),
  dpElement: document.getElementsByClassName(ClassList_js_1.ClassList.DP_POINT),
  normalButton: document.querySelector(ClassList_js_1.ClassList.NORMAL),
  hardButton: document.querySelector(ClassList_js_1.ClassList.HARD)
};
exports.Documents = Documents;

/***/ }),

/***/ "./compile/application/Model/Domain/Enum/ClassList.js":
/*!************************************************************!*\
  !*** ./compile/application/Model/Domain/Enum/ClassList.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ClassList = void 0;
var ClassList;
(function (ClassList) {
  ClassList["TABLE"] = "#main__wrapper";
  ClassList["SNAKE"] = "snake";
  ClassList["POINT"] = "point";
  ClassList["GAMEOVERMODAL"] = ".gameover__modal__wrapper";
  ClassList["TR"] = "tr";
  ClassList["OPTIC"] = "optic";
  ClassList["BLUE"] = "blue";
  ClassList["YELLOW"] = "yellow";
  ClassList["PURPLE"] = "purple";
  ClassList["RED"] = "red";
  ClassList["DP_POINT"] = "dp__point";
  ClassList["NORMAL"] = ".normal";
  ClassList["HARD"] = ".hard";
  ClassList["MODE"] = "now__mode";
  ClassList["GRAY"] = "gray";
})(ClassList || (exports.ClassList = ClassList = {}));
;

/***/ }),

/***/ "./compile/application/Model/Domain/Enum/ConditionValue.js":
/*!*****************************************************************!*\
  !*** ./compile/application/Model/Domain/Enum/ConditionValue.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ConditionValue = void 0;
var ConditionValue;
(function (ConditionValue) {
  ConditionValue[ConditionValue["row"] = 36] = "row";
  ConditionValue[ConditionValue["col"] = 30] = "col";
  ConditionValue[ConditionValue["normal"] = 70] = "normal";
  ConditionValue[ConditionValue["hard"] = 40] = "hard";
  ConditionValue[ConditionValue["startX"] = 10] = "startX";
  ConditionValue[ConditionValue["startY"] = 15] = "startY";
  ConditionValue[ConditionValue["MIN_OPTIC"] = 1] = "MIN_OPTIC";
  ConditionValue[ConditionValue["MIN_BLUE"] = 2] = "MIN_BLUE";
  ConditionValue[ConditionValue["MIN_PURPLE"] = 3] = "MIN_PURPLE";
  ConditionValue[ConditionValue["MIN_YELLOW"] = 4] = "MIN_YELLOW";
  ConditionValue[ConditionValue["MIN_RED"] = 5] = "MIN_RED";
})(ConditionValue || (exports.ConditionValue = ConditionValue = {}));

/***/ }),

/***/ "./compile/application/Model/Domain/Enum/KeyCodeList.js":
/*!**************************************************************!*\
  !*** ./compile/application/Model/Domain/Enum/KeyCodeList.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.KeyCode = void 0;
var KeyCode;
(function (KeyCode) {
  KeyCode["ArrowRight"] = "ArrowRight";
  KeyCode["ArrowLeft"] = "ArrowLeft";
  KeyCode["ArrowUp"] = "ArrowUp";
  KeyCode["ArrowDown"] = "ArrowDown";
})(KeyCode || (exports.KeyCode = KeyCode = {}));

/***/ }),

/***/ "./compile/application/Model/Domain/Game.js":
/*!**************************************************!*\
  !*** ./compile/application/Model/Domain/Game.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Game = void 0;
var ConditionValue_1 = __webpack_require__(/*! ./Enum/ConditionValue */ "./compile/application/Model/Domain/Enum/ConditionValue.js");
function Game() {
  this.point = 0;
  this.isModal = false;
  this.speed = ConditionValue_1.ConditionValue.normal;
  this.isProceeding = false;
  this.canPlay = true;
}
exports.Game = Game;

/***/ }),

/***/ "./compile/application/Model/Domain/Snake.js":
/*!***************************************************!*\
  !*** ./compile/application/Model/Domain/Snake.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Snake = void 0;
var ConditionValue_js_1 = __webpack_require__(/*! ./Enum/ConditionValue.js */ "./compile/application/Model/Domain/Enum/ConditionValue.js");
function Snake() {
  var _this = this;
  this.startX = ConditionValue_js_1.ConditionValue.startX;
  this.startY = ConditionValue_js_1.ConditionValue.startY;
  this.stateRight = true;
  this.stateLeft = true;
  this.stateUp = true;
  this.stateDown = true;
  this.bodys = [[ConditionValue_js_1.ConditionValue.startY, ConditionValue_js_1.ConditionValue.startX]];
  this.pointYX = [ConditionValue_js_1.ConditionValue.startY, ConditionValue_js_1.ConditionValue.startX];
  this.nowProgressed = undefined;
  this.onX = ConditionValue_js_1.ConditionValue.startX;
  this.onY = ConditionValue_js_1.ConditionValue.startY;
  this.getLastY = function () {
    return _this.bodys[_this.bodys.length - 1][0];
  };
  this.getLastX = function () {
    return _this.bodys[_this.bodys.length - 1][1];
  };
}
exports.Snake = Snake;

/***/ }),

/***/ "./compile/application/Model/Service/BoardService.js":
/*!***********************************************************!*\
  !*** ./compile/application/Model/Service/BoardService.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.BoardService = void 0;
var ConditionValue_js_1 = __webpack_require__(/*! ../Domain/Enum/ConditionValue.js */ "./compile/application/Model/Domain/Enum/ConditionValue.js");
function BoardService() {
  this.initTable = function (element) {
    for (var i = 0; i < ConditionValue_js_1.ConditionValue.col; i++) {
      var tr = document.createElement('tr');
      element.append(tr);
      for (var j = 0; j < ConditionValue_js_1.ConditionValue.row; j++) {
        var td = document.createElement('td');
        document.getElementsByTagName('tr')[i].append(td);
      }
    }
  };
  this.makePoint = function (Snake) {
    while (true) {
      var numX = Math.floor(Math.random() * (ConditionValue_js_1.ConditionValue.row - 1));
      var numY = Math.floor(Math.random() * (ConditionValue_js_1.ConditionValue.col - 1));
      var snakes = Snake.bodys;
      for (var i in snakes) {
        if (numY == snakes[i][0] && numX == snakes[i][1]) {
          continue;
        }
      }
      return [numY, numX];
    }
  };
}
exports.BoardService = BoardService;

/***/ }),

/***/ "./compile/application/Model/Service/GameService.js":
/*!**********************************************************!*\
  !*** ./compile/application/Model/Service/GameService.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.GameService = void 0;
var ConditionValue_js_1 = __webpack_require__(/*! ../Domain/Enum/ConditionValue.js */ "./compile/application/Model/Domain/Enum/ConditionValue.js");
var ClassList_js_1 = __webpack_require__(/*! ../Domain/Enum/ClassList.js */ "./compile/application/Model/Domain/Enum/ClassList.js");
function GameService() {
  this.setGameState = function (Game, state) {
    Game.canPlay = state;
  };
  this.setGameProceeding = function (Game, state) {
    Game.isProceeding = state;
  };
  this.setColor = function (length) {
    var quotient = Math.floor(length / 15);
    if (ConditionValue_js_1.ConditionValue.MIN_OPTIC <= quotient && quotient < ConditionValue_js_1.ConditionValue.MIN_BLUE) {
      return ClassList_js_1.ClassList.OPTIC;
    } else if (ConditionValue_js_1.ConditionValue.MIN_BLUE <= quotient && quotient < ConditionValue_js_1.ConditionValue.MIN_PURPLE) {
      return ClassList_js_1.ClassList.BLUE;
    } else if (ConditionValue_js_1.ConditionValue.MIN_PURPLE <= quotient && quotient < ConditionValue_js_1.ConditionValue.MIN_YELLOW) {
      return ClassList_js_1.ClassList.PURPLE;
    } else if (ConditionValue_js_1.ConditionValue.MIN_YELLOW <= quotient && quotient < ConditionValue_js_1.ConditionValue.MIN_RED) {
      return ClassList_js_1.ClassList.YELLOW;
    } else if (ConditionValue_js_1.ConditionValue.MIN_OPTIC <= quotient && quotient < ConditionValue_js_1.ConditionValue.MIN_BLUE) {
      return ClassList_js_1.ClassList.RED;
    } else {
      return "";
    }
  };
}
exports.GameService = GameService;

/***/ }),

/***/ "./compile/application/Model/Service/SnakeService.js":
/*!***********************************************************!*\
  !*** ./compile/application/Model/Service/SnakeService.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SnakeService = void 0;
var ConditionValue_js_1 = __webpack_require__(/*! ../Domain/Enum/ConditionValue.js */ "./compile/application/Model/Domain/Enum/ConditionValue.js");
var KeyCodeList_js_1 = __webpack_require__(/*! ../Domain/Enum/KeyCodeList.js */ "./compile/application/Model/Domain/Enum/KeyCodeList.js");
function SnakeService() {
  this.addSnake = function (Snake, y, x) {
    Snake.bodys.unshift([y, x]);
  };
  this.removeSnake = function (Snake) {
    Snake.bodys.pop();
  };
  this.initSnake = function (Snake, BoardService) {
    Snake.onX = ConditionValue_js_1.ConditionValue.startX;
    Snake.onY = ConditionValue_js_1.ConditionValue.startY;
    Snake.bodys = [[ConditionValue_js_1.ConditionValue.startY, ConditionValue_js_1.ConditionValue.startX]];
    Snake.pointYX = BoardService.makePoint(Snake);
  };
  this.checkOver = function (Snake, element) {
    if (Snake.onX >= ConditionValue_js_1.ConditionValue.row || Snake.onY >= ConditionValue_js_1.ConditionValue.col || Snake.onX < 0 || Snake.onY < 0 || element[Snake.onY].children[Snake.onX].classList.contains('snake')) {
      return true;
    }
    return false;
  };
  this.move = function (inputCode, Snake) {
    if (inputCode == KeyCodeList_js_1.KeyCode.ArrowRight) {
      Snake.stateRight = false;
      Snake.stateLeft = false, Snake.stateUp = true;
      Snake.stateDown = true;
      Snake.onX += 1;
    } else if (inputCode == KeyCodeList_js_1.KeyCode.ArrowLeft) {
      Snake.stateRight = false;
      Snake.stateLeft = false, Snake.stateUp = true;
      Snake.stateDown = true;
      Snake.onX -= 1;
    } else if (inputCode == KeyCodeList_js_1.KeyCode.ArrowUp) {
      Snake.stateRight = true;
      Snake.stateLeft = true, Snake.stateUp = false;
      Snake.stateDown = false;
      Snake.onY -= 1;
    } else if (inputCode == KeyCodeList_js_1.KeyCode.ArrowDown) {
      Snake.stateRight = true;
      Snake.stateLeft = true, Snake.stateUp = false;
      Snake.stateDown = false;
      Snake.onY += 1;
    }
  };
  this.moveAsync = function (keyCode, Snake, Game, callback) {
    Snake.nowProgressed = setInterval(function () {
      if (keyCode == KeyCodeList_js_1.KeyCode.ArrowRight) {
        Snake.onX += 1;
      }
      if (keyCode == KeyCodeList_js_1.KeyCode.ArrowLeft) {
        Snake.onX -= 1;
      }
      if (keyCode == KeyCodeList_js_1.KeyCode.ArrowUp) {
        Snake.onY -= 1;
      }
      if (keyCode == KeyCodeList_js_1.KeyCode.ArrowDown) {
        Snake.onY += 1;
      }
      callback.forEach(function (callback) {
        callback();
      });
    }, Game.speed);
  };
  this.onHit = function (Snake) {
    var _a = Snake.pointYX,
      pointY = _a[0],
      pointX = _a[1];
    if (Snake.onY === pointY && Snake.onX === pointX) {
      return true;
    }
    return false;
  };
  this.checkCanChangeDirection = function (Snake, keyCode) {
    if (keyCode == KeyCodeList_js_1.KeyCode.ArrowRight && Snake.stateRight) {
      return true;
    }
    if (keyCode == KeyCodeList_js_1.KeyCode.ArrowLeft && Snake.stateLeft) {
      return true;
    }
    if (keyCode == KeyCodeList_js_1.KeyCode.ArrowUp && Snake.stateUp) {
      return true;
    }
    if (keyCode == KeyCodeList_js_1.KeyCode.ArrowDown && Snake.stateDown) {
      return true;
    }
    return false;
  };
  this.initState = function (Snake) {
    Snake.stateRight = true;
    Snake.stateLeft = true;
    Snake.stateUp = true;
    Snake.stateDown = true;
  };
  this.makePoint = function (Snake, BoardService) {
    Snake.pointYX = BoardService.makePoint(Snake);
  };
}
exports.SnakeService = SnakeService;

/***/ }),

/***/ "./compile/application/View/InputView.js":
/*!***********************************************!*\
  !*** ./compile/application/View/InputView.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.InputView = void 0;
var ConditionValue_1 = __webpack_require__(/*! ../Model/Domain/Enum/ConditionValue */ "./compile/application/Model/Domain/Enum/ConditionValue.js");
function InputView() {
  this.setDifficultyNormal = function (Game) {
    if (!Game.isProceeding) {
      Game.speed = ConditionValue_1.ConditionValue.normal;
    }
  };
  this.setDifficultyHard = function (Game) {
    if (!Game.isProceeding) {
      Game.speed = ConditionValue_1.ConditionValue.hard;
    }
  };
}
exports.InputView = InputView;

/***/ }),

/***/ "./compile/application/View/OutputView.js":
/*!************************************************!*\
  !*** ./compile/application/View/OutputView.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.OutputView = void 0;
var Documents_1 = __webpack_require__(/*! ../Model/Domain/Documents */ "./compile/application/Model/Domain/Documents.js");
var ClassList_1 = __webpack_require__(/*! ../Model/Domain/Enum/ClassList */ "./compile/application/Model/Domain/Enum/ClassList.js");
function OutputView() {
  this.addClassSnake = function (y, x) {
    Documents_1.Documents.position[y].children[x].classList.add(ClassList_1.ClassList.SNAKE);
  };
  this.removeClassSnake = function (y, x) {
    Documents_1.Documents.position[y].children[x].classList.remove(ClassList_1.ClassList.SNAKE);
  };
  this.addClassPoint = function (y, x) {
    Documents_1.Documents.position[y].children[x].classList.add(ClassList_1.ClassList.POINT);
  };
  this.removeClassPoint = function (y, x) {
    Documents_1.Documents.position[y].children[x].classList.remove(ClassList_1.ClassList.POINT);
  };
  this.removeClassName = function (y, x) {
    Documents_1.Documents.position[y].children[x].classList.remove(ClassList_1.ClassList.SNAKE);
  };
  this.setTableColor = function (color) {
    Documents_1.Documents.table.className = color;
  };
  this.removeClassColor = function (y, x, color) {
    Documents_1.Documents.position[y].children[x].classList.remove(color);
  };
  this.setDpPoint = function (point) {
    Documents_1.Documents.dpElement[0].textContent = "\uC810\uC218 : ".concat(point);
  };
  this.addFocusOnButton = function (element) {
    element.classList.add(ClassList_1.ClassList.GRAY);
  };
  this.removeFocusOnButton = function (element) {
    element.classList.remove(ClassList_1.ClassList.GRAY);
  };
}
exports.OutputView = OutputView;

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**************************!*\
  !*** ./compile/index.js ***!
  \**************************/


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var BoardService_js_1 = __webpack_require__(/*! ./application/Model/Service/BoardService.js */ "./compile/application/Model/Service/BoardService.js");
var Documents_js_1 = __webpack_require__(/*! ./application/Model/Domain/Documents.js */ "./compile/application/Model/Domain/Documents.js");
var Snake_js_1 = __webpack_require__(/*! ./application/Model/Domain/Snake.js */ "./compile/application/Model/Domain/Snake.js");
var SnakeService_js_1 = __webpack_require__(/*! ./application/Model/Service/SnakeService.js */ "./compile/application/Model/Service/SnakeService.js");
var Game_js_1 = __webpack_require__(/*! ./application/Model/Domain/Game.js */ "./compile/application/Model/Domain/Game.js");
var GameService_js_1 = __webpack_require__(/*! ./application/Model/Service/GameService.js */ "./compile/application/Model/Service/GameService.js");
var KeyCodeList_js_1 = __webpack_require__(/*! ./application/Model/Domain/Enum/KeyCodeList.js */ "./compile/application/Model/Domain/Enum/KeyCodeList.js");
var ConditionValue_js_1 = __webpack_require__(/*! ./application/Model/Domain/Enum/ConditionValue.js */ "./compile/application/Model/Domain/Enum/ConditionValue.js");
var OutputView_js_1 = __webpack_require__(/*! ./application/View/OutputView.js */ "./compile/application/View/OutputView.js");
var InputView_js_1 = __webpack_require__(/*! ./application/View/InputView.js */ "./compile/application/View/InputView.js");
function GameController() {
  var _this = this;
  this.Snake = new Snake_js_1.Snake();
  this.SnakeService = new SnakeService_js_1.SnakeService();
  this.BoardService = new BoardService_js_1.BoardService();
  this.Game = new Game_js_1.Game();
  this.GameService = new GameService_js_1.GameService(), this.outputView = new OutputView_js_1.OutputView();
  this.inputView = new InputView_js_1.InputView();
  this.setClassOnSnake = function () {
    _this.outputView.setTableColor(_this.GameService.setColor(_this.Snake.bodys.length));
  };
  this.removeAllSnakeClass = function () {
    for (var i = 0; i < _this.Snake.bodys.length; i++) {
      _this.outputView.removeClassName(_this.Snake.bodys[i][0], _this.Snake.bodys[i][1]);
    }
  };
  this.makeNewPoint = function () {
    _this.SnakeService.makePoint(_this.Snake, _this.BoardService);
    _this.outputView.addClassPoint(_this.Snake.pointYX[0], _this.Snake.pointYX[1]);
  };
  this.moveFoward = function () {
    _this.SnakeService.addSnake(_this.Snake, _this.Snake.onY, _this.Snake.onX);
    _this.outputView.addClassSnake(_this.Snake.onY, _this.Snake.onX);
    _this.outputView.removeClassName(_this.Snake.getLastY(), _this.Snake.getLastX());
    _this.SnakeService.removeSnake(_this.Snake);
  };
  this.gameStart = function () {
    _this.BoardService.initTable(Documents_js_1.Documents.table);
    _this.gameInit();
  };
  this.gameInit = function () {
    _this.GameService.setGameState(_this.Game, true);
    _this.SnakeService.initSnake(_this.Snake, _this.BoardService);
    _this.outputView.addClassSnake(_this.Snake.startY, _this.Snake.startX);
    _this.outputView.addClassPoint(_this.Snake.pointYX[0], _this.Snake.pointYX[1]);
    _this.SnakeService.initState(_this.Snake);
    _this.outputView.setTableColor(_this.GameService.setColor(_this.Snake.bodys.length));
  };
  this.whenOver = function () {
    clearInterval(_this.Snake.nowProgressed);
    _this.GameService.setGameState(_this.Game, false);
    _this.removeAllSnakeClass();
    _this.outputView.removeClassPoint(_this.Snake.pointYX[0], _this.Snake.pointYX[1]);
    _this.gameInit();
  };
  this.checkOver = function () {
    if (_this.SnakeService.checkOver(_this.Snake, Documents_js_1.Documents.position)) {
      _this.Game.isProceeding = false;
      _this.whenOver();
      return;
    }
    _this.moveFoward();
  };
  this.whenOnPoint = function () {
    if (_this.SnakeService.onHit(_this.Snake)) {
      _this.outputView.setDpPoint(_this.Snake.bodys.length);
      _this.SnakeService.addSnake(_this.Snake, _this.Snake.onY, _this.Snake.onX);
      _this.outputView.removeClassPoint(_this.Snake.pointYX[0], _this.Snake.pointYX[1]);
      _this.setClassOnSnake();
      _this.makeNewPoint();
      _this.moveFoward();
      return;
    }
    _this.checkOver();
  };
  this.move = function (keyCode) {
    _this.Game.isProceeding = true;
    _this.SnakeService.move(keyCode, _this.Snake);
    _this.whenOnPoint();
  };
  this.moveAsync = function (keyCode) {
    clearInterval(_this.Snake.nowProgressed);
    _this.Game.isProceeding = true;
    _this.SnakeService.moveAsync(keyCode, _this.Snake, _this.Game, [_this.whenOnPoint]);
  };
  this.checkMode = function () {
    if (_this.Game.speed == ConditionValue_js_1.ConditionValue.normal) {
      _this.outputView.addFocusOnButton(Documents_js_1.Documents.normalButton);
      _this.outputView.removeFocusOnButton(Documents_js_1.Documents.hardButton);
    } else {
      _this.outputView.addFocusOnButton(Documents_js_1.Documents.hardButton);
      _this.outputView.removeFocusOnButton(Documents_js_1.Documents.normalButton);
    }
  };
  this.whenClickNoraml = function () {
    _this.inputView.setDifficultyNormal(_this.Game);
    _this.outputView.addFocusOnButton(Documents_js_1.Documents.normalButton);
    _this.outputView.removeFocusOnButton(Documents_js_1.Documents.hardButton);
  };
  this.whenClickHard = function () {
    _this.inputView.setDifficultyHard(_this.Game);
    _this.outputView.addFocusOnButton(Documents_js_1.Documents.hardButton);
    _this.outputView.removeFocusOnButton(Documents_js_1.Documents.normalButton);
  };
  this.run = function (event) {
    if (_this.Game.canPlay && KeyCodeList_js_1.KeyCode[event.code] && _this.SnakeService.checkCanChangeDirection(_this.Snake, event.code)) {
      clearInterval(_this.Snake.nowProgressed);
      _this.move(event.code);
      _this.moveAsync(event.code);
    }
  };
}
var controller = new GameController();
controller.inputView.setDifficultyNormal(controller.Game);
controller.gameStart();
window.addEventListener("DOMContentLoaded", controller.checkMode);
Documents_js_1.Documents.normalButton.addEventListener("click", controller.whenClickNoraml);
Documents_js_1.Documents.hardButton.addEventListener("click", controller.whenClickHard);
document.addEventListener("keydown", controller.run);
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map