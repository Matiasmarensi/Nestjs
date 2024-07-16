import { IsString, MaxLength, MinLength } from 'class-validator';
export enum TaskStatus {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}
export class createTaskDto {
  @IsString()
  @MinLength(2)
  @MaxLength(10)
  title: string;
  @IsString()
  @MinLength(2)
  @MaxLength(150)
  description: string;
  @IsString()
  status: TaskStatus;
  order: number;
}
