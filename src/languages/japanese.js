const hiragana = [
  { native: 'あ', romanization: 'a', english: 'a', type: 'hiragana' },
  { native: 'い', romanization: 'i', english: 'i', type: 'hiragana' },
  { native: 'う', romanization: 'u', english: 'u', type: 'hiragana' },
  { native: 'え', romanization: 'e', english: 'e', type: 'hiragana' },
  { native: 'お', romanization: 'o', english: 'o', type: 'hiragana' },
  { native: 'か', romanization: 'ka', english: 'ka', type: 'hiragana' },
  { native: 'き', romanization: 'ki', english: 'ki', type: 'hiragana' },
  { native: 'く', romanization: 'ku', english: 'ku', type: 'hiragana' },
  { native: 'け', romanization: 'ke', english: 'ke', type: 'hiragana' },
  { native: 'こ', romanization: 'ko', english: 'ko', type: 'hiragana' },
  { native: 'さ', romanization: 'sa', english: 'sa', type: 'hiragana' },
  { native: 'し', romanization: 'shi', english: 'shi', type: 'hiragana' },
  { native: 'す', romanization: 'su', english: 'su', type: 'hiragana' },
  { native: 'せ', romanization: 'se', english: 'se', type: 'hiragana' },
  { native: 'そ', romanization: 'so', english: 'so', type: 'hiragana' },
  { native: 'た', romanization: 'ta', english: 'ta', type: 'hiragana' },
  { native: 'ち', romanization: 'chi', english: 'chi', type: 'hiragana' },
  { native: 'つ', romanization: 'tsu', english: 'tsu', type: 'hiragana' },
  { native: 'て', romanization: 'te', english: 'te', type: 'hiragana' },
  { native: 'と', romanization: 'to', english: 'to', type: 'hiragana' },
  { native: 'な', romanization: 'na', english: 'na', type: 'hiragana' },
  { native: 'に', romanization: 'ni', english: 'ni', type: 'hiragana' },
  { native: 'ぬ', romanization: 'nu', english: 'nu', type: 'hiragana' },
  { native: 'ね', romanization: 'ne', english: 'ne', type: 'hiragana' },
  { native: 'の', romanization: 'no', english: 'no', type: 'hiragana' },
  { native: 'は', romanization: 'ha', english: 'ha', type: 'hiragana' },
  { native: 'ひ', romanization: 'hi', english: 'hi', type: 'hiragana' },
  { native: 'ふ', romanization: 'fu', english: 'fu', type: 'hiragana' },
  { native: 'へ', romanization: 'he', english: 'he', type: 'hiragana' },
  { native: 'ほ', romanization: 'ho', english: 'ho', type: 'hiragana' },
  { native: 'ま', romanization: 'ma', english: 'ma', type: 'hiragana' },
  { native: 'み', romanization: 'mi', english: 'mi', type: 'hiragana' },
  { native: 'む', romanization: 'mu', english: 'mu', type: 'hiragana' },
  { native: 'め', romanization: 'me', english: 'me', type: 'hiragana' },
  { native: 'も', romanization: 'mo', english: 'mo', type: 'hiragana' },
  { native: 'や', romanization: 'ya', english: 'ya', type: 'hiragana' },
  { native: 'ゆ', romanization: 'yu', english: 'yu', type: 'hiragana' },
  { native: 'よ', romanization: 'yo', english: 'yo', type: 'hiragana' },
  { native: 'ら', romanization: 'ra', english: 'ra', type: 'hiragana' },
  { native: 'り', romanization: 'ri', english: 'ri', type: 'hiragana' },
  { native: 'る', romanization: 'ru', english: 'ru', type: 'hiragana' },
  { native: 'れ', romanization: 're', english: 're', type: 'hiragana' },
  { native: 'ろ', romanization: 'ro', english: 'ro', type: 'hiragana' },
  { native: 'わ', romanization: 'wa', english: 'wa', type: 'hiragana' },
  { native: 'を', romanization: 'wo', english: 'wo', type: 'hiragana' },
  { native: 'ん', romanization: 'n', english: 'n', type: 'hiragana' }
];

