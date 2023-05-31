import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovielistComponentComponent } from './movielist-component.component';

describe('MovielistComponentComponent', () => {
  let component: MovielistComponentComponent;
  let fixture: ComponentFixture<MovielistComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovielistComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovielistComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
