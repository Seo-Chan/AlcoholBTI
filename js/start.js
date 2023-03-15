const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const endPoint = 12;
const select = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function addAnswer(answerTxt, qnaIdx, idx) {
  var answerBox = document.querySelector(".answerBox");
  var answer = document.createElement("button");
  answer.classList.add("answerList");
  answerBox.appendChild(answer);
  answer.innerHTML = answerTxt;

  answer.addEventListener("click", function () {
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
  });
}

function goNext(qnaIdx) {
  var qna = document.querySelector(".qnaBox");
  qna.innerHTML = qnaList[qnaIdx].q;
  for (let i in qnaList[qnaIdx].a) {
    addAnswer(qnaList[qnaIdx].a[i].answer, qnaIdx, i);
  }
}

function begin() {
  main.style.display = "none";
  qna.style.display = "block";
  let qnaIdx = 0;
  goNext(qnaIdx);
}
