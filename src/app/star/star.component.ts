import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.sass']
})
export class StarComponent implements OnChanges {
  @Input() rating: number; // Example of passing data to this nested component from products component
  starWidth: number;

  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnChanges() {
    this.starWidth = this.rating * 75 / 5;
  }

  OnClick(): void {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked`);
  }

}
