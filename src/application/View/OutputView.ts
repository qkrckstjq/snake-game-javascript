import { Documents } from "../Model/Domain/Documents"
import { ClassList } from "../Model/Domain/Enums/ClassList"

interface OutputViewType {
    addClassSnake : (y : number, x : number) => void,
    removeClassSnake : (y : number, x : number) => void,
    addClassPoint : (y : number, x : number) => void,
    removeClassPoint : (y : number, x : number) => void,
    addClassColor : (y : number, x : number, color : string) => void,
    removeClassColor : (y : number, x : number, color : string) => void,
    setDpPoint : (point : number) => void,
}

function OutputView (this : OutputViewType) {
    this.addClassSnake = (y, x) => {
        Documents.position[y].children[x].classList.add(ClassList.SNAKE);
    };
    this.removeClassSnake = (y, x) => {
        Documents.position[y].children[x].classList.remove(ClassList.SNAKE);
    };
    this.addClassPoint = (y, x) => {
        Documents.position[y].children[x].classList.add(ClassList.POINT);
    };
    this.removeClassPoint = (y, x) => {
        Documents.position[y].children[x].classList.remove(ClassList.POINT);
    };
    this.addClassColor = (y, x, color) => {
        Documents.position[y].children[x].classList.add(color);
    };
    this.removeClassColor = (y, x, color) => {
        Documents.position[y].children[x].classList.remove(color);
    };
    this.setDpPoint = (point) => {
        Documents.dpElement[0].textContent = `점수 : ${point}`;
    }
}

export {OutputView, OutputViewType};