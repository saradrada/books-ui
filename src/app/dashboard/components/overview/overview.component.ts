import { Component, OnInit } from '@angular/core';
import { IBook } from '../../interfaces/IBook';
import { BooksService } from '../../services/books/books.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  displayedColumns: string[] = ['name', 'author'];
  dataSource: IBook[] = [];

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.booksService.getBooks().subscribe(books => this.dataSource = books);
  }
}
