import { Component, Renderer2, ElementRef, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-hover-popup',
  templateUrl: './hover-popup.component.html',
  styleUrls: ['./hover-popup.component.css'],
})
export class HoverPopupComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) data: { message: string },
    private dialogRef: MatDialogRef<HoverPopupComponent>,
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {
    this.movie = data;
  }

  movie: any;

  ngOnInit() {
    console.log(this.movie);
    this.renderer.listen('document', 'click', (event: MouseEvent) => {
      if (!this.elementRef.nativeElement.contains(event.target)) {
        this.dialogRef.close();
      }
    });
  }
}
