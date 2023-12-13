import {Snake, SnakeType} from '../Domain/Snake.js';
import { Game, GameType } from '../Domain/Game.js';
import { SnakeService, SnakeServiceType } from './SnakeService';
import { ConditionValue } from '../Domain/Enums/ConditionValue';

interface GameServiceType {
    setGameState : (Game : GameType, state : boolean) => void,
    setGameProceeding : (Game : GameType, state : boolean) => void
}

const GameService:GameServiceType = {
    setGameState : (Game, state) => {
        Game.canPlay = state;
    },
    setGameProceeding : (Game, state) => {
        Game.isProceeding = state;
    },
}

export {GameService, GameServiceType};