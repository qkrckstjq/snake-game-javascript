import { ConditionValue } from "./Enums/ConditionValue.js";
function Snake() {
    this.startX = ConditionValue.startX;
    this.startY = ConditionValue.startY;
    this.stateRight = true;
    this.stateLeft = true;
    this.stateUp = true;
    this.stateDown = true;
    this.bodys = [[ConditionValue.startY, ConditionValue.startX]];
    this.pointYX = [ConditionValue.startX, ConditionValue.startY];
    this.nowProgressed = undefined;
    this.onX = ConditionValue.startX;
    this.onY = ConditionValue.startY;
    this.getLastY = () => {
        return this.bodys[this.bodys.length - 1][0];
    };
    this.getLastX = () => {
        return this.bodys[this.bodys.length - 1][1];
    };
}
export { Snake };
