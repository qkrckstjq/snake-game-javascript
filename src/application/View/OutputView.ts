import { Documents } from "../Model/Domain/Documents"
import { ClassList } from "../Model/Domain/Enum/ClassList"
import { OutputViewType } from "../Model/Domain/Interface/ViewType/OutputView.interface";

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
    this.removeClassName = (y, x) => {
        Documents.position[y].children[x].className = "";
    };
    this.setTableColor = (color) => {
        Documents.table.className = color
    };
    this.removeClassColor = (y, x, color) => {
        Documents.position[y].children[x].classList.remove(color);
    };
    this.setDpPoint = (point) => {
        Documents.dpElement[0].textContent = `점수 : ${point}`;
    };
    this.addFocusOnButton = (element) => {
        element.classList.add(ClassList.GRAY);
    };
    this.removeFocusOnButton = (element) => {        
        element.classList.remove(ClassList.GRAY);
    };
}

export {OutputView, OutputViewType};