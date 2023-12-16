"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SnakeService = void 0;
var ConditionValue_js_1 = require("../Domain/Enum/ConditionValue.js");
var KeyCodeList_js_1 = require("../Domain/Enum/KeyCodeList.js");
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
        if ((Snake.onX >= ConditionValue_js_1.ConditionValue.row ||
            Snake.onY >= ConditionValue_js_1.ConditionValue.col ||
            Snake.onX < 0 ||
            Snake.onY < 0) ||
            element[Snake.onY].children[Snake.onX].classList.contains('snake')) {
            return true;
        }
        return false;
    };
    this.move = function (inputCode, Snake) {
        if (inputCode == KeyCodeList_js_1.KeyCode.ArrowRight) {
            Snake.stateRight = false;
            Snake.stateLeft = false,
                Snake.stateUp = true;
            Snake.stateDown = true;
            Snake.onX += 1;
        }
        else if (inputCode == KeyCodeList_js_1.KeyCode.ArrowLeft) {
            Snake.stateRight = false;
            Snake.stateLeft = false,
                Snake.stateUp = true;
            Snake.stateDown = true;
            Snake.onX -= 1;
        }
        else if (inputCode == KeyCodeList_js_1.KeyCode.ArrowUp) {
            Snake.stateRight = true;
            Snake.stateLeft = true,
                Snake.stateUp = false;
            Snake.stateDown = false;
            Snake.onY -= 1;
        }
        else if (inputCode == KeyCodeList_js_1.KeyCode.ArrowDown) {
            Snake.stateRight = true;
            Snake.stateLeft = true,
                Snake.stateUp = false;
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
        var _a = Snake.pointYX, pointY = _a[0], pointX = _a[1];
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
