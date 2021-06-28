const container = document.querySelector('.js-container');

function updateMarkup(template, articles) {
  const markup = template(articles);
  container.insertAdjacentHTML('beforeend', markup);
}

export default updateMarkup;