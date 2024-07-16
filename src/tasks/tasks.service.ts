import {
  Injectable,
  HttpException,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { Task, TaskStatus } from './tasks.entity';
import { v4 } from 'uuid';
import { createTaskDto } from './dto/create-task.dto';
import { updateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];
  getAllTasks() {
    return this.tasks;
  }

  createTask(taskDto: createTaskDto) {
    const task = {
      ...taskDto,
      order: this.tasks.length + 1,
      id: v4(),
    };
    this.tasks.push(task);

    return task;
  }
  getTask(id: string) {
    const taskFound = this.tasks.find((task) => task.id === id);
    if (!taskFound) {
      return new NotFoundException('task not found');
    }
    return taskFound;
  }
  getTaskByOrder(order: number) {
    return 'el orden mas 10 es ' + order + 10;
  }

  updateTask(task: updateTaskDto, id: string) {
    return 'update tarea';
  }

  deleteTask() {
    return 'delete tarea';
  }
  updateTaskStatus() {
    return 'patch tarea';
  }
}
