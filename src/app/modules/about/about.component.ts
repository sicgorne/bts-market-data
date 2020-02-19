import { TradingHintsService } from './../../services/trading-hints.service';
import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent implements OnInit {
  public pairsData = [];
  constructor(
    private tradingHintsService: TradingHintsService,
    private changeDetection: ChangeDetectorRef
  ) { }
  ngOnInit(): void {
  }


  // ================================== Basic
  // public getBtcUsdPairs(): void {
  //   this.tradingHintsService.getBtcUsdPairs()
  //     .subscribe(
  //       res => this.loadedBtcUsdPairs(res),
  //       error => console.log(error)
  //     );
  // }
  // ===================================

  public getBtcUsdPairs(): void {
    this.tradingHintsService.getBtcUsdPairs()
      .subscribe(
        res => this.loadedBtcUsdPairs(res),
        error => console.log(error)
      );
  }

  public loadedBtcUsdPairs(data: any): void {
    this.pairsData.push(data);
    this.changeDetection.markForCheck(); // TOLE JE FUKNCIJA KI NE ZLOUDA STRANI DOKLER NE DOBIŠ PODATKOV
    // KER DRUGAČE SE STRAN ZLOUDA IN NIMAŠ PODATKOV ČEPRAV SI JIH DOBIL KER JE BIL ANGULAR HITREJŠI OD APIJA
  }
}