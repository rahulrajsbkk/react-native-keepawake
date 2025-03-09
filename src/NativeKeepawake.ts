import type { TurboModule } from 'react-native';
import { TurboModuleRegistry, NativeModules } from 'react-native';

declare global {
  var nativeCallSyncHook: unknown;
}

export interface Spec extends TurboModule {
  activate(): void;
  deactivate(): void;
}

// More reliable way to check for new architecture
const isTurboModuleEnabled = global.nativeCallSyncHook != null;

const KeepawakeModule = isTurboModuleEnabled
  ? TurboModuleRegistry.get<Spec>('Keepawake')
  : NativeModules.Keepawake;

if (!KeepawakeModule) {
  throw new Error('Keepawake native module is not available');
}

export default KeepawakeModule;
