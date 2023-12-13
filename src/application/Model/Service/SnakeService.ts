// import { classList } from '../Domain/Enums/ClassList.ts';
import { ConditionValue } from '../Domain/Enums/ConditionValue.js';
import { Documents } from '../Domain/Documents.js';
import { KeyCode } from '../Domain/Enums/KeyCodeList.js';
import { Snake, SnakeType } from '../Domain/Snake.js';
import { BoardService, BoardServiceType } from './BoardService.js';
import { Game, GameType} from '../Domain/Game.js';

interface SnakeServiceType {
    addSnake : (Snake:SnakeType, y : number, x : number) => void
    removeSnake : (Snake : SnakeType) => void,
    initSnake : (Snake : SnakeType, BoardService : BoardServiceType) => void,
    checkOver : (Snake : SnakeType, element:HTMLCollectionOf<HTMLTableRowElement>) => boolean,
    move : (inputCode : string, Snake : SnakeType) => void,
    moveAsync : (keyCode : string, Snake : SnakeType, Game:GameType, callback : (() => void)[]) => void,
    onHit : (Snake : SnakeType) => boolean,
    checkCanChangeDirection : (Snake : SnakeType, keyCode : string) => boolean,
    initState : (Snake : SnakeType) => void,
    makePoint : (Snake : SnakeType, BoardService : BoardServiceType) => void
}

function SnakeService(this:SnakeServiceType) {
    this.addSnake = (Snake, y, x) => {
        Snake.bodys.unshift([y,x]);
    };
    this.removeSnake = (Snake) => {
        Snake.bodys.pop();
    };
    this.initSnake = (Snake, BoardService) => {
        Snake.onX = ConditionValue.startX;
        Snake.onY = ConditionValue.startY;
        Snake.bodys = [[ConditionValue.startY, ConditionValue.startX]];
        Snake.pointYX = BoardService.makePoint(Snake);
    };
    this.checkOver = (Snake, element) => {
        if((Snake.onX >= ConditionValue.row || 
            Snake.onY >= ConditionValue.col || 
            Snake.onX < 0 || 
            Snake.onY < 0) ||
            element[Snake.onY].children[Snake.onX].classList.contains('snake'))
        {
            return true;
        }
        return false;
    }
    this.move = (inputCode, Snake) => {
        if(inputCode == KeyCode.ArrowRight) {
            Snake.stateRight = false;
            Snake.stateLeft = false,
            Snake.stateUp = true;
            Snake.stateDown = true;
            Snake.onX+=1;
        } else if (inputCode == KeyCode.ArrowLeft) {
            Snake.stateRight = false;
            Snake.stateLeft = false,
            Snake.stateUp = true;
            Snake.stateDown = true;
            Snake.onX-=1;
        } else if (inputCode == KeyCode.ArrowUp) {
            Snake.stateRight = true;
            Snake.stateLeft = true,
            Snake.stateUp = false;
            Snake.stateDown = false;
            Snake.onY-=1;
        } else if (inputCode == KeyCode.ArrowDown) {
            Snake.stateRight = true;
            Snake.stateLeft = true,
            Snake.stateUp = false;
            Snake.stateDown = false;
            Snake.onY+=1;
        }
    };
    this.moveAsync = (keyCode, Snake, Game, callback) => {
        Snake.nowProgressed = setInterval(()=>{
            if(keyCode == KeyCode.ArrowRight) {
                Snake.onX+=1;
            }
            if(keyCode == KeyCode.ArrowLeft) {
                Snake.onX-=1;
            }
            if(keyCode == KeyCode.ArrowUp) {
                Snake.onY-=1;
            }
            if(keyCode == KeyCode.ArrowDown) {
                Snake.onY+=1;
            }
            callback.forEach(callback => {
                callback();
            })
        },Game.speed)
    };
    this.onHit = (Snake) => {
        const [pointY, pointX] = Snake.pointYX;
        if(Snake.onY === pointY && Snake.onX === pointX) {
            return true;
        }
        return false;
    };
    this.checkCanChangeDirection = (Snake, keyCode) => {
        if(keyCode == KeyCode.ArrowRight && Snake.stateRight) {
            return true;
        }
        if(keyCode == KeyCode.ArrowLeft && Snake.stateLeft) {
            return true;
        }
        if(keyCode == KeyCode.ArrowUp && Snake.stateUp) {
            return true;
        }
        if(keyCode == KeyCode.ArrowDown && Snake.stateDown) {
            return true;
        }
        return false;
    };
    this.initState = (Snake) => {
        Snake.stateRight = true;
        Snake.stateLeft = true;
        Snake.stateUp = true;
        Snake.stateDown = true;
    };
    this.makePoint = (Snake, BoardService) => {
        Snake.pointYX = BoardService.makePoint(Snake);
    }

}

export { SnakeService, SnakeServiceType };