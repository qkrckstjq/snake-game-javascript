"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputView = void 0;
var ConditionValue_1 = require("../Model/Domain/Enums/ConditionValue");
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
