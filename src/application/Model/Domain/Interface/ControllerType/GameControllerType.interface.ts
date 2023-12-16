import { SnakeType } from "../DomainType/Snake.interface"
import { SnakeServiceType } from "../ServiceType/SnakeService.interface"
import { GameType } from "../DomainType/Game.interface"
import { DocumentsType} from "../DomainType/DocumentType.interface";
import { BoardServiceType } from "../ServiceType/BoardService.interface";
import { GameServiceType } from "../ServiceType/GameService.interface";
import { InputViewType } from "../ViewType/InputViewType.interface";
import { OutputViewType } from "../ViewType/OutputView.interface";

interface GameControllerType {
    Snake : SnakeType | undefined,
    SnakeService : SnakeServiceType | undefined,
    Documents : DocumentsType,
    BoardService : BoardServiceType,
    Game : GameType,
    GameService : GameServiceType,
    outputView : OutputViewType,
    inputView : InputViewType,

    setClassOnSnake : () => void,
    removeAllSnakeClass : () => void,
    makeNewPoint : () => void,
    moveFoward : () => void,
    gameStart : () => void,
    gameInit : () => void,
    whenOver : () => void,
    checkOver : () => void,
    whenOnPoint : () => void,
    move : (keyCode : string) => void, 
    moveAsync : (keyCode : string) => void,
    checkMode : () => void,
    whenClickNoraml : () => void,
    whenClickHard : () => void,
    run : (event : KeyboardEvent) => void
}

export {GameControllerType};