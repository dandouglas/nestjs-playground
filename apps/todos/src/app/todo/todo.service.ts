import { Injectable } from '@nestjs/common';

export type Todo = {
  message: string;
  done: boolean;
}

const todos: Todo[] = [
  { message: 'Take out the trash', done: false },
  { message: 'Keep learning', done: false },
];

@Injectable()
export class TodoService {

  getTodos(): Todo[] {
    return todos;
  }
}
