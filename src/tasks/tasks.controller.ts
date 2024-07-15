import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';

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
}
