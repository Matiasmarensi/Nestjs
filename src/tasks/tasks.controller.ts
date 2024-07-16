import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './tasks.entity';

@Controller('/tasks')
export class TasksController {
  tasksService: TasksService;
  constructor(tasksService: TasksService) {
    this.tasksService = tasksService;
  }
  @Get()
  getAllTasks(@Query() query: any) {
    return this.tasksService.getAllTasks();
  }
  @Get('/:id')
  getTask(@Param('id') id: string) {
    return this.tasksService.getTask(id);
  }
  @Post()
  createTask(
    @Body('title') title: string,
    @Body('description') description: string,
    @Body('status') status: TaskStatus,
  ): Task {
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
