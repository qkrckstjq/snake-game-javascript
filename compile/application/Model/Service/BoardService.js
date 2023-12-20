"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardService = void 0;
var ConditionValue_js_1 = require("../Domain/Enum/ConditionValue.js");
var utils_js_1 = require("./utils.js");
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
        var exclusiveY = -1;
        var exclusiveX = -1;
        var snakes = Snake.bodys;
        point: while (true) {
            numX = utils_js_1.Utils.getRandomNumber(0, ConditionValue_js_1.ConditionValue.row - 1, exclusiveX);
            numY = utils_js_1.Utils.getRandomNumber(0, ConditionValue_js_1.ConditionValue.col - 1, exclusiveY);
            for (var i = 0; i < snakes.length; i++) {
                if (numY == snakes[i][0] && numX == snakes[i][1]) {
                    exclusiveY = numY == snakes[i][0] ? numY : -1;
                    exclusiveX = numX == snakes[i][1] ? numX : -1;
                    continue point;
                }
            }
            return [numY, numX];
        }
    };
}
exports.BoardService = BoardService;
