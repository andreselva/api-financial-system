import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import CategoriesController from './Categories/CategoriesController';
import CategoriesService from './Categories/CategoriesService';
import CategoriesRepository from './Categories/CategoriesRepository';
import MySQLDatabase from './Database/MySQLDatabase';
import CreateCategory from './Categories/useCases/CreateCategory';
import GetCategories from './Categories/useCases/GetCategories';
import DeleteCategory from './Categories/useCases/DeleteCategory';
import UpdateCategory from './Categories/useCases/UpdateCategory';
import { LoggerMiddleware } from './Logger/logger.middleware';
import RevenuesController from './Revenues/RevenuesController';
import RevenuesService from './Revenues/RevenuesService';
import CreateRevenue from './Revenues/UseCases/CreateRevenue';
import GetRevenues from './Revenues/UseCases/GetRevenues';
import RevenuesRepository from './Revenues/RevenuesRepository';

const services = [
  CategoriesService,
  RevenuesService,
];

const useCases = [
  GetCategories,
  CreateCategory,
  DeleteCategory,
  UpdateCategory,
  CreateRevenue,
  GetRevenues,
];

const repositories = [
  CategoriesRepository,
  RevenuesRepository,
]

@Module({
  imports: [],
  controllers: [
    AppController, 
    CategoriesController,
    RevenuesController
  ],
  providers: [
    AppService,
    ...services,
    ...useCases,
    ...repositories,
    MySQLDatabase,
  ],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
