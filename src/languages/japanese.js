const hiragana = [
  { native: 'あ', romanization: 'a', english: 'a' },
  { native: 'い', romanization: 'i', english: 'i' },
  { native: 'う', romanization: 'u', english: 'u' },
  { native: 'え', romanization: 'e', english: 'e' },
  { native: 'お', romanization: 'o', english: 'o' },
  { native: 'か', romanization: 'ka', english: 'ka' },
  { native: 'き', romanization: 'ki', english: 'ki' },
  { native: 'く', romanization: 'ku', english: 'ku' },
  { native: 'け', romanization: 'ke', english: 'ke' },
  { native: 'こ', romanization: 'ko', english: 'ko' },
  { native: 'さ', romanization: 'sa', english: 'sa' },
  { native: 'し', romanization: 'shi', english: 'shi' },
  { native: 'す', romanization: 'su', english: 'su' },
  { native: 'せ', romanization: 'se', english: 'se' },
  { native: 'そ', romanization: 'so', english: 'so' },
  { native: 'た', romanization: 'ta', english: 'ta' },
  { native: 'ち', romanization: 'chi', english: 'chi' },
  { native: 'つ', romanization: 'tsu', english: 'tsu' },
  { native: 'て', romanization: 'te', english: 'te' },
  { native: 'と', romanization: 'to', english: 'to' },
  { native: 'な', romanization: 'na', english: 'na' },
  { native: 'に', romanization: 'ni', english: 'ni' },
  { native: 'ぬ', romanization: 'nu', english: 'nu' },
  { native: 'ね', romanization: 'ne', english: 'ne' },
  { native: 'の', romanization: 'no', english: 'no' },
  { native: 'は', romanization: 'ha', english: 'ha' },
  { native: 'ひ', romanization: 'hi', english: 'hi' },
  { native: 'ふ', romanization: 'fu', english: 'fu' },
  { native: 'へ', romanization: 'he', english: 'he' },
  { native: 'ほ', romanization: 'ho', english: 'ho' },
  { native: 'ま', romanization: 'ma', english: 'ma' },
  { native: 'み', romanization: 'mi', english: 'mi' },
  { native: 'む', romanization: 'mu', english: 'mu' },
  { native: 'め', romanization: 'me', english: 'me' },
  { native: 'も', romanization: 'mo', english: 'mo' },
  { native: 'や', romanization: 'ya', english: 'ya' },
  { native: 'ゆ', romanization: 'yu', english: 'yu' },
  { native: 'よ', romanization: 'yo', english: 'yo' },
  { native: 'ら', romanization: 'ra', english: 'ra' },
  { native: 'り', romanization: 'ri', english: 'ri' },
  { native: 'る', romanization: 'ru', english: 'ru' },
  { native: 'れ', romanization: 're', english: 're' },
  { native: 'ろ', romanization: 'ro', english: 'ro' },
  { native: 'わ', romanization: 'wa', english: 'wa' },
  { native: 'を', romanization: 'wo', english: 'wo' },
  { native: 'ん', romanization: 'n', english: 'n' }
];

const katakana = [
  { native: 'ア', romanization: 'a', english: 'a' },
  { native: 'イ', romanization: 'i', english: 'i' },
  { native: 'ウ', romanization: 'u', english: 'u' },
  { native: 'エ', romanization: 'e', english: 'e' },
  { native: 'オ', romanization: 'o', english: 'o' },
  { native: 'カ', romanization: 'ka', english: 'ka' },
  { native: 'キ', romanization: 'ki', english: 'ki' },
  { native: 'ク', romanization: 'ku', english: 'ku' },
  { native: 'ケ', romanization: 'ke', english: 'ke' },
  { native: 'コ', romanization: 'ko', english: 'ko' },
  { native: 'サ', romanization: 'sa', english: 'sa' },
  { native: 'シ', romanization: 'shi', english: 'shi' },
  { native: 'ス', romanization: 'su', english: 'su' },
  { native: 'セ', romanization: 'se', english: 'se' },
  { native: 'ソ', romanization: 'so', english: 'so' },
  { native: 'タ', romanization: 'ta', english: 'ta' },
  { native: 'チ', romanization: 'chi', english: 'chi' },
  { native: 'ツ', romanization: 'tsu', english: 'tsu' },
  { native: 'テ', romanization: 'te', english: 'te' },
  { native: 'ト', romanization: 'to', english: 'to' },
  { native: 'ナ', romanization: 'na', english: 'na' },
  { native: 'ニ', romanization: 'ni', english: 'ni' },
  { native: 'ヌ', romanization: 'nu', english: 'nu' },
  { native: 'ネ', romanization: 'ne', english: 'ne' },
  { native: 'ノ', romanization: 'no', english: 'no' },
  { native: 'ハ', romanization: 'ha', english: 'ha' },
  { native: 'ヒ', romanization: 'hi', english: 'hi' },
  { native: 'フ', romanization: 'fu', english: 'fu' },
  { native: 'ヘ', romanization: 'he', english: 'he' },
  { native: 'ホ', romanization: 'ho', english: 'ho' },
  { native: 'マ', romanization: 'ma', english: 'ma' },
  { native: 'ミ', romanization: 'mi', english: 'mi' },
  { native: 'ム', romanization: 'mu', english: 'mu' },
  { native: 'メ', romanization: 'me', english: 'me' },
  { native: 'モ', romanization: 'mo', english: 'mo' },
  { native: 'ヤ', romanization: 'ya', english: 'ya' },
  { native: 'ユ', romanization: 'yu', english: 'yu' },
  { native: 'ヨ', romanization: 'yo', english: 'yo' },
  { native: 'ラ', romanization: 'ra', english: 'ra' },
  { native: 'リ', romanization: 'ri', english: 'ri' },
  { native: 'ル', romanization: 'ru', english: 'ru' },
  { native: 'レ', romanization: 're', english: 're' },
  { native: 'ロ', romanization: 'ro', english: 'ro' },
  { native: 'ワ', romanization: 'wa', english: 'wa' },
  { native: 'ヲ', romanization: 'wo', english: 'wo' },
  { native: 'ン', romanization: 'n', english: 'n' }
];

