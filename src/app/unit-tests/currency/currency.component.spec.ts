import {CurrencyComponent} from './currency.component';

describe('CurrencyComponent', () => {
  let component: CurrencyComponent = new CurrencyComponent();

  it('should return the supported currencies', () => {
    const arr = component.getCurrencies();
    expect(arr).toContain('USD');
    expect(arr).toContain('AUD');
    expect(arr).toContain('EUR');
  });
});
