import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {
  MatDialog,
  MatDialogConfig,
  MatDialogModule,
} from '@angular/material/dialog';
import {
  FilterPopupComponent,
  genreType,
} from '../filter-popup/filter-popup.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { movieList } from '../../app/moviesList';
import { HoverPopupComponent } from '../hover-popup/hover-popup.component';
import { ApiHelperService } from '../api-helper.service';
import { HttpBackend, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movielist-component',
  templateUrl: './movielist-component.component.html',
  styleUrls: ['./movielist-component.component.css'],
  // standalone: true,
  // imports: [MatButtonModule, MatDialogModule],
})
export class MovielistComponentComponent implements OnInit {
  title = 'Titans_Movies_App';
  filteredItems: any[] = [];
  searchQuery: any;
  showmovies = true;
  generes = Object.keys(genreType);
  showDropdown = false;
  showGenre: any;
  genereData = 'Choose a genre';
  isLoading = true;

  movieList = movieList;

  constructor(
    private dialog: MatDialog,
    private apiService: ApiHelperService,
    private http: HttpClient
  ) {}

  async ngOnInit() {
    // this.movieList = [];
    await this.apiCalls();
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
    this.genereData = 'Choose a genre';
    this.filteredItems = this.movieList;
  }

  async apiCalls() {
    this.apiService.getMovieLists().subscribe(
      (data) => {
        console.log(data);
        this.movieList = data;
        this.filteredItems = data;
      },
      (error) => {
        console.log(error);
      }
    );
    console.log(this.movieList);
    // this.apiService.getMovieLists().subscribe(
    //   (response) => {
    //     // Handle the successful response here
    //     console.log(response);
    //   },
    //   (error) => {
    //     // Handle the error here
    //     console.error(error);
    //   }
    // );
  }

  filterItems(searchQuery: string) {
    this.filteredItems = this.movieList.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
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
      // data: movieList[id - 1],
      data: this.filteredItems.find((item) => item.id === id), //this.filteredItems[id - 1],
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  showPrompt(): void {
    const dialogRef = this.dialog.open(FilterPopupComponent, {
      data: this.movieList[0],
      width: 'auto',
      height: 'auto',
      position: { top: '10%', left: '10%' },
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
  // filterMoviesonSelected(data: any) {
  //   var filteredItemsonselected = [];
  //   for (let i = 0; i < this.movieList.length; i++) {
  //     var iscrew = false;
  //     var iscast = false;
  //     var isgenere = false;
  //     var isyear = false;

  //     //cast
  //     for (let j = 0; j < data.cast.length; j++) {
  //       if (this.movieList[i].cast.includes(data.cast[j])) {
  //         iscast = true;
  //       }
  //       if (iscast) {
  //         filteredItemsonselected.push(this.movieList[i]);
  //       }
  //       console.log(filteredItemsonselected);
  //     }
  //     //crew
  //     for (let k = 0; k < data.crew.length; k++) {
  //       if (this.movieList[i].director.includes(data.crew[k])) {
  //         iscrew = true;
  //       }
  //       if (iscrew) {
  //         filteredItemsonselected.push(this.movieList[i]);
  //       }
  //       console.log(filteredItemsonselected);
  //     }
  //     //genere
  //     for (let l = 0; l < data.generes.length; l++) {
  //       if (this.movieList[i].genres.includes(data.generes[l])) {
  //         isgenere = true;
  //       }
  //       if (isgenere) {
  //         filteredItemsonselected.push(this.movieList[i]);
  //       }
  //       console.log(filteredItemsonselected);
  //     }
  //     //release year
  //     for (let m = 0; m < data.years.length; m++) {
  //       if (this.movieList[i].release_year == data.years[m]) {
  //         isyear = true;
  //       }
  //       if (isyear) {
  //         filteredItemsonselected.push(this.movieList[i]);
  //       }
  //       console.log(filteredItemsonselected);
  //     }
  //   }

  //   this.filteredItems = Array.from(new Set(filteredItemsonselected));
  // }

  filterMoviesonSelected(data: any) {
    this.filteredItems = this.movieList.filter((item) => {
      // Check each filter option if it is selected and filter the data accordingly
      return (
        // (this.filterOptions.popularity.length === 0 ||
        //   this.filterOptions.popularity.includes(item.popularity)) &&
        // (this.filterOptions.budget.length === 0 ||
        //   this.filterOptions.budget.includes(item.budget)) &&
        // (this.filterOptions.revenue.length === 0 ||
        //   this.filterOptions.revenue.includes(item.revenue)) &&
        // (this.filterOptions.title.length === 0 ||
        //   this.filterOptions.title.includes(item.title)) &&
        // (this.data.director.length === 0 ||
        //   this.filterOptions.director.includes(item.director)) &&
        // (this.filterOptions.release_year.length === 0 ||
        //   this.filterOptions.release_year.includes(item.release_year)) &&
        // (this.filterOptions.genres.length === 0 ||
        //   this.filterOptions.genres.some((genre) =>
        //     item.genres.includes(genre)
        //   )) &&
        // (this.filterOptions.production_companies.length === 0 ||
        //   this.filterOptions.production_companies.includes(
        //     item.production_companies
        //   )) &&
        // (this.filterOptions.cast.length === 0 ||
        //   this.filterOptions.cast.some((actor) => item.cast.includes(actor))) &&
        // (this.filterOptions.homepage.length === 0 ||
        //   this.filterOptions.homepage.includes(item.homepage))
        // (data.cast.length === 0 || data.cast.includes(item.cast.split(','))) &&
        // (data.cast.length === 0 || data.crew.includes(item.director))
        // &&
        // (data.genres.length === 0 ||
        //   data.genres.some((genre: any) => item.genres.includes(genre)))
        (data.generes.length === 0 ||
          data.generes.some((gen: any) =>
            item.genres[0].toLowerCase().includes(gen.toLowerCase())
          )) &&
        (data.cast.length === 0 ||
          data.cast.some((actor: any) => item.cast.includes(actor))) &&
        (data.crew.length === 0 ||
          data.crew.some((dir: any) => item.director.includes(dir))) &&
        (data.years.length === 0 ||
          data.years.some((yr: any) => item.release_year === yr)) &&
        (data.rating === 0 || item.popularity >= data.rating)
      );
    });
    console.log(this.filteredItems);
  }
}
function resolve(arg0: boolean) {
  throw new Error('Function not implemented.');
}
