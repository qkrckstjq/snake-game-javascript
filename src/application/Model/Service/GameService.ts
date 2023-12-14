import {Snake, SnakeType} from '../Domain/Snake.js';
import { Game, GameType } from '../Domain/Game.js';
import { SnakeService, SnakeServiceType } from './SnakeService';
import { ConditionValue } from '../Domain/Enums/ConditionValue';
import { ClassList } from '../Domain/Enums/ClassList.js';

interface GameServiceType {
    setGameState : (Game : GameType, state : boolean) => void,
    setGameProceeding : (Game : GameType, state : boolean) => void
    setColor : (length : number) => string
}

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