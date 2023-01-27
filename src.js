'use strict'

const firstPhrase = [
    { text: 'Champ,',                      emoji: '🏅' }, 
    { text: 'Fact:',                       emoji: '🤓' },
    { text: 'Everybody says',              emoji: '👯' },
    { text: 'Dang...',                     emoji: '😏' },
    { text: 'Check it:',                   emoji: '📝' },
    { text: 'Just saying...',              emoji: '💬' },
    { text: 'Superstar,',                  emoji: '🕺️' },
    { text: 'Tiger,',                      emoji: '🐯' },
    { text: 'Self,',                       emoji: '🤳' },
    { text: 'Know this:',                  emoji: '🧑‍🏫' },
    { text: 'News alert:',                 emoji: '📰🚨' },
    { text: 'Girl,',                       emoji: '💁‍♀️' },
    { text: 'Ace,',                        emoji: '🧑‍✈️' },
    { text: 'Excuse me but',               emoji: '😳' },
    { text: 'Experts agree:',              emoji: '👍' },
    { text: 'In my opinion',               emoji: '🤔' },
    { text: 'Hear ye, hear ye:',           emoji: '📣' },
    { text: 'Okay, listen up:',            emoji: '👂' }
];

const secondPhrase = [
    { text: 'the mere idea of you',        emoji: '💡' },
    { text: 'your soul',                   emoji: '😇' },
    { text: 'your hair today',             emoji: '💇' },
    { text: 'everything you do',           emoji: '🦸' },
    { text: 'your personal style',         emoji: '😎' },
    { text: 'every thought you have',      emoji: '💭' },
    { text: 'that sparkle in your eye',    emoji: '👁️✨' },
    { text: 'your presence here',          emoji: '🫶' },
    { text: 'what you got going on',       emoji: '👋' },
    { text: 'the essential you',           emoji: '🧘' },
    { text: "your life's journey",         emoji: '🗺️' },
    { text: 'that saucy personality',      emoji: '🥵' },
    { text: 'your DNA',                    emoji: '🧬' },
    { text: 'that brain of yours',         emoji: '🧠' },
    { text: 'your choice of attire',       emoji: '🧣' },
    { text: 'the way you roll',            emoji: '🤸' },
    { text: 'whatever your secret is',     emoji: '🤫' },
    { text: "all of y'all",                emoji: '👪' }
];

const thirdPhrase = [
    { text: 'has serious game,',           emoji: '🤾️' },
    { text: 'rains magic,',                emoji: '🌧️🪄' },
    { text: 'deserves the Nobel Prize,',   emoji: '🏆' },
    { text: 'raises the roof,',            emoji: '🙌' },
    { text: 'breeds miracles,',            emoji: '💞' },
    { text: 'is paying off big time,',     emoji: '🤑' },
    { text: 'shows mad skills,',           emoji: '🧗' },
    { text: 'just shimmers,',              emoji: '🌟' },
    { text: 'is a national treasure,',     emoji: '🪙' },
    { text: 'gets the party hopping,',     emoji: '🎉' },
    { text: 'is the next big thing,',      emoji: '🤠' },
    { text: 'roars like a lion,',          emoji: '🐯️' },
    { text: 'is a rainbow factory,',       emoji: '🌈' },
    { text: 'is made of diamonds,',        emoji: '💎️' },
    { text: 'makes birds sing,',           emoji: '🐦' },
    { text: 'should be taught in school,', emoji: '🏫' },
    { text: "makes my world go 'round,",   emoji: '🌎' },
    { text: 'is 100% legit,',              emoji: '💯️' }
];

const fourthPhrase = [
    { text: '24/7.',                       emoji: '📅' },
    { text: 'can I get an amen?',          emoji: '🙏' },
    { text: "and that's a fact.",          emoji: '📊' },
    { text: 'so treat yourself.',          emoji: '💸' },
    { text: 'you feel me?',                emoji: '🫡' },
    { text: "that's just science.",        emoji: '🔬' },
    { text: 'would I lie?',                emoji: '🤥' },
    { text: 'for reals.',                  emoji: '🚫🧢' },
    { text: 'mic drop.',                   emoji: '🫳🎤' },
    { text: 'you hidden gem.',             emoji: '💎' },
    { text: 'snuggle bear.',               emoji: '🧸' },
    { text: 'period.',                     emoji: '🧨' },
    { text: "now let's dance.",            emoji: '💃️' },
    { text: 'high five.',                  emoji: '✋' },
    { text: 'say it again!',               emoji: '🔁' },
    { text: 'according to CNN.',           emoji: '📺' },
    { text: 'so get used to it.',          emoji: '💪️' }
];

const randomEntry = (list) => {
    return list[Math.floor(Math.random() * list.length)]
}

const phrase = () => {
    let selections = [ randomEntry(firstPhrase),
                       randomEntry(secondPhrase),
                       randomEntry(thirdPhrase),
                       randomEntry(fourthPhrase) ];
    let emojis = [];
    let phrase = [];
    let firstEmoji = '';

    selections.forEach((item, index) => {
      // Always use the first phrase's emoji for cohesiveness
      if(index === 0) {
        firstEmoji = item.emoji;
      // Otherwise build a random list of emojis to pick from for the end-cap
      } else {
        emojis.push(item.emoji);
      }
      phrase.push(item.text);
    });

    let secondEmoji = randomEntry(emojis);
    return `${firstEmoji} ${phrase.join(' ')} ${secondEmoji}`
}

const btnClick = () => {
    let output = document.getElementById('content');
    output.innerText=phrase();
}