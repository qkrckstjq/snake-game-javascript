import { Documents } from "../Domain/Enums/Documents.js";
import { ConditionValue } from "../Domain/Enums/ConditionValue.js";
import { Snake }  from '../Domain/Snake.js';

interface BoardServiceType {
    initTable : () => void,
    makePoint : () => number[],
}

const BoardService:BoardServiceType = {
    initTable : () => {
        for(let i = 0; i < ConditionValue.row; i++){
            const tr = document.createElement('tr');
            Documents.table?.append(tr);
            for(let j = 0; j < ConditionValue.col; j++){
                const td = document.createElement('td');
                document.getElementsByTagName('tr')[i].append(td);
            }
        }
    },
    makePoint : () => {
        while(true) {
            const numX:number = Math.floor(Math.random() * (ConditionValue.row-1));
            const numY:number = Math.floor(Math.random() * (ConditionValue.col-1));
            const snakes = Snake.bodys;
            for(let i in snakes) {
                if(numY == snakes[i][0] && numX == snakes[i][1]) {
                    continue;
                }
            }
            return [numY, numX];
        }
    }
}

export { BoardService };