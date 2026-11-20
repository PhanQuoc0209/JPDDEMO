// All Shadowing dialogues across all lessons
export interface ShadowingLine {
  speaker?: string;
  jp: string;
  vi: string;
}

export interface ShadowingLesson {
  lesson: string;
  title: string;
  topic: string;
  lines: [string, string][];
}

export const SHADOWING_DATA: Record<string, ShadowingLesson> = {
  "jpd113-s1": {
    "lesson": "jpd113-s1",
    "title": "Shadowing jpd113-s1",
    "topic": "Bài 1",
    "lines": [
      [
        "A：はじめまして。わたしはパクです。よろしくおねがいします。",
        "A: Rất vui được gặp bạn. Tôi là Park. Rất mong được làm quen."
      ],
      [
        "B：はじめまして。（わたしは）ダニエルです。こちらこそよろしくおねがいします。",
        "B: Rất vui được gặp bạn. (Tôi) là Daniel. Tôi cũng rất mong được làm quen."
      ],
      [
        "C：はじめまして。よろしくおねがいします。",
        "C: Rất vui được gặp bạn. Rất mong được làm quen."
      ],
      [
        "B：あのう、すみません、おなまえは？",
        "B: À, xin lỗi, bạn tên là gì ạ?"
      ],
      [
        "C：ワンです。",
        "C: Tôi là Wang."
      ],
      [
        "ちゅうごくじんです。",
        "Tôi là người Trung Quốc."
      ],
      [
        "よろしくおねがいします。",
        "Rất mong được làm quen."
      ],
      [
        "A：おくにはどちらですか。",
        "A: Bạn đến từ nước nào vậy?"
      ],
      [
        "B：オーストラリアです。",
        "B: Tôi đến từ Úc."
      ],
      [
        "A：あのう、やまぐちさん、おしごとは？",
        "A: À, anh Yamaguchi, anh làm nghề gì ạ?"
      ],
      [
        "B：わたしはがくせいです。",
        "B: Tôi là sinh viên."
      ],
      [
        "A：そうですか。わたしはかいしゃいんです。",
        "A: Vậy à. Còn tôi là nhân viên công ty."
      ],
      [
        "A：メアリーさん、メアリーさんはかいしゃいんですか。",
        "A: Chị Mary ơi, chị là nhân viên công ty phải không?"
      ],
      [
        "B：はい、かいしゃいんです。",
        "B: Vâng, tôi là nhân viên công ty."
      ],
      [
        "B：パクさんはかいしゃいんですか。",
        "B: Còn anh Park là nhân viên công ty à?"
      ],
      [
        "A：いいえ、かいしゃいんじゃありません。がくせいです。",
        "A: Không, tôi không phải là nhân viên công ty. Tôi là sinh viên."
      ],
      [
        "わたしはあおぞらにほんごがっこうのがくせいです。",
        "Tôi là học sinh trường tiếng Nhật Aozora."
      ],
      [
        "はじめまして。",
        "Rất vui được gặp mọi người."
      ],
      [
        "わたしはパクです。",
        "Tôi là Park."
      ],
      [
        "かんこくじんです。",
        "Tôi là người Hàn Quốc."
      ],
      [
        "あおぞらにほんごがっこうのがくせいです。",
        "Tôi là học sinh trường tiếng Nhật Aozora."
      ],
      [
        "２６さいです。",
        "Tôi 26 tuổi."
      ],
      [
        "よろしくおねがいします。",
        "Rất mong được mọi người giúp đỡ."
      ],
      [
        "A：たんじょうびはいつですか。",
        "A: Sinh nhật bạn là ngày nào?"
      ],
      [
        "B：さんがつにじゅういちにちです。",
        "B: Ngày 21 tháng 3."
      ],
      [
        "A：パクさんは?。",
        "A: Còn anh Park thì sao?"
      ],
      [
        "B：じゅうがつよっかです。",
        "B: Ngày 4 tháng 10."
      ],
      [
        "A：しゅみはなんですか。",
        "A: Sở thích của bạn là gì?"
      ],
      [
        "B：サッカーです。",
        "B: Là bóng đá."
      ],
      [
        "A：そうですか。",
        "A: Vậy à."
      ],
      [
        "A：しゅみはなんですか。",
        "A: Sở thích của bạn là gì?"
      ],
      [
        "B：りょこうとえいがです。",
        "B: Là du lịch và xem phim."
      ],
      [
        "A：へえ。",
        "A: Ồ thế à."
      ],
      [
        "A：ワンさんの　しゅみは　なんですか。",
        "A: Sở thích của bạn là gì?"
      ],
      [
        "B：りょうりです。",
        "B: Là nấu ăn."
      ],
      [
        "A：えっ？わたしの　しゅみも　りょうりです。",
        "A: Ủa? Sở thích của tôi cũng là nấu ăn đấy."
      ],
      [
        "B：わあ、おなじですね。",
        "B: Ồ, giống nhau nhỉ."
      ]
    ]
  },
  "jpd113-s2": {
    "lesson": "jpd113-s2",
    "title": "Shadowing jpd113-s2",
    "topic": "Bài 2",
    "lines": [
      [
        "A：すみません、サカイでんきはなんかいですか。",
        "A: Xin lỗi, cửa hàng điện máy Sakai ở tầng mấy ạ?"
      ],
      [
        "B：よんかいです。",
        "B: Ở tầng 4 ạ."
      ],
      [
        "A：そうですか。ありがとうございます。",
        "A: Thế ạ. Cảm ơn chị."
      ],
      [
        "A：エスカレーター、エスカレーター。あのう、すみません、エスカレーターはどこですか。",
        "A: Thang cuốn, thang cuốn… À, xin lỗi, thang cuốn ở đâu ạ?"
      ],
      [
        "B：エスカレーターですか。エスカレーターはあそこですよ。",
        "B: Thang cuốn ạ? Thang cuốn ở đằng kia ạ."
      ],
      [
        "A：あ、どうもありがとうございます。",
        "A: À, cảm ơn chị nhiều."
      ],
      [
        "B：いらっしゃいませ。",
        "B: Kính chào quý khách."
      ],
      [
        "A：カメラ、カメラ。あのう、すみません、カメラはどこですか。",
        "A: Máy ảnh, máy ảnh… À, xin lỗi, máy ảnh ở đâu ạ?"
      ],
      [
        "B：カメラはあちらです。",
        "B: Máy ảnh ở phía kia ạ."
      ],
      [
        "A：あ、ありがとうございます。",
        "A: À, cảm ơn chị."
      ],
      [
        "A：いらっしゃませ。",
        "A: Kính chào quý khách."
      ],
      [
        "B：すみません、これはいくらですか。",
        "B: Xin lỗi, cái này bao nhiêu tiền ạ?"
      ],
      [
        "A：よんせんえんです。",
        "A: 4.000 yên ạ."
      ],
      [
        "B：あのTシャツはいくらですか。",
        "B: Cái áo phông kia bao nhiêu tiền ạ?"
      ],
      [
        "A：さんぜんえんです。",
        "A: 3.000 yên ạ."
      ],
      [
        "B：そうですか。",
        "B: Vậy ạ."
      ],
      [
        "B：じゃ、あれをください。",
        "B: Vậy cho tôi cái kia nhé."
      ],
      [
        "A:ありがとうございます。",
        "A: Cảm ơn quý khách."
      ],
      [
        "A：すみません。",
        "A: Xin lỗi."
      ],
      [
        "B：はい！",
        "B: Vâng!"
      ],
      [
        "A：あのう、とんかつはなんのりょうりですか。",
        "A: À, tonkatsu là món làm từ gì vậy ạ?"
      ],
      [
        "B：とんかつはぶたにくのりょうりですよ。",
        "B: Tonkatsu là món làm từ thịt heo đó ạ."
      ],
      [
        "A：『ぶたにく』?。すみません、『ぶたにく』はえいごでなんですか。",
        "A: “Butaniku” ạ? Xin lỗi, “butaniku” tiếng Anh gọi là gì ạ?"
      ],
      [
        "B：『Pork』です。",
        "B: Là “Pork” ạ."
      ],
      [
        "A：あ、そうですか。ありがとうございます。",
        "A: À, ra vậy. Cảm ơn chị."
      ],
      [
        "A：これはどこのビールですか。",
        "A: Đây là bia của nước nào vậy?"
      ],
      [
        "B：それはアメリカのビールです。",
        "B: Đó là bia của Mỹ."
      ],
      [
        "A：そうですか。",
        "A: Vậy à."
      ],
      [
        "A：ごちそさまでした。あ、さいぶ！",
        "A: Cảm ơn vì bữa ăn ngon. A, cái ví!"
      ],
      [
        "これはだれのさいふですか。",
        "Đây là ví của ai vậy ạ?"
      ],
      [
        "B：それは私のさいふです。すみません。ありがとうございます。",
        "B: Đó là ví của tôi. Xin lỗi. Cảm ơn bạn."
      ]
    ]
  },
  "jpd113-s3": {
    "lesson": "jpd113-s3",
    "title": "Shadowing jpd113-s3",
    "topic": "Bài 3",
    "lines": [
      [
        "A:すみません、いま,なんじですか。",
        "A: Xin lỗi, bây giờ là mấy giờ ạ?"
      ],
      [
        "B：さんじです。",
        "B: 3 giờ ạ."
      ],
      [
        "A:そうですか。ありがとうございます。",
        "A: Vậy à. Cảm ơn anh."
      ],
      [
        "A:すみません。そちらはなんじからなんじまでですか。",
        "A: Xin lỗi. Bên chị mở cửa từ mấy giờ đến mấy giờ ạ?"
      ],
      [
        "B：くじからごじまでです。",
        "B: Từ 9 giờ đến 5 giờ ạ."
      ],
      [
        "A：そうですか。",
        "A: Vậy à."
      ],
      [
        "A:やすみはいつですか。",
        "A: Ngày nghỉ là khi nào ạ?"
      ],
      [
        "B：げつようびです。",
        "B: Là thứ Hai ạ."
      ],
      [
        "A:そうですか。ありがとうございます。",
        "A: Vậy à. Cảm ơn chị."
      ],
      [
        "A：５がつ２１にちはりゅうがくせいパーティーです。",
        "A: Ngày 21 tháng 5 có tiệc dành cho du học sinh đấy."
      ],
      [
        "B：パーティー？いいですね。なにをしますか。",
        "B: Tiệc à? Hay quá. Mọi người sẽ làm gì vậy?"
      ],
      [
        "A：りょうりをたべます。ビールをのみます。",
        "A: Sẽ ăn đồ ăn và uống bia."
      ],
      [
        "A：どこへいきますか。",
        "A: Bạn sẽ đi đâu?"
      ],
      [
        "B：ふじさんへいきます。",
        "B: Tôi sẽ đi núi Phú Sĩ."
      ],
      [
        "A：８月２日から８月２４日までなつやすみですね。私はなつやすみ、くにへかえります。パクさんもなつやすみ、くにへかえりますか。",
        "A: Từ mùng 2 đến 24 tháng 8 là kỳ nghỉ hè nhỉ. Nghỉ hè tôi sẽ về nước. Nghỉ hè này anh Park cũng về nước chứ?"
      ],
      [
        "B：いいえ、かえりません。ふゆやすみ、かえります。",
        "B: Không, tôi không về. Nghỉ đông tôi mới về."
      ],
      [
        "A：ダニエルさん、ふゆやすみ、なにをしますか。",
        "A: Anh Daniel ơi, nghỉ đông anh sẽ làm gì?"
      ],
      [
        "B：ほっかいどうへいきます。ほっかいどうでスキーをします。",
        "B: Tôi sẽ đi Hokkaido. Ở Hokkaido tôi sẽ trượt tuyết."
      ],
      [
        "A：パクさん、それはあさごはんですか。",
        "A: Anh Park ơi, đó là bữa sáng à?"
      ],
      [
        "B：はい、ダニエルさんはまいにち、あさごはんをたべますか。",
        "B: Vâng. Còn anh Daniel, ngày nào cũng ăn sáng chứ?"
      ],
      [
        "A：はい。",
        "A: Có chứ."
      ],
      [
        "B：なにをたべますか。",
        "B: Anh ăn những gì?"
      ],
      [
        "A：パンやたまごなどをたべます。",
        "A: Tôi ăn bánh mì, trứng, đại loại thế."
      ],
      [
        "Ｂ：パクさんは？",
        "B: Còn anh Park thì sao?"
      ],
      [
        "A：私はあさ、うちでなにもたべません。",
        "A: Buổi sáng ở nhà, tôi không ăn gì cả."
      ],
      [
        "Ｂ：えっ！",
        "B: Ủa, thật á!"
      ],
      [
        "A：パクさん、あさ、なんじにおきますか。",
        "A: Anh Park ơi, buổi sáng anh dậy lúc mấy giờ?"
      ],
      [
        "B：私はまいにち、はちじはんにおきます。",
        "B: Ngày nào tôi cũng dậy lúc 8 giờ rưỡi."
      ],
      [
        "A：よる、なにをしますか。",
        "A: Buổi tối bạn làm gì?"
      ],
      [
        "B：インターネットをします。",
        "B: Tôi lên mạng."
      ],
      [
        "A：なんじからなんじまでしますか。",
        "A: Bạn lên mạng từ mấy giờ đến mấy giờ?"
      ],
      [
        "B：うーん、１０じから１２じまでします。",
        "B: Ừm, từ 10 giờ đến 12 giờ."
      ],
      [
        "A：ナタポンさんはまいにち、ごご、どこへいきますか。",
        "A: Anh Nathapon ơi, buổi chiều hằng ngày anh đi đâu vậy?"
      ],
      [
        "B：どこもいきません。パクさんは？",
        "B: Tôi chẳng đi đâu cả. Còn anh Park?"
      ],
      [
        "A：私はきっさてんへいきます。きっさてんで日本語をべんきょうします。",
        "A: Tôi đi quán cà phê. Tôi học tiếng Nhật ở quán cà phê."
      ]
    ]
  },
  "jpd123-s4": {
    "lesson": "jpd123-s4",
    "title": "Shadowing jpd123-s4",
    "topic": "Bài 4",
    "lines": [
      [
        "A：ナタポンさんのまちはタイのどこですか。",
        "A: Thành phố của bạn ở chỗ nào của Thái Lan vậy?"
      ],
      [
        "B：アユタヤです。",
        "B: Là Ayutthaya."
      ],
      [
        "A：アユタヤ？アユタヤはどこですか。",
        "A: Ayutthaya á? Ayutthaya ở đâu vậy?"
      ],
      [
        "B：アユタヤはタイのまんなかです。",
        "B: Ayutthaya nằm ở giữa Thái Lan."
      ],
      [
        "A：とうきょうからアユタヤまでどのくらいですか。",
        "A: Từ Tokyo đến Ayutthaya mất khoảng bao lâu?"
      ],
      [
        "B：そうですね。とうきょうからバンコクまで６時間くらいです。",
        "B: Để xem nào. Từ Tokyo đến Bangkok mất khoảng 6 tiếng."
      ],
      [
        "バンコクからアユタヤまでバスで１時間はんくらいです。",
        "Từ Bangkok đến Ayutthaya đi xe buýt mất khoảng 1 tiếng rưỡi."
      ],
      [
        "A：これはわたしのまちのしゃしんです。",
        "A: Đây là ảnh thành phố của tôi."
      ],
      [
        "B：きれいですね。",
        "B: Đẹp nhỉ."
      ],
      [
        "A：私のまちはみどりがおおいです。",
        "A: Thành phố tôi nhiều cây xanh lắm."
      ],
      [
        "A：アユタヤはおおきいですか。",
        "A: Ayutthaya có lớn không?"
      ],
      [
        "B：いいえ、おおきくないです。ちいさいです。",
        "B: Không, không lớn đâu. Nhỏ thôi."
      ],
      [
        "A：あんなさんのまちはどこですか。",
        "A: Thành phố của chị Anna ở đâu vậy?"
      ],
      [
        "B：ロシアのモスクワです。",
        "B: Là Moskva của Nga."
      ],
      [
        "A：モスクワはどんなところですか。",
        "A: Moskva là nơi như thế nào vậy?"
      ],
      [
        "B：にぎやかなところです。",
        "B: Là nơi nhộn nhịp."
      ],
      [
        "A：モスクワになにがありますか。",
        "A: Ở Moskva có gì vậy?"
      ],
      [
        "B：きょうかいがあります。",
        "B: Có nhà thờ."
      ],
      [
        "A：どんなきょうかいですか。",
        "A: Nhà thờ như thế nào?"
      ],
      [
        "B：おおきいきょうかいです。きれいです。",
        "B: Là nhà thờ lớn. Đẹp lắm."
      ],
      [
        "A：パスはおおきいまちですか。",
        "A: Pas có phải là thành phố lớn không?"
      ],
      [
        "B：いいえ、おおきくないですが、いいまちです。",
        "B: Không, không lớn, nhưng là một thành phố đẹp."
      ],
      [
        "A：あついですね。",
        "A: Trời nóng nhỉ."
      ],
      [
        "B：そうですね。",
        "B: Ừ, nóng thật."
      ],
      [
        "A：ペキンは８がつ、あついですか。",
        "A: Bắc Kinh tháng 8 có nóng không?"
      ],
      [
        "B：はい、あついです。",
        "B: Có, nóng lắm."
      ],
      [
        "A：プサンも８がつ、あついですか。",
        "A: Busan tháng 8 cũng nóng à?"
      ],
      [
        "B：はい、とてもあついです。",
        "B: Có, rất nóng."
      ],
      [
        "A：モスクワはどうですか。",
        "A: Còn Moskva thì sao?"
      ],
      [
        "B：モスクワは８がつ、あまりあつくないです。",
        "B: Moskva tháng 8 không nóng lắm."
      ],
      [
        "A：かんこくであつい日、何をたべますか。",
        "A: Ở Hàn Quốc, ngày nóng thì mọi người ăn gì?"
      ],
      [
        "B：サムゲタンをたべます。",
        "B: Ăn samgyetang."
      ],
      [
        "A：サムゲタン？「サムゲタン」は何ですか。",
        "A: Samgyetang á? “Samgyetang” là gì vậy?"
      ],
      [
        "B：サムゲタンはとりにくのスープです。とてもおいしいです。",
        "B: Samgyetang là món súp gà. Ngon lắm."
      ]
    ]
  },
  "jpd123-s5": {
    "lesson": "jpd123-s5",
    "title": "Shadowing jpd123-s5",
    "topic": "Bài 5",
    "lines": [
      [
        "A：パクさん、日曜日、何をしましたか。",
        "A: Anh Park ơi, chủ nhật anh đã làm gì?"
      ],
      [
        "B：こうえんへいきました。こうえんでバーベキューをしました。",
        "B: Tôi đã đi công viên. Ở công viên tôi nướng thịt BBQ."
      ],
      [
        "A：アンナさんはどこかへいきましたか。",
        "A: Chị Anna có đi đâu không?"
      ],
      [
        "B：はい、私はしぶやへいきました。しぶやでえいがをみました。",
        "B: Có, tôi đã đi Shibuya. Ở Shibuya tôi đã xem phim."
      ],
      [
        "A：マルコさんはきのう何をしましたか。",
        "A: Anh Marco hôm qua đã làm gì?"
      ],
      [
        "B：わたしはともだちとサッカーをしました。",
        "B: Tôi đã chơi bóng đá với bạn."
      ],
      [
        "A：そうですか。",
        "A: Vậy à."
      ],
      [
        "A：ワンさんは何をしましたか。",
        "A: Chị Wang đã làm gì?"
      ],
      [
        "B：ともだちとかいものしました。それから、レストランでしょくじしました。",
        "B: Tôi đi mua sắm với bạn. Sau đó chúng tôi ăn ở nhà hàng."
      ],
      [
        "A：へえ。そうですか。",
        "A: Ồ, vậy à."
      ],
      [
        "A：ナタポンさん、にちようび、どこかへいきましたか。",
        "A: Anh Nathapon ơi, chủ nhật anh có đi đâu không?"
      ],
      [
        "B：はい、ともだちとなごやへ行きました。",
        "B: Có, tôi đã đi Nagoya với bạn."
      ],
      [
        "A：そうですか、たのしかったですか。",
        "A: Vậy à, có vui không?"
      ],
      [
        "B：はい、とてもたのしかったです。",
        "B: Có, vui lắm."
      ],
      [
        "A：よかったですね。",
        "A: Thế thì tốt quá nhỉ."
      ],
      [
        "A：なごやで何をしましたか。",
        "A: Ở Nagoya anh đã làm gì?"
      ],
      [
        "B：おしろを見ました。",
        "B: Tôi đã đi xem lâu đài."
      ],
      [
        "A：どうでしたか。",
        "A: Thấy thế nào?"
      ],
      [
        "B：とてもきれいでした。",
        "B: Đẹp lắm."
      ],
      [
        "B：ダニエルさんは、にちようび、どこかへいきましたか。",
        "B: Anh Daniel ơi, chủ nhật anh có đi đâu không?"
      ],
      [
        "A：いいえ、私はしごとでした。よる９時まではたらきました。いそがしかったです。",
        "A: Không, tôi phải đi làm. Tôi làm tới 9 giờ tối. Bận lắm."
      ],
      [
        "B：へえ。そうですか。たいへんでしたね。",
        "B: Ồ, vậy à. Vất vả quá nhỉ."
      ],
      [
        "A：マリヤムさん、マリヤムさんは、にちようび、なにをしましたか。",
        "A: Chị Mariyam ơi, chủ nhật chị đã làm gì?"
      ],
      [
        "B：しぶやのデパートへいきました。",
        "B: Tôi đã đi trung tâm thương mại ở Shibuya."
      ],
      [
        "A：へえ、なにをかいましたか。",
        "A: Ồ, chị mua gì thế?"
      ],
      [
        "B：なにもかいませんでした。",
        "B: Tôi chẳng mua gì cả."
      ],
      [
        "A：どうしてかいませんでしたか。",
        "A: Sao chị lại không mua?"
      ],
      [
        "B：たかかったですから。",
        "B: Vì đắt quá."
      ],
      [
        "A：こんどのやすみ、なにをしますか。",
        "A: Kỳ nghỉ tới bạn định làm gì?"
      ],
      [
        "B：しんじゅくへ行きます。私はスマイルのあたらしいCDがほしいですから。",
        "B: Tôi sẽ đi Shinjuku. Vì tôi muốn mua CD mới của Smile."
      ],
      [
        "A：そうですか。いいですね。",
        "A: Vậy à. Hay đấy."
      ],
      [
        "A：ダニエルさんはりょこうがすきですか。",
        "A: Anh Daniel có thích du lịch không?"
      ],
      [
        "B：はい、すきです。",
        "B: Có, tôi thích."
      ],
      [
        "A：こんどのやすみにおおさかへ行きます。",
        "A: Kỳ nghỉ tới tôi sẽ đi Osaka."
      ],
      [
        "B:おおさかですか。いいですね。私もおおさかへ行きたいです。",
        "B: Osaka à? Hay quá. Tôi cũng muốn đi Osaka."
      ],
      [
        "A:マリヤムさんはこんどのやすみに、どこかへいきますか。",
        "A: Kỳ nghỉ tới chị Mariyam có đi đâu không?"
      ],
      [
        "B：はい、私はしぶやへえいがをみにいきます。",
        "B: Có, tôi sẽ đi Shibuya xem phim."
      ],
      [
        "A:いいですね。",
        "A: Hay đấy nhỉ."
      ]
    ]
  },
  "jpd123-s6": {
    "lesson": "jpd123-s6",
    "title": "Shadowing jpd123-s6",
    "topic": "Bài 6",
    "lines": [
      [
        "A：こんばん、いっしょにごはんを食べに行きませんか。",
        "A: Tối nay mình đi ăn cùng nhau nhé?"
      ],
      [
        "B：いいですね。食に行きましょう",
        "B: Hay đó. Đi ăn thôi."
      ],
      [
        "C：ああ、すみません。こんばんはちょっと。。。",
        "C: À, xin lỗi. Tối nay thì hơi khó…"
      ],
      [
        "C:アルバイトがありますから。",
        "C: Vì mình có ca làm thêm."
      ],
      [
        "A：ああ、そうですか。じゃ、またこんど",
        "A: À, vậy à. Thôi để lần sau nhé."
      ],
      [
        "C:すみません。",
        "C: Xin lỗi nhé."
      ],
      [
        "A：しゅうまつ、よこはまではなびがあります。",
        "A: Cuối tuần này ở Yokohama có bắn pháo hoa đấy."
      ],
      [
        "B：へえ。",
        "B: Ồ thế à."
      ],
      [
        "A：いっしょにみに行きませんか。",
        "A: Mình đi xem cùng nhau nhé?"
      ],
      [
        "B：いいですね。",
        "B: Hay đó."
      ],
      [
        "A：マリヤムさんはえがすきですか。",
        "A: Chị Mariyam có thích tranh không?"
      ],
      [
        "B：はい。",
        "B: Có chứ."
      ],
      [
        "A：そうですか。びじゅつかんのチケットが２まいあります。",
        "A: Vậy à. Tôi có 2 vé bảo tàng mỹ thuật."
      ],
      [
        "A：いっしょにびじゅつかんへ行きませんか。",
        "A: Mình đi bảo tàng cùng nhau nhé?"
      ],
      [
        "B：わあ、いいですね。いきましょう。",
        "B: Ồ, hay quá. Đi thôi."
      ],
      [
        "A：ワンさんはえいががすきですか。",
        "A: Chị Wang có thích phim không?"
      ],
      [
        "B：はい",
        "B: Có."
      ],
      [
        "A：えいがでなにがいちばんすきですか。",
        "A: Trong các loại phim, chị thích loại nào nhất?"
      ],
      [
        "B：コメディーがいちばんすきです。",
        "B: Tôi thích phim hài nhất."
      ],
      [
        "A：私もえいががすきです。こんど、いっしょにうちでDVDを見ませんか。",
        "A: Tôi cũng thích phim. Lần tới mình cùng xem DVD ở nhà nhé?"
      ],
      [
        "B：いいですね。",
        "B: Hay đó."
      ],
      [
        "A：ナタポンさん、こんばん、いっしょにごはんを食べに行きませんか。",
        "A: Anh Nathapon ơi, tối nay mình đi ăn cùng nhau nhé?"
      ],
      [
        "B：いいですね。",
        "B: Hay đó."
      ],
      [
        "A：にくとさかなとどちらがすきですか。",
        "A: Thịt với cá, anh thích món nào hơn?"
      ],
      [
        "B：さかなのほうがすきです。",
        "B: Tôi thích cá hơn."
      ],
      [
        "A：そうですか。じゃ、おすしを食べに行きましょう。",
        "A: Vậy à. Thế thì mình đi ăn sushi nhé."
      ],
      [
        "A：どこへ食べに行きますか。",
        "A: Mình đi ăn ở đâu?"
      ],
      [
        "B：さくらずしとみどりずしがありますよ。",
        "B: Có quán Sakurazushi và Midorizushi đấy."
      ],
      [
        "A：さくらずしとみどりずしとどちらがいいですか。",
        "A: Sakurazushi với Midorizushi, quán nào tốt hơn?"
      ],
      [
        "B：そうですね。みどりずしのほうがいいです。みどりずしはさくらずしよりやすいですから。",
        "B: Để xem nào. Midorizushi thì tốt hơn. Vì Midorizushi rẻ hơn Sakurazushi."
      ],
      [
        "A：じゃ、そうしましょう。",
        "A: Vậy thì làm thế nhé."
      ],
      [
        "A：ダニエルさん、こんど、いっしょにごはんを食べに行きませんか。",
        "A: Anh Daniel ơi, lần tới mình đi ăn cùng nhau nhé?"
      ],
      [
        "B：いいですね。いきましょう。なにをたべますか。",
        "B: Hay đó. Đi thôi. Mình ăn gì đây?"
      ],
      [
        "A：ダニエルさんはもうおこのみやきを食べましたか。",
        "A: Anh Daniel đã ăn okonomiyaki chưa?"
      ],
      [
        "B：いいえ、まだです。",
        "B: Chưa, tôi chưa ăn."
      ],
      [
        "A：じゃ、おこのみやきを食べに行きませんか。しんじゅくのおこのみやきはとてもおいしいですよ。",
        "A: Vậy mình đi ăn okonomiyaki nhé? Okonomiyaki ở Shinjuku ngon lắm đấy."
      ],
      [
        "B：そうですか。いいですね。食べに行きましょう。",
        "B: Vậy à. Hay đó. Đi ăn thôi."
      ],
      [
        "A：いつ行きますか。",
        "A: Khi nào mình đi?"
      ],
      [
        "B：そうですね。土曜日のよるはどうですか。",
        "B: Để xem nào. Tối thứ Bảy được không?"
      ],
      [
        "A：すみません。土曜日はちょっと。。。日曜日はどうですか。",
        "A: Xin lỗi. Thứ Bảy thì hơi khó… Chủ nhật được không?"
      ],
      [
        "B：はい、だいじょうぶです。",
        "B: Vâng, được chứ."
      ],
      [
        "A：じゃ、日曜日何時に会いますか。",
        "A: Vậy chủ nhật mình gặp nhau lúc mấy giờ?"
      ],
      [
        "B：６時ごろはどうですか。",
        "B: Khoảng 6 giờ được không?"
      ],
      [
        "A：６時ですね。わかりました。",
        "A: 6 giờ nhé. Được rồi."
      ]
    ]
  },
  "jpd123-s7": {
    "lesson": "jpd123-s7",
    "title": "Shadowing jpd123-s7",
    "topic": "Bài 7",
    "lines": [
      [
        "ワン：あのう、すみません、たいよう銀行はどこにありますか。",
        "Wang: À, xin lỗi, cho hỏi ngân hàng Taiyou ở đâu ạ?"
      ],
      [
        "男の人：たいよう銀行ですか。たいよう銀行はあそこにありますよ。",
        "Người đàn ông: Ngân hàng Taiyou à? Ngân hàng Taiyou ở đằng kia đó."
      ],
      [
        "ワン：えっ？どこですか。",
        "Wang: Dạ? Ở đâu ạ?"
      ],
      [
        "男の人：あそこです。本屋の隣にありますよ。",
        "Người đàn ông: Đằng kia kìa. Ngay cạnh hiệu sách đó."
      ],
      [
        "ワン：あ、どうもありがとうございます。",
        "Wang: À, cảm ơn chú nhiều ạ."
      ],
      [
        "男の人：いいえ。",
        "Người đàn ông: Không có gì."
      ],
      [
        "ワン：もしもし、パクさん？",
        "Wang: A lô, anh Park à?"
      ],
      [
        "パク：あ、ワンさん、今、どこにいますか。",
        "Park: À, chị Wang, giờ chị đang ở đâu vậy?"
      ],
      [
        "ワン：私はコンビニの前にいます。",
        "Wang: Tôi đang ở trước cửa hàng tiện lợi."
      ],
      [
        "パク：コンビニの前？ワンさん、近くに何がありますか。",
        "Park: Trước cửa hàng tiện lợi à? Chị Wang, gần đó có gì?"
      ],
      [
        "ワン：ええと、近くに公園があります。",
        "Wang: Ừm, gần đây có công viên."
      ],
      [
        "パク：ああ、わかりました。今、そこへ行きます。",
        "Park: À, tôi biết rồi. Tôi tới đó ngay đây."
      ],
      [
        "パク：すみません、ワンさん、サラダを作ってください。",
        "Park: Chị Wang ơi, phiền chị làm giúp tôi món salad với."
      ],
      [
        "ワン：はい。",
        "Wang: Vâng."
      ],
      [
        "パク：ナタポンさん、このパンをナイフで切ってください。",
        "Park: Anh Nathapon ơi, anh cắt bánh mì này bằng dao giúp tôi với."
      ],
      [
        "ナタポン：はい。",
        "Nathapon: Vâng."
      ],
      [
        "カルロス：パクさん、カレーの作り方を教えてください。",
        "Carlos: Anh Park ơi, chỉ tôi cách nấu cà ri với."
      ],
      [
        "パク：はい。",
        "Park: Được thôi."
      ],
      [
        "メアリー：ダニエルさん、お皿を取ってください。",
        "Mary: Anh Daniel ơi, lấy giúp tôi cái đĩa với."
      ],
      [
        "ダニエル：どのお皿ですか。",
        "Daniel: Cái đĩa nào cơ?"
      ],
      [
        "メアリー：そのお皿です。",
        "Mary: Cái đĩa đó đó."
      ],
      [
        "ダニエル：ああ、これですか。はい、どうぞ。",
        "Daniel: À, cái này à? Đây, chị cầm lấy."
      ],
      [
        "メアリー：アンナさん、塩を取ってください。",
        "Mary: Chị Anna ơi, lấy giúp tôi lọ muối với."
      ],
      [
        "アンナ：どれですか。",
        "Anna: Cái nào cơ?"
      ],
      [
        "メアリー：それです。",
        "Mary: Cái đó đó."
      ],
      [
        "アンナ：ああ、これですか。はい、どうぞ。",
        "Anna: À, cái này à? Đây, chị cầm lấy."
      ],
      [
        "メアリー：どうも。",
        "Mary: Cảm ơn nhé."
      ],
      [
        "パク：あれ？ダニエルさんはどこにいますか。",
        "Park: Ủa? Anh Daniel đâu rồi nhỉ?"
      ],
      [
        "アンナ：あそこにいます。ダニエルさんはあそこでたばこを吸っていますよ。",
        "Anna: Anh ấy ở đằng kia. Anh Daniel đang hút thuốc ở đằng kia kìa."
      ],
      [
        "パク：ダニエルさん、一緒に写真を撮りませんか。",
        "Park: Anh Daniel ơi, chụp ảnh chung một tấm nhé?"
      ],
      [
        "ダニエル：いいですね。",
        "Daniel: Hay đó."
      ],
      [
        "カルロス：パクさん、写真を撮りましょうか。",
        "Carlos: Anh Park, để tôi chụp ảnh cho nhé?"
      ],
      [
        "パク：あ、ありがとうございます。お願いします。",
        "Park: À, cảm ơn anh. Nhờ anh nhé."
      ],
      [
        "ワン：おいしいですね。",
        "Wang: Ngon nhỉ."
      ],
      [
        "ナタポン：そうですね。",
        "Nathapon: Ừ, ngon thật."
      ],
      [
        "ワン：誰がこのケーキを作りましたか。",
        "Wang: Ai làm chiếc bánh này vậy?"
      ],
      [
        "ナタポン：アンナさんが作りました。",
        "Nathapon: Chị Anna làm đấy."
      ],
      [
        "ワン：へえ。",
        "Wang: Ồ thế à."
      ],
      [
        "メアリー：ワンさん、ビールはまだありますか。",
        "Mary: Chị Wang ơi, còn bia không?"
      ],
      [
        "ワン：すみません、もうありません。",
        "Wang: Xin lỗi, hết rồi."
      ],
      [
        "メアリー：そうですか。",
        "Mary: Vậy à."
      ],
      [
        "ワン：中国のお酒はどうですか。",
        "Wang: Rượu Trung Quốc thì sao, chị uống không?"
      ],
      [
        "メアリー：あ、はい、ありがとうございます。",
        "Mary: À, vâng, cảm ơn chị."
      ]
    ]
  },
  "jpd133-s8": {
    "lesson": "jpd133-s8",
    "title": "Shadowing jpd133-s8",
    "topic": "Bài 8",
    "lines": [
      [
        "ダニエル：アンナさんは兄弟がいますか。",
        "Daniel: Chị Anna có anh chị em không?"
      ],
      [
        "アンナ：はい。弟が１人います。",
        "Anna: Có. Tôi có một em trai."
      ],
      [
        "アンナ：弟は会社員です。車の会社で働いています。",
        "Anna: Em trai tôi là nhân viên công ty. Em ấy làm ở một công ty ô tô."
      ],
      [
        "ダニエル：へえ。",
        "Daniel: Ồ thế à."
      ],
      [
        "アンナ：ダニエルさんはどこに住んでいますか。",
        "Anna: Anh Daniel sống ở đâu vậy?"
      ],
      [
        "ダニエル：上野に住んでいます。",
        "Daniel: Tôi sống ở Ueno."
      ],
      [
        "アンナ：えっ？私も上野に住んでいますよ。",
        "Anna: Ủa? Tôi cũng sống ở Ueno đó."
      ],
      [
        "ダニエル：そうですか。上野はいいところですね。",
        "Daniel: Vậy à. Ueno là chỗ ở tốt nhỉ."
      ],
      [
        "アンナ：そうですね。",
        "Anna: Ừ, đúng vậy."
      ],
      [
        "アンナ：ダニエルさんは誰と住んでいますか。",
        "Anna: Anh Daniel sống với ai vậy?"
      ],
      [
        "ダニエル：妻と２人で住んでいます。",
        "Daniel: Tôi sống với vợ, chỉ có hai vợ chồng thôi."
      ],
      [
        "アンナ：そうですか。",
        "Anna: Vậy à."
      ],
      [
        "マルコ：パクさん、その人は誰ですか。",
        "Marco: Anh Park ơi, người đó là ai vậy?"
      ],
      [
        "パク：この人は山口さんです。私の友達です。",
        "Park: Người này là chị Yamaguchi. Bạn của tôi."
      ],
      [
        "マルコ：へえ。日本人の友達がいますか。いいですね。",
        "Marco: Ồ. Anh có bạn người Nhật à? Thích nhỉ."
      ],
      [
        "パク：山口さんはふじみ大学の学生です。ふじみ大学で英語を勉強しています。山口さんはテニスが上手ですよ。",
        "Park: Chị Yamaguchi là sinh viên đại học Fujimi. Chị ấy học tiếng Anh ở đại học Fujimi. Chị Yamaguchi chơi tennis giỏi lắm đó."
      ],
      [
        "マルコ：へえ。",
        "Marco: Ồ thế à."
      ],
      [
        "マルコ：この人は誰ですか。",
        "Marco: Người này là ai vậy?"
      ],
      [
        "パク：どの人ですか。",
        "Park: Người nào cơ?"
      ],
      [
        "マルコ：この目が大きくて、髪が長い人。",
        "Marco: Người mắt to, tóc dài này này."
      ],
      [
        "パク：あっ、それは私の妹です。",
        "Park: À, đó là em gái tôi."
      ],
      [
        "マルコ：へえ、かわいいですね。",
        "Marco: Ồ, dễ thương nhỉ."
      ],
      [
        "マルコ：この人は誰ですか。",
        "Marco: Người này là ai vậy?"
      ],
      [
        "パク：イさんです。私の友達です。",
        "Park: Là chị Lee. Bạn của tôi."
      ],
      [
        "マルコ：イさんはどんな人ですか。",
        "Marco: Chị Lee là người thế nào?"
      ],
      [
        "パク：おもしろくて、親切な人です。",
        "Park: Là người vui tính và tốt bụng."
      ],
      [
        "マルコ：そうですか。",
        "Marco: Vậy à."
      ],
      [
        "パク：マルコさん、もうすぐマリヤムさんの誕生日ですね。マリヤムさんにプレゼントをあげますか。",
        "Park: Anh Marco này, sắp tới sinh nhật chị Mariyam rồi nhỉ. Anh có tặng quà cho chị ấy không?"
      ],
      [
        "マルコ：はい。あげたいです。",
        "Marco: Có. Tôi muốn tặng."
      ],
      [
        "パク：じゃ、一緒にあげませんか。",
        "Park: Vậy mình tặng chung nhé?"
      ],
      [
        "マルコ：いいですね。",
        "Marco: Hay đó."
      ],
      [
        "パク：何をあげますか。",
        "Park: Mình tặng gì đây?"
      ],
      [
        "マルコ：うーん、マリヤムさんは音楽が好きですから、CDはどうですか。",
        "Marco: Ừm, chị Mariyam thích nhạc nên hay là tặng CD nhỉ?"
      ],
      [
        "パク：いいですね。そうしましょう。",
        "Park: Hay đó. Vậy làm thế nhé."
      ],
      [
        "ナタポン：ワンさん、そのかばん、いいですね。",
        "Nathapon: Chị Wang ơi, cái túi đó đẹp nhỉ."
      ],
      [
        "ワン：あ、ありがとうございます。誕生日に母にこのかばんをもらいました。",
        "Wang: À, cảm ơn anh. Sinh nhật tôi được mẹ tặng cái túi này đấy."
      ],
      [
        "ナタポン：そうですか。",
        "Nathapon: Vậy à."
      ],
      [
        "アンナ：ダニエルさん、バレンタインデーはどうでしたか。",
        "Anna: Anh Daniel ơi, ngày Valentine của anh thế nào?"
      ],
      [
        "ダニエル：とても楽しかったです。妻と食事をしました。妻が私にこの時計をくれました。",
        "Daniel: Vui lắm. Tôi đi ăn với vợ. Vợ tôi tặng tôi chiếc đồng hồ này."
      ],
      [
        "アンナ：かっこいい時計ですね。",
        "Anna: Đồng hồ ngầu quá nhỉ."
      ]
    ]
  },
  "jpd133-s9": {
    "lesson": "jpd133-s9",
    "title": "Shadowing jpd133-s9",
    "topic": "Bài 9",
    "lines": [
      [
        "西川：メアリーさんの趣味は何ですか。",
        "Nishikawa: Sở thích của chị Mary là gì vậy?"
      ],
      [
        "メアリー：趣味は絵を見ることです。",
        "Mary: Sở thích của tôi là ngắm tranh."
      ],
      [
        "西川：へえ、そうですか。誰の絵が好きですか。",
        "Nishikawa: Ồ, vậy à. Chị thích tranh của ai?"
      ],
      [
        "メアリー：ピカソの絵が好きです。",
        "Mary: Tôi thích tranh của Picasso."
      ],
      [
        "木村：アンナさんの趣味は？",
        "Kimura: Sở thích của chị Anna là gì?"
      ],
      [
        "アンナ：私の趣味は本を読むことです。特に、小説が好きです。",
        "Anna: Sở thích của tôi là đọc sách. Tôi đặc biệt thích tiểu thuyết."
      ],
      [
        "木村：そうですか。",
        "Kimura: Vậy à."
      ],
      [
        "マルコ：西川さんの趣味は何ですか。",
        "Marco: Sở thích của anh Nishikawa là gì?"
      ],
      [
        "西川：サッカーです。",
        "Nishikawa: Là bóng đá."
      ],
      [
        "マルコ：へえ。西川さんはよくサッカーをしますか。",
        "Marco: Ồ. Anh Nishikawa có hay chơi bóng đá không?"
      ],
      [
        "西川：はい、よくします。",
        "Nishikawa: Có, tôi chơi thường xuyên."
      ],
      [
        "西川：マルコさんの趣味は？",
        "Nishikawa: Sở thích của anh Marco là gì?"
      ],
      [
        "マルコ：私の趣味もサッカーです。でも、今、全然しません。",
        "Marco: Sở thích của tôi cũng là bóng đá. Nhưng bây giờ thì tôi chẳng chơi nữa."
      ],
      [
        "西川：そうですか。じゃ、今度、一緒にサッカーをしませんか。",
        "Nishikawa: Vậy à. Thế lần tới mình đá bóng cùng nhau nhé?"
      ],
      [
        "マルコ：いいですね。しましょう。",
        "Marco: Hay đó. Chơi thôi."
      ],
      [
        "木村：パクさんの趣味は何ですか。",
        "Kimura: Sở thích của anh Park là gì?"
      ],
      [
        "パク：私の趣味は映画を見ることです。",
        "Park: Sở thích của tôi là xem phim."
      ],
      [
        "木村：そうですか。パクさんはよく映画を見ますか。",
        "Kimura: Vậy à. Anh Park có hay xem phim không?"
      ],
      [
        "パク：はい。１週間に２回くらい映画を見ます。",
        "Park: Có. Một tuần tôi xem phim khoảng 2 lần."
      ],
      [
        "木村：そうですか。",
        "Kimura: Vậy à."
      ],
      [
        "メアリー：わあ、今月もいろいろなイベントがありますね。",
        "Mary: Ồ, tháng này cũng có nhiều sự kiện nhỉ."
      ],
      [
        "パク：本当ですね。あっ、スキー旅行があります。私はこれに参加したいです。",
        "Park: Đúng nhỉ. A, có chuyến đi trượt tuyết kìa. Tôi muốn tham gia chuyến này."
      ],
      [
        "メアリー：えっ？パクさんはスキーができますか。",
        "Mary: Ủa? Anh Park trượt tuyết được à?"
      ],
      [
        "パク：ええ。",
        "Park: Ừ, được chứ."
      ],
      [
        "メアリー：すごいですね。",
        "Mary: Giỏi quá nhỉ."
      ],
      [
        "メアリー：あ、書道教室もありますよ。私はここがいいです。私は上手に漢字を書くことができませんから、習いに行きたいです。",
        "Mary: À, còn có lớp thư pháp nữa này. Tôi thích lớp này. Tôi viết chữ Hán không đẹp được nên muốn đi học."
      ],
      [
        "パク：へえ。書道教室もいいですね。",
        "Park: Ồ. Lớp thư pháp cũng hay đấy nhỉ."
      ],
      [
        "メアリー：パクさんも一緒に行きませんか。",
        "Mary: Anh Park đi cùng tôi luôn nhé?"
      ],
      [
        "パク：いいですね。行きましょう。",
        "Park: Hay đó. Đi thôi."
      ],
      [
        "ワン：パクさん、週末、何をしましたか。",
        "Wang: Anh Park ơi, cuối tuần anh đã làm gì?"
      ],
      [
        "パク：買い物をして、食事をして、スマイルのコンサートに行きました。",
        "Park: Tôi đi mua sắm, rồi đi ăn, rồi đi xem concert của Smile."
      ],
      [
        "ワン：へえ。パクさんはスマイルが好きですか。",
        "Wang: Ồ. Anh Park thích Smile à?"
      ],
      [
        "パク：はい。１年に２、３回コンサートに行きます。",
        "Park: Ừ. Mỗi năm tôi đi xem concert 2, 3 lần."
      ],
      [
        "ワン：そうですか。いいですね。",
        "Wang: Vậy à. Thích thật đấy."
      ],
      [
        "ワン：パクさん、私もスマイルのコンサートに行きたいです。でも、チケットの買い方がわかりません。どうやってチケットを買いますか。",
        "Wang: Anh Park ơi, tôi cũng muốn đi concert của Smile. Nhưng tôi không biết cách mua vé. Mua vé thế nào vậy?"
      ],
      [
        "パク：インターネットでチケットを予約して、コンビニでお金を払います。",
        "Park: Đặt vé trên mạng, rồi ra cửa hàng tiện lợi trả tiền."
      ],
      [
        "ワン：そうですか。",
        "Wang: Vậy à."
      ],
      [
        "パク：今度、一緒にコンサートに行きませんか。",
        "Park: Lần tới mình đi concert cùng nhau nhé?"
      ],
      [
        "ワン：いいですね。行きましょう。",
        "Wang: Hay đó. Đi thôi."
      ]
    ]
  }
};
