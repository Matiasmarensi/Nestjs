import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  getUsers() {
    return this.prisma.user.findMany();
  }
  createUser() {
    const createdUser = this.prisma.user.create({
      data: {
        email: 'example@example.com',
        name: 'John Doe',
        password: 'password123',
      },
    });
    console.log(createdUser);
    return createdUser;
  }
}
