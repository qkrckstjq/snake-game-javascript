import {ClassList} from "../Enums/ClassList.js";

interface DocumentsType {
    table : HTMLElement | null,
    position : HTMLCollectionOf<HTMLTableRowElement>,
}

const Documents:DocumentsType = {
    table : document.querySelector(ClassList.table),
    position : document.getElementsByTagName("tr"),
}

export {Documents};