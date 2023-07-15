import { Component, OnInit } from '@angular/core';
import { MovieService } from './movies.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: any[];
  totalRecords: number;
  pageLinks: number;
  loading: boolean = false;
  currentPage = 1;
  itemsPerPage = 10;
  search: string;
  error: boolean = false;
  constructor(
    private movieService: MovieService,
    private messageService: MessageService,
  ) {}

  ngOnInit() {
    this.getMovieList();
  }

  getMovieList() {
    this.search = '';
    this.loading = true;
    this.movieService.getMovieList(this.currentPage).subscribe((result) => {
      this.totalRecords = result.count;
      this.movies = result.results;
      this.loading = false;
      this.error = false;
    }, () => {
      this.error = true;
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Failed to Load Movies, Please Refresh'
      });
    })
  }

  onPageChange(event: any): void {
    this.currentPage = event.page + 1;
    this.getMovieList();
  }
}
