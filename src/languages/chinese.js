const tones = [
  { native: '妈', romanization: 'mā', english: 'mother (1st tone)', type: 'tone' },
  { native: '麻', romanization: 'má', english: 'hemp (2nd tone)', type: 'tone' },
  { native: '马', romanization: 'mǎ', english: 'horse (3rd tone)', type: 'tone' },
  { native: '骂', romanization: 'mà', english: 'scold (4th tone)', type: 'tone' },
  { native: '吗', romanization: 'ma', english: 'question particle (neutral)', type: 'tone' },
  { native: '八', romanization: 'bā', english: 'eight (1st tone)', type: 'tone' },
  { native: '拔', romanization: 'bá', english: 'pull out (2nd tone)', type: 'tone' },
  { native: '把', romanization: 'bǎ', english: 'hold (3rd tone)', type: 'tone' },
  { native: '爸', romanization: 'bà', english: 'father (4th tone)', type: 'tone' },
  { native: '吧', romanization: 'ba', english: 'suggestion particle (neutral)', type: 'tone' },
  { native: '他', romanization: 'tā', english: 'he (1st tone)', type: 'tone' },
  { native: '她', romanization: 'tā', english: 'she (1st tone)', type: 'tone' },
  { native: '大', romanization: 'dà', english: 'big (4th tone)', type: 'tone' },
  { native: '打', romanization: 'dǎ', english: 'hit (3rd tone)', type: 'tone' },
  { native: '飞', romanization: 'fēi', english: 'fly (1st tone)', type: 'tone' },
  { native: '肥', romanization: 'féi', english: 'fat (2nd tone)', type: 'tone' },
  { native: '非', romanization: 'fēi', english: 'not (1st tone)', type: 'tone' },
  { native: '费', romanization: 'fèi', english: 'expense (4th tone)', type: 'tone' },
  { native: '书', romanization: 'shū', english: 'book (1st tone)', type: 'tone' },
  { native: '熟', romanization: 'shú', english: 'ripe (2nd tone)', type: 'tone' },
  { native: '鼠', romanization: 'shǔ', english: 'rat (3rd tone)', type: 'tone' },
  { native: '树', romanization: 'shù', english: 'tree (4th tone)', type: 'tone' },
  { native: '高', romanization: 'gāo', english: 'tall (1st tone)', type: 'tone' },
  { native: '搞', romanization: 'gǎo', english: 'do (3rd tone)', type: 'tone' },
  { native: '告', romanization: 'gào', english: 'tell (4th tone)', type: 'tone' },
  { native: '花', romanization: 'huā', english: 'flower (1st tone)', type: 'tone' },
  { native: '华', romanization: 'huá', english: 'magnificent (2nd tone)', type: 'tone' },
  { native: '画', romanization: 'huà', english: 'painting (4th tone)', type: 'tone' },
  { native: '话', romanization: 'huà', english: 'speech (4th tone)', type: 'tone' },
  { native: '猪', romanization: 'zhū', english: 'pig (1st tone)', type: 'tone' },
  { native: '竹', romanization: 'zhú', english: 'bamboo (2nd tone)', type: 'tone' },
  { native: '主', romanization: 'zhǔ', english: 'host (3rd tone)', type: 'tone' },
  { native: '住', romanization: 'zhù', english: 'live (4th tone)', type: 'tone' },
  { native: '猫', romanization: 'māo', english: 'cat (1st tone)', type: 'tone' },
  { native: '毛', romanization: 'máo', english: 'hair (2nd tone)', type: 'tone' },
  { native: '帽', romanization: 'mào', english: 'hat (4th tone)', type: 'tone' },
  { native: '吃', romanization: 'chī', english: 'eat (1st tone)', type: 'tone' },
  { native: '池', romanization: 'chí', english: 'pond (2nd tone)', type: 'tone' },
  { native: '尺', romanization: 'chǐ', english: 'ruler (3rd tone)', type: 'tone' },
  { native: '赤', romanization: 'chì', english: 'red (4th tone)', type: 'tone' },
];

