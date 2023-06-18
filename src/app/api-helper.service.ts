import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class ApiHelperService {
  constructor(private http: HttpClient) {}
  baseurl = 'https://localhost:7068/api/';

  // getMovieLists() {
  //   const url = 'https://localhost:7068/api/Movies'; // Replace with your API endpoint
  //   const headers = new HttpHeaders().set('Content-Type', 'application/json'); // Set the headers if required

  //   return this.http.get(url, { headers: headers });
  //   // return this.http.get<any[]>('https://localhost:7068/api/Movies');
  //   // return this.http.get<any[]>('api/data');
  // }
  getMovieLists(): Observable<any> {
    const url = this.baseurl + 'Movies';
    const headers = new HttpHeaders().set('Content-Type', 'application/json'); // Set the headers if required

    var res = this.http.get(url, { headers: headers });
    return res;
  }

  getMoviebyId(id: any) {
    const url = this.baseurl + 'Movies/' + id;
    const headers = new HttpHeaders().set('Content-Type', 'application/json'); // Set the headers if required

    var res = this.http.get(url, { headers: headers });
    return res;
    // return this.http.get<any>(`api/data/${id}`);
  }
}
