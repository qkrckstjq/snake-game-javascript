"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
var Utils = {
    getRandomNumber: function (min, max, exclusiveNumber) {
        while (true) {
            var result = Math.floor(Math.random() * (max - min) + min);
            if (result != exclusiveNumber) {
                return result;
            }
        }
    }
};
exports.Utils = Utils;
