import { Component, Input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { TaskComponent } from './task/task.component';
import { Title } from '@angular/platform-browser';
import { NewTasksComponent } from './new-tasks/new-tasks.component';
import { NewTaskData } from './task/task.model';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTasksComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {

  isAddingTask = false;
  @Input({ required: true })
  userId!: string;
  @Input({ required: true })
  name!: string;
  private tasksService;

  constructor(tasksService: TaskService){
    this.tasksService = tasksService;
  }

  get selectedUserTasks(){
    return this.tasksService.getUserTasks(this.userId);
  }

  onCompleteTask(id:string){
    
  }

  onStartAddTask(){
    this.isAddingTask = true;
  }

  onCloseAddTask(){
    this.isAddingTask = false;
  }

}
