export function idCreator () {
  let videoIdTransfer;
  document.querySelectorAll('.js-video-id').forEach((vidPrev) => {
    vidPrev.addEventListener('click', () => {
      localStorage.clear();
      videoIdTransfer = vidPrev.getAttribute('data-video-id');
      localStorage.setItem('transfer', JSON.stringify(videoIdTransfer));
    });
  
    return;
  });
}