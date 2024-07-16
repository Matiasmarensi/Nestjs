import {
  Injectable,
  HttpException,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { Task, TaskStatus } from './tasks.entity';
import { v4 } from 'uuid';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];
  getAllTasks() {
    return this.tasks;
  }

  createTask(title: string, description: string, status: TaskStatus) {
    const task = {
      id: v4(),
      title,
      description,
      status,
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

  updateTask() {
    return 'update tarea';
  }

  deleteTask() {
    return 'delete tarea';
  }
  updateTaskStatus() {
    return 'patch tarea';
  }
}
