import {Snake, SnakeType} from '../Domain/Snake.js';
import { Game, GameType } from '../Domain/Game.js';
import { SnakeService, SnakeServiceType } from './SnakeService';
import { ConditionValue } from '../Domain/Enums/ConditionValue';

interface GameServiceType {
    setGameState : (Game : GameType, state : boolean) => void,
    setGameProceeding : (Game : GameType, state : boolean) => void
}

function GameService(this:GameServiceType) {
    this.setGameState = (Game, state) => {
        Game.canPlay = state;
    };
    this.setGameProceeding = (Game, state) => {
        Game.isProceeding = state;
    };
}

export {GameService, GameServiceType};