const elementaryPhrases = [
  // Basic Greetings & Courtesy
  { native: 'おはよう', romanization: 'ohayou', english: 'Good morning (casual)' },
  { native: 'おはようございます', romanization: 'ohayou gozaimasu', english: 'Good morning (polite)' },
  { native: 'こんにちは', romanization: 'konnichiwa', english: 'Hello / Good afternoon' },
  { native: 'こんばんは', romanization: 'konbanwa', english: 'Good evening' },
  { native: 'ありがとう', romanization: 'arigatou', english: 'Thank you (casual)' },
  { native: 'ありがとうございます', romanization: 'arigatou gozaimasu', english: 'Thank you (polite)' },
  { native: 'どうもありがとうございます', romanization: 'doumo arigatou gozaimasu', english: 'Thank you very much' },
  { native: 'すみません', romanization: 'sumimasen', english: 'Excuse me / Sorry' },
  { native: 'ごめんなさい', romanization: 'gomen nasai', english: 'I\'m sorry' },
  { native: 'さようなら', romanization: 'sayounara', english: 'Goodbye' },
  { native: 'じゃあね', romanization: 'jaa ne', english: 'See you (casual)' },
  { native: 'また会いましょう', romanization: 'mata aimashou', english: 'See you again' },
  { native: 'はい', romanization: 'hai', english: 'Yes' },
  { native: 'いいえ', romanization: 'iie', english: 'No' },
  { native: 'お願いします', romanization: 'onegaishimasu', english: 'Please' },
  { native: 'どういたしまして', romanization: 'douitashimashite', english: 'You\'re welcome' },
  { native: 'おやすみなさい', romanization: 'oyasuminasai', english: 'Good night' },
  { native: 'はじめまして', romanization: 'hajimemashite', english: 'Nice to meet you' },
  { native: 'よろしくお願いします', romanization: 'yoroshiku onegaishimasu', english: 'Please treat me well' },
  { native: 'お元気ですか', romanization: 'ogenki desu ka', english: 'How are you?' },

  // Communication
  { native: '英語を話せますか', romanization: 'eigo wo hanasemasu ka', english: 'Do you speak English?' },
  { native: '日本語がわかりません', romanization: 'nihongo ga wakarimasen', english: 'I don\'t understand Japanese' },
  { native: 'わかりました', romanization: 'wakarimashita', english: 'I understand' },
  { native: 'わかりません', romanization: 'wakarimasen', english: 'I don\'t understand' },
  { native: 'もう一度お願いします', romanization: 'mou ichido onegaishimasu', english: 'One more time please' },
  { native: 'ゆっくり話してください', romanization: 'yukkuri hanashite kudasai', english: 'Please speak slowly' },
  { native: '書いてください', romanization: 'kaite kudasai', english: 'Please write it down' },
  { native: 'これは何ですか', romanization: 'kore wa nan desu ka', english: 'What is this?' },
  { native: 'どういう意味ですか', romanization: 'dou iu imi desu ka', english: 'What does it mean?' },

  // Directions (first 6 items)
  { native: 'トイレはどこですか', romanization: 'toire wa doko desu ka', english: 'Where is the bathroom?' },
  { native: 'ここはどこですか', romanization: 'koko wa doko desu ka', english: 'Where am I?' },
  { native: 'どうやって行きますか', romanization: 'douyatte ikimasu ka', english: 'How do I get there?' },
  { native: '歩いて行けますか', romanization: 'aruite ikemasu ka', english: 'Can I walk there?' },
  { native: '近いですか', romanization: 'chikai desu ka', english: 'Is it close?' },
  { native: '遠いですか', romanization: 'tooi desu ka', english: 'Is it far?' },

  // Emergency/Medical
  { native: '助けて', romanization: 'tasukete', english: 'Help!' },
  { native: '警察を呼んでください', romanization: 'keisatsu wo yonde kudasai', english: 'Call the police' },
  { native: '救急車を呼んでください', romanization: 'kyuukyuusha wo yonde kudasai', english: 'Call an ambulance' },
  { native: '病院はどこですか', romanization: 'byouin wa doko desu ka', english: 'Where is the hospital?' },
  { native: '薬局はどこですか', romanization: 'yakkyoku wa doko desu ka', english: 'Where is the pharmacy?' },
  { native: '気分が悪いです', romanization: 'kibun ga warui desu', english: 'I feel sick' },
  { native: '頭が痛いです', romanization: 'atama ga itai desu', english: 'I have a headache' },
  { native: 'お腹が痛いです', romanization: 'onaka ga itai desu', english: 'I have a stomachache' },
  { native: '熱があります', romanization: 'netsu ga arimasu', english: 'I have a fever' },
  { native: '薬はありますか', romanization: 'kusuri wa arimasu ka', english: 'Do you have medicine?' },
  { native: '保険証を持っています', romanization: 'hokenshou wo motte imasu', english: 'I have insurance' },
  { native: '英語を話せる医者はいますか', romanization: 'eigo wo hanaseru isha wa imasu ka', english: 'Is there an English-speaking doctor?' },

  // Numbers & Time
  { native: '今何時ですか', romanization: 'ima nanji desu ka', english: 'What time is it now?' },
  { native: '何時に開きますか', romanization: 'nanji ni akimasu ka', english: 'What time does it open?' },
  { native: '何時に閉まりますか', romanization: 'nanji ni shimarimasu ka', english: 'What time does it close?' },
  { native: 'どのくらいかかりますか', romanization: 'dono kurai kakarimasu ka', english: 'How long does it take?' },
  { native: '今日', romanization: 'kyou', english: 'Today' },
  { native: '明日', romanization: 'ashita', english: 'Tomorrow' },
  { native: '昨日', romanization: 'kinou', english: 'Yesterday' },

  // Common Requests
  { native: 'ちょっと待ってください', romanization: 'chotto matte kudasai', english: 'Please wait a moment' },
  { native: 'もう一回言ってください', romanization: 'mou ikkai itte kudasai', english: 'Please say it again' },
  { native: '見せてください', romanization: 'misete kudasai', english: 'Please show me' },
  { native: '教えてください', romanization: 'oshiete kudasai', english: 'Please tell me' },
  { native: '手伝ってください', romanization: 'tetsudatte kudasai', english: 'Please help me' },
  { native: '大丈夫です', romanization: 'daijoubu desu', english: 'It\'s okay / I\'m fine' },
  { native: '結構です', romanization: 'kekkou desu', english: 'No thank you' },
];

