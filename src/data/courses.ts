export interface CourseMeta {
  id: string;
  code: string;
  title: string;
  nameJp: string;
  description: string;
  color: string;
  kanjiLessons: { id: string; title: string; count: number }[];
  vocabLessons: { id: string; title: string; count: number }[];
  grammarLessons: { id: string; title: string; count: number }[];
  shadowingLessons: { id: string; title: string; topic: string }[];
}

export const COURSES: CourseMeta[] = [
  {
    id: "jpd113",
    code: "JPD113",
    title: "Japanese 1",
    nameJp: "初級１",
    description: "Nhập môn tiếng Nhật: Bảng chữ cái, chào hỏi, giới thiệu bản thân, trường học và mua sắm.",
    color: "var(--iro-1)",
    kanjiLessons: [
      { id: "jpd113-l1", title: "Giới thiệu bản thân và Trường học", count: 10 },
      { id: "jpd113-l2", title: "Mua sắm và Đồ vật hàng ngày", count: 10 },
      { id: "jpd113-l3", title: "Thời gian và Lịch trình sinh hoạt", count: 10 }
    ],
    vocabLessons: [
      { id: "jpd113-v1-1", title: "Bài 1 – Phần 1: Giới thiệu bản thân", count: 28 },
      { id: "jpd113-v1-2-1", title: "Bài 1 – Phần 2.1: Quốc tịch & Nghề nghiệp", count: 25 },
      { id: "jpd113-v1-2-2", title: "Bài 1 – Phần 2.2: Trường học & Khoa ngành", count: 22 },
      { id: "jpd113-v1-3", title: "Bài 1 – Phần 3: Chào hỏi thường ngày", count: 18 },
      { id: "jpd113-v2-1", title: "Bài 2 – Phần 1: Đồ dùng học tập", count: 30 },
      { id: "jpd113-v2-2-1", title: "Bài 2 – Phần 2.1: Mua sắm & Giá cả", count: 24 },
      { id: "jpd113-v2-2-2", title: "Bài 2 – Phần 2.2: Nơi chốn & Địa điểm", count: 22 },
      { id: "jpd113-v2-3", title: "Bài 2 – Phần 3: Tiền tệ & Số đếm", count: 32 },
      { id: "jpd113-v3-1", title: "Bài 3 – Phần 1: Thời gian & Giờ giấc", count: 26 },
      { id: "jpd113-v3-2", title: "Bài 3 – Phần 2: Thứ ngày & Tháng trong năm", count: 28 },
      { id: "jpd113-v3-3", title: "Bài 3 – Phần 3: Sinh hoạt hàng ngày", count: 25 }
    ],
    grammarLessons: [
      { id: "jpd113-g1-1", title: "Bài 1 – Phần 1: N1 は N2 です", count: 3 },
      { id: "jpd113-g1-2", title: "Bài 1 – Phần 2: Câu hỏi nghi vấn か", count: 3 },
      { id: "jpd113-g1-3", title: "Bài 1 – Phần 3: Trợ từ の và も", count: 3 },
      { id: "jpd113-g2-1", title: "Bài 2 – Phần 1: Chỉ định từ これ・それ・あれ", count: 3 },
      { id: "jpd113-g2-2", title: "Bài 2 – Phần 2: この・その・あの N", count: 3 },
      { id: "jpd113-g2-3", title: "Bài 2 – Phần 3: ここ・そこ・あそこ", count: 4 },
      { id: "jpd113-g3-1", title: "Bài 3 – Phần 1: Thời gian に & Động từ ます", count: 3 },
      { id: "jpd113-g3-2", title: "Bài 3 – Phần 2: から・まで (từ... đến...)", count: 3 },
      { id: "jpd113-g3-3", title: "Bài 3 – Phần 3: Động từ quá khứ ました", count: 4 }
    ],
    shadowingLessons: [
      { id: "jpd113-s1", title: "Shadowing 1", topic: "Chào hỏi và làm quen bạn mới" },
      { id: "jpd113-s2", title: "Shadowing 2", topic: "Hỏi giá và mua sắm tại cửa hàng tiện lợi" },
      { id: "jpd113-s3", title: "Shadowing 3", topic: "Hẹn giờ và lịch trình học tập" }
    ]
  },
  {
    id: "jpd123",
    code: "JPD123",
    title: "Japanese 2",
    nameJp: "初級２",
    description: "Nâng cao năng lực giao tiếp: Phương tiện đi lại, ăn uống, sở thích, tính từ và quá khứ.",
    color: "var(--iro-2)",
    kanjiLessons: [
      { id: "jpd123-l4", title: "Di chuyển và Phương tiện giao thông", count: 10 },
      { id: "jpd123-l5", title: "Ăn uống và Ẩm thực Nhật Bản", count: 10 },
      { id: "jpd123-l6", title: "Công cụ, Ngôn ngữ và Quà tặng", count: 10 },
      { id: "jpd123-l7", title: "Tính từ miêu tả và Cảm xúc", count: 10 }
    ],
    vocabLessons: [
      { id: "jpd123-v4-1", title: "Bài 4 – Phần 1: Đi đâu, Đến đâu", count: 20 },
      { id: "jpd123-v4-2", title: "Bài 4 – Phần 2: Phương tiện giao thông", count: 26 },
      { id: "jpd123-v4-3", title: "Bài 4 – Phần 3: Đi cùng ai và Ngày sinh", count: 22 },
      { id: "jpd123-v5-1", title: "Bài 5 – Phần 1: Món ăn & Đồ uống", count: 24 },
      { id: "jpd123-v5-2", title: "Bài 5 – Phần 2: Bữa ăn & Địa điểm ăn uống", count: 20 },
      { id: "jpd123-v5-3", title: "Bài 5 – Phần 3: Rủ rê cùng làm gì", count: 16 },
      { id: "jpd123-v6-1", title: "Bài 6 – Phần 1: Dụng cụ & Phương tiện", count: 24 },
      { id: "jpd123-v6-2", title: "Bài 6 – Phần 2: Cho tặng & Nhận", count: 22 },
      { id: "jpd123-v6-3", title: "Bài 6 – Phần 3: Đã làm gì rồi", count: 14 },
      { id: "jpd123-v7-1", title: "Bài 7 – Phần 1: Tính từ đuôi い", count: 22 },
      { id: "jpd123-v7-2", title: "Bài 7 – Phần 2: Tính từ đuôi な", count: 28 },
      { id: "jpd123-v7-3", title: "Bài 7 – Phần 3: Cảm nhận & Đánh giá", count: 18 }
    ],
    grammarLessons: [
      { id: "jpd123-g4-1", title: "Bài 4 – Phần 1: へ行きます・来ます・帰ります", count: 3 },
      { id: "jpd123-g4-2", title: "Bài 4 – Phần 2: で đi bằng phương tiện gì", count: 4 },
      { id: "jpd123-g4-3", title: "Bài 4 – Phần 3: と đi cùng với ai", count: 3 },
      { id: "jpd123-g5-1", title: "Bài 5 – Phần 1: を ăn/uống tân ngữ", count: 3 },
      { id: "jpd123-g5-2", title: "Bài 5 – Phần 2: で hành động tại địa điểm", count: 3 },
      { id: "jpd123-g5-3", title: "Bài 5 – Phần 3: ～ませんか・～ましょう", count: 3 },
      { id: "jpd123-g6-1", title: "Bài 6 – Phần 1: で làm bằng công cụ", count: 3 },
      { id: "jpd123-g6-2", title: "Bài 6 – Phần 2: あげます・もらいます", count: 3 },
      { id: "jpd123-g6-3", title: "Bài 6 – Phần 3: もう～ました", count: 3 },
      { id: "jpd123-g7-1", title: "Bài 7 – Phần 1: Tính từ bổ nghĩa danh từ", count: 3 },
      { id: "jpd123-g7-2", title: "Bài 7 – Phần 2: Phủ định của tính từ", count: 3 },
      { id: "jpd123-g7-3", title: "Bài 7 – Phần 3: So sánh hơn và nhất", count: 3 }
    ],
    shadowingLessons: [
      { id: "jpd123-s4", title: "Shadowing 4", topic: "Hỏi đường và chỉ dẫn giao thông" },
      { id: "jpd123-s5", title: "Shadowing 5", topic: "Gọi món tại nhà hàng Nhật" },
      { id: "jpd123-s6", title: "Shadowing 6", topic: "Tặng quà và bày tỏ lòng cảm ơn" },
      { id: "jpd123-s7", title: "Shadowing 7", topic: "Kể về chuyến du lịch và thời tiết" }
    ]
  },
  {
    id: "jpd133",
    code: "JPD133",
    title: "Japanese 3",
    nameJp: "初級３",
    description: "Hoàn thiện trình độ sơ cấp N5: Sở thích, năng lực, tồn tại có/ở đâu, số lượng và thời lượng.",
    color: "var(--iro-3)",
    kanjiLessons: [
      { id: "jpd133-l8", title: "Sở thích và Khả năng bản thân", count: 11 },
      { id: "jpd133-l9", title: "Tồn tại người và Sự vật (あります・います)", count: 12 },
      { id: "jpd133-l10", title: "Số lượng, Đơn vị đếm và Thời lượng", count: 12 },
      { id: "jpd133-l11", title: "Thời tiết, Mùa và So sánh đối chiếu", count: 12 }
    ],
    vocabLessons: [
      { id: "jpd133-v8-1", title: "Bài 8 – Phần 1: Sở thích & Kỹ năng", count: 30 },
      { id: "jpd133-v8-2", title: "Bài 8 – Phần 2: Môn thể thao & Nhạc cụ", count: 24 },
      { id: "jpd133-v8-3", title: "Bài 8 – Phần 3: Thể hiện lý do から", count: 16 },
      { id: "jpd133-v9-1", title: "Bài 9 – Phần 1: Vị trí & Phương hướng", count: 32 },
      { id: "jpd133-v9-2", title: "Bài 9 – Phần 2: Đồ đạc trong phòng", count: 15 },
      { id: "jpd133-v9-3", title: "Bài 9 – Phần 3: Thành phố & Công viên", count: 16 },
      { id: "jpd133-v10-1", title: "Bài 10 – Phần 1: Đơn vị đếm cái, chiếc, con", count: 20 },
      { id: "jpd133-v10-2", title: "Bài 10 – Phần 2: Thời lượng & Tần suất", count: 18 },
      { id: "jpd133-v10-3", title: "Bài 10 – Phần 3: Giá cước & Vận chuyển", count: 18 },
      { id: "jpd133-v11-1", title: "Bài 11 – Phần 1: Khí hậu & Bốn mùa", count: 20 },
      { id: "jpd133-v11-2", title: "Bài 11 – Phần 2: Thiên nhiên & Phong cảnh", count: 15 },
      { id: "jpd133-v11-3", title: "Bài 11 – Phần 3: Lễ hội & Văn hoá Nhật", count: 10 }
    ],
    grammarLessons: [
      { id: "jpd133-g8-1", title: "Bài 8 – Phần 1: が 好き・嫌い・上手・下手", count: 3 },
      { id: "jpd133-g8-2", title: "Bài 8 – Phần 2: が あります・わかります", count: 3 },
      { id: "jpd133-g8-3", title: "Bài 8 – Phần 3: Câu biểu thị nguyên nhân から", count: 3 },
      { id: "jpd133-g9-1", title: "Bài 9 – Phần 1: に あります・います", count: 3 },
      { id: "jpd133-g9-2", title: "Bài 9 – Phần 2: Danh từ chỉ vị trí (trên, dưới, trong, ngoài)", count: 3 },
      { id: "jpd133-g9-3", title: "Bài 9 – Phần 3: や (liệt kê không đầy đủ)", count: 3 },
      { id: "jpd133-g10-1", title: "Bài 10 – Phần 1: Vị trí lượng từ trong câu", count: 3 },
      { id: "jpd133-g10-2", title: "Bài 10 – Phần 2: Khoảng thời gian に ~ lần", count: 3 },
      { id: "jpd133-g10-3", title: "Bài 10 – Phần 3: だけ (chỉ)", count: 3 },
      { id: "jpd133-g11-1", title: "Bài 11 – Phần 1: N1 は N2 より tính từ です", count: 3 },
      { id: "jpd133-g11-2", title: "Bài 11 – Phần 2: N1 と N2 と どちらが...", count: 3 },
      { id: "jpd133-g11-3", title: "Bài 11 – Phần 3: Trong số ~ cái nào nhất", count: 3 }
    ],
    shadowingLessons: [
      { id: "jpd133-s8", title: "Shadowing 8", topic: "Nói về sở thích và năng khiếu" },
      { id: "jpd133-s9", title: "Shadowing 9", topic: "Chỉ vị trí đồ đạc và nhờ tìm đồ" }
    ]
  }
];
