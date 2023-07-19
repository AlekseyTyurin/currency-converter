import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { CurrencyApiService } from "../../services/currency-api.service";

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss'],
  providers: [CurrencyApiService]
})
export class CurrencyConverterComponent implements OnInit {

  currencies: string[] = ['USD', 'EUR', 'PLN'];
  currencyConverterForm: FormGroup;
  convertedAmount: number | undefined;

  constructor(private formBuilder: FormBuilder,
              private currencyApiService: CurrencyApiService) {
    this.currencyConverterForm = this.formBuilder.group({
      amount: new FormControl(),
      selectedFromCurrency: new FormControl(this.currencies[0]),
      selectedToCurrency: new FormControl(this.currencies[1])
    });
  }

  ngOnInit() {
  }

  convertCurrency() {
    const amount = this.currencyConverterForm.value.amount;
    const fromCurrency = this.currencyConverterForm.value.selectedFromCurrency;
    const toCurrency = this.currencyConverterForm.value.selectedToCurrency;

    const exchangeRate = this.currencyApiService.getExchangeRate(fromCurrency, toCurrency);
    this.convertedAmount = amount * exchangeRate;
  }

}
