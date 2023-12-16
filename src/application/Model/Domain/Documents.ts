import {ClassList} from "./Enum/ClassList.js";
import { DocumentsType } from "./Interface/DomainType/DocumentType.interface.js";

const Documents:DocumentsType = {
    table : document.querySelector(ClassList.TABLE),
    position : document.getElementsByTagName(ClassList.TR),
    dpElement : document.getElementsByClassName(ClassList.DP_POINT),
    normalButton : document.querySelector(ClassList.NORMAL),
    hardButton : document.querySelector(ClassList.HARD),
};

export {Documents, DocumentsType};