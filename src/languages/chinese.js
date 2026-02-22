const tones = [
  { native: '妈', romanization: 'mā', english: 'mother (1st tone)' },
  { native: '麻', romanization: 'má', english: 'hemp (2nd tone)' },
  { native: '马', romanization: 'mǎ', english: 'horse (3rd tone)' },
  { native: '骂', romanization: 'mà', english: 'scold (4th tone)' },
  { native: '吗', romanization: 'ma', english: 'question particle (neutral)' },
  { native: '八', romanization: 'bā', english: 'eight (1st tone)' },
  { native: '拔', romanization: 'bá', english: 'pull out (2nd tone)' },
  { native: '把', romanization: 'bǎ', english: 'hold (3rd tone)' },
  { native: '爸', romanization: 'bà', english: 'father (4th tone)' },
  { native: '吧', romanization: 'ba', english: 'suggestion particle (neutral)' },
  { native: '他', romanization: 'tā', english: 'he (1st tone)' },
  { native: '她', romanization: 'tā', english: 'she (1st tone)' },
  { native: '大', romanization: 'dà', english: 'big (4th tone)' },
  { native: '打', romanization: 'dǎ', english: 'hit (3rd tone)' },
  { native: '飞', romanization: 'fēi', english: 'fly (1st tone)' },
  { native: '肥', romanization: 'féi', english: 'fat (2nd tone)' },
  { native: '非', romanization: 'fēi', english: 'not (1st tone)' },
  { native: '费', romanization: 'fèi', english: 'expense (4th tone)' },
  { native: '书', romanization: 'shū', english: 'book (1st tone)' },
  { native: '熟', romanization: 'shú', english: 'ripe (2nd tone)' },
  { native: '鼠', romanization: 'shǔ', english: 'rat (3rd tone)' },
  { native: '树', romanization: 'shù', english: 'tree (4th tone)' },
  { native: '高', romanization: 'gāo', english: 'tall (1st tone)' },
  { native: '搞', romanization: 'gǎo', english: 'do (3rd tone)' },
  { native: '告', romanization: 'gào', english: 'tell (4th tone)' },
  { native: '花', romanization: 'huā', english: 'flower (1st tone)' },
  { native: '华', romanization: 'huá', english: 'magnificent (2nd tone)' },
  { native: '画', romanization: 'huà', english: 'painting (4th tone)' },
  { native: '话', romanization: 'huà', english: 'speech (4th tone)' },
  { native: '猪', romanization: 'zhū', english: 'pig (1st tone)' },
  { native: '竹', romanization: 'zhú', english: 'bamboo (2nd tone)' },
  { native: '主', romanization: 'zhǔ', english: 'host (3rd tone)' },
  { native: '住', romanization: 'zhù', english: 'live (4th tone)' },
  { native: '猫', romanization: 'māo', english: 'cat (1st tone)' },
  { native: '毛', romanization: 'máo', english: 'hair (2nd tone)' },
  { native: '帽', romanization: 'mào', english: 'hat (4th tone)' },
  { native: '吃', romanization: 'chī', english: 'eat (1st tone)' },
  { native: '池', romanization: 'chí', english: 'pond (2nd tone)' },
  { native: '尺', romanization: 'chǐ', english: 'ruler (3rd tone)' },
  { native: '赤', romanization: 'chì', english: 'red (4th tone)' },
];

