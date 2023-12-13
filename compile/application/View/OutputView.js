"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutputView = void 0;
var Documents_1 = require("../Model/Domain/Documents");
var ClassList_1 = require("../Model/Domain/Enums/ClassList");
function OutputView() {
    this.addClassSnake = function (y, x) {
        Documents_1.Documents.position[y].children[x].classList.add(ClassList_1.ClassList.snake);
    };
    this.removeClassSnake = function (y, x) {
        Documents_1.Documents.position[y].children[x].classList.remove(ClassList_1.ClassList.snake);
    };
    this.addClassPoint = function (y, x) {
        Documents_1.Documents.position[y].children[x].classList.add(ClassList_1.ClassList.point);
    };
    this.removeClassPoint = function (y, x) {
        Documents_1.Documents.position[y].children[x].classList.remove(ClassList_1.ClassList.point);
    };
}
exports.OutputView = OutputView;
