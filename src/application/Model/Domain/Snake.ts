import { ConditionValue } from "./Enum/ConditionValue.js";
import { SnakeType } from "./Interface/DomainType/Snake.interface.js";

function Snake (this:SnakeType) {
    this.startX = ConditionValue.startX;
    this.startY = ConditionValue.startY;
    this.stateRight = true;
    this.stateLeft = true;
    this.stateUp = true;
    this.stateDown = true;
    this.bodys = [[ConditionValue.startY, ConditionValue.startX]];
    this.pointYX = [ConditionValue.startY, ConditionValue.startX];
    this.nowProgressed = undefined;
    this.onX = ConditionValue.startX;
    this.onY = ConditionValue.startY;
    this.getLastY = () => {
        return this.bodys[this.bodys.length-1][0];
    };
    this.getLastX = () => {
        return this.bodys[this.bodys.length-1][1];
    };
}



export { Snake };