const characters = [
  { native: '人', romanization: 'rén', english: 'person', type: 'character' },
  { native: '大', romanization: 'dà', english: 'big', type: 'character' },
  { native: '小', romanization: 'xiǎo', english: 'small', type: 'character' },
  { native: '中', romanization: 'zhōng', english: 'middle/China', type: 'character' },
  { native: '国', romanization: 'guó', english: 'country', type: 'character' },
  { native: '一', romanization: 'yī', english: 'one', type: 'character' },
  { native: '二', romanization: 'èr', english: 'two', type: 'character' },
  { native: '三', romanization: 'sān', english: 'three', type: 'character' },
  { native: '四', romanization: 'sì', english: 'four', type: 'character' },
  { native: '五', romanization: 'wǔ', english: 'five', type: 'character' },
  { native: '六', romanization: 'liù', english: 'six', type: 'character' },
  { native: '七', romanization: 'qī', english: 'seven', type: 'character' },
  { native: '八', romanization: 'bā', english: 'eight', type: 'character' },
  { native: '九', romanization: 'jiǔ', english: 'nine', type: 'character' },
  { native: '十', romanization: 'shí', english: 'ten', type: 'character' },
  { native: '日', romanization: 'rì', english: 'sun/day', type: 'character' },
  { native: '月', romanization: 'yuè', english: 'moon/month', type: 'character' },
  { native: '水', romanization: 'shuǐ', english: 'water', type: 'character' },
  { native: '火', romanization: 'huǒ', english: 'fire', type: 'character' },
  { native: '山', romanization: 'shān', english: 'mountain', type: 'character' },
  { native: '木', romanization: 'mù', english: 'wood/tree', type: 'character' },
  { native: '天', romanization: 'tiān', english: 'sky/day', type: 'character' },
  { native: '地', romanization: 'dì', english: 'earth/ground', type: 'character' },
  { native: '上', romanization: 'shàng', english: 'up/above', type: 'character' },
  { native: '下', romanization: 'xià', english: 'down/below', type: 'character' },
  { native: '左', romanization: 'zuǒ', english: 'left', type: 'character' },
  { native: '右', romanization: 'yòu', english: 'right', type: 'character' },
  { native: '男', romanization: 'nán', english: 'male', type: 'character' },
  { native: '女', romanization: 'nǚ', english: 'female', type: 'character' },
  { native: '子', romanization: 'zǐ', english: 'child', type: 'character' },
  { native: '口', romanization: 'kǒu', english: 'mouth', type: 'character' },
  { native: '手', romanization: 'shǒu', english: 'hand', type: 'character' },
  { native: '目', romanization: 'mù', english: 'eye', type: 'character' },
  { native: '耳', romanization: 'ěr', english: 'ear', type: 'character' },
  { native: '心', romanization: 'xīn', english: 'heart', type: 'character' },
  { native: '门', romanization: 'mén', english: 'door/gate', type: 'character' },
  { native: '车', romanization: 'chē', english: 'vehicle', type: 'character' },
  { native: '马', romanization: 'mǎ', english: 'horse', type: 'character' },
  { native: '鱼', romanization: 'yú', english: 'fish', type: 'character' },
  { native: '鸟', romanization: 'niǎo', english: 'bird', type: 'character' },
  { native: '花', romanization: 'huā', english: 'flower', type: 'character' },
  { native: '草', romanization: 'cǎo', english: 'grass', type: 'character' },
  { native: '雨', romanization: 'yǔ', english: 'rain', type: 'character' },
  { native: '风', romanization: 'fēng', english: 'wind', type: 'character' },
  { native: '云', romanization: 'yún', english: 'cloud', type: 'character' },
  { native: '学', romanization: 'xué', english: 'study', type: 'character' },
  { native: '生', romanization: 'shēng', english: 'life/born', type: 'character' },
  { native: '老', romanization: 'lǎo', english: 'old', type: 'character' },
  { native: '师', romanization: 'shī', english: 'teacher/master', type: 'character' },
  { native: '好', romanization: 'hǎo', english: 'good', type: 'character' },
];

