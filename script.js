const articleProfile = document.getElementById("article__profile");
const articleProfileWrapper = document.getElementById(
  "article__profile-wrapper",
);
const articleProfileShareBtn = document.getElementById(
  "article__profile-share-btn",
);
const articleProfileShareBtnImg = document.getElementById(
  "article__profile-share-btn-img",
);
const articleProfilePopup = document.getElementById("article__profile-popup");

articleProfileShareBtn.addEventListener("click", function () {
  articleProfile.classList.toggle("article__profile--active");
  articleProfileWrapper.classList.toggle("article__profile-wrapper--active");
  articleProfilePopup.classList.toggle("article__profile-popup--active");
  articleProfileShareBtn.classList.toggle("article__profile-share-btn--active");

  if (articleProfileShareBtnImg.src.includes("images/icon-share.svg")) {
    articleProfileShareBtnImg.src = "images/icon-share-white.svg";
  } else {
    articleProfileShareBtnImg.src = "images/icon-share.svg";
  }
});
