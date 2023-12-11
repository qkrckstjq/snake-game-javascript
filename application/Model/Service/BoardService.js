import { Documents } from "../Domain/Enums/Documents.js";
import { ConditionValue } from "../Domain/Enums/ConditionValue.js";

const BoardService = {
    initTable : () => {
        for(let i = 0; i < ConditionValue.row; i++){
            const tr = document.createElement('tr');
            Documents.table.append(tr);
            for(let j = 0; j < ConditionValue.col; j++){
                const td = document.createElement('td');
                document.getElementsByTagName('tr')[i].append(td);
            }
        }
    },
}

export { BoardService };