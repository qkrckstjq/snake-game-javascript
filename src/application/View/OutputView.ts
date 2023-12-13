import { Documents } from "../Model/Domain/Documents"
import { ClassList } from "../Model/Domain/Enums/ClassList"

interface OutputViewType {
    addClassSnake : (y : number, x : number) => void,
    removeClassSnake : (y : number, x : number) => void,
    addClassPoint : (y : number, x : number) => void,
    removeClassPoint : (y : number, x : number) => void,
}

function OutputView (this : OutputViewType) {
    this.addClassSnake = (y, x) => {
        Documents.position[y].children[x].classList.add(ClassList.snake);
    };
    this.removeClassSnake = (y, x) => {
        Documents.position[y].children[x].classList.remove(ClassList.snake);
    };
    this.addClassPoint = (y, x) => {
        Documents.position[y].children[x].classList.add(ClassList.point);
    };
    this.removeClassPoint = (y, x) => {
        Documents.position[y].children[x].classList.remove(ClassList.point);
    }
}

export {OutputView, OutputViewType};