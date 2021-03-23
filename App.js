import React from 'react';
//import PushNotification from 'react-native-push-notification';
//import PushNotificationIOS from '@react-native-community/push-notification-ios';
import { mediaDevices, MediaStream, RTCPeerConnection, RTCSessionDescription } from 'react-native-webrtc';
import { Provider } from 'react-redux';
import { AppContainer } from './containers/stackContainer';
import store from './store';
import {Platform} from 'react-native';
import { onCallAccepted, onCallEnded } from './services/CallService';

// Polyfill WebRTC
global.MediaStream = MediaStream;
global.RTCSessionDescription = RTCSessionDescription;
global.RTCPeerConnection = RTCPeerConnection;
global.navigator.mediaDevices = {
  ...global.navigator.mediaDevices,
  getUserMedia: mediaDevices.getUserMedia,
};

const App = () => {
  
  return (
    <Provider store={store}>
      <AppContainer/>
    </Provider>
  );
};
export default App;