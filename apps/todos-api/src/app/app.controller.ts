import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

import { TodoService } from './todo/todo.service';

@Controller('todos')
export class AppController {
  constructor(private todoService: TodoService) {}

  @Get()
  getTodos() {
    return { todos: this.todoService.getTodos() };
  }

  @Get(':id')
    getTodo(@Param('id', ParseIntPipe) id: number) {
      return this.todoService.getTodo(id);
    }
  }

