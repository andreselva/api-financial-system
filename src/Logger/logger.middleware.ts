import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { method, originalUrl } = req;

    console.log(`Interceptado: ${originalUrl}`);

    const timestamp = new Date().toISOString();
    console.log(`Recebendo requisição | Data e hora: [${timestamp}] | Método: ${method} | Endpoint: ${originalUrl}`);
    next();
  }
}