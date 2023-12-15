import { Snake, SnakeType } from "../Model/Domain/Snake"
import { Game, GameType } from "../Model/Domain/Game"
import { Documents } from "../Model/Domain/Documents"
import { ConditionValue } from "../Model/Domain/Enums/ConditionValue"

interface InputViewType {
    setDifficultyNormal : (Game : GameType) => void
    setDifficultyHard : (Game : GameType) => void
}

function InputView (this : InputViewType) {
    this.setDifficultyNormal = (Game) => {
        if(!Game.isProceeding) {
            Game.speed = ConditionValue.normal;
        }
    }
    this.setDifficultyHard = (Game) => {
        if(!Game.isProceeding) {
            Game.speed = ConditionValue.hard;
        }
    }
}

export {InputView, InputViewType};