import {Injectable} from '@angular/core';

@Injectable()
export class StockService {
  private stocks: Array<Stock>;

  constructor() {
    this.stocks = [
      new Stock(1, '第1隻股票', 1.99, 3.5, '這是第一隻', ['IT', '互連網']),
      new Stock(2, '第2隻股票', 2.99, 4.5, '這是第2隻', ['金融']),
      new Stock(3, '第3隻股票', 3.99, 2.5, '這是第3隻', ['IT', 'A']),
      new Stock(4, '第4隻股票', 4.99, 1.5, '這是第4隻', ['XD', 'B']),
      new Stock(5, '第5隻股票', 5.99, 2.4, '這是第5隻', ['BS', 'C']),
      new Stock(6, '第6隻股票', 6.99, 3.5, '這是第6隻', ['CC', 'F']),
      new Stock(7, '第7隻股票', 7.99, 5, '這是第7隻', ['AT', 'D']),
      new Stock(8, '第8隻股票', 8.99, 4.5, '這是第8隻', ['YU', 'E'])
    ];
  }

  getStocks(): Stock[] {
    return this.stocks;
  }

  getStock(id: number): Stock {
    let retStock = this.stocks.find((stock) => (stock.id === id));
    if (!retStock) {
      retStock = new Stock(0, '請輸入股票名稱', 0, 0, '請輸入股票描述', ['2', '2']);
    }
    return retStock;
  }

}

export class Stock {
  constructor(public  id: number,
              public name: string,
              public price: number,
              public rating: number,
              public desc: string,
              public categories: Array<string>) {

  }
}