const katakana = [
  { native: 'ア', romanization: 'a', english: 'a', type: 'katakana' },
  { native: 'イ', romanization: 'i', english: 'i', type: 'katakana' },
  { native: 'ウ', romanization: 'u', english: 'u', type: 'katakana' },
  { native: 'エ', romanization: 'e', english: 'e', type: 'katakana' },
  { native: 'オ', romanization: 'o', english: 'o', type: 'katakana' },
  { native: 'カ', romanization: 'ka', english: 'ka', type: 'katakana' },
  { native: 'キ', romanization: 'ki', english: 'ki', type: 'katakana' },
  { native: 'ク', romanization: 'ku', english: 'ku', type: 'katakana' },
  { native: 'ケ', romanization: 'ke', english: 'ke', type: 'katakana' },
  { native: 'コ', romanization: 'ko', english: 'ko', type: 'katakana' },
  { native: 'サ', romanization: 'sa', english: 'sa', type: 'katakana' },
  { native: 'シ', romanization: 'shi', english: 'shi', type: 'katakana' },
  { native: 'ス', romanization: 'su', english: 'su', type: 'katakana' },
  { native: 'セ', romanization: 'se', english: 'se', type: 'katakana' },
  { native: 'ソ', romanization: 'so', english: 'so', type: 'katakana' },
  { native: 'タ', romanization: 'ta', english: 'ta', type: 'katakana' },
  { native: 'チ', romanization: 'chi', english: 'chi', type: 'katakana' },
  { native: 'ツ', romanization: 'tsu', english: 'tsu', type: 'katakana' },
  { native: 'テ', romanization: 'te', english: 'te', type: 'katakana' },
  { native: 'ト', romanization: 'to', english: 'to', type: 'katakana' },
  { native: 'ナ', romanization: 'na', english: 'na', type: 'katakana' },
  { native: 'ニ', romanization: 'ni', english: 'ni', type: 'katakana' },
  { native: 'ヌ', romanization: 'nu', english: 'nu', type: 'katakana' },
  { native: 'ネ', romanization: 'ne', english: 'ne', type: 'katakana' },
  { native: 'ノ', romanization: 'no', english: 'no', type: 'katakana' },
  { native: 'ハ', romanization: 'ha', english: 'ha', type: 'katakana' },
  { native: 'ヒ', romanization: 'hi', english: 'hi', type: 'katakana' },
  { native: 'フ', romanization: 'fu', english: 'fu', type: 'katakana' },
  { native: 'ヘ', romanization: 'he', english: 'he', type: 'katakana' },
  { native: 'ホ', romanization: 'ho', english: 'ho', type: 'katakana' },
  { native: 'マ', romanization: 'ma', english: 'ma', type: 'katakana' },
  { native: 'ミ', romanization: 'mi', english: 'mi', type: 'katakana' },
  { native: 'ム', romanization: 'mu', english: 'mu', type: 'katakana' },
  { native: 'メ', romanization: 'me', english: 'me', type: 'katakana' },
  { native: 'モ', romanization: 'mo', english: 'mo', type: 'katakana' },
  { native: 'ヤ', romanization: 'ya', english: 'ya', type: 'katakana' },
  { native: 'ユ', romanization: 'yu', english: 'yu', type: 'katakana' },
  { native: 'ヨ', romanization: 'yo', english: 'yo', type: 'katakana' },
  { native: 'ラ', romanization: 'ra', english: 'ra', type: 'katakana' },
  { native: 'リ', romanization: 'ri', english: 'ri', type: 'katakana' },
  { native: 'ル', romanization: 'ru', english: 'ru', type: 'katakana' },
  { native: 'レ', romanization: 're', english: 're', type: 'katakana' },
  { native: 'ロ', romanization: 'ro', english: 'ro', type: 'katakana' },
  { native: 'ワ', romanization: 'wa', english: 'wa', type: 'katakana' },
  { native: 'ヲ', romanization: 'wo', english: 'wo', type: 'katakana' },
  { native: 'ン', romanization: 'n', english: 'n', type: 'katakana' }
];

