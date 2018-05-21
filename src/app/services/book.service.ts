import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BookService {

  constructor(private http: Http) { }

  getAllBooks(){
    return this.http.get('http://localhost:3000/booksRoute/getAllBooks')
      .map( (res: Response) => res.json());
  }
}
