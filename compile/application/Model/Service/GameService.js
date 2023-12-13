function GameService() {
    this.setGameState = (Game, state) => {
        Game.canPlay = state;
    };
    this.setGameProceeding = (Game, state) => {
        Game.isProceeding = state;
    };
}
export { GameService };
