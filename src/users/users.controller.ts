import { Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiTags } from '@nestjs/swagger';

@Controller()
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiTags('users')
  @Get('/users')
  getUsers() {
    return this.usersService.getUsers();
  }
  @ApiTags('users')
  @Post('/users')
  createUser() {
    return this.usersService.createUser();
  }
}
