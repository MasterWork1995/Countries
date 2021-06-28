import { error, alert, defaultModules } from '../../node_modules/@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '../../node_modules/@pnotify/mobile/dist/PNotifyMobile.js';

import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import "@pnotify/confirm/dist/PNotifyConfirm.css";


defaultModules.set(PNotifyMobile, {});



export  function showError() {
  error({
    text: 'Too many matches found. Please enter a more specific query!',
});
}

export function showAlert() {
  alert({
    text: 'Enter your country',
  })
}


