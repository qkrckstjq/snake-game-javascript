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
var ClassList_js_1 = __webpack_require__(/*! ./Enums/ClassList.js */ "./compile/application/Model/Domain/Enums/ClassList.js");
var Documents = {
  table: document.querySelector(ClassList_js_1.ClassList.TABLE),
  position: document.getElementsByTagName(ClassList_js_1.ClassList.TR),
  dpElement: document.getElementsByClassName(ClassList_js_1.ClassList.DP_POINT),
  normalButton: document.querySelector(ClassList_js_1.ClassList.NOMAL),
  hardButton: document.querySelector(ClassList_js_1.ClassList.HARD)
};
exports.Documents = Documents;

/***/ }),

/***/ "./compile/application/Model/Domain/Enums/ClassList.js":
/*!*************************************************************!*\
  !*** ./compile/application/Model/Domain/Enums/ClassList.js ***!
  \*************************************************************/
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
  ClassList["NOMAL"] = ".nomal";
  ClassList["HARD"] = ".hard";
})(ClassList || (exports.ClassList = ClassList = {}));
;

/***/ }),

/***/ "./compile/application/Model/Domain/Enums/ConditionValue.js":
/*!******************************************************************!*\
  !*** ./compile/application/Model/Domain/Enums/ConditionValue.js ***!
  \******************************************************************/
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

