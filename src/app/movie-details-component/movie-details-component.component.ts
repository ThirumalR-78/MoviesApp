import { Component, OnInit } from '@angular/core';
import { movieList } from '../../app/moviesList';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movie-model';
import { ApiHelperService } from '../api-helper.service';

@Component({
  selector: 'app-movie-details-component',
  templateUrl: './movie-details-component.component.html',
  styleUrls: ['./movie-details-component.component.css'],
})
export class MovieDetailsComponentComponent implements OnInit {
  public pageIsReady = true;
  movie: Movie = new Movie();
  paramid: any;
  isLoading = true;

  // private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiHelperService
  ) {}

  async ngOnInit() {
    this.route.params.subscribe((params) => {
      this.paramid = params['id'];
    });
    await this.apiCalls();
  }

  apiCalls() {
    this.apiService.getMoviebyId(this.paramid).subscribe((data) => {
      this.movie = data;
      this.isLoading = false;
    });
  }

  getImageUrl(title: string) {
    if (title == null || title.length < 1) {
      return '';
    }
    var modifiedTitle =
      '../../assets/images/movie-covers/' +
      title.toLowerCase().replaceAll(' ', '-').trimEnd().concat('.jpg');
    // console.log(modifiedTitle);
    return modifiedTitle;
  }
}
