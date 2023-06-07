import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiHelperService {
  constructor(private http: HttpClient) {}

  getMovieLists() {
    return this.http.get<any[]>('api/data');
  }

  getMoviebyId(id: any) {
    return this.http.get<any>(`api/data/${id}`);
  }
}
