import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.entity';
import { v4 } from 'uuid';

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: '1',
      title: 'Task 1',
      description: 'Task 1',
      status: TaskStatus.PENDING,
    },
  ];
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

  updateTask() {}

  deleteTask() {}
}
