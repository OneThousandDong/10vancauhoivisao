/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Nabar from './src/menu/index';
AppRegistry.registerComponent(appName, () => Nabar);