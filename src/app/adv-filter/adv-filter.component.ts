import { Component } from '@angular/core';

@Component({
  selector: 'app-adv-filter',
  templateUrl: './adv-filter.component.html',
  styleUrls: ['./adv-filter.component.css'],
})
export class AdvFilterComponent {
  data = [
    {
      id: 1,
      popularity: '8.9',
      budget: 20000000,
      revenue: 70000000,
      title: 'The Dark Knight',
      cast: 'Christian Bale, Heath Ledger',
      homepage: 'http://www.thedarkknight.com',
      director: 'Christopher Nolan',
      short_summary:
        'When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.',
      genres: ['Action', 'Crime', 'Drama'],
      production_companies: 'Warner Bros. Pictures',
      release_year: 2008,
    },
    // Add more data objects as needed
  ];
  filterOptions = {
    popularity: [],
    budget: [],
    revenue: [],
    title: [],
    director: [],
    release_year: [],
    genres: [],
    production_companies: [],
    cast: [],
    homepage: [],
  };
  filteredData: any[] = [];

  // applyFilters() {
  //   this.filteredData = this.data.filter((item) => {
  //     // Check each filter option if it is selected and filter the data accordingly
  //     return (
  //       (this.filterOptions.popularity.length === 0 ||
  //         this.filterOptions.popularity.includes(item.popularity)) &&
  //       (this.filterOptions.budget.length === 0 ||
  //         this.filterOptions.budget.includes(item.budget)) &&
  //       (this.filterOptions.revenue.length === 0 ||
  //         this.filterOptions.revenue.includes(item.revenue)) &&
  //       (this.filterOptions.title.length === 0 ||
  //         this.filterOptions.title.includes(item.title)) &&
  //       (this.filterOptions.director.length === 0 ||
  //         this.filterOptions.director.includes(item.director)) &&
  //       (this.filterOptions.release_year.length === 0 ||
  //         this.filterOptions.release_year.includes(item.release_year)) &&
  //       (this.filterOptions.genres.length === 0 ||
  //         this.filterOptions.genres.some((genre) =>
  //           item.genres.includes(genre)
  //         )) &&
  //       (this.filterOptions.production_companies.length === 0 ||
  //         this.filterOptions.production_companies.includes(
  //           item.production_companies
  //         )) &&
  //       (this.filterOptions.cast.length === 0 ||
  //         this.filterOptions.cast.some((actor) => item.cast.includes(actor))) &&
  //       (this.filterOptions.homepage.length === 0 ||
  //         this.filterOptions.homepage.includes(item.homepage))
  //     );
  //   });
  // }
}
