import { Component, OnInit } from '@angular/core';
import { movieList } from '../../app/moviesList';
import { ActivatedRoute } from '@angular/router';
import { ServiceHelperService } from '../Service/service-helper.service';
import { Movie } from '../Service/movie-model';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-movie-details-component',
  templateUrl: './movie-details-component.component.html',
  styleUrls: ['./movie-details-component.component.css'],
})
export class MovieDetailsComponentComponent implements OnInit {
  public pageIsReady = true;
  movie: Movie = new Movie();
  paramid: any;
  constructor(
    private route: ActivatedRoute,
    private apiService: ServiceHelperService
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
    });
  }

  getImageUrl(title: string) {
    if (title == null || title.length < 1) {
      return '';
    }

    var modifiedTitle =
      '../../assets/images/movie-covers/' +
      title.toLowerCase().replaceAll(' ', '-').trimEnd().concat('.jpg');

    return modifiedTitle;
  }

  // ngOnDestroy() {
  //   this.ngUnsubscribe.next();
  //   this.ngUnsubscribe.complete();
  // }
}
