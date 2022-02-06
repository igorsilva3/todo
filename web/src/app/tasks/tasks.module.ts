import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListTasksComponent } from './list-tasks/list-tasks.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { DeleteTaskComponent } from './delete-task/delete-task.component';

@NgModule({
  declarations: [
    ListTasksComponent,
    CreateTaskComponent,
    DeleteTaskComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    CreateTaskComponent,
    ListTasksComponent
  ]
})
export class TasksModule { }
