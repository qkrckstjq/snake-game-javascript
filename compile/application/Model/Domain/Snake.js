"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Snake = void 0;
var ConditionValue_js_1 = require("./Enum/ConditionValue.js");
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
    this.getLastY = function () {
        return _this.bodys[_this.bodys.length - 1][0];
    };
    this.getLastX = function () {
        return _this.bodys[_this.bodys.length - 1][1];
    };
}
exports.Snake = Snake;
