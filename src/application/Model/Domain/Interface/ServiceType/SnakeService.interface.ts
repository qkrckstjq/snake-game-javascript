import {SnakeType} from "../DomainType/Snake.interface";
import { BoardServiceType } from "./BoardService.interface";
import { GameType } from "../DomainType/Game.interface";

interface SnakeServiceType {
    addSnake : (Snake:SnakeType, y : number, x : number) => void
    removeSnake : (Snake : SnakeType) => void,
    initSnake : (Snake : SnakeType, BoardService : BoardServiceType) => void,
    checkOver : (Snake : SnakeType, element:HTMLCollectionOf<HTMLTableRowElement>) => boolean,
    move : (inputCode : string, Snake : SnakeType) => void,
    moveAsync : (keyCode : string, Snake : SnakeType, Game:GameType, callback : (() => void)[]) => void,
    onHit : (Snake : SnakeType) => boolean,
    checkCanChangeDirection : (Snake : SnakeType, keyCode : string) => boolean,
    initState : (Snake : SnakeType) => void,
    makePoint : (Snake : SnakeType, BoardService : BoardServiceType) => void
}

export {SnakeServiceType};