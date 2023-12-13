// import { classList } from '../Domain/Enums/ClassList.ts';
import { ConditionValue } from '../Domain/Enums/ConditionValue.js';
import { Documents } from '../Domain/Documents.js';
import { KeyCode } from '../Domain/Enums/KeyCodeList.js';
import { Snake, SnakeType } from '../Domain/Snake.js';
import { BoardService, BoardServiceType } from './BoardService.js';

interface SnakeServiceType {
    initSnake : (Snake : SnakeType, BoardService : BoardServiceType) => void,
    checkOver : (Snake : SnakeType, element:HTMLCollectionOf<HTMLTableRowElement>) => boolean,
    canMove : (inputCode : string, Snake : SnakeType) => boolean,
    onHit : (Snake : SnakeType) => boolean,
    addSnake : (Snake:SnakeType, y : number, x : number) => void
    removeSnake : (Snake : SnakeType) => void
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
            element[Snake.onY].children[Snake.onX].classList.contains('snake')) {
            return true;
        }
    }
    this.canMove = (inputCode, Snake) => {
        Snake.nowProgressed && clearInterval(Snake.nowProgressed);
        if(inputCode == KeyCode.ArrowRight && Snake.stateRight) {
            Snake.stateRight = false;
            Snake.stateLeft = false,
            Snake.stateUp = true;
            Snake.stateDown = true;
            Snake.onX+=1;
            return true;
        } else if (inputCode == KeyCode.ArrowLeft && Snake.stateLeft) {
            Snake.stateRight = false;
            Snake.stateLeft = false,
            Snake.stateUp = true;
            Snake.stateDown = true;
            Snake.onX-=1;
            return true;
        } else if (inputCode == KeyCode.ArrowUp && Snake.stateUp) {
            Snake.stateRight = true;
            Snake.stateLeft = true,
            Snake.stateUp = false;
            Snake.stateDown = false;
            Snake.onY-=1;
            return true;
        } else if (inputCode == KeyCode.ArrowDown && Snake.stateDown) {
            Snake.stateRight = true;
            Snake.stateLeft = true,
            Snake.stateUp = false;
            Snake.stateDown = false;
            Snake.onY+=1;
            return true;
        }
        return false;
    };
    this.onHit = (Snake) => {
        const [pointY, pointX] = Snake.pointYX;
        if(Snake.onY === pointY && Snake.onX === pointX) {
            return true;
        }
    };
}

export { SnakeService, SnakeServiceType };