const highSchoolPhrases = [
  // Transportation - Train/Subway
  { native: '駅はどこですか', romanization: 'eki wa doko desu ka', english: 'Where is the station?' },
  { native: '切符売り場はどこですか', romanization: 'kippu uriba wa doko desu ka', english: 'Where is the ticket counter?' },
  { native: '何番線ですか', romanization: 'nanban sen desu ka', english: 'Which platform?' },
  { native: '新宿まで一枚ください', romanization: 'shinjuku made ichimai kudasai', english: 'One ticket to Shinjuku please' },
  { native: 'この電車は東京に行きますか', romanization: 'kono densha wa toukyou ni ikimasu ka', english: 'Does this train go to Tokyo?' },
  { native: '次の駅は何ですか', romanization: 'tsugi no eki wa nan desu ka', english: 'What is the next station?' },
  { native: '乗り換えが必要ですか', romanization: 'norikae ga hitsuyou desu ka', english: 'Do I need to transfer?' },
  { native: 'どこで降りますか', romanization: 'doko de orimasu ka', english: 'Where should I get off?' },
  { native: 'ICカードはありますか', romanization: 'ai shii kaado wa arimasu ka', english: 'Do you have an IC card?' },
  { native: 'スイカをチャージしたいです', romanization: 'suika wo chaaji shitai desu', english: 'I want to charge my Suica' },

  // Transportation - Taxi
  { native: 'タクシー乗り場はどこですか', romanization: 'takushii noriba wa doko desu ka', english: 'Where is the taxi stand?' },
  { native: 'ここまでお願いします', romanization: 'koko made onegaishimasu', english: 'To here please' },
  { native: 'この住所までお願いします', romanization: 'kono juusho made onegaishimasu', english: 'To this address please' },
  { native: 'ここで止めてください', romanization: 'koko de tomete kudasai', english: 'Please stop here' },
  { native: 'いくらかかりますか', romanization: 'ikura kakarimasu ka', english: 'How much will it cost?' },
  { native: 'レシートをください', romanization: 'reshiito wo kudasai', english: 'Receipt please' },

  // Transportation - Bus
  { native: 'バス停はどこですか', romanization: 'basutei wa doko desu ka', english: 'Where is the bus stop?' },
  { native: 'このバスは渋谷に行きますか', romanization: 'kono basu wa shibuya ni ikimasu ka', english: 'Does this bus go to Shibuya?' },
  { native: '運賃はいくらですか', romanization: 'unchin wa ikura desu ka', english: 'How much is the fare?' },
  { native: '次のバスは何時ですか', romanization: 'tsugi no basu wa nanji desu ka', english: 'When is the next bus?' },

  // Restaurant/Food
  { native: 'いただきます', romanization: 'itadakimasu', english: 'Let\'s eat (before meal)' },
  { native: 'ごちそうさまでした', romanization: 'gochisousama deshita', english: 'Thank you for the meal' },
  { native: '予約していません', romanization: 'yoyaku shite imasen', english: 'I don\'t have a reservation' },
  { native: '二人です', romanization: 'futari desu', english: 'Two people' },
  { native: 'メニューをください', romanization: 'menyuu wo kudasai', english: 'Menu please' },
  { native: '英語のメニューはありますか', romanization: 'eigo no menyuu wa arimasu ka', english: 'Do you have an English menu?' },
  { native: '写真のメニューはありますか', romanization: 'shashin no menyuu wa arimasu ka', english: 'Do you have a picture menu?' },
  { native: 'おすすめは何ですか', romanization: 'osusume wa nan desu ka', english: 'What do you recommend?' },
  { native: 'これをください', romanization: 'kore wo kudasai', english: 'This please' },
  { native: '水をください', romanization: 'mizu wo kudasai', english: 'Water please' },
  { native: 'お茶をください', romanization: 'ocha wo kudasai', english: 'Tea please' },
  { native: 'ビールをください', romanization: 'biiru wo kudasai', english: 'Beer please' },
  { native: '美味しい', romanization: 'oishii', english: 'Delicious' },
  { native: 'お腹がすきました', romanization: 'onaka ga sukimashita', english: 'I\'m hungry' },
  { native: 'お会計お願いします', romanization: 'okaikei onegaishimasu', english: 'Check please' },
  { native: 'クレジットカードは使えますか', romanization: 'kurejitto kaado wa tsukaemasu ka', english: 'Can I use credit card?' },
  { native: '別々に払います', romanization: 'betsubetsu ni haraimasu', english: 'We\'ll pay separately' },
  { native: '辛くしないでください', romanization: 'karaku shinaide kudasai', english: 'Not spicy please' },
  { native: 'アレルギーがあります', romanization: 'arerugii ga arimasu', english: 'I have allergies' },
  { native: 'ベジタリアンです', romanization: 'bejitarian desu', english: 'I\'m vegetarian' },
  { native: '豚肉は食べられません', romanization: 'butaniku wa taberaremasen', english: 'I can\'t eat pork' },

  // Shopping
  { native: 'いくらですか', romanization: 'ikura desu ka', english: 'How much is it?' },
  { native: 'これをください', romanization: 'kore wo kudasai', english: 'I\'ll take this please' },
  { native: '見てるだけです', romanization: 'miteru dake desu', english: 'Just looking' },
  { native: '試着できますか', romanization: 'shichaku dekimasu ka', english: 'Can I try it on?' },
  { native: '試着室はどこですか', romanization: 'shichakushitsu wa doko desu ka', english: 'Where is the fitting room?' },
  { native: 'もっと大きいサイズはありますか', romanization: 'motto ookii saizu wa arimasu ka', english: 'Do you have a larger size?' },
  { native: 'もっと小さいサイズはありますか', romanization: 'motto chiisai saizu wa arimasu ka', english: 'Do you have a smaller size?' },
  { native: '他の色はありますか', romanization: 'hoka no iro wa arimasu ka', english: 'Do you have other colors?' },
  { native: '安くなりますか', romanization: 'yasuku narimasu ka', english: 'Can you make it cheaper?' },
  { native: '免税できますか', romanization: 'menzei dekimasu ka', english: 'Can I get tax free?' },
  { native: '袋をください', romanization: 'fukuro wo kudasai', english: 'Bag please' },
  { native: 'プレゼント用に包んでください', romanization: 'purezento you ni tsutsunde kudasai', english: 'Gift wrap please' },
  { native: '返品できますか', romanization: 'henpin dekimasu ka', english: 'Can I return this?' },

  // Tourist Attractions
  { native: '入場料はいくらですか', romanization: 'nyuujouryou wa ikura desu ka', english: 'How much is admission?' },
  { native: '何時までですか', romanization: 'nanji made desu ka', english: 'Until what time?' },
  { native: '写真を撮ってもいいですか', romanization: 'shashin wo totte mo ii desu ka', english: 'Can I take photos?' },
  { native: '写真を撮ってください', romanization: 'shashin wo totte kudasai', english: 'Please take my photo' },
  { native: 'パンフレットをください', romanization: 'panfuretto wo kudasai', english: 'Pamphlet please' },
  { native: 'オーディオガイドはありますか', romanization: 'oodio gaido wa arimasu ka', english: 'Do you have audio guide?' },
  { native: 'ツアーはありますか', romanization: 'tsuaa wa arimasu ka', english: 'Are there tours?' },

  // Directions (remaining 5 items)
  { native: 'まっすぐ行ってください', romanization: 'massugu itte kudasai', english: 'Go straight' },
  { native: '右に曲がってください', romanization: 'migi ni magatte kudasai', english: 'Turn right' },
  { native: '左に曲がってください', romanization: 'hidari ni magatte kudasai', english: 'Turn left' },
  { native: '地図を描いてください', romanization: 'chizu wo kaite kudasai', english: 'Please draw a map' },
  { native: '道に迷いました', romanization: 'michi ni mayoimashita', english: 'I\'m lost' },
];

