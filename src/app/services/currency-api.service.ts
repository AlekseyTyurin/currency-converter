import { Injectable } from '@angular/core';

@Injectable()
export class CurrencyApiService {

  constructor() { }

  getExchangeRate(fromCurrency: string, toCurrency: string): number {
    if (fromCurrency === 'USD' && toCurrency === 'EUR') {
      return 0.89;
    } else if (fromCurrency === 'USD' && toCurrency === 'PLN') {
      return 3.96;
    } else if (fromCurrency === 'EUR' && toCurrency === 'USD') {
      return 1.12;
    } else if (fromCurrency === 'EUR' && toCurrency === 'PLN') {
      return 4.45;
    } else if (fromCurrency === 'PLN' && toCurrency === 'USD') {
      return 0.25;
    } else if (fromCurrency === 'PLN' && toCurrency === 'EUR') {
      return 0.22;
    }

    return 1;
  }
}
