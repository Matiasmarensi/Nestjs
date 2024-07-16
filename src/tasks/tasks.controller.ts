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
  UsePipes,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './tasks.entity';
import { createTaskDto } from './dto/create-task.dto';
import { updateTaskDto } from './dto/update-task.dto';

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
  @UsePipes()
  createTask(@Body() task: createTaskDto): createTaskDto {
    return this.tasksService.createTask(task);
  }
  @Put('/:id')
  updateTask(@Param('id') id: string, @Body() task: updateTaskDto) {
    return this.tasksService.updateTask(task, id);
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