const collegePhrases = [
  // Business & Professional
  { native: '会議の議題を確認させていただきます', romanization: 'kaigi no gidai wo kakunin sasete itadakimasu', english: 'Let me confirm the meeting agenda' },
  { native: 'この件について検討させてください', romanization: 'kono ken ni tsuite kentou sasete kudasai', english: 'Please let me consider this matter' },
  { native: '提案書を提出いたします', romanization: 'teian sho wo teishutsu itashimasu', english: 'I will submit the proposal' },
  { native: '締め切りに間に合いますか', romanization: 'shimekiri ni ma ni aimasu ka', english: 'Will we make the deadline?' },
  { native: '予算の承認をお願いします', romanization: 'yosan no shounin wo onegai shimasu', english: 'Please approve the budget' },
  { native: '先方との交渉が難航しています', romanization: 'senpou to no koushou ga nankou shite imasu', english: 'Negotiations with the other party are difficult' },
  { native: '契約書の内容を確認してください', romanization: 'keiyakusho no naiyou wo kakunin shite kudasai', english: 'Please review the contract details' },
  { native: '来月の売上目標を達成しましょう', romanization: 'raigetsu no uriage mokuhyou wo tassei shimashou', english: "Let's achieve next month's sales target" },
  { native: '責任を持って対応いたします', romanization: 'sekinin wo motte taiou itashimasu', english: 'I will handle it responsibly' },
  { native: 'この問題の根本的な原因は何ですか', romanization: 'kono mondai no konponteki na genin wa nan desu ka', english: 'What is the root cause of this problem?' },
  { native: '市場調査の結果を報告します', romanization: 'shijou chousa no kekka wo houkoku shimasu', english: "I'll report the market research results" },
  { native: '競合他社と差別化する必要があります', romanization: 'kyougou tasha to sabetsuka suru hitsuyou ga arimasu', english: 'We need to differentiate from competitors' },

  // Academic & Intellectual
  { native: 'この論文の要旨を説明してください', romanization: 'kono ronbun no youshi wo setsumei shite kudasai', english: 'Please explain the thesis of this paper' },
  { native: '仮説を立てて検証しましょう', romanization: 'kasetsu wo tatete kenshou shimashou', english: "Let's form a hypothesis and verify it" },
  { native: '客観的なデータに基づいて判断すべきです', romanization: 'kyakkanteki na deeta ni motozuite handan subeki desu', english: 'We should judge based on objective data' },
  { native: 'この理論にはいくつかの矛盾があります', romanization: 'kono riron ni wa ikutsuka no mujun ga arimasu', english: 'There are several contradictions in this theory' },
  { native: '異なる視点から考えてみましょう', romanization: 'kotonaru shiten kara kangaete mimashou', english: "Let's consider it from a different perspective" },
  { native: '因果関係と相関関係を区別すべきです', romanization: 'inga kankei to soukan kankei wo kubetsu subeki desu', english: 'We should distinguish causation from correlation' },
  { native: '批判的思考が重要です', romanization: 'hihanteki shikou ga juuyou desu', english: 'Critical thinking is important' },
  { native: '先行研究を参照してください', romanization: 'senkou kenkyuu wo sanshou shite kudasai', english: 'Please refer to prior research' },
  { native: 'その主張を裏付ける証拠はありますか', romanization: 'sono shuchou wo urazukeru shouko wa arimasu ka', english: 'Is there evidence to support that claim?' },
  { native: '結論を導き出すにはまだ早いです', romanization: 'ketsuron wo michibiki dasu ni wa mada hayai desu', english: "It's too early to draw conclusions" },
  { native: 'この分野の最新の動向を把握しています', romanization: 'kono bunya no saishin no doukou wo haaku shite imasu', english: "I'm aware of the latest trends in this field" },
  { native: '抽象的な概念を具体的に説明してください', romanization: 'chuushouteki na gainen wo gutaiteki ni setsumei shite kudasai', english: 'Please explain the abstract concept concretely' },

  // Opinions & Debate
  { native: '私はそうは思いません', romanization: 'watashi wa sou wa omoimasen', english: "I don't think so" },
  { native: 'それは一理ありますが', romanization: 'sore wa ichiri arimasu ga', english: 'That has a point, but...' },
  { native: '賛成です / 反対です', romanization: 'sansei desu / hantai desu', english: 'I agree / I disagree' },
  { native: 'メリットとデメリットを比較しましょう', romanization: 'meritto to demeritto wo hikaku shimashou', english: "Let's compare the pros and cons" },
  { native: '必ずしもそうとは限りません', romanization: 'kanarazu shimo sou to wa kagirimasen', english: "That's not necessarily the case" },
  { native: '倫理的な観点から問題があります', romanization: 'rinriteki na kanten kara mondai ga arimasu', english: 'There are ethical concerns' },
  { native: '持続可能な解決策を見つけるべきです', romanization: 'jizoku kanou na kaiketsusaku wo mitsukeru beki desu', english: 'We should find a sustainable solution' },
  { native: '社会的な影響を考慮する必要があります', romanization: 'shakaiteki na eikyou wo kouryo suru hitsuyou ga arimasu', english: 'We need to consider the social impact' },
  { native: '多様性を尊重することが大切です', romanization: 'tayousei wo sonchou suru koto ga taisetsu desu', english: "It's important to respect diversity" },
  { native: '偏見なく公平に判断してください', romanization: 'henken naku kouhei ni handan shite kudasai', english: 'Please judge fairly without prejudice' },
  { native: 'その問題は複雑で一概には言えません', romanization: 'sono mondai wa fukuzatsu de ichigai ni wa iemasen', english: "The issue is complex and can't be generalized" },
  { native: '長期的な視野で物事を考えるべきです', romanization: 'choukiteki na shiya de monogoto wo kangaeru beki desu', english: 'We should think about things with a long-term perspective' },

  // Society & Current Events
  { native: '環境問題は深刻化しています', romanization: 'kankyou mondai wa shinkokuka shite imasu', english: 'Environmental issues are becoming more serious' },
  { native: '少子高齢化が社会に大きな影響を与えています', romanization: 'shoushi koureika ga shakai ni ookina eikyou wo ataete imasu', english: 'The declining birthrate and aging population greatly impact society' },
  { native: '格差社会の問題について議論しましょう', romanization: 'kakusa shakai no mondai ni tsuite giron shimashou', english: "Let's discuss the problem of social inequality" },
  { native: 'テクノロジーの発展は我々の生活を変えました', romanization: 'tekunorojii no hatten wa wareware no seikatsu wo kaemashita', english: 'Technological development has changed our lives' },
  { native: '国際協力がますます重要になっています', romanization: 'kokusai kyouryoku ga masumasu juuyou ni natte imasu', english: 'International cooperation is becoming increasingly important' },
  { native: '民主主義の価値を守る必要があります', romanization: 'minshushugi no kachi wo mamoru hitsuyou ga arimasu', english: 'We need to protect the values of democracy' },
  { native: '経済成長と環境保護の両立は可能ですか', romanization: 'keizai seichou to kankyou hogo no ryouritsu wa kanou desu ka', english: 'Is it possible to balance economic growth and environmental protection?' },
  { native: '情報リテラシーを高めることが重要です', romanization: 'jouhou riterashii wo takameru koto ga juuyou desu', english: "It's important to improve information literacy" },
  { native: '人工知能は社会をどう変えるでしょうか', romanization: 'jinkou chinou wa shakai wo dou kaeru deshou ka', english: 'How will artificial intelligence change society?' },
  { native: 'グローバル化の功罪について考えましょう', romanization: 'guroobaruka no kouzai ni tsuite kangaemashou', english: "Let's think about the merits and demerits of globalization" },

  // Formal Expressions & Keigo
  { native: 'お忙しいところ恐れ入りますが', romanization: 'oisogashii tokoro osore irimasu ga', english: "I'm sorry to bother you when you're busy" },
  { native: 'ご検討いただければ幸いです', romanization: 'gokentou itadakereba saiwai desu', english: 'I would be grateful if you could consider it' },
  { native: 'ご迷惑をおかけして申し訳ございません', romanization: 'gomeiwaku wo okake shite moushiwake gozaimasen', english: 'I sincerely apologize for the inconvenience' },
  { native: 'お手数ですがよろしくお願いいたします', romanization: 'otesuu desu ga yoroshiku onegai itashimasu', english: "I'm sorry for the trouble, but thank you in advance" },
  { native: 'ご理解とご協力をお願い申し上げます', romanization: 'gorikai to gokyouryoku wo onegai moushiagemasu', english: 'I ask for your understanding and cooperation' },
  { native: '謹んでお詫び申し上げます', romanization: 'tsutsushinde owabi moushiagemasu', english: 'I humbly offer my apologies' },
  { native: 'お力添えいただきありがとうございます', romanization: 'ochikarazoe itadaki arigatou gozaimasu', english: 'Thank you for your support' },
  { native: 'ご多忙中恐縮ですが', romanization: 'gotabouchuu kyoushuku desu ga', english: "I'm sorry to impose during your busy schedule" },
  { native: 'ご指摘の通りでございます', romanization: 'goshiteki no toori de gozaimasu', english: 'It is exactly as you pointed out' },
  { native: '何卒よろしくお願い申し上げます', romanization: 'nanitozo yoroshiku onegai moushiagemasu', english: 'I humbly request your kind consideration' },

  // Emotions & Psychology
  { native: '彼の行動には失望しました', romanization: 'kare no koudou ni wa shitsubou shimashita', english: 'I was disappointed by his actions' },
  { native: 'その経験が彼女の人生観を変えました', romanization: 'sono keiken ga kanojo no jinseikan wo kaemashita', english: 'That experience changed her view of life' },
  { native: '自分の限界を認めることも大切です', romanization: 'jibun no genkai wo mitomeru koto mo taisetsu desu', english: "It's also important to acknowledge your own limits" },
  { native: '共感する能力は人間関係に不可欠です', romanization: 'kyoukan suru nouryoku wa ningen kankei ni fukaketsu desu', english: 'The ability to empathize is essential for relationships' },
  { native: '困難を乗り越えることで成長します', romanization: 'konnan wo norikoeru koto de seichou shimasu', english: 'We grow by overcoming difficulties' },
  { native: '自己実現のために努力し続けます', romanization: 'jiko jitsugen no tame ni doryoku shi tsuzukemasu', english: 'I will keep striving for self-actualization' },
  { native: '感情に流されず冷静に判断してください', romanization: 'kanjou ni nagasarezu reisei ni handan shite kudasai', english: 'Please judge calmly without being swayed by emotion' },
  { native: '人間の本質について考えさせられました', romanization: 'ningen no honshitsu ni tsuite kangaesaseraremashita', english: 'It made me think about human nature' },
];

