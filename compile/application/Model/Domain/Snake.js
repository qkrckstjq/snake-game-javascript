import { ConditionValue } from "./Enums/ConditionValue.js";
const Snake = {
    startX: ConditionValue.startX,
    startY: ConditionValue.startY,
    stateRight: true,
    stateLeft: true,
    stateUp: true,
    stateDown: true,
    bodys: [ConditionValue.startX, ConditionValue.startY],
    pointYX: [ConditionValue.startX, ConditionValue.startY],
    nowProgressed: undefined,
    onX: ConditionValue.startX,
    onY: ConditionValue.startY,
};
export { Snake };
