import { ConditionValue } from "./Enum/ConditionValue";
import { GameType } from "./Interface/DomainType/Game.interface";

function Game(this : GameType) {
    this.point = 0;
    this.isModal = false;
    this.speed = ConditionValue.normal;
    this.isProceeding = false;
    this.canPlay = true;
}

export {Game};