const elementaryVocab = [
  // Numbers (first 10)
  { native: '一', romanization: 'ichi', english: 'one' },
  { native: '二', romanization: 'ni', english: 'two' },
  { native: '三', romanization: 'san', english: 'three' },
  { native: '四', romanization: 'yon/shi', english: 'four' },
  { native: '五', romanization: 'go', english: 'five' },
  { native: '六', romanization: 'roku', english: 'six' },
  { native: '七', romanization: 'nana/shichi', english: 'seven' },
  { native: '八', romanization: 'hachi', english: 'eight' },
  { native: '九', romanization: 'kyuu', english: 'nine' },
  { native: '十', romanization: 'juu', english: 'ten' },

  // Time (first 5)
  { native: '時間', romanization: 'jikan', english: 'time' },
  { native: '朝', romanization: 'asa', english: 'morning' },
  { native: '昼', romanization: 'hiru', english: 'noon/daytime' },
  { native: '夜', romanization: 'yoru', english: 'night' },
  { native: '今', romanization: 'ima', english: 'now' },

  // People
  { native: '人', romanization: 'hito', english: 'person' },
  { native: '友達', romanization: 'tomodachi', english: 'friend' },
  { native: '家族', romanization: 'kazoku', english: 'family' },
  { native: '母', romanization: 'haha', english: 'mother' },
  { native: '父', romanization: 'chichi', english: 'father' },
  { native: '子供', romanization: 'kodomo', english: 'child' },
  { native: '男', romanization: 'otoko', english: 'man' },
  { native: '女', romanization: 'onna', english: 'woman' },
  { native: '先生', romanization: 'sensei', english: 'teacher' },
  { native: '学生', romanization: 'gakusei', english: 'student' },

  // Colors
  { native: '赤', romanization: 'aka', english: 'red' },
  { native: '青', romanization: 'ao', english: 'blue' },
  { native: '黄色', romanization: 'kiiro', english: 'yellow' },
  { native: '緑', romanization: 'midori', english: 'green' },
  { native: '白', romanization: 'shiro', english: 'white' },
  { native: '黒', romanization: 'kuro', english: 'black' },

  // Directions
  { native: '右', romanization: 'migi', english: 'right' },
  { native: '左', romanization: 'hidari', english: 'left' },
  { native: '前', romanization: 'mae', english: 'front' },
  { native: '後ろ', romanization: 'ushiro', english: 'back/behind' },
  { native: '上', romanization: 'ue', english: 'up/above' },
  { native: '下', romanization: 'shita', english: 'down/below' },
  { native: '中', romanization: 'naka', english: 'inside' },
  { native: '外', romanization: 'soto', english: 'outside' },
  { native: '近い', romanization: 'chikai', english: 'near' },
  { native: '遠い', romanization: 'tooi', english: 'far' },
];

