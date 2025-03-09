import type { TurboModule } from 'react-native';
import { TurboModuleRegistry, NativeModules } from 'react-native';

declare global {
  var nativeCallSyncHook: unknown;
}

export interface Spec extends TurboModule {
  activate(): void;
  deactivate(): void;
}

const isNewArchitecture = () => {
  return global.nativeCallSyncHook != null;
};

const KeepawakeModule = isNewArchitecture()
  ? TurboModuleRegistry.getEnforcing<Spec>('Keepawake')
  : NativeModules.Keepawake;

export default KeepawakeModule;
