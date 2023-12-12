// import { classList } from '../Domain/Enums/ClassList.ts';
import { ConditionValue } from '../Domain/Enums/ConditionValue.js';
import { KeyCode } from '../Domain/Enums/KeyCodeList.js';
const SnakeService = {
    addSnake: (Snake, y, x) => {
        Snake.bodys.unshift([y, x]);
    },
    removeSnake: (Snake) => {
        Snake.bodys.pop();
    },
    initBodys: () => {
        return [ConditionValue.startY, ConditionValue.startX];
    },
    checkOver: (x, y, element) => {
        if ((x >= ConditionValue.row ||
            y >= ConditionValue.col ||
            x < 0 ||
            y < 0) ||
            element[y].children[x].classList.contains('snake')) { //벽, 자기자신의 몸통에 충돌시 over함수 작동
            return true; //setinterval 동작에서는 필요없지만 동기적으로 작동하는 움직임에서는 over가 작동시 true를 리턴
        }
    },
    move: (inputCode, Snake) => {
        Snake.nowProgressed && clearInterval(Snake.nowProgressed);
        if (inputCode == KeyCode.ArrowRight && Snake.stateRight) {
            Snake.stateRight = false;
            Snake.stateLeft = false,
                Snake.stateUp = true;
            Snake.stateDown = true;
            Snake.onX += 1;
            return true;
        }
        else if (inputCode == KeyCode.ArrowLeft && Snake.stateLeft) {
            Snake.stateRight = false;
            Snake.stateLeft = false,
                Snake.stateUp = true;
            Snake.stateDown = true;
            Snake.onX -= 1;
            return true;
        }
        else if (inputCode == KeyCode.ArrowUp && Snake.stateUp) {
            Snake.stateRight = true;
            Snake.stateLeft = true,
                Snake.stateUp = false;
            Snake.stateDown = false;
            Snake.onY -= 1;
            return true;
        }
        else if (inputCode == KeyCode.ArrowDown && Snake.stateDown) {
            Snake.stateRight = true;
            Snake.stateLeft = true,
                Snake.stateUp = false;
            Snake.stateDown = false;
            Snake.onY += 1;
            return true;
        }
        return false;
    },
    onHit: (Snake) => {
        const [pointY, pointX] = Snake.pointYX;
        if (Snake.onY === pointY && Snake.onX === pointX) {
            return true;
        }
    },
};
export { SnakeService };
