import { Component, OnInit, Input } from '@angular/core';
import { TaskService, Task } from '../task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  @Input() task: Task = {
    assignedTo: '',
    status: 'Not Started',
    dueDate: new Date(),
    priority: 'Normal',
    description: ''
  };

  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit(): void {}

  saveTask(): void {
    if (this.task._id) {
      this.taskService.updateTask(this.task._id, this.task).subscribe(() => {
        this.router.navigate(['/']);
      });
    } else {
      this.taskService.createTask(this.task).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}
