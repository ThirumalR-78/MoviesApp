import { InMemoryDbService } from 'angular-in-memory-web-api';
import { movieList } from '../moviesList';

export class ServiceHelper implements InMemoryDbService {
  createDb() {
    const data = movieList;

    return { data };
  }
}
