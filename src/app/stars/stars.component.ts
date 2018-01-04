import {Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit, OnChanges {


  @Input()
  rating: number;

  @Input()
  canEditStarCount = true;

  @Output()
  ratingChange: EventEmitter<number> = new EventEmitter();


  stars: boolean[];


  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.stars = [];
    for (let i = 1; i <= 5; i++) {
      this.stars.push(i > this.rating);
    }
  }

  ngOnInit() {
  }

  clickStar(index: number) {
    if (this.canEditStarCount) {
      this.rating = index + 1;
    }

    // 發送星級
    this.ratingChange.emit(this.rating);
  }


}