const phrases = [
  // Basic Greetings & Courtesy
  { native: 'おはよう', romanization: 'ohayou', english: 'Good morning (casual)', type: 'phrase' },
  { native: 'おはようございます', romanization: 'ohayou gozaimasu', english: 'Good morning (polite)', type: 'phrase' },
  { native: 'こんにちは', romanization: 'konnichiwa', english: 'Hello / Good afternoon', type: 'phrase' },
  { native: 'こんばんは', romanization: 'konbanwa', english: 'Good evening', type: 'phrase' },
  { native: 'ありがとう', romanization: 'arigatou', english: 'Thank you (casual)', type: 'phrase' },
  { native: 'ありがとうございます', romanization: 'arigatou gozaimasu', english: 'Thank you (polite)', type: 'phrase' },
  { native: 'どうもありがとうございます', romanization: 'doumo arigatou gozaimasu', english: 'Thank you very much', type: 'phrase' },
  { native: 'すみません', romanization: 'sumimasen', english: 'Excuse me / Sorry', type: 'phrase' },
  { native: 'ごめんなさい', romanization: 'gomen nasai', english: 'I\'m sorry', type: 'phrase' },
  { native: 'さようなら', romanization: 'sayounara', english: 'Goodbye', type: 'phrase' },
  { native: 'じゃあね', romanization: 'jaa ne', english: 'See you (casual)', type: 'phrase' },
  { native: 'また会いましょう', romanization: 'mata aimashou', english: 'See you again', type: 'phrase' },
  { native: 'はい', romanization: 'hai', english: 'Yes', type: 'phrase' },
  { native: 'いいえ', romanization: 'iie', english: 'No', type: 'phrase' },
  { native: 'お願いします', romanization: 'onegaishimasu', english: 'Please', type: 'phrase' },
  { native: 'どういたしまして', romanization: 'douitashimashite', english: 'You\'re welcome', type: 'phrase' },
  { native: 'おやすみなさい', romanization: 'oyasuminasai', english: 'Good night', type: 'phrase' },
  { native: 'はじめまして', romanization: 'hajimemashite', english: 'Nice to meet you', type: 'phrase' },
  { native: 'よろしくお願いします', romanization: 'yoroshiku onegaishimasu', english: 'Please treat me well', type: 'phrase' },
  { native: 'お元気ですか', romanization: 'ogenki desu ka', english: 'How are you?', type: 'phrase' },

  // Communication
  { native: '英語を話せますか', romanization: 'eigo wo hanasemasu ka', english: 'Do you speak English?', type: 'phrase' },
  { native: '日本語がわかりません', romanization: 'nihongo ga wakarimasen', english: 'I don\'t understand Japanese', type: 'phrase' },
  { native: 'わかりました', romanization: 'wakarimashita', english: 'I understand', type: 'phrase' },
  { native: 'わかりません', romanization: 'wakarimasen', english: 'I don\'t understand', type: 'phrase' },
  { native: 'もう一度お願いします', romanization: 'mou ichido onegaishimasu', english: 'One more time please', type: 'phrase' },
  { native: 'ゆっくり話してください', romanization: 'yukkuri hanashite kudasai', english: 'Please speak slowly', type: 'phrase' },
  { native: '書いてください', romanization: 'kaite kudasai', english: 'Please write it down', type: 'phrase' },
  { native: 'これは何ですか', romanization: 'kore wa nan desu ka', english: 'What is this?', type: 'phrase' },
  { native: 'どういう意味ですか', romanization: 'dou iu imi desu ka', english: 'What does it mean?', type: 'phrase' },

  // Transportation - Train/Subway
  { native: '駅はどこですか', romanization: 'eki wa doko desu ka', english: 'Where is the station?', type: 'phrase' },
  { native: '切符売り場はどこですか', romanization: 'kippu uriba wa doko desu ka', english: 'Where is the ticket counter?', type: 'phrase' },
  { native: '何番線ですか', romanization: 'nanban sen desu ka', english: 'Which platform?', type: 'phrase' },
  { native: '新宿まで一枚ください', romanization: 'shinjuku made ichimai kudasai', english: 'One ticket to Shinjuku please', type: 'phrase' },
  { native: 'この電車は東京に行きますか', romanization: 'kono densha wa toukyou ni ikimasu ka', english: 'Does this train go to Tokyo?', type: 'phrase' },
  { native: '次の駅は何ですか', romanization: 'tsugi no eki wa nan desu ka', english: 'What is the next station?', type: 'phrase' },
  { native: '乗り換えが必要ですか', romanization: 'norikae ga hitsuyou desu ka', english: 'Do I need to transfer?', type: 'phrase' },
  { native: 'どこで降りますか', romanization: 'doko de orimasu ka', english: 'Where should I get off?', type: 'phrase' },
  { native: 'ICカードはありますか', romanization: 'ai shii kaado wa arimasu ka', english: 'Do you have an IC card?', type: 'phrase' },
  { native: 'スイカをチャージしたいです', romanization: 'suika wo chaaji shitai desu', english: 'I want to charge my Suica', type: 'phrase' },

  // Transportation - Taxi
  { native: 'タクシー乗り場はどこですか', romanization: 'takushii noriba wa doko desu ka', english: 'Where is the taxi stand?', type: 'phrase' },
  { native: 'ここまでお願いします', romanization: 'koko made onegaishimasu', english: 'To here please', type: 'phrase' },
  { native: 'この住所までお願いします', romanization: 'kono juusho made onegaishimasu', english: 'To this address please', type: 'phrase' },
  { native: 'ここで止めてください', romanization: 'koko de tomete kudasai', english: 'Please stop here', type: 'phrase' },
  { native: 'いくらかかりますか', romanization: 'ikura kakarimasu ka', english: 'How much will it cost?', type: 'phrase' },
  { native: 'レシートをください', romanization: 'reshiito wo kudasai', english: 'Receipt please', type: 'phrase' },

  // Transportation - Bus
  { native: 'バス停はどこですか', romanization: 'basutei wa doko desu ka', english: 'Where is the bus stop?', type: 'phrase' },
  { native: 'このバスは渋谷に行きますか', romanization: 'kono basu wa shibuya ni ikimasu ka', english: 'Does this bus go to Shibuya?', type: 'phrase' },
  { native: '運賃はいくらですか', romanization: 'unchin wa ikura desu ka', english: 'How much is the fare?', type: 'phrase' },
  { native: '次のバスは何時ですか', romanization: 'tsugi no basu wa nanji desu ka', english: 'When is the next bus?', type: 'phrase' },

  // Transportation - Airport
  { native: '空港はどこですか', romanization: 'kuukou wa doko desu ka', english: 'Where is the airport?', type: 'phrase' },
  { native: 'チェックインカウンターはどこですか', romanization: 'chekku in kauntaa wa doko desu ka', english: 'Where is check-in?', type: 'phrase' },
  { native: '搭乗券をお願いします', romanization: 'toujouken wo onegaishimasu', english: 'Boarding pass please', type: 'phrase' },
  { native: '窓側の席をお願いします', romanization: 'madogawa no seki wo onegaishimasu', english: 'Window seat please', type: 'phrase' },
  { native: '通路側の席をお願いします', romanization: 'tsuurogawa no seki wo onegaishimasu', english: 'Aisle seat please', type: 'phrase' },
  { native: '手荷物預かり所はどこですか', romanization: 'tenimotsu azukarisho wa doko desu ka', english: 'Where is baggage claim?', type: 'phrase' },

  // Hotel/Accommodation
  { native: 'チェックインお願いします', romanization: 'chekku in onegaishimasu', english: 'Check in please', type: 'phrase' },
  { native: '予約しています', romanization: 'yoyaku shite imasu', english: 'I have a reservation', type: 'phrase' },
  { native: 'チェックアウトお願いします', romanization: 'chekku auto onegaishimasu', english: 'Check out please', type: 'phrase' },
  { native: '部屋の鍵をください', romanization: 'heya no kagi wo kudasai', english: 'Room key please', type: 'phrase' },
  { native: 'WiFiのパスワードは何ですか', romanization: 'waifai no pasuwaado wa nan desu ka', english: 'What is the WiFi password?', type: 'phrase' },
  { native: '朝食は含まれていますか', romanization: 'choushoku wa fukumarete imasu ka', english: 'Is breakfast included?', type: 'phrase' },
  { native: '朝食は何時からですか', romanization: 'choushoku wa nanji kara desu ka', english: 'What time is breakfast?', type: 'phrase' },
  { native: 'エアコンが動きません', romanization: 'eakon ga ugokimasen', english: 'The AC doesn\'t work', type: 'phrase' },
  { native: 'タオルをください', romanization: 'taoru wo kudasai', english: 'Towels please', type: 'phrase' },
  { native: '荷物を預けられますか', romanization: 'nimotsu wo azukeraremasu ka', english: 'Can I leave my luggage?', type: 'phrase' },
  { native: '延長できますか', romanization: 'enchou dekimasu ka', english: 'Can I extend my stay?', type: 'phrase' },
  { native: '部屋を変えてください', romanization: 'heya wo kaete kudasai', english: 'Please change my room', type: 'phrase' },

  // Restaurant/Food
  { native: 'いただきます', romanization: 'itadakimasu', english: 'Let\'s eat (before meal)', type: 'phrase' },
  { native: 'ごちそうさまでした', romanization: 'gochisousama deshita', english: 'Thank you for the meal', type: 'phrase' },
  { native: '予約していません', romanization: 'yoyaku shite imasen', english: 'I don\'t have a reservation', type: 'phrase' },
  { native: '二人です', romanization: 'futari desu', english: 'Two people', type: 'phrase' },
  { native: 'メニューをください', romanization: 'menyuu wo kudasai', english: 'Menu please', type: 'phrase' },
  { native: '英語のメニューはありますか', romanization: 'eigo no menyuu wa arimasu ka', english: 'Do you have an English menu?', type: 'phrase' },
  { native: '写真のメニューはありますか', romanization: 'shashin no menyuu wa arimasu ka', english: 'Do you have a picture menu?', type: 'phrase' },
  { native: 'おすすめは何ですか', romanization: 'osusume wa nan desu ka', english: 'What do you recommend?', type: 'phrase' },
  { native: 'これをください', romanization: 'kore wo kudasai', english: 'This please', type: 'phrase' },
  { native: '水をください', romanization: 'mizu wo kudasai', english: 'Water please', type: 'phrase' },
  { native: 'お茶をください', romanization: 'ocha wo kudasai', english: 'Tea please', type: 'phrase' },
  { native: 'ビールをください', romanization: 'biiru wo kudasai', english: 'Beer please', type: 'phrase' },
  { native: '美味しい', romanization: 'oishii', english: 'Delicious', type: 'phrase' },
  { native: 'お腹がすきました', romanization: 'onaka ga sukimashita', english: 'I\'m hungry', type: 'phrase' },
  { native: 'お会計お願いします', romanization: 'okaikei onegaishimasu', english: 'Check please', type: 'phrase' },
  { native: 'クレジットカードは使えますか', romanization: 'kurejitto kaado wa tsukaemasu ka', english: 'Can I use credit card?', type: 'phrase' },
  { native: '別々に払います', romanization: 'betsubetsu ni haraimasu', english: 'We\'ll pay separately', type: 'phrase' },
  { native: '辛くしないでください', romanization: 'karaku shinaide kudasai', english: 'Not spicy please', type: 'phrase' },
  { native: 'アレルギーがあります', romanization: 'arerugii ga arimasu', english: 'I have allergies', type: 'phrase' },
  { native: 'ベジタリアンです', romanization: 'bejitarian desu', english: 'I\'m vegetarian', type: 'phrase' },
  { native: '豚肉は食べられません', romanization: 'butaniku wa taberaremasen', english: 'I can\'t eat pork', type: 'phrase' },

  // Shopping
  { native: 'いくらですか', romanization: 'ikura desu ka', english: 'How much is it?', type: 'phrase' },
  { native: 'これをください', romanization: 'kore wo kudasai', english: 'I\'ll take this please', type: 'phrase' },
  { native: '見てるだけです', romanization: 'miteru dake desu', english: 'Just looking', type: 'phrase' },
  { native: '試着できますか', romanization: 'shichaku dekimasu ka', english: 'Can I try it on?', type: 'phrase' },
  { native: '試着室はどこですか', romanization: 'shichakushitsu wa doko desu ka', english: 'Where is the fitting room?', type: 'phrase' },
  { native: 'もっと大きいサイズはありますか', romanization: 'motto ookii saizu wa arimasu ka', english: 'Do you have a larger size?', type: 'phrase' },
  { native: 'もっと小さいサイズはありますか', romanization: 'motto chiisai saizu wa arimasu ka', english: 'Do you have a smaller size?', type: 'phrase' },
  { native: '他の色はありますか', romanization: 'hoka no iro wa arimasu ka', english: 'Do you have other colors?', type: 'phrase' },
  { native: '安くなりますか', romanization: 'yasuku narimasu ka', english: 'Can you make it cheaper?', type: 'phrase' },
  { native: '免税できますか', romanization: 'menzei dekimasu ka', english: 'Can I get tax free?', type: 'phrase' },
  { native: '袋をください', romanization: 'fukuro wo kudasai', english: 'Bag please', type: 'phrase' },
  { native: 'プレゼント用に包んでください', romanization: 'purezento you ni tsutsunde kudasai', english: 'Gift wrap please', type: 'phrase' },
  { native: '返品できますか', romanization: 'henpin dekimasu ka', english: 'Can I return this?', type: 'phrase' },

  // Directions
  { native: 'トイレはどこですか', romanization: 'toire wa doko desu ka', english: 'Where is the bathroom?', type: 'phrase' },
  { native: 'ここはどこですか', romanization: 'koko wa doko desu ka', english: 'Where am I?', type: 'phrase' },
  { native: 'どうやって行きますか', romanization: 'douyatte ikimasu ka', english: 'How do I get there?', type: 'phrase' },
  { native: '歩いて行けますか', romanization: 'aruite ikemasu ka', english: 'Can I walk there?', type: 'phrase' },
  { native: '近いですか', romanization: 'chikai desu ka', english: 'Is it close?', type: 'phrase' },
  { native: '遠いですか', romanization: 'tooi desu ka', english: 'Is it far?', type: 'phrase' },
  { native: 'まっすぐ行ってください', romanization: 'massugu itte kudasai', english: 'Go straight', type: 'phrase' },
  { native: '右に曲がってください', romanization: 'migi ni magatte kudasai', english: 'Turn right', type: 'phrase' },
  { native: '左に曲がってください', romanization: 'hidari ni magatte kudasai', english: 'Turn left', type: 'phrase' },
  { native: '地図を描いてください', romanization: 'chizu wo kaite kudasai', english: 'Please draw a map', type: 'phrase' },
  { native: '道に迷いました', romanization: 'michi ni mayoimashita', english: 'I\'m lost', type: 'phrase' },

  // Tourist Attractions
  { native: '入場料はいくらですか', romanization: 'nyuujouryou wa ikura desu ka', english: 'How much is admission?', type: 'phrase' },
  { native: '何時までですか', romanization: 'nanji made desu ka', english: 'Until what time?', type: 'phrase' },
  { native: '写真を撮ってもいいですか', romanization: 'shashin wo totte mo ii desu ka', english: 'Can I take photos?', type: 'phrase' },
  { native: '写真を撮ってください', romanization: 'shashin wo totte kudasai', english: 'Please take my photo', type: 'phrase' },
  { native: 'パンフレットをください', romanization: 'panfuretto wo kudasai', english: 'Pamphlet please', type: 'phrase' },
  { native: 'オーディオガイドはありますか', romanization: 'oodio gaido wa arimasu ka', english: 'Do you have audio guide?', type: 'phrase' },
  { native: 'ツアーはありますか', romanization: 'tsuaa wa arimasu ka', english: 'Are there tours?', type: 'phrase' },

  // Emergency/Medical
  { native: '助けて', romanization: 'tasukete', english: 'Help!', type: 'phrase' },
  { native: '警察を呼んでください', romanization: 'keisatsu wo yonde kudasai', english: 'Call the police', type: 'phrase' },
  { native: '救急車を呼んでください', romanization: 'kyuukyuusha wo yonde kudasai', english: 'Call an ambulance', type: 'phrase' },
  { native: '病院はどこですか', romanization: 'byouin wa doko desu ka', english: 'Where is the hospital?', type: 'phrase' },
  { native: '薬局はどこですか', romanization: 'yakkyoku wa doko desu ka', english: 'Where is the pharmacy?', type: 'phrase' },
  { native: '気分が悪いです', romanization: 'kibun ga warui desu', english: 'I feel sick', type: 'phrase' },
  { native: '頭が痛いです', romanization: 'atama ga itai desu', english: 'I have a headache', type: 'phrase' },
  { native: 'お腹が痛いです', romanization: 'onaka ga itai desu', english: 'I have a stomachache', type: 'phrase' },
  { native: '熱があります', romanization: 'netsu ga arimasu', english: 'I have a fever', type: 'phrase' },
  { native: '薬はありますか', romanization: 'kusuri wa arimasu ka', english: 'Do you have medicine?', type: 'phrase' },
  { native: '保険証を持っています', romanization: 'hokenshou wo motte imasu', english: 'I have insurance', type: 'phrase' },
  { native: '英語を話せる医者はいますか', romanization: 'eigo wo hanaseru isha wa imasu ka', english: 'Is there an English-speaking doctor?', type: 'phrase' },

  // Problems
  { native: '困っています', romanization: 'komatte imasu', english: 'I\'m in trouble', type: 'phrase' },
  { native: 'パスポートをなくしました', romanization: 'pasupooto wo nakushimashita', english: 'I lost my passport', type: 'phrase' },
  { native: '財布をなくしました', romanization: 'saifu wo nakushimashita', english: 'I lost my wallet', type: 'phrase' },
  { native: '携帯をなくしました', romanization: 'keitai wo nakushimashita', english: 'I lost my phone', type: 'phrase' },
  { native: '盗まれました', romanization: 'nusumaremashita', english: 'I was robbed', type: 'phrase' },
  { native: '大使館はどこですか', romanization: 'taishikan wa doko desu ka', english: 'Where is the embassy?', type: 'phrase' },

  // Numbers & Time
  { native: '今何時ですか', romanization: 'ima nanji desu ka', english: 'What time is it now?', type: 'phrase' },
  { native: '何時に開きますか', romanization: 'nanji ni akimasu ka', english: 'What time does it open?', type: 'phrase' },
  { native: '何時に閉まりますか', romanization: 'nanji ni shimarimasu ka', english: 'What time does it close?', type: 'phrase' },
  { native: 'どのくらいかかりますか', romanization: 'dono kurai kakarimasu ka', english: 'How long does it take?', type: 'phrase' },
  { native: '今日', romanization: 'kyou', english: 'Today', type: 'phrase' },
  { native: '明日', romanization: 'ashita', english: 'Tomorrow', type: 'phrase' },
  { native: '昨日', romanization: 'kinou', english: 'Yesterday', type: 'phrase' },

  // Common Requests
  { native: 'ちょっと待ってください', romanization: 'chotto matte kudasai', english: 'Please wait a moment', type: 'phrase' },
  { native: 'もう一回言ってください', romanization: 'mou ikkai itte kudasai', english: 'Please say it again', type: 'phrase' },
  { native: '見せてください', romanization: 'misete kudasai', english: 'Please show me', type: 'phrase' },
  { native: '教えてください', romanization: 'oshiete kudasai', english: 'Please tell me', type: 'phrase' },
  { native: '手伝ってください', romanization: 'tetsudatte kudasai', english: 'Please help me', type: 'phrase' },
  { native: '大丈夫です', romanization: 'daijoubu desu', english: 'It\'s okay / I\'m fine', type: 'phrase' },
  { native: '結構です', romanization: 'kekkou desu', english: 'No thank you', type: 'phrase' },

  // Miscellaneous
  { native: 'お名前は何ですか', romanization: 'onamae wa nan desu ka', english: 'What\'s your name?', type: 'phrase' },
  { native: '私の名前は', romanization: 'watashi no namae wa', english: 'My name is', type: 'phrase' },
  { native: 'どこから来ましたか', romanization: 'doko kara kimashita ka', english: 'Where are you from?', type: 'phrase' },
  { native: 'アメリカから来ました', romanization: 'amerika kara kimashita', english: 'I\'m from America', type: 'phrase' },
  { native: '観光です', romanization: 'kankou desu', english: 'I\'m a tourist', type: 'phrase' },
  { native: '仕事です', romanization: 'shigoto desu', english: 'I\'m here for work', type: 'phrase' },
  { native: '日本は初めてです', romanization: 'nihon wa hajimete desu', english: 'First time in Japan', type: 'phrase' },
  { native: '何日間滞在しますか', romanization: 'nannichi kan taizai shimasu ka', english: 'How many days are you staying?', type: 'phrase' },
  { native: '一週間滞在します', romanization: 'isshuukan taizai shimasu', english: 'I\'m staying for a week', type: 'phrase' },
  { native: '楽しんでください', romanization: 'tanoshinde kudasai', english: 'Please enjoy', type: 'phrase' },
  { native: '気をつけて', romanization: 'ki wo tsukete', english: 'Be careful / Take care', type: 'phrase' },
  { native: '行ってきます', romanization: 'itte kimasu', english: 'I\'m leaving (will come back)', type: 'phrase' },
  { native: '行ってらっしゃい', romanization: 'itte rasshai', english: 'Have a good trip', type: 'phrase' },
  { native: 'ただいま', romanization: 'tadaima', english: 'I\'m back', type: 'phrase' },
  { native: 'お帰りなさい', romanization: 'okaeri nasai', english: 'Welcome back', type: 'phrase' },
  { native: 'お邪魔します', romanization: 'ojama shimasu', english: 'Excuse me (entering)', type: 'phrase' },
  { native: 'お邪魔しました', romanization: 'ojama shimashita', english: 'Thank you (leaving)', type: 'phrase' },
  { native: 'お疲れ様でした', romanization: 'otsukaresama deshita', english: 'Good work / Thank you', type: 'phrase' },
  { native: '頑張って', romanization: 'ganbatte', english: 'Good luck / Do your best', type: 'phrase' },
  { native: 'お先に失礼します', romanization: 'osaki ni shitsurei shimasu', english: 'Excuse me for leaving first', type: 'phrase' },

  // Internet & Technology
  { native: 'WiFiはありますか', romanization: 'waifai wa arimasu ka', english: 'Is there WiFi?', type: 'phrase' },
  { native: 'パスワードは何ですか', romanization: 'pasuwaado wa nan desu ka', english: 'What is the password?', type: 'phrase' },
  { native: '充電できますか', romanization: 'juuden dekimasu ka', english: 'Can I charge?', type: 'phrase' },
  { native: 'コンセントはどこですか', romanization: 'konsento wa doko desu ka', english: 'Where is the outlet?', type: 'phrase' },
  { native: 'SIMカードはどこで買えますか', romanization: 'shimu kaado wa doko de kaemasu ka', english: 'Where can I buy a SIM card?', type: 'phrase' },

  // Weather & Temperature
  { native: '暑いですね', romanization: 'atsui desu ne', english: 'It\'s hot', type: 'phrase' },
  { native: '寒いですね', romanization: 'samui desu ne', english: 'It\'s cold', type: 'phrase' },
  { native: '天気が良いですね', romanization: 'tenki ga yoi desu ne', english: 'Nice weather', type: 'phrase' },
  { native: '雨が降っています', romanization: 'ame ga futte imasu', english: 'It\'s raining', type: 'phrase' },
  { native: '傘はありますか', romanization: 'kasa wa arimasu ka', english: 'Do you have an umbrella?', type: 'phrase' }
];

