import {ClassList} from "./Enums/ClassList.js";

interface DocumentsType {
    table : HTMLElement,
    position : HTMLCollectionOf<HTMLTableRowElement>,
    dpElement : HTMLCollectionOf<Element>,
    normalButton : HTMLElement,
    hardButton : HTMLElement,
}

const Documents:DocumentsType = {
    table : document.querySelector(ClassList.TABLE),
    position : document.getElementsByTagName(ClassList.TR),
    dpElement : document.getElementsByClassName(ClassList.DP_POINT),
    normalButton : document.querySelector(ClassList.NORMAL),
    hardButton : document.querySelector(ClassList.HARD),
};

export {Documents, DocumentsType};