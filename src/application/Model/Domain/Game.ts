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

function Game(this : GameType) {
    this.point = 0;
    this.isModal = false;
    this.speed = ConditionValue.normal;
    this.isProceeding = false;
    this.canPlay = true;
}

export {Game, GameType};