const characters = [
  { native: '人', romanization: 'rén', english: 'person' },
  { native: '大', romanization: 'dà', english: 'big' },
  { native: '小', romanization: 'xiǎo', english: 'small' },
  { native: '中', romanization: 'zhōng', english: 'middle/China' },
  { native: '国', romanization: 'guó', english: 'country' },
  { native: '一', romanization: 'yī', english: 'one' },
  { native: '二', romanization: 'èr', english: 'two' },
  { native: '三', romanization: 'sān', english: 'three' },
  { native: '四', romanization: 'sì', english: 'four' },
  { native: '五', romanization: 'wǔ', english: 'five' },
  { native: '六', romanization: 'liù', english: 'six' },
  { native: '七', romanization: 'qī', english: 'seven' },
  { native: '八', romanization: 'bā', english: 'eight' },
  { native: '九', romanization: 'jiǔ', english: 'nine' },
  { native: '十', romanization: 'shí', english: 'ten' },
  { native: '日', romanization: 'rì', english: 'sun/day' },
  { native: '月', romanization: 'yuè', english: 'moon/month' },
  { native: '水', romanization: 'shuǐ', english: 'water' },
  { native: '火', romanization: 'huǒ', english: 'fire' },
  { native: '山', romanization: 'shān', english: 'mountain' },
  { native: '木', romanization: 'mù', english: 'wood/tree' },
  { native: '天', romanization: 'tiān', english: 'sky/day' },
  { native: '地', romanization: 'dì', english: 'earth/ground' },
  { native: '上', romanization: 'shàng', english: 'up/above' },
  { native: '下', romanization: 'xià', english: 'down/below' },
  { native: '左', romanization: 'zuǒ', english: 'left' },
  { native: '右', romanization: 'yòu', english: 'right' },
  { native: '男', romanization: 'nán', english: 'male' },
  { native: '女', romanization: 'nǚ', english: 'female' },
  { native: '子', romanization: 'zǐ', english: 'child' },
  { native: '口', romanization: 'kǒu', english: 'mouth' },
  { native: '手', romanization: 'shǒu', english: 'hand' },
  { native: '目', romanization: 'mù', english: 'eye' },
  { native: '耳', romanization: 'ěr', english: 'ear' },
  { native: '心', romanization: 'xīn', english: 'heart' },
  { native: '门', romanization: 'mén', english: 'door/gate' },
  { native: '车', romanization: 'chē', english: 'vehicle' },
  { native: '马', romanization: 'mǎ', english: 'horse' },
  { native: '鱼', romanization: 'yú', english: 'fish' },
  { native: '鸟', romanization: 'niǎo', english: 'bird' },
  { native: '花', romanization: 'huā', english: 'flower' },
  { native: '草', romanization: 'cǎo', english: 'grass' },
  { native: '雨', romanization: 'yǔ', english: 'rain' },
  { native: '风', romanization: 'fēng', english: 'wind' },
  { native: '云', romanization: 'yún', english: 'cloud' },
  { native: '学', romanization: 'xué', english: 'study' },
  { native: '生', romanization: 'shēng', english: 'life/born' },
  { native: '老', romanization: 'lǎo', english: 'old' },
  { native: '师', romanization: 'shī', english: 'teacher/master' },
  { native: '好', romanization: 'hǎo', english: 'good' },
];

const elementaryPhrases = [
  // Greetings
  { native: '你好', romanization: 'nǐ hǎo', english: 'Hello' },
  { native: '您好', romanization: 'nín hǎo', english: 'Hello (formal)' },
  { native: '你好吗', romanization: 'nǐ hǎo ma', english: 'How are you?' },
  { native: '我很好', romanization: 'wǒ hěn hǎo', english: 'I\'m fine' },
  { native: '早上好', romanization: 'zǎoshang hǎo', english: 'Good morning' },
  { native: '下午好', romanization: 'xiàwǔ hǎo', english: 'Good afternoon' },
  { native: '晚上好', romanization: 'wǎnshang hǎo', english: 'Good evening' },
  { native: '晚安', romanization: 'wǎn\'ān', english: 'Good night' },
  { native: '再见', romanization: 'zàijiàn', english: 'Goodbye' },
  { native: '明天见', romanization: 'míngtiān jiàn', english: 'See you tomorrow' },
  { native: '谢谢', romanization: 'xièxie', english: 'Thank you' },
  { native: '非常感谢', romanization: 'fēicháng gǎnxiè', english: 'Thank you very much' },
  { native: '不客气', romanization: 'bú kèqi', english: 'You\'re welcome' },
  { native: '对不起', romanization: 'duìbuqǐ', english: 'I\'m sorry' },
  { native: '没关系', romanization: 'méi guānxi', english: 'It doesn\'t matter' },
  { native: '请', romanization: 'qǐng', english: 'Please' },
  { native: '是', romanization: 'shì', english: 'Yes' },
  { native: '不是', romanization: 'bú shì', english: 'No (it isn\'t)' },

  // Introductions
  { native: '你叫什么名字', romanization: 'nǐ jiào shénme míngzi', english: 'What\'s your name?' },
  { native: '我叫...', romanization: 'wǒ jiào...', english: 'My name is...' },
  { native: '认识你很高兴', romanization: 'rènshi nǐ hěn gāoxìng', english: 'Nice to meet you' },
  { native: '你是哪国人', romanization: 'nǐ shì nǎ guó rén', english: 'Where are you from?' },
  { native: '我是美国人', romanization: 'wǒ shì měiguó rén', english: 'I\'m American' },

  // Communication
  { native: '你会说英语吗', romanization: 'nǐ huì shuō yīngyǔ ma', english: 'Do you speak English?' },
  { native: '我不会说中文', romanization: 'wǒ bú huì shuō zhōngwén', english: 'I can\'t speak Chinese' },
  { native: '我听不懂', romanization: 'wǒ tīng bù dǒng', english: 'I don\'t understand' },
  { native: '我懂了', romanization: 'wǒ dǒng le', english: 'I understand' },
  { native: '请再说一遍', romanization: 'qǐng zài shuō yí biàn', english: 'Please say it again' },
  { native: '请说慢一点', romanization: 'qǐng shuō màn yìdiǎn', english: 'Please speak slowly' },
  { native: '这是什么', romanization: 'zhè shì shénme', english: 'What is this?' },
  { native: '什么意思', romanization: 'shénme yìsi', english: 'What does it mean?' },
  { native: '请写下来', romanization: 'qǐng xiě xiàlái', english: 'Please write it down' },

  // Common Requests
  { native: '请等一下', romanization: 'qǐng děng yíxià', english: 'Please wait a moment' },
  { native: '请帮我', romanization: 'qǐng bāng wǒ', english: 'Please help me' },
  { native: '没问题', romanization: 'méi wèntí', english: 'No problem' },
  { native: '好的', romanization: 'hǎo de', english: 'Okay' },
  { native: '不好意思', romanization: 'bù hǎoyìsi', english: 'Excuse me / Sorry' },
];

