import { Snake, SnakeType } from "../Model/Domain/Snake"
import { Game, GameType } from "../Model/Domain/Game"
import { Documents } from "../Model/Domain/Documents"
import { ConditionValue } from "../Model/Domain/Enums/ConditionValue"

interface InputViewType {
    setDifficulty : (Game : GameType) => void
}

function InputView (this : InputViewType) {
    this.setDifficulty = (Game) => {
        const normalCallback = () => {
            Game.speed = ConditionValue.normal;
        };

        const hardCallback = () => {
            Game.speed = ConditionValue.hard;
        };

        Documents.normalButton.addEventListener('click', normalCallback);
        Documents.hardButton.addEventListener('click', hardCallback);
    }
}

export {InputView, InputViewType};