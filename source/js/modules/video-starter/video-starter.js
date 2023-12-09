export const videoStarter = () => {
  const buttonPlay = document.querySelector('[data-button="play-button"]');

  if (buttonPlay) {
    buttonPlay.addEventListener('click', () => {
      const poster = document.querySelector('[data-poster="video-poster"]');
      if (poster) {
        poster.style.display = 'none';
      }

      const myIframe = document.querySelector('[data-video="hero-video"]');
      const src = myIframe.src;
      myIframe.src = src.includes('?') ? `${src}&autoplay=1` : `${src}?autoplay=1`;

      buttonPlay.style.display = 'none';
    });
  }
};
