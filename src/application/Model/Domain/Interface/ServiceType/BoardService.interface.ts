import { SnakeType } from "../DomainType/Snake.interface";

interface BoardServiceType {
    initTable : (element : HTMLElement) => void,
    makePoint : (Snake : SnakeType) => number[],
}

export {BoardServiceType};