// All Kanji items across all courses & lessons
export interface KanjiItem {
  glyph: string;
  hanViet: string;
  meaning: string;
  kunyomi: string[];
  onyomi: string[];
  course: string;
  lesson: string;
  mnemonic?: string;
}

export interface KanjiLesson {
  lesson: string;
  course: string;
  title: string;
  count: number;
  items: KanjiItem[];
}

export const KANJI_DATA: Record<string, KanjiLesson> = {
  "jpd113-l1": {
    "lesson": "jpd113-l1",
    "course": "jpd113",
    "title": "Giới thiệu bản thân và Trường học",
    "count": 10,
    "items": [
      {
        "glyph": "私",
        "hanViet": "TƯ",
        "meaning": "Tôi, riêng tư",
        "kunyomi": [
          "わたし",
          "わたくし"
        ],
        "onyomi": [
          "シ"
        ],
        "course": "jpd113",
        "lesson": "jpd113-l1"
      },
      {
        "glyph": "日",
        "hanViet": "NHẬT",
        "meaning": "Tôi",
        "kunyomi": [
          "ひ",
          "か"
        ],
        "onyomi": [
          "ニチ",
          "ジツ"
        ],
        "course": "jpd113",
        "lesson": "jpd113-l1"
      },
      {
        "glyph": "本",
        "hanViet": "BẢN",
        "meaning": "Gốc, sách, căn bản",
        "kunyomi": [
          "もと"
        ],
        "onyomi": [
          "ホン"
        ],
        "course": "jpd113",
        "lesson": "jpd113-l1"
      },
      {
        "glyph": "大",
        "hanViet": "ĐẠI",
        "meaning": "To, lớn",
        "kunyomi": [
          "おおきい"
        ],
        "onyomi": [
          "ダイ",
          "タイ"
        ],
        "course": "jpd113",
        "lesson": "jpd113-l1"
      },
      {
        "glyph": "学",
        "hanViet": "HỌC",
        "meaning": "Học tập",
        "kunyomi": [
          "まなぶ"
        ],
        "onyomi": [
          "ガク"
        ],
        "course": "jpd113",
        "lesson": "jpd113-l1"
      },
      {
        "glyph": "語",
        "hanViet": "NGỮ",
        "meaning": "Ngôn ngữ, tiếng nói",
        "kunyomi": [
          "かたる"
        ],
        "onyomi": [
          "ゴ"
        ],
        "course": "jpd113",
        "lesson": "jpd113-l1"
      },
      {
        "glyph": "校",
        "hanViet": "HIỆU",
        "meaning": "Trường học",
        "kunyomi": [],
        "onyomi": [
          "コウ"
        ],
        "course": "jpd113",
        "lesson": "jpd113-l1"
      },
      {
        "glyph": "生",
        "hanViet": "SINH",
        "meaning": "Sinh sống, sinh ra",
        "kunyomi": [
          "いきる",
          "うまれる",
          "なま"
        ],
        "onyomi": [
          "セイ",
          "ショウ"
        ],
        "course": "jpd113",
        "lesson": "jpd113-l1"
      },
      {
        "glyph": "人",
        "hanViet": "NHÂN",
        "meaning": "Người",
        "kunyomi": [
          "ひと"
        ],
        "onyomi": [
          "ジン",
          "ニン"
        ],
        "course": "jpd113",
        "lesson": "jpd113-l1"
      },
      {
        "glyph": "才",
        "hanViet": "TÀI",
        "meaning": "Tuổi, tài năng",
        "kunyomi": [],
        "onyomi": [
          "サイ"
        ],
        "course": "jpd113",
        "lesson": "jpd113-l1"
      }
    ]
  },
  "jpd113-l2": {
    "lesson": "jpd113-l2",
    "course": "jpd113",
    "title": "Số đếm và Đơn vị tiền tệ",
    "count": 14,
    "items": [
      {
        "glyph": "一",
        "hanViet": "NHẤT",
        "meaning": "Số một",
        "kunyomi": [
          "ひと.つ"
        ],
        "onyomi": [
          "イチ",
          "イツ"
        ],
        "course": "jpd113",
        "lesson": "jpd113-l2"
      },
      {
        "glyph": "二",
        "hanViet": "NHỊ",
        "meaning": "Số hai",
        "kunyomi": [
          "ふた.つ"
        ],
        "onyomi": [
          "ニ"
        ],
        "course": "jpd113",
        "lesson": "jpd113-l2"
      },
      {
        "glyph": "三",
        "hanViet": "TAM",
        "meaning": "Số ba",
        "kunyomi": [
          "みっ.つ"
        ],
        "onyomi": [
          "サン"
        ],
        "course": "jpd113",
        "lesson": "jpd113-l2"
      },
      {
        "glyph": "四",
        "hanViet": "TỨ",
        "meaning": "Số bốn",
        "kunyomi": [
          "よん",
          "よっ.つ"
        ],
        "onyomi": [
          "シ"
        ],
        "course": "jpd113",
        "lesson": "jpd113-l2"
      },
      {
        "glyph": "五",
        "hanViet": "NGŨ",
        "meaning": "Số năm",
        "kunyomi": [
          "いつ.つ"
        ],
        "onyomi": [
          "ゴ"
        ],
        "course": "jpd113",
        "lesson": "jpd113-l2"
      },
      {
        "glyph": "六",
        "hanViet": "LỤC",
        "meaning": "Số sáu",
        "kunyomi": [
          "むっ.つ"
        ],
        "onyomi": [
          "ロク"
        ],
        "course": "jpd113",
        "lesson": "jpd113-l2"
      },
      {
        "glyph": "七",
        "hanViet": "THẤT",
        "meaning": "Số bảy",
        "kunyomi": [
          "なな",
          "なな.つ"
        ],
        "onyomi": [
          "シチ"
        ],
        "course": "jpd113",
        "lesson": "jpd113-l2"
      },
      {
        "glyph": "八",
        "hanViet": "BÁT",
        "meaning": "Số tám",
        "kunyomi": [
          "やっ.つ"
        ],
        "onyomi": [
          "ハチ"
        ],
        "course": "jpd113",
        "lesson": "jpd113-l2"
      },
      {
        "glyph": "九",
        "hanViet": "CỬU",
        "meaning": "Số chín",
        "kunyomi": [
          "ここの.つ"
        ],
        "onyomi": [
          "キュウ",
          "ク"
        ],
        "course": "jpd113",
        "lesson": "jpd113-l2"
      },
      {
        "glyph": "十",
        "hanViet": "THẬP",
        "meaning": "Số mười",
        "kunyomi": [
          "とお"
        ],
        "onyomi": [
          "ジュウ"
        ],
        "course": "jpd113",
        "lesson": "jpd113-l2"
      },
      {
        "glyph": "百",
        "hanViet": "BÁCH",
        "meaning": "Một trăm",
        "kunyomi": [],
        "onyomi": [
          "ヒャク"
        ],
        "course": "jpd113",
        "lesson": "jpd113-l2"
      },
      {
        "glyph": "千",
        "hanViet": "THIÊN",
        "meaning": "Một nghìn",
        "kunyomi": [
          "ち"
        ],
        "onyomi": [
          "セン"
        ],
        "course": "jpd113",
        "lesson": "jpd113-l2"
      },
      {
        "glyph": "万",
        "hanViet": "VẠN",
        "meaning": "Mười nghìn",
        "kunyomi": [],
        "onyomi": [
          "マン",
          "バン"
        ],
        "course": "jpd113",
        "lesson": "jpd113-l2"
      },
      {
        "glyph": "円",
        "hanViet": "VIÊN",
        "meaning": "Hình tròn, đồng Yên",
        "kunyomi": [
          "まる.い"
        ],
        "onyomi": [
          "エン"
        ],
        "course": "jpd113",
        "lesson": "jpd113-l2"
      }
    ]
  },
  "jpd113-l3": {
    "lesson": "jpd113-l3",
    "course": "jpd113",
    "title": "Thời gian và Ngày trong tuần",
    "count": 11,
    "items": [
      {
        "glyph": "月",
        "hanViet": "NGUYỆT",
        "meaning": "Mặt trăng, tháng, thứ Hai",
        "kunyomi": [
          "つき"
        ],
        "onyomi": [
          "ゲツ",
          "ガツ"
        ],
        "course": "jpd113",
        "lesson": "jpd113-l3"
      },
      {
        "glyph": "火",
        "hanViet": "HỎA",
        "meaning": "mặt trăng",
        "kunyomi": [
          "ひ",
          "び",
          "ほ"
        ],
        "onyomi": [
          "カ"
        ],
        "course": "jpd113",
        "lesson": "jpd113-l3"
      },
      {
        "glyph": "水",
        "hanViet": "THỦY",
        "meaning": "Nước, thứ Tư",
        "kunyomi": [
          "みず"
        ],
        "onyomi": [
          "スイ"
        ],
        "course": "jpd113",
        "lesson": "jpd113-l3"
      },
      {
        "glyph": "木",
        "hanViet": "MỘC",
        "meaning": "Cây, thứ Năm",
        "kunyomi": [
          "き",
          "こ"
        ],
        "onyomi": [
          "モク",
          "ボク"
        ],
        "course": "jpd113",
        "lesson": "jpd113-l3"
      },
      {
        "glyph": "金",
        "hanViet": "KIM",
        "meaning": "Tiền, vàng, thứ Sáu",
        "kunyomi": [
          "かね",
          "かな"
        ],
        "onyomi": [
          "キン",
          "コン"
        ],
        "course": "jpd113",
        "lesson": "jpd113-l3"
      },
      {
        "glyph": "土",
        "hanViet": "THỔ",
        "meaning": "Đất, thứ Bảy",
        "kunyomi": [
          "つち"
        ],
        "onyomi": [
          "ド",
          "ト"
        ],
        "course": "jpd113",
        "lesson": "jpd113-l3"
      },
      {
        "glyph": "何",
        "hanViet": "HÀ",
        "meaning": "Cái gì",
        "kunyomi": [
          "なに",
          "なん"
        ],
        "onyomi": [
          "カ"
        ],
        "course": "jpd113",
        "lesson": "jpd113-l3"
      },
      {
        "glyph": "年",
        "hanViet": "NIÊN",
        "meaning": "Năm",
        "kunyomi": [
          "とし"
        ],
        "onyomi": [
          "ネン"
        ],
        "course": "jpd113",
        "lesson": "jpd113-l3"
      },
      {
        "glyph": "時",
        "hanViet": "THỜI",
        "meaning": "Thời gian, giờ",
        "kunyomi": [
          "とき"
        ],
        "onyomi": [
          "ジ"
        ],
        "course": "jpd113",
        "lesson": "jpd113-l3"
      },
      {
        "glyph": "間",
        "hanViet": "GIAN",
        "meaning": "Khoảng trống, ở giữa, trong~, gian phòng",
        "kunyomi": [
          "あいだ",
          "ま"
        ],
        "onyomi": [
          "カン",
          "ケン"
        ],
        "course": "jpd113",
        "lesson": "jpd113-l3"
      },
      {
        "glyph": "分",
        "hanViet": "PHÂN",
        "meaning": "Phân chia, hiểu, phút",
        "kunyomi": [
          "わ.ける",
          "わ.かる"
        ],
        "onyomi": [
          "ブン",
          "フン",
          "ブ"
        ],
        "course": "jpd113",
        "lesson": "jpd113-l3"
      }
    ]
  },
  "jpd123-l4": {
    "lesson": "jpd123-l4",
    "course": "jpd123",
    "title": "Địa điểm và Phương hướng",
    "count": 10,
    "items": [
      {
        "glyph": "東",
        "hanViet": "ĐÔNG",
        "meaning": "Phía Đông",
        "kunyomi": [
          "ひがし"
        ],
        "onyomi": [
          "トウ"
        ],
        "course": "jpd123",
        "lesson": "jpd123-l4"
      },
      {
        "glyph": "京",
        "hanViet": "KINH",
        "meaning": "Kinh đô, thủ đô",
        "kunyomi": [
          "みやこ"
        ],
        "onyomi": [
          "キョウ",
          "ケイ"
        ],
        "course": "jpd123",
        "lesson": "jpd123-l4"
      },
      {
        "glyph": "名",
        "hanViet": "DANH",
        "meaning": "Tên gọi",
        "kunyomi": [
          "な"
        ],
        "onyomi": [
          "メイ",
          "ミョウ"
        ],
        "course": "jpd123",
        "lesson": "jpd123-l4"
      },
      {
        "glyph": "前",
        "hanViet": "TIỀN",
        "meaning": "Phía trước",
        "kunyomi": [
          "まえ"
        ],
        "onyomi": [
          "ゼン"
        ],
        "course": "jpd123",
        "lesson": "jpd123-l4"
      },
      {
        "glyph": "国",
        "hanViet": "QUỐC",
        "meaning": "Quốc gia",
        "kunyomi": [
          "くに"
        ],
        "onyomi": [
          "コク"
        ],
        "course": "jpd123",
        "lesson": "jpd123-l4"
      },
      {
        "glyph": "南",
        "hanViet": "NAM",
        "meaning": "Phía Nam",
        "kunyomi": [
          "みなみ"
        ],
        "onyomi": [
          "ナン"
        ],
        "course": "jpd123",
        "lesson": "jpd123-l4"
      },
      {
        "glyph": "女",
        "hanViet": "NỮ",
        "meaning": "Phụ nữ",
        "kunyomi": [
          "おんな"
        ],
        "onyomi": [
          "ジョ",
          "ニョ"
        ],
        "course": "jpd123",
        "lesson": "jpd123-l4"
      },
      {
        "glyph": "男",
        "hanViet": "NAM",
        "meaning": "Nam giới",
        "kunyomi": [
          "おとこ"
        ],
        "onyomi": [
          "ダン",
          "ナン"
        ],
        "course": "jpd123",
        "lesson": "jpd123-l4"
      },
      {
        "glyph": "区",
        "hanViet": "KHU",
        "meaning": "Khu vực",
        "kunyomi": [],
        "onyomi": [
          "ク"
        ],
        "course": "jpd123",
        "lesson": "jpd123-l4"
      },
      {
        "glyph": "市",
        "hanViet": "THỊ",
        "meaning": "Thành phố / chợ",
        "kunyomi": [
          "いち"
        ],
        "onyomi": [
          "シ"
        ],
        "course": "jpd123",
        "lesson": "jpd123-l4"
      }
    ]
  },
  "jpd123-l5": {
    "lesson": "jpd123-l5",
    "course": "jpd123",
    "title": "Hành động và Nghỉ ngơi",
    "count": 12,
    "items": [
      {
        "glyph": "先",
        "hanViet": "TIÊN",
        "meaning": "Trước, đầu tiên",
        "kunyomi": [
          "さき"
        ],
        "onyomi": [
          "セン"
        ],
        "course": "jpd123",
        "lesson": "jpd123-l5"
      },
      {
        "glyph": "週",
        "hanViet": "CHU",
        "meaning": "Tuần lễ",
        "kunyomi": [],
        "onyomi": [
          "シュウ"
        ],
        "course": "jpd123",
        "lesson": "jpd123-l5"
      },
      {
        "glyph": "毎",
        "hanViet": "MỖI",
        "meaning": "Mỗi, mọi",
        "kunyomi": [
          "ごと"
        ],
        "onyomi": [
          "マイ"
        ],
        "course": "jpd123",
        "lesson": "jpd123-l5"
      },
      {
        "glyph": "午",
        "hanViet": "NGỌ",
        "meaning": "Buổi trưa, giờ Ngọ",
        "kunyomi": [],
        "onyomi": [
          "ゴ"
        ],
        "course": "jpd123",
        "lesson": "jpd123-l5"
      },
      {
        "glyph": "後",
        "hanViet": "HẬU",
        "meaning": "Phía sau, sau này",
        "kunyomi": [
          "あと",
          "うしろ",
          "のち"
        ],
        "onyomi": [
          "ゴ",
          "コウ"
        ],
        "course": "jpd123",
        "lesson": "jpd123-l5"
      },
      {
        "glyph": "見",
        "hanViet": "KIẾN",
        "meaning": "Nhìn, thấy",
        "kunyomi": [
          "みる",
          "みえる"
        ],
        "onyomi": [
          "ケン"
        ],
        "course": "jpd123",
        "lesson": "jpd123-l5"
      },
      {
        "glyph": "食",
        "hanViet": "THỰC",
        "meaning": "Ăn, thức ăn",
        "kunyomi": [
          "たべる"
        ],
        "onyomi": [
          "ショク",
          "ジキ"
        ],
        "course": "jpd123",
        "lesson": "jpd123-l5"
      },
      {
        "glyph": "飲",
        "hanViet": "ẨM",
        "meaning": "Uống",
        "kunyomi": [
          "のむ"
        ],
        "onyomi": [
          "イン"
        ],
        "course": "jpd123",
        "lesson": "jpd123-l5"
      },
      {
        "glyph": "買",
        "hanViet": "MÃI",
        "meaning": "Mua",
        "kunyomi": [
          "かう"
        ],
        "onyomi": [
          "バイ"
        ],
        "course": "jpd123",
        "lesson": "jpd123-l5"
      },
      {
        "glyph": "物",
        "hanViet": "VẬT",
        "meaning": "Đồ vật",
        "kunyomi": [
          "もの"
        ],
        "onyomi": [
          "ブツ",
          "モツ"
        ],
        "course": "jpd123",
        "lesson": "jpd123-l5"
      },
      {
        "glyph": "行",
        "hanViet": "HÀNH",
        "meaning": "Đi, thực hiện",
        "kunyomi": [
          "いく",
          "ゆく",
          "おこなう"
        ],
        "onyomi": [
          "コウ",
          "ギョウ"
        ],
        "course": "jpd123",
        "lesson": "jpd123-l5"
      },
      {
        "glyph": "休",
        "hanViet": "HƯU",
        "meaning": "Nghỉ ngơi",
        "kunyomi": [
          "やすむ"
        ],
        "onyomi": [
          "キュウ"
        ],
        "course": "jpd123",
        "lesson": "jpd123-l5"
      }
    ]
  },
  "jpd123-l6": {
    "lesson": "jpd123-l6",
    "course": "jpd123",
    "title": "Giao tiếp và Sinh hoạt",
    "count": 9,
    "items": [
      {
        "glyph": "今",
        "hanViet": "KIM",
        "meaning": "Bây giờ, hiện tại",
        "kunyomi": [
          "いま"
        ],
        "onyomi": [
          "コン",
          "キン"
        ],
        "course": "jpd123",
        "lesson": "jpd123-l6"
      },
      {
        "glyph": "来",
        "hanViet": "LAI",
        "meaning": "Năm nay",
        "kunyomi": [
          "く.る",
          "き.たる"
        ],
        "onyomi": [
          "ライ"
        ],
        "course": "jpd123",
        "lesson": "jpd123-l6"
      },
      {
        "glyph": "帰",
        "hanViet": "QUY",
        "meaning": "Trở về",
        "kunyomi": [
          "かえ.る"
        ],
        "onyomi": [
          "キ"
        ],
        "course": "jpd123",
        "lesson": "jpd123-l6"
      },
      {
        "glyph": "会",
        "hanViet": "HỘI",
        "meaning": "Gặp gỡ, hội họp",
        "kunyomi": [
          "あ.う"
        ],
        "onyomi": [
          "カイ",
          "エ"
        ],
        "course": "jpd123",
        "lesson": "jpd123-l6"
      },
      {
        "glyph": "社",
        "hanViet": "XÃ",
        "meaning": "Xã hội, công ty, đền thờ",
        "kunyomi": [
          "やしろ"
        ],
        "onyomi": [
          "シャ"
        ],
        "course": "jpd123",
        "lesson": "jpd123-l6"
      },
      {
        "glyph": "聞",
        "hanViet": "VĂN",
        "meaning": "Nghe, hỏi",
        "kunyomi": [
          "き.く",
          "き.こえる"
        ],
        "onyomi": [
          "ブン",
          "モン"
        ],
        "course": "jpd123",
        "lesson": "jpd123-l6"
      },
      {
        "glyph": "読",
        "hanViet": "ĐỘC",
        "meaning": "Đọc",
        "kunyomi": [
          "よ.む"
        ],
        "onyomi": [
          "ドク",
          "トク"
        ],
        "course": "jpd123",
        "lesson": "jpd123-l6"
      },
      {
        "glyph": "書",
        "hanViet": "THƯ",
        "meaning": "Viết, sách",
        "kunyomi": [
          "か.く"
        ],
        "onyomi": [
          "ショ"
        ],
        "course": "jpd123",
        "lesson": "jpd123-l6"
      },
      {
        "glyph": "話",
        "hanViet": "THOẠI",
        "meaning": "Trò chuyện, câu chuyện",
        "kunyomi": [
          "はな.す",
          "はなし"
        ],
        "onyomi": [
          "ワ"
        ],
        "course": "jpd123",
        "lesson": "jpd123-l6"
      }
    ]
  },
  "jpd123-l7": {
    "lesson": "jpd123-l7",
    "course": "jpd123",
    "title": "Tự nhiên và Cơ bản",
    "count": 11,
    "items": [
      {
        "glyph": "寺",
        "hanViet": "TỰ",
        "meaning": "Chùa",
        "kunyomi": [
          "てら"
        ],
        "onyomi": [
          "ジ"
        ],
        "course": "jpd123",
        "lesson": "jpd123-l7"
      },
      {
        "glyph": "言",
        "hanViet": "NGÔN",
        "meaning": "Nói, ngôn từ",
        "kunyomi": [
          "い.う",
          "こと"
        ],
        "onyomi": [
          "ゴン",
          "ゲン"
        ],
        "course": "jpd123",
        "lesson": "jpd123-l7"
      },
      {
        "glyph": "貝",
        "hanViet": "BỐI",
        "meaning": "Vỏ sò, tiền tệ",
        "kunyomi": [
          "かい"
        ],
        "onyomi": [
          "バイ"
        ],
        "course": "jpd123",
        "lesson": "jpd123-l7"
      },
      {
        "glyph": "田",
        "hanViet": "ĐIỀN",
        "meaning": "Ruộng",
        "kunyomi": [
          "た"
        ],
        "onyomi": [
          "デン"
        ],
        "course": "jpd123",
        "lesson": "jpd123-l7"
      },
      {
        "glyph": "力",
        "hanViet": "LỰC",
        "meaning": "Sức lực",
        "kunyomi": [
          "ちから"
        ],
        "onyomi": [
          "リョク",
          "リキ"
        ],
        "course": "jpd123",
        "lesson": "jpd123-l7"
      },
      {
        "glyph": "門",
        "hanViet": "MÔN",
        "meaning": "Cửa, cổng",
        "kunyomi": [
          "かど"
        ],
        "onyomi": [
          "モン"
        ],
        "course": "jpd123",
        "lesson": "jpd123-l7"
      },
      {
        "glyph": "肉",
        "hanViet": "NHỤC",
        "meaning": "Thịt",
        "kunyomi": [],
        "onyomi": [
          "ニク"
        ],
        "course": "jpd123",
        "lesson": "jpd123-l7"
      },
      {
        "glyph": "料",
        "hanViet": "LIỄU",
        "meaning": "Nguyên liệu, tài liệu, phí",
        "kunyomi": [],
        "onyomi": [
          "リョウ"
        ],
        "course": "jpd123",
        "lesson": "jpd123-l7"
      },
      {
        "glyph": "理",
        "hanViet": "LÝ",
        "meaning": "Lý lẽ, logic, địa lý",
        "kunyomi": [],
        "onyomi": [
          "リ"
        ],
        "course": "jpd123",
        "lesson": "jpd123-l7"
      },
      {
        "glyph": "野",
        "hanViet": "DÃ",
        "meaning": "Cánh đồng, hoang dã",
        "kunyomi": [
          "の"
        ],
        "onyomi": [
          "ヤ"
        ],
        "course": "jpd123",
        "lesson": "jpd123-l7"
      },
      {
        "glyph": "半",
        "hanViet": "BÁN",
        "meaning": "Một nửa",
        "kunyomi": [
          "なか.ば"
        ],
        "onyomi": [
          "ハン"
        ],
        "course": "jpd123",
        "lesson": "jpd123-l7"
      }
    ]
  },
  "jpd133-l10": {
    "lesson": "jpd133-l10",
    "course": "jpd133",
    "title": "Địa điểm, phương hướng, đường đi",
    "count": 9,
    "items": [
      {
        "glyph": "駅",
        "hanViet": "DỊCH",
        "meaning": "Nhà ga",
        "kunyomi": [],
        "onyomi": [
          "エキ"
        ],
        "course": "jpd133",
        "lesson": "jpd133-l10"
      },
      {
        "glyph": "上",
        "hanViet": "THƯỢNG",
        "meaning": "Trên, lên",
        "kunyomi": [
          "うえ",
          "あがる",
          "のぼる"
        ],
        "onyomi": [
          "ジョウ",
          "ショウ"
        ],
        "course": "jpd133",
        "lesson": "jpd133-l10"
      },
      {
        "glyph": "下",
        "hanViet": "HẠ",
        "meaning": "Dưới, xuống",
        "kunyomi": [
          "した",
          "さげる",
          "おりる"
        ],
        "onyomi": [
          "カ",
          "ゲ"
        ],
        "course": "jpd133",
        "lesson": "jpd133-l10"
      },
      {
        "glyph": "地",
        "hanViet": "ĐỊA",
        "meaning": "Đất, địa điểm",
        "kunyomi": [],
        "onyomi": [
          "チ",
          "ジ"
        ],
        "course": "jpd133",
        "lesson": "jpd133-l10"
      },
      {
        "glyph": "図",
        "hanViet": "ĐỒ",
        "meaning": "Hình vẽ, bản đồ",
        "kunyomi": [
          "はかる"
        ],
        "onyomi": [
          "ズ",
          "ト"
        ],
        "course": "jpd133",
        "lesson": "jpd133-l10"
      },
      {
        "glyph": "館",
        "hanViet": "QUÁN",
        "meaning": "Tòa nhà, quán/viện",
        "kunyomi": [
          "やかた"
        ],
        "onyomi": [
          "カン"
        ],
        "course": "jpd133",
        "lesson": "jpd133-l10"
      },
      {
        "glyph": "右",
        "hanViet": "HỮU",
        "meaning": "Phải",
        "kunyomi": [
          "みぎ"
        ],
        "onyomi": [
          "ウ",
          "ユウ"
        ],
        "course": "jpd133",
        "lesson": "jpd133-l10"
      },
      {
        "glyph": "左",
        "hanViet": "TẢ",
        "meaning": "Trái",
        "kunyomi": [
          "ひだり"
        ],
        "onyomi": [
          "サ"
        ],
        "course": "jpd133",
        "lesson": "jpd133-l10"
      },
      {
        "glyph": "道",
        "hanViet": "ĐẠO",
        "meaning": "Đường",
        "kunyomi": [
          "みち"
        ],
        "onyomi": [
          "ドウ",
          "トウ"
        ],
        "course": "jpd133",
        "lesson": "jpd133-l10"
      }
    ]
  },
  "jpd133-l11": {
    "lesson": "jpd133-l11",
    "course": "jpd133",
    "title": "Sinh hoạt hằng ngày, học tập, thời gian",
    "count": 9,
    "items": [
      {
        "glyph": "起",
        "hanViet": "KHỞI",
        "meaning": "Thức dậy, khởi động",
        "kunyomi": [
          "おきる",
          "おこす"
        ],
        "onyomi": [
          "キ"
        ],
        "course": "jpd133",
        "lesson": "jpd133-l11"
      },
      {
        "glyph": "歩",
        "hanViet": "BỘ",
        "meaning": "thức dậy",
        "kunyomi": [
          "あるく",
          "あゆむ"
        ],
        "onyomi": [
          "ホ",
          "ブ"
        ],
        "course": "jpd133",
        "lesson": "jpd133-l11"
      },
      {
        "glyph": "始",
        "hanViet": "THỦY",
        "meaning": "Bắt đầu",
        "kunyomi": [
          "はじまる",
          "はじめる"
        ],
        "onyomi": [
          "シ"
        ],
        "course": "jpd133",
        "lesson": "jpd133-l11"
      },
      {
        "glyph": "終",
        "hanViet": "CHUNG",
        "meaning": "Kết thúc",
        "kunyomi": [
          "おわる",
          "おえる"
        ],
        "onyomi": [
          "シュウ"
        ],
        "course": "jpd133",
        "lesson": "jpd133-l11"
      },
      {
        "glyph": "勉",
        "hanViet": "MIỄN",
        "meaning": "Cố gắng học",
        "kunyomi": [],
        "onyomi": [
          "ベン"
        ],
        "course": "jpd133",
        "lesson": "jpd133-l11"
      },
      {
        "glyph": "強",
        "hanViet": "CƯỜNG",
        "meaning": "Mạnh",
        "kunyomi": [
          "つよい",
          "しいる"
        ],
        "onyomi": [
          "キョウ",
          "ゴウ"
        ],
        "course": "jpd133",
        "lesson": "jpd133-l11"
      },
      {
        "glyph": "朝",
        "hanViet": "TRIỀU",
        "meaning": "Buổi sáng",
        "kunyomi": [
          "あさ"
        ],
        "onyomi": [
          "チョウ"
        ],
        "course": "jpd133",
        "lesson": "jpd133-l11"
      },
      {
        "glyph": "昼",
        "hanViet": "TRÚ",
        "meaning": "Buổi trưa",
        "kunyomi": [
          "ひる"
        ],
        "onyomi": [
          "チュウ"
        ],
        "course": "jpd133",
        "lesson": "jpd133-l11"
      },
      {
        "glyph": "夜",
        "hanViet": "DẠ",
        "meaning": "Buổi tối/đêm",
        "kunyomi": [
          "よる"
        ],
        "onyomi": [
          "ヤ"
        ],
        "course": "jpd133",
        "lesson": "jpd133-l11"
      }
    ]
  },
  "jpd133-l8": {
    "lesson": "jpd133-l8",
    "course": "jpd133",
    "title": "Gia đình và đời sống",
    "count": 12,
    "items": [
      {
        "glyph": "家",
        "hanViet": "GIA",
        "meaning": "Nhà, nhà cửa",
        "kunyomi": [
          "いえ",
          "うち"
        ],
        "onyomi": [
          "カ"
        ],
        "course": "jpd133",
        "lesson": "jpd133-l8"
      },
      {
        "glyph": "族",
        "hanViet": "TỘC",
        "meaning": "Gia đình, dòng họ",
        "kunyomi": [],
        "onyomi": [
          "ゾク"
        ],
        "course": "jpd133",
        "lesson": "jpd133-l8"
      },
      {
        "glyph": "父",
        "hanViet": "PHỤ",
        "meaning": "Bố",
        "kunyomi": [
          "ちち"
        ],
        "onyomi": [
          "フ"
        ],
        "course": "jpd133",
        "lesson": "jpd133-l8"
      },
      {
        "glyph": "母",
        "hanViet": "MẪU",
        "meaning": "Mẹ",
        "kunyomi": [
          "はは"
        ],
        "onyomi": [
          "ボ"
        ],
        "course": "jpd133",
        "lesson": "jpd133-l8"
      },
      {
        "glyph": "兄",
        "hanViet": "HUYNH",
        "meaning": "Anh trai",
        "kunyomi": [
          "あに"
        ],
        "onyomi": [
          "ケイ",
          "キョウ"
        ],
        "course": "jpd133",
        "lesson": "jpd133-l8"
      },
      {
        "glyph": "弟",
        "hanViet": "ĐỆ",
        "meaning": "Em trai",
        "kunyomi": [
          "おとうと"
        ],
        "onyomi": [
          "テイ",
          "ダイ"
        ],
        "course": "jpd133",
        "lesson": "jpd133-l8"
      },
      {
        "glyph": "姉",
        "hanViet": "TỶ",
        "meaning": "Chị gái",
        "kunyomi": [
          "あね"
        ],
        "onyomi": [
          "シ"
        ],
        "course": "jpd133",
        "lesson": "jpd133-l8"
      },
      {
        "glyph": "妹",
        "hanViet": "MUỘI",
        "meaning": "Em gái",
        "kunyomi": [
          "いもうと"
        ],
        "onyomi": [
          "マイ"
        ],
        "course": "jpd133",
        "lesson": "jpd133-l8"
      },
      {
        "glyph": "犬",
        "hanViet": "KHUYỂN",
        "meaning": "Con chó",
        "kunyomi": [
          "いぬ"
        ],
        "onyomi": [
          "ケン"
        ],
        "course": "jpd133",
        "lesson": "jpd133-l8"
      },
      {
        "glyph": "高",
        "hanViet": "CAO",
        "meaning": "Cao, đắt",
        "kunyomi": [
          "たかい"
        ],
        "onyomi": [
          "コウ"
        ],
        "course": "jpd133",
        "lesson": "jpd133-l8"
      },
      {
        "glyph": "長",
        "hanViet": "TRƯỜNG",
        "meaning": "Dài",
        "kunyomi": [
          "ながい"
        ],
        "onyomi": [
          "チョウ"
        ],
        "course": "jpd133",
        "lesson": "jpd133-l8"
      },
      {
        "glyph": "短",
        "hanViet": "ĐOẢN",
        "meaning": "Ngắn",
        "kunyomi": [
          "みじかい"
        ],
        "onyomi": [
          "タン"
        ],
        "course": "jpd133",
        "lesson": "jpd133-l8"
      }
    ]
  },
  "jpd133-l9": {
    "lesson": "jpd133-l9",
    "course": "jpd133",
    "title": "Sở thích, âm nhạc, du lịch, nước ngoài",
    "count": 10,
    "items": [
      {
        "glyph": "好",
        "hanViet": "HẢO",
        "meaning": "Thích, tốt",
        "kunyomi": [
          "すき",
          "このむ"
        ],
        "onyomi": [
          "コウ"
        ],
        "course": "jpd133",
        "lesson": "jpd133-l9"
      },
      {
        "glyph": "歌",
        "hanViet": "CA",
        "meaning": "Thích",
        "kunyomi": [
          "うた",
          "うたう"
        ],
        "onyomi": [
          "カ"
        ],
        "course": "jpd133",
        "lesson": "jpd133-l9"
      },
      {
        "glyph": "音",
        "hanViet": "ÂM",
        "meaning": "Âm thanh",
        "kunyomi": [
          "おと",
          "ね"
        ],
        "onyomi": [
          "オン",
          "イン"
        ],
        "course": "jpd133",
        "lesson": "jpd133-l9"
      },
      {
        "glyph": "楽",
        "hanViet": "LẠC/NHẠC",
        "meaning": "Vui vẻ, âm nhạc",
        "kunyomi": [
          "たのしい"
        ],
        "onyomi": [
          "ガク",
          "ラク"
        ],
        "course": "jpd133",
        "lesson": "jpd133-l9"
      },
      {
        "glyph": "車",
        "hanViet": "XA",
        "meaning": "Xe",
        "kunyomi": [
          "くるま"
        ],
        "onyomi": [
          "シャ"
        ],
        "course": "jpd133",
        "lesson": "jpd133-l9"
      },
      {
        "glyph": "映",
        "hanViet": "ÁNH",
        "meaning": "Chiếu, phản chiếu",
        "kunyomi": [
          "うつる",
          "うつす"
        ],
        "onyomi": [
          "エイ"
        ],
        "course": "jpd133",
        "lesson": "jpd133-l9"
      },
      {
        "glyph": "画",
        "hanViet": "HỌA",
        "meaning": "Hình, tranh",
        "kunyomi": [],
        "onyomi": [
          "ガ",
          "カク"
        ],
        "course": "jpd133",
        "lesson": "jpd133-l9"
      },
      {
        "glyph": "旅",
        "hanViet": "LỮ",
        "meaning": "Chuyến đi",
        "kunyomi": [
          "たび"
        ],
        "onyomi": [
          "リョ"
        ],
        "course": "jpd133",
        "lesson": "jpd133-l9"
      },
      {
        "glyph": "海",
        "hanViet": "HẢI",
        "meaning": "Biển",
        "kunyomi": [
          "うみ"
        ],
        "onyomi": [
          "カイ"
        ],
        "course": "jpd133",
        "lesson": "jpd133-l9"
      },
      {
        "glyph": "外",
        "hanViet": "NGOẠI",
        "meaning": "Bên ngoài, nước ngoài",
        "kunyomi": [
          "そと",
          "ほか",
          "はずす"
        ],
        "onyomi": [
          "ガイ",
          "ゲ"
        ],
        "course": "jpd133",
        "lesson": "jpd133-l9"
      }
    ]
  }
};
