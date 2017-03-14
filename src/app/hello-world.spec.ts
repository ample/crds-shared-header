import { HelloWorld } from './hello-world';

describe('HelloWorld', () => {

  it('should define the name property', () => {
    let obj = new HelloWorld();
    expect(obj.name).toBe('world');
  });

});
