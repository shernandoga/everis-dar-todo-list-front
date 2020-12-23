import { Component, OnInit } from '@angular/core';
import { Tasks } from '../data.model';
import { TasksControllerService } from '../Services/api/tasksController.service';

@Component({
  selector: 'app-mytasks',
  templateUrl: './mytasks.component.html',
  styleUrls: ['./mytasks.component.css']
})
export class MytasksComponent implements OnInit {
  public tasks: Tasks[];
  public selected = "In Progress";

  constructor(private service: TasksControllerService) { }

  ngOnInit() {

    var data = this.service.getAll().subscribe(val => {
      console.log(val);
      this.tasks = val;
    });
  }

  deleteTask(taskID: string) {
    console.log("DELETE");
    var response = this.service.deleteTask(parseInt(taskID));
    console.log(response.subscribe(val => console.log(val)));
    var element= document.getElementById("task"+taskID);
    element.remove();

  }

  changeStatus(task_state: string, taskID: string , description: string) {
    console.log("Cambiar Task State");
    var response = this.service.saveTasks({id:parseInt(taskID),task_state: task_state,description:description});
    console.log(response.subscribe(val => console.log(val)));
  }

  newTask() {
    var description = (<HTMLInputElement>document.getElementById("newtaskdesc")).value;
    console.log("Añadir nueva task");
    var response = this.service.saveTasks({task_state: 'In Progress', description: description });
    console.log(response.subscribe(val => console.log(val)));

  }



}
