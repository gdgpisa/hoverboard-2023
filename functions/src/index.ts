// https://github.com/import-js/eslint-plugin-import/issues/1810
// eslint-disable-next-line import/no-unresolved
import { initializeApp } from 'firebase-admin/app';
import {
  scheduleWrite,
  sessionsWrite,
  speakersWrite,
} from './generate-sessions-speakers-schedule.js';
import { mailchimpSubscribe } from './mailchimp-subscribe.js';
import { sendGeneralNotification } from './notifications.js';
import { optimizeImages } from './optimize-images.js';
import { prerender } from './prerender.js';
import { scheduleNotifications } from './schedule-notifications.js';

// TODO: Update `tsconfig.json`
// - "noImplicitReturns": true,
// - "strict": true,

const firebaseConfig = {
  apiKey: 'AIzaSyDtUiHI2_UEKpQ-7oes6yV_UxDv8v85Wnk',
  authDomain: 'devfest-pisa23.firebaseapp.com',
  databaseURL: 'https://devfest-pisa23-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'devfest-pisa23',
  storageBucket: 'devfest-pisa23.appspot.com',
  messagingSenderId: '570358773949',
  appId: '1:570358773949:web:addadc7108271e95709fd4',
  measurementId: 'G-P9W7BKE2LV',
};

initializeApp(firebaseConfig);

export {
  sendGeneralNotification,
  scheduleNotifications,
  optimizeImages,
  mailchimpSubscribe,
  prerender,
  scheduleWrite,
  sessionsWrite,
  speakersWrite,
};
