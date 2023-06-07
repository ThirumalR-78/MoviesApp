import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import {
  FilterPopupComponent,
  genreType,
} from '../filter-popup/filter-popup.component';
import { movieList } from '../../app/moviesList';
import { HoverPopupComponent } from '../hover-popup/hover-popup.component';
import { ServiceHelperService } from '../Service/service-helper.service';

@Component({
  selector: 'app-movielist-component',
  templateUrl: './movielist-component.component.html',
  styleUrls: ['./movielist-component.component.css'],
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

  movieList = movieList;
  constructor(
    private dialog: MatDialog,
    private apiService: ServiceHelperService
  ) {}
  async ngOnInit() {
    await this.apiCalls();
    console.log('qwertyuio');
    this.genereData = 'Choose a genre';
    this.filteredItems = this.movieList;
  }

  apiCalls() {
    this.apiService.getMovieLists().subscribe((data) => {
      this.movieList = data;
    });
  }

  filterItems(searchQuery: string) {
    this.filteredItems = this.movieList.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
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

  getImageUrl(title: string) {
    if (title == null || title.length < 1) {
      return '';
    }
    var modifiedTitle =
      '../../assets/images/movie-covers/' +
      title.toLowerCase().replaceAll(' ', '-').trimEnd().concat('.jpg');
    return modifiedTitle;
  }

  openDialog(id: any): void {
    return;
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
    // else {
    // }
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