const highSchoolPhrases = [
  // Travel & Transportation
  { native: '火车站在哪里', romanization: 'huǒchēzhàn zài nǎlǐ', english: 'Where is the train station?' },
  { native: '机场在哪里', romanization: 'jīchǎng zài nǎlǐ', english: 'Where is the airport?' },
  { native: '地铁站在哪里', romanization: 'dìtiězhàn zài nǎlǐ', english: 'Where is the subway station?' },
  { native: '出租车', romanization: 'chūzūchē', english: 'Taxi' },
  { native: '我要去...', romanization: 'wǒ yào qù...', english: 'I want to go to...' },
  { native: '请到这个地址', romanization: 'qǐng dào zhège dìzhǐ', english: 'To this address please' },
  { native: '多少钱', romanization: 'duōshao qián', english: 'How much?' },
  { native: '太贵了', romanization: 'tài guì le', english: 'Too expensive' },
  { native: '便宜一点', romanization: 'piányi yìdiǎn', english: 'A bit cheaper' },
  { native: '在这里停', romanization: 'zài zhèlǐ tíng', english: 'Stop here' },
  { native: '到了吗', romanization: 'dào le ma', english: 'Have we arrived?' },
  { native: '远不远', romanization: 'yuǎn bù yuǎn', english: 'Is it far?' },

  // Restaurant
  { native: '我要点菜', romanization: 'wǒ yào diǎncài', english: 'I want to order' },
  { native: '菜单', romanization: 'càidān', english: 'Menu' },
  { native: '有英文菜单吗', romanization: 'yǒu yīngwén càidān ma', english: 'Is there an English menu?' },
  { native: '推荐什么菜', romanization: 'tuījiàn shénme cài', english: 'What do you recommend?' },
  { native: '我要这个', romanization: 'wǒ yào zhège', english: 'I want this one' },
  { native: '不要辣的', romanization: 'bú yào là de', english: 'Not spicy' },
  { native: '买单', romanization: 'mǎidān', english: 'Check please' },
  { native: '可以刷卡吗', romanization: 'kěyǐ shuākǎ ma', english: 'Can I pay by card?' },
  { native: '很好吃', romanization: 'hěn hǎochī', english: 'Very delicious' },
  { native: '我吃素', romanization: 'wǒ chīsù', english: 'I\'m vegetarian' },
  { native: '我饿了', romanization: 'wǒ è le', english: 'I\'m hungry' },
  { native: '来一杯水', romanization: 'lái yì bēi shuǐ', english: 'A glass of water please' },
  { native: '来一杯茶', romanization: 'lái yì bēi chá', english: 'A cup of tea please' },
  { native: '来一杯啤酒', romanization: 'lái yì bēi píjiǔ', english: 'A beer please' },

  // Shopping
  { native: '我想买...', romanization: 'wǒ xiǎng mǎi...', english: 'I want to buy...' },
  { native: '可以试一下吗', romanization: 'kěyǐ shì yíxià ma', english: 'Can I try it?' },
  { native: '有大号的吗', romanization: 'yǒu dàhào de ma', english: 'Do you have a larger size?' },
  { native: '有小号的吗', romanization: 'yǒu xiǎohào de ma', english: 'Do you have a smaller size?' },
  { native: '有别的颜色吗', romanization: 'yǒu bié de yánsè ma', english: 'Do you have other colors?' },
  { native: '我只是看看', romanization: 'wǒ zhǐ shì kànkan', english: 'Just looking' },
  { native: '可以退货吗', romanization: 'kěyǐ tuìhuò ma', english: 'Can I return this?' },
  { native: '给我一个袋子', romanization: 'gěi wǒ yí gè dàizi', english: 'Give me a bag' },

  // Directions
  { native: '洗手间在哪里', romanization: 'xǐshǒujiān zài nǎlǐ', english: 'Where is the restroom?' },
  { native: '怎么走', romanization: 'zěnme zǒu', english: 'How do I get there?' },
  { native: '一直走', romanization: 'yìzhí zǒu', english: 'Go straight' },
  { native: '向右转', romanization: 'xiàng yòu zhuǎn', english: 'Turn right' },
  { native: '向左转', romanization: 'xiàng zuǒ zhuǎn', english: 'Turn left' },
  { native: '我迷路了', romanization: 'wǒ mílù le', english: 'I\'m lost' },
  { native: '这里是哪里', romanization: 'zhèlǐ shì nǎlǐ', english: 'Where is this?' },
];

