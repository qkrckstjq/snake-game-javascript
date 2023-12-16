import { ConditionValue } from "../Domain/Enum/ConditionValue.js";
import { BoardServiceType } from "../Domain/Interface/ServiceType/BoardService.interface.js";

function BoardService(this : BoardServiceType)  {
    this.initTable = (element) => {
        for(let i = 0; i < ConditionValue.col; i++){
            const tr = document.createElement('tr');
            element.append(tr);
            for(let j = 0; j < ConditionValue.row; j++){
                const td = document.createElement('td');
                document.getElementsByTagName('tr')[i].append(td);
            }
        }
    };
    this.makePoint = (Snake) => {
        while(true) {
            const numX:number = Math.floor(Math.random() * (ConditionValue.row-1));
            const numY:number = Math.floor(Math.random() * (ConditionValue.col-1));
            const snakes = Snake.bodys;
            for(let i in snakes) {
                if(numY == snakes[i][0] || numX == snakes[i][1]) {
                    continue;
                }
            }
            return [numY, numX];
        }
    };
}

export { BoardService, BoardServiceType };