import { BoardService } from "../Service/BoardService";
import { SnakeService } from "../Service/SnakeService";
import { ConditionValue } from "./Enums/ConditionValue"
import { Documents } from "./Documents";

interface GameType {
    point : number,
    isModal : boolean,
    speed : number,
    isProceeding : boolean,
    canPlay : boolean,
}

const Game:GameType = {
    point : 0,
    isModal : false,
    speed : ConditionValue.normal,
    isProceeding : false,
    canPlay : true,
}

export {Game, GameType};