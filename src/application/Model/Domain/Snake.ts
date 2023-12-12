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
    onX : number,
    onY : number,
    pointYX : number[],
    nowProgressed : Promise<void> | undefined,
}

const Snake = {
    startX : ConditionValue.startX,
    startY : ConditionValue.startY,
    stateRight : true,
    stateLeft : true,
    stateUp : true,
    stateDown : true,
    bodys : SnakeService?.initBodys(),
    pointYX : BoardService?.makePoint(),
    nowProgressed : undefined,
    onX : ConditionValue.startX,
    onY : ConditionValue.startY,
}



export { Snake };