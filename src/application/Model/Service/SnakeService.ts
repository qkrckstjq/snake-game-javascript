// import { classList } from '../Domain/Enums/ClassList.ts';
import {ConditionValue} from '../Domain/Enums/ConditionValue.js';
import {Documents} from '../Domain/Enums/Documents.js';
import { KeyCode } from '../Domain/Enums/KeyCodeList.js';
import { Snake } from '../Domain/Snake.js';

interface SnakeServiceType {
    initBodys : () => number[],
    checkOver : (x : number, y : number) => boolean,
    move : (string) => boolean,
    onHit : () => void,
}

const SnakeService:SnakeServiceType = {
    initBodys : () => {
        return [ConditionValue.startX, ConditionValue.startY];
    },
    checkOver : (x, y) => {
        if((x >= ConditionValue.row || 
            y >= ConditionValue.col || 
            x < 0 || 
            y < 0) ||
            Documents.position[y].children[x].classList.contains('snake')) {//벽, 자기자신의 몸통에 충돌시 over함수 작동
            return true                                                      //setinterval 동작에서는 필요없지만 동기적으로 작동하는 움직임에서는 over가 작동시 true를 리턴
        }
    },
    move : (keyCode) => {
        // if(keyCode ==  KeyCode.right) {
        //     if(Snake.stateRight) {
        //         clearInterval(Snake.nowProgressed);
        //         Snake.startX++;
        //         return true;
        //     }
        //     return false;
        // } else if (keyCode == KeyCode.left) {
        //     if(Snake.stateLeft) {
        //         clearInterval(Snake.nowProgressed);
        //         Snake.startX--;
        //         return true;
        //     }
        //     return false;
        // } else if (keyCode == KeyCode.up) {
        //     if(Snake.stateUp) {
        //         Snake.startY++;
        //         return true;
        //     }
        //     return false;
        // } else if (keyCode == KeyCode.down) {
        //     if(Snake.stateDown) {
        //         Snake.startY--;
        //         return true;
        //     }
        //     return false;
        // }
        for()
        return false;
    },
    onHit : () => {
        const [pointY, pointX] = Snake.pointYX;
        if(Snake.onY === pointY && Snake.onX === pointX) {

        }
    }
}

export { SnakeService };