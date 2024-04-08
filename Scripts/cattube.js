import {channelInformation} from '../data/channels.js';
import { idCreator } from './utils/idcreator.js';



let previewHTML = ``;

generateMainSite();

function generateMainSite () {
  channelInformation.forEach((preview) => {
    previewHTML += `
    <div class="video-preview js-video-id" data-video-id="${preview.id}" onclick="location.href='video.html';">
    <div class="thumbnail-row">
      <img class="thumbnail" src="${preview.channelVideo.vid00001.channelVideoThumb}" alt="">
      <div class="video-time">
          ${preview.channelVideo.vid00001.laenge}
      </div>
    </div>
    <div class="video-info-grid">
      <div class="channel-pictures">
        <img class="profile-picture" src="${preview.channelPicture}" alt="">
      </div>
  
      <div class="video-info">
        <p class="video-title">
          ${preview.channelVideo.vid00001.titel}
        </p>
    
        <p class="video-author">
          ${preview.name}
        </p>
    
        <p class="video-stats">
          ${preview.channelVideo.vid00001.aufrufe} Aufrufe &#183; erstellt am ${preview.channelVideo.vid00001.datum}
        </p>
      </div>
    </div>
  </div>
    `;
  });
  
  document.querySelector('.js-preview-video-grid').innerHTML = previewHTML;
  
  idCreator();
  
}