const collegePhrases = [
  // Business & Professional
  { native: '我们来讨论一下合作方案', romanization: 'wǒmen lái tǎolùn yíxià hézuò fāng\'àn', english: 'Let\'s discuss the cooperation plan' },
  { native: '请审核这份合同', romanization: 'qǐng shěnhé zhè fèn hétong', english: 'Please review this contract' },
  { native: '这个项目的预算是多少', romanization: 'zhège xiàngmù de yùsuàn shì duōshao', english: 'What is the budget for this project?' },
  { native: '我们需要制定新的策略', romanization: 'wǒmen xūyào zhìdìng xīn de cèlüè', english: 'We need to develop a new strategy' },
  { native: '能否在截止日期前完成', romanization: 'néng fǒu zài jiézhǐ rìqī qián wánchéng', english: 'Can it be completed before the deadline?' },
  { native: '市场竞争越来越激烈', romanization: 'shìchǎng jìngzhēng yuè lái yuè jīliè', english: 'Market competition is getting fiercer' },
  { native: '我负责这个项目的管理', romanization: 'wǒ fùzé zhège xiàngmù de guǎnlǐ', english: 'I\'m responsible for managing this project' },
  { native: '投资回报率是多少', romanization: 'tóuzī huíbào lǜ shì duōshao', english: 'What is the return on investment?' },
  { native: '我们必须提高生产效率', romanization: 'wǒmen bìxū tígāo shēngchǎn xiàolǜ', english: 'We must improve production efficiency' },
  { native: '请提交一份详细的报告', romanization: 'qǐng tíjiāo yí fèn xiángxì de bàogào', english: 'Please submit a detailed report' },
  { native: '这次谈判很成功', romanization: 'zhè cì tánpàn hěn chénggōng', english: 'This negotiation was very successful' },
  { native: '我们的目标是扩大市场份额', romanization: 'wǒmen de mùbiāo shì kuòdà shìchǎng fèn\'é', english: 'Our goal is to expand market share' },

  // Academic & Intellectual
  { native: '请解释一下这个理论', romanization: 'qǐng jiěshì yíxià zhège lǐlùn', english: 'Please explain this theory' },
  { native: '我们需要更多的实验数据', romanization: 'wǒmen xūyào gèng duō de shíyàn shùjù', english: 'We need more experimental data' },
  { native: '这个假说还没有被证实', romanization: 'zhège jiǎshuō hái méiyǒu bèi zhèngshí', english: 'This hypothesis hasn\'t been verified yet' },
  { native: '我们应该从不同的角度分析', romanization: 'wǒmen yīnggāi cóng bùtóng de jiǎodù fēnxī', english: 'We should analyze from different angles' },
  { native: '相关性不等于因果关系', romanization: 'xiāngguānxìng bù děngyú yīnguǒ guānxì', english: 'Correlation doesn\'t equal causation' },
  { native: '批判性思维非常重要', romanization: 'pīpànxìng sīwéi fēicháng zhòngyào', english: 'Critical thinking is very important' },
  { native: '这篇论文的结论很有说服力', romanization: 'zhè piān lùnwén de jiélùn hěn yǒu shuōfúlì', english: 'The conclusion of this paper is very convincing' },
  { native: '我们需要参考更多的文献', romanization: 'wǒmen xūyào cānkǎo gèng duō de wénxiàn', english: 'We need to refer to more literature' },
  { native: '这个概念太抽象了', romanization: 'zhège gàiniàn tài chōuxiàng le', english: 'This concept is too abstract' },
  { native: '下结论还为时过早', romanization: 'xià jiélùn hái wéishí guòzǎo', english: 'It\'s too early to draw conclusions' },
  { native: '理论和实践之间存在差距', romanization: 'lǐlùn hé shíjiàn zhījiān cúnzài chājù', english: 'There\'s a gap between theory and practice' },
  { native: '请用具体的例子来说明', romanization: 'qǐng yòng jùtǐ de lìzi lái shuōmíng', english: 'Please illustrate with concrete examples' },

  // Opinions & Debate
  { native: '我不同意这个观点', romanization: 'wǒ bù tóngyì zhège guāndiǎn', english: 'I disagree with this viewpoint' },
  { native: '这个问题需要辩证地看', romanization: 'zhège wèntí xūyào biànzhèng de kàn', english: 'This issue needs to be viewed dialectically' },
  { native: '我们应该权衡利弊', romanization: 'wǒmen yīnggāi quánhéng lìbì', english: 'We should weigh the pros and cons' },
  { native: '这不一定是正确的', romanization: 'zhè bù yídìng shì zhèngquè de', english: 'This isn\'t necessarily correct' },
  { native: '从伦理角度来看有问题', romanization: 'cóng lúnlǐ jiǎodù lái kàn yǒu wèntí', english: 'There are ethical concerns from a moral standpoint' },
  { native: '我们需要找到可持续的解决方案', romanization: 'wǒmen xūyào zhǎodào kě chíxù de jiějué fāng\'àn', english: 'We need to find a sustainable solution' },
  { native: '必须考虑社会影响', romanization: 'bìxū kǎolǜ shèhuì yǐngxiǎng', english: 'We must consider the social impact' },
  { native: '尊重多样性很重要', romanization: 'zūnzhòng duōyàngxìng hěn zhòngyào', english: 'Respecting diversity is important' },
  { native: '不能以偏概全', romanization: 'bù néng yǐ piān gài quán', english: 'One shouldn\'t generalize from a single case' },
  { native: '应该客观公正地评价', romanization: 'yīnggāi kèguān gōngzhèng de píngjià', english: 'One should evaluate objectively and fairly' },
  { native: '这个问题很复杂不能简单化', romanization: 'zhège wèntí hěn fùzá bù néng jiǎndānhuà', english: 'This issue is complex and can\'t be oversimplified' },
  { native: '要有长远的眼光', romanization: 'yào yǒu chángyuǎn de yǎnguāng', english: 'One should have a long-term perspective' },

  // Society & Current Events
  { native: '环境污染越来越严重', romanization: 'huánjìng wūrǎn yuè lái yuè yánzhòng', english: 'Environmental pollution is getting worse' },
  { native: '人口老龄化是一个严峻的挑战', romanization: 'rénkǒu lǎolínghuà shì yí gè yánjùn de tiǎozhàn', english: 'Population aging is a serious challenge' },
  { native: '贫富差距不断扩大', romanization: 'pínfù chājù búduàn kuòdà', english: 'The wealth gap keeps widening' },
  { native: '科技改变了我们的生活方式', romanization: 'kējì gǎibiàn le wǒmen de shēnghuó fāngshì', english: 'Technology has changed our lifestyle' },
  { native: '国际合作越来越重要', romanization: 'guójì hézuò yuè lái yuè zhòngyào', english: 'International cooperation is increasingly important' },
  { native: '我们要维护公平正义', romanization: 'wǒmen yào wéihù gōngpíng zhèngyì', english: 'We should uphold fairness and justice' },
  { native: '经济发展和环保能否兼顾', romanization: 'jīngjì fāzhǎn hé huánbǎo néng fǒu jiāngù', english: 'Can economic development and environmental protection coexist?' },
  { native: '提高信息素养很有必要', romanization: 'tígāo xìnxī sùyǎng hěn yǒu bìyào', english: 'Improving information literacy is necessary' },
  { native: '人工智能将如何改变社会', romanization: 'réngōng zhìnéng jiāng rúhé gǎibiàn shèhuì', english: 'How will AI change society?' },
  { native: '全球化是一把双刃剑', romanization: 'quánqiúhuà shì yì bǎ shuāngrèn jiàn', english: 'Globalization is a double-edged sword' },

  // Formal Expressions
  { native: '非常抱歉给您添麻烦了', romanization: 'fēicháng bàoqiàn gěi nín tiān máfan le', english: 'I sincerely apologize for the trouble' },
  { native: '承蒙关照不胜感激', romanization: 'chéngméng guānzhào bùshèng gǎnjī', english: 'I\'m deeply grateful for your kind attention' },
  { native: '恕我直言', romanization: 'shù wǒ zhíyán', english: 'Forgive me for being blunt' },
  { native: '请多多指教', romanization: 'qǐng duōduō zhǐjiào', english: 'Please give me your guidance' },
  { native: '久仰大名', romanization: 'jiǔyǎng dàmíng', english: 'I\'ve long admired your reputation' },
  { native: '不胜荣幸', romanization: 'bùshèng róngxìng', english: 'I\'m deeply honored' },
  { native: '言归正传', romanization: 'yán guī zhèng zhuàn', english: 'Let\'s get back to the main topic' },
  { native: '在此表示衷心的感谢', romanization: 'zài cǐ biǎoshì zhōngxīn de gǎnxiè', english: 'I express my heartfelt gratitude' },

  // Emotions & Psychology
  { native: '他的行为让我很失望', romanization: 'tā de xíngwéi ràng wǒ hěn shīwàng', english: 'His behavior disappointed me' },
  { native: '那段经历改变了她的人生观', romanization: 'nà duàn jīnglì gǎibiàn le tā de rénshēngguān', english: 'That experience changed her outlook on life' },
  { native: '要学会接受自己的不完美', romanization: 'yào xuéhuì jiēshòu zìjǐ de bù wánměi', english: 'One should learn to accept one\'s imperfections' },
  { native: '共情能力对人际关系至关重要', romanization: 'gòngqíng nénglì duì rénjì guānxì zhìguān zhòngyào', english: 'Empathy is crucial for relationships' },
  { native: '克服困难使人成长', romanization: 'kèfú kùnnán shǐ rén chéngzhǎng', english: 'Overcoming difficulties makes one grow' },
  { native: '不要被情绪左右判断', romanization: 'bú yào bèi qíngxù zuǒyòu pànduàn', english: 'Don\'t let emotions influence your judgment' },
  { native: '每个人都有追求幸福的权利', romanization: 'měi gè rén dōu yǒu zhuīqiú xìngfú de quánlì', english: 'Everyone has the right to pursue happiness' },
  { native: '这件事让我深思', romanization: 'zhè jiàn shì ràng wǒ shēnsī', english: 'This matter made me think deeply' },
];

