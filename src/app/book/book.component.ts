import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service'

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books = [];
  constructor(private bookservice :BookService) { }

  ngOnInit() {
    this.bookservice.getAllBooks()
      .subscribe( resBooks => this.books = resBooks);
  }

}
