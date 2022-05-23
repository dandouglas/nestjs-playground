import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'nestjs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todos-frontend';

  constructor(private httpClient: HttpClient) {

  }

  ngOnInit(): void {
    this.getTodos().subscribe(console.log);
  }

  getTodos(): Observable<any> {
    return this.httpClient.get('http://localhost:3333/api/todos');
  }
}
