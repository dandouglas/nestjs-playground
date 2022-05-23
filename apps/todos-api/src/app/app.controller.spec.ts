import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { TodoService } from './todo/todo.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [TodoService],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Welcome to todos-api!"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getData()).toEqual({
        message: 'Welcome to todos-api!',
      });
    });
  });
});
