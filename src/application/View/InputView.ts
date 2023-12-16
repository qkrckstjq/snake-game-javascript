import { ConditionValue } from "../Model/Domain/Enum/ConditionValue"
import { InputViewType } from "../Model/Domain/Interface/ViewType/InputViewType.interface"


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