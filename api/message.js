// Vercel 서버리스 함수: 응원 문장 하나를 골라 이름과 함께 돌려준다.
const MESSAGES = [
  "{name}, 오늘도 여기까지 온 것만으로 충분히 잘하고 있어요.",
  "{name}의 작은 한 걸음이 내일의 큰 변화를 만들어요.",
  "{name}, 천천히 가도 괜찮아요. 멈추지만 않으면 돼요.",
  "{name}, 오늘 하루도 당신 편이 여기 있어요.",
  "{name}의 노력은 보이지 않아도 분명히 쌓이고 있어요.",
  "{name}, 힘들 땐 잠깐 쉬어 가도 괜찮아요.",
  "{name}, 어제보다 조금 나아졌다면 그걸로 멋져요.",
  "{name}의 웃음이 누군가에게는 큰 힘이 돼요.",
  "{name}, 실수해도 괜찮아요. 배우는 중이니까요.",
  "{name}, 지금의 고민도 언젠가 좋은 이야기가 될 거예요.",
  "{name}, 스스로를 믿어 주세요. 생각보다 훨씬 강해요.",
  "{name}의 오늘이 어제보다 조금 더 따뜻하길 바라요.",
  "{name}, 해낼 수 있어요. 이미 많은 걸 해냈잖아요.",
  "{name}, 오늘 할 수 있는 만큼만 해도 정말 훌륭해요.",
  "{name}, 당신은 존재만으로도 소중한 사람이에요.",
];

module.exports = (req, res) => {
  const raw = typeof req.query?.name === "string" ? req.query.name : "";
  const name = raw.trim().slice(0, 20) || "여러분";
  const template = MESSAGES[Math.floor(Math.random() * MESSAGES.length)];

  res.setHeader("Cache-Control", "no-store");
  res.status(200).json({ name, message: template.replace("{name}", name) });
};