const phrasesData = [
  // Greetings
  { native: '你好', romanization: 'nǐ hǎo', english: 'Hello', type: 'phrase' },
  { native: '您好', romanization: 'nín hǎo', english: 'Hello (formal)', type: 'phrase' },
  { native: '你好吗', romanization: 'nǐ hǎo ma', english: 'How are you?', type: 'phrase' },
  { native: '我很好', romanization: 'wǒ hěn hǎo', english: 'I\'m fine', type: 'phrase' },
  { native: '早上好', romanization: 'zǎoshang hǎo', english: 'Good morning', type: 'phrase' },
  { native: '下午好', romanization: 'xiàwǔ hǎo', english: 'Good afternoon', type: 'phrase' },
  { native: '晚上好', romanization: 'wǎnshang hǎo', english: 'Good evening', type: 'phrase' },
  { native: '晚安', romanization: 'wǎn\'ān', english: 'Good night', type: 'phrase' },
  { native: '再见', romanization: 'zàijiàn', english: 'Goodbye', type: 'phrase' },
  { native: '明天见', romanization: 'míngtiān jiàn', english: 'See you tomorrow', type: 'phrase' },
  { native: '谢谢', romanization: 'xièxie', english: 'Thank you', type: 'phrase' },
  { native: '非常感谢', romanization: 'fēicháng gǎnxiè', english: 'Thank you very much', type: 'phrase' },
  { native: '不客气', romanization: 'bú kèqi', english: 'You\'re welcome', type: 'phrase' },
  { native: '对不起', romanization: 'duìbuqǐ', english: 'I\'m sorry', type: 'phrase' },
  { native: '没关系', romanization: 'méi guānxi', english: 'It doesn\'t matter', type: 'phrase' },
  { native: '请', romanization: 'qǐng', english: 'Please', type: 'phrase' },
  { native: '是', romanization: 'shì', english: 'Yes', type: 'phrase' },
  { native: '不是', romanization: 'bú shì', english: 'No (it isn\'t)', type: 'phrase' },

  // Introductions
  { native: '你叫什么名字', romanization: 'nǐ jiào shénme míngzi', english: 'What\'s your name?', type: 'phrase' },
  { native: '我叫...', romanization: 'wǒ jiào...', english: 'My name is...', type: 'phrase' },
  { native: '认识你很高兴', romanization: 'rènshi nǐ hěn gāoxìng', english: 'Nice to meet you', type: 'phrase' },
  { native: '你是哪国人', romanization: 'nǐ shì nǎ guó rén', english: 'Where are you from?', type: 'phrase' },
  { native: '我是美国人', romanization: 'wǒ shì měiguó rén', english: 'I\'m American', type: 'phrase' },

  // Communication
  { native: '你会说英语吗', romanization: 'nǐ huì shuō yīngyǔ ma', english: 'Do you speak English?', type: 'phrase' },
  { native: '我不会说中文', romanization: 'wǒ bú huì shuō zhōngwén', english: 'I can\'t speak Chinese', type: 'phrase' },
  { native: '我听不懂', romanization: 'wǒ tīng bù dǒng', english: 'I don\'t understand', type: 'phrase' },
  { native: '我懂了', romanization: 'wǒ dǒng le', english: 'I understand', type: 'phrase' },
  { native: '请再说一遍', romanization: 'qǐng zài shuō yí biàn', english: 'Please say it again', type: 'phrase' },
  { native: '请说慢一点', romanization: 'qǐng shuō màn yìdiǎn', english: 'Please speak slowly', type: 'phrase' },
  { native: '这是什么', romanization: 'zhè shì shénme', english: 'What is this?', type: 'phrase' },
  { native: '什么意思', romanization: 'shénme yìsi', english: 'What does it mean?', type: 'phrase' },
  { native: '请写下来', romanization: 'qǐng xiě xiàlái', english: 'Please write it down', type: 'phrase' },

  // Travel & Transportation
  { native: '火车站在哪里', romanization: 'huǒchēzhàn zài nǎlǐ', english: 'Where is the train station?', type: 'phrase' },
  { native: '机场在哪里', romanization: 'jīchǎng zài nǎlǐ', english: 'Where is the airport?', type: 'phrase' },
  { native: '地铁站在哪里', romanization: 'dìtiězhàn zài nǎlǐ', english: 'Where is the subway station?', type: 'phrase' },
  { native: '出租车', romanization: 'chūzūchē', english: 'Taxi', type: 'phrase' },
  { native: '我要去...', romanization: 'wǒ yào qù...', english: 'I want to go to...', type: 'phrase' },
  { native: '请到这个地址', romanization: 'qǐng dào zhège dìzhǐ', english: 'To this address please', type: 'phrase' },
  { native: '多少钱', romanization: 'duōshao qián', english: 'How much?', type: 'phrase' },
  { native: '太贵了', romanization: 'tài guì le', english: 'Too expensive', type: 'phrase' },
  { native: '便宜一点', romanization: 'piányi yìdiǎn', english: 'A bit cheaper', type: 'phrase' },
  { native: '在这里停', romanization: 'zài zhèlǐ tíng', english: 'Stop here', type: 'phrase' },
  { native: '到了吗', romanization: 'dào le ma', english: 'Have we arrived?', type: 'phrase' },
  { native: '远不远', romanization: 'yuǎn bù yuǎn', english: 'Is it far?', type: 'phrase' },

  // Restaurant
  { native: '我要点菜', romanization: 'wǒ yào diǎncài', english: 'I want to order', type: 'phrase' },
  { native: '菜单', romanization: 'càidān', english: 'Menu', type: 'phrase' },
  { native: '有英文菜单吗', romanization: 'yǒu yīngwén càidān ma', english: 'Is there an English menu?', type: 'phrase' },
  { native: '推荐什么菜', romanization: 'tuījiàn shénme cài', english: 'What do you recommend?', type: 'phrase' },
  { native: '我要这个', romanization: 'wǒ yào zhège', english: 'I want this one', type: 'phrase' },
  { native: '不要辣的', romanization: 'bú yào là de', english: 'Not spicy', type: 'phrase' },
  { native: '买单', romanization: 'mǎidān', english: 'Check please', type: 'phrase' },
  { native: '可以刷卡吗', romanization: 'kěyǐ shuākǎ ma', english: 'Can I pay by card?', type: 'phrase' },
  { native: '很好吃', romanization: 'hěn hǎochī', english: 'Very delicious', type: 'phrase' },
  { native: '我吃素', romanization: 'wǒ chīsù', english: 'I\'m vegetarian', type: 'phrase' },
  { native: '我饿了', romanization: 'wǒ è le', english: 'I\'m hungry', type: 'phrase' },
  { native: '来一杯水', romanization: 'lái yì bēi shuǐ', english: 'A glass of water please', type: 'phrase' },
  { native: '来一杯茶', romanization: 'lái yì bēi chá', english: 'A cup of tea please', type: 'phrase' },
  { native: '来一杯啤酒', romanization: 'lái yì bēi píjiǔ', english: 'A beer please', type: 'phrase' },

  // Shopping
  { native: '我想买...', romanization: 'wǒ xiǎng mǎi...', english: 'I want to buy...', type: 'phrase' },
  { native: '可以试一下吗', romanization: 'kěyǐ shì yíxià ma', english: 'Can I try it?', type: 'phrase' },
  { native: '有大号的吗', romanization: 'yǒu dàhào de ma', english: 'Do you have a larger size?', type: 'phrase' },
  { native: '有小号的吗', romanization: 'yǒu xiǎohào de ma', english: 'Do you have a smaller size?', type: 'phrase' },
  { native: '有别的颜色吗', romanization: 'yǒu bié de yánsè ma', english: 'Do you have other colors?', type: 'phrase' },
  { native: '我只是看看', romanization: 'wǒ zhǐ shì kànkan', english: 'Just looking', type: 'phrase' },
  { native: '可以退货吗', romanization: 'kěyǐ tuìhuò ma', english: 'Can I return this?', type: 'phrase' },
  { native: '给我一个袋子', romanization: 'gěi wǒ yí gè dàizi', english: 'Give me a bag', type: 'phrase' },

  // Directions
  { native: '洗手间在哪里', romanization: 'xǐshǒujiān zài nǎlǐ', english: 'Where is the restroom?', type: 'phrase' },
  { native: '怎么走', romanization: 'zěnme zǒu', english: 'How do I get there?', type: 'phrase' },
  { native: '一直走', romanization: 'yìzhí zǒu', english: 'Go straight', type: 'phrase' },
  { native: '向右转', romanization: 'xiàng yòu zhuǎn', english: 'Turn right', type: 'phrase' },
  { native: '向左转', romanization: 'xiàng zuǒ zhuǎn', english: 'Turn left', type: 'phrase' },
  { native: '我迷路了', romanization: 'wǒ mílù le', english: 'I\'m lost', type: 'phrase' },
  { native: '这里是哪里', romanization: 'zhèlǐ shì nǎlǐ', english: 'Where is this?', type: 'phrase' },

  // Hotel
  { native: '我要住店', romanization: 'wǒ yào zhùdiàn', english: 'I want to check in', type: 'phrase' },
  { native: '我预订了房间', romanization: 'wǒ yùdìng le fángjiān', english: 'I have a reservation', type: 'phrase' },
  { native: '退房', romanization: 'tuìfáng', english: 'Check out', type: 'phrase' },
  { native: 'WiFi密码是什么', romanization: 'WiFi mìmǎ shì shénme', english: 'What is the WiFi password?', type: 'phrase' },
  { native: '房间钥匙', romanization: 'fángjiān yàoshi', english: 'Room key', type: 'phrase' },

  // Emergency
  { native: '救命', romanization: 'jiùmìng', english: 'Help!', type: 'phrase' },
  { native: '请叫警察', romanization: 'qǐng jiào jǐngchá', english: 'Call the police', type: 'phrase' },
  { native: '请叫救护车', romanization: 'qǐng jiào jiùhùchē', english: 'Call an ambulance', type: 'phrase' },
  { native: '医院在哪里', romanization: 'yīyuàn zài nǎlǐ', english: 'Where is the hospital?', type: 'phrase' },
  { native: '药店在哪里', romanization: 'yàodiàn zài nǎlǐ', english: 'Where is the pharmacy?', type: 'phrase' },
  { native: '我不舒服', romanization: 'wǒ bù shūfu', english: 'I don\'t feel well', type: 'phrase' },
  { native: '我头疼', romanization: 'wǒ tóuténg', english: 'I have a headache', type: 'phrase' },
  { native: '我肚子疼', romanization: 'wǒ dùzi téng', english: 'I have a stomachache', type: 'phrase' },
  { native: '我发烧了', romanization: 'wǒ fāshāo le', english: 'I have a fever', type: 'phrase' },
  { native: '我的护照丢了', romanization: 'wǒ de hùzhào diū le', english: 'I lost my passport', type: 'phrase' },
  { native: '我的钱包丢了', romanization: 'wǒ de qiánbāo diū le', english: 'I lost my wallet', type: 'phrase' },

  // Common Requests
  { native: '请等一下', romanization: 'qǐng děng yíxià', english: 'Please wait a moment', type: 'phrase' },
  { native: '请帮我', romanization: 'qǐng bāng wǒ', english: 'Please help me', type: 'phrase' },
  { native: '没问题', romanization: 'méi wèntí', english: 'No problem', type: 'phrase' },
  { native: '好的', romanization: 'hǎo de', english: 'Okay', type: 'phrase' },
  { native: '不好意思', romanization: 'bù hǎoyìsi', english: 'Excuse me / Sorry', type: 'phrase' },

  // Weather
  { native: '今天天气很好', romanization: 'jīntiān tiānqì hěn hǎo', english: 'Nice weather today', type: 'phrase' },
  { native: '今天很热', romanization: 'jīntiān hěn rè', english: 'It\'s hot today', type: 'phrase' },
  { native: '今天很冷', romanization: 'jīntiān hěn lěng', english: 'It\'s cold today', type: 'phrase' },
  { native: '下雨了', romanization: 'xiàyǔ le', english: 'It\'s raining', type: 'phrase' },
];

