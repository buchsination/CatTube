import { channelInformation } from '../data/channels.js';
import {likeCounter, dislikeCounter} from './utils/likes.js';
import {abonnieren} from './utils/abonnement.js';
import { idCreator } from './utils/idcreator.js';

export let videoId = JSON.parse(localStorage.getItem('transfer'));



let videoHTML = '';
generateVideoSite();
videoPreviews();

export function generateVideoSite () {
  channelInformation.forEach((matchingVideoId) => {
  

    if (matchingVideoId.id === videoId) {
        
        videoHTML += 
        `
        <div> <!-- video Placeholder-->
        <div>
          <img class="video-watch"  alt="" src="${matchingVideoId.channelVideo.vid00001.channelVideoThumb}">
        </div>
      
        <div class="vid-description-box">
        <div class="vid-video-title">
          ${matchingVideoId.channelVideo.vid00001.titel}
        </div>
        
        <div class="vid-description-channel">
          
      
          <!-- Left Part-->
          <div class="vid-description-channel-left">
                    
            <div> 
              <div">
                <img class="vid-channel-pic" src="${matchingVideoId.channelPicture}" alt="" > 
              </div>
                
              <div>
                <div class="vid-channelname" src="${matchingVideoId.name}"> ${matchingVideoId.name}
                </div>
                <div class="vid-abonnement">
                  <div>
                    <p class="paras js-channelAbos">${matchingVideoId.abonnement}</p>
                </div>
              </div>
      
      
                
      
      
            </div>
      
          <!-- Right Part-->
          <div class="vid-description-channel-right"> 
            <div class="vid-channel-buttons">
              <button class="abo-button js-abo-button">Abonnieren</button>
            </div>  
            <!--Like Section-->  
            <div class="vid-like-section"> 
              <div class="vid-like-left js-likecount">
                <img class="vid-icons" src="./Icons/like.png" alt="">
                  <p class="vid-p js-like"> ${matchingVideoId.channelVideo.vid00001.likes}</p> <p>Likes</p>
                  <p class="paras, like-count"></p>
              </div>
                                                  
              <div class="vert-line"> </div> 
                                                  
              <div class="vid-like-right js-dislikecount">
                <img class="vid-icons" src="./Icons/dislike.png" alt="">
                <p class="vid-p js-dislike">${matchingVideoId.channelVideo.vid00001.dislikes}</p> <p>Dislike</p>
                <p class="paras, like-count"></p>
              </div>
              
            </div>
            <!-- Other Buttons-->
              <div class="vid-share">
                  <img class="vid-icons" src="./Icons/share.png" alt="">
                  <p class="vid-p">Teilen</p>
              </div>
                                                    
              <div class="vid-download">
                  <img class="vid-icons" src="./Icons/download.png" alt="">
                  <p class="vid-p">Herunterladen</p>
              </div>
                                                      
              <div class="vid-selection-menu">
                  <img class="vid-icons-menu" src="./Icons/three-dots.svg" alt="">
              </div>
          </div>
          </div>
      
        </div> 
        
          <div class="vid-channel-description">
            <div class="paras">${matchingVideoId.channelVideo.vid00001.aufrufe}
            </div>
            <p class="vid-channel-description-part" style="float:left; margin-right: 5px;">
               <p> 
                <p class="paras">Aufrufe</p>
                <p class="paras">seit</p>
               <p class="paras">${matchingVideoId.channelVideo.vid00001.datum}</p> 
              <span class="vid-channel-description-link">Natur ihre Schönheit und Ruhe
              </span>
            </p>
            <br>
             
            <p class="vid-channel-description-part">
              Besucht auch meine Homepage für mehr Bilder!
              <span class="vid-channel-description-link">
                https://www.naturkatzen.ch
              </span>
            </p>
            <p class="vid-channel-description-part">
              Folgt auch diesen Katzenfreunden: 
              <br>
              Katze 1: 
              <span class="vid-channel-description-link">
                https://www.cattube.ch/Katze1
              </span>
              <br>
              Katze 2: 
              <span class="vid-channel-description-link">
                https://www.cattube.ch/Katze2
              </span>
              <br>
              Katze 3: 
              <span class="vid-channel-description-link">
                https://www.cattube.ch/Katze3
              </span>
            </p>
            <p class="vid-channel-description-part">
              <span class="vid-channel-description-link">
                #natur
              </span>
              <span class="vid-channel-description-link">
                #ruhe
              </span>
              <span class="vid-channel-description-link">
                #frieden
              </span>
            </p>
          </div>
      
          <div>
            Kommentare
          </div>
      
      </div>
      </div>
      </div>
        
        `
  
    }
    });
  
  
  
  document.querySelector(`.js-video-script`).innerHTML = videoHTML;
}

document.querySelector('.js-abo-button').addEventListener('click', () => {
  abonnieren();
});

document.querySelector('.js-likecount').addEventListener('click', () => {
  likeCounter();
});

document.querySelector('.js-dislikecount').addEventListener('click', () => {
  dislikeCounter();
});

/* Videovorschläge Bereich */

function videoPreviews () {

  let prevHTML = ``;

  const randomizedChannelInformation = copyAndRandomizeArray(channelInformation);

  function copyAndRandomizeArray(array) {
    // Create a copy of the original array
    const newArray = array.slice();
    
    // Randomize the elements in the copy
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    
    return newArray;
  }

  randomizedChannelInformation.forEach((preview) => {
    console.log( randomizedChannelInformation);
  
    prevHTML += `
    <div class="sidebar-right-preview js-video-id" onclick="location.href='video.html';" data-video-id="${preview.id}">
    <div>
      <img class="thumbnail-sidebar" src="${preview.channelVideo.vid00001.channelVideoThumb}" alt="">
    </div>
    </div>
    <div class="sidebar-right-box" onclick="location.href='video.html';">
      <div class="sidebar-right-title">
      ${preview.channelVideo.vid00001.titel}
      </div>
      <div class="sidebar-right-author">
      ${preview.name} &#10004;
      </div>
      <div class="sidebar-right-stat">
      ${preview.channelVideo.vid00001.aufrufe} Aufrufe &#183; seit  ${preview.channelVideo.vid00001.datum}
      </div>
    </div>
    `
    document.querySelector(`.js-vidreview`).innerHTML = prevHTML;
  });
  idCreator();
}
