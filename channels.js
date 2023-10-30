/* Channel 1 Object */
const channelVideo1 = {
  name: 'Purrfection',
  abonnement: 30000,
  likes: 51,
  activeLike: false,
  dislikes: 10,
  activeDislike: false,
  aufrufe: 705399
};


/* Like Counter */
function likeCounter() {
  let channelLikes = Number(channelVideo1.likes);
  let checkLike = channelVideo1.activeLike;
  let checkDislike = channelVideo1.activeDislike;


  if (checkLike === false && checkDislike === false) {
    channelLikes = channelLikes + 1;
    channelVideo1.likes = channelLikes;
    checklike = true;
    channelVideo1.activeLike = true;
    document.querySelector('.js-like').innerHTML = `${channelVideo1.likes}`;
    document.getElementById('channelLikes').style.fontWeight = "1000";
    document.getElementById('channelParaLike').style.fontWeight = "1000";
  } else if (checkLike === true && checkDislike === false) {
    channelLikes--;
    channelVideo1.likes = channelLikes;
    checkLike = false;
    channelVideo1.activeLike = false;
    document.querySelector('.js-like').innerHTML = `${channelVideo1.likes}`;
    document.getElementById('channelLikes').style.fontWeight = "500";
    document.getElementById('channelParaLike').style.fontWeight = "500";
  } else {
    return;
  }
};

/* Dislike Counter */
function dislikeCounter() {
  let channelDislikes = Number(channelVideo1.dislikes);
  let checkLike = channelVideo1.activeLike;
  let checkDislike = channelVideo1.activeDislike;

  if (checkDislike === false && checkLike === false) {
    channelDislikes = channelDislikes + 1;
    channelVideo1.dislikes = channelDislikes;
    channelVideo1.activeDislike = true;
    document.querySelector('.js-dislike').innerHTML = `${channelVideo1.dislikes}`;
    document.getElementById('channelDislikes').style.fontWeight = "1000";
    document.getElementById('channelParaDislike').style.fontWeight = "1000";
  } else if (checkDislike === true && checkLike === false) {
    channelDislikes--;
    channelVideo1.dislikes = channelDislikes;
    channelVideo1.activeDislike = false;
    document.querySelector('.js-dislike').innerHTML = `${channelVideo1.dislikes}`;
    document.getElementById('channelDislikes').style.fontWeight = "500";
    document.getElementById('channelParaDislike').style.fontWeight = "500";
  } else {
    return;
  }
};