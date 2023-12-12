/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./compile/application/Model/Domain/Documents.js":
/*!*******************************************************!*\
  !*** ./compile/application/Model/Domain/Documents.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Documents: () => (/* binding */ Documents)
/* harmony export */ });
/* harmony import */ var _Enums_ClassList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Enums/ClassList.js */ "./compile/application/Model/Domain/Enums/ClassList.js");

var Documents = {
  table: document.querySelector(_Enums_ClassList_js__WEBPACK_IMPORTED_MODULE_0__.ClassList.table),
  position: document.getElementsByTagName("tr")
};


/***/ }),

/***/ "./compile/application/Model/Domain/Enums/ClassList.js":
/*!*************************************************************!*\
  !*** ./compile/application/Model/Domain/Enums/ClassList.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClassList: () => (/* binding */ ClassList)
/* harmony export */ });
var ClassList;
(function (ClassList) {
  ClassList["table"] = "#main__wrapper";
  ClassList["snake"] = "snake";
  ClassList["gameOverModal"] = ".gameover__modal__wrapper";
  ClassList["tr"] = "tr";
})(ClassList || (ClassList = {}));
;


/***/ }),

/***/ "./compile/application/Model/Domain/Enums/ConditionValue.js":
/*!******************************************************************!*\
  !*** ./compile/application/Model/Domain/Enums/ConditionValue.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConditionValue: () => (/* binding */ ConditionValue)
/* harmony export */ });
var ConditionValue;
(function (ConditionValue) {
  ConditionValue[ConditionValue["row"] = 36] = "row";
  ConditionValue[ConditionValue["col"] = 30] = "col";
  ConditionValue[ConditionValue["normal"] = 70] = "normal";
  ConditionValue[ConditionValue["hard"] = 40] = "hard";
  ConditionValue[ConditionValue["startX"] = 10] = "startX";
  ConditionValue[ConditionValue["startY"] = 15] = "startY";
})(ConditionValue || (ConditionValue = {}));


/***/ }),

/***/ "./compile/application/Model/Domain/Enums/KeyCodeList.js":
/*!***************************************************************!*\
  !*** ./compile/application/Model/Domain/Enums/KeyCodeList.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KeyCode: () => (/* binding */ KeyCode)
/* harmony export */ });
var KeyCode;
(function (KeyCode) {
  KeyCode["ArrowRight"] = "ArrowRight";
  KeyCode["ArrowLeft"] = "ArrowLeft";
  KeyCode["ArrowUp"] = "ArrowUp";
  KeyCode["ArrowDown"] = "ArrowDown";
})(KeyCode || (KeyCode = {}));


/***/ }),

/***/ "./compile/application/Model/Domain/Game.js":
/*!**************************************************!*\
  !*** ./compile/application/Model/Domain/Game.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Game: () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _Service_BoardService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Service/BoardService */ "./compile/application/Model/Service/BoardService.js");
/* harmony import */ var _Service_SnakeService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Service/SnakeService */ "./compile/application/Model/Service/SnakeService.js");
/* harmony import */ var _Enums_ConditionValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Enums/ConditionValue */ "./compile/application/Model/Domain/Enums/ConditionValue.js");
/* harmony import */ var _Documents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Documents */ "./compile/application/Model/Domain/Documents.js");




var Game = {
  point: 0,
  isModal: false,
  gameInit: function gameInit(Snake) {
    Snake.onX = _Enums_ConditionValue__WEBPACK_IMPORTED_MODULE_2__.ConditionValue.startX;
    Snake.onY = _Enums_ConditionValue__WEBPACK_IMPORTED_MODULE_2__.ConditionValue.startY;
    Snake.bodys = _Service_SnakeService__WEBPACK_IMPORTED_MODULE_1__.SnakeService.initBodys();
    Snake.pointYX = _Service_BoardService__WEBPACK_IMPORTED_MODULE_0__.BoardService.makePoint();
    _Documents__WEBPACK_IMPORTED_MODULE_3__.Documents.position[Snake.startY].children[Snake.startX].classList.toggle('snake');
    _Documents__WEBPACK_IMPORTED_MODULE_3__.Documents.position[Snake.pointYX[0]].children[Snake.pointYX[1]].classList.toggle('point');
  }
};


/***/ }),

