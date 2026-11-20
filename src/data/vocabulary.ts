// All Vocabulary items across all courses & lessons
export interface VocabItem {
  id: number;
  word: string;
  reading: string;
  romaji: string;
  meaning: string;
  pos: string;
  color: string;
}

export interface VocabLesson {
  lesson: string;
  course: string;
  title: string;
  total: number;
  items: VocabItem[];
}

export const VOCABULARY_DATA: Record<string, VocabLesson> = {
  "jpd113-v1-1": {
    "lesson": "jpd113-v1-1",
    "course": "jpd113",
    "title": "Không có trang này",
    "total": 37,
    "items": [
      {
        "id": 17,
        "word": "私",
        "reading": "わたし",
        "romaji": "watashi",
        "meaning": "Tôi",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 321,
        "word": "なまえ",
        "reading": "なまえ",
        "romaji": "namae",
        "meaning": "Tên",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 322,
        "word": "おなまえ",
        "reading": "おなまえ",
        "romaji": "onamae",
        "meaning": "Tên (lịch sự)",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 323,
        "word": "くに",
        "reading": "くに",
        "romaji": "kuni",
        "meaning": "Đất nước",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 324,
        "word": "おくに",
        "reading": "おくに",
        "romaji": "okuni",
        "meaning": "Đất nước (lịch sự)",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 32,
        "word": "日本",
        "reading": "にほん",
        "romaji": "nihon",
        "meaning": "Nhật Bản",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 325,
        "word": "かんこく",
        "reading": "かんこく",
        "romaji": "kankoku",
        "meaning": "Hàn Quốc",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      },
      {
        "id": 326,
        "word": "ちゅうごく",
        "reading": "ちゅうごく",
        "romaji": "chuugoku",
        "meaning": "Trung Quốc",
        "pos": "Từ vựng",
        "color": "var(--iro-8)"
      },
      {
        "id": 327,
        "word": "アメリカ",
        "reading": "アメリカ",
        "romaji": "amerika",
        "meaning": "Mỹ",
        "pos": "Từ vựng",
        "color": "var(--iro-9)"
      },
      {
        "id": 328,
        "word": "イタリア",
        "reading": "イタリア",
        "romaji": "itaria",
        "meaning": "Ý",
        "pos": "Từ vựng",
        "color": "var(--iro-10)"
      },
      {
        "id": 329,
        "word": "オーストラリア",
        "reading": "オーストラリア",
        "romaji": "oosutoraria",
        "meaning": "Úc",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 330,
        "word": "タイ",
        "reading": "タイ",
        "romaji": "tai",
        "meaning": "Thái Lan",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 331,
        "word": "ベトナム",
        "reading": "ベトナム",
        "romaji": "betonamu",
        "meaning": "Việt Nam",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 332,
        "word": "ロシア",
        "reading": "ロシア",
        "romaji": "roshia",
        "meaning": "Nga",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 333,
        "word": "こうこう",
        "reading": "こうこう",
        "romaji": "koukou",
        "meaning": "Trường cấp 3",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 23,
        "word": "大学",
        "reading": "だいがく",
        "romaji": "daigaku",
        "meaning": "Đại học",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 34,
        "word": "日本語",
        "reading": "にほんご",
        "romaji": "nihongo",
        "meaning": "Tiếng Nhật",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      },
      {
        "id": 334,
        "word": "日本語学校",
        "reading": "にほんごがっこう",
        "romaji": "nihongogakkou",
        "meaning": "Trường tiếng Nhật",
        "pos": "Từ vựng",
        "color": "var(--iro-8)"
      },
      {
        "id": 335,
        "word": "しごと",
        "reading": "しごと",
        "romaji": "shigoto",
        "meaning": "Công việc",
        "pos": "Từ vựng",
        "color": "var(--iro-9)"
      },
      {
        "id": 336,
        "word": "おしごと",
        "reading": "おしごと",
        "romaji": "oshigoto",
        "meaning": "Công việc (lịch sự)",
        "pos": "Từ vựng",
        "color": "var(--iro-10)"
      },
      {
        "id": 24,
        "word": "学生",
        "reading": "がくせい",
        "romaji": "gakusei",
        "meaning": "Học sinh / sinh viên",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 337,
        "word": "せんせい",
        "reading": "せんせい",
        "romaji": "sensei",
        "meaning": "Giáo viên",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 338,
        "word": "きょうし",
        "reading": "きょうし",
        "romaji": "kyoushi",
        "meaning": "Giáo viên",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 339,
        "word": "かいしゃいん",
        "reading": "かいしゃいん",
        "romaji": "kaishain",
        "meaning": "Nhân viên công ty",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 340,
        "word": "しゃいん",
        "reading": "しゃいん",
        "romaji": "shain",
        "meaning": "Nhân viên",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 341,
        "word": "～さん",
        "reading": "～さん",
        "romaji": "san",
        "meaning": "Anh / chị ~",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 342,
        "word": "～人",
        "reading": "～じん",
        "romaji": "jin",
        "meaning": "Người nước ~",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      },
      {
        "id": 343,
        "word": "どちら",
        "reading": "どちら",
        "romaji": "dochira",
        "meaning": "Ở đâu / phía nào",
        "pos": "Từ vựng",
        "color": "var(--iro-8)"
      },
      {
        "id": 344,
        "word": "はじめまして",
        "reading": "はじめまして",
        "romaji": "hajimemashite",
        "meaning": "Rất vui được gặp",
        "pos": "Từ vựng",
        "color": "var(--iro-9)"
      },
      {
        "id": 345,
        "word": "どうぞよろしくおねがいします",
        "reading": "どうぞよろしくおねがいします",
        "romaji": "douzoyoroshikuonegaishimasu",
        "meaning": "Rất mong được giúp đỡ",
        "pos": "Từ vựng",
        "color": "var(--iro-10)"
      },
      {
        "id": 346,
        "word": "こちらこそ",
        "reading": "こちらこそ",
        "romaji": "kochirakoso",
        "meaning": "Chính tôi mới vậy",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 347,
        "word": "あのう",
        "reading": "あのう",
        "romaji": "anou",
        "meaning": "À...",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 348,
        "word": "すみません",
        "reading": "すみません",
        "romaji": "sumimasen",
        "meaning": "Xin lỗi",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 349,
        "word": "そうですか",
        "reading": "そうですか",
        "romaji": "soudesuka",
        "meaning": "Vậy à",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 350,
        "word": "はい",
        "reading": "はい",
        "romaji": "hai",
        "meaning": "Vâng",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 351,
        "word": "いいえ",
        "reading": "いいえ",
        "romaji": "iie",
        "meaning": "Không",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 26,
        "word": "学校",
        "reading": "がっこう",
        "romaji": "gakkou",
        "meaning": "Trường học",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      }
    ]
  },
  "jpd113-v1-2-1": {
    "lesson": "jpd113-v1-2-1",
    "course": "jpd113",
    "title": "Không có trang này",
    "total": 33,
    "items": [
      {
        "id": 352,
        "word": "～さい",
        "reading": "～さい",
        "romaji": "sai",
        "meaning": "~ tuổi",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 353,
        "word": "～がつ",
        "reading": "～がつ",
        "romaji": "gatsu",
        "meaning": "Tháng ~",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 354,
        "word": "いっさい",
        "reading": "いっさい",
        "romaji": "issai",
        "meaning": "1 tuổi",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 355,
        "word": "にさい",
        "reading": "にさい",
        "romaji": "nisai",
        "meaning": "2 tuổi",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 356,
        "word": "さんさい",
        "reading": "さんさい",
        "romaji": "sansai",
        "meaning": "3 tuổi",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 357,
        "word": "よんさい",
        "reading": "よんさい",
        "romaji": "yonsai",
        "meaning": "4 tuổi",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 358,
        "word": "ごさい",
        "reading": "ごさい",
        "romaji": "gosai",
        "meaning": "5 tuổi",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      },
      {
        "id": 359,
        "word": "ろくさい",
        "reading": "ろくさい",
        "romaji": "rokusai",
        "meaning": "6 tuổi",
        "pos": "Từ vựng",
        "color": "var(--iro-8)"
      },
      {
        "id": 360,
        "word": "ななさい",
        "reading": "ななさい",
        "romaji": "nanasai",
        "meaning": "7 tuổi",
        "pos": "Từ vựng",
        "color": "var(--iro-9)"
      },
      {
        "id": 361,
        "word": "はっさい",
        "reading": "はっさい",
        "romaji": "hassai",
        "meaning": "8 tuổi",
        "pos": "Từ vựng",
        "color": "var(--iro-10)"
      },
      {
        "id": 362,
        "word": "きゅうさい",
        "reading": "きゅうさい",
        "romaji": "kyuusai",
        "meaning": "9 tuổi",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 363,
        "word": "じゅっさい",
        "reading": "じゅっさい",
        "romaji": "jussai",
        "meaning": "10 tuổi",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 364,
        "word": "じゅういっさい",
        "reading": "じゅういっさい",
        "romaji": "juuissai",
        "meaning": "11 tuổi",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 365,
        "word": "じゅうごさい",
        "reading": "じゅうごさい",
        "romaji": "juugosai",
        "meaning": "15 tuổi",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 366,
        "word": "はたち",
        "reading": "はたち",
        "romaji": "hatachi",
        "meaning": "20 tuổi",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 367,
        "word": "にじゅっさい",
        "reading": "にじゅっさい",
        "romaji": "nijussai",
        "meaning": "20 tuổi",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 368,
        "word": "さんじゅっさい",
        "reading": "さんじゅっさい",
        "romaji": "sanjussai",
        "meaning": "30 tuổi",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      },
      {
        "id": 369,
        "word": "さんじゅうはっさい",
        "reading": "さんじゅうはっさい",
        "romaji": "sanjuuhassai",
        "meaning": "38 tuổi",
        "pos": "Từ vựng",
        "color": "var(--iro-8)"
      },
      {
        "id": 370,
        "word": "なんさい",
        "reading": "なんさい",
        "romaji": "nansai",
        "meaning": "Bao nhiêu tuổi",
        "pos": "Từ vựng",
        "color": "var(--iro-9)"
      },
      {
        "id": 371,
        "word": "おいくつ",
        "reading": "おいくつ",
        "romaji": "oikutsu",
        "meaning": "Mấy tuổi (lịch sự)",
        "pos": "Từ vựng",
        "color": "var(--iro-10)"
      },
      {
        "id": 372,
        "word": "いちがつ",
        "reading": "いちがつ",
        "romaji": "ichigatsu",
        "meaning": "Tháng 1",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 373,
        "word": "にがつ",
        "reading": "にがつ",
        "romaji": "nigatsu",
        "meaning": "Tháng 2",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 374,
        "word": "さんがつ",
        "reading": "さんがつ",
        "romaji": "sangatsu",
        "meaning": "Tháng 3",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 375,
        "word": "しがつ",
        "reading": "しがつ",
        "romaji": "shigatsu",
        "meaning": "Tháng 4",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 376,
        "word": "ごがつ",
        "reading": "ごがつ",
        "romaji": "gogatsu",
        "meaning": "Tháng 5",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 377,
        "word": "ろくがつ",
        "reading": "ろくがつ",
        "romaji": "rokugatsu",
        "meaning": "Tháng 6",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 378,
        "word": "しちがつ",
        "reading": "しちがつ",
        "romaji": "shichigatsu",
        "meaning": "Tháng 7",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      },
      {
        "id": 379,
        "word": "はちがつ",
        "reading": "はちがつ",
        "romaji": "hachigatsu",
        "meaning": "Tháng 8",
        "pos": "Từ vựng",
        "color": "var(--iro-8)"
      },
      {
        "id": 380,
        "word": "くがつ",
        "reading": "くがつ",
        "romaji": "kugatsu",
        "meaning": "Tháng 9",
        "pos": "Từ vựng",
        "color": "var(--iro-9)"
      },
      {
        "id": 381,
        "word": "じゅうがつ",
        "reading": "じゅうがつ",
        "romaji": "juugatsu",
        "meaning": "Tháng 10",
        "pos": "Từ vựng",
        "color": "var(--iro-10)"
      },
      {
        "id": 382,
        "word": "じゅういちがつ",
        "reading": "じゅういちがつ",
        "romaji": "juuichigatsu",
        "meaning": "Tháng 11",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 383,
        "word": "じゅうにがつ",
        "reading": "じゅうにがつ",
        "romaji": "juunigatsu",
        "meaning": "Tháng 12",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 384,
        "word": "なんがつ",
        "reading": "なんがつ",
        "romaji": "nangatsu",
        "meaning": "Tháng mấy",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      }
    ]
  },
  "jpd113-v1-2-2": {
    "lesson": "jpd113-v1-2-2",
    "course": "jpd113",
    "title": "Không có trang này",
    "total": 25,
    "items": [
      {
        "id": 385,
        "word": "いつ",
        "reading": "いつ",
        "romaji": "itsu",
        "meaning": "Khi nào",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 386,
        "word": "ブラジル",
        "reading": "ブラジル",
        "romaji": "burajiru",
        "meaning": "Brazil",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 387,
        "word": "たんじょうび",
        "reading": "たんじょうび",
        "romaji": "tanjoubi",
        "meaning": "Sinh nhật",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 388,
        "word": "～にち",
        "reading": "～にち",
        "romaji": "nichi",
        "meaning": "Ngày ~",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 389,
        "word": "～か",
        "reading": "～か",
        "romaji": "ka",
        "meaning": "Ngày ~",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 390,
        "word": "ついたち",
        "reading": "ついたち",
        "romaji": "tsuitachi",
        "meaning": "Ngày mồng 1",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 391,
        "word": "ふつか",
        "reading": "ふつか",
        "romaji": "futsuka",
        "meaning": "Ngày mồng 2",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      },
      {
        "id": 392,
        "word": "みっか",
        "reading": "みっか",
        "romaji": "mikka",
        "meaning": "Ngày mồng 3",
        "pos": "Từ vựng",
        "color": "var(--iro-8)"
      },
      {
        "id": 393,
        "word": "よっか",
        "reading": "よっか",
        "romaji": "yokka",
        "meaning": "Ngày mồng 4",
        "pos": "Từ vựng",
        "color": "var(--iro-9)"
      },
      {
        "id": 394,
        "word": "いつか",
        "reading": "いつか",
        "romaji": "itsuka",
        "meaning": "Ngày mồng 5",
        "pos": "Từ vựng",
        "color": "var(--iro-10)"
      },
      {
        "id": 395,
        "word": "むいか",
        "reading": "むいか",
        "romaji": "muika",
        "meaning": "Ngày mồng 6",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 396,
        "word": "なのか",
        "reading": "なのか",
        "romaji": "nanoka",
        "meaning": "Ngày mồng 7",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 397,
        "word": "ようか",
        "reading": "ようか",
        "romaji": "youka",
        "meaning": "Ngày mồng 8",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 398,
        "word": "ここのか",
        "reading": "ここのか",
        "romaji": "kokonoka",
        "meaning": "Ngày mồng 9",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 399,
        "word": "とおか",
        "reading": "とおか",
        "romaji": "tooka",
        "meaning": "Ngày mồng 10",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 400,
        "word": "じゅういちにち",
        "reading": "じゅういちにち",
        "romaji": "juuichinichi",
        "meaning": "Ngày 11",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 401,
        "word": "じゅうににち",
        "reading": "じゅうににち",
        "romaji": "juuninichi",
        "meaning": "Ngày 12",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      },
      {
        "id": 402,
        "word": "じゅうよっか",
        "reading": "じゅうよっか",
        "romaji": "juuyokka",
        "meaning": "Ngày 14",
        "pos": "Từ vựng",
        "color": "var(--iro-8)"
      },
      {
        "id": 403,
        "word": "じゅうはちにち",
        "reading": "じゅうはちにち",
        "romaji": "juuhachinichi",
        "meaning": "Ngày 18",
        "pos": "Từ vựng",
        "color": "var(--iro-9)"
      },
      {
        "id": 404,
        "word": "じゅうくにち",
        "reading": "じゅうくにち",
        "romaji": "juukunichi",
        "meaning": "Ngày 19",
        "pos": "Từ vựng",
        "color": "var(--iro-10)"
      },
      {
        "id": 405,
        "word": "はつか",
        "reading": "はつか",
        "romaji": "hatsuka",
        "meaning": "Ngày 20",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 406,
        "word": "にじゅうよっか",
        "reading": "にじゅうよっか",
        "romaji": "nijuuyokka",
        "meaning": "Ngày 24",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 407,
        "word": "にじゅうくにち",
        "reading": "にじゅうくにち",
        "romaji": "nijuukunichi",
        "meaning": "Ngày 29",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 408,
        "word": "さんじゅうにち",
        "reading": "さんじゅうにち",
        "romaji": "sanjuunichi",
        "meaning": "Ngày 30",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 409,
        "word": "なんにち",
        "reading": "なんにち",
        "romaji": "nannichi",
        "meaning": "Ngày mấy",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      }
    ]
  },
  "jpd113-v1-3": {
    "lesson": "jpd113-v1-3",
    "course": "jpd113",
    "title": "Không có trang này",
    "total": 13,
    "items": [
      {
        "id": 410,
        "word": "スポーツ",
        "reading": "スポーツ",
        "romaji": "supootsu",
        "meaning": "Thể thao",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 411,
        "word": "サッカー",
        "reading": "サッカー",
        "romaji": "sakkaa",
        "meaning": "Bóng đá",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 412,
        "word": "テニス",
        "reading": "テニス",
        "romaji": "tenisu",
        "meaning": "Quần vợt",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 413,
        "word": "すいえい",
        "reading": "すいえい",
        "romaji": "suiei",
        "meaning": "Bơi lội",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 414,
        "word": "えいが",
        "reading": "えいが",
        "romaji": "eiga",
        "meaning": "Phim",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 415,
        "word": "おんがく",
        "reading": "おんがく",
        "romaji": "ongaku",
        "meaning": "Âm nhạc",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 416,
        "word": "どくしょ",
        "reading": "どくしょ",
        "romaji": "dokusho",
        "meaning": "Đọc sách",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      },
      {
        "id": 417,
        "word": "りょこう",
        "reading": "りょこう",
        "romaji": "ryokou",
        "meaning": "Du lịch",
        "pos": "Từ vựng",
        "color": "var(--iro-8)"
      },
      {
        "id": 418,
        "word": "りょうり",
        "reading": "りょうり",
        "romaji": "ryouri",
        "meaning": "Nấu ăn / món ăn",
        "pos": "Từ vựng",
        "color": "var(--iro-9)"
      },
      {
        "id": 419,
        "word": "なん",
        "reading": "なん",
        "romaji": "nan",
        "meaning": "Cái gì",
        "pos": "Từ vựng",
        "color": "var(--iro-10)"
      },
      {
        "id": 420,
        "word": "つり",
        "reading": "つり",
        "romaji": "tsuri",
        "meaning": "Câu cá",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 421,
        "word": "おなじ",
        "reading": "おなじ",
        "romaji": "onaji",
        "meaning": "Giống nhau",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 422,
        "word": "おなじですね",
        "reading": "おなじですね",
        "romaji": "onajidesune",
        "meaning": "Giống nhau nhỉ",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      }
    ]
  },
  "jpd113-v2-1": {
    "lesson": "jpd113-v2-1",
    "course": "jpd113",
    "title": "Không có trang này",
    "total": 42,
    "items": [
      {
        "id": 423,
        "word": "ここ",
        "reading": "ここ",
        "romaji": "koko",
        "meaning": "Ở đây",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 424,
        "word": "こちら",
        "reading": "こちら",
        "romaji": "kochira",
        "meaning": "Phía này (lịch sự)",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 425,
        "word": "そこ",
        "reading": "そこ",
        "romaji": "soko",
        "meaning": "Ở đó",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 426,
        "word": "そちら",
        "reading": "そちら",
        "romaji": "sochira",
        "meaning": "Phía đó (lịch sự)",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 427,
        "word": "あそこ",
        "reading": "あそこ",
        "romaji": "asoko",
        "meaning": "Ở kia",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 428,
        "word": "あちら",
        "reading": "あちら",
        "romaji": "achira",
        "meaning": "Phía kia (lịch sự)",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 429,
        "word": "インフォメーション",
        "reading": "インフォメーション",
        "romaji": "infomeeshon",
        "meaning": "Quầy thông tin",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      },
      {
        "id": 430,
        "word": "ATM",
        "reading": "ATM",
        "romaji": "atm",
        "meaning": "Máy ATM",
        "pos": "Từ vựng",
        "color": "var(--iro-8)"
      },
      {
        "id": 431,
        "word": "エスカレーター",
        "reading": "エスカレーター",
        "romaji": "esukareetaa",
        "meaning": "Thang cuốn",
        "pos": "Từ vựng",
        "color": "var(--iro-9)"
      },
      {
        "id": 432,
        "word": "エレベーター",
        "reading": "エレベーター",
        "romaji": "erebeetaa",
        "meaning": "Thang máy",
        "pos": "Từ vựng",
        "color": "var(--iro-10)"
      },
      {
        "id": 433,
        "word": "きつえんじょ",
        "reading": "きつえんじょ",
        "romaji": "kitsuenjo",
        "meaning": "Khu hút thuốc",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 434,
        "word": "トイレ",
        "reading": "トイレ",
        "romaji": "toire",
        "meaning": "Nhà vệ sinh",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 435,
        "word": "レジ",
        "reading": "レジ",
        "romaji": "reji",
        "meaning": "Quầy tính tiền",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 436,
        "word": "きっさてん",
        "reading": "きっさてん",
        "romaji": "kissaten",
        "meaning": "Quán cà phê",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 437,
        "word": "スーパー",
        "reading": "スーパー",
        "romaji": "suupaa",
        "meaning": "Siêu thị",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 438,
        "word": "１００円ショップ",
        "reading": "１００えんショップ",
        "romaji": "enshoppu",
        "meaning": "Cửa hàng 100 yên",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 439,
        "word": "レストラン",
        "reading": "レストラン",
        "romaji": "resutoran",
        "meaning": "Nhà hàng",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      },
      {
        "id": 440,
        "word": "ちか",
        "reading": "ちか",
        "romaji": "chika",
        "meaning": "Tầng hầm",
        "pos": "Từ vựng",
        "color": "var(--iro-8)"
      },
      {
        "id": 441,
        "word": "カメラ",
        "reading": "カメラ",
        "romaji": "kamera",
        "meaning": "Máy ảnh",
        "pos": "Từ vựng",
        "color": "var(--iro-9)"
      },
      {
        "id": 442,
        "word": "けいたいでんわ",
        "reading": "けいたいでんわ",
        "romaji": "keitaidenwa",
        "meaning": "Điện thoại di động",
        "pos": "Từ vựng",
        "color": "var(--iro-10)"
      },
      {
        "id": 443,
        "word": "でんしじしょ",
        "reading": "でんしじしょ",
        "romaji": "denshijisho",
        "meaning": "Từ điển điện tử",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 444,
        "word": "パソコン",
        "reading": "パソコン",
        "romaji": "pasokon",
        "meaning": "Máy tính",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 445,
        "word": "くつ",
        "reading": "くつ",
        "romaji": "kutsu",
        "meaning": "Giày",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 446,
        "word": "けしゴム",
        "reading": "けしゴム",
        "romaji": "keshigomu",
        "meaning": "Cục tẩy",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 447,
        "word": "ペン",
        "reading": "ペン",
        "romaji": "pen",
        "meaning": "Bút",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 448,
        "word": "トイレットペーパー",
        "reading": "トイレットペーパー",
        "romaji": "toirettopeepaa",
        "meaning": "Giấy vệ sinh",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 31,
        "word": "本",
        "reading": "ほん",
        "romaji": "hon",
        "meaning": "Sách",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      },
      {
        "id": 449,
        "word": "あぶら",
        "reading": "あぶら",
        "romaji": "abura",
        "meaning": "Dầu ăn",
        "pos": "Từ vựng",
        "color": "var(--iro-8)"
      },
      {
        "id": 450,
        "word": "ケーキ",
        "reading": "ケーキ",
        "romaji": "keeki",
        "meaning": "Bánh kem",
        "pos": "Từ vựng",
        "color": "var(--iro-9)"
      },
      {
        "id": 451,
        "word": "こめ",
        "reading": "こめ",
        "romaji": "kome",
        "meaning": "Gạo",
        "pos": "Từ vựng",
        "color": "var(--iro-10)"
      },
      {
        "id": 452,
        "word": "たまご",
        "reading": "たまご",
        "romaji": "tamago",
        "meaning": "Trứng",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 453,
        "word": "パン",
        "reading": "パン",
        "romaji": "pan",
        "meaning": "Bánh mì",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 454,
        "word": "みず",
        "reading": "みず",
        "romaji": "mizu",
        "meaning": "Nước",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 455,
        "word": "てんいん",
        "reading": "てんいん",
        "romaji": "ten'in",
        "meaning": "Nhân viên cửa hàng",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 456,
        "word": "なんかい",
        "reading": "なんかい",
        "romaji": "nankai",
        "meaning": "Tầng mấy",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 457,
        "word": "いっかい",
        "reading": "いっかい",
        "romaji": "ikkai",
        "meaning": "Tầng 1",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 458,
        "word": "ろっかい",
        "reading": "ろっかい",
        "romaji": "rokkai",
        "meaning": "Tầng 6",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      },
      {
        "id": 459,
        "word": "じゅっかい",
        "reading": "じゅっかい",
        "romaji": "jukkai",
        "meaning": "Tầng 10",
        "pos": "Từ vựng",
        "color": "var(--iro-8)"
      },
      {
        "id": 460,
        "word": "ほんや",
        "reading": "ほんや",
        "romaji": "hon'ya",
        "meaning": "Hiệu sách",
        "pos": "Từ vựng",
        "color": "var(--iro-9)"
      },
      {
        "id": 461,
        "word": "どこ",
        "reading": "どこ",
        "romaji": "doko",
        "meaning": "Ở đâu",
        "pos": "Từ vựng",
        "color": "var(--iro-10)"
      },
      {
        "id": 462,
        "word": "いらっしゃいませ",
        "reading": "いらっしゃいませ",
        "romaji": "irasshaimase",
        "meaning": "Xin chào quý khách",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 463,
        "word": "どうもありがとうございます",
        "reading": "どうもありがとうございます",
        "romaji": "doumoarigatougozaimasu",
        "meaning": "Cảm ơn rất nhiều",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      }
    ]
  },
  "jpd113-v2-2-1": {
    "lesson": "jpd113-v2-2-1",
    "course": "jpd113",
    "title": "Không có trang này",
    "total": 26,
    "items": [
      {
        "id": 464,
        "word": "これ",
        "reading": "これ",
        "romaji": "kore",
        "meaning": "Cái này",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 465,
        "word": "それ",
        "reading": "それ",
        "romaji": "sore",
        "meaning": "Cái đó",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 466,
        "word": "あれ",
        "reading": "あれ",
        "romaji": "are",
        "meaning": "Cái kia",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 467,
        "word": "このN",
        "reading": "このN",
        "romaji": "kono",
        "meaning": "Cái N này",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 468,
        "word": "そのN",
        "reading": "そのN",
        "romaji": "sono",
        "meaning": "Cái N đó",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 469,
        "word": "あのN",
        "reading": "あのN",
        "romaji": "ano",
        "meaning": "Cái N kia",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 470,
        "word": "かばん",
        "reading": "かばん",
        "romaji": "kaban",
        "meaning": "Cái cặp",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      },
      {
        "id": 471,
        "word": "ズボン",
        "reading": "ズボン",
        "romaji": "zubon",
        "meaning": "Quần",
        "pos": "Từ vựng",
        "color": "var(--iro-8)"
      },
      {
        "id": 472,
        "word": "Tシャツ",
        "reading": "Tシャツ",
        "romaji": "shatsu",
        "meaning": "Áo thun",
        "pos": "Từ vựng",
        "color": "var(--iro-9)"
      },
      {
        "id": 473,
        "word": "とけい",
        "reading": "とけい",
        "romaji": "tokei",
        "meaning": "Đồng hồ",
        "pos": "Từ vựng",
        "color": "var(--iro-10)"
      },
      {
        "id": 474,
        "word": "～えん",
        "reading": "～えん",
        "romaji": "en",
        "meaning": "~ yên",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 475,
        "word": "～ドン",
        "reading": "～ドン",
        "romaji": "don",
        "meaning": "~ đồng",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 476,
        "word": "～ドル",
        "reading": "～ドル",
        "romaji": "doru",
        "meaning": "~ đô la",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 477,
        "word": "いくら",
        "reading": "いくら",
        "romaji": "ikura",
        "meaning": "Bao nhiêu tiền",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 478,
        "word": "じゃ",
        "reading": "じゃ",
        "romaji": "ja",
        "meaning": "Thế thì / vậy thì",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 479,
        "word": "ひゃく",
        "reading": "ひゃく",
        "romaji": "hyaku",
        "meaning": "100",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 480,
        "word": "さんびゃく",
        "reading": "さんびゃく",
        "romaji": "sanbyaku",
        "meaning": "300",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      },
      {
        "id": 481,
        "word": "ごひゃく",
        "reading": "ごひゃく",
        "romaji": "gohyaku",
        "meaning": "500",
        "pos": "Từ vựng",
        "color": "var(--iro-8)"
      },
      {
        "id": 482,
        "word": "ろっぴゃく",
        "reading": "ろっぴゃく",
        "romaji": "roppyaku",
        "meaning": "600",
        "pos": "Từ vựng",
        "color": "var(--iro-9)"
      },
      {
        "id": 483,
        "word": "はっぴゃく",
        "reading": "はっぴゃく",
        "romaji": "happyaku",
        "meaning": "800",
        "pos": "Từ vựng",
        "color": "var(--iro-10)"
      },
      {
        "id": 484,
        "word": "せん",
        "reading": "せん",
        "romaji": "sen",
        "meaning": "1000",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 485,
        "word": "さんぜん",
        "reading": "さんぜん",
        "romaji": "sanzen",
        "meaning": "3000",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 486,
        "word": "ろくせん",
        "reading": "ろくせん",
        "romaji": "rokusen",
        "meaning": "6000",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 487,
        "word": "はっせん",
        "reading": "はっせん",
        "romaji": "hassen",
        "meaning": "8000",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 488,
        "word": "いちまん",
        "reading": "いちまん",
        "romaji": "ichiman",
        "meaning": "10000",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 489,
        "word": "きゅうまん",
        "reading": "きゅうまん",
        "romaji": "kyuuman",
        "meaning": "90000",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      }
    ]
  },
  "jpd113-v2-2-2": {
    "lesson": "jpd113-v2-2-2",
    "course": "jpd113",
    "title": "Không có trang này",
    "total": 24,
    "items": [
      {
        "id": 490,
        "word": "ひゃくにじゅう",
        "reading": "ひゃくにじゅう",
        "romaji": "hyakunijuu",
        "meaning": "120",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 491,
        "word": "ひゃくよんじゅう",
        "reading": "ひゃくよんじゅう",
        "romaji": "hyakuyonjuu",
        "meaning": "140",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 492,
        "word": "にひゃくはちじゅう",
        "reading": "にひゃくはちじゅう",
        "romaji": "nihyakuhachijuu",
        "meaning": "280",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 493,
        "word": "さんびゃくごじゅう",
        "reading": "さんびゃくごじゅう",
        "romaji": "sanbyakugojuu",
        "meaning": "350",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 494,
        "word": "よんひゃくきゅう",
        "reading": "よんひゃくきゅう",
        "romaji": "yonhyakukyuu",
        "meaning": "409",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 495,
        "word": "ななひゃくきゅう",
        "reading": "ななひゃくきゅう",
        "romaji": "nanahyakukyuu",
        "meaning": "709",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 496,
        "word": "はっぴゃくはちじゅう",
        "reading": "はっぴゃくはちじゅう",
        "romaji": "happyakuhachijuu",
        "meaning": "880",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      },
      {
        "id": 497,
        "word": "はっぴゃくきゅうじゅうきゅう",
        "reading": "はっぴゃくきゅうじゅうきゅう",
        "romaji": "happyakukyuujuukyuu",
        "meaning": "899",
        "pos": "Từ vựng",
        "color": "var(--iro-8)"
      },
      {
        "id": 498,
        "word": "きゅうひゃくさんじゅう",
        "reading": "きゅうひゃくさんじゅう",
        "romaji": "kyuuhyakusanjuu",
        "meaning": "930",
        "pos": "Từ vựng",
        "color": "var(--iro-9)"
      },
      {
        "id": 499,
        "word": "きゅうひゃくきゅうじゅうきゅう",
        "reading": "きゅうひゃくきゅうじゅうきゅう",
        "romaji": "kyuuhyakukyuujuukyuu",
        "meaning": "999",
        "pos": "Từ vựng",
        "color": "var(--iro-10)"
      },
      {
        "id": 500,
        "word": "せんひゃく",
        "reading": "せんひゃく",
        "romaji": "senhyaku",
        "meaning": "1100",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 501,
        "word": "せんごひゃく",
        "reading": "せんごひゃく",
        "romaji": "sengohyaku",
        "meaning": "1500",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 502,
        "word": "ななせんろっぴゃく",
        "reading": "ななせんろっぴゃく",
        "romaji": "nanasenroppyaku",
        "meaning": "7600",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 503,
        "word": "きゅうせんななひゃく",
        "reading": "きゅうせんななひゃく",
        "romaji": "kyuusennanahyaku",
        "meaning": "9700",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 504,
        "word": "いちまんはっせん",
        "reading": "いちまんはっせん",
        "romaji": "ichimanhassen",
        "meaning": "18000",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 505,
        "word": "にまん",
        "reading": "にまん",
        "romaji": "niman",
        "meaning": "20000",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 506,
        "word": "にまんさんぜん",
        "reading": "にまんさんぜん",
        "romaji": "nimansanzen",
        "meaning": "23000",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      },
      {
        "id": 507,
        "word": "にまんごせん",
        "reading": "にまんごせん",
        "romaji": "nimangosen",
        "meaning": "25000",
        "pos": "Từ vựng",
        "color": "var(--iro-8)"
      },
      {
        "id": 508,
        "word": "はちまんさんぜんよんひゃく",
        "reading": "はちまんさんぜんよんひゃく",
        "romaji": "hachimansanzen'yonhyaku",
        "meaning": "83400",
        "pos": "Từ vựng",
        "color": "var(--iro-9)"
      },
      {
        "id": 509,
        "word": "きゅうまんせんごひゃく",
        "reading": "きゅうまんせんごひゃく",
        "romaji": "kyuumansengohyaku",
        "meaning": "91500",
        "pos": "Từ vựng",
        "color": "var(--iro-10)"
      },
      {
        "id": 510,
        "word": "よんじゅうまんせん",
        "reading": "よんじゅうまんせん",
        "romaji": "yonjuumansen",
        "meaning": "401000",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 511,
        "word": "ろくじゅうななまんはっせん",
        "reading": "ろくじゅうななまんはっせん",
        "romaji": "rokujuunanamanhassen",
        "meaning": "678000",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 512,
        "word": "さんびゃくろくじゅうはちまん",
        "reading": "さんびゃくろくじゅうはちまん",
        "romaji": "sanbyakurokujuuhachiman",
        "meaning": "3680000",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 513,
        "word": "はっぴゃくさんじゅうよんまん",
        "reading": "はっぴゃくさんじゅうよんまん",
        "romaji": "happyakusanjuuyonman",
        "meaning": "8340000",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      }
    ]
  },
  "jpd113-v2-3": {
    "lesson": "jpd113-v2-3",
    "course": "jpd113",
    "title": "Không có trang này",
    "total": 43,
    "items": [
      {
        "id": 514,
        "word": "さかな",
        "reading": "さかな",
        "romaji": "sakana",
        "meaning": "Cá",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 515,
        "word": "にく",
        "reading": "にく",
        "romaji": "niku",
        "meaning": "Thịt",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 516,
        "word": "ぎゅうにく",
        "reading": "ぎゅうにく",
        "romaji": "gyuuniku",
        "meaning": "Thịt bò",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 517,
        "word": "とりにく",
        "reading": "とりにく",
        "romaji": "toriniku",
        "meaning": "Thịt gà",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 518,
        "word": "ぶたにく",
        "reading": "ぶたにく",
        "romaji": "butaniku",
        "meaning": "Thịt heo",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 519,
        "word": "やさい",
        "reading": "やさい",
        "romaji": "yasai",
        "meaning": "Rau",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 520,
        "word": "イチゴ",
        "reading": "イチゴ",
        "romaji": "ichigo",
        "meaning": "Dâu tây",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      },
      {
        "id": 521,
        "word": "リンゴ",
        "reading": "リンゴ",
        "romaji": "ringo",
        "meaning": "Táo",
        "pos": "Từ vựng",
        "color": "var(--iro-8)"
      },
      {
        "id": 418,
        "word": "りょうり",
        "reading": "りょうり",
        "romaji": "ryouri",
        "meaning": "Nấu ăn / món ăn",
        "pos": "Từ vựng",
        "color": "var(--iro-9)"
      },
      {
        "id": 522,
        "word": "カレー",
        "reading": "カレー",
        "romaji": "karee",
        "meaning": "Cà ri",
        "pos": "Từ vựng",
        "color": "var(--iro-10)"
      },
      {
        "id": 523,
        "word": "スープ",
        "reading": "スープ",
        "romaji": "suupu",
        "meaning": "Súp",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 524,
        "word": "とんかつ",
        "reading": "とんかつ",
        "romaji": "tonkatsu",
        "meaning": "Thịt heo chiên xù",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 525,
        "word": "ハンバーグ",
        "reading": "ハンバーグ",
        "romaji": "hanbaagu",
        "meaning": "Hamburger steak",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 526,
        "word": "ごはん",
        "reading": "ごはん",
        "romaji": "gohan",
        "meaning": "Cơm",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 527,
        "word": "ライス",
        "reading": "ライス",
        "romaji": "raisu",
        "meaning": "Cơm",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 528,
        "word": "ジュース",
        "reading": "ジュース",
        "romaji": "juusu",
        "meaning": "Nước ép",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 529,
        "word": "コーヒー",
        "reading": "コーヒー",
        "romaji": "koohii",
        "meaning": "Cà phê",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      },
      {
        "id": 530,
        "word": "こうちゃ",
        "reading": "こうちゃ",
        "romaji": "koucha",
        "meaning": "Trà đen",
        "pos": "Từ vựng",
        "color": "var(--iro-8)"
      },
      {
        "id": 531,
        "word": "おちゃ",
        "reading": "おちゃ",
        "romaji": "ocha",
        "meaning": "Trà",
        "pos": "Từ vựng",
        "color": "var(--iro-9)"
      },
      {
        "id": 532,
        "word": "ビール",
        "reading": "ビール",
        "romaji": "biiru",
        "meaning": "Bia",
        "pos": "Từ vựng",
        "color": "var(--iro-10)"
      },
      {
        "id": 533,
        "word": "ワイン",
        "reading": "ワイン",
        "romaji": "wain",
        "meaning": "Rượu vang",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 534,
        "word": "インド",
        "reading": "インド",
        "romaji": "indo",
        "meaning": "Ấn Độ",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 535,
        "word": "ドイツ",
        "reading": "ドイツ",
        "romaji": "doitsu",
        "meaning": "Đức",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 536,
        "word": "フランス",
        "reading": "フランス",
        "romaji": "furansu",
        "meaning": "Pháp",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 537,
        "word": "さいふ",
        "reading": "さいふ",
        "romaji": "saifu",
        "meaning": "Ví",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 538,
        "word": "えいご",
        "reading": "えいご",
        "romaji": "eigo",
        "meaning": "Tiếng Anh",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 539,
        "word": "～ご",
        "reading": "～ご",
        "romaji": "go",
        "meaning": "Ngôn ngữ ~",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      },
      {
        "id": 540,
        "word": "～つ",
        "reading": "～つ",
        "romaji": "tsu",
        "meaning": "Cách đếm đồ vật",
        "pos": "Từ vựng",
        "color": "var(--iro-8)"
      },
      {
        "id": 541,
        "word": "だれ",
        "reading": "だれ",
        "romaji": "dare",
        "meaning": "Ai",
        "pos": "Từ vựng",
        "color": "var(--iro-9)"
      },
      {
        "id": 542,
        "word": "ちゅうもんをおねがいします",
        "reading": "ちゅうもんをおねがいします",
        "romaji": "chuumonwoonegaishimasu",
        "meaning": "Cho tôi gọi món",
        "pos": "Từ vựng",
        "color": "var(--iro-10)"
      },
      {
        "id": 543,
        "word": "Nをおねがいします",
        "reading": "Nをおねがいします",
        "romaji": "woonegaishimasu",
        "meaning": "Làm ơn cho tôi N",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 544,
        "word": "どうぞ",
        "reading": "どうぞ",
        "romaji": "douzo",
        "meaning": "Xin mời",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 545,
        "word": "ひとつ",
        "reading": "ひとつ",
        "romaji": "hitotsu",
        "meaning": "1 cái",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 546,
        "word": "ふたつ",
        "reading": "ふたつ",
        "romaji": "futatsu",
        "meaning": "2 cái",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 547,
        "word": "みっつ",
        "reading": "みっつ",
        "romaji": "mittsu",
        "meaning": "3 cái",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 548,
        "word": "よっつ",
        "reading": "よっつ",
        "romaji": "yottsu",
        "meaning": "4 cái",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 549,
        "word": "いつつ",
        "reading": "いつつ",
        "romaji": "itsutsu",
        "meaning": "5 cái",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      },
      {
        "id": 550,
        "word": "むっつ",
        "reading": "むっつ",
        "romaji": "muttsu",
        "meaning": "6 cái",
        "pos": "Từ vựng",
        "color": "var(--iro-8)"
      },
      {
        "id": 551,
        "word": "ななつ",
        "reading": "ななつ",
        "romaji": "nanatsu",
        "meaning": "7 cái",
        "pos": "Từ vựng",
        "color": "var(--iro-9)"
      },
      {
        "id": 552,
        "word": "やっつ",
        "reading": "やっつ",
        "romaji": "yattsu",
        "meaning": "8 cái",
        "pos": "Từ vựng",
        "color": "var(--iro-10)"
      },
      {
        "id": 553,
        "word": "ここのつ",
        "reading": "ここのつ",
        "romaji": "kokonotsu",
        "meaning": "9 cái",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 554,
        "word": "とお",
        "reading": "とお",
        "romaji": "too",
        "meaning": "10 cái",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 555,
        "word": "いくつ",
        "reading": "いくつ",
        "romaji": "ikutsu",
        "meaning": "Bao nhiêu cái",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      }
    ]
  },
  "jpd113-v3-1": {
    "lesson": "jpd113-v3-1",
    "course": "jpd113",
    "title": "Không có trang này",
    "total": 30,
    "items": [
      {
        "id": 556,
        "word": "いま",
        "reading": "いま",
        "romaji": "ima",
        "meaning": "Bây giờ",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 557,
        "word": "ごぜん",
        "reading": "ごぜん",
        "romaji": "gozen",
        "meaning": "Buổi sáng / AM",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 558,
        "word": "ごご",
        "reading": "ごご",
        "romaji": "gogo",
        "meaning": "Buổi chiều / PM",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 559,
        "word": "ひる",
        "reading": "ひる",
        "romaji": "hiru",
        "meaning": "Buổi trưa",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 560,
        "word": "ぎんこう",
        "reading": "ぎんこう",
        "romaji": "ginkou",
        "meaning": "Ngân hàng",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 561,
        "word": "たいいくかん",
        "reading": "たいいくかん",
        "romaji": "taiikukan",
        "meaning": "Nhà thi đấu",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 562,
        "word": "としょかん",
        "reading": "としょかん",
        "romaji": "toshokan",
        "meaning": "Thư viện",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      },
      {
        "id": 563,
        "word": "びょういん",
        "reading": "びょういん",
        "romaji": "byouin",
        "meaning": "Bệnh viện",
        "pos": "Từ vựng",
        "color": "var(--iro-8)"
      },
      {
        "id": 564,
        "word": "ゆうびんきょく",
        "reading": "ゆうびんきょく",
        "romaji": "yuubinkyoku",
        "meaning": "Bưu điện",
        "pos": "Từ vựng",
        "color": "var(--iro-9)"
      },
      {
        "id": 565,
        "word": "じゅぎょう",
        "reading": "じゅぎょう",
        "romaji": "jugyou",
        "meaning": "Tiết học",
        "pos": "Từ vựng",
        "color": "var(--iro-10)"
      },
      {
        "id": 566,
        "word": "テスト",
        "reading": "テスト",
        "romaji": "tesuto",
        "meaning": "Bài kiểm tra",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 567,
        "word": "やすみ",
        "reading": "やすみ",
        "romaji": "yasumi",
        "meaning": "Ngày nghỉ",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 568,
        "word": "じかん",
        "reading": "じかん",
        "romaji": "jikan",
        "meaning": "Thời gian",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 569,
        "word": "～じ",
        "reading": "～じ",
        "romaji": "ji",
        "meaning": "~ giờ",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 570,
        "word": "～ふん/ぷん",
        "reading": "～ふん/ぷん",
        "romaji": "funpun",
        "meaning": "~ phút",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 571,
        "word": "～じはん",
        "reading": "～じはん",
        "romaji": "jihan",
        "meaning": "~ giờ rưỡi",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 572,
        "word": "～ようび",
        "reading": "～ようび",
        "romaji": "youbi",
        "meaning": "Thứ ~",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      },
      {
        "id": 573,
        "word": "げつようび",
        "reading": "げつようび",
        "romaji": "getsuyoubi",
        "meaning": "Thứ hai",
        "pos": "Từ vựng",
        "color": "var(--iro-8)"
      },
      {
        "id": 574,
        "word": "かようび",
        "reading": "かようび",
        "romaji": "kayoubi",
        "meaning": "Thứ ba",
        "pos": "Từ vựng",
        "color": "var(--iro-9)"
      },
      {
        "id": 575,
        "word": "すいようび",
        "reading": "すいようび",
        "romaji": "suiyoubi",
        "meaning": "Thứ tư",
        "pos": "Từ vựng",
        "color": "var(--iro-10)"
      },
      {
        "id": 576,
        "word": "もくようび",
        "reading": "もくようび",
        "romaji": "mokuyoubi",
        "meaning": "Thứ năm",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 577,
        "word": "きんようび",
        "reading": "きんようび",
        "romaji": "kin'youbi",
        "meaning": "Thứ sáu",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 578,
        "word": "どようび",
        "reading": "どようび",
        "romaji": "doyoubi",
        "meaning": "Thứ bảy",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 579,
        "word": "日ようび",
        "reading": "にちようび",
        "romaji": "nichiyoubi",
        "meaning": "Chủ nhật",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 580,
        "word": "ごふん",
        "reading": "ごふん",
        "romaji": "gofun",
        "meaning": "5 phút",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 581,
        "word": "じゅっぷん",
        "reading": "じゅっぷん",
        "romaji": "juppun",
        "meaning": "10 phút",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 582,
        "word": "さんじゅっぷん",
        "reading": "さんじゅっぷん",
        "romaji": "sanjuppun",
        "meaning": "30 phút",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      },
      {
        "id": 583,
        "word": "よじ",
        "reading": "よじ",
        "romaji": "yoji",
        "meaning": "4 giờ",
        "pos": "Từ vựng",
        "color": "var(--iro-8)"
      },
      {
        "id": 584,
        "word": "しちじ",
        "reading": "しちじ",
        "romaji": "shichiji",
        "meaning": "7 giờ",
        "pos": "Từ vựng",
        "color": "var(--iro-9)"
      },
      {
        "id": 585,
        "word": "くじ",
        "reading": "くじ",
        "romaji": "kuji",
        "meaning": "9 giờ",
        "pos": "Từ vựng",
        "color": "var(--iro-10)"
      }
    ]
  },
  "jpd113-v3-2": {
    "lesson": "jpd113-v3-2",
    "course": "jpd113",
    "title": "Không có trang này",
    "total": 31,
    "items": [
      {
        "id": 586,
        "word": "スケジュール",
        "reading": "スケジュール",
        "romaji": "sukejuuru",
        "meaning": "Lịch trình",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 587,
        "word": "アルバイト",
        "reading": "アルバイト",
        "romaji": "arubaito",
        "meaning": "Làm thêm",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 588,
        "word": "パーティー",
        "reading": "パーティー",
        "romaji": "paathii",
        "meaning": "Bữa tiệc",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 589,
        "word": "バーベキュー",
        "reading": "バーベキュー",
        "romaji": "baabekyuu",
        "meaning": "Tiệc BBQ",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 590,
        "word": "はなび",
        "reading": "はなび",
        "romaji": "hanabi",
        "meaning": "Pháo hoa",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 591,
        "word": "はなみ",
        "reading": "はなみ",
        "romaji": "hanami",
        "meaning": "Ngắm hoa",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 592,
        "word": "ホームステイ",
        "reading": "ホームステイ",
        "romaji": "hoomusutei",
        "meaning": "Ở homestay",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      },
      {
        "id": 593,
        "word": "まつり",
        "reading": "まつり",
        "romaji": "matsuri",
        "meaning": "Lễ hội",
        "pos": "Từ vựng",
        "color": "var(--iro-8)"
      },
      {
        "id": 594,
        "word": "うみ",
        "reading": "うみ",
        "romaji": "umi",
        "meaning": "Biển",
        "pos": "Từ vựng",
        "color": "var(--iro-9)"
      },
      {
        "id": 595,
        "word": "こうえん",
        "reading": "こうえん",
        "romaji": "kouen",
        "meaning": "Công viên",
        "pos": "Từ vựng",
        "color": "var(--iro-10)"
      },
      {
        "id": 596,
        "word": "さくら",
        "reading": "さくら",
        "romaji": "sakura",
        "meaning": "Hoa anh đào",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 597,
        "word": "おさけ",
        "reading": "おさけ",
        "romaji": "osake",
        "meaning": "Rượu",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 598,
        "word": "おすし",
        "reading": "おすし",
        "romaji": "osushi",
        "meaning": "Sushi",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 599,
        "word": "バス",
        "reading": "バス",
        "romaji": "basu",
        "meaning": "Xe buýt",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 600,
        "word": "べんとう",
        "reading": "べんとう",
        "romaji": "bentou",
        "meaning": "Cơm hộp",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 601,
        "word": "りゅうがくせい",
        "reading": "りゅうがくせい",
        "romaji": "ryuugakusei",
        "meaning": "Du học sinh",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 602,
        "word": "いちねん",
        "reading": "いちねん",
        "romaji": "ichinen",
        "meaning": "1 năm",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      },
      {
        "id": 603,
        "word": "はる",
        "reading": "はる",
        "romaji": "haru",
        "meaning": "Mùa xuân",
        "pos": "Từ vựng",
        "color": "var(--iro-8)"
      },
      {
        "id": 604,
        "word": "なつ",
        "reading": "なつ",
        "romaji": "natsu",
        "meaning": "Mùa hè",
        "pos": "Từ vựng",
        "color": "var(--iro-9)"
      },
      {
        "id": 605,
        "word": "あき",
        "reading": "あき",
        "romaji": "aki",
        "meaning": "Mùa thu",
        "pos": "Từ vựng",
        "color": "var(--iro-10)"
      },
      {
        "id": 606,
        "word": "ふゆ",
        "reading": "ふゆ",
        "romaji": "fuyu",
        "meaning": "Mùa đông",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 607,
        "word": "ゴールデンウイーク",
        "reading": "ゴールデンウイーク",
        "romaji": "gooruden'uiiku",
        "meaning": "Tuần lễ vàng",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 608,
        "word": "なに",
        "reading": "なに",
        "romaji": "nani",
        "meaning": "Cái gì",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 609,
        "word": "いきます",
        "reading": "いきます",
        "romaji": "ikimasu",
        "meaning": "Đi",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 610,
        "word": "かえります",
        "reading": "かえります",
        "romaji": "kaerimasu",
        "meaning": "Trở về",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 611,
        "word": "のみます",
        "reading": "のみます",
        "romaji": "nomimasu",
        "meaning": "Uống",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 612,
        "word": "たべます",
        "reading": "たべます",
        "romaji": "tabemasu",
        "meaning": "Ăn",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      },
      {
        "id": 613,
        "word": "みます",
        "reading": "みます",
        "romaji": "mimasu",
        "meaning": "Xem",
        "pos": "Từ vựng",
        "color": "var(--iro-8)"
      },
      {
        "id": 614,
        "word": "します",
        "reading": "します",
        "romaji": "shimasu",
        "meaning": "Làm",
        "pos": "Từ vựng",
        "color": "var(--iro-9)"
      },
      {
        "id": 615,
        "word": "スキーをします",
        "reading": "スキーをします",
        "romaji": "sukiiwoshimasu",
        "meaning": "Trượt tuyết",
        "pos": "Từ vựng",
        "color": "var(--iro-10)"
      },
      {
        "id": 616,
        "word": "いいですね",
        "reading": "いいですね",
        "romaji": "iidesune",
        "meaning": "Hay nhỉ",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      }
    ]
  },
  "jpd113-v3-3": {
    "lesson": "jpd113-v3-3",
    "course": "jpd113",
    "title": "Không có trang này",
    "total": 30,
    "items": [
      {
        "id": 617,
        "word": "あさ",
        "reading": "あさ",
        "romaji": "asa",
        "meaning": "Buổi sáng",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 618,
        "word": "よる",
        "reading": "よる",
        "romaji": "yoru",
        "meaning": "Buổi tối",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 619,
        "word": "まいにち",
        "reading": "まいにち",
        "romaji": "mainichi",
        "meaning": "Mỗi ngày",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 620,
        "word": "まいあさ",
        "reading": "まいあさ",
        "romaji": "maiasa",
        "meaning": "Mỗi sáng",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 621,
        "word": "まいばん",
        "reading": "まいばん",
        "romaji": "maiban",
        "meaning": "Mỗi tối",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 622,
        "word": "あさごはん",
        "reading": "あさごはん",
        "romaji": "asagohan",
        "meaning": "Bữa sáng",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 623,
        "word": "ひるごはん",
        "reading": "ひるごはん",
        "romaji": "hirugohan",
        "meaning": "Bữa trưa",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      },
      {
        "id": 225,
        "word": "うち",
        "reading": "うち",
        "romaji": "uchi",
        "meaning": "Nhà",
        "pos": "Từ vựng",
        "color": "var(--iro-8)"
      },
      {
        "id": 624,
        "word": "かいしゃ",
        "reading": "かいしゃ",
        "romaji": "kaisha",
        "meaning": "Công ty",
        "pos": "Từ vựng",
        "color": "var(--iro-9)"
      },
      {
        "id": 625,
        "word": "がっこう",
        "reading": "がっこう",
        "romaji": "gakkou",
        "meaning": "Trường học",
        "pos": "Từ vựng",
        "color": "var(--iro-10)"
      },
      {
        "id": 626,
        "word": "コンビニ",
        "reading": "コンビニ",
        "romaji": "konbini",
        "meaning": "Cửa hàng tiện lợi",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 627,
        "word": "ぎゅうにゅう",
        "reading": "ぎゅうにゅう",
        "romaji": "gyuunyuu",
        "meaning": "Sữa bò",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 628,
        "word": "くだもの",
        "reading": "くだもの",
        "romaji": "kudamono",
        "meaning": "Trái cây",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 629,
        "word": "サラダ",
        "reading": "サラダ",
        "romaji": "sarada",
        "meaning": "Salad",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 630,
        "word": "チーズ",
        "reading": "チーズ",
        "romaji": "chiizu",
        "meaning": "Phô mai",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 631,
        "word": "インターネット",
        "reading": "インターネット",
        "romaji": "intaanetto",
        "meaning": "Internet",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 632,
        "word": "しんぶん",
        "reading": "しんぶん",
        "romaji": "shinbun",
        "meaning": "Báo",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      },
      {
        "id": 633,
        "word": "テレビ",
        "reading": "テレビ",
        "romaji": "terebi",
        "meaning": "TV",
        "pos": "Từ vựng",
        "color": "var(--iro-8)"
      },
      {
        "id": 634,
        "word": "CD",
        "reading": "CD",
        "romaji": "cd",
        "meaning": "Đĩa CD",
        "pos": "Từ vựng",
        "color": "var(--iro-9)"
      },
      {
        "id": 635,
        "word": "DVD",
        "reading": "DVD",
        "romaji": "dvd",
        "meaning": "Đĩa DVD",
        "pos": "Từ vựng",
        "color": "var(--iro-10)"
      },
      {
        "id": 636,
        "word": "なにも",
        "reading": "なにも",
        "romaji": "nanimo",
        "meaning": "Không gì cả",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 637,
        "word": "どこへも",
        "reading": "どこへも",
        "romaji": "dokohemo",
        "meaning": "Đâu cũng không",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 638,
        "word": "かいます",
        "reading": "かいます",
        "romaji": "kaimasu",
        "meaning": "Mua",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 639,
        "word": "ききます",
        "reading": "ききます",
        "romaji": "kikimasu",
        "meaning": "Nghe",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 640,
        "word": "はたらきます",
        "reading": "はたらきます",
        "romaji": "hatarakimasu",
        "meaning": "Làm việc",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 641,
        "word": "よみます",
        "reading": "よみます",
        "romaji": "yomimasu",
        "meaning": "Đọc",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 642,
        "word": "おきます",
        "reading": "おきます",
        "romaji": "okimasu",
        "meaning": "Thức dậy",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      },
      {
        "id": 643,
        "word": "ねます",
        "reading": "ねます",
        "romaji": "nemasu",
        "meaning": "Ngủ",
        "pos": "Từ vựng",
        "color": "var(--iro-8)"
      },
      {
        "id": 644,
        "word": "べんきょうします",
        "reading": "べんきょうします",
        "romaji": "benkyoushimasu",
        "meaning": "Học",
        "pos": "Từ vựng",
        "color": "var(--iro-9)"
      },
      {
        "id": 645,
        "word": "きます",
        "reading": "きます",
        "romaji": "kimasu",
        "meaning": "Đến",
        "pos": "Từ vựng",
        "color": "var(--iro-10)"
      }
    ]
  },
  "jpd123-v4-1": {
    "lesson": "jpd123-v4-1",
    "course": "jpd123",
    "title": "Không có trang này",
    "total": 16,
    "items": [
      {
        "id": 4,
        "word": "北",
        "reading": "きた",
        "romaji": "kita",
        "meaning": "Phía bắc BẮC",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 3,
        "word": "南",
        "reading": "みなみ",
        "romaji": "minami",
        "meaning": "Phía nam NAM",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 1,
        "word": "東",
        "reading": "ひがし",
        "romaji": "higashi",
        "meaning": "Phía đông ĐÔNG",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 2,
        "word": "西",
        "reading": "にし",
        "romaji": "nishi",
        "meaning": "Phía tây TÂY",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 646,
        "word": "真ん中",
        "reading": "まんなか",
        "romaji": "mannaka",
        "meaning": "Chính giữa",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 263,
        "word": "車",
        "reading": "くるま",
        "romaji": "kuruma",
        "meaning": "Ô tô",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 647,
        "word": "新幹線",
        "reading": "しんかんせん",
        "romaji": "shinkansen",
        "meaning": "Tàu cao tốc Shinkansen",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      },
      {
        "id": 648,
        "word": "電車",
        "reading": "でんしゃ",
        "romaji": "densha",
        "meaning": "Tàu điện",
        "pos": "Từ vựng",
        "color": "var(--iro-8)"
      },
      {
        "id": 649,
        "word": "飛行機",
        "reading": "ひこうき",
        "romaji": "hikouki",
        "meaning": "Máy bay",
        "pos": "Từ vựng",
        "color": "var(--iro-9)"
      },
      {
        "id": 275,
        "word": "駅",
        "reading": "えき",
        "romaji": "eki",
        "meaning": "Nhà ga",
        "pos": "Từ vựng",
        "color": "var(--iro-10)"
      },
      {
        "id": 650,
        "word": "町",
        "reading": "まち",
        "romaji": "machi",
        "meaning": "Thành phố, thị trấn",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 651,
        "word": "～時間",
        "reading": "～じかん",
        "romaji": "jikan",
        "meaning": "~ tiếng",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 652,
        "word": "～時間半",
        "reading": "～じかんはん",
        "romaji": "jikanhan",
        "meaning": "~ tiếng rưỡi",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 653,
        "word": "歩いて",
        "reading": "あるいて",
        "romaji": "aruite",
        "meaning": "Đi bộ",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 654,
        "word": "～くらい",
        "reading": "～くらい",
        "romaji": "kurai",
        "meaning": "Khoảng~",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 655,
        "word": "どのくらい",
        "reading": "どのくらい",
        "romaji": "donokurai",
        "meaning": "Bao lâu",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      }
    ]
  },
  "jpd123-v4-2": {
    "lesson": "jpd123-v4-2",
    "course": "jpd123",
    "title": "Không có trang này",
    "total": 27,
    "items": [
      {
        "id": 656,
        "word": "温泉",
        "reading": "おんせん",
        "romaji": "onsen",
        "meaning": "Suối nước nóng",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 657,
        "word": "川",
        "reading": "かわ",
        "romaji": "kawa",
        "meaning": "Sông",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 658,
        "word": "山",
        "reading": "やま",
        "romaji": "yama",
        "meaning": "Núi",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 659,
        "word": "教会",
        "reading": "きょうかい",
        "romaji": "kyoukai",
        "meaning": "Nhà thờ",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 660,
        "word": "城",
        "reading": "おしろ",
        "romaji": "oshiro",
        "meaning": "Lâu đài",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 661,
        "word": "神社",
        "reading": "じんじゃ",
        "romaji": "jinja",
        "meaning": "Đền",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 662,
        "word": "寺",
        "reading": "おてら",
        "romaji": "otera",
        "meaning": "Chùa",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      },
      {
        "id": 663,
        "word": "ビル",
        "reading": "ビル",
        "romaji": "biru",
        "meaning": "Tòa nhà",
        "pos": "Từ vựng",
        "color": "var(--iro-8)"
      },
      {
        "id": 664,
        "word": "ところ",
        "reading": "ところ",
        "romaji": "tokoro",
        "meaning": "Nơi, chỗ",
        "pos": "Từ vựng",
        "color": "var(--iro-9)"
      },
      {
        "id": 18,
        "word": "人",
        "reading": "ひと",
        "romaji": "hito",
        "meaning": "Người",
        "pos": "Từ vựng",
        "color": "var(--iro-10)"
      },
      {
        "id": 665,
        "word": "緑",
        "reading": "みどり",
        "romaji": "midori",
        "meaning": "Màu xanh; cây xanh",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 666,
        "word": "あります",
        "reading": "あります",
        "romaji": "arimasu",
        "meaning": "Có",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 667,
        "word": "新しい",
        "reading": "あたらしい",
        "romaji": "atarashii",
        "meaning": "Mới",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 668,
        "word": "古い",
        "reading": "ふるい",
        "romaji": "furui",
        "meaning": "Cũ",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 669,
        "word": "いい",
        "reading": "いい",
        "romaji": "ii",
        "meaning": "Tốt",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 670,
        "word": "多い",
        "reading": "おおい",
        "romaji": "ooi",
        "meaning": "Nhiều",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 671,
        "word": "少ない",
        "reading": "すくない",
        "romaji": "sukunai",
        "meaning": "Ít",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      },
      {
        "id": 189,
        "word": "大きい",
        "reading": "おおきい",
        "romaji": "ookii",
        "meaning": "To, lớn",
        "pos": "Từ vựng",
        "color": "var(--iro-8)"
      },
      {
        "id": 194,
        "word": "小さい",
        "reading": "ちいさい",
        "romaji": "chiisai",
        "meaning": "Nhỏ",
        "pos": "Từ vựng",
        "color": "var(--iro-9)"
      },
      {
        "id": 246,
        "word": "高い",
        "reading": "たかい",
        "romaji": "takai",
        "meaning": "Cao, đắt",
        "pos": "Từ vựng",
        "color": "var(--iro-10)"
      },
      {
        "id": 672,
        "word": "低い",
        "reading": "ひくい",
        "romaji": "hikui",
        "meaning": "Thấp",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 673,
        "word": "きれい",
        "reading": "きれい",
        "romaji": "kirei",
        "meaning": "Đẹp, sạch sẽ",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 674,
        "word": "静か",
        "reading": "しずか",
        "romaji": "shizuka",
        "meaning": "Yên tĩnh",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 675,
        "word": "にぎやか",
        "reading": "にぎやか",
        "romaji": "nigiyaka",
        "meaning": "Náo nhiệt",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 676,
        "word": "有名",
        "reading": "ゆうめい",
        "romaji": "yuumei",
        "meaning": "Nổi tiếng",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 677,
        "word": "どんな",
        "reading": "どんな",
        "romaji": "donna",
        "meaning": "Như thế nào",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 678,
        "word": "そして",
        "reading": "そして",
        "romaji": "soshite",
        "meaning": "Và",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      }
    ]
  },
  "jpd123-v4-3": {
    "lesson": "jpd123-v4-3",
    "course": "jpd123",
    "title": "Không có trang này",
    "total": 24,
    "items": [
      {
        "id": 679,
        "word": "少し",
        "reading": "すこし",
        "romaji": "sukoshi",
        "meaning": "Một chút",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 680,
        "word": "とても",
        "reading": "とても",
        "romaji": "totemo",
        "meaning": "Rất",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 681,
        "word": "どう",
        "reading": "どう",
        "romaji": "dou",
        "meaning": "Thế nào",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 682,
        "word": "そうですね",
        "reading": "そうですね",
        "romaji": "soudesune",
        "meaning": "Đúng vậy nhỉ",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 683,
        "word": "雨",
        "reading": "あめ",
        "romaji": "ame",
        "meaning": "Mưa",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 684,
        "word": "雪",
        "reading": "ゆき",
        "romaji": "yuki",
        "meaning": "Tuyết",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 29,
        "word": "日",
        "reading": "ひ",
        "romaji": "hi",
        "meaning": "Ngày / mặt trời",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      },
      {
        "id": 685,
        "word": "メロン",
        "reading": "メロン",
        "romaji": "meron",
        "meaning": "Dưa lưới",
        "pos": "Từ vựng",
        "color": "var(--iro-8)"
      },
      {
        "id": 686,
        "word": "暖かい",
        "reading": "あたたかい",
        "romaji": "atatakai",
        "meaning": "Ấm áp",
        "pos": "Từ vựng",
        "color": "var(--iro-9)"
      },
      {
        "id": 687,
        "word": "涼しい",
        "reading": "すずしい",
        "romaji": "suzushii",
        "meaning": "Mát mẻ",
        "pos": "Từ vựng",
        "color": "var(--iro-10)"
      },
      {
        "id": 688,
        "word": "暑い",
        "reading": "あつい",
        "romaji": "atsui",
        "meaning": "Nóng bức",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 689,
        "word": "寒い",
        "reading": "さむい",
        "romaji": "samui",
        "meaning": "Lạnh",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 690,
        "word": "天気がいい",
        "reading": "てんきがいい",
        "romaji": "tenkigaii",
        "meaning": "Thời tiết đẹp",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 691,
        "word": "天気がわるい",
        "reading": "てんきがわるい",
        "romaji": "tenkigawarui",
        "meaning": "Thời tiết xấu",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 692,
        "word": "温かい",
        "reading": "あたたかい",
        "romaji": "atatakai",
        "meaning": "Ấm",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 693,
        "word": "熱い",
        "reading": "あつい",
        "romaji": "atsui",
        "meaning": "Nóng",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 694,
        "word": "冷たい",
        "reading": "つめたい",
        "romaji": "tsumetai",
        "meaning": "Lạnh / mát",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      },
      {
        "id": 695,
        "word": "おいしい",
        "reading": "おいしい",
        "romaji": "oishii",
        "meaning": "Ngon",
        "pos": "Từ vựng",
        "color": "var(--iro-8)"
      },
      {
        "id": 696,
        "word": "甘い",
        "reading": "あまい",
        "romaji": "amai",
        "meaning": "Ngọt",
        "pos": "Từ vựng",
        "color": "var(--iro-9)"
      },
      {
        "id": 697,
        "word": "辛い",
        "reading": "からい",
        "romaji": "karai",
        "meaning": "Cay",
        "pos": "Từ vựng",
        "color": "var(--iro-10)"
      },
      {
        "id": 698,
        "word": "苦い",
        "reading": "にがい",
        "romaji": "nigai",
        "meaning": "Đắng",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 699,
        "word": "すっぱい",
        "reading": "すっぱい",
        "romaji": "suppai",
        "meaning": "Chua",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 700,
        "word": "一年中",
        "reading": "いちねんじゅう",
        "romaji": "ichinenjuu",
        "meaning": "Suốt 1 năm",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 701,
        "word": "あまり",
        "reading": "あまり",
        "romaji": "amari",
        "meaning": "Không ~ lắm",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      }
    ]
  },
  "jpd123-v5-1": {
    "lesson": "jpd123-v5-1",
    "course": "jpd123",
    "title": "Không có trang này",
    "total": 25,
    "items": [
      {
        "id": 148,
        "word": "今日",
        "reading": "きょう",
        "romaji": "kyou",
        "meaning": "Hôm nay",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 702,
        "word": "明日",
        "reading": "あした",
        "romaji": "ashita",
        "meaning": "Ngày mai",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 703,
        "word": "あさって",
        "reading": "あさって",
        "romaji": "asatte",
        "meaning": "Ngày kia",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 704,
        "word": "昨日",
        "reading": "きのう",
        "romaji": "kinou",
        "meaning": "Hôm qua",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 705,
        "word": "おととい",
        "reading": "おととい",
        "romaji": "ototoi",
        "meaning": "Hôm kia",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 122,
        "word": "先週",
        "reading": "せんしゅう",
        "romaji": "senshuu",
        "meaning": "Tuần trước",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 706,
        "word": "週末",
        "reading": "しゅうまつ",
        "romaji": "shuumatsu",
        "meaning": "Cuối tuần",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      },
      {
        "id": 224,
        "word": "家",
        "reading": "いえ",
        "romaji": "ie",
        "meaning": "Nhà",
        "pos": "Từ vựng",
        "color": "var(--iro-8)"
      },
      {
        "id": 707,
        "word": "へや",
        "reading": "へや",
        "romaji": "heya",
        "meaning": "Căn phòng",
        "pos": "Từ vựng",
        "color": "var(--iro-9)"
      },
      {
        "id": 708,
        "word": "デパート",
        "reading": "デパート",
        "romaji": "depaato",
        "meaning": "Trung tâm thương mại",
        "pos": "Từ vựng",
        "color": "var(--iro-10)"
      },
      {
        "id": 709,
        "word": "びじゅつかん",
        "reading": "びじゅつかん",
        "romaji": "bijutsukan",
        "meaning": "Bảo tàng mỹ thuật",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 710,
        "word": "ゲーム",
        "reading": "ゲーム",
        "romaji": "geemu",
        "meaning": "Trò chơi",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 711,
        "word": "かぞく",
        "reading": "かぞく",
        "romaji": "kazoku",
        "meaning": "Gia đình",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 712,
        "word": "こいびと",
        "reading": "こいびと",
        "romaji": "koibito",
        "meaning": "Người yêu",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 713,
        "word": "ともだち",
        "reading": "ともだち",
        "romaji": "tomodachi",
        "meaning": "Bạn bè",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 714,
        "word": "ルームメイト",
        "reading": "ルームメイト",
        "romaji": "ruumumeito",
        "meaning": "Bạn cùng phòng",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 715,
        "word": "どこか",
        "reading": "どこか",
        "romaji": "dokoka",
        "meaning": "Nơi nào đó",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      },
      {
        "id": 159,
        "word": "会います",
        "reading": "あいます",
        "romaji": "aimasu",
        "meaning": "Gặp gỡ",
        "pos": "Từ vựng",
        "color": "var(--iro-8)"
      },
      {
        "id": 716,
        "word": "つくります",
        "reading": "つくります",
        "romaji": "tsukurimasu",
        "meaning": "Làm, chế tạo",
        "pos": "Từ vựng",
        "color": "var(--iro-9)"
      },
      {
        "id": 717,
        "word": "買い物します",
        "reading": "かいものします",
        "romaji": "kaimonoshimasu",
        "meaning": "Mua sắm",
        "pos": "Từ vựng",
        "color": "var(--iro-10)"
      },
      {
        "id": 718,
        "word": "食事します",
        "reading": "しょくじします",
        "romaji": "shokujishimasu",
        "meaning": "Dùng bữa",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 719,
        "word": "洗濯します",
        "reading": "せんたくします",
        "romaji": "sentakushimasu",
        "meaning": "Giặt giũ",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 720,
        "word": "掃除します",
        "reading": "そうじします",
        "romaji": "soujishimasu",
        "meaning": "Lau dọn",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 721,
        "word": "それから",
        "reading": "それから",
        "romaji": "sorekara",
        "meaning": "Sau đó",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 722,
        "word": "一人で",
        "reading": "ひとりで",
        "romaji": "hitoride",
        "meaning": "Một mình",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      }
    ]
  },
  "jpd123-v5-2": {
    "lesson": "jpd123-v5-2",
    "course": "jpd123",
    "title": "Không có trang này",
    "total": 20,
    "items": [
      {
        "id": 311,
        "word": "今朝",
        "reading": "けさ",
        "romaji": "kesa",
        "meaning": "Sáng nay",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 121,
        "word": "先月",
        "reading": "せんげつ",
        "romaji": "sengetsu",
        "meaning": "Tháng trước",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 723,
        "word": "去年",
        "reading": "きょねん",
        "romaji": "kyonen",
        "meaning": "Năm ngoái",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 724,
        "word": "かぜ",
        "reading": "かぜ",
        "romaji": "kaze",
        "meaning": "Cảm cúm",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 725,
        "word": "天気",
        "reading": "てんき",
        "romaji": "tenki",
        "meaning": "Thời tiết",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 726,
        "word": "ばんごはん",
        "reading": "ばんごはん",
        "romaji": "bangohan",
        "meaning": "Cơm tối",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 727,
        "word": "ふく",
        "reading": "ふく",
        "romaji": "fuku",
        "meaning": "Quần áo",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      },
      {
        "id": 728,
        "word": "のぼります",
        "reading": "のぼります",
        "romaji": "noborimasu",
        "meaning": "Leo, trèo",
        "pos": "Từ vựng",
        "color": "var(--iro-8)"
      },
      {
        "id": 729,
        "word": "はいります",
        "reading": "はいります",
        "romaji": "hairimasu",
        "meaning": "Vào",
        "pos": "Từ vựng",
        "color": "var(--iro-9)"
      },
      {
        "id": 730,
        "word": "いそがしい",
        "reading": "いそがしい",
        "romaji": "isogashii",
        "meaning": "Bận",
        "pos": "Từ vựng",
        "color": "var(--iro-10)"
      },
      {
        "id": 731,
        "word": "おもしろい",
        "reading": "おもしろい",
        "romaji": "omoshiroi",
        "meaning": "Thú vị",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 732,
        "word": "きもちがいい",
        "reading": "きもちがいい",
        "romaji": "kimochigaii",
        "meaning": "Sảng khoái",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 246,
        "word": "高い",
        "reading": "たかい",
        "romaji": "takai",
        "meaning": "Cao, đắt",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 733,
        "word": "安い",
        "reading": "やすい",
        "romaji": "yasui",
        "meaning": "Rẻ",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 261,
        "word": "楽しい",
        "reading": "たのしい",
        "romaji": "tanoshii",
        "meaning": "Vui vẻ",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 734,
        "word": "むずかしい",
        "reading": "むずかしい",
        "romaji": "muzukashii",
        "meaning": "Khó",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 735,
        "word": "かんたん",
        "reading": "かんたん",
        "romaji": "kantan",
        "meaning": "Đơn giản",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      },
      {
        "id": 736,
        "word": "たいへん",
        "reading": "たいへん",
        "romaji": "taihen",
        "meaning": "Vất vả",
        "pos": "Từ vựng",
        "color": "var(--iro-8)"
      },
      {
        "id": 737,
        "word": "ひま",
        "reading": "ひま",
        "romaji": "hima",
        "meaning": "Rảnh rỗi",
        "pos": "Từ vựng",
        "color": "var(--iro-9)"
      },
      {
        "id": 738,
        "word": "どうして",
        "reading": "どうして",
        "romaji": "doushite",
        "meaning": "Tại sao",
        "pos": "Từ vựng",
        "color": "var(--iro-10)"
      }
    ]
  },
  "jpd123-v5-3": {
    "lesson": "jpd123-v5-3",
    "course": "jpd123",
    "title": "Không có trang này",
    "total": 14,
    "items": [
      {
        "id": 739,
        "word": "今度",
        "reading": "こんど",
        "romaji": "kondo",
        "meaning": "Lần tới",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 740,
        "word": "今晩",
        "reading": "こんばん",
        "romaji": "konban",
        "meaning": "Tối nay",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 106,
        "word": "今年",
        "reading": "ことし",
        "romaji": "kotoshi",
        "meaning": "Năm nay",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 154,
        "word": "来年",
        "reading": "らいねん",
        "romaji": "rainen",
        "meaning": "Sang năm",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 741,
        "word": "アニメ",
        "reading": "アニメ",
        "romaji": "anime",
        "meaning": "Hoạt hình",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 742,
        "word": "え",
        "reading": "え",
        "romaji": "e",
        "meaning": "Tranh",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 743,
        "word": "けしき",
        "reading": "けしき",
        "romaji": "keshiki",
        "meaning": "Phong cảnh",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      },
      {
        "id": 744,
        "word": "じてんしゃ",
        "reading": "じてんしゃ",
        "romaji": "jitensha",
        "meaning": "Xe đạp",
        "pos": "Từ vựng",
        "color": "var(--iro-8)"
      },
      {
        "id": 745,
        "word": "しゃしん",
        "reading": "しゃしん",
        "romaji": "shashin",
        "meaning": "Ảnh",
        "pos": "Từ vựng",
        "color": "var(--iro-9)"
      },
      {
        "id": 746,
        "word": "とります",
        "reading": "とります",
        "romaji": "torimasu",
        "meaning": "Chụp",
        "pos": "Từ vựng",
        "color": "var(--iro-10)"
      },
      {
        "id": 747,
        "word": "借ります",
        "reading": "かります",
        "romaji": "karimasu",
        "meaning": "Vay, mượn",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 748,
        "word": "ほしい",
        "reading": "ほしい",
        "romaji": "hoshii",
        "meaning": "Muốn có",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 252,
        "word": "好き",
        "reading": "すき",
        "romaji": "suki",
        "meaning": "Thích",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 749,
        "word": "きらい",
        "reading": "きらい",
        "romaji": "kirai",
        "meaning": "Ghét",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      }
    ]
  },
  "jpd123-v6-1": {
    "lesson": "jpd123-v6-1",
    "course": "jpd123",
    "title": "Không có trang này",
    "total": 24,
    "items": [
      {
        "id": 150,
        "word": "今週",
        "reading": "こんしゅう",
        "romaji": "konshuu",
        "meaning": "Tuần này",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 152,
        "word": "来週",
        "reading": "らいしゅう",
        "romaji": "raishuu",
        "meaning": "Tuần sau",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 149,
        "word": "今月",
        "reading": "こんげつ",
        "romaji": "kongetsu",
        "meaning": "Tháng này",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 153,
        "word": "来月",
        "reading": "らいげつ",
        "romaji": "raigetsu",
        "meaning": "Tháng sau",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 750,
        "word": "カラオケ",
        "reading": "カラオケ",
        "romaji": "karaoke",
        "meaning": "Hát karaoke",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 751,
        "word": "コンサート",
        "reading": "コンサート",
        "romaji": "konsaato",
        "meaning": "Buổi hòa nhạc",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 752,
        "word": "しあい",
        "reading": "しあい",
        "romaji": "shiai",
        "meaning": "Trận đấu",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      },
      {
        "id": 753,
        "word": "セール",
        "reading": "セール",
        "romaji": "seeru",
        "meaning": "Giảm giá",
        "pos": "Từ vựng",
        "color": "var(--iro-8)"
      },
      {
        "id": 754,
        "word": "チケット",
        "reading": "チケット",
        "romaji": "chiketto",
        "meaning": "Vé",
        "pos": "Từ vựng",
        "color": "var(--iro-9)"
      },
      {
        "id": 755,
        "word": "ちず",
        "reading": "ちず",
        "romaji": "chizu",
        "meaning": "Bản đồ",
        "pos": "Từ vựng",
        "color": "var(--iro-10)"
      },
      {
        "id": 756,
        "word": "ドライブ",
        "reading": "ドライブ",
        "romaji": "doraibu",
        "meaning": "Lái xe",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 757,
        "word": "みずぎ",
        "reading": "みずぎ",
        "romaji": "mizugi",
        "meaning": "Đồ bơi",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 758,
        "word": "やきゅう",
        "reading": "やきゅう",
        "romaji": "yakyuu",
        "meaning": "Bóng chày",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 759,
        "word": "やくそく",
        "reading": "やくそく",
        "romaji": "yakusoku",
        "meaning": "Hứa, hẹn",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 760,
        "word": "ようじ",
        "reading": "ようじ",
        "romaji": "youji",
        "meaning": "Việc bận",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 761,
        "word": "～まい",
        "reading": "～まい",
        "romaji": "mai",
        "meaning": "Cách đếm vật mỏng",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 666,
        "word": "あります",
        "reading": "あります",
        "romaji": "arimasu",
        "meaning": "Có",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      },
      {
        "id": 762,
        "word": "ざんねん",
        "reading": "ざんねん",
        "romaji": "zannen",
        "meaning": "Tiếc",
        "pos": "Từ vựng",
        "color": "var(--iro-8)"
      },
      {
        "id": 763,
        "word": "いっしょに",
        "reading": "いっしょに",
        "romaji": "isshoni",
        "meaning": "Cùng với",
        "pos": "Từ vựng",
        "color": "var(--iro-9)"
      },
      {
        "id": 616,
        "word": "いいですね",
        "reading": "いいですね",
        "romaji": "iidesune",
        "meaning": "Hay nhỉ",
        "pos": "Từ vựng",
        "color": "var(--iro-10)"
      },
      {
        "id": 764,
        "word": "ああ",
        "reading": "ああ",
        "romaji": "aa",
        "meaning": "A",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 348,
        "word": "すみません",
        "reading": "すみません",
        "romaji": "sumimasen",
        "meaning": "Xin lỗi",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 765,
        "word": "また今度",
        "reading": "またこんど",
        "romaji": "matakondo",
        "meaning": "Hẹn lần sau",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 766,
        "word": "わあ",
        "reading": "わあ",
        "romaji": "waa",
        "meaning": "Oa",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      }
    ]
  },
  "jpd123-v6-2": {
    "lesson": "jpd123-v6-2",
    "course": "jpd123",
    "title": "Không có trang này",
    "total": 23,
    "items": [
      {
        "id": 767,
        "word": "たべもの",
        "reading": "たべもの",
        "romaji": "tabemono",
        "meaning": "Đồ ăn",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 768,
        "word": "のみもの",
        "reading": "のみもの",
        "romaji": "nomimono",
        "meaning": "Đồ uống",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 769,
        "word": "やきにく",
        "reading": "やきにく",
        "romaji": "yakiniku",
        "meaning": "Thịt nướng",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 770,
        "word": "ラーメン",
        "reading": "ラーメン",
        "romaji": "raamen",
        "meaning": "Mỳ Nhật",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 771,
        "word": "たべほうだい",
        "reading": "たべほうだい",
        "romaji": "tabehoudai",
        "meaning": "Ăn buffet",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 772,
        "word": "コース",
        "reading": "コース",
        "romaji": "koosu",
        "meaning": "Suất ăn / khóa học",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 773,
        "word": "いざかや",
        "reading": "いざかや",
        "romaji": "izakaya",
        "meaning": "Quán rượu",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      },
      {
        "id": 774,
        "word": "えいがかん",
        "reading": "えいがかん",
        "romaji": "eigakan",
        "meaning": "Rạp chiếu phim",
        "pos": "Từ vựng",
        "color": "var(--iro-8)"
      },
      {
        "id": 775,
        "word": "ちかてつ",
        "reading": "ちかてつ",
        "romaji": "chikatetsu",
        "meaning": "Tàu điện ngầm",
        "pos": "Từ vựng",
        "color": "var(--iro-9)"
      },
      {
        "id": 776,
        "word": "かしゅ",
        "reading": "かしゅ",
        "romaji": "kashu",
        "meaning": "Ca sĩ",
        "pos": "Từ vựng",
        "color": "var(--iro-10)"
      },
      {
        "id": 777,
        "word": "きせつ",
        "reading": "きせつ",
        "romaji": "kisetsu",
        "meaning": "Mùa",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 778,
        "word": "コメディー",
        "reading": "コメディー",
        "romaji": "komedhii",
        "meaning": "Hài kịch",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 779,
        "word": "ジャズ",
        "reading": "ジャズ",
        "romaji": "jazu",
        "meaning": "Nhạc jazz",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 780,
        "word": "ツアー",
        "reading": "ツアー",
        "romaji": "tsuaa",
        "meaning": "Tour du lịch",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 343,
        "word": "どちら",
        "reading": "どちら",
        "romaji": "dochira",
        "meaning": "Ở đâu / phía nào",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 781,
        "word": "どちらも",
        "reading": "どちらも",
        "romaji": "dochiramo",
        "meaning": "Bên nào cũng",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 782,
        "word": "ちかい",
        "reading": "ちかい",
        "romaji": "chikai",
        "meaning": "Gần",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      },
      {
        "id": 783,
        "word": "とおい",
        "reading": "とおい",
        "romaji": "tooi",
        "meaning": "Xa",
        "pos": "Từ vựng",
        "color": "var(--iro-8)"
      },
      {
        "id": 784,
        "word": "はやい",
        "reading": "はやい",
        "romaji": "hayai",
        "meaning": "Sớm",
        "pos": "Từ vựng",
        "color": "var(--iro-9)"
      },
      {
        "id": 785,
        "word": "ひろい",
        "reading": "ひろい",
        "romaji": "hiroi",
        "meaning": "Rộng",
        "pos": "Từ vựng",
        "color": "var(--iro-10)"
      },
      {
        "id": 786,
        "word": "いちばん",
        "reading": "いちばん",
        "romaji": "ichiban",
        "meaning": "Nhất",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 787,
        "word": "ぜんぶ",
        "reading": "ぜんぶ",
        "romaji": "zenbu",
        "meaning": "Toàn bộ",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 788,
        "word": "そうですねえ",
        "reading": "そうですねえ",
        "romaji": "soudesunee",
        "meaning": "Để xem nào",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      }
    ]
  },
  "jpd123-v6-3": {
    "lesson": "jpd123-v6-3",
    "course": "jpd123",
    "title": "Không có trang này",
    "total": 8,
    "items": [
      {
        "id": 789,
        "word": "おこのみやき",
        "reading": "おこのみやき",
        "romaji": "okonomiyaki",
        "meaning": "Bánh xèo Nhật",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 790,
        "word": "すきやき",
        "reading": "すきやき",
        "romaji": "sukiyaki",
        "meaning": "Món nhúng bò và rau",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 791,
        "word": "あそびます",
        "reading": "あそびます",
        "romaji": "asobimasu",
        "meaning": "Chơi",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 792,
        "word": "ぜひ",
        "reading": "ぜひ",
        "romaji": "zehi",
        "meaning": "Nhất định",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 793,
        "word": "まだ",
        "reading": "まだ",
        "romaji": "mada",
        "meaning": "Vẫn, chưa",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 794,
        "word": "もう",
        "reading": "もう",
        "romaji": "mou",
        "meaning": "Đã, rồi",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 795,
        "word": "そうしましょう",
        "reading": "そうしましょう",
        "romaji": "soushimashou",
        "meaning": "Làm như thế đi",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      },
      {
        "id": 796,
        "word": "わかりました",
        "reading": "わかりました",
        "romaji": "wakarimashita",
        "meaning": "Tôi hiểu rồi",
        "pos": "Từ vựng",
        "color": "var(--iro-8)"
      }
    ]
  },
  "jpd123-v7-1": {
    "lesson": "jpd123-v7-1",
    "course": "jpd123",
    "title": "Không có trang này",
    "total": 20,
    "items": [
      {
        "id": 797,
        "word": "かいさつ",
        "reading": "かいさつ",
        "romaji": "kaisatsu",
        "meaning": "Soát vé",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 95,
        "word": "木",
        "reading": "き",
        "romaji": "ki",
        "meaning": "Cây / gỗ",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 798,
        "word": "こうばん",
        "reading": "こうばん",
        "romaji": "kouban",
        "meaning": "Đồn cảnh sát",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 799,
        "word": "じどうはんばいき",
        "reading": "じどうはんばいき",
        "romaji": "jidouhanbaiki",
        "meaning": "Máy bán hàng tự động",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 800,
        "word": "ポスト",
        "reading": "ポスト",
        "romaji": "posuto",
        "meaning": "Thùng thư",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 801,
        "word": "花",
        "reading": "はな",
        "romaji": "hana",
        "meaning": "Hoa",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 802,
        "word": "いぬ",
        "reading": "いぬ",
        "romaji": "inu",
        "meaning": "Con chó",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      },
      {
        "id": 803,
        "word": "間",
        "reading": "あいだ",
        "romaji": "aida",
        "meaning": "Giữa",
        "pos": "Từ vựng",
        "color": "var(--iro-8)"
      },
      {
        "id": 277,
        "word": "上",
        "reading": "うえ",
        "romaji": "ue",
        "meaning": "Trên",
        "pos": "Từ vựng",
        "color": "var(--iro-9)"
      },
      {
        "id": 280,
        "word": "下",
        "reading": "した",
        "romaji": "shita",
        "meaning": "Dưới",
        "pos": "Từ vựng",
        "color": "var(--iro-10)"
      },
      {
        "id": 804,
        "word": "近く",
        "reading": "ちかく",
        "romaji": "chikaku",
        "meaning": "Gần",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 805,
        "word": "となり",
        "reading": "となり",
        "romaji": "tonari",
        "meaning": "Bên cạnh",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 806,
        "word": "なか",
        "reading": "なか",
        "romaji": "naka",
        "meaning": "Trong",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 270,
        "word": "外",
        "reading": "そと",
        "romaji": "soto",
        "meaning": "Ngoài",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 116,
        "word": "前",
        "reading": "まえ",
        "romaji": "mae",
        "meaning": "Trước",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 128,
        "word": "後ろ",
        "reading": "うしろ",
        "romaji": "ushiro",
        "meaning": "Sau",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 807,
        "word": "横",
        "reading": "よこ",
        "romaji": "yoko",
        "meaning": "Bên cạnh",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      },
      {
        "id": 808,
        "word": "むかえにいきます",
        "reading": "むかえにいきます",
        "romaji": "mukaeniikimasu",
        "meaning": "Đi đón",
        "pos": "Từ vựng",
        "color": "var(--iro-8)"
      },
      {
        "id": 809,
        "word": "います",
        "reading": "います",
        "romaji": "imasu",
        "meaning": "Có mặt ở",
        "pos": "Từ vựng",
        "color": "var(--iro-9)"
      },
      {
        "id": 810,
        "word": "もしもし",
        "reading": "もしもし",
        "romaji": "moshimoshi",
        "meaning": "A lô",
        "pos": "Từ vựng",
        "color": "var(--iro-10)"
      }
    ]
  },
  "jpd123-v7-2": {
    "lesson": "jpd123-v7-2",
    "course": "jpd123",
    "title": "Không có trang này",
    "total": 34,
    "items": [
      {
        "id": 811,
        "word": "いす",
        "reading": "いす",
        "romaji": "isu",
        "meaning": "Ghế",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 812,
        "word": "テーブル",
        "reading": "テーブル",
        "romaji": "teeburu",
        "meaning": "Bàn",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 813,
        "word": "でんしレンジ",
        "reading": "でんしレンジ",
        "romaji": "denshirenji",
        "meaning": "Lò vi sóng",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 814,
        "word": "れいぞうこ",
        "reading": "れいぞうこ",
        "romaji": "reizouko",
        "meaning": "Tủ lạnh",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 815,
        "word": "さとう",
        "reading": "さとう",
        "romaji": "satou",
        "meaning": "Đường",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 816,
        "word": "しお",
        "reading": "しお",
        "romaji": "shio",
        "meaning": "Muối",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 817,
        "word": "しょうゆ",
        "reading": "しょうゆ",
        "romaji": "shouyu",
        "meaning": "Xì dầu",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      },
      {
        "id": 818,
        "word": "コップ",
        "reading": "コップ",
        "romaji": "koppu",
        "meaning": "Cốc",
        "pos": "Từ vựng",
        "color": "var(--iro-8)"
      },
      {
        "id": 819,
        "word": "おさら",
        "reading": "おさら",
        "romaji": "osara",
        "meaning": "Đĩa",
        "pos": "Từ vựng",
        "color": "var(--iro-9)"
      },
      {
        "id": 820,
        "word": "スプーン",
        "reading": "スプーン",
        "romaji": "supuun",
        "meaning": "Thìa",
        "pos": "Từ vựng",
        "color": "var(--iro-10)"
      },
      {
        "id": 821,
        "word": "ナイフ",
        "reading": "ナイフ",
        "romaji": "naifu",
        "meaning": "Dao",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 822,
        "word": "フォーク",
        "reading": "フォーク",
        "romaji": "fooku",
        "meaning": "Nĩa",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 823,
        "word": "はし",
        "reading": "はし",
        "romaji": "hashi",
        "meaning": "Đũa",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 824,
        "word": "かんじ",
        "reading": "かんじ",
        "romaji": "kanji",
        "meaning": "Chữ Hán",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 825,
        "word": "どれ",
        "reading": "どれ",
        "romaji": "dore",
        "meaning": "Cái nào",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 826,
        "word": "どの～",
        "reading": "どの～",
        "romaji": "dono",
        "meaning": "~ nào",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 827,
        "word": "あらいます",
        "reading": "あらいます",
        "romaji": "araimasu",
        "meaning": "Giặt, rửa",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      },
      {
        "id": 642,
        "word": "おきます",
        "reading": "おきます",
        "romaji": "okimasu",
        "meaning": "Thức dậy",
        "pos": "Từ vựng",
        "color": "var(--iro-8)"
      },
      {
        "id": 828,
        "word": "かきます",
        "reading": "かきます",
        "romaji": "kakimasu",
        "meaning": "Viết",
        "pos": "Từ vựng",
        "color": "var(--iro-9)"
      },
      {
        "id": 829,
        "word": "かします",
        "reading": "かします",
        "romaji": "kashimasu",
        "meaning": "Cho mượn",
        "pos": "Từ vựng",
        "color": "var(--iro-10)"
      },
      {
        "id": 639,
        "word": "ききます",
        "reading": "ききます",
        "romaji": "kikimasu",
        "meaning": "Nghe",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 830,
        "word": "きります",
        "reading": "きります",
        "romaji": "kirimasu",
        "meaning": "Cắt",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 831,
        "word": "つかいます",
        "reading": "つかいます",
        "romaji": "tsukaimasu",
        "meaning": "Sử dụng",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 832,
        "word": "てつだいます",
        "reading": "てつだいます",
        "romaji": "tetsudaimasu",
        "meaning": "Giúp đỡ",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 746,
        "word": "とります",
        "reading": "とります",
        "romaji": "torimasu",
        "meaning": "Chụp",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 833,
        "word": "もっていきます",
        "reading": "もっていきます",
        "romaji": "motteikimasu",
        "meaning": "Mang đi",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 834,
        "word": "わかります",
        "reading": "わかります",
        "romaji": "wakarimasu",
        "meaning": "Hiểu",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      },
      {
        "id": 835,
        "word": "だします",
        "reading": "だします",
        "romaji": "dashimasu",
        "meaning": "Nộp, lấy ra",
        "pos": "Từ vựng",
        "color": "var(--iro-8)"
      },
      {
        "id": 836,
        "word": "いれます",
        "reading": "いれます",
        "romaji": "iremasu",
        "meaning": "Cho vào",
        "pos": "Từ vựng",
        "color": "var(--iro-9)"
      },
      {
        "id": 837,
        "word": "おしえます",
        "reading": "おしえます",
        "romaji": "oshiemasu",
        "meaning": "Dạy",
        "pos": "Từ vựng",
        "color": "var(--iro-10)"
      },
      {
        "id": 838,
        "word": "たくさん",
        "reading": "たくさん",
        "romaji": "takusan",
        "meaning": "Nhiều",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 839,
        "word": "すみませんが",
        "reading": "すみませんが",
        "romaji": "sumimasenga",
        "meaning": "Xin lỗi",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 764,
        "word": "ああ",
        "reading": "ああ",
        "romaji": "aa",
        "meaning": "A",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 840,
        "word": "いいですよ",
        "reading": "いいですよ",
        "romaji": "iidesuyo",
        "meaning": "Được đấy",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      }
    ]
  },
  "jpd123-v7-3": {
    "lesson": "jpd123-v7-3",
    "course": "jpd123",
    "title": "Không có trang này",
    "total": 16,
    "items": [
      {
        "id": 841,
        "word": "うた",
        "reading": "うた",
        "romaji": "uta",
        "meaning": "Bài hát",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 842,
        "word": "ギター",
        "reading": "ギター",
        "romaji": "gitaa",
        "meaning": "Đàn guitar",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 843,
        "word": "だいどころ",
        "reading": "だいどころ",
        "romaji": "daidokoro",
        "meaning": "Nhà bếp",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 844,
        "word": "たばこ",
        "reading": "たばこ",
        "romaji": "tabako",
        "meaning": "Thuốc lá",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 845,
        "word": "でんわ",
        "reading": "でんわ",
        "romaji": "denwa",
        "meaning": "Điện thoại",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 846,
        "word": "ピザ",
        "reading": "ピザ",
        "romaji": "piza",
        "meaning": "Pizza",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 847,
        "word": "まど",
        "reading": "まど",
        "romaji": "mado",
        "meaning": "Cửa sổ",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      },
      {
        "id": 848,
        "word": "うたいます",
        "reading": "うたいます",
        "romaji": "utaimasu",
        "meaning": "Hát",
        "pos": "Từ vựng",
        "color": "var(--iro-8)"
      },
      {
        "id": 849,
        "word": "すいます",
        "reading": "すいます",
        "romaji": "suimasu",
        "meaning": "Hút",
        "pos": "Từ vựng",
        "color": "var(--iro-9)"
      },
      {
        "id": 171,
        "word": "話します",
        "reading": "はなします",
        "romaji": "hanashimasu",
        "meaning": "Nói chuyện",
        "pos": "Từ vựng",
        "color": "var(--iro-10)"
      },
      {
        "id": 850,
        "word": "ひきます",
        "reading": "ひきます",
        "romaji": "hikimasu",
        "meaning": "Chơi nhạc cụ",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 851,
        "word": "もちます",
        "reading": "もちます",
        "romaji": "mochimasu",
        "meaning": "Cầm, mang",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 852,
        "word": "あけます",
        "reading": "あけます",
        "romaji": "akemasu",
        "meaning": "Mở",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 853,
        "word": "しめます",
        "reading": "しめます",
        "romaji": "shimemasu",
        "meaning": "Đóng",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 854,
        "word": "かけます",
        "reading": "かけます",
        "romaji": "kakemasu",
        "meaning": "Gọi",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 855,
        "word": "もってきます",
        "reading": "もってきます",
        "romaji": "mottekimasu",
        "meaning": "Mang đến",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      }
    ]
  },
  "jpd133-v10-1": {
    "lesson": "jpd133-v10-1",
    "course": "jpd133",
    "title": "Không có trang này",
    "total": 17,
    "items": [
      {
        "id": 259,
        "word": "音",
        "reading": "おと",
        "romaji": "oto",
        "meaning": "Âm thanh, tiếng động",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 974,
        "word": "声",
        "reading": "こえ",
        "romaji": "koe",
        "meaning": "Giọng nói",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 975,
        "word": "薬",
        "reading": "くすり",
        "romaji": "kusuri",
        "meaning": "Thuốc (uống, bôi…)",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 291,
        "word": "右",
        "reading": "みぎ",
        "romaji": "migi",
        "meaning": "Bên phải",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 293,
        "word": "左",
        "reading": "ひだり",
        "romaji": "hidari",
        "meaning": "Bên trái",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 976,
        "word": "角",
        "reading": "かど",
        "romaji": "kado",
        "meaning": "Góc đường",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 977,
        "word": "交差点",
        "reading": "こうさてん",
        "romaji": "kousaten",
        "meaning": "Ngã tư",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      },
      {
        "id": 978,
        "word": "信号",
        "reading": "しんごう",
        "romaji": "shingou",
        "meaning": "Tín hiệu / Đèn giao thông",
        "pos": "Từ vựng",
        "color": "var(--iro-8)"
      },
      {
        "id": 979,
        "word": "橋",
        "reading": "はし",
        "romaji": "hashi",
        "meaning": "Cầu",
        "pos": "Từ vựng",
        "color": "var(--iro-9)"
      },
      {
        "id": 294,
        "word": "道",
        "reading": "みち",
        "romaji": "michi",
        "meaning": "Đường",
        "pos": "Từ vựng",
        "color": "var(--iro-10)"
      },
      {
        "id": 980,
        "word": "～つ目",
        "reading": "つめ",
        "romaji": "tsume",
        "meaning": "Thứ ～ (đếm thứ tự)",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 981,
        "word": "探します［探す］",
        "reading": "さがします",
        "romaji": "sagashimasu",
        "meaning": "Tìm kiếm / Tìm",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 982,
        "word": "飲みます［飲む］",
        "reading": "のみます",
        "romaji": "nomimasu",
        "meaning": "Uống",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 983,
        "word": "曲がります［曲がる］",
        "reading": "まがります",
        "romaji": "magarimasu",
        "meaning": "Rẽ / Quẹo",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 984,
        "word": "渡ります［渡る］",
        "reading": "わたります",
        "romaji": "watarimasu",
        "meaning": "Qua, băng qua",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 985,
        "word": "聞こえます［聞こえる］",
        "reading": "きこえます",
        "romaji": "kikoemasu",
        "meaning": "Nghe thấy / Nghe được",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 986,
        "word": "見えます［見える］",
        "reading": "みえます",
        "romaji": "miemasu",
        "meaning": "Nhìn thấy / Nhìn được",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      }
    ]
  },
  "jpd133-v10-2": {
    "lesson": "jpd133-v10-2",
    "course": "jpd133",
    "title": "Không có trang này",
    "total": 16,
    "items": [
      {
        "id": 987,
        "word": "（お）客（さん）",
        "reading": "おきゃくさん",
        "romaji": "okyakusan",
        "meaning": "Khách",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 988,
        "word": "手",
        "reading": "て",
        "romaji": "te",
        "meaning": "Tay",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 989,
        "word": "荷物",
        "reading": "にもつ",
        "romaji": "nimotsu",
        "meaning": "Hành lý / Bưu phẩm",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 990,
        "word": "他",
        "reading": "ほか",
        "romaji": "hoka",
        "meaning": "Khác",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 991,
        "word": "皆さん",
        "reading": "みなさん",
        "romaji": "minasan",
        "meaning": "Mọi người",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 992,
        "word": "（お）土産",
        "reading": "おみやげ",
        "romaji": "omiyage",
        "meaning": "Quà (lưu niệm)",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 993,
        "word": "押します［押す］",
        "reading": "おします",
        "romaji": "oshimasu",
        "meaning": "Ấn / Đẩy",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      },
      {
        "id": 994,
        "word": "座ります［座る］",
        "reading": "すわります",
        "romaji": "suwarimasu",
        "meaning": "Ngồi",
        "pos": "Từ vựng",
        "color": "var(--iro-8)"
      },
      {
        "id": 995,
        "word": "立ちます［立つ］",
        "reading": "たちます",
        "romaji": "tachimasu",
        "meaning": "Đứng",
        "pos": "Từ vựng",
        "color": "var(--iro-9)"
      },
      {
        "id": 958,
        "word": "入ります［入る］",
        "reading": "はいります",
        "romaji": "hairimasu",
        "meaning": "Vào, đi vào; Gia nhập, tham gia",
        "pos": "Từ vựng",
        "color": "var(--iro-10)"
      },
      {
        "id": 996,
        "word": "持って帰ります［持って帰る］",
        "reading": "もってかえります",
        "romaji": "mottekaerimasu",
        "meaning": "Mang về",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 997,
        "word": "遅れます［遅れる］",
        "reading": "おくれます",
        "romaji": "okuremasu",
        "meaning": "Muộn, chậm trễ",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 998,
        "word": "捨てます［捨てる］",
        "reading": "すてます",
        "romaji": "sutemasu",
        "meaning": "Vứt, vứt bỏ",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 999,
        "word": "危ない",
        "reading": "あぶない",
        "romaji": "abunai",
        "meaning": "Nguy hiểm",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 1000,
        "word": "大切（な）",
        "reading": "たいせつ",
        "romaji": "taisetsu",
        "meaning": "Quan trọng / Quý giá",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 1001,
        "word": "迷惑（な）",
        "reading": "めいわく",
        "romaji": "meiwaku",
        "meaning": "Phiền phức",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      }
    ]
  },
  "jpd133-v10-3": {
    "lesson": "jpd133-v10-3",
    "course": "jpd133",
    "title": "Không có trang này",
    "total": 17,
    "items": [
      {
        "id": 1002,
        "word": "鳥",
        "reading": "とり",
        "romaji": "tori",
        "meaning": "Chim",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 1003,
        "word": "入り口",
        "reading": "いりぐち",
        "romaji": "iriguchi",
        "meaning": "Cửa vào / Lối vào",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 1004,
        "word": "出口",
        "reading": "でぐち",
        "romaji": "deguchi",
        "meaning": "Cửa ra / Lối ra",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 1005,
        "word": "観覧車",
        "reading": "かんらんしゃ",
        "romaji": "kanransha",
        "meaning": "Xe tham quan",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 1006,
        "word": "～たち",
        "reading": "たち",
        "romaji": "tachi",
        "meaning": "Các ～ / Bọn ～ (số nhiều)",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 1007,
        "word": "歩きます［歩く］",
        "reading": "あるきます",
        "romaji": "arukimasu",
        "meaning": "Đi bộ",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 1008,
        "word": "飛びます［飛ぶ］",
        "reading": "とびます",
        "romaji": "tobimasu",
        "meaning": "Bay",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      },
      {
        "id": 1009,
        "word": "なります［なる］",
        "reading": "なります",
        "romaji": "narimasu",
        "meaning": "Trở nên / Trở thành",
        "pos": "Từ vựng",
        "color": "var(--iro-8)"
      },
      {
        "id": 1010,
        "word": "休みます［休む］",
        "reading": "やすみます",
        "romaji": "yasumimasu",
        "meaning": "Nghỉ",
        "pos": "Từ vựng",
        "color": "var(--iro-9)"
      },
      {
        "id": 1011,
        "word": "あそこのベンチで休みましょう",
        "reading": "あそこのベンチでやすみましょう",
        "romaji": "asokonobenchideyasumimashou",
        "meaning": "Cùng nghỉ ở ghế băng kia nào!",
        "pos": "Từ vựng",
        "color": "var(--iro-10)"
      },
      {
        "id": 1012,
        "word": "やります［やる］",
        "reading": "やります",
        "romaji": "yarimasu",
        "meaning": "Cho",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 1013,
        "word": "おなかがすきます［すく］",
        "reading": "おなかがすきます",
        "romaji": "onakagasukimasu",
        "meaning": "Đói",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 1014,
        "word": "のどがかわきます［かわく］",
        "reading": "のどがかわきます",
        "romaji": "nodogakawakimasu",
        "meaning": "Khát",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 1015,
        "word": "疲れます［疲れる］",
        "reading": "つかれます",
        "romaji": "tsukaremasu",
        "meaning": "Mệt",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 1016,
        "word": "痛い",
        "reading": "いたい",
        "romaji": "itai",
        "meaning": "Đau",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 1017,
        "word": "暗い",
        "reading": "くらい",
        "romaji": "kurai",
        "meaning": "Tối",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 1018,
        "word": "本当だ",
        "reading": "ほんとうだ",
        "romaji": "hontouda",
        "meaning": "Thật",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      }
    ]
  },
  "jpd133-v11-1": {
    "lesson": "jpd133-v11-1",
    "course": "jpd133",
    "title": "Không có trang này",
    "total": 19,
    "items": [
      {
        "id": 1019,
        "word": "頭",
        "reading": "あたま",
        "romaji": "atama",
        "meaning": "Đầu",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 173,
        "word": "会話",
        "reading": "かいわ",
        "romaji": "kaiwa",
        "meaning": "Hội thoại",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 1020,
        "word": "作文",
        "reading": "さくぶん",
        "romaji": "sakubun",
        "meaning": "Tập làm văn, viết văn",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 1021,
        "word": "雑誌",
        "reading": "ざっし",
        "romaji": "zasshi",
        "meaning": "Tạp chí",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 1022,
        "word": "店長",
        "reading": "てんちょう",
        "romaji": "tenchou",
        "meaning": "Chủ cửa hàng",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 1023,
        "word": "日記",
        "reading": "にっき",
        "romaji": "nikki",
        "meaning": "Nhật kí",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 1024,
        "word": "初め",
        "reading": "はじめ",
        "romaji": "hajime",
        "meaning": "Đầu, ban đầu",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      },
      {
        "id": 1025,
        "word": "一人暮らし",
        "reading": "ひとりぐらし",
        "romaji": "hitorigurashi",
        "meaning": "Sống một mình",
        "pos": "Từ vựng",
        "color": "var(--iro-8)"
      },
      {
        "id": 1026,
        "word": "平日",
        "reading": "へいじつ",
        "romaji": "heijitsu",
        "meaning": "Ngày thường",
        "pos": "Từ vựng",
        "color": "var(--iro-9)"
      },
      {
        "id": 125,
        "word": "毎週",
        "reading": "まいしゅう",
        "romaji": "maishuu",
        "meaning": "Hàng tuần",
        "pos": "Từ vựng",
        "color": "var(--iro-10)"
      },
      {
        "id": 1027,
        "word": "終わります［終わる］",
        "reading": "おわります",
        "romaji": "owarimasu",
        "meaning": "Kết thúc",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 1028,
        "word": "通います［通う］",
        "reading": "かよいます",
        "romaji": "kayoimasu",
        "meaning": "Đi (học, làm)",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 1029,
        "word": "ひきます［ひく］",
        "reading": "ひきます",
        "romaji": "hikimasu",
        "meaning": "Nhiễm (cảm, bệnh)",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 1010,
        "word": "休みます［休む］",
        "reading": "やすみます",
        "romaji": "yasumimasu",
        "meaning": "Nghỉ",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 1030,
        "word": "慣れます［慣れる］",
        "reading": "なれます",
        "romaji": "naremasu",
        "meaning": "Quen",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 1031,
        "word": "忘れます［忘れる］",
        "reading": "わすれます",
        "romaji": "wasuremasu",
        "meaning": "Quên",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 1032,
        "word": "散歩します［散歩する］",
        "reading": "さんぽします",
        "romaji": "sanposhimasu",
        "meaning": "Đi dạo",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      },
      {
        "id": 1033,
        "word": "厳しい",
        "reading": "きびしい",
        "romaji": "kibishii",
        "meaning": "Nghiêm khắc",
        "pos": "Từ vựng",
        "color": "var(--iro-8)"
      },
      {
        "id": 1034,
        "word": "眠い",
        "reading": "ねむい",
        "romaji": "nemui",
        "meaning": "Buồn ngủ",
        "pos": "Từ vựng",
        "color": "var(--iro-9)"
      }
    ]
  },
  "jpd133-v11-2": {
    "lesson": "jpd133-v11-2",
    "course": "jpd133",
    "title": "Không có trang này",
    "total": 10,
    "items": [
      {
        "id": 11,
        "word": "外国",
        "reading": "がいこく",
        "romaji": "gaikoku",
        "meaning": "Nước ngoài NGOẠI QUỐC",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 196,
        "word": "小学生",
        "reading": "しょうがくせい",
        "romaji": "shougakusei",
        "meaning": "Học sinh tiểu học, cấp 1",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 1035,
        "word": "中学生",
        "reading": "ちゅうがくせい",
        "romaji": "chuugakusei",
        "meaning": "Học sinh trung học, cấp 2",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 1036,
        "word": "選手",
        "reading": "せんしゅ",
        "romaji": "senshu",
        "meaning": "Tuyển thủ / Cầu thủ",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 230,
        "word": "祖父",
        "reading": "そふ",
        "romaji": "sofu",
        "meaning": "Ông",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 1037,
        "word": "始めます［始める］",
        "reading": "はじめます",
        "romaji": "hajimemasu",
        "meaning": "Bắt đầu",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 1038,
        "word": "別れます［別れる］",
        "reading": "わかれます",
        "romaji": "wakaremasu",
        "meaning": "Chia tay",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      },
      {
        "id": 1039,
        "word": "卒業します［卒業する］",
        "reading": "そつぎょうします",
        "romaji": "sotsugyoushimasu",
        "meaning": "Tốt nghiệp",
        "pos": "Từ vựng",
        "color": "var(--iro-8)"
      },
      {
        "id": 1040,
        "word": "入学します［入学する］",
        "reading": "にゅうがくします",
        "romaji": "nyuugakushimasu",
        "meaning": "Nhập học",
        "pos": "Từ vựng",
        "color": "var(--iro-9)"
      },
      {
        "id": 1041,
        "word": "初めて",
        "reading": "はじめて",
        "romaji": "hajimete",
        "meaning": "Lần đầu tiên",
        "pos": "Từ vựng",
        "color": "var(--iro-10)"
      }
    ]
  },
  "jpd133-v11-3": {
    "lesson": "jpd133-v11-3",
    "course": "jpd133",
    "title": "Không có trang này",
    "total": 3,
    "items": [
      {
        "id": 1042,
        "word": "消します［消す］",
        "reading": "けします",
        "romaji": "keshimasu",
        "meaning": "Tắt",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 1043,
        "word": "つけます［つける］",
        "reading": "つけます",
        "romaji": "tsukemasu",
        "meaning": "Bật",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 1044,
        "word": "引越しします［引越しする］",
        "reading": "ひっこしします",
        "romaji": "hikkoshishimasu",
        "meaning": "Chuyển nhà",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      }
    ]
  },
  "jpd133-v8-1": {
    "lesson": "jpd133-v8-1",
    "course": "jpd133",
    "title": "Không có trang này",
    "total": 35,
    "items": [
      {
        "id": 856,
        "word": "両親",
        "reading": "りょうしん",
        "romaji": "ryoushin",
        "meaning": "Bố mẹ (của mình)",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 228,
        "word": "父",
        "reading": "ちち",
        "romaji": "chichi",
        "meaning": "Bố (của mình)",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 231,
        "word": "母",
        "reading": "はは",
        "romaji": "haha",
        "meaning": "Mẹ (của mình)",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 237,
        "word": "兄弟",
        "reading": "きょうだい",
        "romaji": "kyoudai",
        "meaning": "Anh chị",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 235,
        "word": "兄",
        "reading": "あに",
        "romaji": "ani",
        "meaning": "Anh trai (của mình)",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 240,
        "word": "姉",
        "reading": "あね",
        "romaji": "ane",
        "meaning": "Chị gái (của mình)",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 238,
        "word": "弟",
        "reading": "おとうと",
        "romaji": "otouto",
        "meaning": "Em trai (của mình)",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      },
      {
        "id": 243,
        "word": "妹",
        "reading": "いもうと",
        "romaji": "imouto",
        "meaning": "Em gái (của mình)",
        "pos": "Từ vựng",
        "color": "var(--iro-8)"
      },
      {
        "id": 857,
        "word": "夫",
        "reading": "おっと",
        "romaji": "otto",
        "meaning": "Chồng (của mình)",
        "pos": "Từ vựng",
        "color": "var(--iro-9)"
      },
      {
        "id": 858,
        "word": "妻",
        "reading": "つま",
        "romaji": "tsuma",
        "meaning": "Vợ (của mình)",
        "pos": "Từ vựng",
        "color": "var(--iro-10)"
      },
      {
        "id": 859,
        "word": "子ども",
        "reading": "こども",
        "romaji": "kodomo",
        "meaning": "Con (của mình)",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 860,
        "word": "息子",
        "reading": "むすこ",
        "romaji": "musuko",
        "meaning": "Con trai (của mình)",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 861,
        "word": "娘",
        "reading": "むすめ",
        "romaji": "musume",
        "meaning": "Con gái (của mình)",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 229,
        "word": "お父さん",
        "reading": "おとうさん",
        "romaji": "otousan",
        "meaning": "Bố (của người khác)",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 232,
        "word": "お母さん",
        "reading": "おかあさん",
        "romaji": "okaasan",
        "meaning": "Mẹ (của người khác)",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 236,
        "word": "お兄さん",
        "reading": "おにいさん",
        "romaji": "oniisan",
        "meaning": "Anh trai (của người khác)",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 241,
        "word": "お姉さん",
        "reading": "おねえさん",
        "romaji": "oneesan",
        "meaning": "Chị gái (của người khác)",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      },
      {
        "id": 239,
        "word": "弟さん",
        "reading": "おとうとさん",
        "romaji": "otoutosan",
        "meaning": "Em trai (của người khác)",
        "pos": "Từ vựng",
        "color": "var(--iro-8)"
      },
      {
        "id": 244,
        "word": "妹さん",
        "reading": "いもうとさん",
        "romaji": "imoutosan",
        "meaning": "Em gái (của người khác)",
        "pos": "Từ vựng",
        "color": "var(--iro-9)"
      },
      {
        "id": 862,
        "word": "お子さん",
        "reading": "おこさん",
        "romaji": "okosan",
        "meaning": "Con (của người khác)",
        "pos": "Từ vựng",
        "color": "var(--iro-10)"
      },
      {
        "id": 863,
        "word": "猫",
        "reading": "ねこ",
        "romaji": "neko",
        "meaning": "Con mèo",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 864,
        "word": "医者",
        "reading": "いしゃ",
        "romaji": "isha",
        "meaning": "Bác sỹ",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 248,
        "word": "高校生",
        "reading": "こうこうせい",
        "romaji": "koukousei",
        "meaning": "Học sinh cấp ba",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 190,
        "word": "大学生",
        "reading": "だいがくせい",
        "romaji": "daigakusei",
        "meaning": "Sinh viên đại học",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 865,
        "word": "～人",
        "reading": "にん",
        "romaji": "nin",
        "meaning": "～ người (đơn vị đếm người)",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 39,
        "word": "一人",
        "reading": "ひとり",
        "romaji": "hitori",
        "meaning": "1 người (cách đọc đặc biệt)",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 866,
        "word": "二人",
        "reading": "ふたり",
        "romaji": "futari",
        "meaning": "2 người (cách đọc đặc biệt)",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      },
      {
        "id": 103,
        "word": "何人",
        "reading": "なんにん",
        "romaji": "nannin",
        "meaning": "Mấy người",
        "pos": "Từ vựng",
        "color": "var(--iro-8)"
      },
      {
        "id": 867,
        "word": "～匹",
        "reading": "ひき",
        "romaji": "hiki",
        "meaning": "～ con",
        "pos": "Từ vựng",
        "color": "var(--iro-9)"
      },
      {
        "id": 868,
        "word": "一匹",
        "reading": "いっぴき",
        "romaji": "ippiki",
        "meaning": "1 con vật",
        "pos": "Từ vựng",
        "color": "var(--iro-10)"
      },
      {
        "id": 869,
        "word": "六匹",
        "reading": "ろっぴき",
        "romaji": "roppiki",
        "meaning": "6 con vật",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 870,
        "word": "八匹",
        "reading": "はっぴき",
        "romaji": "happiki",
        "meaning": "8 con vật",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 871,
        "word": "何匹",
        "reading": "なんひき",
        "romaji": "nanhiki",
        "meaning": "Mấy con vật",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 872,
        "word": "住みます［住む］",
        "reading": "すみます",
        "romaji": "sumimasu",
        "meaning": "Sống, sinh sống",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 873,
        "word": "います［いる］",
        "reading": "います",
        "romaji": "imasu",
        "meaning": "Có (người, động vật)",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      }
    ]
  },
  "jpd133-v8-2": {
    "lesson": "jpd133-v8-2",
    "course": "jpd133",
    "title": "Không có trang này",
    "total": 25,
    "items": [
      {
        "id": 874,
        "word": "ご主人",
        "reading": "ごしゅじん",
        "romaji": "goshujin",
        "meaning": "Chồng (của người khác)",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 875,
        "word": "奥さん",
        "reading": "おくさん",
        "romaji": "okusan",
        "meaning": "Vợ (của người khác)",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 876,
        "word": "先輩",
        "reading": "せんぱい",
        "romaji": "senpai",
        "meaning": "Tiền bối, đàn anh đàn chị",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 877,
        "word": "後輩",
        "reading": "こうはい",
        "romaji": "kouhai",
        "meaning": "Hậu bối, người vào sau, đàn em",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 878,
        "word": "体",
        "reading": "からだ",
        "romaji": "karada",
        "meaning": "Thân thể, cơ thể, sức khỏe",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 879,
        "word": "足",
        "reading": "あし",
        "romaji": "ashi",
        "meaning": "Chân",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 880,
        "word": "顔",
        "reading": "かお",
        "romaji": "kao",
        "meaning": "Mặt, khuôn mặt",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      },
      {
        "id": 881,
        "word": "髪",
        "reading": "かみ",
        "romaji": "kami",
        "meaning": "Tóc",
        "pos": "Từ vựng",
        "color": "var(--iro-8)"
      },
      {
        "id": 882,
        "word": "口",
        "reading": "くち",
        "romaji": "kuchi",
        "meaning": "Miệng",
        "pos": "Từ vựng",
        "color": "var(--iro-9)"
      },
      {
        "id": 883,
        "word": "鼻",
        "reading": "はな",
        "romaji": "hana",
        "meaning": "Mũi",
        "pos": "Từ vựng",
        "color": "var(--iro-10)"
      },
      {
        "id": 884,
        "word": "目",
        "reading": "め",
        "romaji": "me",
        "meaning": "Mắt",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 885,
        "word": "耳",
        "reading": "みみ",
        "romaji": "mimi",
        "meaning": "Tai",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 886,
        "word": "頭がいい",
        "reading": "あたまがいい",
        "romaji": "atamagaii",
        "meaning": "Thông minh",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 887,
        "word": "背が高い",
        "reading": "せがたかい",
        "romaji": "segatakai",
        "meaning": "Cao (dáng người)",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 249,
        "word": "長い",
        "reading": "ながい",
        "romaji": "nagai",
        "meaning": "Dài",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 251,
        "word": "短い",
        "reading": "みじかい",
        "romaji": "mijikai",
        "meaning": "Ngắn",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 888,
        "word": "優しい",
        "reading": "やさしい",
        "romaji": "yasashii",
        "meaning": "Hiền lành",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      },
      {
        "id": 889,
        "word": "黒い",
        "reading": "くろい",
        "romaji": "kuroi",
        "meaning": "Đen, màu đen",
        "pos": "Từ vựng",
        "color": "var(--iro-8)"
      },
      {
        "id": 890,
        "word": "白い",
        "reading": "しろい",
        "romaji": "shiroi",
        "meaning": "Trắng, màu trắng",
        "pos": "Từ vựng",
        "color": "var(--iro-9)"
      },
      {
        "id": 891,
        "word": "茶色い",
        "reading": "ちゃいろい",
        "romaji": "chairoi",
        "meaning": "Màu nâu",
        "pos": "Từ vựng",
        "color": "var(--iro-10)"
      },
      {
        "id": 892,
        "word": "元気（な）",
        "reading": "げんき",
        "romaji": "genki",
        "meaning": "Khỏe mạnh",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 893,
        "word": "親切（な）",
        "reading": "しんせつ",
        "romaji": "shinsetsu",
        "meaning": "Tốt bụng",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 894,
        "word": "まじめ（な）",
        "reading": "まじめ",
        "romaji": "majime",
        "meaning": "Chăm chỉ, cần mẫn",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 895,
        "word": "上手（な）",
        "reading": "じょうず",
        "romaji": "jouzu",
        "meaning": "Giỏi",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 896,
        "word": "下手（な）",
        "reading": "へた",
        "romaji": "heta",
        "meaning": "Kém",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      }
    ]
  },
  "jpd133-v8-3": {
    "lesson": "jpd133-v8-3",
    "course": "jpd133",
    "title": "Không có trang này",
    "total": 13,
    "items": [
      {
        "id": 897,
        "word": "傘",
        "reading": "かさ",
        "romaji": "kasa",
        "meaning": "Ô, cái ô",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 898,
        "word": "（お）金",
        "reading": "おかね",
        "romaji": "okane",
        "meaning": "Tiền",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 899,
        "word": "靴下",
        "reading": "くつした",
        "romaji": "kutsushita",
        "meaning": "Đôi tất",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 176,
        "word": "辞書",
        "reading": "じしょ",
        "romaji": "jisho",
        "meaning": "Từ điển",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 900,
        "word": "手紙",
        "reading": "てがみ",
        "romaji": "tegami",
        "meaning": "Thư",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 901,
        "word": "祖母",
        "reading": "そぼ",
        "romaji": "sobo",
        "meaning": "Bà (của mình)",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 902,
        "word": "結婚式",
        "reading": "けっこんしき",
        "romaji": "kekkonshiki",
        "meaning": "Lễ kết hôn",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      },
      {
        "id": 903,
        "word": "何か",
        "reading": "なにか",
        "romaji": "nanika",
        "meaning": "Cái gì đó",
        "pos": "Từ vựng",
        "color": "var(--iro-8)"
      },
      {
        "id": 904,
        "word": "送ります［送る］",
        "reading": "おくります",
        "romaji": "okurimasu",
        "meaning": "Gửi / Tiễn",
        "pos": "Từ vựng",
        "color": "var(--iro-9)"
      },
      {
        "id": 905,
        "word": "もらいます［もらう］",
        "reading": "もらいます",
        "romaji": "moraimasu",
        "meaning": "Nhận",
        "pos": "Từ vựng",
        "color": "var(--iro-10)"
      },
      {
        "id": 906,
        "word": "あげます［あげる］",
        "reading": "あげます",
        "romaji": "agemasu",
        "meaning": "Tặng, biếu",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 907,
        "word": "くれます［くれる］",
        "reading": "くれます",
        "romaji": "kuremasu",
        "meaning": "Cho (mình)",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 908,
        "word": "電話します［電話する］",
        "reading": "でんわします",
        "romaji": "denwashimasu",
        "meaning": "Gọi điện thoại",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      }
    ]
  },
  "jpd133-v9-1": {
    "lesson": "jpd133-v9-1",
    "course": "jpd133",
    "title": "Không có trang này",
    "total": 44,
    "items": [
      {
        "id": 909,
        "word": "（お）菓子",
        "reading": "おかし",
        "romaji": "okashi",
        "meaning": "Bánh kẹo",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 910,
        "word": "切手",
        "reading": "きって",
        "romaji": "kitte",
        "meaning": "Tem",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 911,
        "word": "小説",
        "reading": "しょうせつ",
        "romaji": "shousetsu",
        "meaning": "Tiểu thuyết",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 912,
        "word": "漫画",
        "reading": "まんが",
        "romaji": "manga",
        "meaning": "Truyện tranh",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 913,
        "word": "釣り",
        "reading": "つり",
        "romaji": "tsuri",
        "meaning": "Câu cá",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 914,
        "word": "最近",
        "reading": "さいきん",
        "romaji": "saikin",
        "meaning": "Gần đây",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 915,
        "word": "～日",
        "reading": "にち",
        "romaji": "nichi",
        "meaning": "～ ngày",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      },
      {
        "id": 916,
        "word": "～週間",
        "reading": "しゅうかん",
        "romaji": "shuukan",
        "meaning": "～ tuần",
        "pos": "Từ vựng",
        "color": "var(--iro-8)"
      },
      {
        "id": 917,
        "word": "～か月",
        "reading": "かげつ",
        "romaji": "kagetsu",
        "meaning": "～ tháng",
        "pos": "Từ vựng",
        "color": "var(--iro-9)"
      },
      {
        "id": 918,
        "word": "一か月",
        "reading": "いっかげつ",
        "romaji": "ikkagetsu",
        "meaning": "1 tháng",
        "pos": "Từ vựng",
        "color": "var(--iro-10)"
      },
      {
        "id": 919,
        "word": "六か月",
        "reading": "ろっかげつ",
        "romaji": "rokkagetsu",
        "meaning": "6 tháng",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 920,
        "word": "八か月",
        "reading": "はっかげつ",
        "romaji": "hakkagetsu",
        "meaning": "8 tháng",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 921,
        "word": "十か月",
        "reading": "じゅっかげつ",
        "romaji": "jukkagetsu",
        "meaning": "10 tháng",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 922,
        "word": "何か月",
        "reading": "なんかげつ",
        "romaji": "nankagetsu",
        "meaning": "Mấy tháng",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 923,
        "word": "～年",
        "reading": "ねん",
        "romaji": "nen",
        "meaning": "～ năm",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 924,
        "word": "～回",
        "reading": "かい",
        "romaji": "kai",
        "meaning": "～ lần",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 925,
        "word": "一回",
        "reading": "いっかい",
        "romaji": "ikkai",
        "meaning": "1 lần",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      },
      {
        "id": 926,
        "word": "六回",
        "reading": "ろっかい",
        "romaji": "rokkai",
        "meaning": "6 lần",
        "pos": "Từ vựng",
        "color": "var(--iro-8)"
      },
      {
        "id": 927,
        "word": "八回",
        "reading": "はっかい",
        "romaji": "hakkai",
        "meaning": "8 lần",
        "pos": "Từ vựng",
        "color": "var(--iro-9)"
      },
      {
        "id": 928,
        "word": "十回",
        "reading": "じゅっかい",
        "romaji": "jukkai",
        "meaning": "10 lần",
        "pos": "Từ vựng",
        "color": "var(--iro-10)"
      },
      {
        "id": 929,
        "word": "何回",
        "reading": "なんかい",
        "romaji": "nankai",
        "meaning": "Mấy lần",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 930,
        "word": "～冊",
        "reading": "さつ",
        "romaji": "satsu",
        "meaning": "～ quyển",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 931,
        "word": "一冊",
        "reading": "いっさつ",
        "romaji": "issatsu",
        "meaning": "1 quyển",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 932,
        "word": "十冊",
        "reading": "じゅっさつ",
        "romaji": "jussatsu",
        "meaning": "10 quyển",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 933,
        "word": "何冊",
        "reading": "なんさつ",
        "romaji": "nansatsu",
        "meaning": "Mấy quyển",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 934,
        "word": "～杯",
        "reading": "はい",
        "romaji": "hai",
        "meaning": "～ ly, cốc (đơn vị đếm ly, bát…)",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 935,
        "word": "一杯",
        "reading": "いっぱい",
        "romaji": "ippai",
        "meaning": "1 ly",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      },
      {
        "id": 936,
        "word": "六杯",
        "reading": "ろっぱい",
        "romaji": "roppai",
        "meaning": "6 ly",
        "pos": "Từ vựng",
        "color": "var(--iro-8)"
      },
      {
        "id": 937,
        "word": "八杯",
        "reading": "はっぱい",
        "romaji": "happai",
        "meaning": "8 ly",
        "pos": "Từ vựng",
        "color": "var(--iro-9)"
      },
      {
        "id": 938,
        "word": "十杯",
        "reading": "じゅっぱい",
        "romaji": "juppai",
        "meaning": "10 ly",
        "pos": "Từ vựng",
        "color": "var(--iro-10)"
      },
      {
        "id": 939,
        "word": "何杯",
        "reading": "なんばい",
        "romaji": "nanbai",
        "meaning": "Mấy ly",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 940,
        "word": "～本",
        "reading": "ほん",
        "romaji": "hon",
        "meaning": "～ cái, chiếc (đơn vị đếm vật có chiều dài)",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 941,
        "word": "一本",
        "reading": "いっぽん",
        "romaji": "ippon",
        "meaning": "1 cái",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 942,
        "word": "六本",
        "reading": "ろっぽん",
        "romaji": "roppon",
        "meaning": "6 cái",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 943,
        "word": "八本",
        "reading": "はっぽん",
        "romaji": "happon",
        "meaning": "8 cái",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 944,
        "word": "十本",
        "reading": "じゅっぽん",
        "romaji": "juppon",
        "meaning": "10 cái",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 945,
        "word": "何本",
        "reading": "なんぼん",
        "romaji": "nanbon",
        "meaning": "Mấy cái",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      },
      {
        "id": 946,
        "word": "～料理",
        "reading": "りょうり",
        "romaji": "ryouri",
        "meaning": "Món ～ (vd: イタリア料理 món Ý)",
        "pos": "Từ vựng",
        "color": "var(--iro-8)"
      },
      {
        "id": 947,
        "word": "泳ぎます［泳ぐ］",
        "reading": "およぎます",
        "romaji": "oyogimasu",
        "meaning": "Bơi",
        "pos": "Từ vựng",
        "color": "var(--iro-9)"
      },
      {
        "id": 948,
        "word": "描きます［描く］",
        "reading": "かきます",
        "romaji": "kakimasu",
        "meaning": "Vẽ, tả",
        "pos": "Từ vựng",
        "color": "var(--iro-10)"
      },
      {
        "id": 949,
        "word": "集めます［集める］",
        "reading": "あつめます",
        "romaji": "atsumemasu",
        "meaning": "Thu thập, tập hợp",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 950,
        "word": "運転します［運転する］",
        "reading": "うんてんします",
        "romaji": "untenshimasu",
        "meaning": "Lái (xe)",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 951,
        "word": "特に",
        "reading": "とくに",
        "romaji": "tokuni",
        "meaning": "Đặc biệt",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 952,
        "word": "全然",
        "reading": "ぜんぜん",
        "romaji": "zenzen",
        "meaning": "Hoàn toàn",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      }
    ]
  },
  "jpd133-v9-2": {
    "lesson": "jpd133-v9-2",
    "course": "jpd133",
    "title": "Không có trang này",
    "total": 10,
    "items": [
      {
        "id": 953,
        "word": "食堂",
        "reading": "しょくどう",
        "romaji": "shokudou",
        "meaning": "Nhà ăn",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 954,
        "word": "～クラブ",
        "reading": "クラブ",
        "romaji": "kurabu",
        "meaning": "Câu lạc bộ ～ (vd: ダンスクラブ câu lạc bộ khiêu vũ)",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 955,
        "word": "～教室",
        "reading": "きょうしつ",
        "romaji": "kyoushitsu",
        "meaning": "Lớp học ～ (vd: lớp học thư pháp)",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 956,
        "word": "習います［習う］",
        "reading": "ならいます",
        "romaji": "naraimasu",
        "meaning": "Học",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 957,
        "word": "乗ります［乗る］",
        "reading": "のります",
        "romaji": "norimasu",
        "meaning": "Lên",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 958,
        "word": "入ります［入る］",
        "reading": "はいります",
        "romaji": "hairimasu",
        "meaning": "Vào, đi vào; Gia nhập, tham gia",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 959,
        "word": "申し込みます［申し込む］",
        "reading": "もうしこみます",
        "romaji": "moushikomimasu",
        "meaning": "Xin, thỉnh cầu, đăng ký",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      },
      {
        "id": 960,
        "word": "できます［できる］",
        "reading": "できます",
        "romaji": "dekimasu",
        "meaning": "Có thể",
        "pos": "Từ vựng",
        "color": "var(--iro-8)"
      },
      {
        "id": 961,
        "word": "参加します［参加する］",
        "reading": "さんかします",
        "romaji": "sankashimasu",
        "meaning": "Tham gia",
        "pos": "Từ vựng",
        "color": "var(--iro-9)"
      },
      {
        "id": 962,
        "word": "上手に",
        "reading": "じょうずに",
        "romaji": "jouzuni",
        "meaning": "Thành thạo",
        "pos": "Từ vựng",
        "color": "var(--iro-10)"
      }
    ]
  },
  "jpd133-v9-3": {
    "lesson": "jpd133-v9-3",
    "course": "jpd133",
    "title": "Không có trang này",
    "total": 11,
    "items": [
      {
        "id": 963,
        "word": "受付",
        "reading": "うけつけ",
        "romaji": "uketsuke",
        "meaning": "Quầy lễ tân, thường trực",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      },
      {
        "id": 964,
        "word": "外国人登録証",
        "reading": "がいこくじんとうろくしょう",
        "romaji": "gaikokujintourokushou",
        "meaning": "Chứng nhận đăng ký người nước ngoài",
        "pos": "Từ vựng",
        "color": "var(--iro-2)"
      },
      {
        "id": 965,
        "word": "住所",
        "reading": "じゅうしょ",
        "romaji": "juusho",
        "meaning": "Địa chỉ",
        "pos": "Từ vựng",
        "color": "var(--iro-3)"
      },
      {
        "id": 966,
        "word": "宿題",
        "reading": "しゅくだい",
        "romaji": "shukudai",
        "meaning": "Bài tập về nhà",
        "pos": "Từ vựng",
        "color": "var(--iro-4)"
      },
      {
        "id": 967,
        "word": "電話番号",
        "reading": "でんわばんごう",
        "romaji": "denwabangou",
        "meaning": "Số điện thoại",
        "pos": "Từ vựng",
        "color": "var(--iro-5)"
      },
      {
        "id": 968,
        "word": "～番",
        "reading": "ばん",
        "romaji": "ban",
        "meaning": "Số ～",
        "pos": "Từ vựng",
        "color": "var(--iro-6)"
      },
      {
        "id": 969,
        "word": "言います［言う］",
        "reading": "いいます",
        "romaji": "iimasu",
        "meaning": "Nói",
        "pos": "Từ vựng",
        "color": "var(--iro-7)"
      },
      {
        "id": 970,
        "word": "払います［払う］",
        "reading": "はらいます",
        "romaji": "haraimasu",
        "meaning": "Trả, chi trả",
        "pos": "Từ vựng",
        "color": "var(--iro-8)"
      },
      {
        "id": 971,
        "word": "降ります［降りる］",
        "reading": "おります",
        "romaji": "orimasu",
        "meaning": "Xuống (tàu, xe)",
        "pos": "Từ vựng",
        "color": "var(--iro-9)"
      },
      {
        "id": 972,
        "word": "見せます［見せる］",
        "reading": "みせます",
        "romaji": "misemasu",
        "meaning": "Cho xem",
        "pos": "Từ vựng",
        "color": "var(--iro-10)"
      },
      {
        "id": 973,
        "word": "予約します［予約する］",
        "reading": "よやくします",
        "romaji": "yoyakushimasu",
        "meaning": "Đặt trước",
        "pos": "Từ vựng",
        "color": "var(--iro-1)"
      }
    ]
  }
};
