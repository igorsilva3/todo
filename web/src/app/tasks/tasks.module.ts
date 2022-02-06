import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListTasksComponent } from './list-tasks/list-tasks.component';
import { CreateTasksComponent } from './create-tasks/create-tasks.component';
import { DeleteTasksComponent } from './delete-tasks/delete-tasks.component';

@NgModule({
  declarations: [
    ListTasksComponent,
    CreateTasksComponent,
    DeleteTasksComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    CreateTasksComponent,
    ListTasksComponent
  ]
})
export class TasksModule { }
