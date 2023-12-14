"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameService = void 0;
var ConditionValue_1 = require("../Domain/Enums/ConditionValue");
var ClassList_js_1 = require("../Domain/Enums/ClassList.js");
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
        }
        else if (ConditionValue_1.ConditionValue.MIN_BLUE <= quotient && quotient < ConditionValue_1.ConditionValue.MIN_PURPLE) {
            return ClassList_js_1.ClassList.BLUE;
        }
        else if (ConditionValue_1.ConditionValue.MIN_PURPLE <= quotient && quotient < ConditionValue_1.ConditionValue.MIN_YELLOW) {
            return ClassList_js_1.ClassList.PURPLE;
        }
        else if (ConditionValue_1.ConditionValue.MIN_YELLOW <= quotient && quotient < ConditionValue_1.ConditionValue.MIN_RED) {
            return ClassList_js_1.ClassList.YELLOW;
        }
        else if (ConditionValue_1.ConditionValue.MIN_OPTIC <= quotient && quotient < ConditionValue_1.ConditionValue.MIN_BLUE) {
            return ClassList_js_1.ClassList.RED;
        }
        else {
            return "";
        }
    };
}
exports.GameService = GameService;
