export interface Yokai {
  name: string;
  japanese: string;
  category: string;
  dangerLevel: string;
  origin: string;
  description: string;
  appearance: string;
  abilities: string[];
  personality: string;
  story: string;
  relatedYokai: { name: string; slug: string }[];
  mediaAppearances: string[];
  folkloreOrigins?: string;
  habitat?: string;
  countermeasures?: string[];
}

export const yokaiData: Record<string, Yokai> = {
  'kitsune': {
    name: 'Kitsune',
    japanese: '狐',
    category: 'Bakemono',
    dangerLevel: 'Medium',
    origin: 'Japanese Folklore',
    description: 'Kitsune (狐) are intelligent fox spirits with the ability to shapeshift into human form. They are among the most famous and beloved yōkai in Japanese folklore, representing wisdom, longevity, and supernatural power.',
    appearance: 'Kitsune can appear as beautiful women, young men, or elderly scholars. When not in human form, they appear as ordinary foxes, but with supernatural insight. Some tales describe kitsune with multiple tails—the more tails a kitsune has, the more powerful it is. A nine-tailed kitsune is considered nearly divine.',
    abilities: [
      'Shapeshifting – Can transform into any human form perfectly',
      'Fox Fire – Can create ethereal flames that appear in various colors',
      'Possession – Can possess humans through their breath or food',
      'Illusion Creation – Masters of deception and misdirection',
      'Longevity – Can live for hundreds or even thousands of years'
    ],
    personality: 'Kitsune personalities vary widely. Some are mischievous tricksters who enjoy playing pranks on humans. Others are wise and benevolent, serving as guardians of certain places or people. The most powerful kitsune are often associated with Inari, the Shinto deity of rice and fertility.',
    story: 'There are countless kitsune stories, but one of the most famous is the tale of Genno, a kitsune who fell in love with a Buddhist monk named Myōren. Despite their different natures, they formed a deep bond that transcended the boundary between human and yōkai. When Myōren was attacked by jealous priests, Genno appeared in dreams to protect him, eventually using her supernatural powers to save his life. The story reminds us that love can bridge even the widest divides.',
    relatedYokai: [
      { name: 'Kappa', slug: 'kappa' },
      { name: 'Tanuki', slug: 'tanuki' },
      { name: 'Yūrei', slug: 'yurei' }
    ],
    mediaAppearances: [
      'Spirited Away (Chihiro)',
      'Pokemon (multiple fox-like creatures)',
      'Okami (video game)',
      'Naruto (multiple characters)'
    ],
    folkloreOrigins: 'Kitsune beliefs predate Buddhism in Japan, originating from the indigenous fox worship of Shinto. Over centuries, these beliefs merged with Buddhist and folk traditions, creating the rich mythology we know today.',
    habitat: 'Temples dedicated to Inari, rice fields, crossroads, and anywhere with strong spiritual energy'
  },

  'kasa-obake': {
    name: 'Kasa-obake',
    japanese: '傘妖怪',
    category: 'Tsukumogami',
    dangerLevel: 'Low',
    origin: 'Edo Period',
    description: 'Kasa-obake are animated umbrellas that come alive after reaching one hundred years of age. They are among the most cheerful and mischievous of the tsukumogami, household objects that gain spirit through longevity.',
    appearance: 'A kasa-obake appears as a traditional Japanese paper umbrella, but with a single leg protruding from its center, ending in a foot with a sandal. They typically have one large eye in the center of the umbrella top and a long, flexible tongue that they frequently extend and retract. Some versions show them with two eyes and one leg, while others depict multiple legs. Their wooden handles serve as arms when they need them.',
    abilities: [
      'Animated Movement – Can hop and bounce rather than walk',
      'Tongue Projection – Can extend their tongue to great lengths',
      'Eye Rotation – Their single eye can spin to see in all directions',
      'Umbrella Functions – Can open and close, creating wind effects',
      'Household Wandering – Can explore homes at night while residents sleep'
    ],
    personality: 'Despite their eerie appearance, kasa-obake are generally playful and childlike in temperament. They enjoy surprising people and creating harmless chaos. Their mischief stems from curiosity rather than malice—they simply want to experience the world beyond the storage closet. Many tales portray them as protective of children who respect them.',
    story: 'In Osaka, there was a merchant who kept an old paper umbrella for many years. On its hundredth birthday, the umbrella began to hop about the shop at night. Rather than being frightened, the merchant\'s daughter befriended the kasa-obake. Together, they would rearrange merchandise and play tricks on the merchant. When a burglar attempted to enter one night, the kasa-obake opened itself wide, creating such a flapping racket that the thief fled in terror. From then on, the family kept the umbrella out during storms, knowing their unusual guardian would protect them.',
    relatedYokai: [
      { name: 'Biwa-bokuboku', slug: 'biwa-bokuboku' },
      { name: 'Hōzuki', slug: 'hozuki' },
      { name: 'Kappa', slug: 'kappa' }
    ],
    mediaAppearances: [
      'GeGeGe no Kitarō (anime series)',
      'Yo-Kai Watch (video game)',
      'Kitaro\'s Strange Tales'
    ],
    folkloreOrigins: 'The concept of tsukumogami emerged in the Heian period (794-1185), but kasa-obake specifically became popular during the Edo period when paper umbrellas became common household items. The belief reflects the Shinto concept that spirits inhabit all things.',
    habitat: 'Homes, shops, temples, anywhere paper umbrellas are kept for extended periods',
    countermeasures: ['Respect old household items', 'Dispose of broken objects properly', 'Keep umbrellas dry and stored carefully']
  },

  'okiku': {
    name: 'Okiku',
    japanese: 'お菊',
    category: 'Yūrei',
    dangerLevel: 'High',
    origin: 'Edo Period',
    description: 'Okiku is the tragic ghost of a servant girl who was murdered and her body discarded in a well. Her spirit eternally counts plates, forever stuck at nine—never reaching ten. She is one of Japan\'s most famous and heart-wrenching yūrei.',
    appearance: 'Okiku manifests as a pale, ghostly woman in a white burial kimono, her hair disheveled and her expression one of infinite sorrow. She emerges from wells or dark places, her presence signaled by the sound of counting. Her hands, when visible, are said to be stained with the mud of the well. Some accounts describe her holding a single white plate.',
    abilities: [
      'Well Manifestation – Can emerge from any well or deep water source',
      'Counting Phantom – Creates the sound of counting plates when near',
      'Emotional Manipulation – Can induce feelings of guilt and sorrow',
      'Well Entity Calling – Can call to potential victims by name',
      'Sorrow Aura – Creates an atmosphere of profound melancholy'
    ],
    personality: 'Okiku\'s spirit is trapped in the moment of her death, endlessly replaying the act of counting—the only pleasant memory from her life as a servant who tended her master\'s dishes. She is not inherently malicious but is consumed by grief and injustice. Those who hear her counting often feel compelled to help her reach ten, only to be met with her anguished wail when the count resets.',
    story: 'In the Himeji domain, there lived a beautiful servant named Okiku who served a lord. Her only joy was counting his fine collection of ten precious plates. When a jealous rival accused her of stealing a plate, the lord had her killed and her body thrown into a well. Now, on moonlit nights, her spirit rises to count those same plates—nine, always nine—before releasing a terrible scream. Legends say if you can help her reach ten, she will finally find peace, but no one has ever succeeded.',
    relatedYokai: [
      { name: 'Yūrei', slug: 'yurei' },
      { name: 'Goryō', slug: 'goryo' },
      { name: 'Ubume', slug: 'ubume' }
    ],
    mediaAppearances: [
      'The Bell of Okiku (1912 film)',
      'Kaidan Restaurant (anime)',
      'Samurai Spirits (video game)',
      'Various Noh and Kabuki plays'
    ],
    folkloreOrigins: 'The legend of Okiku originated in the Himeji castle during the early Edo period. Her story became immortalized in various theatrical forms, becoming one of the "three major ghosts of Japan." The tale reflects period concerns about servant treatment and the importance of proper justice.',
    habitat: 'Wells, particularly those associated with castles and old estates, dark places with water',
    countermeasures: ['Avoid wells at night', 'Do not answer if called by an unknown voice', 'Do not attempt to count with her']
  },

  'jorogumo': {
    name: 'Jorōgumo',
    japanese: '女郎蜘蛛',
    category: 'Yōkai',
    dangerLevel: 'High',
    origin: 'Japanese Folklore',
    description: 'Jorōgumo are giant spiders that possess the ability to shapeshift into beautiful women. They weave their webs not in corners but in abandoned buildings and along mountain paths, waiting to capture unwary travelers.',
    appearance: 'In human form, a jorōgumo appears as an extraordinarily beautiful woman, often dressed in elegant kimono, with an almost hypnotic charm. However, those who look closely might notice subtle signs: shadows that move wrong, an extra set of legs briefly visible, or eyes that reflect light strangely. In true form, she is a spider the size of a large dog, with markings resembling a human face on her abdomen.',
    abilities: [
      'Shapeshifting – Can assume perfect human female form',
      'Web Spinning – Creates incredibly strong silk webs',
      'Voice Mimicry – Can call out to potential victims by name',
      'Hypnosis – Can entrance victims with her beauty',
      'Prey Capture – Can wrap victims in silk rapidly',
      'Venom – Her bite contains a paralytic toxin'
    ],
    personality: 'Jorōgumo are patient, cunning predators. They take their time choosing victims, often observing from afar before making contact. They enjoy the chase as much as the capture, leading some tales to suggest they gain satisfaction from psychological manipulation. However, they are not mindless killers—they have preferences and sometimes show unexpected mercy to those who show them respect.',
    story: 'In the mountains of Yoshino, a young woodcutter encountered a beautiful woman who claimed to be lost. He offered to guide her home, and they walked together for days. On the third night, the woman led him to an abandoned shrine. When the woodcutter fell asleep, he was awakened by sounds of silk stretching. Looking up through the rafters, he saw the woman\'s true form descending toward him. He remembered the talisman his grandmother had given him, and as the spider-woman descended, he revealed the charm. The spider screamed, turned back into the beautiful woman, and wept—she had not wanted to hurt him, but could not resist her nature. She asked him to burn the shrine and leave. He did, and the mountain was said to be peaceful after that.',
    relatedYokai: [
      { name: 'Nukekubi', slug: 'nukekubi' },
      { name: 'Yamanba', slug: 'yamanba' },
      { name: 'Kitsune', slug: 'kitsune' }
    ],
    mediaAppearances: [
      'Spirited Away (the transformed bathhouse)',
      'GeGeGe no Kitarō (anime)',
      'Various video games including Nioh'
    ],
    folkloreOrigins: 'Beliefs about spider spirits appear in many cultures, but the Japanese jorōgumo specifically developed from observations of the legitimate spider species Araneus ventricosus, which can reach significant size. The legends serve as warnings about trusting strangers, especially beautiful women encountered in remote places.',
    habitat: 'Abandoned buildings, mountain shrines, caves, old forests',
    countermeasures: ['Carry protective talismans', 'Do not follow strangers into isolated places', 'Never sleep in abandoned buildings', 'Show respect to all creatures']
  },

  'kappa': {
    name: 'Kappa',
    japanese: '河童',
    category: 'Kappa',
    dangerLevel: 'Low',
    origin: 'Regional',
    description: 'Kappa are water-dwelling yōkai with a distinctive dish-shaped head containing water that is the source of their power. Despite their fearsome reputation, they are often portrayed as mischievous rather than truly dangerous.',
    appearance: 'Kappa stand about the height of a ten-year-old child. Their most notable feature is the plate-like depression on top of their head, which holds sacred water from their river home. They have greenish or reddish-brown skin, a beak-like mouth, and webbed hands and feet. They smell of fish and mud. Despite their amphibious nature, they are said to be terrible swimmers when their head-water dries up.',
    abilities: [
      'Water Manipulation – Can control water in their environment',
      'Sumo Wrestling – Possess supernatural strength in their domain',
      'Shadow Diving – Can pull victims underwater',
      'Cucumber Attraction – Are irresistibly drawn to cucumbers',
      'Debt Memory – Must honor any formal bow or greeting'
    ],
    personality: 'Kappa are mischievous tricksters who enjoy sumo wrestling challenges and playing pranks on travelers. Despite their occasional cruelty, they follow a strict code of honor—they must bow when greeted, and a bow from a human will cause them to spill the water from their heads, rendering them powerless until refilled. Many kappa stories end with the creature becoming friends with whoever outwits them.',
    story: 'A farmer named Gorobei was walking home when a kappa challenged him to sumo. Knowing the kappa\'s strength, Gorobei agreed—but placed a cucumber on his head. The kappa, entranced by the cucumber, bowed to Gorobei to ask for a piece. The moment he bowed, all the water spilled from his head-dish, and he collapsed, unable to move. Gorobei, being kind, poured fresh water from his waterskin back into the kappa\'s dish. The kappa, grateful, became his friend and helped him in the fields for many years.',
    relatedYokai: [
      { name: 'Kitsune', slug: 'kitsune' },
      { name: 'Nure-onna', slug: 'nure-onna' },
      { name: 'Tengu', slug: 'tengu' }
    ],
    mediaAppearances: [
      'Pokémon (Psyduck and Squirtle lines)',
      'Nioh 2 (video game)',
      'GeGeGe no Kitarō (anime)',
      'Various Studio Ghibli films'
    ],
    folkloreOrigins: 'Kappa beliefs likely originated from observations of river otters, monkeys, and turtles—creatures that stand upright and live near water. The head-depression may represent a folk explanation for drowning victims who were found face-down in water.',
    habitat: 'Rivers, ponds, swamps, and any freshwater source throughout Japan',
    countermeasures: ['Place cucumbers at riverbanks as offering', 'Bow formally to make them spill water', 'Carry salt to repel them', 'Never accept their sumo challenges']
  },

  'tengu': {
    name: 'Tengu',
    japanese: '天狗',
    category: 'Tengu',
    dangerLevel: 'Medium',
    origin: 'Edo Period',
    description: 'Tengu are mountain-dwelling yōkai who guard sacred mountains and possess supernatural martial abilities. They range from grotesque long-nosed creatures to elegant humanoid figures, but all share a fierce independence and mastery of combat.',
    appearance: 'Tengu appear in two primary forms. The more common konoha-tengu have red skin, long noses, and wear monk\'s robes—they resemble a blend of human and crow. The more powerful daitengu appear more humanoid with long white beards and elaborate clothing, appearing almost deity-like. All tengu have wings and can fly, though they prefer not to unless necessary.',
    abilities: [
      'Flight – Can soar through mountain skies',
      'Martial Mastery – Unmatched in sword combat',
      'Shape Shifting – Can appear as monks, nobles, or even friends',
      'Magic – Can cast spells and create illusions',
      'Wind Control – Can summon gusts and storms',
      'Scroll Reading – Possess ancient supernatural knowledge'
    ],
    personality: 'Tengu are fiercely territorial and protective of their mountain domains. They despise liars, hypocrites, and those who defile sacred places. However, they also value honor and courage—if a human demonstrates genuine virtue, a tengu may become their mentor, teaching them martial arts or bestowing wisdom. Some tengu have even become guardians of specific temples.',
    story: 'The famous swordsman Tsukahara Bokuden once sought to learn from a tengu master. For forty-nine days, he climbed Mount Kurama, fasting and purifying himself. Finally, a daitengu appeared—not as a monster, but as an elderly hermit. He tested Bokuden\'s heart before accepting him as a student. For three years, the tengu taught the swordsman techniques no human could teach. When Bokuden descended the mountain, he had become the greatest swordsman in Japan, and he never forgot the lesson: true mastery comes only to those who approach learning with humility.',
    relatedYokai: [
      { name: 'Daitengu', slug: 'daitengu' },
      { name: 'Kappa', slug: 'kappa' },
      { name: 'Kitsune', slug: 'kitsune' }
    ],
    mediaAppearances: [
      'Nioh series (video games)',
      'Samurai Shodown (video games)',
      'GeGeGe no Kitarō (anime)',
      'Various historical woodblock prints'
    ],
    folkloreOrigins: 'Tengu originally derived from Chinese legends of heavenly dogs but evolved into uniquely Japanese mountain spirits. Over time, they transformed from demon-like beings to complex figures who could be either threats or teachers, depending on the human\'s character.',
    habitat: 'Sacred mountains, particularly Mount Kurama, Mount Tengu, and other spiritually significant peaks',
    countermeasures: ['Do not lie in the mountains', 'Show respect to all living things', 'Carry protective sutras', 'Never defile sacred sites']
  },

  'yurei': {
    name: 'Yūrei',
    japanese: '幽霊',
    category: 'Yūrei',
    dangerLevel: 'High',
    origin: 'Japanese Folklore',
    description: 'Yūrei are the restless spirits of humans who died with strong attachments to the living world. Bound by love, jealousy, or the desire for vengeance, they cannot move on to the afterlife and return to haunt the places of their lives.',
    appearance: 'By tradition, yūrei always appear in white burial kimono (kyōkake), with their hair disheveled and their feet not touching the ground. They are said to lack knees, which is why they float. The classic yūrei has a forelock of hair hanging over its face, obscuring its features. Their presence is often marked by coldness and the scent of incense.',
    abilities: [
      'Incorporeal Movement – Can pass through walls and float',
      'Poltergeist Effects – Can move objects and create sounds',
      'Possession – Can temporarily inhabit living bodies',
      'Atmospheric Manipulation – Create cold and damp conditions',
      'Dream Invasion – Can appear in the dreams of the living',
      'Weather Influence – Particularly associated with rain and fog'
    ],
    personality: 'Yūrei personalities reflect their death circumstances and the attachments that bind them. Some are tragic figures seeking only acknowledgment of their suffering, while others are consumed by rage and seek to harm the living. All share one thing: they are trapped, unable to move forward until their earthly business is resolved or their killer brought to justice.',
    story: 'In Kyoto, a young bride named Yoshino died on her wedding day from a broken heart, her lover having been forced to marry another. Her yūrei appears on the anniversary of her death, walking the streets in her wedding kimono, searching. Those who see her feel an overwhelming sadness. Some say that if you offer her a white flower, she will smile—and for a moment, the sorrow lifts. But by morning, she is gone, searching still.',
    relatedYokai: [
      { name: 'Onryō', slug: 'onryo' },
      { name: 'Goryō', slug: 'goryo' },
      { name: 'Okiku', slug: 'okiku' }
    ],
    mediaAppearances: [
      'Ringu (The Ring)',
      'Ju-on (The Grudge)',
      'Ghost (movie)',
      'Numerous J-horror films'
    ],
    folkloreOrigins: 'Yūrei beliefs derive from the Shinto concept that spirits must be properly tended after death. Untimely deaths, violent deaths, or those with unfinished business are believed to become yūrei. Buddhist concepts of karma and the cycle of rebirth add layers to understanding why spirits linger.',
    habitat: 'Places of their death, former homes, locations with strong emotional significance',
    countermeasures: ['Respect the dead and memorial practices', 'Do not die with unfinished business', 'Proper funeral rites must be observed', 'Consult priests or shamans for troubled spirits']
  }
};

export const getYokaiBySlug = (slug: string): Yokai | undefined => {
  return yokaiData[slug];
};

export const getAllYokaiSlugs = (): string[] => {
  return Object.keys(yokaiData);
};
