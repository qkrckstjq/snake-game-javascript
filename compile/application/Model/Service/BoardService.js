"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardService = void 0;
var ConditionValue_js_1 = require("../Domain/Enum/ConditionValue.js");
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
        var numX;
        var numY;
        var snakes = Snake.bodys;
        while (true) {
            numX = Math.floor(Math.random() * (ConditionValue_js_1.ConditionValue.row - 1));
            numY = Math.floor(Math.random() * (ConditionValue_js_1.ConditionValue.col - 1));
            for (var i = 0; i < snakes.length; i++) {
                if (numY == snakes[i][0] && numX == snakes[i][1]) {
                    continue;
                }
            }
            return [numY, numX];
        }
    };
}
exports.BoardService = BoardService;