const elementaryVocab = [
  // Numbers
  { native: '零', romanization: 'líng', english: 'zero' },
  { native: '百', romanization: 'bǎi', english: 'hundred' },
  { native: '千', romanization: 'qiān', english: 'thousand' },
  { native: '万', romanization: 'wàn', english: 'ten thousand' },

  // Time (first 4)
  { native: '今天', romanization: 'jīntiān', english: 'today' },
  { native: '明天', romanization: 'míngtiān', english: 'tomorrow' },
  { native: '昨天', romanization: 'zuótiān', english: 'yesterday' },
  { native: '现在', romanization: 'xiànzài', english: 'now' },

  // People
  { native: '朋友', romanization: 'péngyǒu', english: 'friend' },
  { native: '家人', romanization: 'jiārén', english: 'family' },
  { native: '妈妈', romanization: 'māma', english: 'mother' },
  { native: '爸爸', romanization: 'bàba', english: 'father' },
  { native: '孩子', romanization: 'háizi', english: 'child' },
  { native: '老师', romanization: 'lǎoshī', english: 'teacher' },
  { native: '学生', romanization: 'xuéshēng', english: 'student' },
  { native: '医生', romanization: 'yīshēng', english: 'doctor' },

  // Colors
  { native: '红色', romanization: 'hóngsè', english: 'red' },
  { native: '蓝色', romanization: 'lánsè', english: 'blue' },
  { native: '绿色', romanization: 'lǜsè', english: 'green' },
  { native: '黄色', romanization: 'huángsè', english: 'yellow' },
  { native: '白色', romanization: 'báisè', english: 'white' },
  { native: '黑色', romanization: 'hēisè', english: 'black' },

  // Food (elementary)
  { native: '米饭', romanization: 'mǐfàn', english: 'rice' },
  { native: '茶', romanization: 'chá', english: 'tea' },
  { native: '水', romanization: 'shuǐ', english: 'water' },
];

