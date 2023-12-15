"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputView = void 0;
var Documents_1 = require("../Model/Domain/Documents");
var ConditionValue_1 = require("../Model/Domain/Enums/ConditionValue");
function InputView() {
    this.setDifficulty = function (Game) {
        var normalCallback = function () {
            if (!Game.isProceeding) {
                Game.speed = ConditionValue_1.ConditionValue.normal;
            }
        };
        var hardCallback = function () {
            if (!Game.isProceeding) {
                Game.speed = ConditionValue_1.ConditionValue.hard;
            }
        };
        Documents_1.Documents.normalButton.addEventListener('click', normalCallback);
        Documents_1.Documents.hardButton.addEventListener('click', hardCallback);
    };
}
exports.InputView = InputView;
