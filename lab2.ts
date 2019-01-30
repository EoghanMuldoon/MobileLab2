let myTask: Array<String> = ["test"];
console.log(addTask("hello"));
listAllTask();
deleteTask("apple");
deleteTask("test");
listAllTask();


function addTask(task: string): number {
    console.log("Added");
    return myTask.push(task);
}

function listAllTask() {
    console.log("begining of Array");
    myTask.forEach(function (task) {
        console.log(task);
    })
}

function deleteTask(task: string): number {
    let index: number = myTask.indexOf(task, 0);
    if (index > -1) {
        console.log("Item " + task + " Found and deleted");
        myTask.splice(index,1);
    }
    else
    {
        console.log("Item "+task+ " not found")
    }
    return myTask.length;
}