import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Query,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, TaskStatus } from './tasks.entity';
import { createTaskDto } from './dto/create-task.dto';
import { updateTaskDto } from './dto/update-task.dto';
import { SaludoPipe } from './pipes/saludo/saludo.pipe';
import { AuthGuard } from './guard/auth/auth.guard';

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
  @Get('/saludar')
  @UseGuards(AuthGuard)
  saludar(@Query(SaludoPipe) query: { name: string; age: number }) {
    console.log(query);
    return 'Hola soy ' + query.name + ' y tengo ' + (query.age + 10) + ' años';
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
  @Get('/order/:order')
  getTaskByOrder(@Param('order', ParseIntPipe) order: number) {
    return 'order +10 = ' + (order + 10);
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
