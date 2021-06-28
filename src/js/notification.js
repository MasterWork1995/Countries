import { alert, defaultModules } from '../../node_modules/@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '../../node_modules/@pnotify/mobile/dist/PNotifyMobile.js';

defaultModules.set(PNotifyMobile, {});

function showMessage() {
  alert({
    text: "Too many matches founds. Please enter a more specific query!"
});
};


export default showMessage;

