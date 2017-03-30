import { expect } from 'chai';
import processor from '../'
import styleObject from './fixture/styleObject'
import processorConfigs from './fixture/processorConfigs'


describe('Basic Processor Behavior', () => {
  it('returns an object', () => {
    const processed = processor(styleObject, processorConfigs);
    expect(processed).to.be.an('object');
  });
});