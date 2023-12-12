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
    bodys : number[],
    pointYX : number[],
    nowProgressed : number | undefined,
    onX : number,
    onY : number,
}

const Snake:SnakeType = {
    startX : ConditionValue.startX,
    startY : ConditionValue.startY,
    stateRight : true,
    stateLeft : true,
    stateUp : true,
    stateDown : true,
    bodys : [ConditionValue.startX, ConditionValue.startY],
    pointYX : [ConditionValue.startX, ConditionValue.startY],
    nowProgressed : undefined,
    onX : ConditionValue.startX,
    onY : ConditionValue.startY,
}



export { Snake, SnakeType };