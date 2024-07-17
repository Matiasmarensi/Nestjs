import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    const { authorization } = req.headers;
    console.log(req.headers.authorization);
    if (!authorization) {
      throw new HttpException('no authorizatition', HttpStatus.UNAUTHORIZED);
    }
    if (authorization !== 'secret') {
      throw new HttpException('forbiden', HttpStatus.FORBIDDEN);
    }

    next();
  }
}
