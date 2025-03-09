import KeepawakeModule from './NativeKeepawake';

export function activateWakelock(): void {
  KeepawakeModule.activate();
}

export function deactivateWakelock(): void {
  KeepawakeModule.deactivate();
}
