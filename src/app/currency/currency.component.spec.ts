import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CurrencyComponent} from './currency.component';

describe('CurrencyComponent', () => {
  let component: CurrencyComponent;
  let fixture: ComponentFixture<CurrencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CurrencyComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return the supported currencies', () => {
    const arr = component.getCurrencies();
    expect(arr).toContain('USD');
    expect(arr).toContain('AUD');
    expect(arr).toContain('EUR');
  });
});
