"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BoardService_js_1 = require("./application/Model/Service/BoardService.js");
var Documents_js_1 = require("./application/Model/Domain/Documents.js");
var Snake_js_1 = require("./application/Model/Domain/Snake.js");
var SnakeService_js_1 = require("./application/Model/Service/SnakeService.js");
var Game_js_1 = require("./application/Model/Domain/Game.js");
var GameService_js_1 = require("./application/Model/Service/GameService.js");
var KeyCodeList_js_1 = require("./application/Model/Domain/Enums/KeyCodeList.js");
var OutputView_js_1 = require("./application/View/OutputView.js");
var InputView_js_1 = require("./application/View/InputView.js");
function GameController() {
    var _this = this;
    this.Snake = new Snake_js_1.Snake();
    this.SnakeService = new SnakeService_js_1.SnakeService();
    this.BoardService = new BoardService_js_1.BoardService();
    this.Game = new Game_js_1.Game();
    this.GameService = new GameService_js_1.GameService(),
        this.outputView = new OutputView_js_1.OutputView();
    this.inputView = new InputView_js_1.InputView();
    this.setClassOnSnake = function () {
        _this.outputView.setTableColor(_this.GameService.setColor(_this.Snake.bodys.length));
    };
    this.removeAllSnakeClass = function () {
        for (var i = 0; i < _this.Snake.bodys.length; i++) {
            _this.outputView.removeClassName(_this.Snake.bodys[i][0], _this.Snake.bodys[i][1]);
        }
    };
    this.makeNewPoint = function () {
        _this.SnakeService.makePoint(_this.Snake, _this.BoardService);
        _this.outputView.addClassPoint(_this.Snake.pointYX[0], _this.Snake.pointYX[1]);
    };
    this.moveFoward = function () {
        _this.SnakeService.addSnake(_this.Snake, _this.Snake.onY, _this.Snake.onX);
        _this.outputView.addClassSnake(_this.Snake.onY, _this.Snake.onX);
        _this.outputView.removeClassName(_this.Snake.getLastY(), _this.Snake.getLastX());
        _this.SnakeService.removeSnake(_this.Snake);
    };
    this.gameStart = function () {
        _this.BoardService.initTable(Documents_js_1.Documents.table);
        _this.gameInit();
    };
    this.gameInit = function () {
        _this.GameService.setGameState(_this.Game, true);
        _this.SnakeService.initSnake(_this.Snake, _this.BoardService);
        _this.outputView.addClassSnake(_this.Snake.startY, _this.Snake.startX);
        _this.outputView.addClassPoint(_this.Snake.pointYX[0], _this.Snake.pointYX[1]);
        _this.SnakeService.initState(_this.Snake);
    };
    this.whenOver = function () {
        clearInterval(_this.Snake.nowProgressed);
        _this.GameService.setGameState(_this.Game, false);
        _this.removeAllSnakeClass();
        _this.outputView.removeClassName(_this.Snake.pointYX[0], _this.Snake.pointYX[1]);
        _this.gameInit();
    };
    this.checkOver = function () {
        if (_this.SnakeService.checkOver(_this.Snake, Documents_js_1.Documents.position)) {
            _this.Game.isProceeding = false;
            _this.whenOver();
            return;
        }
        _this.moveFoward();
    };
    this.whenOnPoint = function () {
        if (_this.SnakeService.onHit(_this.Snake)) {
            _this.outputView.setDpPoint(_this.Snake.bodys.length);
            _this.SnakeService.addSnake(_this.Snake, _this.Snake.onY, _this.Snake.onX);
            _this.outputView.removeClassPoint(_this.Snake.pointYX[0], _this.Snake.pointYX[1]);
            _this.setClassOnSnake();
            _this.makeNewPoint();
            _this.moveFoward();
            return;
        }
        _this.checkOver();
    };
    this.move = function (keyCode) {
        _this.Game.isProceeding = true;
        _this.SnakeService.move(keyCode, _this.Snake);
        _this.whenOnPoint();
    };
    this.moveAsync = function (keyCode) {
        clearInterval(_this.Snake.nowProgressed);
        _this.Game.isProceeding = true;
        _this.SnakeService.moveAsync(keyCode, _this.Snake, _this.Game, [
            _this.whenOnPoint
        ]);
    };
}
var controller = new GameController();
controller.inputView.setDifficulty(controller.Game);
controller.gameStart();
document.addEventListener("keydown", function (e) {
    if (controller.Game.canPlay &&
        KeyCodeList_js_1.KeyCode[e.code] &&
        controller.SnakeService.checkCanChangeDirection(controller.Snake, e.code)) {
        clearInterval(controller.Snake.nowProgressed);
        controller.move(e.code);
        controller.moveAsync(e.code);
    }
});
