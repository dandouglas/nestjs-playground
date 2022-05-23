import { Controller, Get, Render } from '@nestjs/common';

import { TodoService } from './todo/todo.service';

@Controller('api')
export class AppController {
  constructor(private todoService: TodoService) {}

  @Get('todos')
  getData() {
    return { todos: this.todoService.getTodos() };
  }

}
