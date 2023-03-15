const qnaList = [
  {
    q: "1. 오랜만의 동창회를 내가 주최하게 되었다",
    a: [
      {
        answer: "좋아!!! 아는 사람 다 불러!! 뒤집어지게 놀아보자구!!",
        type: [0, 2, 3, 6],
      },
      {
        answer:
          "오랜만에 만나는거니까 조용한 곳에서 분위기 있게 마시면서 대화를 나눠보자..^^",
        type: [1, 4, 5],
      },
    ],
  },
  {
    q: "2. 나는 술을 얼마나 자주 마실까?",
    a: [
      {
        answer: "거의 안마신다",
        type: [6],
      },
      {
        answer: "주에 1번",
        type: [1, 4, 5],
      },
      {
        answer: "주에 3번 이상",
        type: [0, 3],
      },
      {
        answer: "매일 매일",
        type: [2],
      },
    ],
  },
  {
    q: "3. 퇴근 후 갑자기 술이 땡기는 어느 날.. 누구와 술을 마실까?",
    a: [
      { answer: "혼자 집에서 편안하게 마신다", type: [1, 4, 5] },
      { answer: "소수의 친한 친구들과 마신다", type: [6] },
      {
        answer: "시간이 되는 친구들은 다 모아서 왁자지껄하게 마신다",
        type: [0, 2, 3],
      },
    ],
  },
  {
    q: "4. 술자리에 갔을 때 내가 선호하는 자리는?",
    a: [
      { answer: "한 가운데", type: [0, 2, 3, 6] },
      {
        answer: "벽과 가까운 구석진 곳",
        type: [1, 4, 5],
      },
    ],
  },
  {
    q: "5. 술자리에서 마음에 드는 이성을 발견했다!",
    a: [
      {
        answer:
          "옆자리에 가서 앉거나 술을 따라주는 등 적극적인 호감표시를 한다",
        type: [2, 3, 6],
      },
      {
        answer:
          "다같이 어울려 놀고나서 술자리가 끝난 후 지인에게 슬쩍 소개 시켜달라고 한다",
        type: [0, 5],
      },
      {
        answer: "다가갈 용기가 나지 않아 눈물 머금고 포기한다",
        type: [1, 4],
      },
    ],
  },

  {
    q: "6. 안주를 시킬 때 나는",
    a: [
      { answer: "처음 먹어보는 새로운 안주를 시킨다", type: [3, 4, 6] },
      {
        answer: "자주 먹어본 아는 맛을 시킨다",
        type: [0, 1, 2, 5],
      },
    ],
  },
  {
    q: "7. 내가 선호하는 술자리 장소는?",
    a: [
      { answer: '"집 밖은 위험해!"우리집', type: [4, 5] },
      { answer: "웨이팅이 길어도 무조건 맛집!", type: [2, 1] },
      {
        answer: "아무데나 상관없음",
        type: [0, 3, 6],
      },
    ],
  },
  {
    q: "8. 생일파티를 위해 친구들과 모여서 왁자지껄 술을 마시던 도중, 갑자기 매장 전체에 생일송이 울려퍼지며 친구가 케이크를 들고 왔다",
    a: [
      {
        answer:
          '"뭐야 다들 나 쳐다보고 있잖아? 너무 부끄러워 ㅜㅜ" 얼굴을 가린상태로 민망하게 생일초를 끈다',
        type: [1, 4, 5],
      },
      {
        answer:
          '"뭐야 너무 감동이잖아!! 고마워 얘들아!!" 신나게 리듬을 타며 생일초를 끈다',
        type: [0, 2, 3, 6],
      },
    ],
  },
  {
    q: "9. 갑자기 친구로부터 내일 즉흥여행을 떠나자는 연락이 왔다",
    a: [
      {
        answer:
          '"즉흥 여행 너무 좋아! 여행은 끌리는대로 떠나는거지!" 흔쾌히 승낙한다',
        type: [0, 4, 6],
      },
      {
        answer:
          '"무계획이라구?? 불안한데ㅠㅠ" 일단 승낙 후 잠들기 전까지 급하게 계획을 짠다',
        type: [1, 2, 3],
      },
      {
        answer: "이런 무계획 여행 딱 질색.. 일이 있다고 둘러대며 거절한다",
        type: [5],
      },
    ],
  },
  {
    q: "10. 오랜만에 만난 친구와의 술자리. 요즘 일이 힘들다며 퇴사를 고민하고 있다고 한다",
    a: [
      {
        answer: "친구의 힘듦을 공감해주며 응원 해주는 편이다",
        type: [1, 2, 4, 6],
      },
      {
        answer: "현실적인 도움을 주고자 하는 편이다",
        type: [3, 5],
      },
      { answer: "열심히 듣고는 있지만 딴생각 중", type: [0] },
    ],
  },
  {
    q: "11. 물이 셀프인 음식점. 친구들의 물까지 한꺼번에 들고 가려고 한다",
    a: [
      {
        answer:
          '"갑자기 누군가랑 부딪혀서 컵을 다 떨어뜨리면 어쩌지?" 조심조심 걸어간다',
        type: [3, 4, 6],
      },
      {
        answer: "메뉴 뭐먹을지 고민하며 걸어간다",
        type: [0, 1, 2, 5],
      },
    ],
  },
  {
    q: "12. 광란의 파티 후, 아침 해가 뜨는 것을 보며 집에 돌아왔다",
    a: [
      {
        answer:
          '"다음 파티는 언제로 잡지?!" 곧바로 다음 약속 일정을 계획하며 잠에 든다',
        type: [0, 2, 3, 6],
      },
      {
        answer:
          "좋은 파티였다.. 즐거웠지만 엄청난 체력 소모로 인해 당분간은 집에서 충전시간을 갖는다",
        type: [1, 4, 5],
      },
    ],
  },
];
