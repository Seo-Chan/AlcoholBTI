const url = "https://alcohol-bti.netlify.app/";

function shareKakao() {
  const resultImg = document.querySelector("#resultImg");
  const resultAlt = resultImg.firstElementChild.alt;
  const resultName = document.querySelector(".resultName");
  const shareImg = url + "img/image-" + resultAlt + ".png";
  Kakao.Share.sendDefault({
    objectType: "feed",
    content: {
      title: `친구야, 나와 어울리는 술은 ${resultName.innerHTML} !`,
      description: "술꾼들 모두 모여! 술BTI",
      imageUrl: shareImg,
      link: {
        mobileWebUrl: url,
        webUrl: url,
      },
    },
    buttons: [
      {
        title: "테스트 하러가기",
        link: {
          mobileWebUrl: url,
          webUrl: url,
        },
      },
    ],
  });
}

function shareTwitter() {
  var sendText = "나와 어울리는 술은? 술BTI";
  window.open(
    "https://twitter.com/intent/tweet?text=" + sendText + "&url=" + url
  );
}

function shareFacebook() {
  window.open("http://www.facebook.com/sharer/sharer.php?u=" + url);
}
