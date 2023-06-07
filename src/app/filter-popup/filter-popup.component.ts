import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { movieList } from '../../app/moviesList';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-filter-popup',
  templateUrl: './filter-popup.component.html',
  styleUrls: ['./filter-popup.component.css'],
})
export class FilterPopupComponent {
  movie: any;
  generes: any;
  cast: any[] = [];
  directors: any[] = [];
  years: any[] = [];
  selectedGeneres: string[] = [];
  selectedCast: string[] = [];
  selectedDirectors: string[] = [];
  selectedYears: string[] = [];
  filterOptions: any = {};
  constructor(
    @Inject(MAT_DIALOG_DATA) data: { message: string },
    public dialogRef: MatDialogRef<FilterPopupComponent>
  ) {
    // this.form = this.fb.group({
    //   name: ['', Validators.required],
    //   address: ['', Validators.required],
    //   country: [''],
    // });
    this.movie = data;
  }

  ngOnInit() {
    movieList.map((mov) => {
      mov.cast.split(',').map((c: any) => {
        this.cast.push(c);
      });
      mov.director.split(',').map((c: any) => {
        this.directors.push(c);
      });
      this.years.push(mov.release_year);
    });
    console.log(this.cast);
    console.log(this.directors);
    this.generes = Object.keys(genreType);
    console.log(this.generes);
  }

  applyFilter() {
    this.dialogRef.close({
      clicked: 'submit',
      data: {
        crew: this.selectedDirectors,
        cast: this.selectedCast,
        generes: this.selectedGeneres,
        years: this.selectedYears,
      },
    });
  }

  cancel(): void {
    // Close the dialog
    this.dialogRef.close();
  }
}

export type GenreType =
  | 'action'
  | 'adventure'
  | 'biography'
  | 'comedy'
  | 'crime'
  | 'drama'
  | 'history'
  | 'mystery'
  | 'scifi'
  | 'sport'
  | 'thriller';

export const genreType = {
  action: 'action' as GenreType,
  adventure: 'adventure' as GenreType,
  biography: 'biography' as GenreType,
  comedy: 'comedy' as GenreType,
  crime: 'crime' as GenreType,
  drama: 'drama' as GenreType,
  history: 'history' as GenreType,
  mystery: 'mystery' as GenreType,
  scifi: 'scifi' as GenreType,
  sport: 'sport' as GenreType,
  thriller: 'thriller' as GenreType,
};
