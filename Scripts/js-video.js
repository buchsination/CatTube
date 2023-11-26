/* Load Pictures */
function loadChannel() {
  // lade Bild des Channels
  document.getElementById('channelPictureSmall').src = channelOwner.channelPicture;
  // lade Abonnenten Anzahl
  document.getElementById('channelAbos').innerHTML = channelOwner.abonnement;
  // lade Channel Name
  document.getElementById('channelOwnerName').innerHTML = channelOwner.name;
  //lade Video likes und dislikes
  document.getElementById('channelLikes').innerHTML = channelVideo.likes;
  document.getElementById('channelDislikes').innerHTML = channelVideo.dislikes;
}

function loadChannelVid() {
  // lade Videobild
  document.getElementById('ChannelVideoBig').src = channelVideo.channelVideoThumb;
  // lade Video Aufrufe
  document.getElementById('channelVid').innerHTML = channelVideo.aufrufe;
  // lade Erscheinungsdatum
  document.getElementById('videoDescriptionDate').innerHTML = channelVideo.datum;
  // lade vollen VideoTitel
  document.getElementById('videoDescriptopnTitle').innerHTML = channelVideo.titel;
  
}

// "./Thumbnails/cat-01.jpg"

// channelVideoThumb


/* Abostatus Check */

function abonnieren() {
  if (channelVideo.chanAbo === false) {
    channelVideo.chanAbo = true;
    channelOwner.abonnement++;
    document.getElementById('channelAbos').innerHTML = channelOwner.abonnement;
    document.querySelector('.js-abo-status').innerHTML = 'Abonniert';
    document.getElementById('button-Abo').style.fontWeight = "1000";
  } else if (channelVideo.chanAbo === true) {
    channelVideo.chanAbo = false;
    channelOwner.abonnement--;
    document.getElementById('channelAbos').innerHTML = channelOwner.abonnement;
    document.querySelector('.js-abo-status').innerHTML = 'Abonnieren';
    document.getElementById('button-Abo').style.fontWeight = "200";
  } else {
    return;
  }
}



/* Like and Dislike Count & Check */

/* Like Counter */
function likeCounter() {
  if (channelVideo.activeLike === false && channelVideo.activeDislike === false) {
    channelVideo.likes++;
    channelVideo.activeLike = true;
    document.querySelector('.js-like').innerHTML = `${channelVideo.likes}`;
    document.getElementById('channelLikes').style.fontWeight = "1000";
    document.getElementById('channelParaLike').style.fontWeight = "1000";
  } else if (channelVideo.activeLike === true && channelVideo.activeDislike === false) {
    channelVideo.likes--;
    channelVideo.activeLike = false;
    document.querySelector('.js-like').innerHTML = `${channelVideo.likes}`;
    document.getElementById('channelLikes').style.fontWeight = "500";
    document.getElementById('channelParaLike').style.fontWeight = "500";
  } else {
    return;
  }
};

/* Dislike Counter */
function dislikeCounter() {
  if (channelVideo.activeDislike === false && channelVideo.activeLike === false) {
    channelVideo.dislikes++;
    channelVideo.activeDislike = true;
    document.querySelector('.js-dislike').innerHTML = `${channelVideo.dislikes}`;
    document.getElementById('channelDislikes').style.fontWeight = "1000";
    document.getElementById('channelParaDislike').style.fontWeight = "1000";
  } else if (channelVideo.activeDislike === true && channelVideo.activeLike === false) {
    channelVideo.dislikes--;
    channelVideo.activeDislike = false;
    document.querySelector('.js-dislike').innerHTML = `${channelVideo.dislikes}`;
    document.getElementById('channelDislikes').style.fontWeight = "500";
    document.getElementById('channelParaDislike').style.fontWeight = "500";
  } else {
    return;
  }
};


