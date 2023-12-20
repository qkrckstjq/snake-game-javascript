import { ConditionValue } from "../Domain/Enum/ConditionValue.js";
import { BoardServiceType } from "../Domain/Interface/ServiceType/BoardService.interface.js";
import { Utils } from "./utils.js";

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
        let numX:number;
        let numY:number;
        let exclusiveY = -1;
        let exclusiveX = -1;
        const snakes = Snake.bodys;
        point:while(true) {
            numX = Utils.getRandomNumber(0, ConditionValue.row-1, exclusiveX);
            numY = Utils.getRandomNumber(0, ConditionValue.col-1, exclusiveY);
            for(let i = 0; i < snakes.length; i++) { 
                if(numY == snakes[i][0] && numX == snakes[i][1]) {
                    exclusiveY = numY == snakes[i][0] ? numY : -1;
                    exclusiveX = numX == snakes[i][1] ? numX : -1;
                    continue point;
                }
            }
            return [numY, numX];
        }
    };
}

export { BoardService };