const vocabulary = [
  // Numbers
  { native: '一', romanization: 'ichi', english: 'one', type: 'vocabulary' },
  { native: '二', romanization: 'ni', english: 'two', type: 'vocabulary' },
  { native: '三', romanization: 'san', english: 'three', type: 'vocabulary' },
  { native: '四', romanization: 'yon/shi', english: 'four', type: 'vocabulary' },
  { native: '五', romanization: 'go', english: 'five', type: 'vocabulary' },
  { native: '六', romanization: 'roku', english: 'six', type: 'vocabulary' },
  { native: '七', romanization: 'nana/shichi', english: 'seven', type: 'vocabulary' },
  { native: '八', romanization: 'hachi', english: 'eight', type: 'vocabulary' },
  { native: '九', romanization: 'kyuu', english: 'nine', type: 'vocabulary' },
  { native: '十', romanization: 'juu', english: 'ten', type: 'vocabulary' },
  { native: '百', romanization: 'hyaku', english: 'hundred', type: 'vocabulary' },
  { native: '千', romanization: 'sen', english: 'thousand', type: 'vocabulary' },
  { native: '万', romanization: 'man', english: 'ten thousand', type: 'vocabulary' },

  // Time
  { native: '時間', romanization: 'jikan', english: 'time', type: 'vocabulary' },
  { native: '朝', romanization: 'asa', english: 'morning', type: 'vocabulary' },
  { native: '昼', romanization: 'hiru', english: 'noon/daytime', type: 'vocabulary' },
  { native: '夜', romanization: 'yoru', english: 'night', type: 'vocabulary' },
  { native: '今', romanization: 'ima', english: 'now', type: 'vocabulary' },
  { native: '週', romanization: 'shuu', english: 'week', type: 'vocabulary' },
  { native: '月', romanization: 'tsuki/getsu', english: 'month/moon', type: 'vocabulary' },
  { native: '年', romanization: 'toshi/nen', english: 'year', type: 'vocabulary' },

  // Places
  { native: '駅', romanization: 'eki', english: 'station', type: 'vocabulary' },
  { native: '空港', romanization: 'kuukou', english: 'airport', type: 'vocabulary' },
  { native: 'ホテル', romanization: 'hoteru', english: 'hotel', type: 'vocabulary' },
  { native: 'レストラン', romanization: 'resutoran', english: 'restaurant', type: 'vocabulary' },
  { native: '病院', romanization: 'byouin', english: 'hospital', type: 'vocabulary' },
  { native: '銀行', romanization: 'ginkou', english: 'bank', type: 'vocabulary' },
  { native: '郵便局', romanization: 'yuubinkyoku', english: 'post office', type: 'vocabulary' },
  { native: '店', romanization: 'mise', english: 'shop/store', type: 'vocabulary' },
  { native: 'コンビニ', romanization: 'konbini', english: 'convenience store', type: 'vocabulary' },
  { native: '本屋', romanization: 'honya', english: 'bookstore', type: 'vocabulary' },
  { native: '薬局', romanization: 'yakkyoku', english: 'pharmacy', type: 'vocabulary' },
  { native: '公園', romanization: 'kouen', english: 'park', type: 'vocabulary' },
  { native: '寺', romanization: 'tera', english: 'temple', type: 'vocabulary' },
  { native: '神社', romanization: 'jinja', english: 'shrine', type: 'vocabulary' },
  { native: '城', romanization: 'shiro', english: 'castle', type: 'vocabulary' },
  { native: '博物館', romanization: 'hakubutsukan', english: 'museum', type: 'vocabulary' },
  { native: '美術館', romanization: 'bijutsukan', english: 'art museum', type: 'vocabulary' },
  { native: '図書館', romanization: 'toshokan', english: 'library', type: 'vocabulary' },

  // Transportation
  { native: '電車', romanization: 'densha', english: 'train', type: 'vocabulary' },
  { native: 'バス', romanization: 'basu', english: 'bus', type: 'vocabulary' },
  { native: 'タクシー', romanization: 'takushii', english: 'taxi', type: 'vocabulary' },
  { native: '地下鉄', romanization: 'chikatetsu', english: 'subway', type: 'vocabulary' },
  { native: '新幹線', romanization: 'shinkansen', english: 'bullet train', type: 'vocabulary' },
  { native: '飛行機', romanization: 'hikouki', english: 'airplane', type: 'vocabulary' },
  { native: '自転車', romanization: 'jitensha', english: 'bicycle', type: 'vocabulary' },
  { native: '車', romanization: 'kuruma', english: 'car', type: 'vocabulary' },
  { native: '切符', romanization: 'kippu', english: 'ticket', type: 'vocabulary' },

  // Food & Drink
  { native: '水', romanization: 'mizu', english: 'water', type: 'vocabulary' },
  { native: 'お茶', romanization: 'ocha', english: 'tea', type: 'vocabulary' },
  { native: 'コーヒー', romanization: 'koohii', english: 'coffee', type: 'vocabulary' },
  { native: 'ビール', romanization: 'biiru', english: 'beer', type: 'vocabulary' },
  { native: 'ご飯', romanization: 'gohan', english: 'rice/meal', type: 'vocabulary' },
  { native: 'パン', romanization: 'pan', english: 'bread', type: 'vocabulary' },
  { native: '肉', romanization: 'niku', english: 'meat', type: 'vocabulary' },
  { native: '魚', romanization: 'sakana', english: 'fish', type: 'vocabulary' },
  { native: '野菜', romanization: 'yasai', english: 'vegetables', type: 'vocabulary' },
  { native: '果物', romanization: 'kudamono', english: 'fruit', type: 'vocabulary' },
  { native: '卵', romanization: 'tamago', english: 'egg', type: 'vocabulary' },
  { native: '牛乳', romanization: 'gyuunyuu', english: 'milk', type: 'vocabulary' },
  { native: '砂糖', romanization: 'satou', english: 'sugar', type: 'vocabulary' },
  { native: '塩', romanization: 'shio', english: 'salt', type: 'vocabulary' },
  { native: '醤油', romanization: 'shouyu', english: 'soy sauce', type: 'vocabulary' },

  // People
  { native: '人', romanization: 'hito', english: 'person', type: 'vocabulary' },
  { native: '友達', romanization: 'tomodachi', english: 'friend', type: 'vocabulary' },
  { native: '家族', romanization: 'kazoku', english: 'family', type: 'vocabulary' },
  { native: '母', romanization: 'haha', english: 'mother', type: 'vocabulary' },
  { native: '父', romanization: 'chichi', english: 'father', type: 'vocabulary' },
  { native: '子供', romanization: 'kodomo', english: 'child', type: 'vocabulary' },
  { native: '男', romanization: 'otoko', english: 'man', type: 'vocabulary' },
  { native: '女', romanization: 'onna', english: 'woman', type: 'vocabulary' },
  { native: '先生', romanization: 'sensei', english: 'teacher', type: 'vocabulary' },
  { native: '学生', romanization: 'gakusei', english: 'student', type: 'vocabulary' },

  // Common Objects
  { native: '本', romanization: 'hon', english: 'book', type: 'vocabulary' },
  { native: '新聞', romanization: 'shinbun', english: 'newspaper', type: 'vocabulary' },
  { native: '雑誌', romanization: 'zasshi', english: 'magazine', type: 'vocabulary' },
  { native: '携帯', romanization: 'keitai', english: 'cell phone', type: 'vocabulary' },
  { native: 'カメラ', romanization: 'kamera', english: 'camera', type: 'vocabulary' },
  { native: '傘', romanization: 'kasa', english: 'umbrella', type: 'vocabulary' },
  { native: '鞄', romanization: 'kaban', english: 'bag', type: 'vocabulary' },
  { native: '財布', romanization: 'saifu', english: 'wallet', type: 'vocabulary' },
  { native: 'お金', romanization: 'okane', english: 'money', type: 'vocabulary' },
  { native: 'チケット', romanization: 'chiketto', english: 'ticket', type: 'vocabulary' },
  { native: '地図', romanization: 'chizu', english: 'map', type: 'vocabulary' },
  { native: '鍵', romanization: 'kagi', english: 'key', type: 'vocabulary' },

  // Adjectives
  { native: '大きい', romanization: 'ookii', english: 'big', type: 'vocabulary' },
  { native: '小さい', romanization: 'chiisai', english: 'small', type: 'vocabulary' },
  { native: '高い', romanization: 'takai', english: 'expensive/tall', type: 'vocabulary' },
  { native: '安い', romanization: 'yasui', english: 'cheap', type: 'vocabulary' },
  { native: '新しい', romanization: 'atarashii', english: 'new', type: 'vocabulary' },
  { native: '古い', romanization: 'furui', english: 'old', type: 'vocabulary' },
  { native: '良い', romanization: 'yoi/ii', english: 'good', type: 'vocabulary' },
  { native: '悪い', romanization: 'warui', english: 'bad', type: 'vocabulary' },
  { native: '暑い', romanization: 'atsui', english: 'hot (weather)', type: 'vocabulary' },
  { native: '寒い', romanization: 'samui', english: 'cold', type: 'vocabulary' },
  { native: '熱い', romanization: 'atsui', english: 'hot (temperature)', type: 'vocabulary' },
  { native: '冷たい', romanization: 'tsumetai', english: 'cold (touch)', type: 'vocabulary' },

  // Colors
  { native: '赤', romanization: 'aka', english: 'red', type: 'vocabulary' },
  { native: '青', romanization: 'ao', english: 'blue', type: 'vocabulary' },
  { native: '黄色', romanization: 'kiiro', english: 'yellow', type: 'vocabulary' },
  { native: '緑', romanization: 'midori', english: 'green', type: 'vocabulary' },
  { native: '白', romanization: 'shiro', english: 'white', type: 'vocabulary' },
  { native: '黒', romanization: 'kuro', english: 'black', type: 'vocabulary' },

  // Directions
  { native: '右', romanization: 'migi', english: 'right', type: 'vocabulary' },
  { native: '左', romanization: 'hidari', english: 'left', type: 'vocabulary' },
  { native: '前', romanization: 'mae', english: 'front', type: 'vocabulary' },
  { native: '後ろ', romanization: 'ushiro', english: 'back/behind', type: 'vocabulary' },
  { native: '上', romanization: 'ue', english: 'up/above', type: 'vocabulary' },
  { native: '下', romanization: 'shita', english: 'down/below', type: 'vocabulary' },
  { native: '中', romanization: 'naka', english: 'inside', type: 'vocabulary' },
  { native: '外', romanization: 'soto', english: 'outside', type: 'vocabulary' },
  { native: '近い', romanization: 'chikai', english: 'near', type: 'vocabulary' },
  { native: '遠い', romanization: 'tooi', english: 'far', type: 'vocabulary' }
];