const highSchoolVocab = [
  // Places
  { native: '駅', romanization: 'eki', english: 'station' },
  { native: '空港', romanization: 'kuukou', english: 'airport' },
  { native: 'ホテル', romanization: 'hoteru', english: 'hotel' },
  { native: 'レストラン', romanization: 'resutoran', english: 'restaurant' },
  { native: '病院', romanization: 'byouin', english: 'hospital' },
  { native: '銀行', romanization: 'ginkou', english: 'bank' },
  { native: '郵便局', romanization: 'yuubinkyoku', english: 'post office' },
  { native: '店', romanization: 'mise', english: 'shop/store' },
  { native: 'コンビニ', romanization: 'konbini', english: 'convenience store' },
  { native: '本屋', romanization: 'honya', english: 'bookstore' },
  { native: '薬局', romanization: 'yakkyoku', english: 'pharmacy' },
  { native: '公園', romanization: 'kouen', english: 'park' },
  { native: '寺', romanization: 'tera', english: 'temple' },
  { native: '神社', romanization: 'jinja', english: 'shrine' },
  { native: '城', romanization: 'shiro', english: 'castle' },
  { native: '博物館', romanization: 'hakubutsukan', english: 'museum' },
  { native: '美術館', romanization: 'bijutsukan', english: 'art museum' },
  { native: '図書館', romanization: 'toshokan', english: 'library' },

  // Transportation
  { native: '電車', romanization: 'densha', english: 'train' },
  { native: 'バス', romanization: 'basu', english: 'bus' },
  { native: 'タクシー', romanization: 'takushii', english: 'taxi' },
  { native: '地下鉄', romanization: 'chikatetsu', english: 'subway' },
  { native: '新幹線', romanization: 'shinkansen', english: 'bullet train' },
  { native: '飛行機', romanization: 'hikouki', english: 'airplane' },
  { native: '自転車', romanization: 'jitensha', english: 'bicycle' },
  { native: '車', romanization: 'kuruma', english: 'car' },
  { native: '切符', romanization: 'kippu', english: 'ticket' },

  // Food & Drink
  { native: '水', romanization: 'mizu', english: 'water' },
  { native: 'お茶', romanization: 'ocha', english: 'tea' },
  { native: 'コーヒー', romanization: 'koohii', english: 'coffee' },
  { native: 'ビール', romanization: 'biiru', english: 'beer' },
  { native: 'ご飯', romanization: 'gohan', english: 'rice/meal' },
  { native: 'パン', romanization: 'pan', english: 'bread' },
  { native: '肉', romanization: 'niku', english: 'meat' },
  { native: '魚', romanization: 'sakana', english: 'fish' },
  { native: '野菜', romanization: 'yasai', english: 'vegetables' },
  { native: '果物', romanization: 'kudamono', english: 'fruit' },
  { native: '卵', romanization: 'tamago', english: 'egg' },
  { native: '牛乳', romanization: 'gyuunyuu', english: 'milk' },
  { native: '砂糖', romanization: 'satou', english: 'sugar' },
  { native: '塩', romanization: 'shio', english: 'salt' },
  { native: '醤油', romanization: 'shouyu', english: 'soy sauce' },

  // Common Objects
  { native: '本', romanization: 'hon', english: 'book' },
  { native: '新聞', romanization: 'shinbun', english: 'newspaper' },
  { native: '雑誌', romanization: 'zasshi', english: 'magazine' },
  { native: '携帯', romanization: 'keitai', english: 'cell phone' },
  { native: 'カメラ', romanization: 'kamera', english: 'camera' },
  { native: '傘', romanization: 'kasa', english: 'umbrella' },
  { native: '鞄', romanization: 'kaban', english: 'bag' },
  { native: '財布', romanization: 'saifu', english: 'wallet' },
  { native: 'お金', romanization: 'okane', english: 'money' },
  { native: 'チケット', romanization: 'chiketto', english: 'ticket' },
  { native: '地図', romanization: 'chizu', english: 'map' },
  { native: '鍵', romanization: 'kagi', english: 'key' },
];

