import {Pipe, PipeTransform} from '@angular/core';
import {Stock} from './stock.service';

@Pipe({
  name: 'stockFilter'
})
export class StockFilterPipe implements PipeTransform {

  transform(stockList: Stock[], filedName: string, keyword: string): Stock[] {
    if (!filedName || !keyword) {
      return stockList;
    }
    return stockList.filter(stockItem => {
      return stockItem[filedName].toLowerCase().indexOf(keyword) > 0;
    });
  }

}
