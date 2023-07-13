import { Component, OnInit } from '@angular/core';
import { MovieService } from './movies.service';

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

  constructor(
    private movieService: MovieService
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
    })
  }

  onPageChange(event: any): void {
    this.currentPage = event.page + 1;
    this.getMovieList();
  }
}
