"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutputView = void 0;
var Documents_1 = require("../Model/Domain/Documents");
var ClassList_1 = require("../Model/Domain/Enum/ClassList");
function OutputView() {
    this.addClassSnake = function (y, x) {
        Documents_1.Documents.position[y].children[x].classList.add(ClassList_1.ClassList.SNAKE);
    };
    this.removeClassSnake = function (y, x) {
        Documents_1.Documents.position[y].children[x].classList.remove(ClassList_1.ClassList.SNAKE);
    };
    this.addClassPoint = function (y, x) {
        Documents_1.Documents.position[y].children[x].classList.add(ClassList_1.ClassList.POINT);
    };
    this.removeClassPoint = function (y, x) {
        Documents_1.Documents.position[y].children[x].classList.remove(ClassList_1.ClassList.POINT);
    };
    this.removeClassName = function (y, x) {
        Documents_1.Documents.position[y].children[x].className = "";
    };
    this.setTableColor = function (color) {
        Documents_1.Documents.table.className = color;
    };
    this.removeClassColor = function (y, x, color) {
        Documents_1.Documents.position[y].children[x].classList.remove(color);
    };
    this.setDpPoint = function (point) {
        Documents_1.Documents.dpElement[0].textContent = "\uC810\uC218 : ".concat(point);
    };
    this.addFocusOnButton = function (element) {
        element.classList.add(ClassList_1.ClassList.GRAY);
    };
    this.removeFocusOnButton = function (element) {
        element.classList.remove(ClassList_1.ClassList.GRAY);
    };
}
exports.OutputView = OutputView;
