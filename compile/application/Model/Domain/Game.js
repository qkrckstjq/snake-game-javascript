"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
var ConditionValue_1 = require("./Enums/ConditionValue");
function Game() {
    this.point = 0;
    this.isModal = false;
    this.speed = ConditionValue_1.ConditionValue.normal;
    this.isProceeding = false;
    this.canPlay = true;
}
exports.Game = Game;
