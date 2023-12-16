import { GameType } from "../DomainType/Game.interface"

interface InputViewType {
    setDifficultyNormal : (Game : GameType) => void
    setDifficultyHard : (Game : GameType) => void
}

export {InputViewType};