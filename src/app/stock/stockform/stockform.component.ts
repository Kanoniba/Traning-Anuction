import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Stock, StockService} from '../stock.service';

@Component({
  selector: 'app-stockform',
  templateUrl: './stockform.component.html',
  styleUrls: ['./stockform.component.css']
})
export class StockformComponent implements OnInit {

  stock: Stock;
  lastRating: number;

  constructor(private route: Router, public routeInfo: ActivatedRoute, private stockService: StockService) {
  }

  ngOnInit() {
    this.routeInfo.params.subscribe(params => {
      this.stock = this.stockService.getStock(parseInt(params['id'], 10));
      this.lastRating = this.stock.rating;
    });
  }

  cancel() {
    this.route.navigateByUrl('/stock');
    this.stock.rating = this.lastRating;
  }

  save() {
    this.route.navigateByUrl('/stock');
  }
}