/***/ "./compile/application/Model/Domain/Snake.js":
/*!***************************************************!*\
  !*** ./compile/application/Model/Domain/Snake.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Snake: () => (/* binding */ Snake)
/* harmony export */ });
/* harmony import */ var _Enums_ConditionValue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Enums/ConditionValue.js */ "./compile/application/Model/Domain/Enums/ConditionValue.js");

var Snake = {
  startX: _Enums_ConditionValue_js__WEBPACK_IMPORTED_MODULE_0__.ConditionValue.startX,
  startY: _Enums_ConditionValue_js__WEBPACK_IMPORTED_MODULE_0__.ConditionValue.startY,
  stateRight: true,
  stateLeft: true,
  stateUp: true,
  stateDown: true,
  bodys: [_Enums_ConditionValue_js__WEBPACK_IMPORTED_MODULE_0__.ConditionValue.startX, _Enums_ConditionValue_js__WEBPACK_IMPORTED_MODULE_0__.ConditionValue.startY],
  pointYX: [_Enums_ConditionValue_js__WEBPACK_IMPORTED_MODULE_0__.ConditionValue.startX, _Enums_ConditionValue_js__WEBPACK_IMPORTED_MODULE_0__.ConditionValue.startY],
  nowProgressed: undefined,
  onX: _Enums_ConditionValue_js__WEBPACK_IMPORTED_MODULE_0__.ConditionValue.startX,
  onY: _Enums_ConditionValue_js__WEBPACK_IMPORTED_MODULE_0__.ConditionValue.startY
};


/***/ }),

/***/ "./compile/application/Model/Service/BoardService.js":
/*!***********************************************************!*\
  !*** ./compile/application/Model/Service/BoardService.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BoardService: () => (/* binding */ BoardService)
/* harmony export */ });
/* harmony import */ var _Domain_Enums_ConditionValue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Domain/Enums/ConditionValue.js */ "./compile/application/Model/Domain/Enums/ConditionValue.js");
/* harmony import */ var _Domain_Snake_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Domain/Snake.js */ "./compile/application/Model/Domain/Snake.js");


var BoardService = {
  initTable: function initTable(element) {
    for (var i = 0; i < _Domain_Enums_ConditionValue_js__WEBPACK_IMPORTED_MODULE_0__.ConditionValue.col; i++) {
      var tr = document.createElement('tr');
      element.append(tr);
      for (var j = 0; j < _Domain_Enums_ConditionValue_js__WEBPACK_IMPORTED_MODULE_0__.ConditionValue.row; j++) {
        var td = document.createElement('td');
        document.getElementsByTagName('tr')[i].append(td);
      }
    }
  },
  makePoint: function makePoint() {
    while (true) {
      var numX = Math.floor(Math.random() * (_Domain_Enums_ConditionValue_js__WEBPACK_IMPORTED_MODULE_0__.ConditionValue.row - 1));
      var numY = Math.floor(Math.random() * (_Domain_Enums_ConditionValue_js__WEBPACK_IMPORTED_MODULE_0__.ConditionValue.col - 1));
      var snakes = _Domain_Snake_js__WEBPACK_IMPORTED_MODULE_1__.Snake.bodys;
      for (var i in snakes) {
        if (numY == snakes[i][0] && numX == snakes[i][1]) {
          continue;
        }
      }
      return [numY, numX];
    }
  }
};


/***/ }),

/***/ "./compile/application/Model/Service/SnakeService.js":
/*!***********************************************************!*\
  !*** ./compile/application/Model/Service/SnakeService.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SnakeService: () => (/* binding */ SnakeService)
/* harmony export */ });
/* harmony import */ var _Domain_Enums_ConditionValue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Domain/Enums/ConditionValue.js */ "./compile/application/Model/Domain/Enums/ConditionValue.js");
/* harmony import */ var _Domain_Enums_KeyCodeList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Domain/Enums/KeyCodeList.js */ "./compile/application/Model/Domain/Enums/KeyCodeList.js");
/* harmony import */ var _Domain_Snake_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Domain/Snake.js */ "./compile/application/Model/Domain/Snake.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
// import { classList } from '../Domain/Enums/ClassList.ts';



