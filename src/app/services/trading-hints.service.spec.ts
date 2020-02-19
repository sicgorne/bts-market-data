import { TestBed } from '@angular/core/testing';

import { TradingHintsService } from './trading-hints.service';

describe('TradingHintsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TradingHintsService = TestBed.get(TradingHintsService);
    expect(service).toBeTruthy();
  });
});
