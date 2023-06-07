import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
})
export class LoadingComponent {
  loadingState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  setLoadingState(loading: boolean) {
    this.loadingState.next(loading);
  }
}
