import {todoInterface} from './Interface';

class toDoClass implements todoInterface{
    myTask:Array<string>=[];
    addTask(task:string):number{
        return this.myTask.push(task);
    }

        listAllTask() {
        console.log("begining of Array");
        this.myTask.forEach(function (task) {
            console.log(task);
        });
    }
        deleteTask(task) {
        var index = this.myTask.indexOf(task, 0);
        if (index > -1) {
            console.log("Item " + task + " Found and deleted");
            this.myTask.splice(index, 1);
        }
        else {
            console.log("Item " + task + " not found");
        }
        return this.myTask.length;
    }
    
}

let testClass=new toDoClass();
testClass.addTask("hello");
testClass.listAllTask();
testClass.deleteTask("apple");
testClass.deleteTask("test");
testClass.listAllTask();