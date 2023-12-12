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
    bodys: SnakeService === null || SnakeService === void 0 ? void 0 : SnakeService.initBodys(),
    pointYX: BoardService === null || BoardService === void 0 ? void 0 : BoardService.makePoint(),
    nowProgressed: undefined,
    onX: ConditionValue.startX,
    onY: ConditionValue.startY,
};
export { Snake };
