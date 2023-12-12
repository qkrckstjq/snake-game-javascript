import { ConditionValue } from "./Enums/ConditionValue.js";
import { SnakeService } from '../Service/SnakeService.js';
import { BoardService } from "../Service/BoardService.js";
const Snake = {
    startX: ConditionValue.startX,
    startY: ConditionValue.startY,
    stateRight: true,
    stateLeft: true,
    stateUp: true,
    stateDown: true,
    bodys: SnakeService.initBodys(),
    pointYX: BoardService.makePoint(),
    nowProgressed: undefined,
    onX: ConditionValue.startX,
    onY: ConditionValue.startY,
};
export { Snake };