const collegeVocab = [
  // Abstract Concepts
  { native: '正義', romanization: 'seigi', english: 'justice' },
  { native: '自由', romanization: 'jiyuu', english: 'freedom/liberty' },
  { native: '平等', romanization: 'byoudou', english: 'equality' },
  { native: '責任', romanization: 'sekinin', english: 'responsibility' },
  { native: '権利', romanization: 'kenri', english: 'rights' },
  { native: '義務', romanization: 'gimu', english: 'duty/obligation' },
  { native: '道徳', romanization: 'doutoku', english: 'morality' },
  { native: '倫理', romanization: 'rinri', english: 'ethics' },
  { native: '哲学', romanization: 'tetsugaku', english: 'philosophy' },
  { native: '意識', romanization: 'ishiki', english: 'consciousness/awareness' },
  { native: '存在', romanization: 'sonzai', english: 'existence' },
  { native: '本質', romanization: 'honshitsu', english: 'essence/true nature' },
  { native: '矛盾', romanization: 'mujun', english: 'contradiction' },
  { native: '概念', romanization: 'gainen', english: 'concept' },
  { native: '価値観', romanization: 'kachikan', english: 'values/worldview' },

  // Government & Society
  { native: '政治', romanization: 'seiji', english: 'politics' },
  { native: '経済', romanization: 'keizai', english: 'economy' },
  { native: '民主主義', romanization: 'minshushugi', english: 'democracy' },
  { native: '資本主義', romanization: 'shihonshugi', english: 'capitalism' },
  { native: '選挙', romanization: 'senkyo', english: 'election' },
  { native: '法律', romanization: 'houritsu', english: 'law' },
  { native: '憲法', romanization: 'kenpou', english: 'constitution' },
  { native: '税金', romanization: 'zeikin', english: 'taxes' },
  { native: '外交', romanization: 'gaikou', english: 'diplomacy' },
  { native: '国際関係', romanization: 'kokusai kankei', english: 'international relations' },
  { native: '世論', romanization: 'yoron', english: 'public opinion' },
  { native: '格差', romanization: 'kakusa', english: 'disparity/inequality' },

  // Academic & Science
  { native: '研究', romanization: 'kenkyuu', english: 'research' },
  { native: '実験', romanization: 'jikken', english: 'experiment' },
  { native: '理論', romanization: 'riron', english: 'theory' },
  { native: '仮説', romanization: 'kasetsu', english: 'hypothesis' },
  { native: '証拠', romanization: 'shouko', english: 'evidence' },
  { native: '分析', romanization: 'bunseki', english: 'analysis' },
  { native: '統計', romanization: 'toukei', english: 'statistics' },
  { native: '論文', romanization: 'ronbun', english: 'thesis/paper' },
  { native: '人工知能', romanization: 'jinkou chinou', english: 'artificial intelligence' },
  { native: '環境', romanization: 'kankyou', english: 'environment' },
  { native: '遺伝子', romanization: 'idenshi', english: 'gene' },
  { native: '進化', romanization: 'shinka', english: 'evolution' },

  // Business & Economics
  { native: '利益', romanization: 'rieki', english: 'profit' },
  { native: '投資', romanization: 'toushi', english: 'investment' },
  { native: '株式', romanization: 'kabushiki', english: 'stocks/shares' },
  { native: '競争', romanization: 'kyousou', english: 'competition' },
  { native: '起業', romanization: 'kigyou', english: 'entrepreneurship' },
  { native: '交渉', romanization: 'koushou', english: 'negotiation' },
  { native: '契約', romanization: 'keiyaku', english: 'contract' },
  { native: '戦略', romanization: 'senryaku', english: 'strategy' },
  { native: '生産性', romanization: 'seisansei', english: 'productivity' },
  { native: '市場', romanization: 'shijou', english: 'market' },

  // Emotions & Psychology
  { native: '共感', romanization: 'kyoukan', english: 'empathy' },
  { native: '偏見', romanization: 'henken', english: 'prejudice/bias' },
  { native: '不安', romanization: 'fuan', english: 'anxiety' },
  { native: '孤独', romanization: 'kodoku', english: 'loneliness/solitude' },
  { native: '葛藤', romanization: 'kattou', english: 'inner conflict' },
  { native: '達成感', romanization: 'tasseikan', english: 'sense of accomplishment' },
  { native: '劣等感', romanization: 'rettoukan', english: 'inferiority complex' },
  { native: '自尊心', romanization: 'jisonshin', english: 'self-esteem' },
  { native: '動機', romanization: 'douki', english: 'motivation/motive' },
  { native: '認知', romanization: 'ninchi', english: 'cognition' },

  // Advanced Adjectives & Adverbs
  { native: '複雑な', romanization: 'fukuzatsu na', english: 'complex' },
  { native: '曖昧な', romanization: 'aimai na', english: 'ambiguous' },
  { native: '抽象的な', romanization: 'chuushouteki na', english: 'abstract' },
  { native: '具体的な', romanization: 'gutaiteki na', english: 'concrete/specific' },
  { native: '客観的な', romanization: 'kyakkanteki na', english: 'objective' },
  { native: '主観的な', romanization: 'shukanteki na', english: 'subjective' },
  { native: '本質的な', romanization: 'honshitsuteki na', english: 'essential/fundamental' },
  { native: '持続可能な', romanization: 'jizoku kanou na', english: 'sustainable' },
  { native: '画期的な', romanization: 'kakkiteki na', english: 'groundbreaking' },
  { native: '普遍的な', romanization: 'fuhenteki na', english: 'universal' },

  // Numbers (last 3)
  { native: '百', romanization: 'hyaku', english: 'hundred' },
  { native: '千', romanization: 'sen', english: 'thousand' },
  { native: '万', romanization: 'man', english: 'ten thousand' },

  // Time (last 3)
  { native: '週', romanization: 'shuu', english: 'week' },
  { native: '月', romanization: 'tsuki/getsu', english: 'month/moon' },
  { native: '年', romanization: 'toshi/nen', english: 'year' },

  // Adjectives
  { native: '大きい', romanization: 'ookii', english: 'big' },
  { native: '小さい', romanization: 'chiisai', english: 'small' },
  { native: '高い', romanization: 'takai', english: 'expensive/tall' },
  { native: '安い', romanization: 'yasui', english: 'cheap' },
  { native: '新しい', romanization: 'atarashii', english: 'new' },
  { native: '古い', romanization: 'furui', english: 'old' },
  { native: '良い', romanization: 'yoi/ii', english: 'good' },
  { native: '悪い', romanization: 'warui', english: 'bad' },
  { native: '暑い', romanization: 'atsui', english: 'hot (weather)' },
  { native: '寒い', romanization: 'samui', english: 'cold' },
  { native: '熱い', romanization: 'atsui', english: 'hot (temperature)' },
  { native: '冷たい', romanization: 'tsumetai', english: 'cold (touch)' },
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
      renderMode: 'grid',
      phonetic: true,
      gridRows: organizeKanaIntoRows,
      levels: { elementary: hiragana }
    },
    {
      id: 'katakana',
      name: 'Katakana',
      renderMode: 'grid',
      phonetic: true,
      gridRows: organizeKanaIntoRows,
      levels: { elementary: katakana }
    },
    {
      id: 'phrases',
      name: 'Phrases',
      renderMode: 'list',
      levels: {
        elementary: elementaryPhrases,
        high_school: highSchoolPhrases,
        college: collegePhrases
      }
    },
    {
      id: 'vocabulary',
      name: 'Vocabulary',
      renderMode: 'list',
      levels: {
        elementary: elementaryVocab,
        high_school: highSchoolVocab,
        college: collegeVocab
      }
    }
  ]
};

export default japanese;
