/* Like and Dislike Count & Check */

import { channelInformation } from "../../data/channels.js";
import { videoId } from "../video.js";

/* Like Counter */
export function likeCounter() {  
  
  channelInformation.forEach((videos) => {
    if (videos.id === videoId) {

      if (videos.channelVideo.vid00001.activeLike === false && videos.channelVideo.vid00001.activeDislike === false) {
        videos.channelVideo.vid00001.likes++;
        console.log(videos.channelVideo.vid00001.activeLike);
        videos.channelVideo.vid00001.activeLike = true;
        document.querySelector('.js-like').innerHTML = videos.channelVideo.vid00001.likes;
      } else if (videos.channelVideo.vid00001.activeLike === true && videos.channelVideo.vid00001.activeDislike === false) {
        videos.channelVideo.vid00001.likes--;
        videos.channelVideo.vid00001.activeLike = false;
        document.querySelector('.js-like').innerHTML = videos.channelVideo.vid00001.likes;
      } else {
        return;
      }
    }
  })
};

/* Dislike Counter */
export function dislikeCounter() {

  channelInformation.forEach((videos) => {
    if (videos.id === videoId) {
      
      if (videos.channelVideo.vid00001.activeDislike === false && videos.channelVideo.vid00001.activeLike === false) {
        videos.channelVideo.vid00001.dislikes++;
        videos.channelVideo.vid00001.activeDislike = true;
        document.querySelector('.js-dislike').innerHTML = videos.channelVideo.vid00001.dislikes;
      } else if (videos.channelVideo.vid00001.activeDislike === true && videos.channelVideo.vid00001.activeLike === false) {
        videos.channelVideo.vid00001.dislikes--;
        videos.channelVideo.vid00001.activeDislike = false;
        document.querySelector('.js-dislike').innerHTML = videos.channelVideo.vid00001.dislikes;
      } else {
        return;
      }
    }
  })
};