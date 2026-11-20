export interface QuizQuestion {
  id: number;
  question: string;
  romaji?: string;
  options: string[];
  answer: number;
  explanation: string;
  type: "kanji" | "vocab" | "grammar";
}

export interface ExamInfo {
  id: string;
  title: string;
  course: string;
  durationMinutes: number;
  totalQuestions: number;
  description: string;
  questions: QuizQuestion[];
}

export const EXAMS_DATA: ExamInfo[] = [
  {
    id: "jpd113-midterm",
    title: "Kiểm tra giữa kỳ JPD113 (Bài 1 - 2)",
    course: "JPD113",
    durationMinutes: 25,
    totalQuestions: 10,
    description: "Đánh giá kiến thức Bảng chữ cái, Chào hỏi, Nghề nghiệp và Đồ vật hàng ngày.",
    questions: [
      {
        id: 1,
        question: "Chữ Hán 「私」 có âm Hán Việt là gì?",
        options: ["NHẬT", "TƯ", "BẢN", "NHÂN"],
        answer: 1,
        explanation: "「私」 có âm Hán Việt là TƯ, nghĩa là 'tôi'.",
        type: "kanji"
      },
      {
        id: 2,
        question: "Điền trợ từ thích hợp: わたし ____ パクです。",
        options: ["を", "に", "は", "で"],
        answer: 2,
        explanation: "Chủ ngữ được đánh dấu bằng trợ từ は (đọc là wa).",
        type: "grammar"
      },
      {
        id: 3,
        question: "Từ nào sau đây có nghĩa là 'Nhật Bản'?",
        options: ["ちゅうごく", "にほん", "かんこく", "ベトナム"],
        answer: 1,
        explanation: "にほん (日本) nghĩa là Nhật Bản.",
        type: "vocab"
      },
      {
        id: 4,
        question: "Chữ Hán 「本」 đọc theo kunyomi là gì?",
        options: ["ひと", "もと", "おおきい", "まなぶ"],
        answer: 1,
        explanation: "「本」 kunyomi là もと, onyomi là ホン.",
        type: "kanji"
      },
      {
        id: 5,
        question: "Câu nào dùng để chào khi lần đầu gặp mặt?",
        options: ["さようなら", "ありがとうございます", "はじめまして", "おやすみなさい"],
        answer: 2,
        explanation: "はじめまして dùng khi lần đầu gặp ai đó.",
        type: "vocab"
      },
      {
        id: 6,
        question: "Chọn dạng phủ định của: 「がくせい です」",
        options: ["がくせい でした", "がくせい じゃありません", "がくせい ですか", "がくせい ではありませんでした"],
        answer: 1,
        explanation: "Phủ định thì hiện tại của です là じゃありません (hoặc ではありません).",
        type: "grammar"
      },
      {
        id: 7,
        question: "Chữ 「学校」 có nghĩa là gì?",
        options: ["Bệnh viện", "Trường học", "Ngân hàng", "Công ty"],
        answer: 1,
        explanation: "学校 (がっこう) nghĩa là Trường học.",
        type: "vocab"
      },
      {
        id: 8,
        question: "Chữ Hán 「人」 trong 「ベトナム人」 đọc là gì?",
        options: ["ひと", "にん", "じん", "り"],
        answer: 2,
        explanation: "Hậu tố chỉ người nước nào đọc là じん (ví dụ: ベトナムじん).",
        type: "kanji"
      },
      {
        id: 9,
        question: "Điền vào chỗ trống: これは だれの ほん ____。",
        options: ["ね", "よ", "ですか", "の"],
        answer: 2,
        explanation: "Câu hỏi kết thúc bằng trợ từ nghi vấn か (ですか).",
        type: "grammar"
      },
      {
        id: 10,
        question: "Cách đọc katakana của từ 'America' (nước Mỹ) là:",
        options: ["イギリス", "アメリカ", "フランス", "ドイツ"],
        answer: 1,
        explanation: "アメリカ (amerika) là nước Mỹ.",
        type: "vocab"
      }
    ]
  },
  {
    id: "jpd123-test",
    title: "Kiểm tra tổng hợp JPD123 (Bài 4 - 7)",
    course: "JPD123",
    durationMinutes: 30,
    totalQuestions: 8,
    description: "Đánh giá kiến thức về Di chuyển, Ăn uống, Cho nhận và Tính từ.",
    questions: [
      {
        id: 1,
        question: "Điền trợ từ: とうきょう ____ いきます。",
        options: ["へ", "を", "で", "が"],
        answer: 0,
        explanation: "Chỉ hướng di chuyển dùng trợ từ へ (đọc là e).",
        type: "grammar"
      },
      {
        id: 2,
        question: "Điền trợ từ: バス ____ がっこうへ いきます。",
        options: ["に", "で", "を", "へ"],
        answer: 1,
        explanation: "Chỉ phương tiện di chuyển dùng trợ từ で.",
        type: "grammar"
      },
      {
        id: 3,
        question: "Phủ định của tính từ đuôi い: 「たかい」 (đắt)",
        options: ["たかいくない", "たかくない", "たかじゃない", "たかくありませんでした"],
        answer: 1,
        explanation: "Tính từ đuôi い đổi đuôi い thành くない -> たかくない.",
        type: "grammar"
      },
      {
        id: 4,
        question: "Chữ Hán 「行」 trong 「行きます」 đọc là gì?",
        options: ["い", "き", "かえ", "の"],
        answer: 0,
        explanation: "行きます đọc là いきます.",
        type: "kanji"
      },
      {
        id: 5,
        question: "Rủ rê người khác cùng ăn trưa: 「いっしょに ひるごはんを ____。」",
        options: ["たべます", "たべました", "たべませんか", "たべましょうか"],
        answer: 2,
        explanation: "Lời mời lịch sự dùng ～ませんか.",
        type: "grammar"
      },
      {
        id: 6,
        question: "Chữ Hán 「食」 có âm Hán Việt là:",
        options: ["ẨM", "THỰC", "NGUYÊN", "KHÍ"],
        answer: 1,
        explanation: "「食」 có âm Hán Việt là THỰC (ăn).",
        type: "kanji"
      },
      {
        id: 7,
        question: "Tính từ nào sau đây là tính từ đuôi な?",
        options: ["おもしろい", "あたらしい", "しずか", "ちいさい"],
        answer: 2,
        explanation: "しずか (yên tĩnh) là tính từ đuôi な (しずかな).",
        type: "vocab"
      },
      {
        id: 8,
        question: "Hôm qua thời tiết đã rất nóng: 「きのうは とても ____。」",
        options: ["あついです", "あつかったです", "あつくないです", "あつかったです"],
        answer: 1,
        explanation: "Quá khứ khẳng định của tính từ đuôi い: bỏ い thêm かったです -> あつかったです.",
        type: "grammar"
      }
    ]
  }
];
