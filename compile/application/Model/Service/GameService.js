const GameService = {
    setGameState: (Game, state) => {
        Game.canPlay = state;
    },
    setGameProceeding: (Game, state) => {
        Game.isProceeding = state;
    },
};
export { GameService };
