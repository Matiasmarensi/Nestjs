import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly users = [
    {
      id: 1,
      name: 'John',
    },
    {
      id: 2,
      name: 'Jane',
    },
  ];
  getUsers() {
    return this.users;
  }
}
