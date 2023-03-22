const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const endPoint = 12;
const select = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function calResult() {
  var result = select.indexOf(Math.max(...select));
  return result;
}

function setResult() {
  let point = calResult();
  const resultName = document.querySelector(".resultName");
  resultName.innerHTML = resultList[point].name;

  var resultImg = document.createElement("img");
  const imgDiv = document.querySelector("#resultImg");
  var imgURL = "img/image-" + point + ".png";
  resultImg.src = imgURL;
  resultImg.alt = point;
  //   resultImg.classList.add("img-fluid");
  imgDiv.appendChild(resultImg);

  const resultDesc = document.querySelector(".resultDesc");
  resultList[point].desc.map((desc) => {
    var descList = document.createElement("li");
    descList.innerHTML = desc;
    resultDesc.appendChild(descList);
    descList.classList.add("descList");
  });

  // 잘 맞는 유형과 잘 맞지 않는 유형
  const best = document.querySelector(".best");
  var bestImg = document.createElement("img");
  var bestImgURL = "img/image-" + resultList[point].bestType.id + ".png";
  bestImg.src = bestImgURL;
  best.appendChild(bestImg);
  var bestName = document.createElement("p");
  bestName.innerHTML = resultList[point].bestType.type;
  bestName.classList.add("typeResName");
  best.appendChild(bestName);

  const bad = document.querySelector(".bad");
  var badImg = document.createElement("img");
  var badImgURL = "img/image-" + resultList[point].badType.id + ".png";
  badImg.src = badImgURL;
  bad.appendChild(badImg);
  var badName = document.createElement("p");
  badName.innerHTML = resultList[point].badType.type;
  badName.classList.add("typeResName");
  bad.appendChild(badName);
}

function goResult() {
  qna.style.WebkitAnimation = "fadeOut 1s";
  qna.style.animation = "fadeOut 1s";
  setTimeout(() => {
    result.style.WebkitAnimation = "fadeIn 1s";
    result.style.animation = "fadeIn 1s";
    setTimeout(() => {
      qna.style.display = "none";
      result.style.display = "block";
    }, 450);
  });
  setResult();
}

function addAnswer(answerTxt, qnaIdx, idx) {
  var answerBox = document.querySelector(".answerBox");
  var answer = document.createElement("button");
  answer.classList.add("answerList");
  answerBox.appendChild(answer);
  answer.innerHTML = answerTxt;

  answer.addEventListener(
    "click",
    function () {
      var children = document.querySelectorAll(".answerList");
      for (let i = 0; i < children.length; i++) {
        children[i].disabled = true;
      }
      setTimeout(() => {
        var target = qnaList[qnaIdx].a[idx].type;
        for (let j = 0; j < target.length; j++) {
          select[target[j]] += 1;
        }
        for (let i = 0; i < children.length; i++) {
          children[i].style.display = "none";
        }
        goNext(++qnaIdx);
      }, 200);
    },
    false
  );
}

function goNext(qnaIdx) {
  if (qnaIdx === endPoint) {
    goResult();
    return;
  }
  var qna = document.querySelector(".qnaBox");
  qna.innerHTML = qnaList[qnaIdx].q;
  for (let i in qnaList[qnaIdx].a) {
    addAnswer(qnaList[qnaIdx].a[i].answer, qnaIdx, i);
  }
  var status = document.querySelector(".statusBar");
  status.style.width = (100 / endPoint) * (qnaIdx + 1) + "%";
}

function begin() {
  main.style.display = "none";
  qna.style.display = "block";
  let qnaIdx = 0;
  goNext(qnaIdx);
}
