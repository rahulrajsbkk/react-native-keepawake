import KeepawakeModule from './NativeKeepawake';

export function activate(): void {
  KeepawakeModule.activate();
}

export function deactivate(): void {
  KeepawakeModule.deactivate();
}