function organizeKanaIntoRows(items) {
  const rows = [];
  let currentRow = [];

  items.forEach((item) => {
    currentRow.push(item);
    const rom = item.romanization;

    if (currentRow.length === 5) {
      rows.push([...currentRow]);
      currentRow = [];
    } else if (rom === 'yo' || rom === 'n') {
      rows.push([...currentRow]);
      currentRow = [];
    }
  });

  if (currentRow.length > 0) {
    rows.push(currentRow);
  }

  return rows;
}

const japanese = {
  id: 'japanese',
  name: 'Japanese',
  speechLang: 'ja-JP',
  hasRomanization: true,
  romanizationLabel: 'Show Romaji',
  categories: [
    {
      id: 'hiragana',
      name: 'Hiragana',
      type: 'hiragana',
      renderMode: 'grid',
      gridRows: organizeKanaIntoRows,
      data: hiragana
    },
    {
      id: 'katakana',
      name: 'Katakana',
      type: 'katakana',
      renderMode: 'grid',
      gridRows: organizeKanaIntoRows,
      data: katakana
    },
    {
      id: 'phrases',
      name: 'Phrases',
      type: 'phrase',
      renderMode: 'list',
      data: phrases
    },
    {
      id: 'vocabulary',
      name: 'Vocabulary',
      type: 'vocabulary',
      renderMode: 'list',
      data: vocabulary
    }
  ]
};

export default japanese;
