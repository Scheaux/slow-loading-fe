export default class App {
  init() {
    this.activateSW();
    this.fetchSomeData();
  }

  activateSW() {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', async () => {
        this.sw = await navigator.serviceWorker.register('sw.js');
      });
    }
  }

  async fetchSomeData() {
    try {
      const response = await fetch('https://slow-loading-be.herokuapp.com/data');
      this.response = await response.json();
      this.renderNews();
    } catch (e) {
      console.warn(e);
      App.showLoadingError();
    }
  }

  renderNews() {
    if (!this.response) return;
    const container = document.getElementById('news-posts');
    container.innerHTML = '';
    this.response.forEach((e) => {
      container.innerHTML += `
        <div class="news_post">
          <div class="news_post_header">${e.name}</div>
          <div class="flex">
            <div class="news_post_image_a"></div>
            <div>
              <div class="news_post_description">
                ${e.description}
              </div>
            </div>
          </div>
        </div>
      `;
    });
  }

  static showLoadingError() {
    const modal = document.getElementById('loading-error-modal');
    modal.classList.remove('hidden');
  }
}
