import {ComputeComponent} from './compute.component';

describe('ComputeComponent', () => {
  let component: ComputeComponent = new ComputeComponent();

  it('should return 0 if input is negative', () => {
    const result = component.compute(-1);
    expect(result).toBe(0);
  });

  it('should return value plus one if input is positive', () => {
    const result = component.compute(5);
    expect(result).toBe(6);
  });
});

