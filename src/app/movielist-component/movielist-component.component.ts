import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  MatDialog,
  MatDialogConfig,
  MatDialogModule,
} from '@angular/material/dialog';
import { FilterPopupComponent, genreType } from '../filter-popup/filter-popup.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { movieList } from '../../app/moviesList';
import { HoverPopupComponent } from '../hover-popup/hover-popup.component';

@Component({
  selector: 'app-movielist-component',
  templateUrl: './movielist-component.component.html',
  styleUrls: ['./movielist-component.component.css'],
  // standalone: true,
  // imports: [MatButtonModule, MatDialogModule],
})
export class MovielistComponentComponent {
  title = 'Titans_Movies_App';
  filteredItems: any[] = [];
  searchQuery: any;
  showmovies = true;
  generes = Object.keys(genreType);
  showDropdown = false;
  showGenre: any;
  genereData = 'Choose a genre';

  // movieList =
  //   [
  //   {
  //     id: 1,
  //     popularity: 8.9,
  //     budget: 20000000,
  //     revenue: 70000000,
  //     title: 'The Dark Knight',
  //     cast: 'Christian Bale, Heath Ledger',
  //     homepage: 'http://www.thedarkknight.com',
  //     director: 'Christopher Nolan',
  //     short_summary:
  //       'When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.',
  //     genres: 'Action, Crime, Drama',
  //     production_companies: 'Warner Bros. Pictures',
  //     release_year: 2008,
  //   },
  //   {
  //     id: 2,
  //     popularity: 7.5,
  //     budget: 15000000,
  //     revenue: 45000000,
  //     title: 'The Matrix',
  //     cast: 'Keanu Reeves, Laurence Fishburne',
  //     homepage: 'http://www.whatisthematrix.com',
  //     director: 'Lana Wachowski, Lilly Wachowski',
  //     short_summary:
  //       'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
  //     genres: 'Action, Sci-Fi',
  //     production_companies: 'Village Roadshow Pictures',
  //     release_year: 1999,
  //   },
  //   {
  //     id: 3,
  //     popularity: 6.7,
  //     budget: 30000000,
  //     revenue: 90000000,
  //     title: 'Jurassic Park',
  //     cast: 'Sam Neill, Laura Dern',
  //     homepage: 'http://www.jurassicparkmovie.com',
  //     director: 'Steven Spielberg',
  //     short_summary:
  //       'During a preview tour, a theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok.',
  //     genres: 'Adventure, Sci-Fi',
  //     production_companies: 'Universal Pictures',
  //     release_year: 1993,
  //   },
  //   {
  //     id: 4,
  //     popularity: 7.8,
  //     budget: 40000000,
  //     revenue: 110000000,
  //     title: 'Pulp Fiction',
  //     cast: 'John Travolta, Uma Thurman',
  //     homepage: 'http://www.pulpfiction.com',
  //     director: 'Quentin Tarantino',
  //     short_summary:
  //       "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
  //     genres: 'Crime, Drama',
  //     production_companies: 'Miramax Films',
  //     release_year: 1994,
  //   },
  //   {
  //     id: 5,
  //     popularity: 6.2,
  //     budget: 25000000,
  //     revenue: 60000000,
  //     title: 'Avatar',
  //     cast: 'Sam Worthington, Zoe Saldana',
  //     homepage: 'http://www.avatarmovie.com',
  //     director: 'James Cameron',
  //     short_summary:
  //       'A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
  //     genres: 'Action, Adventure, Fantasy',
  //     production_companies: '20th Century Studios',
  //     release_year: 2009,
  //   },
  //   {
  //     id: 6,
  //     popularity: 7.1,
  //     budget: 35000000,
  //     revenue: 80000000,
  //     title: 'Forrest Gump',
  //     cast: 'Tom Hanks, Robin Wright',
  //     homepage: 'http://www.forrestgumpmovie.com',
  //     director: 'Robert Zemeckis',
  //     short_summary:
  //       'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal, and other historical events unfold through the perspective of an Alabama man with an IQ of 75.',
  //     genres: 'Drama, Romance',
  //     production_companies: 'Paramount Pictures',
  //     release_year: 1994,
  //   },
  //   {
  //     id: 7,
  //     popularity: 6.9,
  //     budget: 18000000,
  //     revenue: 55000000,
  //     title: 'Inglourious Basterds',
  //     cast: 'Brad Pitt, Diane Kruger',
  //     homepage: 'http://www.inglouriousbasterds.com',
  //     director: 'Quentin Tarantino',
  //     short_summary:
  //       "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same.",
  //     genres: 'Adventure, Drama, War',
  //     production_companies: 'The Weinstein Company',
  //     release_year: 2009,
  //   },
  //   {
  //     id: 8,
  //     popularity: 7.3,
  //     budget: 22000000,
  //     revenue: 60000000,
  //     title: 'The Social Network',
  //     cast: 'Jesse Eisenberg, Andrew Garfield',
  //     homepage: 'http://www.thesocialnetwork-movie.com',
  //     director: 'David Fincher',
  //     short_summary:
  //       'As Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, he is sued by two brothers who claimed he stole their idea.',
  //     genres: 'Biography, Drama',
  //     production_companies: 'Columbia Pictures',
  //     release_year: 2010,
  //   },
  //   {
  //     id: 9,
  //     popularity: 7.0,
  //     budget: 40000000,
  //     revenue: 95000000,
  //     title: 'Interstellar',
  //     cast: 'Matthew McConaughey, Anne Hathaway',
  //     homepage: 'http://www.interstellarmovie.com',
  //     director: 'Christopher Nolan',
  //     short_summary:
  //       "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
  //     genres: 'Adventure, Drama, Sci-Fi',
  //     production_companies: 'Paramount Pictures',
  //     release_year: 2014,
  //   },
  //   {
  //     id: 10,
  //     popularity: 7.6,
  //     budget: 30000000,
  //     revenue: 85000000,
  //     title: 'The Shawshank Redemption',
  //     cast: 'Tim Robbins, Morgan Freeman',
  //     homepage: 'http://www.shawshankredemption.com',
  //     director: 'Frank Darabont',
  //     short_summary:
  //       'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
  //     genres: 'Drama, Crime',
  //     production_companies: 'Castle Rock Entertainment',
  //     release_year: 1994,
  //   },
  //   {
  //     id: 11,
  //     popularity: 6.8,
  //     budget: 5000000,
  //     revenue: 25000000,
  //     title: 'Inception',
  //     cast: 'Leonardo DiCaprio, Joseph Gordon-Levitt',
  //     homepage: 'http://www.inceptionmovie.com',
  //     director: 'Christopher Nolan',
  //     short_summary:
  //       'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
  //     genres: 'Action, Adventure, Sci-Fi',
  //     production_companies: 'Legendary Entertainment',
  //     release_year: 2010,
  //   },
  //   {
  //     id: 12,
  //     popularity: 8.1,
  //     budget: 25000000,
  //     revenue: 70000000,
  //     title: 'Fight Club',
  //     cast: 'Brad Pitt, Edward Norton',
  //     homepage: 'http://www.fightclubmovie.com',
  //     director: 'David Fincher',
  //     short_summary:
  //       'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.',
  //     genres: 'Drama',
  //     production_companies: '20th Century Studios',
  //     release_year: 1999,
  //   },
  //   {
  //     id: 13,
  //     popularity: 7.2,
  //     budget: 15000000,
  //     revenue: 40000000,
  //     title: 'La La Land',
  //     cast: 'Ryan Gosling, Emma Stone',
  //     homepage: 'http://www.lalaland.movie',
  //     director: 'Damien Chazelle',
  //     short_summary:
  //       'While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.',
  //     genres: 'Comedy, Drama, Music',
  //     production_companies: 'Lionsgate',
  //     release_year: 2016,
  //   },
  //   {
  //     id: 14,
  //     popularity: 6.6,
  //     budget: 20000000,
  //     revenue: 55000000,
  //     title: 'The Wolf of Wall Street',
  //     cast: 'Leonardo DiCaprio, Jonah Hill',
  //     homepage: 'http://www.thewolfofwallstreet.com',
  //     director: 'Martin Scorsese',
  //     short_summary:
  //       'Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption, and the federal government.',
  //     genres: 'Biography, Crime, Drama',
  //     production_companies: 'Paramount Pictures',
  //     release_year: 2013,
  //   },
  //   {
  //     id: 15,
  //     popularity: 7.4,
  //     budget: 30000000,
  //     revenue: 80000000,
  //     title: 'Gladiator',
  //     cast: 'Russell Crowe, Joaquin Phoenix',
  //     homepage: 'http://www.gladiatormovie.com',
  //     director: 'Ridley Scott',
  //     short_summary:
  //       'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.',
  //     genres: 'Action, Adventure, Drama',
  //     production_companies: 'DreamWorks Pictures',
  //     release_year: 2000,
  //   },
  //   {
  //     id: 16,
  //     popularity: 7.7,
  //     budget: 35000000,
  //     revenue: 90000000,
  //     title: 'The Departed',
  //     cast: 'Leonardo DiCaprio, Matt Damon',
  //     homepage: 'http://www.thedepartedmovie.com',
  //     director: 'Martin Scorsese',
  //     short_summary:
  //       'An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.',
  //     genres: 'Crime, Drama, Thriller',
  //     production_companies: 'Warner Bros. Pictures',
  //     release_year: 2006,
  //   },
  //   {
  //     id: 17,
  //     popularity: 6.5,
  //     budget: 18000000,
  //     revenue: 45000000,
  //     title: 'The Grand Budapest Hotel',
  //     cast: 'Ralph Fiennes, Tony Revolori',
  //     homepage: 'http://www.grandbudapesthotel.com',
  //     director: 'Wes Anderson',
  //     short_summary:
  //       'The adventures of Gustave H, a legendary concierge at a famous hotel from the fictional Republic of Zubrowka between the first and second World Wars.',
  //     genres: 'Adventure, Comedy, Drama',
  //     production_companies: 'Fox Searchlight Pictures',
  //     release_year: 2014,
  //   },
  //   {
  //     id: 18,
  //     popularity: 7.8,
  //     budget: 20000000,
  //     revenue: 60000000,
  //     title: 'Good Will Hunting',
  //     cast: 'Matt Damon, Robin Williams',
  //     homepage: 'http://www.goodwillhunting.com',
  //     director: 'Gus Van Sant',
  //     short_summary:
  //       'Will Hunting, a janitor at M.I.T., has a gift for mathematics, but needs help from a psychologist to find direction in his life.',
  //     genres: 'Drama, Romance',
  //     production_companies: 'Miramax Films',
  //     release_year: 1997,
  //   },
  //   {
  //     id: 19,
  //     popularity: 7.1,
  //     budget: 28000000,
  //     revenue: 70000000,
  //     title: 'The Martian',
  //     cast: 'Matt Damon, Jessica Chastain',
  //     homepage: 'http://www.themartianmovie.com',
  //     director: 'Ridley Scott',
  //     short_summary:
  //       'An astronaut becomes stranded on Mars after his team assumes him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive.',
  //     genres: 'Adventure, Drama, Sci-Fi',
  //     production_companies: '20th Century Studios',
  //     release_year: 2015,
  //   },
  //   {
  //     id: 20,
  //     popularity: 6.4,
  //     budget: 22000000,
  //     revenue: 50000000,
  //     title: "The King's Speech",
  //     cast: 'Colin Firth, Geoffrey Rush',
  //     homepage: 'http://www.kingsspeechmovie.com',
  //     director: 'Tom Hooper',
  //     short_summary:
  //       'The story of King George VI, his impromptu ascension to the throne of the British Empire in 1936, and the speech therapist who helped the unsure monarch overcome his stammer.',
  //     genres: 'Biography, Drama, History',
  //     production_companies: 'The Weinstein Company',
  //     release_year: 2010,
  //   },
  // ];

