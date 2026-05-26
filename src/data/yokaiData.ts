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
  },

  'tanuki': {
    name: 'Tanuki',
    japanese: '狸',
    category: 'Bakemono',
    dangerLevel: 'Low',
    origin: 'Japanese Folklore',
    description: 'Tanuki are mischievous raccoon dogs famous for their shapeshifting abilities and playful trickster nature. Unlike kitsune who transform with elegance, tanuki transformations are often comically imperfect—a leaf might appear where an ear should be, or a tail might peek out from a disguise.',
    appearance: 'Tanuki appear as large, rotund raccoon dogs with fluffy tails and expressive faces. When in human form, they often appear as monks, laborers, or travelers—but usually with some telltale animal feature remaining, such as very small eyes, a pot belly, or unusual footwear. They carry magical leaves on their heads that help them transform.',
    abilities: [
      'Shapeshifting – Can transform into humans, but often imperfectly',
      'Leaf Magic – Leaves on their head aid transformation',
      'Storytelling – Can spin elaborate tales to trick humans',
      'Expansion – Can make their belly grow to enormous sizes',
      'Shadow duplication – Can create multiple copies of themselves'
    ],
    personality: 'Tanuki are the comedians of the yōkai world—gentle tricksters who prefer harmless pranks to genuine harm. They enjoy sake, food, and good company. Their transformations often fail because they get distracted by food or drink. Despite their mischievousness, tanuki are essentially kind-hearted and will help those in need if properly thanked.',
    story: 'A poor woodcutter once found a tanuki in his trap. Feeling pity, he released it. That night, a tanuki in monk\'s robes visited his home and performed a dance that left gold coins in its wake. The woodcutter and his family lived well for months—until a merchant arrived, claiming the tanuki dance was his lost performance. The tanuki appeared and admitted it had borrowed the merchant\'s act. Rather than fighting, the two became friends, and the tanuki promised to teach the merchant new dances. Sometimes, the woodcutter still hears laughter in the forest at night.',
    relatedYokai: [
      { name: 'Kitsune', slug: 'kitsune' },
      { name: 'Kappa', slug: 'kappa' },
      { name: 'Hōzuki', slug: 'hozuki' }
    ],
    mediaAppearances: [
      'Puss in Boots (Shrek)',
      'Pom Poko (film)',
      'Okami (video game)',
      'Various Studio Ghibli references'
    ],
    folkloreOrigins: 'Tanuki have been part of Japanese folklore since the Heian period. They were depicted in the oldest surviving yōkai scroll, the "Hōjōki" texts mention them, and they became particularly popular in Edo period popular culture as comic figures.',
    habitat: 'Forests, mountains, rural villages, anywhere with food and sake',
    countermeasures: ['Leave offerings of sake', 'Share food when encountered', 'Do not set traps for them', 'They respond to kindness']
  },

  'nukekubi': {
    name: 'Nukekubi',
    japanese: '抜首',
    category: 'Bakemono',
    dangerLevel: 'High',
    origin: 'Japanese Folklore',
    description: 'Nukekubi are women whose heads detach and fly through the night seeking prey. Unlike their relatives the rokurokubi, whose necks stretch gradually, nukekubi have permanently separated heads that float freely through the darkness.',
    appearance: 'By day, nukekubi appear as normal women—often beautiful, elegant, and seemingly innocent. At night, their heads detach with a soft popping sound, revealing elongated necks like snakes. Their detached heads fly through darkness, their hair flowing behind them like a dark cloak, hunting for blood and flesh. Some accounts say they retain their beauty even in true form, others describe them as terrifying with long fangs.',
    abilities: [
      'Head Detachment – Their head separates completely at night',
      'Flight – Detached heads can fly through the air',
      'Night Vision – Enhanced sight in darkness',
      'Blood Detection – Can sense the blood of living creatures',
      'Neck Extension – Their necks can stretch to great lengths before detaching'
    ],
    personality: 'Nukekubi lead double lives, often serving as devoted wives, dutiful daughters, or hardworking servants by day. By night, their true nature emerges—predatory and bloodthirsty. Some nukekubi struggle with their dual nature, loving their families but unable to resist the hunger. Others embrace their darkness fully. All are tragic figures, cursed by circumstances beyond their control.',
    story: 'A young bride in the mountains seemed perfect—beautiful, dutiful, and beloved. But every morning, her husband noticed she seemed exhausted, and servants vanished without trace. One night, her husband hid in the rafters and watched. When the moon rose, the woman\'s head floated away, leaving a headless body behind. The head returned before dawn, reattaching itself as if nothing had happened. When confronted, the nukekubi wept. She had been cursed by her first husband, who she had murdered. Only death could free her. The husband, after long consideration, freed her with his sword. Her headless body held him that night, thanking him, before she dissolved into moonlight.',
    relatedYokai: [
      { name: 'Jorōgumo', slug: 'jorogumo' },
      { name: 'Yamanba', slug: 'yamanba' },
      { name: 'Yūrei', slug: 'yurei' }
    ],
    mediaAppearances: [
      'Kwaidan (film)',
      'Various horror manga',
      'GeGeGe no Kitarō (anime)',
      'Nioh (video game)'
    ],
    folkloreOrigins: 'Nukekubi legends may have originated from descriptions of sleep disorders, where people\'s eyes remained open and glassy, or from observations of certain snake species that move with snake-like necks. The duality of good and evil within one person reflects Buddhist concepts of the shadow self.',
    habitat: 'Villages, mountain homes, anywhere a woman might live secretly',
    countermeasures: ['Sleep in groups', 'Keep lights burning at night', 'Do not marry strangers', 'Watch for signs of exhaustion without cause']
  },

  'ubume': {
    name: 'Ubume',
    japanese: '姥',
    category: 'Yūrei',
    dangerLevel: 'Medium',
    origin: 'Heian Period',
    description: 'Ubume are ghosts of mothers who died in childbirth, returning to care for their children. They carry bundles that may contain either their living children or something far more unsettling. Their maternal love persists even beyond death, making them protective rather than malicious.',
    appearance: 'Ubume appear as weary women in dirty, bloodstained robes, carrying heavy bundles on their backs. They approach houses where children live alone or neglected. Some ubume carry their living children, who they rear even in death. Others carry bundles that, when examined, might contain stones or monsters. Their faces are often described as both loving and exhausted.',
    abilities: [
      'Mother\'s Intuition – Can find children anywhere',
      'Bundle Magic – Their bundles contain supernatural power',
      'Protective Presence – Can shield children from harm',
      'Emotional Drain – Sapping the life force of those who threaten children',
      'Night Movement – Only appear in darkness'
    ],
    personality: 'Ubume are driven by maternal love that transcends death. They seek out orphaned, neglected, or abandoned children, becoming ghost-mothers who care for them. While some stories portray ubume as genuinely protective spirits, others warn that their devotion can become consuming—they may steal children away from living mothers, or their bundles may contain something other than comfort. All share infinite sorrow at being unable to raise their children in life.',
    story: 'A young mother died in childbirth, leaving behind a crying infant. The husband, unable to care for the child alone, hired a wet nurse but struggled with grief. On moonless nights, a woman would appear at the window—his dead wife, whose spirit could not move on. She would enter, tend the baby, and nurse it with ghostly milk. When dawn came, she vanished. The husband learned to leave the window unlatched, and for years, the baby thrived while the mother watched over them. Eventually, he remarried and found new love. On the last night the ghost came, she simply stood at the window, watching, then bowed once and disappeared. The baby never remembered her, but the father never forgot.',
    relatedYokai: [
      { name: 'Okiku', slug: 'okiku' },
      { name: 'Yūrei', slug: 'yurei' },
      { name: 'Goryō', slug: 'goryo' }
    ],
    mediaAppearances: [
      'Various Japanese horror films',
      'Kaidan Restaurant (anime)',
      'Horror game adaptations',
      'Yōkai Watch'
    ],
    folkloreOrigins: 'Ubume emerge from the tragic circumstances of women who died during or after childbirth—a common occurrence in historical Japan. The bundles they carry represent the heavy burden of motherhood that continues even after death. The distinction between protective and predatory ubume may reflect different regional beliefs or the specific circumstances of each ghost.',
    habitat: 'Near homes with children, particularly orphaned or neglected ones',
    countermeasures: ['Care for all children properly', 'Honor mothers who died in childbirth', 'Do not interfere with ubume and their children', 'Leave offerings for the spirits of dead mothers']
  },

  'hozuki': {
    name: 'Hōzuki',
    japanese: 'ほうずき',
    category: 'Bakemono',
    dangerLevel: 'Medium',
    origin: 'Edo Period',
    description: 'Hōzuki are lantern spirits that possess paper lanterns, creating an eerie glow that guides travelers or leads them astray. They appear as floating paper lanterns without handles, drifting through darkness. Unlike dangerous yōkai, hōzuki are often misunderstood wanderers.',
    appearance: 'Hōzuki appear as traditional Japanese paper lanterns, but without handles—they float in the air at eye level. The light they emit is often a soft, inviting glow that can be seen from great distances. Some accounts describe small creatures inside the lanterns, barely visible, that control the floating flames. They appear most commonly on foggy nights or in deep forests.',
    abilities: [
      'Guided Light – Can lead people through darkness',
      'Floating – Can drift through the air without support',
      'Illumination – Their light reveals hidden things',
      'Luring – Can draw people deeper into forests',
      'Lantern Possession – Can inhabit any paper lantern'
    ],
    personality: 'Hōzuki have mercurial temperaments—they might help one traveler and lead another astray for no apparent reason. Some believe they are testing the nature of those they encounter, while others say their decisions are random. They enjoy playing pranks but rarely cause serious harm. A hōzuki that has guided many travelers becomes wise and benevolent; one that has led many to doom becomes malevolent.',
    story: 'A traveling monk lost his way in a vast forest as night fell. A small lantern appeared before him, floating gently, and began to drift forward. He followed it for hours, through paths he had never seen. When he emerged from the forest at dawn, he found himself at the gates of a famous temple. The lantern floated once around him, then disappeared into thin air. He entered the temple and became its most devoted monk, telling all who visited about the lantern that had saved him. Years later, he heard of another traveler who had followed a lantern into the same forest and never returned. The same light, it seemed, guided some and devoured others.',
    relatedYokai: [
      { name: 'Kasa-obake', slug: 'kasa-obake' },
      { name: 'Biwa-bokuboku', slug: 'biwa-bokuboku' },
      { name: 'Hitodama', slug: 'hitodama' }
    ],
    mediaAppearances: [
      'Natsume\'s Book of Friends',
      'Various yōkai media',
      'Video game adaptations',
      'Children\'s folktales'
    ],
    folkloreOrigins: 'Hōzuki likely originated from the will-o\'-the-wisp phenomenon combined with Japanese beliefs about lantern spirits. They became popular in the Edo period when paper lanterns became common. The dual nature of guiding and leading astray reflects the Buddhist concept that spirits are neither good nor evil, but respond to the intentions they encounter.',
    habitat: 'Forests, mountain paths, places where travelers might get lost, near ancient shrines',
    countermeasures: ['Carry your own light source', 'Thank any lantern that helps you', 'Do not follow lights blindly', 'Offer respect to wandering spirits']
  },

  'yamanba': {
    name: 'Yamanba',
    japanese: '山姥姥',
    category: 'Bakemono',
    dangerLevel: 'Medium',
    origin: 'Regional',
    description: 'Yamanba are mountain hags who live in deep forests and steep mountains. They cook human flesh in great pots and have terrible long nails. Despite their fearsome reputation, some tales portray them as wisdom-bearers who can be bargained with, though the price is always steep.',
    appearance: 'Yamanba appear as ancient crones with wild, tangled hair, long curved nails on both fingers and toes, and bodies wrapped in tattered cloth. They are often depicted with sagging skin and sunken eyes that nonetheless hold ancient wisdom. Some accounts describe them as once beautiful women who have lived so long in the mountains that they have become twisted. They often wear leaves in their hair and carry baskets for gathering.',
    abilities: [
      'Mountain Knowledge – Know every path in their domain',
      'Cooking Magic – Their pots create supernatural stews',
      'Transformation – Can appear as old women or beautiful maidens',
      'Wisdom Transfer – Can share knowledge for a price',
      'Claw Attacks – Their long nails can be deadly weapons'
    ],
    personality: 'Yamanba are neither purely evil nor benevolent—they are the embodiment of mountain wisdom, which is often harsh and uncompromising. They judge those who enter their domain, sometimes helping the worthy and sometimes devouring the foolish. Some yamanba have become guardians of secret places, serving as keepers of ancient knowledge. Their cooking, while often featuring human flesh in tales, can also be healing elixirs for those who earn their trust.',
    story: 'A wandering samurai climbed a mountain seeking a master who could teach him the secret sword techniques. Instead, he found an old woman stirring a great pot. She offered him food. Suspicious, he asked what was cooking. "The same thing that happens to all who climb this mountain without purpose," she replied. He prepared to fight, but she simply laughed and added, "unless they are honest." He admitted his true purpose—to become stronger than his brother, who had humiliated him. The yamanba stirred the pot and said, "Your brother will always be stronger, unless you defeat him with something he cannot fight." She handed him a single drop of the stew. "Wisdom. Now go." He drank and descended, finding his brother waiting. He smiled, bowed, and walked away. His brother never understood why.',
    relatedYokai: [
      { name: 'Nukekubi', slug: 'nukekubi' },
      { name: 'Jorōgumo', slug: 'jorogumo' },
      { name: 'Daitengu', slug: 'daitengu' }
    ],
    mediaAppearances: [
      'Princess Mononoke (film)',
      'Various action games',
      'Kabuki plays',
      'Yōkai comics'
    ],
    folkloreOrigins: 'Yamanba may have originated from mountain goddesses who became corrupted over time, or from stories of abandoned elderly women in rural areas who survived by foraging in the mountains. The combination of nurturing and predatory imagery reflects the duality of nature—both life-giving and life-taking.',
    habitat: 'Deep mountains, steep cliffs, remote forests',
    countermeasures: ['Approach with respect', 'Tell the truth about your purpose', 'Do not steal from their pots', 'Ask for what you need clearly']
  },

  'biwa-bokuboku': {
    name: 'Biwa-bokuboku',
    japanese: '琵琶 Bokuboku',
    category: 'Tsukumogami',
    dangerLevel: 'Medium',
    origin: 'Heian Period',
    description: 'Biwa-bokuboku are haunted biwa (Japanese lute) instruments that walk about at night, speaking of fate and fortune. A spirit inhabits the instrument after its owner died with strong attachments to music. They wander the world, playing and prophesying.',
    appearance: 'A biwa-bokuboku appears as a traditional Japanese biwa, but with small legs that allow it to walk. It moves by hopping or shuffling along, occasionally pausing to strum its strings. The sounds it produces are haunting, combining music with fragments of words—fortunes, warnings, and riddles. Some versions appear covered in dust and wear, others shine as if newly made.',
    abilities: [
      'Walking – The instrument can move on its own',
      'Musical Prophecy – The music it plays tells the future',
      'Speech – It can speak in riddles and prophecy',
      'Haunting Sound – Its music draws listeners',
      'Memory Reading – Can sense the history of those who hear it'
    ],
    personality: 'Biwa-bokuboku are melancholic spirits, bound to wander after their original owners died. They speak of fate because they understand it—they have seen beyond the veil. Their prophecies are rarely welcome, as they often speak of death, loss, or change that the listener cannot avoid. They bear their burden with quiet dignity, playing for anyone who will listen, searching for someone who might finally set them free.',
    story: 'A blind musician played the biwa for the court, beloved by all. When he died, his biwa was placed in a temple storage. For years, monks heard strange music in the night—but when they searched, found only an old instrument in the corner. One night, a young musician heard the ghostly biwa playing in the temple garden. He followed the sound and found the instrument sitting alone, its strings vibrating without touch. "Play with me," the biwa said. "Your master loved you, but he is gone. Play for him." The young musician understood—he began to play, and together they created music that moved the spirits of the dead to rest. The biwa, finally unburdened, fell silent. But sometimes, on moonlit nights, you can still hear distant music in old temples.',
    relatedYokai: [
      { name: 'Kasa-obake', slug: 'kasa-obake' },
      { name: 'Hōzuki', slug: 'hozuki' },
      { name: 'Yūrei', slug: 'yurei' }
    ],
    mediaAppearances: [
      'Various yōkai picture scrolls',
      'Modern yōkai games',
      'Anime adaptations',
      'Historical literature'
    ],
    folkloreOrigins: 'Biwa-bokuboku originated during the Heian period when biwa musicians were common at court. When musicians died with unfinished compositions or unexpressed emotions, their attachment to the instrument created tsukumogami. The wandering and prophesying elements reflect beliefs about the power of music to reveal hidden truths.',
    habitat: 'Temples, old homes, wherever music was once beloved, forests at night',
    countermeasures: ['Play music with passion', 'Honor your instruments', 'Do not leave musical instruments unplayed', 'If you hear strange music at night, listen before you flee']
  },

  'funayurei': {
    name: 'Funayūrei',
    japanese: '船幽霊',
    category: 'Yūrei',
    dangerLevel: 'High',
    origin: 'Japanese Folklore',
    description: 'Funayūrei are ghosts of those who drowned at sea, appearing as phantom ships without crews. They signal to other vessels, luring sailors to their doom. Some say seeing a funayūrei brings either great fortune or certain death—there is no middle ground.',
    appearance: 'Funayūrei appear as ghostly ships gliding silently across the water. They are often described as having tattered sails, broken masts, and decks covered in seaweed and sea creatures. Some say the ships glow with an eerie phosphorescence; others describe them as darker than the surrounding night, absorbing light rather than reflecting it. Sailors who board them find empty decks and phantom whispers.',
    abilities: [
      'Ship Manifestation – Appear as complete phantom vessels',
      'Signal Lights – Can create lights to attract sailors',
      'Fog Generation – Can create thick fog banks',
      'Crew Summoning – Can call drowned sailors as crew',
      'Ship Navigation – Know all sea routes, including dangerous ones'
    ],
    personality: 'Funayūrei are driven by the desperate longing of the drowned to find rest. They signal to passing ships because they hope each will contain someone who can help them—or someone who deserves to join them. Some funayūrei are vengeful, seeking to drown others as they drowned. Others are desperate pleas for help, trapped between worlds. All are bound by the sea, unable to leave until their story is complete.',
    story: 'A captain\'s ship was caught in a storm and sank with all hands. The captain, who had died clinging to a piece of debris, found himself aboard a ghostly vessel—his own ship, but empty and silent. Other drowned sailors appeared, asking where they were going. He had no answer. For years, his phantom ship sailed the waters, signaling to passing vessels. Some ships followed and were destroyed. Others turned away and survived. A priest who encountered the funayūrei asked what they wanted. The captain replied, "We want to know if our families survived. We want to know if anyone remembered us." The priest promised to inquire. He spent the rest of his life visiting coastal villages, asking after families lost at sea, and returning to the water to report. Eventually, the captain nodded and his ship dissolved into morning mist.',
    relatedYokai: [
      { name: 'Yūrei', slug: 'yurei' },
      { name: 'Onryō', slug: 'onryo' },
      { name: 'Nure-onna', slug: 'nure-onna' }
    ],
    mediaAppearances: [
      'Pirates of the Caribbean references',
      'Japanese naval horror films',
      'Yōkai games',
      'Maritime folklore collections'
    ],
    folkloreOrigins: 'Funayūrei emerged from the tragic reality of sea disasters in Japanese history. The nation\'s reliance on fishing and trade meant that shipwrecks and drownings were common, and the spirits of those lost at sea became part of maritime folklore. The ambiguity of fortune versus doom reflects the unpredictable nature of the sea itself.',
    habitat: 'Seas, oceans, particularly near shipwreck sites and during storms',
    countermeasures: ['Do not follow phantom lights', 'Pray for drowned souls before voyages', 'Throw offerings overboard', 'If you see a ship without people, sail the other way']
  },

  'goryo': {
    name: 'Goryō',
    japanese: '御霊',
    category: 'Yūrei',
    dangerLevel: 'Medium',
    origin: 'Heian Period',
    description: 'Goryō are vengeful spirits of nobles who died with strong grudges, descending from the heavens to punish those who wronged them. They are powerful and capricious, capable of bestowing blessings or curses based on how they are treated.',
    appearance: 'Goryō appear in noble attire—often wearing elaborate robes and caps, appearing as refined aristocrats even in death. Some manifests as terrifying figures with fierce expressions; others remain calm and regal. They are associated with celestial phenomena—appearing during eclipses, auroras, or other unusual sky events. Their presence is often accompanied by strange lights or music.',
    abilities: [
      'Heavenly Descent – Can come down from the celestial realm',
      'Cursing Power – Can place powerful curses on offenders',
      'Blessing Power – Can grant good fortune to those who honor them',
      'Possession – Can possess humans, especially during rituals',
      'Weather Control – Can influence atmospheric conditions'
    ],
    personality: 'Goryō are the aristocrats of the spirit world—their grudges are grand, their vengeance is proportionate, and their standards are exacting. They judge by the codes of the Heian court, which can seem alien to modern sensibilities. Honoring them brings rewards; insulting them brings destruction. They are not malicious for the sake of it—they simply cannot tolerate injustice, especially when it involves their former status. This makes them unpredictable: a genuine apology might move them, but an insincere one enrages them.',
    story: 'A court noble was murdered by rivals who claimed he had plotted against the emperor. His name was erased from records, his family stripped of titles. His spirit, however, could not rest—his name had been slandered. For years, the rivals suffered misfortune—accidents, illnesses, the deaths of children. Eventually, a priest conducted a ceremony to appease the goryō. He read the noble\'s true story—how he had been framed, how the rivals had twisted truth. The goryō appeared, acknowledging the priest\'s honesty. "My name has been restored," it said, and ascended back to the heavens. The rivals, freed from the curse, confessed their crimes. The noble\'s descendants, found living in poverty, were restored to their rightful place.',
    relatedYokai: [
      { name: 'Yūrei', slug: 'yurei' },
      { name: 'Onryō', slug: 'onryo' },
      { name: 'Okiku', slug: 'okiku' }
    ],
    mediaAppearances: [
      'Heian period dramas',
      'Video games (Touhou series)',
      'Anime (Natsume\'s Book of Friends)',
      'Historical horror'
    ],
    folkloreOrigins: 'Goryō emerged from Heian period beliefs about the power of aristocratic spirits. When nobles were wronged—especially politically—they were believed to become dangerous spirits capable of affecting the living world. The connection to celestial phenomena reflects beliefs that the aristocratic dead remain connected to heavenly authority.',
    habitat: 'Temples, courts, places of historical power, during celestial events',
    countermeasures: ['Treat all people with fairness', 'Do not slander others', 'Honor the memory of the dead', 'Perform ceremonies for vengeful spirits']
  }
};

export const getYokaiBySlug = (slug: string): Yokai | undefined => {
  return yokaiData[slug];
};

export const getAllYokaiSlugs = (): string[] => {
  return Object.keys(yokaiData);
};
