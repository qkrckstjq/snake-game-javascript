"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Documents = void 0;
var ClassList_js_1 = require("./Enums/ClassList.js");
var Documents = {
    table: document.querySelector(ClassList_js_1.ClassList.TABLE),
    position: document.getElementsByTagName(ClassList_js_1.ClassList.TR),
    dpElement: document.getElementsByClassName(ClassList_js_1.ClassList.DP_POINT),
    normalButton: document.querySelector(ClassList_js_1.ClassList.NOMAL),
    hardButton: document.querySelector(ClassList_js_1.ClassList.HARD),
};
exports.Documents = Documents;
