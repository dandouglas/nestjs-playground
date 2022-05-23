import { Injectable, NotFoundException } from '@nestjs/common';

export type Todo = {
  message: string;
  done: boolean;
  id: number;
}

const todos: Todo[] = [
  { message: 'Take out the trash', done: false, id: 1 },
  { message: 'Keep learning', done: false, id: 2 },
];

@Injectable()
export class TodoService {

  getTodos(): Todo[] {
    return todos;
  }

  getTodo(id: number): Todo {
    const todo: Todo = todos.find(t => t.id === id);

    if (!todo) {
      throw new NotFoundException('Todo not found');
    }

    return todo;
  }
}
