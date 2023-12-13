"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameService = void 0;
function GameService() {
    this.setGameState = function (Game, state) {
        Game.canPlay = state;
    };
    this.setGameProceeding = function (Game, state) {
        Game.isProceeding = state;
    };
}
exports.GameService = GameService;
