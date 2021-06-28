'use strict';

import debounce from 'lodash.debounce';
import templates from './templates/countries.hbs';
import listTmp from './templates/list.hbs';
import fetchCountries from './js/fetchCountries';
import updateMarkup from './js/updatemarkup';

const input = document.querySelector('.js-search');
const container = document.querySelector('.js-container');

input.addEventListener(
  'input',
  debounce(event => {
    const inputValue = event.target.value;
    container.innerHTML = '';
    if (!input.value) {
      return;
    }
    fetchCountries(inputValue).then(data => {
    //   if (data.length > 10) {
    //     showMessage();
    //   }

      if (data.length >= 2 && data.length <= 10) {
        updateMarkup(listTmp, data);
      }

      if (data.length === 1) {
        updateMarkup(templates, data);
      }
    });
  }, 500),
);