const vocabularyData = [
  // Numbers
  { native: '零', romanization: 'líng', english: 'zero', type: 'vocabulary' },
  { native: '百', romanization: 'bǎi', english: 'hundred', type: 'vocabulary' },
  { native: '千', romanization: 'qiān', english: 'thousand', type: 'vocabulary' },
  { native: '万', romanization: 'wàn', english: 'ten thousand', type: 'vocabulary' },

  // Time
  { native: '今天', romanization: 'jīntiān', english: 'today', type: 'vocabulary' },
  { native: '明天', romanization: 'míngtiān', english: 'tomorrow', type: 'vocabulary' },
  { native: '昨天', romanization: 'zuótiān', english: 'yesterday', type: 'vocabulary' },
  { native: '现在', romanization: 'xiànzài', english: 'now', type: 'vocabulary' },
  { native: '早上', romanization: 'zǎoshang', english: 'morning', type: 'vocabulary' },
  { native: '中午', romanization: 'zhōngwǔ', english: 'noon', type: 'vocabulary' },
  { native: '下午', romanization: 'xiàwǔ', english: 'afternoon', type: 'vocabulary' },
  { native: '晚上', romanization: 'wǎnshang', english: 'evening', type: 'vocabulary' },
  { native: '星期', romanization: 'xīngqī', english: 'week', type: 'vocabulary' },
  { native: '小时', romanization: 'xiǎoshí', english: 'hour', type: 'vocabulary' },
  { native: '分钟', romanization: 'fēnzhōng', english: 'minute', type: 'vocabulary' },
  { native: '年', romanization: 'nián', english: 'year', type: 'vocabulary' },

  // Places
  { native: '学校', romanization: 'xuéxiào', english: 'school', type: 'vocabulary' },
  { native: '医院', romanization: 'yīyuàn', english: 'hospital', type: 'vocabulary' },
  { native: '银行', romanization: 'yínháng', english: 'bank', type: 'vocabulary' },
  { native: '商店', romanization: 'shāngdiàn', english: 'shop', type: 'vocabulary' },
  { native: '超市', romanization: 'chāoshì', english: 'supermarket', type: 'vocabulary' },
  { native: '饭店', romanization: 'fàndiàn', english: 'restaurant/hotel', type: 'vocabulary' },
  { native: '公园', romanization: 'gōngyuán', english: 'park', type: 'vocabulary' },
  { native: '图书馆', romanization: 'túshūguǎn', english: 'library', type: 'vocabulary' },
  { native: '邮局', romanization: 'yóujú', english: 'post office', type: 'vocabulary' },

  // Food
  { native: '米饭', romanization: 'mǐfàn', english: 'rice', type: 'vocabulary' },
  { native: '面条', romanization: 'miàntiáo', english: 'noodles', type: 'vocabulary' },
  { native: '饺子', romanization: 'jiǎozi', english: 'dumplings', type: 'vocabulary' },
  { native: '包子', romanization: 'bāozi', english: 'steamed bun', type: 'vocabulary' },
  { native: '鸡肉', romanization: 'jīròu', english: 'chicken', type: 'vocabulary' },
  { native: '牛肉', romanization: 'niúròu', english: 'beef', type: 'vocabulary' },
  { native: '猪肉', romanization: 'zhūròu', english: 'pork', type: 'vocabulary' },
  { native: '鱼', romanization: 'yú', english: 'fish', type: 'vocabulary' },
  { native: '蔬菜', romanization: 'shūcài', english: 'vegetables', type: 'vocabulary' },
  { native: '水果', romanization: 'shuǐguǒ', english: 'fruit', type: 'vocabulary' },
  { native: '茶', romanization: 'chá', english: 'tea', type: 'vocabulary' },
  { native: '咖啡', romanization: 'kāfēi', english: 'coffee', type: 'vocabulary' },
  { native: '啤酒', romanization: 'píjiǔ', english: 'beer', type: 'vocabulary' },
  { native: '水', romanization: 'shuǐ', english: 'water', type: 'vocabulary' },
  { native: '牛奶', romanization: 'niúnǎi', english: 'milk', type: 'vocabulary' },

  // People
  { native: '朋友', romanization: 'péngyǒu', english: 'friend', type: 'vocabulary' },
  { native: '家人', romanization: 'jiārén', english: 'family', type: 'vocabulary' },
  { native: '妈妈', romanization: 'māma', english: 'mother', type: 'vocabulary' },
  { native: '爸爸', romanization: 'bàba', english: 'father', type: 'vocabulary' },
  { native: '孩子', romanization: 'háizi', english: 'child', type: 'vocabulary' },
  { native: '老师', romanization: 'lǎoshī', english: 'teacher', type: 'vocabulary' },
  { native: '学生', romanization: 'xuéshēng', english: 'student', type: 'vocabulary' },
  { native: '医生', romanization: 'yīshēng', english: 'doctor', type: 'vocabulary' },

  // Colors
  { native: '红色', romanization: 'hóngsè', english: 'red', type: 'vocabulary' },
  { native: '蓝色', romanization: 'lánsè', english: 'blue', type: 'vocabulary' },
  { native: '绿色', romanization: 'lǜsè', english: 'green', type: 'vocabulary' },
  { native: '黄色', romanization: 'huángsè', english: 'yellow', type: 'vocabulary' },
  { native: '白色', romanization: 'báisè', english: 'white', type: 'vocabulary' },
  { native: '黑色', romanization: 'hēisè', english: 'black', type: 'vocabulary' },

  // Common Objects
  { native: '书', romanization: 'shū', english: 'book', type: 'vocabulary' },
  { native: '手机', romanization: 'shǒujī', english: 'cell phone', type: 'vocabulary' },
  { native: '电脑', romanization: 'diànnǎo', english: 'computer', type: 'vocabulary' },
  { native: '钱', romanization: 'qián', english: 'money', type: 'vocabulary' },
  { native: '护照', romanization: 'hùzhào', english: 'passport', type: 'vocabulary' },
  { native: '地图', romanization: 'dìtú', english: 'map', type: 'vocabulary' },
  { native: '钥匙', romanization: 'yàoshi', english: 'key', type: 'vocabulary' },
  { native: '伞', romanization: 'sǎn', english: 'umbrella', type: 'vocabulary' },
  { native: '包', romanization: 'bāo', english: 'bag', type: 'vocabulary' },
];

function gridRowsOfFive(items) {
  const rows = [];
  for (let i = 0; i < items.length; i += 5) {
    rows.push(items.slice(i, i + 5));
  }
  return rows;
}

const chinese = {
  id: 'chinese',
  name: 'Chinese',
  speechLang: 'zh-CN',
  hasRomanization: true,
  romanizationLabel: 'Show Pinyin',
  categories: [
    {
      id: 'tones',
      name: 'Pinyin & Tones',
      type: 'tone',
      renderMode: 'grid',
      gridRows: gridRowsOfFive,
      data: tones
    },
    {
      id: 'characters',
      name: 'Common Characters',
      type: 'character',
      renderMode: 'grid',
      gridRows: gridRowsOfFive,
      data: characters
    },
    {
      id: 'phrases',
      name: 'Phrases',
      type: 'phrase',
      renderMode: 'list',
      data: phrasesData
    },
    {
      id: 'vocabulary',
      name: 'Vocabulary',
      type: 'vocabulary',
      renderMode: 'list',
      data: vocabularyData
    }
  ]
};

export default chinese;