const highSchoolVocab = [
  // Time (remaining 8)
  { native: '早上', romanization: 'zǎoshang', english: 'morning' },
  { native: '中午', romanization: 'zhōngwǔ', english: 'noon' },
  { native: '下午', romanization: 'xiàwǔ', english: 'afternoon' },
  { native: '晚上', romanization: 'wǎnshang', english: 'evening' },
  { native: '星期', romanization: 'xīngqī', english: 'week' },
  { native: '小时', romanization: 'xiǎoshí', english: 'hour' },
  { native: '分钟', romanization: 'fēnzhōng', english: 'minute' },
  { native: '年', romanization: 'nián', english: 'year' },

  // Places
  { native: '学校', romanization: 'xuéxiào', english: 'school' },
  { native: '医院', romanization: 'yīyuàn', english: 'hospital' },
  { native: '银行', romanization: 'yínháng', english: 'bank' },
  { native: '商店', romanization: 'shāngdiàn', english: 'shop' },
  { native: '超市', romanization: 'chāoshì', english: 'supermarket' },
  { native: '饭店', romanization: 'fàndiàn', english: 'restaurant/hotel' },
  { native: '公园', romanization: 'gōngyuán', english: 'park' },
  { native: '图书馆', romanization: 'túshūguǎn', english: 'library' },
  { native: '邮局', romanization: 'yóujú', english: 'post office' },

  // Food (remaining)
  { native: '面条', romanization: 'miàntiáo', english: 'noodles' },
  { native: '饺子', romanization: 'jiǎozi', english: 'dumplings' },
  { native: '包子', romanization: 'bāozi', english: 'steamed bun' },
  { native: '鸡肉', romanization: 'jīròu', english: 'chicken' },
  { native: '牛肉', romanization: 'niúròu', english: 'beef' },
  { native: '猪肉', romanization: 'zhūròu', english: 'pork' },
  { native: '鱼', romanization: 'yú', english: 'fish' },
  { native: '蔬菜', romanization: 'shūcài', english: 'vegetables' },
  { native: '水果', romanization: 'shuǐguǒ', english: 'fruit' },
  { native: '咖啡', romanization: 'kāfēi', english: 'coffee' },
  { native: '啤酒', romanization: 'píjiǔ', english: 'beer' },
  { native: '牛奶', romanization: 'niúnǎi', english: 'milk' },

  // Common Objects
  { native: '书', romanization: 'shū', english: 'book' },
  { native: '手机', romanization: 'shǒujī', english: 'cell phone' },
  { native: '电脑', romanization: 'diànnǎo', english: 'computer' },
  { native: '钱', romanization: 'qián', english: 'money' },
  { native: '护照', romanization: 'hùzhào', english: 'passport' },
  { native: '地图', romanization: 'dìtú', english: 'map' },
  { native: '钥匙', romanization: 'yàoshi', english: 'key' },
  { native: '伞', romanization: 'sǎn', english: 'umbrella' },
  { native: '包', romanization: 'bāo', english: 'bag' },
];

