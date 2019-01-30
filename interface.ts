export interface todoInterface{
    myTask: Array<String>;
    addTask(task:string):number;
    listAllTask():void;
    deleteTask(task: string): number;
}