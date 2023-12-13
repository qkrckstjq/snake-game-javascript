import { ConditionValue } from "./Enums/ConditionValue.js";
import { SnakeService } from '../Service/SnakeService.js';
import { BoardService } from "../Service/BoardService.js";

interface SnakeType {
    startX : number,
    startY : number,
    stateRight : boolean,
    stateLeft : boolean,
    stateUp : boolean,
    stateDown : boolean,
    bodys : number[][],
    pointYX : number[],
    nowProgressed : number | undefined,//비동기함수ID
    onX : number,
    onY : number,
    // canChangeDirection : boolean,
    getLastY : ()=>number,
    getLastX : ()=>number,
}

function Snake (this:SnakeType) {
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
    // this.canChangeDirection = true;
    this.getLastY = () => {
        return this.bodys[this.bodys.length-1][0];
    };
    this.getLastX = () => {
        return this.bodys[this.bodys.length-1][1];
    };
}



export { Snake, SnakeType };