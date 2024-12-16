import { AppRegistry, LogBox } from 'react-native';
import { enableScreens } from 'react-native-screens';

import { App } from './App';

if (!global.setImmediate) {
  global.setImmediate = require('./immediateShim').setImmediate;
}
if (!global.clearImmediate) {
  global.clearImmediate = require('./immediateShim').clearImmediate;
}

// Hide this target from the JS inspector
globalThis.__expo_hide_from_inspector__ = 'expo-dev-launcher';

LogBox.ignoreLogs(['EventEmitter']);

enableScreens(false);

AppRegistry.registerComponent('main', () => App);
