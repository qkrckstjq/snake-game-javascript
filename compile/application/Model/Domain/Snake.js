import { ConditionValue } from "./Enums/ConditionValue.js";
function Snake() {
    this.startX = ConditionValue.startX,
        this.startY = ConditionValue.startY,
        this.stateRight = true,
        this.stateLeft = true,
        this.stateUp;
    true,
        stateDown;
    true,
        bodys;
    [[ConditionValue.startY, ConditionValue.startX]],
        pointYX;
    [ConditionValue.startX, ConditionValue.startY],
        nowProgressed;
    undefined,
        onX;
    ConditionValue.startX,
        onY;
    ConditionValue.startY,
        getLastY;
    () => {
        return Snake.bodys[Snake.bodys.length - 1][0];
    },
        getLastX;
    () => {
        return Snake.bodys[Snake.bodys.length - 1][1];
    };
}
export { Snake };
