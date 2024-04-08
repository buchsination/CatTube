import { channelInformation } from "../../data/channels.js";
import { videoId, generateVideoSite } from "../video.js";



export function abonnieren() {
  channelInformation.forEach((aboclick) => {
    const element = document.querySelector('.js-abo-button');

    function changeForward () {
      element.classList.replace("js-abo-status", "js-abo-status-click");
      element.innerHTML = 'Abonniert';
      document.querySelector('.js-channelAbos').innerHTML = aboclick.abonnement;
    }
    
    function changeBackwards () {
      element.classList.replace("js-abo-status-click", "js-abo-status");
      element.innerHTML = 'Abonnieren';
      document.querySelector('.js-channelAbos').innerHTML = aboclick.abonnement;
    }

    if (aboclick.id === videoId) {
      if (aboclick.chanAbo === false) {
        aboclick.chanAbo = true;
        aboclick.abonnement++;
        changeForward();
      } else if (aboclick.chanAbo === true) {
        aboclick.chanAbo = false;
        aboclick.abonnement--;
        changeBackwards();
      } else {
        return;
      }
    }
    
  })
}

