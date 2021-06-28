import debounce from 'lodash.debounce';
import './styles.css';
import templates from './templates/countries.hbs';
import listTemplate from './templates/list.hbs';
import refs from './js/refs.js';
import { showError, showAlert } from './js/notification.js';
import fetchCountries from './js/fetchCountries.js';
import updateMarkup from './js/updateMarkup.js';

refs.input.addEventListener(
  'input',
  debounce(event => {
    const inputValue = event.target.value;
    refs.container.innerHTML = '';
    if (!refs.input.value) {
      showAlert();
      return;
    }
    fetchCountries(inputValue).then(data => {
      if (data.length > 10) {
        showError();
      }

      if (data.length >= 2 && data.length <= 10) {
        updateMarkup(listTemplate, data);
      }

      if (data.length === 1) {
        updateMarkup(templates, data);

      }
    });
  }, 500),
);