  movieList = movieList;
  constructor(private dialog: MatDialog) {}
  ngOnInit() {
    this.genereData = 'Choose a genre';
    this.filteredItems = this.movieList;
  }
  filterItems(searchQuery: string) {
    this.filteredItems = this.movieList.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
  getImageUrl(title: string) {
    var modifiedTitle =
      '../../assets/images/movie-covers/' +
      title.toLowerCase().replaceAll(' ', '-').trimEnd().concat('.jpg');
    // console.log(modifiedTitle);
    return modifiedTitle;
  }
  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }
  setGenre(genre: any) {
    this.showGenre != genre
      ? (this.showGenre = genre)
      : (this.showGenre = null);

    this.filteredItems = this.movieList.filter((item) => {
      console.log(genre);
      var genereArray = item.genres[0]
        .split(',')
        .map((str: any) => str.toLowerCase().trim());
      console.log(genereArray);
      if (genereArray.includes(genre)) {
        return item;
      }
    });
    this.showDropdown = !this.showDropdown;
    this.genereData = genre.toUpperCase().concat('...........').concat('.');
  }

  openDialog(id: any): void {
    console.log(id);
    const dialogRef = this.dialog.open(HoverPopupComponent, {
      data: movieList[id - 1],
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  showPrompt(): void {
    // this.showmovies = false;

    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;
    // dialogConfig.width = '60%';
    // dialogConfig.panelClass = 'custom-dialog-container';
    // this.dialog.open(FilterPopupComponent, dialogConfig);

    const dialogRef = this.dialog.open(FilterPopupComponent, {
      //   // position: {
      //   //   left: '150px',
      //   //   top: '0px',
      //   // },
      data: this.movieList[0],
      // width: '50%', // Specify the desired width of the dialog (50% of the screen)
      // height: 'auto',
      width: 'auto', // Specify the desired width of the modal
      height: 'auto', // Specify the desired height of the modal
      position: { top: '10%', left: '10%' }, // Center the modal on the page
      // //panelClass: 'custom-modal', // Optional CSS class for styling the modal
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
      // this.showmovies = true;
      console.log(result);
      // this.newRecord = result.data;
      if (result) {
        this.filterMoviesonSelected(result.data);
      }
    });
  }
  filterMoviesonSelected(data: any) {
    var filteredItemsonselected = [];
    for (let i = 0; i < this.movieList.length; i++) {
      var iscrew = false;
      var iscast = false;
      var isgenere = false;
      var isyear = false;

      //cast
      for (let j = 0; j < data.cast.length; j++) {
        if (this.movieList[i].cast.includes(data.cast[j])) {
          iscast = true;
        }
        if (iscast) {
          filteredItemsonselected.push(this.movieList[i]);
        }
        console.log(filteredItemsonselected);
      }
      //crew
      for (let k = 0; k < data.crew.length; k++) {
        if (this.movieList[i].director.includes(data.crew[k])) {
          iscrew = true;
        }
        if (iscrew) {
          filteredItemsonselected.push(this.movieList[i]);
        }
        console.log(filteredItemsonselected);
      }
      //genere
      for (let l = 0; l < data.generes.length; l++) {
        if (this.movieList[i].genres.includes(data.generes[l])) {
          isgenere = true;
        }
        if (isgenere) {
          filteredItemsonselected.push(this.movieList[i]);
        }
        console.log(filteredItemsonselected);
      }
      //release year
      for (let m = 0; m < data.years.length; m++) {
        if (this.movieList[i].release_year == data.years[m]) {
          isyear = true;
        }
        if (isyear) {
          filteredItemsonselected.push(this.movieList[i]);
        }
        console.log(filteredItemsonselected);
      }
      // if (iscrew && isgenere) {
      //   filteredItemsonselected.push(this.movieList[i]);
      // }
    }

    this.filteredItems = Array.from(new Set(filteredItemsonselected));
  }

  //   cast
  // :
  // (2) ['Keanu Reeves', ' Laurence Fishburne']
  // crew
  // :
  // (2) [' Lilly Wachowski', 'Steven Spielberg']
  // generes
  // :
  // (2) ['action', 'adventure']
}
