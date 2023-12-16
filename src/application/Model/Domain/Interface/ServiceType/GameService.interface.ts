import { GameType } from "../DomainType/Game.interface"

interface GameServiceType {
    setGameState : (Game : GameType, state : boolean) => void,
    setGameProceeding : (Game : GameType, state : boolean) => void
    setColor : (length : number) => string
}

export {GameServiceType}