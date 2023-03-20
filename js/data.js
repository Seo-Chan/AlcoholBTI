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
    q: "3. 퇴근 후 갑자기 술이 땡기는 어느 날..<br/> 누구와 술을 마실까?",
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
    q: "10. 오랜만에 만난 친구와의 술자리.<br/>요즘 일이 힘들다며 퇴사를 고민하고 있다고 한다",
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

const resultList = [
  {
    name: "뚝심있는 <막걸리>",
    desc: [
      "감정의 기복이 심하지 않으며 느긋하게 흘러가는 삶을 즐기는 구수한 막걸리같은 매력을 가진 사람이에요.",
      "활발하진 않지만 나긋나긋하게 치고 들어오는 드립으로 어딜가든 미친 존재감을 뽐내는 스타일이에요.",
      "유머 감각도 뛰어나 주변 사람에게 인기가 많은 마당발이에요.",
      "친구가 갑자기 술자리에 불러내도 음식 호불호가 없어요. 술자리 메뉴는 친구들이 고르는 음식을 따라가는 편이랍니다.",
      "어려운 일이 닥쳐와도 어떻게든 되겠지~ 라는 마인드로 버텨내요.",
    ],
  },
  {
    name: "속 깊은 <와인>",
    desc: [
      "숙성된 와인처럼 속이 깊고 섬세한 사람이에요.",
      "공감능력이 좋아 주변사람들의 고민상담 전문이지만 정작 본인의 속마음은 잘 얘기하지 않는 편이에요.",
      "귀찮음이 많아 하루종일 누워있고 싶지만 막상 술자리에 나가면 즐겁게 놀아요. 집에 가면 연락두절이 되어버리니 연락은 기다리지 않는 것이 좋아요.",
      "시끌시끌한 곳은 딱 질색! 잔잔한 재즈가 흘러나오는 곳의 와인바가 제격이에요.",
    ],
  },
  {
    name: "의리파 <소주>",
    desc: [
      "내 사람이다 싶으면 뭐든 챙겨주고 싶은 당신! 새로운 사람들과의 만남을 즐기고 관계를 소중하게 여기는 당신은 어느 안주와도 찰떡궁합인 소주와 어울려요.",
      "왁자지껄한 술자리를 좋아하고 어색한 자리에서는 분위기를 띄우기 위해 먼저 말을 거는 편이에요.",
      "꼼꼼하게 계획을 세우고 실행하는 걸 좋아하는데 그 계획이 틀어지면 스트레스를 받아요.",
    ],
  },
  {
    name: "끼가 넘치는 재주꾼 <맥주>",
    desc: [
      "낙천적이며 통통 튀는 성격의 당신! 톡쏘는 맥주와 잘 어울려요.",
      "주말마다 약속이 있고 친구들이랑 수다떠는걸 좋아하는 편이에요. 새로운 모임이나 환경에 적응이 빠르고 어느새 자신도 모르게 모임을 주도하게 되는 스타일이에요.",
      "모임도 좋지만 혼자만의 시간도 필요한 편이에요.",
      "약속에 나가기 싫을 때도 종종 있지만 나만 빼고 즐거운 상황은 상상하고 싶지 않아요!",
      "감정 기복이 심한 편이라 갑자기 신났다가 슬퍼지기도 해요.",
      "일을 크게 만들어놓고 후회할 때가 많아요. 하지만 회복이 빠른편!",
    ],
  },
  {
    name: "다채로운 <칵테일>",
    desc: [
      "때론 상큼한, 때론 달달한 칵테일처럼 다양한 매력을 가진 당신! 온화하며 상상력과 감수성이 풍부해요.",
      "상대방에 대한 배려가 많아 웬만하면 화를 내지 않지만 나만의 기준이 확실해서 선을 넘은 순간 칼같이 끊어버리는 스타일이에요.",
      "집 밖 일정은 미루고 미루다 한번에 몰아서 잡아버려요.",
      "나가기 귀찮지만 친한 친구들과 조용하고 분위기 좋은 맛집에서 가지는 도란도란 술자리는 즐거워요.",
      "평소엔 낯을 많이 가리지만 일할 때 만큼은 프로처럼! 친한 친구들에겐 애교만땅인 스타일이랍니다.",
    ],
  },
  {
    name: "어른의 맛 <위스키>",
    desc: [
      "배울점이 많은 어른스러운 스타일의 당신! 오래 숙성된, 참 어른의 술인 위스키가 잘 어울려요.",
      "과묵하고 조용해서 속을 알 수 없다는 이야기를 많이 듣고 가식도 뒷끝도 없는 편이에요.",
      "안정적이고 계획적인걸 좋아해서 약속 어기는 것을 싫어해요.",
      "공과사가 확실하고 일적으로나 사랑으로나 야망이 커, 크게 성공할 확률이 높고 리더십이 매우 뛰어나답니다.",
      "배울점이 많은 사람을 좋아해서 술자리에서도 진지한 얘기를 나누는 걸 좋아해요.",
    ],
  },
  {
    name: "아, 응애에요 <우유>",
    desc: [
      "술과는 거리가 먼 당신.. 술은 잘 못마시지만 새로운 사람들이랑 만나는 술자리가 너무 흥미롭고 신이나요! 술을 못마셔도 마치 술을 마신 것 처럼 놀 수 있으니 문제 없어요.",
      "모르는 사람이랑도 금방 친해질 수 있어요. 친구의 친구와 놀아도 오히려 좋아요.",
      "애교가 넘치고 붙임성이 매우 좋아 사교성이 매우 뛰어난 편이랍니다.",
      "궁금한 것을 참지 못해 호기심이 많고, 강아지같이 상대방에게 찰싹 달라붙는 것을 좋아하는 스타일이에요.",
      "공감능력이 뛰어나서 슬픈 얘기하는 친구가 있으면 같이 폭풍 눈물을 흘려줘요.",
      "성격이 급해서 뭐든지 빨리빨리지만 막상 귀찮으면 할 일을 미루고 미루다가 늦게서야 시작해요.",
    ],
  },
];
