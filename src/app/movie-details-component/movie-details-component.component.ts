import { Component } from '@angular/core';
import { movieList } from '../../app/moviesList';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-movie-details-component',
  templateUrl: './movie-details-component.component.html',
  styleUrls: ['./movie-details-component.component.css'],
})
export class MovieDetailsComponentComponent {
  public pageIsReady = true;
  movie = {
    id: 1,
    popularity: 8.9,
    budget: 20000000,
    revenue: 70000000,
    title: 'The Dark Knight',
    cast: 'Christian Bale, Heath Ledger',
    homepage: 'http://www.thedarkknight.com',
    director: 'Christopher Nolan',
    short_summary:
      'When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.',
    genres: ['Action, Crime, Drama'],
    production_companies: 'Warner Bros. Pictures',
    release_year: 2008,
  };

  // private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(private route: ActivatedRoute) {} // private store: Store<AppStore> // private route: ActivatedRoute, // private service: MainService,

  ngOnInit() {
    var paramid: any;
    this.route.params.subscribe((params) => {
      paramid = params['id'];
    });
    var list = movieList.filter((item) => {
      if (item.id == paramid) return item;
    });
    this.movie = list[0];
  }

  getImageUrl(title: string) {
    var modifiedTitle =
      '../../assets/images/movie-covers/' +
      title.toLowerCase().replaceAll(' ', '-').trimEnd().concat('.jpg');
    // console.log(modifiedTitle);
    return modifiedTitle;
  }

  // ngOnDestroy() {
  //   this.ngUnsubscribe.next();
  //   this.ngUnsubscribe.complete();
  // }
}
