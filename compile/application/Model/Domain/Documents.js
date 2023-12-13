"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Documents = void 0;
var ClassList_js_1 = require("./Enums/ClassList.js");
var Documents = {
    table: document.querySelector(ClassList_js_1.ClassList.table),
    position: document.getElementsByTagName("tr"),
};
exports.Documents = Documents;
