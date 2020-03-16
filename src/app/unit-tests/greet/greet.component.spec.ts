import {GreetComponent} from './greet.component';

describe('GreetComponent', () => {
  let component: GreetComponent = new GreetComponent();

  it('should include the name in the message', () => {
    expect(component.greet('Ahmad')).toEqual('Welcome Ahmad');
  });

  it('should include the name in the message', () => {
    expect(component.greet('Ahmad')).toContain('Ahmad');
  });
});