/***/ "./compile/application/Model/Domain/Enums/KeyCodeList.js":
/*!***************************************************************!*\
  !*** ./compile/application/Model/Domain/Enums/KeyCodeList.js ***!
  \***************************************************************/
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
var ConditionValue_1 = __webpack_require__(/*! ./Enums/ConditionValue */ "./compile/application/Model/Domain/Enums/ConditionValue.js");
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
var ConditionValue_js_1 = __webpack_require__(/*! ./Enums/ConditionValue.js */ "./compile/application/Model/Domain/Enums/ConditionValue.js");
function Snake() {
  var _this = this;
  this.startX = ConditionValue_js_1.ConditionValue.startX;
  this.startY = ConditionValue_js_1.ConditionValue.startY;
  this.stateRight = true;
  this.stateLeft = true;
  this.stateUp = true;
  this.stateDown = true;
  this.bodys = [[ConditionValue_js_1.ConditionValue.startY, ConditionValue_js_1.ConditionValue.startX]];
  this.pointYX = [ConditionValue_js_1.ConditionValue.startX, ConditionValue_js_1.ConditionValue.startY];
  this.nowProgressed = undefined;
  this.onX = ConditionValue_js_1.ConditionValue.startX;
  this.onY = ConditionValue_js_1.ConditionValue.startY;
  // this.canChangeDirection = true;
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
var ConditionValue_js_1 = __webpack_require__(/*! ../Domain/Enums/ConditionValue.js */ "./compile/application/Model/Domain/Enums/ConditionValue.js");
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
var ConditionValue_1 = __webpack_require__(/*! ../Domain/Enums/ConditionValue */ "./compile/application/Model/Domain/Enums/ConditionValue.js");
var ClassList_js_1 = __webpack_require__(/*! ../Domain/Enums/ClassList.js */ "./compile/application/Model/Domain/Enums/ClassList.js");
function GameService() {
  this.setGameState = function (Game, state) {
    Game.canPlay = state;
  };
  this.setGameProceeding = function (Game, state) {
    Game.isProceeding = state;
  };
  this.setColor = function (length) {
    var quotient = Math.floor(length / 15);
    if (ConditionValue_1.ConditionValue.MIN_OPTIC <= quotient && quotient < ConditionValue_1.ConditionValue.MIN_BLUE) {
      return ClassList_js_1.ClassList.OPTIC;
    } else if (ConditionValue_1.ConditionValue.MIN_BLUE <= quotient && quotient < ConditionValue_1.ConditionValue.MIN_PURPLE) {
      return ClassList_js_1.ClassList.BLUE;
    } else if (ConditionValue_1.ConditionValue.MIN_PURPLE <= quotient && quotient < ConditionValue_1.ConditionValue.MIN_YELLOW) {
      return ClassList_js_1.ClassList.PURPLE;
    } else if (ConditionValue_1.ConditionValue.MIN_YELLOW <= quotient && quotient < ConditionValue_1.ConditionValue.MIN_RED) {
      return ClassList_js_1.ClassList.YELLOW;
    } else if (ConditionValue_1.ConditionValue.MIN_OPTIC <= quotient && quotient < ConditionValue_1.ConditionValue.MIN_BLUE) {
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
// import { classList } from '../Domain/Enums/ClassList.ts';
var ConditionValue_js_1 = __webpack_require__(/*! ../Domain/Enums/ConditionValue.js */ "./compile/application/Model/Domain/Enums/ConditionValue.js");
var KeyCodeList_js_1 = __webpack_require__(/*! ../Domain/Enums/KeyCodeList.js */ "./compile/application/Model/Domain/Enums/KeyCodeList.js");
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
var Documents_1 = __webpack_require__(/*! ../Model/Domain/Documents */ "./compile/application/Model/Domain/Documents.js");
var ConditionValue_1 = __webpack_require__(/*! ../Model/Domain/Enums/ConditionValue */ "./compile/application/Model/Domain/Enums/ConditionValue.js");
function InputView() {
  this.setDifficulty = function (Game) {
    var normalCallback = function normalCallback() {
      Game.speed = ConditionValue_1.ConditionValue.normal;
    };
    var hardCallback = function hardCallback() {
      Game.speed = ConditionValue_1.ConditionValue.hard;
    };
    Documents_1.Documents.normalButton.addEventListener('click', normalCallback);
    Documents_1.Documents.hardButton.addEventListener('click', hardCallback);
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
var ClassList_1 = __webpack_require__(/*! ../Model/Domain/Enums/ClassList */ "./compile/application/Model/Domain/Enums/ClassList.js");
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
    Documents_1.Documents.position[y].children[x].className = "";
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
var KeyCodeList_js_1 = __webpack_require__(/*! ./application/Model/Domain/Enums/KeyCodeList.js */ "./compile/application/Model/Domain/Enums/KeyCodeList.js");
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
  };
  this.whenOver = function () {
    clearInterval(_this.Snake.nowProgressed);
    _this.GameService.setGameState(_this.Game, false);
    _this.removeAllSnakeClass();
    _this.outputView.removeClassName(_this.Snake.pointYX[0], _this.Snake.pointYX[1]);
    _this.gameInit();
  };
  this.checkOver = function () {
    if (_this.SnakeService.checkOver(_this.Snake, Documents_js_1.Documents.position)) {
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
    _this.SnakeService.move(keyCode, _this.Snake);
    _this.whenOnPoint();
  };
  this.moveAsync = function (keyCode) {
    clearInterval(_this.Snake.nowProgressed);
    _this.SnakeService.moveAsync(keyCode, _this.Snake, _this.Game, [_this.whenOnPoint]);
  };
}
var controller = new GameController();
controller.inputView.setDifficulty(controller.Game);
controller.gameStart();
document.addEventListener("keydown", function (e) {
  if (controller.Game.canPlay && KeyCodeList_js_1.KeyCode[e.code] && controller.SnakeService.checkCanChangeDirection(controller.Snake, e.code)) {
    clearInterval(controller.Snake.nowProgressed);
    controller.move(e.code);
    controller.moveAsync(e.code);
  }
});
// const table = document.querySelector('#main__wrapper');
// for(let i = 0; i < 30; i++){
//     const tr = document.createElement('tr');
//     table.append(tr);
//     for(let j = 0; j < 36; j++){
//         const td = document.createElement('td');
//         document.getElementsByTagName('tr')[i].append(td);
//     }
// }
// const cookieArr = document.cookie.split('; ');
// let CookieMode = undefined;
// for(let i = 0; i < cookieArr.length; i++) {
//     if(cookieArr[i].indexOf('mode') !== -1) {
//         CookieMode = Number(cookieArr[i].slice(5));
//         break;
//     }
// }
// function over (x,y) {
//     if((x > 35 || y > 29 || x < 0 || y < 0) || position[y].childNodes[x].classList.contains('snake')) {//벽, 자기자신의 몸통에 충돌시 over함수 작동
//         isModal = 1 //모달창의 상태변수
//         clearsetinterval.forEach(intervals => clearInterval(intervals)); //현재 실행중인 모든 setInterval 종료
//         state.right = 0, state.left = 0, state.up = 0, state.down = 0;   //재시작을 위해 모든 진행방향의 상태 초기화
//         onX = 10;                                                        //초기좌표X 초기화
//         onY = 15;                                                        //초기좌표Y
//         // for(let i = 0; i < snake.length-1; i++){                         //각좌표의 정보를 담은 배열의 맨마지막을 제외한 모든 좌표들 snake클래스 제거
//         //     position[snake[i][0]].childNodes[snake[i][1]].classList.toggle('snake');
//         // }
//         // snake = [[snake[snake.length-1][0], snake[snake.length-1][1]]];  //snake배열에 맨마지막 좌표만을 남기는 걸로 세팅
//         document.querySelector('.gameover__modal__wrapper').style.display = 'block'; //모달 창 화면에 display:block
//         sending_point = dp_point                                         //서버로 보내기위한 점수 유지
//         speed == 40                                                      //설정되어있던 속도에 따라 하드, 노말 모드 표시
//         ? document.getElementsByClassName('result__point')[0].textContent = `점수 : ${dp_point}점 (하드)`
//         : document.getElementsByClassName('result__point')[0].textContent = `점수 : ${dp_point}점 (노말)`;
//         dp_point = 0;
//         document.getElementsByClassName('dp__point')[0].textContent = `점수 : ${dp_point}점` //점수판과 dp_point를 0으로 동시 초기화
//         document.body.style.animation = 'shaking 0.2s'                   //화면에 진동효과 css 부여
//         table.className = ''                                             //점수에 따라 변하는 table의 클래스이름 초기화
//         return true                                                      //setinterval 동작에서는 필요없지만 동기적으로 작동하는 움직임에서는 over가 작동시 true를 리턴
//     }
// }
// let position = document.getElementsByTagName('tr'); //tr의 dom 추출
// let onX = 10;                                       //앞으로 이동할때마다 변하게 될 x좌표
// let onY = 15;                                       //앞으로 이동할때마다 변하게 될 y좌표
// let state = {right : 0, left : 0, up : 0, down : 0};//오른쪽으로 이동도중에는 위,아래 방향만 가능하도록 현재 진행중인 상태를 표시
// let snake = [                                        
//     [onY,onX],
// ];                                                  //각 snake의 좌표를 저장
// let nowstarted;                                     //현재 진행중인 setinterval을 저장할 변수
// let dp_point = 0;                                   //점수변수
// let isModal = 0;                                    //모달의 활성화 유무
// let [aY,aX] = make()                                //먹으면 점수가 증가하게 하는 포인트의 랜덤좌표만드는 함수
// let speed = 70;                       //speed의 변수에 따라 속도의 변화가 있음 기본값 0.07초
// let user_name = ''                                  //서버에 post할때 사용하게 될 변수
// let sending_point = 0;                              //서버에 post할때 사용하게 될 변수
// position[aY].childNodes[aX].classList.toggle('point');//초기 랜덤좌표에 포인트 생성
// position[onY].childNodes[onX].classList.toggle('snake');//초기좌표에 시작 snake생성
// let clearsetinterval = [];                          //현재 진행중인 setinterval들이 담길 배열
// document.addEventListener('DOMContentLoaded', function () {
//     CookieMode == 70 ? document.querySelector('.now__mode').textContent='노말' : document.querySelector('.now__mode').textContent='하드'
// })
// function make () {  //범위 안의 랜덤좌표 생성 이때 snake가 존재하는 tr위에 랜덤좌표가 생성시 다시 랜덤좌표를 뽑음
//     while(1) {
//         let numX = Math.floor(Math.random() * (35))
//         let numY = Math.floor(Math.random() * (29))
//         let istrue = 0;
//         for(let i = 0; i < snake.length; i++){
//             if(numY == snake[i][0] && numX == snake[i][1]) {
//                 istrue = 1;
//                 break;
//             }
//         }
//         if(istrue == 0) {
//             return [numY, numX];
//         }
//     }
//     return [numY, numX]
// }
// const async = (dic) => {
//     let touch = 0;
//         dic == 'right'
//           ? onX++
//           : dic == 'left'
//           ? onX--
//           : dic == 'up'
//           ? onY--
//           : dic == 'down'
//           ? onY++
//           : undefined;
//         if (aY == onY && aX == onX) {
//           touch = 1;
//           position[onY].childNodes[onX].classList.toggle('point');
//           [aY, aX] = make();
//           position[aY].childNodes[aX].classList.toggle('point');
//           document.getElementsByClassName('dp__point')[0].textContent = `점수 : ${++dp_point}`;
//           let quotient = Math.floor(dp_point/15);
//           console.log(quotient)
//           1 <= quotient && quotient < 2 ? table.className = 'optic'
//           : 2 <= quotient && quotient < 3 ? table.className = 'blue'
//           : 3 <= quotient && quotient < 4 ? table.className = 'purple'
//           : 4 <= quotient && quotient < 5 ? table.className = 'yellow'
//           : 5 <= quotient && quotient < 6 ? table.className = 'red'
//           : table.className = ''
//         }
//         let isOver = over(onX,onY)
//         snake.unshift([onY, onX]);
//         position[onY].childNodes[onX].classList.toggle('snake');
//         if (touch == 0) {
//           position[snake[snake.length - 1][0]].childNodes[snake[snake.length - 1][1]].classList.toggle('snake');
//           snake.pop();
//         }
//         return isOver == true ? true : false
// }
// const forward = (dic) => {
//     if (started) { // inter 변수가 존재하지 않을 때에만 setInterval 실행
//         inter = setInterval(() => {
//         nowstarted = inter;
//         let touch = 0;
//         if (aY == onY && aX == onX) {
//           touch = 1;
//           position[onY].childNodes[onX].classList.toggle('point');
//           [aY, aX] = make();
//           position[aY].childNodes[aX].classList.toggle('point');
//           document.getElementsByClassName('dp__point')[0].textContent = `점수 : ${++dp_point}`;
//           let quotient = Math.floor(dp_point/15);
//           console.log(quotient)
//           1 <= quotient && quotient < 2 ? table.className = 'optic'
//           : 2 <= quotient && quotient < 3 ? table.className = 'blue'
//           : 3 <= quotient && quotient < 4 ? table.className = 'purple'
//           : 4 <= quotient && quotient < 5 ? table.className = 'yellow'
//           : 5 <= quotient && quotient < 6 ? table.className = 'red'
//           : table.className = ''
//         }
//         over(onX, onY);
//         snake.unshift([onY, onX]);
//         position[onY].childNodes[onX].classList.toggle('snake');
//         if (touch == 0) {
//           position[snake[snake.length - 1][0]].childNodes[snake[snake.length - 1][1]].classList.toggle('snake');
//           snake.pop();
//         }
//       }, speed);
//     }
// };
// document.addEventListener('keydown',function(e) {
//     if(isModal == 0) {
//             if(e.code == 'ArrowRight') {
//                 if(state.right != 1 && state.left != 1) {
//                     state.right = 1, state.left = 1, state.up = 0, state.down = 0;
//                     clearInterval(nowstarted)
//                     if(async('right')) return
//                     nowstarted = right = setInterval(() => {
//                     clearsetinterval.push(right);
//                     let touch = 0;
//                     onX++
//                     if (aY == onY && aX == onX) {
//                     touch = 1;
//                     position[onY].childNodes[onX].classList.toggle('point');
//                     [aY, aX] = make();
//                     position[aY].childNodes[aX].classList.toggle('point');
//                     document.getElementsByClassName('dp__point')[0].textContent = `점수 : ${++dp_point}`;
//                     let quotient = Math.floor(dp_point/15);
//                     console.log(quotient)
//                     1 <= quotient && quotient < 2 ? table.className = 'optic'
//                     : 2 <= quotient && quotient < 3 ? table.className = 'blue'
//                     : 3 <= quotient && quotient < 4 ? table.className = 'purple'
//                     : 4 <= quotient && quotient < 5 ? table.className = 'yellow'
//                     : 5 <= quotient && quotient < 6 ? table.className = 'red'
//                     : table.className = ''
//                     }    
//                     over(onX, onY);
//                     snake.unshift([onY, onX]);
//                     position[onY].childNodes[onX].classList.toggle('snake');
//                     if (touch == 0) {
//                         position[snake[snake.length - 1][0]].childNodes[snake[snake.length - 1][1]].classList.toggle('snake');
//                         snake.pop();
//                     }    
//                     }, speed);
//                 }
//             } else if (e.code == 'ArrowLeft') {
//                 if(state.left != 1 && state.right != 1) {
//                 state.right = 1, state.left = 1, state.up = 0, state.down = 0;
//                 clearInterval(nowstarted)
//                     if(async('left')) return
//                         nowstarted = left = setInterval(() => {
//                         clearsetinterval.push(left);
//                         let touch = 0;
//                         onX--
//                         if (aY == onY && aX == onX) {
//                         touch = 1;
//                         position[onY].childNodes[onX].classList.toggle('point');
//                         [aY, aX] = make();
//                         position[aY].childNodes[aX].classList.toggle('point');
//                         document.getElementsByClassName('dp__point')[0].textContent = `점수 : ${++dp_point}`;
//                         let quotient = Math.floor(dp_point/15);
//                         console.log(quotient)
//                         1 <= quotient && quotient < 2 ? table.className = 'optic'
//                         : 2 <= quotient && quotient < 3 ? table.className = 'blue'
//                         : 3 <= quotient && quotient < 4 ? table.className = 'purple'
//                         : 4 <= quotient && quotient < 5 ? table.className = 'yellow'
//                         : 5 <= quotient && quotient < 6 ? table.className = 'red'
//                         : table.className = ''
//                         }   
//                         over(onX, onY);
//                         snake.unshift([onY, onX]);
//                         position[onY].childNodes[onX].classList.toggle('snake');
//                         if (touch == 0) {
//                             position[snake[snake.length - 1][0]].childNodes[snake[snake.length - 1][1]].classList.toggle('snake');
//                             snake.pop();
//                         }
//                     }, speed);
//                 }
//             } else if (e.code == 'ArrowUp') {
//                 if(state.up != 1 && state.down != 1) {
//                         state.right = 0, state.left = 0, state.up = 1, state.down = 1;
//                         clearInterval(nowstarted)
//                         if(async('up')) return
//                         nowstarted = up = setInterval(() => {
//                         clearsetinterval.push(up);
//                         let touch = 0;
//                         onY--
//                         if (aY == onY && aX == onX) {
//                           touch = 1;
//                           position[onY].childNodes[onX].classList.toggle('point');
//                           [aY, aX] = make();
//                           position[aY].childNodes[aX].classList.toggle('point');
//                           document.getElementsByClassName('dp__point')[0].textContent = `점수 : ${++dp_point}`;
//                           let quotient = Math.floor(dp_point/15);
//                           console.log(quotient)
//                           1 <= quotient && quotient < 2 ? table.className = 'optic'
//                           : 2 <= quotient && quotient < 3 ? table.className = 'blue'
//                           : 3 <= quotient && quotient < 4 ? table.className = 'purple'
//                           : 4 <= quotient && quotient < 5 ? table.className = 'yellow'
//                           : 5 <= quotient && quotient < 6 ? table.className = 'red'
//                           : table.className = ''
//                         }
//                         over(onX, onY);
//                         snake.unshift([onY, onX]);
//                         position[onY].childNodes[onX].classList.toggle('snake');
//                         if (touch == 0) {
//                           position[snake[snake.length - 1][0]].childNodes[snake[snake.length - 1][1]].classList.toggle('snake');
//                           snake.pop();
//                         }
//                       }, speed);
//                     }
//             } else if (e.code == 'ArrowDown'){
//                 if(state.up != 1 && state.down != 1) {
//                     state.right = 0, state.left = 0, state.up = 1, state.down = 1;
//                     clearInterval(nowstarted)
//                         if(async('down')) return
//                         nowstarted = down = setInterval(() => {
//                         clearsetinterval.push(down);
//                         let touch = 0;
//                         onY++
//                         if (aY == onY && aX == onX) {
//                           touch = 1;
//                           position[onY].childNodes[onX].classList.toggle('point');
//                           [aY, aX] = make();
//                           position[aY].childNodes[aX].classList.toggle('point');
//                           document.getElementsByClassName('dp__point')[0].textContent = `점수 : ${++dp_point}`;
//                           let quotient = Math.floor(dp_point/15);
//                           console.log(quotient)
//                           1 <= quotient && quotient < 2 ? table.className = 'optic'
//                           : 2 <= quotient && quotient < 3 ? table.className = 'blue'
//                           : 3 <= quotient && quotient < 4 ? table.className = 'purple'
//                           : 4 <= quotient && quotient < 5 ? table.className = 'yellow'
//                           : 5 <= quotient && quotient < 6 ? table.className = 'red'
//                           : table.className = ''
//                         }
//                         over(onX, onY);
//                         snake.unshift([onY, onX]);
//                         position[onY].childNodes[onX].classList.toggle('snake');
//                         if (touch == 0) {
//                           position[snake[snake.length - 1][0]].childNodes[snake[snake.length - 1][1]].classList.toggle('snake');
//                           snake.pop();
//                         }
//                       }, speed);
//                     }
//             }
//         }
//     })
// document.querySelector('.nomal').addEventListener('click',function (){
//     if(isModal == 0) {
//         speed = 70;
//         document.querySelector('.now__mode').textContent='노말'
//     }
// })
// document.querySelector('.hard').addEventListener('click',function (){
//     if(isModal == 0) {
//         speed = 40;
//         document.querySelector('.now__mode').textContent='하드'
//     }
// })
// document.getElementsByClassName('cancle')[0].addEventListener('click',function () {
//     state.right = 0, state.left = 0, state.up = 0, state.down = 0;
//     document.querySelector('.gameover__modal__wrapper').style.display = 'none';
//     isModal = 0;
//     document.body.style.animation = '';
//     document.querySelector('.NOMAL').innerHTML='';
//     document.querySelector('.HARD').innerHTML='';
//     axios.get('http://211.202.195.102:4000/ranking')
//     .then(res => {
//         const {data} = res;
//         console.log(data);
//         let n_num = 1;
//         let h_num = 1;
//         if(data.length != 0){
//             for(let i = 0; i < data.length; i++){
//                 const li = document.createElement('li');
//                 if(data[i].mode == 40) {
//                     li.textContent = `${h_num}등 ${data[i].name} ${data[i].point}점`
//                     document.querySelector('.HARD').appendChild(li);
//                     h_num++;
//                 } else {
//                     li.textContent = `${n_num}등 ${data[i].name} ${data[i].point}점`
//                     document.querySelector('.NOMAL').appendChild(li);
//                     n_num++;
//                 }
//             }
//         }
//     })
// })
// document.querySelector('.user__name').addEventListener('change',function(e){
//     user_name = e.target.value;
// })
// document.getElementsByClassName('save')[0].addEventListener('click',function () {
//     state.right = 0, state.left = 0, state.up = 0, state.down = 0;
//     document.querySelector('.gameover__modal__wrapper').style.display = 'none';
//     isModal = 0;
//     document.body.style.animation = ''
//     document.querySelector('.NOMAL').innerHTML='';
//     document.querySelector('.HARD').innerHTML='';
//     document.querySelector('.user__name').value='';
//     console.log(speed);
//     axios.post('http://211.202.195.102:4000',{name : user_name, point : sending_point, mode : speed})
//     .then(res => {
//         const {data} = res;
//         console.log(data);
//         let n_num = 1;
//         let h_num = 1;
//         if(data.length != 0){
//             for(let i = 0; i < data.length; i++){
//                 const li = document.createElement('li');
//                 if(data[i].mode == 40) {
//                     li.textContent = `${h_num}등 ${data[i].name} ${data[i].point}점`
//                     document.querySelector('.HARD').appendChild(li);
//                     h_num++;
//                 } else {
//                     li.textContent = `${n_num}등 ${data[i].name} ${data[i].point}점`
//                     document.querySelector('.NOMAL').appendChild(li);
//                     n_num++;
//                 }
//             }
//         }
//     })
// })
// document.querySelector('.NOMAL').innerHTML='';
// document.querySelector('.HARD').innerHTML='';
// axios.get('http://211.202.195.102:4000/ranking')
//     .then(res => {
//         const {data} = res;
//         console.log(data);
//         let n_num = 1;
//         let h_num = 1;
//         if(data.length != 0){
//             for(let i = 0; i < data.length; i++){
//                 const li = document.createElement('li');
//                 if(data[i].mode == 40) {
//                     li.textContent = `${h_num}등 ${data[i].name} ${data[i].point}점`
//                     document.querySelector('.HARD').appendChild(li);
//                     h_num++;
//                 } else {
//                     li.textContent = `${n_num}등 ${data[i].name} ${data[i].point}점`
//                     document.querySelector('.NOMAL').appendChild(li);
//                     n_num++;
//                 }
//             }
//         }
//     })
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map