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
    gameInit : (Snake) => {
        Snake.onX = ConditionValue.startX;
        Snake.onY = ConditionValue.startY;
        Snake.bodys = SnakeService.initBodys();
        Snake.pointYX = BoardService.makePoint();
        Documents.position[Snake.startY].children[Snake.startX].classList.toggle('snake');
        Documents.position[Snake.pointYX[0]].children[Snake.pointYX[1]].classList.toggle('point');
    }
}

export {Game};