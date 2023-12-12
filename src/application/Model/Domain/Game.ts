import { BoardService } from "../Service/BoardService";
import { SnakeService } from "../Service/SnakeService";
import { ConditionValue } from "./Enums/ConditionValue"
import { Documents } from "./Documents";

interface GameType {
    point : number,
    isModal : boolean,
    speed : number,
}

const Game = {
    point : 0,
    isModal : false,
}

export {Game};