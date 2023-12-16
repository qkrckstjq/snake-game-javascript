interface SnakeType {
    startX : number,
    startY : number,
    stateRight : boolean,
    stateLeft : boolean,
    stateUp : boolean,
    stateDown : boolean,
    bodys : number[][],
    pointYX : number[],
    nowProgressed : number | undefined,//비동기함수ID
    onX : number,
    onY : number,
    getLastY : ()=>number,
    getLastX : ()=>number,
}

export {SnakeType};