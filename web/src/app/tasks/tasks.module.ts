import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { TasksComponent } from './tasks.component';
import { ListTasksComponent } from './list-tasks/list-tasks.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { DeleteTaskComponent } from './delete-task/delete-task.component';
import { CheckTaskComponent } from './check-task/check-task.component';
import { UpdateTaskComponent } from './update-task/update-task.component';

@NgModule({
  declarations: [
    TasksComponent,
    ListTasksComponent,
    CreateTaskComponent,
    DeleteTaskComponent,
    CheckTaskComponent,
    UpdateTaskComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModalModule
  ],
  exports: [
    TasksComponent
  ]
})
export class TasksModule { }
