// import { classList } from '../Domain/Enums/ClassList.ts';
import { ConditionValue } from '../Domain/Enums/ConditionValue.js';
import { Documents } from '../Domain/Enums/Documents.js';
import { KeyCode } from '../Domain/Enums/KeyCodeList.js';
import { Snake } from '../Domain/Snake.js';
const SnakeService = {
    initBodys: () => {
        return [ConditionValue.startX, ConditionValue.startY];
    },
    checkOver: (x, y) => {
        if ((x >= ConditionValue.row ||
            y >= ConditionValue.col ||
            x < 0 ||
            y < 0) ||
            Documents.position[y].children[x].classList.contains('snake')) { //벽, 자기자신의 몸통에 충돌시 over함수 작동
            return true; //setinterval 동작에서는 필요없지만 동기적으로 작동하는 움직임에서는 over가 작동시 true를 리턴
        }
    },
    move: (inputCode) => {
        if (KeyCode[inputCode]) {
            clearInterval(Snake.nowProgressed);
            if (inputCode == KeyCode.ArrowRight && Snake.stateRight) {
                Snake.startX++;
            }
            else if (inputCode == KeyCode.ArrowLeft && Snake.stateLeft) {
                Snake.startX--;
            }
            else if (inputCode == KeyCode.ArrowUp && Snake.stateUp) {
                Snake.startY++;
            }
            else if (inputCode == KeyCode.ArrowDown && Snake.stateDown) {
                Snake.startY--;
            }
            return true;
        }
        return false;
    },
    onHit: () => {
        const [pointY, pointX] = Snake.pointYX;
        if (Snake.onY === pointY && Snake.onX === pointX) {
            return true;
        }
    }
};
export { SnakeService };
