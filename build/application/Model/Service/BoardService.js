import { Documents } from "../Domain/Enums/Documents.js";
import { ConditionValue } from "../Domain/Enums/ConditionValue.js";
import { Snake } from '../Domain/Snake.js';
const BoardService = {
    initTable: () => {
        var _a;
        for (let i = 0; i < ConditionValue.row; i++) {
            const tr = document.createElement('tr');
            (_a = Documents.table) === null || _a === void 0 ? void 0 : _a.append(tr);
            for (let j = 0; j < ConditionValue.col; j++) {
                const td = document.createElement('td');
                document.getElementsByTagName('tr')[i].append(td);
            }
        }
    },
    makePoint: () => {
        while (true) {
            const numX = Math.floor(Math.random() * (ConditionValue.row - 1));
            const numY = Math.floor(Math.random() * (ConditionValue.col - 1));
            const snakes = Snake.bodys;
            for (let i in snakes) {
                if (numY == snakes[i][0] && numX == snakes[i][1]) {
                    continue;
                }
            }
            return [numY, numX];
        }
    }
};
export { BoardService };
