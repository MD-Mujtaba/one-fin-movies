import { Component, OnInit } from '@angular/core';
import { MovieService } from './movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies!: [];
  totalRecords: number;
  pageLinks: number;
  loading: boolean = false;

  constructor(
    private movieService: MovieService
  ) {}

  ngOnInit() {
    this.getMovieList();
  }

  getMovieList() {
    this.loading = true;
    this.movieService.getMovieList().subscribe((result) => {
      this.totalRecords = result.count;
      this.movies = result.results;
      this.loading = false;
    })
  }

}
