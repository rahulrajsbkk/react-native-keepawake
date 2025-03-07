# react-native-keepawake

A React Native package that prevents the screen from going to sleep while your app is active. Works for both iOS and Android.

## Installation

```sh
npm install react-native-keepawake
```

## Usage

### Android Setup

Add the following permission to your AndroidManifest.xml:

```xml
<uses-permission android:name="android.permission.WAKE_LOCK" />
```

## Usage

```javascript
import { activate, deactivate } from 'react-native-keepawake';

// Keep the screen awake
activate();

// Allow the screen to sleep
deactivate();
```

### Example

```javascript
import React, { useEffect } from 'react';
import { View, Button } from 'react-native';
import { activate, deactivate } from 'react-native-keepawake';

function VideoPlayer() {
  useEffect(() => {
    // Activate keep awake when component mounts
    activate();

    // Deactivate when component unmounts
    return () => {
      deactivate();
    };
  }, []);

  return <View>{/* Your video player component */}</View>;
}
```

## API Reference

### `activate()`

Prevents the screen from going to sleep. The screen will remain on until `deactivate()` is called.

### `deactivate()`

Allows the screen to go to sleep following the device's normal behavior.

## Common Use Cases

- Video players
- Navigation apps
- Reading apps
- Games
- Presentation apps

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
