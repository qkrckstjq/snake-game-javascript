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

const Snake:SnakeType = {
    startX : ConditionValue.startX,
    startY : ConditionValue.startY,
    stateRight : true,
    stateLeft : true,
    stateUp : true,
    stateDown : true,
    bodys : [[ConditionValue.startY, ConditionValue.startX], [1,2], [1,2,3,4]],
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