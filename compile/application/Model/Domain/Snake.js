import { ConditionValue } from "./Enums/ConditionValue.js";
const Snake = {
    startX: ConditionValue.startX,
    startY: ConditionValue.startY,
    stateRight: true,
    stateLeft: true,
    stateUp: true,
    stateDown: true,
    bodys: [[ConditionValue.startY, ConditionValue.startX], [1, 2], [1, 2, 3, 4]],
    pointYX: [ConditionValue.startX, ConditionValue.startY],
    nowProgressed: undefined,
    onX: ConditionValue.startX,
    onY: ConditionValue.startY,
    getLastY: () => {
        return Snake.bodys[Snake.bodys.length - 1][0];
    },
    getLastX: () => {
        return Snake.bodys[Snake.bodys.length - 1][1];
    }
};
export { Snake };
