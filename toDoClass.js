"use strict";
exports.__esModule = true;
var toDoClass = /** @class */ (function () {
    function toDoClass() {
        this.myTask = [];
    }
    toDoClass.prototype.addTask = function (task) {
        return this.myTask.push(task);
    };
    toDoClass.prototype.listAllTask = function () {
        console.log("begining of Array");
        this.myTask.forEach(function (task) {
            console.log(task);
        });
    };
    toDoClass.prototype.deleteTask = function (task) {
        var index = this.myTask.indexOf(task, 0);
        if (index > -1) {
            console.log("Item " + task + " Found and deleted");
            this.myTask.splice(index, 1);
        }
        else {
            console.log("Item " + task + " not found");
        }
        return this.myTask.length;
    };
    return toDoClass;
}());
var testClass = new toDoClass();
testClass.addTask("hello");
testClass.listAllTask();
testClass.deleteTask("apple");
testClass.deleteTask("test");
testClass.listAllTask();