var SnakeService = {
  initBodys: function initBodys() {
    return [_Domain_Enums_ConditionValue_js__WEBPACK_IMPORTED_MODULE_0__.ConditionValue.startX, _Domain_Enums_ConditionValue_js__WEBPACK_IMPORTED_MODULE_0__.ConditionValue.startY];
  },
  checkOver: function checkOver(x, y, element) {
    if (x >= _Domain_Enums_ConditionValue_js__WEBPACK_IMPORTED_MODULE_0__.ConditionValue.row || y >= _Domain_Enums_ConditionValue_js__WEBPACK_IMPORTED_MODULE_0__.ConditionValue.col || x < 0 || y < 0 || element[y].children[x].classList.contains('snake')) {
      //벽, 자기자신의 몸통에 충돌시 over함수 작동
      return true; //setinterval 동작에서는 필요없지만 동기적으로 작동하는 움직임에서는 over가 작동시 true를 리턴
    }
  },
  move: function move(inputCode, Snake) {
    if (_Domain_Enums_KeyCodeList_js__WEBPACK_IMPORTED_MODULE_1__.KeyCode[inputCode]) {
      Snake.nowProgressed && clearInterval(Snake.nowProgressed);
      if (inputCode == _Domain_Enums_KeyCodeList_js__WEBPACK_IMPORTED_MODULE_1__.KeyCode.ArrowRight && Snake.stateRight) {
        Snake.startX++;
      } else if (inputCode == _Domain_Enums_KeyCodeList_js__WEBPACK_IMPORTED_MODULE_1__.KeyCode.ArrowLeft && Snake.stateLeft) {
        Snake.startX--;
      } else if (inputCode == _Domain_Enums_KeyCodeList_js__WEBPACK_IMPORTED_MODULE_1__.KeyCode.ArrowUp && Snake.stateUp) {
        Snake.startY++;
      } else if (inputCode == _Domain_Enums_KeyCodeList_js__WEBPACK_IMPORTED_MODULE_1__.KeyCode.ArrowDown && Snake.stateDown) {
        Snake.startY--;
      }
      return true;
    }
    return false;
  },
  onHit: function onHit() {
    var _Snake$pointYX = _slicedToArray(_Domain_Snake_js__WEBPACK_IMPORTED_MODULE_2__.Snake.pointYX, 2),
      pointY = _Snake$pointYX[0],
      pointX = _Snake$pointYX[1];
    if (_Domain_Snake_js__WEBPACK_IMPORTED_MODULE_2__.Snake.onY === pointY && _Domain_Snake_js__WEBPACK_IMPORTED_MODULE_2__.Snake.onX === pointX) {
      return true;
    }
  }
};


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./compile/index.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _application_Model_Service_BoardService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./application/Model/Service/BoardService.js */ "./compile/application/Model/Service/BoardService.js");
/* harmony import */ var _application_Model_Domain_Documents_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./application/Model/Domain/Documents.js */ "./compile/application/Model/Domain/Documents.js");
/* harmony import */ var _application_Model_Domain_Snake_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./application/Model/Domain/Snake.js */ "./compile/application/Model/Domain/Snake.js");
/* harmony import */ var _application_Model_Service_SnakeService_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./application/Model/Service/SnakeService.js */ "./compile/application/Model/Service/SnakeService.js");
/* harmony import */ var _application_Model_Domain_Game_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./application/Model/Domain/Game.js */ "./compile/application/Model/Domain/Game.js");





var Controller = {
  Snake: _application_Model_Domain_Snake_js__WEBPACK_IMPORTED_MODULE_2__.Snake,
  SnakeService: _application_Model_Service_SnakeService_js__WEBPACK_IMPORTED_MODULE_3__.SnakeService,
  gameStart: function gameStart() {
    _application_Model_Service_BoardService_js__WEBPACK_IMPORTED_MODULE_0__.BoardService.initTable(_application_Model_Domain_Documents_js__WEBPACK_IMPORTED_MODULE_1__.Documents.table);
    _application_Model_Domain_Game_js__WEBPACK_IMPORTED_MODULE_4__.Game.gameInit(Controller.Snake);
  },
  gameInit: function gameInit() {
    _application_Model_Domain_Game_js__WEBPACK_IMPORTED_MODULE_4__.Game.gameInit(Controller.Snake);
  },
  move: function move(keyCode) {
    if (Controller.SnakeService.move(keyCode, Controller.Snake)) {}
  }
};
Controller.gameStart();
document.addEventListener("keydown", function (e) {
  Controller.move(e.code);
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