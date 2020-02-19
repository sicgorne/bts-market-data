import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// RXJS imports
import { Observable } from 'rxjs/index';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TradingHintsService {
  // Main API url const
  private apiUrl = 'https://www.bitstamp.net/api/v2';
  // Pairs
  private btcUsd = '/ticker/btcusd/';
  constructor(private http: HttpClient) { }
  getBtcUsdPairs(): Observable<any> {
    return this.http.get(this.apiUrl + this.btcUsd)
      .pipe(map(rsp => rsp));
  }
}