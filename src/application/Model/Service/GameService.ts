import { ConditionValue } from '../Domain/Enum/ConditionValue.js';
import { ClassList } from '../Domain/Enum/ClassList.js';
import { GameServiceType } from '../Domain/Interface/ServiceType/GameService.interface.js';

function GameService(this:GameServiceType) {
    this.setGameState = (Game, state) => {
        Game.canPlay = state;
    };
    this.setGameProceeding = (Game, state) => {
        Game.isProceeding = state;
    };
    this.setColor = (length) => {
        let quotient = Math.floor(length / 15);
        if(ConditionValue.MIN_OPTIC <= quotient && quotient < ConditionValue.MIN_BLUE) {
            return ClassList.OPTIC;
        } else if(ConditionValue.MIN_BLUE <= quotient && quotient < ConditionValue.MIN_PURPLE) {
            return ClassList.BLUE;
        } else if(ConditionValue.MIN_PURPLE <= quotient && quotient < ConditionValue.MIN_YELLOW) {
            return ClassList.PURPLE;
        } else if(ConditionValue.MIN_YELLOW <= quotient && quotient < ConditionValue.MIN_RED) {
            return ClassList.YELLOW;
        } else if(ConditionValue.MIN_OPTIC <= quotient && quotient < ConditionValue.MIN_BLUE) {
            return ClassList.RED;
        } else {
            return "";
        }
    }
}

export {GameService, GameServiceType};