const collegeVocab = [
  // Abstract Concepts
  { native: '正义', romanization: 'zhèngyì', english: 'justice' },
  { native: '自由', romanization: 'zìyóu', english: 'freedom/liberty' },
  { native: '平等', romanization: 'píngděng', english: 'equality' },
  { native: '责任', romanization: 'zérèn', english: 'responsibility' },
  { native: '权利', romanization: 'quánlì', english: 'rights' },
  { native: '义务', romanization: 'yìwù', english: 'duty/obligation' },
  { native: '道德', romanization: 'dàodé', english: 'morality' },
  { native: '伦理', romanization: 'lúnlǐ', english: 'ethics' },
  { native: '哲学', romanization: 'zhéxué', english: 'philosophy' },
  { native: '意识', romanization: 'yìshí', english: 'consciousness' },
  { native: '存在', romanization: 'cúnzài', english: 'existence' },
  { native: '本质', romanization: 'běnzhì', english: 'essence' },
  { native: '矛盾', romanization: 'máodùn', english: 'contradiction' },
  { native: '概念', romanization: 'gàiniàn', english: 'concept' },
  { native: '价值观', romanization: 'jiàzhíguān', english: 'values/worldview' },

  // Government & Society
  { native: '政治', romanization: 'zhèngzhì', english: 'politics' },
  { native: '经济', romanization: 'jīngjì', english: 'economy' },
  { native: '民主', romanization: 'mínzhǔ', english: 'democracy' },
  { native: '资本主义', romanization: 'zīběn zhǔyì', english: 'capitalism' },
  { native: '选举', romanization: 'xuǎnjǔ', english: 'election' },
  { native: '法律', romanization: 'fǎlǜ', english: 'law' },
  { native: '宪法', romanization: 'xiànfǎ', english: 'constitution' },
  { native: '税收', romanization: 'shuìshōu', english: 'taxation' },
  { native: '外交', romanization: 'wàijiāo', english: 'diplomacy' },
  { native: '国际关系', romanization: 'guójì guānxì', english: 'international relations' },
  { native: '舆论', romanization: 'yúlùn', english: 'public opinion' },
  { native: '贫富差距', romanization: 'pínfù chājù', english: 'wealth gap' },

  // Academic & Science
  { native: '研究', romanization: 'yánjiū', english: 'research' },
  { native: '实验', romanization: 'shíyàn', english: 'experiment' },
  { native: '理论', romanization: 'lǐlùn', english: 'theory' },
  { native: '假说', romanization: 'jiǎshuō', english: 'hypothesis' },
  { native: '证据', romanization: 'zhèngjù', english: 'evidence' },
  { native: '分析', romanization: 'fēnxī', english: 'analysis' },
  { native: '统计', romanization: 'tǒngjì', english: 'statistics' },
  { native: '论文', romanization: 'lùnwén', english: 'thesis/paper' },
  { native: '人工智能', romanization: 'réngōng zhìnéng', english: 'artificial intelligence' },
  { native: '环境', romanization: 'huánjìng', english: 'environment' },
  { native: '基因', romanization: 'jīyīn', english: 'gene' },
  { native: '进化', romanization: 'jìnhuà', english: 'evolution' },

  // Business & Economics
  { native: '利润', romanization: 'lìrùn', english: 'profit' },
  { native: '投资', romanization: 'tóuzī', english: 'investment' },
  { native: '股票', romanization: 'gǔpiào', english: 'stocks' },
  { native: '竞争', romanization: 'jìngzhēng', english: 'competition' },
  { native: '创业', romanization: 'chuàngyè', english: 'entrepreneurship' },
  { native: '谈判', romanization: 'tánpàn', english: 'negotiation' },
  { native: '合同', romanization: 'hétong', english: 'contract' },
  { native: '策略', romanization: 'cèlüè', english: 'strategy' },
  { native: '生产力', romanization: 'shēngchǎnlì', english: 'productivity' },
  { native: '市场', romanization: 'shìchǎng', english: 'market' },

  // Emotions & Psychology
  { native: '共情', romanization: 'gòngqíng', english: 'empathy' },
  { native: '偏见', romanization: 'piānjiàn', english: 'prejudice' },
  { native: '焦虑', romanization: 'jiāolǜ', english: 'anxiety' },
  { native: '孤独', romanization: 'gūdú', english: 'loneliness' },
  { native: '纠结', romanization: 'jiūjié', english: 'inner conflict/torn' },
  { native: '成就感', romanization: 'chéngjiù gǎn', english: 'sense of accomplishment' },
  { native: '自卑感', romanization: 'zìbēi gǎn', english: 'inferiority complex' },
  { native: '自尊', romanization: 'zìzūn', english: 'self-esteem' },
  { native: '动机', romanization: 'dòngjī', english: 'motivation' },
  { native: '认知', romanization: 'rènzhī', english: 'cognition' },

  // Advanced Adjectives
  { native: '复杂', romanization: 'fùzá', english: 'complex' },
  { native: '模糊', romanization: 'móhu', english: 'ambiguous/vague' },
  { native: '抽象', romanization: 'chōuxiàng', english: 'abstract' },
  { native: '具体', romanization: 'jùtǐ', english: 'concrete/specific' },
  { native: '客观', romanization: 'kèguān', english: 'objective' },
  { native: '主观', romanization: 'zhǔguān', english: 'subjective' },
  { native: '本质的', romanization: 'běnzhì de', english: 'essential/fundamental' },
  { native: '可持续的', romanization: 'kě chíxù de', english: 'sustainable' },
  { native: '划时代的', romanization: 'huà shídài de', english: 'epoch-making' },
  { native: '普遍', romanization: 'pǔbiàn', english: 'universal' },
];

const chinese = {
  id: 'chinese',
  name: 'Chinese',
  speechLang: 'zh-CN',
  speechRate: 0.82,
  preferredVoices: ['Tingting', 'Lili', 'Meijia', 'Huihui', 'Xiaoxiao'],
  hasRomanization: true,
  romanizationLabel: 'Show Pinyin',
  categories: [
    {
      id: 'tones', name: 'Pinyin & Tones', renderMode: 'grid',
      levels: { elementary: tones }
    },
    {
      id: 'characters', name: 'Common Characters', renderMode: 'grid',
      levels: { elementary: characters }
    },
    {
      id: 'phrases', name: 'Phrases', renderMode: 'list',
      levels: {
        elementary: elementaryPhrases,
        high_school: highSchoolPhrases,
        college: collegePhrases
      }
    },
    {
      id: 'vocabulary', name: 'Vocabulary', renderMode: 'list',
      levels: {
        elementary: elementaryVocab,
        high_school: highSchoolVocab,
        college: collegeVocab
      }
    }
  ]
};

export default chinese;
