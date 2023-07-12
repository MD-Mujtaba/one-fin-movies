import { Component, OnInit } from '@angular/core';
import { MovieService } from './movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(
    private movieService: MovieService
  ) {}

  ngOnInit() {
    this.getMovieList();
  }

  getMovieList() {
    this.movieService.getMovieList().subscribe((result) => {
      console.log("MOVIES ===>", result)
    })
  }

}
