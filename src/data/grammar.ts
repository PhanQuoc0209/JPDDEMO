// All Grammar patterns across all courses & lessons
export interface GrammarItem {
  id: string;
  pattern: string;
  meaning: string;
  course: string;
  lesson: string;
}

export interface GrammarLesson {
  lesson: string;
  course: string;
  title: string;
  count: number;
  items: GrammarItem[];
}

export const GRAMMAR_DATA: Record<string, GrammarLesson> = {
  "jpd113-g1-1": {
    "lesson": "jpd113-g1-1",
    "course": "jpd113",
    "title": "Bài 1 – Phần 1",
    "count": 3,
    "items": [
      {
        "id": "38",
        "pattern": "N1 は N2 です。",
        "meaning": "Câu khẳng định N1 là N2",
        "course": "jpd113",
        "lesson": "jpd113-g1-1"
      },
      {
        "id": "39",
        "pattern": "N1 は ～ の N2 です。",
        "meaning": "Câu khẳng định mở rộng N1 là N2 của / thuộc về ~",
        "course": "jpd113",
        "lesson": "jpd113-g1-1"
      },
      {
        "id": "40",
        "pattern": "N1 は N2 じゃありません。 N1 は N2 ではありません。",
        "meaning": "Câu phủ định",
        "course": "jpd113",
        "lesson": "jpd113-g1-1"
      }
    ]
  },
  "jpd113-g1-2": {
    "lesson": "jpd113-g1-2",
    "course": "jpd113",
    "title": "Bài 1 – Phần 2",
    "count": 3,
    "items": [
      {
        "id": "41",
        "pattern": "N は Từ hỏi ですか。",
        "meaning": "Câu hỏi có từ hỏi",
        "course": "jpd113",
        "lesson": "jpd113-g1-2"
      },
      {
        "id": "42",
        "pattern": "N は ?。",
        "meaning": "Câu hỏi rút gọn",
        "course": "jpd113",
        "lesson": "jpd113-g1-2"
      },
      {
        "id": "43",
        "pattern": "N1 は N2 ですか。",
        "meaning": "Câu hỏi Yes / No",
        "course": "jpd113",
        "lesson": "jpd113-g1-2"
      }
    ]
  },
  "jpd113-g1-3": {
    "lesson": "jpd113-g1-3",
    "course": "jpd113",
    "title": "Bài 1 – Phần 3",
    "count": 3,
    "items": [
      {
        "id": "44",
        "pattern": "N1 の ～ は N2 です。",
        "meaning": "Câu khẳng định mở rộng ~ của N1 là N2",
        "course": "jpd113",
        "lesson": "jpd113-g1-3"
      },
      {
        "id": "45",
        "pattern": "N1 も N2 です。",
        "meaning": "Câu khẳng định N1 cũng là N2",
        "course": "jpd113",
        "lesson": "jpd113-g1-3"
      },
      {
        "id": "46",
        "pattern": "N1 と N2",
        "meaning": "N1 và N2 (liên kết danh từ)",
        "course": "jpd113",
        "lesson": "jpd113-g1-3"
      }
    ]
  },
  "jpd113-g2-1": {
    "lesson": "jpd113-g2-1",
    "course": "jpd113",
    "title": "Bài 2 – Phần 1",
    "count": 3,
    "items": [
      {
        "id": "47",
        "pattern": "～は どこですか。",
        "meaning": "~ ở đâu?",
        "course": "jpd113",
        "lesson": "jpd113-g2-1"
      },
      {
        "id": "48",
        "pattern": "～は どちらですか。",
        "meaning": "~ ở đâu? (lịch sự)",
        "course": "jpd113",
        "lesson": "jpd113-g2-1"
      },
      {
        "id": "49",
        "pattern": "～は なんかいですか。",
        "meaning": "~ ở tầng mấy?",
        "course": "jpd113",
        "lesson": "jpd113-g2-1"
      }
    ]
  },
  "jpd113-g2-2": {
    "lesson": "jpd113-g2-2",
    "course": "jpd113",
    "title": "Bài 2 – Phần 2",
    "count": 2,
    "items": [
      {
        "id": "50",
        "pattern": "N を ください。",
        "meaning": "Hãy cho tôi N",
        "course": "jpd113",
        "lesson": "jpd113-g2-2"
      },
      {
        "id": "51",
        "pattern": "～は いくらですか。",
        "meaning": "Bao nhiêu tiền",
        "course": "jpd113",
        "lesson": "jpd113-g2-2"
      }
    ]
  },
  "jpd113-g2-3": {
    "lesson": "jpd113-g2-3",
    "course": "jpd113",
    "title": "Bài 2 – Phần 3",
    "count": 5,
    "items": [
      {
        "id": "52",
        "pattern": "N を（～つ）ください。",
        "meaning": "Hãy cho tôi N",
        "course": "jpd113",
        "lesson": "jpd113-g2-3"
      },
      {
        "id": "53",
        "pattern": "～は なんの Nですか。",
        "meaning": "N là loại gì",
        "course": "jpd113",
        "lesson": "jpd113-g2-3"
      },
      {
        "id": "54",
        "pattern": "～は どこの Nですか。",
        "meaning": "N của nước / hãng nào",
        "course": "jpd113",
        "lesson": "jpd113-g2-3"
      },
      {
        "id": "55",
        "pattern": "～は だれの Nですか。",
        "meaning": "N của ai",
        "course": "jpd113",
        "lesson": "jpd113-g2-3"
      },
      {
        "id": "56",
        "pattern": "「A」は ～ごで なんですか。",
        "meaning": "“A” trong tiếng ~ là gì",
        "course": "jpd113",
        "lesson": "jpd113-g2-3"
      }
    ]
  },
  "jpd113-g3-1": {
    "lesson": "jpd113-g3-1",
    "course": "jpd113",
    "title": "Bài 3 – Phần 1",
    "count": 3,
    "items": [
      {
        "id": "57",
        "pattern": "いま、なんじですか。",
        "meaning": "Hỏi giờ hiện tại",
        "course": "jpd113",
        "lesson": "jpd113-g3-1"
      },
      {
        "id": "58",
        "pattern": "N（giờ）からN（giờ）まで です。",
        "meaning": "Nói thời gian bắt đầu / kết thúc",
        "course": "jpd113",
        "lesson": "jpd113-g3-1"
      },
      {
        "id": "59",
        "pattern": "なんようびですか。",
        "meaning": "Hỏi thứ / ngày nghỉ",
        "course": "jpd113",
        "lesson": "jpd113-g3-1"
      }
    ]
  },
  "jpd113-g3-2": {
    "lesson": "jpd113-g3-2",
    "course": "jpd113",
    "title": "Bài 3 – Phần 2",
    "count": 3,
    "items": [
      {
        "id": "60",
        "pattern": "N（Vật／tân ngữ）を Vます",
        "meaning": "Hành động tác động lên đối tượng",
        "course": "jpd113",
        "lesson": "jpd113-g3-2"
      },
      {
        "id": "61",
        "pattern": "N（Địa điểm）へ いきます／きます／かえります",
        "meaning": "Đi / đến / về một địa điểm",
        "course": "jpd113",
        "lesson": "jpd113-g3-2"
      },
      {
        "id": "62",
        "pattern": "N（Địa điểm）で Vます",
        "meaning": "Hành động xảy ra tại địa điểm",
        "course": "jpd113",
        "lesson": "jpd113-g3-2"
      }
    ]
  },
  "jpd113-g3-3": {
    "lesson": "jpd113-g3-3",
    "course": "jpd113",
    "title": "Bài 3 – Phần 3",
    "count": 4,
    "items": [
      {
        "id": "63",
        "pattern": "N（giờ）に Vます",
        "meaning": "Hành động xảy ra vào thời điểm cụ thể",
        "course": "jpd113",
        "lesson": "jpd113-g3-3"
      },
      {
        "id": "64",
        "pattern": "N（Giờ／Thứ）から N（Giờ／Thứ）まで",
        "meaning": "Từ thời gian ~ đến thời gian ~",
        "course": "jpd113",
        "lesson": "jpd113-g3-3"
      },
      {
        "id": "65",
        "pattern": "N1 や N2 など",
        "meaning": "Liệt kê không đầy đủ",
        "course": "jpd113",
        "lesson": "jpd113-g3-3"
      },
      {
        "id": "66",
        "pattern": "なにも Vません。／ どこ（へ）も いきません。",
        "meaning": "Không làm gì / Không đi đâu (phủ định toàn bộ)",
        "course": "jpd113",
        "lesson": "jpd113-g3-3"
      }
    ]
  },
  "jpd123-g4-1": {
    "lesson": "jpd123-g4-1",
    "course": "jpd123",
    "title": "Bài 4 – Phần 1",
    "count": 4,
    "items": [
      {
        "id": "67",
        "pattern": "N1はN2のN3です",
        "meaning": "Dùng để nói vị trí, phương hướng, khu vực của một địa điểm so với một địa điểm lớn hơn.",
        "course": "jpd123",
        "lesson": "jpd123-g4-1"
      },
      {
        "id": "68",
        "pattern": "N1からN2までどのくらいですか",
        "meaning": "Dùng để hỏi khoảng thời gian hoặc khoảng cách từ địa điểm N1 đến N2.",
        "course": "jpd123",
        "lesson": "jpd123-g4-1"
      },
      {
        "id": "69",
        "pattern": "N1からN2までTime（くらい）です",
        "meaning": "Dùng để trả lời thời gian/khoảng cách cần thiết từ N1 đến N2.",
        "course": "jpd123",
        "lesson": "jpd123-g4-1"
      },
      {
        "id": "70",
        "pattern": "NでVます／来ます／帰ります",
        "meaning": "Trợ từ「で」đứng sau danh từ chỉ phương tiện giao thông, diễn tả đi bằng phương tiện gì.",
        "course": "jpd123",
        "lesson": "jpd123-g4-1"
      }
    ]
  },
  "jpd123-g4-2": {
    "lesson": "jpd123-g4-2",
    "course": "jpd123",
    "title": "Bài 4 – Phần 2",
    "count": 10,
    "items": [
      {
        "id": "71",
        "pattern": "NはAいです",
        "meaning": "Dùng tính từ đuôi い để miêu tả đặc điểm, tính chất.",
        "course": "jpd123",
        "lesson": "jpd123-g4-2"
      },
      {
        "id": "72",
        "pattern": "NはAくないです",
        "meaning": "Thể phủ định của tính từ đuôi い.",
        "course": "jpd123",
        "lesson": "jpd123-g4-2"
      },
      {
        "id": "73",
        "pattern": "NはAです（A: tính từ な）",
        "meaning": "Dùng tính từ đuôi な để miêu tả đặc điểm, tính chất (khi đứng cuối câu, bỏ な).",
        "course": "jpd123",
        "lesson": "jpd123-g4-2"
      },
      {
        "id": "74",
        "pattern": "NはAじゃありません（A: tính từ な）",
        "meaning": "Thể phủ định của tính từ đuôi な.",
        "course": "jpd123",
        "lesson": "jpd123-g4-2"
      },
      {
        "id": "75",
        "pattern": "Aな＋N",
        "meaning": "Tính từ な bổ nghĩa trực tiếp cho danh từ đứng sau, giữ nguyên な.",
        "course": "jpd123",
        "lesson": "jpd123-g4-2"
      },
      {
        "id": "76",
        "pattern": "Aい＋N",
        "meaning": "Tính từ い bổ nghĩa trực tiếp cho danh từ đứng sau, giữ nguyên hình thức từ điển.",
        "course": "jpd123",
        "lesson": "jpd123-g4-2"
      },
      {
        "id": "77",
        "pattern": "どんな＋N",
        "meaning": "Dùng để hỏi đặc điểm, tính chất của danh từ.",
        "course": "jpd123",
        "lesson": "jpd123-g4-2"
      },
      {
        "id": "78",
        "pattern": "N1にN2があります",
        "meaning": "Dùng để diễn tả ở đâu có gì.",
        "course": "jpd123",
        "lesson": "jpd123-g4-2"
      },
      {
        "id": "79",
        "pattern": "～そして～",
        "meaning": "「そして」dùng để nối hai câu bổ sung ý nghĩa cho nhau (thường cùng chiều tích cực hoặc tiêu cực).",
        "course": "jpd123",
        "lesson": "jpd123-g4-2"
      },
      {
        "id": "80",
        "pattern": "～が～",
        "meaning": "「が」dùng để nối hai vế mang ý đối lập.",
        "course": "jpd123",
        "lesson": "jpd123-g4-2"
      }
    ]
  },
  "jpd123-g4-3": {
    "lesson": "jpd123-g4-3",
    "course": "jpd123",
    "title": "Bài 4 – Phần 3",
    "count": 5,
    "items": [
      {
        "id": "81",
        "pattern": "～は［mùa/tháng］Aです",
        "meaning": "Dùng để miêu tả thời tiết, khí hậu theo mùa/tháng.",
        "course": "jpd123",
        "lesson": "jpd123-g4-3"
      },
      {
        "id": "82",
        "pattern": "とても＋A",
        "meaning": "「とても」mang nghĩa \\",
        "course": "jpd123",
        "lesson": "jpd123-g4-3"
      },
      {
        "id": "83",
        "pattern": "あまり＋Aくない",
        "meaning": "「あまり」đi với thể phủ định, mang nghĩa \\",
        "course": "jpd123",
        "lesson": "jpd123-g4-3"
      },
      {
        "id": "84",
        "pattern": "Nはどうですか",
        "meaning": "Dùng để hỏi cảm nhận hoặc đặc điểm về N.",
        "course": "jpd123",
        "lesson": "jpd123-g4-3"
      },
      {
        "id": "85",
        "pattern": "～ね",
        "meaning": "Trợ từ cuối câu thể hiện sự đồng cảm hoặc xác nhận cảm xúc với người nghe.",
        "course": "jpd123",
        "lesson": "jpd123-g4-3"
      }
    ]
  },
  "jpd123-g5-1": {
    "lesson": "jpd123-g5-1",
    "course": "jpd123",
    "title": "Bài 5 – Phần 1",
    "count": 5,
    "items": [
      {
        "id": "86",
        "pattern": "Vました",
        "meaning": "Thể quá khứ khẳng định của động từ.",
        "course": "jpd123",
        "lesson": "jpd123-g5-1"
      },
      {
        "id": "87",
        "pattern": "Vませんでした",
        "meaning": "Thể quá khứ phủ định của động từ.",
        "course": "jpd123",
        "lesson": "jpd123-g5-1"
      },
      {
        "id": "88",
        "pattern": "どこかへ行きましたか",
        "meaning": "Hỏi \\",
        "course": "jpd123",
        "lesson": "jpd123-g5-1"
      },
      {
        "id": "89",
        "pattern": "［人］とVます",
        "meaning": "Dùng 「と」 để diễn tả làm cùng ai.",
        "course": "jpd123",
        "lesson": "jpd123-g5-1"
      },
      {
        "id": "90",
        "pattern": "V1それからV2",
        "meaning": "Diễn tả thứ tự hành động.",
        "course": "jpd123",
        "lesson": "jpd123-g5-1"
      }
    ]
  },
  "jpd123-g5-2": {
    "lesson": "jpd123-g5-2",
    "course": "jpd123",
    "title": "Bài 5 – Phần 2",
    "count": 6,
    "items": [
      {
        "id": "91",
        "pattern": "Aいかったです",
        "meaning": "Thể quá khứ của tính từ đuôi い.",
        "course": "jpd123",
        "lesson": "jpd123-g5-2"
      },
      {
        "id": "92",
        "pattern": "Aいくなかったです",
        "meaning": "Thể phủ định quá khứ của tính từ đuôi い.",
        "course": "jpd123",
        "lesson": "jpd123-g5-2"
      },
      {
        "id": "93",
        "pattern": "Aなでした／Nでした",
        "meaning": "Thể quá khứ khẳng định của tính từ な và danh từ.",
        "course": "jpd123",
        "lesson": "jpd123-g5-2"
      },
      {
        "id": "94",
        "pattern": "Aなじゃありませんでした／Nじゃありませんでした",
        "meaning": "Thể phủ định quá khứ của tính từ な và danh từ.",
        "course": "jpd123",
        "lesson": "jpd123-g5-2"
      },
      {
        "id": "95",
        "pattern": "どうでしたか",
        "meaning": "Hỏi cảm nhận, đánh giá.",
        "course": "jpd123",
        "lesson": "jpd123-g5-2"
      },
      {
        "id": "96",
        "pattern": "どうして～か～から",
        "meaning": "Dùng để hỏi và trả lời lý do.",
        "course": "jpd123",
        "lesson": "jpd123-g5-2"
      }
    ]
  },
  "jpd123-g5-3": {
    "lesson": "jpd123-g5-3",
    "course": "jpd123",
    "title": "Bài 5 – Phần 3",
    "count": 4,
    "items": [
      {
        "id": "97",
        "pattern": "Nがほしいです",
        "meaning": "Dùng để diễn tả mong muốn có một đồ vật/sự vật nào đó.",
        "course": "jpd123",
        "lesson": "jpd123-g5-3"
      },
      {
        "id": "98",
        "pattern": "Nがすきです／きらいです",
        "meaning": "Dùng để diễn tả sở thích hoặc không thích điều gì.",
        "course": "jpd123",
        "lesson": "jpd123-g5-3"
      },
      {
        "id": "99",
        "pattern": "Vたいです",
        "meaning": "Dùng để diễn tả mong muốn thực hiện hành động nào đó.",
        "course": "jpd123",
        "lesson": "jpd123-g5-3"
      },
      {
        "id": "100",
        "pattern": "～へVますに行きます",
        "meaning": "Dùng để diễn tả đi đâu để làm gì.",
        "course": "jpd123",
        "lesson": "jpd123-g5-3"
      }
    ]
  },
  "jpd123-g6-1": {
    "lesson": "jpd123-g6-1",
    "course": "jpd123",
    "title": "Bài 6 – Phần 1",
    "count": 6,
    "items": [
      {
        "id": "101",
        "pattern": "Vませんか",
        "meaning": "Dùng để rủ rê, mời ai đó cùng làm việc gì một cách lịch sự.",
        "course": "jpd123",
        "lesson": "jpd123-g6-1"
      },
      {
        "id": "102",
        "pattern": "Vましょう",
        "meaning": "Dùng để đề nghị hoặc cùng nhau thực hiện hành động nào đó. Mang nghĩa \\",
        "course": "jpd123",
        "lesson": "jpd123-g6-1"
      },
      {
        "id": "103",
        "pattern": "～はちょっと…",
        "meaning": "Cách từ chối mềm mại, lịch sự khi được rủ rê hoặc đề nghị.",
        "course": "jpd123",
        "lesson": "jpd123-g6-1"
      },
      {
        "id": "104",
        "pattern": "Nがあります",
        "meaning": "Dùng để nói có sự kiện, lịch hẹn, kế hoạch...",
        "course": "jpd123",
        "lesson": "jpd123-g6-1"
      },
      {
        "id": "105",
        "pattern": "［địa điểm］でNがあります",
        "meaning": "Dùng để diễn tả có sự kiện diễn ra tại một địa điểm nào đó.",
        "course": "jpd123",
        "lesson": "jpd123-g6-1"
      },
      {
        "id": "106",
        "pattern": "～が（～まい）あります",
        "meaning": "Dùng để nói số lượng vật tồn tại. 「枚」là trợ số đếm cho vật mỏng như vé, giấy...",
        "course": "jpd123",
        "lesson": "jpd123-g6-1"
      }
    ]
  },
  "jpd123-g6-2": {
    "lesson": "jpd123-g6-2",
    "course": "jpd123",
    "title": "Bài 6 – Phần 2",
    "count": 4,
    "items": [
      {
        "id": "107",
        "pattern": "～で～がいちばんAです",
        "meaning": "Dùng để diễn tả so sánh nhất trong một phạm vi nào đó.",
        "course": "jpd123",
        "lesson": "jpd123-g6-2"
      },
      {
        "id": "108",
        "pattern": "～と～とどちらがAですか",
        "meaning": "Dùng để hỏi lựa chọn giữa hai đối tượng.",
        "course": "jpd123",
        "lesson": "jpd123-g6-2"
      },
      {
        "id": "109",
        "pattern": "～のほうがAです",
        "meaning": "Dùng để nói một đối tượng nổi trội hơn đối tượng còn lại trong so sánh hai bên.",
        "course": "jpd123",
        "lesson": "jpd123-g6-2"
      },
      {
        "id": "110",
        "pattern": "～は～よりAです",
        "meaning": "Dùng để diễn tả so sánh hơn giữa hai đối tượng.",
        "course": "jpd123",
        "lesson": "jpd123-g6-2"
      }
    ]
  },
  "jpd123-g6-3": {
    "lesson": "jpd123-g6-3",
    "course": "jpd123",
    "title": "Bài 6 – Phần 3",
    "count": 3,
    "items": [
      {
        "id": "111",
        "pattern": "もうVましたか",
        "meaning": "Dùng để hỏi kinh nghiệm hoặc hành động đã thực hiện chưa.",
        "course": "jpd123",
        "lesson": "jpd123-g6-3"
      },
      {
        "id": "112",
        "pattern": "～よ",
        "meaning": "Trợ từ cuối câu dùng để nhấn mạnh hoặc cung cấp thông tin mới cho người nghe.",
        "course": "jpd123",
        "lesson": "jpd123-g6-3"
      },
      {
        "id": "113",
        "pattern": "～ね",
        "meaning": "Dùng để xác nhận thông tin với người nghe hoặc tìm sự đồng tình.",
        "course": "jpd123",
        "lesson": "jpd123-g6-3"
      }
    ]
  },
  "jpd123-g7-1": {
    "lesson": "jpd123-g7-1",
    "course": "jpd123",
    "title": "Bài 7 – Phần 1",
    "count": 3,
    "items": [
      {
        "id": "114",
        "pattern": "～は～にあります",
        "meaning": "Dùng để nói vị trí tồn tại của đồ vật, địa điểm, sự vật.",
        "course": "jpd123",
        "lesson": "jpd123-g7-1"
      },
      {
        "id": "115",
        "pattern": "～は～にいます",
        "meaning": "Dùng để nói vị trí tồn tại của người hoặc động vật.",
        "course": "jpd123",
        "lesson": "jpd123-g7-1"
      },
      {
        "id": "116",
        "pattern": "～に～があります・います",
        "meaning": "Dùng để diễn tả ở đâu có cái gì / ai. 「あります」dùng cho đồ vật, 「います」dùng cho người và động vật.",
        "course": "jpd123",
        "lesson": "jpd123-g7-1"
      }
    ]
  },
  "jpd123-g7-2": {
    "lesson": "jpd123-g7-2",
    "course": "jpd123",
    "title": "Bài 7 – Phần 2",
    "count": 4,
    "items": [
      {
        "id": "117",
        "pattern": "Vてください",
        "meaning": "Dùng để yêu cầu, nhờ ai đó làm gì một cách lịch sự.",
        "course": "jpd123",
        "lesson": "jpd123-g7-2"
      },
      {
        "id": "118",
        "pattern": "［Dụng cụ］でVます",
        "meaning": "Trợ từ「で」dùng để chỉ công cụ, phương tiện thực hiện hành động.",
        "course": "jpd123",
        "lesson": "jpd123-g7-2"
      },
      {
        "id": "119",
        "pattern": "（Nの）Vます方",
        "meaning": "Dùng để nói \\",
        "course": "jpd123",
        "lesson": "jpd123-g7-2"
      },
      {
        "id": "120",
        "pattern": "どのN",
        "meaning": "Dùng để hỏi xác định một đồ vật cụ thể trong nhiều đồ vật cùng loại.",
        "course": "jpd123",
        "lesson": "jpd123-g7-2"
      }
    ]
  },
  "jpd123-g7-3": {
    "lesson": "jpd123-g7-3",
    "course": "jpd123",
    "title": "Bài 7 – Phần 3",
    "count": 4,
    "items": [
      {
        "id": "121",
        "pattern": "Vています",
        "meaning": "Dùng để diễn tả hành động đang diễn ra tại thời điểm nói.",
        "course": "jpd123",
        "lesson": "jpd123-g7-3"
      },
      {
        "id": "122",
        "pattern": "Vましょうか",
        "meaning": "Dùng để đề nghị giúp đỡ hoặc chủ động làm gì cho ai.",
        "course": "jpd123",
        "lesson": "jpd123-g7-3"
      },
      {
        "id": "123",
        "pattern": "だれが～",
        "meaning": "Dùng để hỏi chủ ngữ thực hiện hành động.",
        "course": "jpd123",
        "lesson": "jpd123-g7-3"
      },
      {
        "id": "124",
        "pattern": "まだあります／もうありません",
        "meaning": "Dùng để nói một vật vẫn còn hoặc đã hết/không còn nữa.",
        "course": "jpd123",
        "lesson": "jpd123-g7-3"
      }
    ]
  },
  "jpd133-g10-1": {
    "lesson": "jpd133-g10-1",
    "course": "jpd133",
    "title": "Bài 10 – Phần 1",
    "count": 5,
    "items": [
      {
        "id": "143",
        "pattern": "もう V ましたか。",
        "meaning": "đã... chưa",
        "course": "jpd133",
        "lesson": "jpd133-g10-1"
      },
      {
        "id": "144",
        "pattern": "まだ V ていません。",
        "meaning": "vẫn chưa...",
        "course": "jpd133",
        "lesson": "jpd133-g10-1"
      },
      {
        "id": "145",
        "pattern": "Vて形 + きます。",
        "meaning": "đi... rồi quay lại",
        "course": "jpd133",
        "lesson": "jpd133-g10-1"
      },
      {
        "id": "146",
        "pattern": "N が みえます／きこえます。",
        "meaning": "có thể thấy/có thể nghe thấy",
        "course": "jpd133",
        "lesson": "jpd133-g10-1"
      },
      {
        "id": "147",
        "pattern": "N（場所）を Vます。",
        "meaning": "đi qua...",
        "course": "jpd133",
        "lesson": "jpd133-g10-1"
      }
    ]
  },
  "jpd133-g10-2": {
    "lesson": "jpd133-g10-2",
    "course": "jpd133",
    "title": "Bài 10 – Phần 2",
    "count": 3,
    "items": [
      {
        "id": "148",
        "pattern": "Vて形 + もいいですか。",
        "meaning": "có được phép... không",
        "course": "jpd133",
        "lesson": "jpd133-g10-2"
      },
      {
        "id": "149",
        "pattern": "Vナイ形 + でください。",
        "meaning": "xin đừng...",
        "course": "jpd133",
        "lesson": "jpd133-g10-2"
      },
      {
        "id": "150",
        "pattern": "N は＿＿＿＿。",
        "meaning": "thì/còn...",
        "course": "jpd133",
        "lesson": "jpd133-g10-2"
      }
    ]
  },
  "jpd133-g10-3": {
    "lesson": "jpd133-g10-3",
    "course": "jpd133",
    "title": "Bài 10 – Phần 3",
    "count": 6,
    "items": [
      {
        "id": "151",
        "pattern": "N が Vて形 + います。",
        "meaning": "đang...",
        "course": "jpd133",
        "lesson": "jpd133-g10-3"
      },
      {
        "id": "152",
        "pattern": "N が できます。",
        "meaning": "có thể... (địa điểm)",
        "course": "jpd133",
        "lesson": "jpd133-g10-3"
      },
      {
        "id": "153",
        "pattern": "V辞か形 + ことが できます。",
        "meaning": "có thể làm... (tình huống cụ thể)",
        "course": "jpd133",
        "lesson": "jpd133-g10-3"
      },
      {
        "id": "154",
        "pattern": "イ A-くなります。",
        "meaning": "trở nên...",
        "course": "jpd133",
        "lesson": "jpd133-g10-3"
      },
      {
        "id": "155",
        "pattern": "ナ A・N に なります。",
        "meaning": "trở thành...",
        "course": "jpd133",
        "lesson": "jpd133-g10-3"
      },
      {
        "id": "156",
        "pattern": "Vて形＿＿＿＿。",
        "meaning": "rồi/và",
        "course": "jpd133",
        "lesson": "jpd133-g10-3"
      }
    ]
  },
  "jpd133-g11-1": {
    "lesson": "jpd133-g11-1",
    "course": "jpd133",
    "title": "Bài 11 – Phần 1",
    "count": 7,
    "items": [
      {
        "id": "157",
        "pattern": "～は～が～は＿＿＿＿",
        "meaning": "nhưng/còn...",
        "course": "jpd133",
        "lesson": "jpd133-g11-1"
      },
      {
        "id": "158",
        "pattern": "Vて形 + います",
        "meaning": "đang/thường xuyên (thói quen)",
        "course": "jpd133",
        "lesson": "jpd133-g11-1"
      },
      {
        "id": "159",
        "pattern": "Vタ形 + りVタ形 + りします",
        "meaning": "nào là...nào là...",
        "course": "jpd133",
        "lesson": "jpd133-g11-1"
      },
      {
        "id": "160",
        "pattern": "イ A + とき＿＿＿＿",
        "meaning": "khi...",
        "course": "jpd133",
        "lesson": "jpd133-g11-1"
      },
      {
        "id": "161",
        "pattern": "ナ A + なとき＿＿＿＿",
        "meaning": "khi...",
        "course": "jpd133",
        "lesson": "jpd133-g11-1"
      },
      {
        "id": "162",
        "pattern": "V辞か形／Vタ形／Vナイ形 + とき＿＿＿＿",
        "meaning": "khi...",
        "course": "jpd133",
        "lesson": "jpd133-g11-1"
      },
      {
        "id": "163",
        "pattern": "＿＿ときどうしますか",
        "meaning": "làm thế nào/làm gì",
        "course": "jpd133",
        "lesson": "jpd133-g11-1"
      }
    ]
  },
  "jpd133-g11-2": {
    "lesson": "jpd133-g11-2",
    "course": "jpd133",
    "title": "Bài 11 – Phần 2",
    "count": 3,
    "items": [
      {
        "id": "164",
        "pattern": "N のとき＿＿＿＿",
        "meaning": "khi còn...",
        "course": "jpd133",
        "lesson": "jpd133-g11-2"
      },
      {
        "id": "165",
        "pattern": "Vタ形 + とき＿＿＿＿",
        "meaning": "khi đã...",
        "course": "jpd133",
        "lesson": "jpd133-g11-2"
      },
      {
        "id": "166",
        "pattern": "V辞か形 + とき＿＿＿＿",
        "meaning": "khi sắp/trước khi...",
        "course": "jpd133",
        "lesson": "jpd133-g11-2"
      }
    ]
  },
  "jpd133-g11-3": {
    "lesson": "jpd133-g11-3",
    "course": "jpd133",
    "title": "Bài 11 – Phần 3",
    "count": 7,
    "items": [
      {
        "id": "167",
        "pattern": "動詞普かよ形？",
        "meaning": "~ không? (câu hỏi thân mật)",
        "course": "jpd133",
        "lesson": "jpd133-g11-3"
      },
      {
        "id": "168",
        "pattern": "疑問詞＋動詞（タ形）普かよ形？",
        "meaning": "đã làm gì?/thế nào? (thân mật)",
        "course": "jpd133",
        "lesson": "jpd133-g11-3"
      },
      {
        "id": "169",
        "pattern": "動詞て形",
        "meaning": "Hãy ~ (nhờ vả thân mật)",
        "course": "jpd133",
        "lesson": "jpd133-g11-3"
      },
      {
        "id": "170",
        "pattern": "文１（普かよ形）けど文２",
        "meaning": "nhưng... (thân mật)",
        "course": "jpd133",
        "lesson": "jpd133-g11-3"
      },
      {
        "id": "171",
        "pattern": "動詞ナイ形 + ？",
        "meaning": "Cùng làm~ không? (rủ rê thân mật)",
        "course": "jpd133",
        "lesson": "jpd133-g11-3"
      },
      {
        "id": "172",
        "pattern": "動詞て形 + もいい？",
        "meaning": "được không? (xin phép thân mật)",
        "course": "jpd133",
        "lesson": "jpd133-g11-3"
      },
      {
        "id": "173",
        "pattern": "ありません → ないありませんでした → なかった",
        "meaning": "không có/đã không có (thân mật)",
        "course": "jpd133",
        "lesson": "jpd133-g11-3"
      }
    ]
  },
  "jpd133-g8-1": {
    "lesson": "jpd133-g8-1",
    "course": "jpd133",
    "title": "Bài 8 – Phần 1",
    "count": 4,
    "items": [
      {
        "id": "125",
        "pattern": "Nに すんでいます。",
        "meaning": "đang sống / đang ở",
        "course": "jpd133",
        "lesson": "jpd133-g8-1"
      },
      {
        "id": "126",
        "pattern": "［人］と～人で すんでいます。",
        "meaning": "với tổng cộng … người",
        "course": "jpd133",
        "lesson": "jpd133-g8-1"
      },
      {
        "id": "127",
        "pattern": "Nが～人／～匹 います。",
        "meaning": "có … người / có … con",
        "course": "jpd133",
        "lesson": "jpd133-g8-1"
      },
      {
        "id": "128",
        "pattern": "Nは～で／～を Vています。（職業）",
        "meaning": "đang làm / đang dạy",
        "course": "jpd133",
        "lesson": "jpd133-g8-1"
      }
    ]
  },
  "jpd133-g8-2": {
    "lesson": "jpd133-g8-2",
    "course": "jpd133",
    "title": "Bài 8 – Phần 2",
    "count": 3,
    "items": [
      {
        "id": "129",
        "pattern": "N1は N2が Aです。",
        "meaning": "N1 có đặc điểm/khả năng N2 là A",
        "course": "jpd133",
        "lesson": "jpd133-g8-2"
      },
      {
        "id": "130",
        "pattern": "イA-くて＿＿＿＿。",
        "meaning": "vừa ... vừa ... (nối 2 đặc điểm, vế đầu là tính từ đuôi い)",
        "course": "jpd133",
        "lesson": "jpd133-g8-2"
      },
      {
        "id": "131",
        "pattern": "ナA・Nで＿＿＿＿。",
        "meaning": "..., và ... (nối thông tin tuổi/nghề nghiệp/thân phận với một thông tin khác)",
        "course": "jpd133",
        "lesson": "jpd133-g8-2"
      }
    ]
  },
  "jpd133-g8-3": {
    "lesson": "jpd133-g8-3",
    "course": "jpd133",
    "title": "Bài 8 – Phần 3",
    "count": 3,
    "items": [
      {
        "id": "132",
        "pattern": "N1（人）に N2（物）を あげます。",
        "meaning": "A tặng / cho B",
        "course": "jpd133",
        "lesson": "jpd133-g8-3"
      },
      {
        "id": "133",
        "pattern": "N1（人）に N2（物）を もらいます。",
        "meaning": "nhận",
        "course": "jpd133",
        "lesson": "jpd133-g8-3"
      },
      {
        "id": "134",
        "pattern": "N1（人）が N2（物）を くれます。",
        "meaning": "A cho / tặng tôi, người thân của tôi",
        "course": "jpd133",
        "lesson": "jpd133-g8-3"
      }
    ]
  },
  "jpd133-g9-1": {
    "lesson": "jpd133-g9-1",
    "course": "jpd133",
    "title": "Bài 9 – Phần 1",
    "count": 4,
    "items": [
      {
        "id": "135",
        "pattern": "V辞か形 + ことです。",
        "meaning": "việc... (danh động từ hóa để nói sở thích)",
        "course": "jpd133",
        "lesson": "jpd133-g9-1"
      },
      {
        "id": "136",
        "pattern": "いつも／よく／ときどき／あまり／ぜんぜん　＋　V",
        "meaning": "luôn luôn/thường/đôi khi/không...lắm/hoàn toàn không",
        "course": "jpd133",
        "lesson": "jpd133-g9-1"
      },
      {
        "id": "137",
        "pattern": "文１。でも文２。",
        "meaning": "nhưng",
        "course": "jpd133",
        "lesson": "jpd133-g9-1"
      },
      {
        "id": "138",
        "pattern": "［Lượng thời gian］に［～回・冊・本など］",
        "meaning": "trong...",
        "course": "jpd133",
        "lesson": "jpd133-g9-1"
      }
    ]
  },
  "jpd133-g9-2": {
    "lesson": "jpd133-g9-2",
    "course": "jpd133",
    "title": "Bài 9 – Phần 2",
    "count": 2,
    "items": [
      {
        "id": "139",
        "pattern": "N が できます。",
        "meaning": "có thể/giỏi",
        "course": "jpd133",
        "lesson": "jpd133-g9-2"
      },
      {
        "id": "140",
        "pattern": "V辞か形 + ことが できます。",
        "meaning": "có thể làm...",
        "course": "jpd133",
        "lesson": "jpd133-g9-2"
      }
    ]
  },
  "jpd133-g9-3": {
    "lesson": "jpd133-g9-3",
    "course": "jpd133",
    "title": "Bài 9 – Phần 3",
    "count": 2,
    "items": [
      {
        "id": "141",
        "pattern": "Vて形＿＿＿＿。",
        "meaning": "rồi/và",
        "course": "jpd133",
        "lesson": "jpd133-g9-3"
      },
      {
        "id": "142",
        "pattern": "どうやって～ますか。",
        "meaning": "bằng cách nào/như thế nào",
        "course": "jpd133",
        "lesson": "jpd133-g9-3"
      }
    ]
  }
};
