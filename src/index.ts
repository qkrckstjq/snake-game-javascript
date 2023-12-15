import { BoardService, BoardServiceType } from './application/Model/Service/BoardService.js';
import { Documents, DocumentsType } from './application/Model/Domain/Documents.js';
import { Snake, SnakeType } from './application/Model/Domain/Snake.js';
import { SnakeService, SnakeServiceType } from './application/Model/Service/SnakeService.js';
import { Game, GameType } from './application/Model/Domain/Game.js';
import { GameService, GameServiceType } from './application/Model/Service/GameService.js';
import { KeyCode } from './application/Model/Domain/Enums/KeyCodeList.js';
import { ClassList } from './application/Model/Domain/Enums/ClassList.js';
import { ConditionValue } from './application/Model/Domain/Enums/ConditionValue.js';
import { OutputView, OutputViewType } from './application/View/OutputView.js';
import { InputView, InputViewType } from './application/View/InputView.js';


interface GameControllerType {
    Snake : SnakeType | undefined,
    SnakeService : SnakeServiceType | undefined,
    Documents : DocumentsType,
    BoardService : BoardServiceType,
    Game : GameType,
    GameService : GameServiceType,
    outputView : OutputViewType,
    inputView : InputViewType,

    setClassOnSnake : () => void,
    removeAllSnakeClass : () => void,
    makeNewPoint : () => void,
    moveFoward : () => void,
    gameStart : () => void,
    gameInit : () => void,
    whenOver : () => void,
    checkOver : () => void,
    whenOnPoint : () => void,
    move : (keyCode : string) => void, 
    moveAsync : (keyCode : string) => void,
    checkMode : () => void,
    whenClickNoraml : () => void,
    whenClickHard : () => void,
    run : (event : KeyboardEvent) => void
}

function GameController(this : GameControllerType) {
    this.Snake = new Snake();
    this.SnakeService = new SnakeService();
    this.BoardService = new BoardService();
    this.Game = new Game();
    this.GameService = new GameService(),
    this.outputView = new OutputView();
    this.inputView = new InputView();

    this.setClassOnSnake = () => {
        this.outputView.setTableColor(this.GameService.setColor(this.Snake.bodys.length));
    }
    this.removeAllSnakeClass = () => {
        for(let i = 0; i < this.Snake.bodys.length; i++) {
            this.outputView.removeClassName(this.Snake.bodys[i][0], this.Snake.bodys[i][1]);
        }
    };
    this.makeNewPoint = () => {
        this.SnakeService.makePoint(this.Snake, this.BoardService);
        this.outputView.addClassPoint(this.Snake.pointYX[0], this.Snake.pointYX[1]);
    };
    this.moveFoward = () => {
        this.SnakeService.addSnake(this.Snake, this.Snake.onY, this.Snake.onX);
        this.outputView.addClassSnake(this.Snake.onY, this.Snake.onX);
        this.outputView.removeClassName(this.Snake.getLastY(), this.Snake.getLastX());
        this.SnakeService.removeSnake(this.Snake);   
    };
    this.gameStart = () => {
        this.BoardService.initTable(Documents.table);
        this.gameInit();
    };
    this.gameInit = () => {
        this.GameService.setGameState(this.Game, true);
        this.SnakeService.initSnake(this.Snake, this.BoardService);
        this.outputView.addClassSnake(this.Snake.startY, this.Snake.startX);
        this.outputView.addClassPoint(this.Snake.pointYX[0], this.Snake.pointYX[1]);
        this.SnakeService.initState(this.Snake);
    };
    this.whenOver = () => {
        clearInterval(this.Snake.nowProgressed);
        this.GameService.setGameState(this.Game,false);
        this.removeAllSnakeClass();
        this.outputView.removeClassName(this.Snake.pointYX[0], this.Snake.pointYX[1]);
        this.gameInit();
    };
    this.checkOver = () => {
        if(this.SnakeService.checkOver(this.Snake, Documents.position)) {
            this.Game.isProceeding = false;  
            this.whenOver();
            return;
        }
        this.moveFoward();
    }
    this.whenOnPoint = () => {
        if(this.SnakeService.onHit(this.Snake)) {
            this.outputView.setDpPoint(this.Snake.bodys.length);
            this.SnakeService.addSnake(this.Snake, this.Snake.onY, this.Snake.onX);
            this.outputView.removeClassPoint(this.Snake.pointYX[0], this.Snake.pointYX[1]);
            this.setClassOnSnake();
            this.makeNewPoint();
            this.moveFoward();
            return;
        }
        this.checkOver();
    }
    this.move = (keyCode) => {
        this.Game.isProceeding = true;  
        this.SnakeService.move(keyCode, this.Snake)
        this.whenOnPoint();
    };
    this.moveAsync = (keyCode) => {
        clearInterval(this.Snake.nowProgressed);
        this.Game.isProceeding = true;
        this.SnakeService.moveAsync(keyCode, this.Snake, this.Game,[
            this.whenOnPoint
        ]);
    };
    this.checkMode = () => {
        console.log(this.Game.speed, ConditionValue.normal);
        console.log(Documents.normalButton);
        if(this.Game.speed == ConditionValue.normal) {
            this.outputView.addFocusOnButton(Documents.normalButton);
            this.outputView.removeFocusOnButton(Documents.hardButton);
        } else {
            this.outputView.addFocusOnButton(Documents.hardButton);
            this.outputView.removeFocusOnButton(Documents.normalButton);
        }
    }
    this.whenClickNoraml = () => {
        this.inputView.setDifficultyNormal(this.Game);
        this.outputView.addFocusOnButton(Documents.normalButton);
        this.outputView.removeFocusOnButton(Documents.hardButton);
    };
    this.whenClickHard = () => {
        this.inputView.setDifficultyHard(this.Game);
        this.outputView.addFocusOnButton(Documents.hardButton);
        this.outputView.removeFocusOnButton(Documents.normalButton);
    }
    this.run = (event) => {
        if (this.Game.canPlay && 
            KeyCode[event.code] &&
            this.SnakeService.checkCanChangeDirection(this.Snake, event.code)
        ) {
            clearInterval(this.Snake.nowProgressed);
            this.move(event.code);
            this.moveAsync(event.code);
        }
    }
}

const controller = new GameController();

controller.inputView.setDifficultyNormal(controller.Game);
controller.gameStart();

window.addEventListener("DOMContentLoaded", controller.checkMode)

Documents.normalButton.addEventListener("click", controller.whenClickNoraml)

Documents.hardButton.addEventListener("click", controller.whenClickHard)

document.addEventListener("keydown", controller.run);