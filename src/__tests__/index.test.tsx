import { activate, deactivate } from '../index';
import { NativeModules } from 'react-native';

describe('Keepawake', () => {
  beforeEach(() => {
    NativeModules.Keepawake = {
      activate: jest.fn(),
      deactivate: jest.fn(),
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call native activate method', () => {
    activate();
    expect(NativeModules.Keepawake.activate).toHaveBeenCalled();
  });

  it('should call native deactivate method', () => {
    deactivate();
    expect(NativeModules.Keepawake.deactivate).toHaveBeenCalled();
  });
});
