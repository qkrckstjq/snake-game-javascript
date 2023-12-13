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
    nowProgressed : number | undefined,
    onX : number,
    onY : number,
    getLastY : ()=>number,
    getLastX : ()=>number,
}

function Snake () {
    this.startX = ConditionValue.startX,
    this.startY = ConditionValue.startY,
    this.stateRight = true,
    this.stateLeft = true,
    this.stateUp : true,
    stateDown : true,
    bodys : [[ConditionValue.startY, ConditionValue.startX]],
    pointYX : [ConditionValue.startX, ConditionValue.startY],
    nowProgressed : undefined,
    onX : ConditionValue.startX,
    onY : ConditionValue.startY,
    getLastY : () => {
        return Snake.bodys[Snake.bodys.length-1][0];
    },
    getLastX : () => {
        return Snake.bodys[Snake.bodys.length-1][1];
    }
}



export { Snake, SnakeType };