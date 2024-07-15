import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './tasks.entity';

@Controller({})
export class TasksController {
  tasksService: TasksService;
  constructor(tasksService: TasksService) {
    this.tasksService = tasksService;
  }
  @Get('/tasks')
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }
  @Post('/tasks')
  createTask(
    @Body('title') title: string,
    @Body('description') description: string,
    @Body('status') status: TaskStatus,
  ): Task {
    console.log(`title = ${title}`);
    return this.tasksService.createTask(title, description, status);
  }
  @Put()
  updateTask() {
    return 'update tarea';
  }
  @Patch()
  updateTaskStatus() {
    return 'patch tarea';
  }
  @Delete()
  deleteTask() {
    return 'eliminando tarea';
  }
}
