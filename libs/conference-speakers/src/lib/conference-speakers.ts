export type SpeakerName =
  | 'Ben Swartz'
  | 'Ashley Powell'
  | 'Hanna Swartz'
  | 'Daniel Lucien'
  | 'Lucas Gray'
  | 'Lilli Gray'
  | 'Derek Spencer'
  | 'John Peak'
  | 'Ty Watson'
  | 'Rob Kennedy'
  | 'Judy Zircher'
  | 'Zac Howard'
  | 'Craig Flack'
  | 'Jason Harris'

export type Speaker = {
  name: SpeakerName
  slug: string
  description: string
  location: 'Ohio' | 'Tennessee' | 'Florida' | 'Arkansas' | 'Kentucky'
  image: string
  title: string
  email: string
  id: number
  facebook: string
  instagram: string
}

export const speakers: Speaker[] = [
  {
    name: 'Ben Swartz',
    slug: 'ben-swartz',
    image: 'https://dreamon.world/images/volunteers/ben.jpg',
    instagram: 'swartzyben',
    facebook: 'https://www.facebook.com/benjamin.swartz.7',
    description:
      'Ben is the Co-Founder and President of Dream On. He also is a Dream On: Speaker Collective International Speaker',
    title: 'President & Co-Founder of Dream On',
    location: 'Ohio',
    email: 'ben@dreamon.world',
    id: 1,
  },
  {
    name: 'Ashley Powell',
    slug: 'ashley-powell',
    image: 'https://dreamon.world/images/volunteers/ashley.jpg',
    instagram: 'AshleyLeePowell',
    facebook: 'https://www.facebook.com/ashley.l.powell.5',
    description:
      'Ashley is a Co-Host of the DO Moms Podcast and Dream On: Speaker Collective International Speaker',
    title: 'Executive Director of Outreach',
    location: 'Ohio',
    email: 'ashley@dreamon.world',
    id: 2,
  },
  {
    name: 'Hanna Swartz',
    slug: 'hanna-swartz',
    image: 'https://dreamon.world/images/volunteers/hanna.jpg',
    instagram: '',
    facebook: 'https://www.facebook.com/hanna.hager.37',
    description:
      'Hanna is a Co-Host of the DO Moms Podcast and Dream On: Speaker Collective Speaker',
    title: 'Chief Financial Officer',
    location: 'Ohio',
    email: 'hanna@dreamon.world',
    id: 3,
  },
  {
    name: 'Daniel Lucien',
    slug: 'daniel-lucien',
    image:
      'https://scontent-iad3-1.xx.fbcdn.net/v/t1.6435-9/117158952_10158900491012848_3132891314915000015_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=730e14&_nc_ohc=Pvtr0-F62vwAX_08NCZ&_nc_ht=scontent-iad3-1.xx&oh=66f16d19b75b604e969858d48951066a&oe=61D4221C',
    instagram: 'dannylucien',
    facebook: 'https://www.facebook.com/danny.lucien',
    description:
      'Pastor Daniel Lucien serves as Lead Pastor at Fostoria Church of God, is an International Speaker and Dream On Event Coordinator',
    title: 'Director of Pastoral Dreaming',
    location: 'Ohio',
    email: 'daniel@dreamon.world',
    id: 4,
  },
  {
    name: 'Lucas Gray',
    slug: 'lucas-gray',
    image: 'https://dreamon.world/images/volunteers/lucas-gray.jpg',
    instagram: 'lucasgray95',
    facebook: 'https://www.facebook.com/lucas.gray.37',
    description:
      'Lucas Gray and his wife Lilli serve as the Worship Pastors at Lima First Church of God and a Dream On: Music Collective Artists',
    title: 'Music Collective Artist',
    location: 'Ohio',
    email: 'lucas@dreamon.world',
    id: 5,
  },
  {
    name: 'Lilli Gray',
    slug: 'lilli-gray',
    image: 'https://dreamon.world/images/volunteers/lilli-gray.jpg',
    instagram: 'lillirosegray',
    facebook: 'https://www.facebook.com/lilli.r.bucher',
    description:
      'Lilli Gray and her husband Lucas serve as the Worship Pastors at Lima First Church of God and a Dream On: Music Collective Artists',
    title: 'Music Collective Artist',
    location: 'Ohio',
    email: 'lilli@dreamon.world',
    id: 6,
  },
  {
    name: 'Derek Spencer',
    slug: 'derek-spencer',
    image:
      'https://scontent-iad3-1.xx.fbcdn.net/v/t1.6435-9/120026914_3875682085780088_336847840537177704_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=174925&_nc_ohc=pqwOv7MBlL0AX8IuFV0&_nc_ht=scontent-iad3-1.xx&oh=f674869e6eba9ff258d1b4e5d7e35cdf&oe=61CD26E6',
    instagram: 'derekaspencer_',
    facebook: 'https://www.facebook.com/derek.spencer.129',
    description:
      'Derek Spencer serves as the Student Pastor at Real Life Church in Bowling Green, Kentucky and a Dream On: Music Collective Artist',
    title: 'Music Collective Artist',
    location: 'Kentucky',
    email: 'derek@dreamon.world',
    id: 7,
  },
  {
    name: 'John Peak',
    slug: 'john-peak',
    image: 'https://dreamon.world/images/volunteers/john.jpg',
    instagram: 'johnpeak',
    facebook: 'https://www.facebook.com/jpeak',
    description:
      'John Peak serves as the Director of Television & Media at Higher Ground Baptist Church in Bristol, Tennesse as well as the Director of Media at Dream On',
    title: 'Director of Media',
    location: 'Tennessee',
    email: 'john@dreamon.world',
    id: 8,
  },
  {
    name: 'Ty Watson',
    slug: 'ty-watson',
    image: 'https://dreamon.world/images/volunteers/ty.jpg',
    instagram: 'tythebuckeye24',
    facebook: 'https://www.facebook.com/profile.php?id=100074568648529',
    description:
      'Ty Watson serves as a Pastor at New Life Church in Siloam Springs Arkansas and Dream On: Speaker Collective Speaker',
    title: 'Speaker Collective Speaker',
    location: 'Arkansas',
    email: 'ty@dreamon.world',
    id: 9,
  },
  {
    name: 'Rob Kennedy',
    slug: 'rob-kennedy',
    image: 'https://dreamon.world/images/volunteers/rob-kennedy.jpg',
    instagram: 'robkennedy6.33',
    facebook: 'https://www.facebook.com/kennedy3',
    description:
      'Rob Kennedy serves as the Senior Pastor at The Rock Community Church & Transformation Center in Saint Petersburg Florida as well as Dream On: Speaker Collective International Speaker and Author',
    title: 'Speaker Collective Speaker',
    location: 'Florida',
    email: 'rob@dreamon.world',
    id: 10,
  },
  {
    name: 'Judy Zircher',
    slug: 'judy-zircher',
    image:
      'https://scontent-iad3-1.xx.fbcdn.net/v/t1.6435-9/71952426_1634553183344720_4963106500353458176_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=QRhJWvlmQOgAX9LtTyF&_nc_ht=scontent-iad3-1.xx&oh=6185b0141ab0eaaadafe7dc167fb656e&oe=61CF0076',
    instagram: 'purityally',
    facebook: 'https://www.facebook.com/purityallyministries',
    description:
      'Judy Zircher is the Abstinence Educator at Relationships Under Construction as well as the Founder of Purity Ally and Dream On: Speaker Collective Speaker and Author',
    title: 'Speaker Collective Speaker',
    location: 'Ohio',
    email: 'judy@dreamon.world',
    id: 11,
  },
  {
    name: 'Craig Flack',
    slug: 'craig-flack',
    image:
      'http://conference.dreamon.world/static/64c37edb4575a86c608d8fc0e74ea085/4ba8b/craig-flack.webp',
    instagram: 'freakin_beautiful_woodshop',
    facebook: 'https://www.facebook.com/Craig.R.Flack',
    description:
      'Craig Flack is the Senior Pastor of Celina First Church of God, Former School Board President and Author',
    title: 'Speaker Collective Speaker',
    location: 'Ohio',
    email: 'craigflack@gmail.com',
    id: 12,
  },
  {
    name: 'Jason Harris',
    slug: 'jason-harris',
    image:
      'http://conference.dreamon.world/static/bc9e31fcd71b0bb2d600d7276306b5a2/4ba8b/jason-harris.webp',
    instagram: 'jsonharris',
    facebook: 'https://www.facebook.com/jason.harris.fb',
    description:
      'Jason Harris is the Host of the Forecast Podcast and a Dream On: Speaker Collective Speaker',
    title: 'Speaker Collective Speaker',
    location: 'Ohio',
    email: 'jason@dreamon.world',
    id: 13,
  },
  {
    name: 'Zac Howard',
    slug: 'zac-howard',
    image: 'https://dreamon.world/images/volunteers/zac-howard.jpg',
    instagram: 'https://www.instagram.com/zacandemilyhowardworship/',
    facebook: 'https://www.facebook.com/DOMusicCollective',
    description:
      'Zac Howard and his wife Emily serve as the Worship Pastors at Woodlawn Church in Canton Ohio and a Dream On: Music Collective Artists',
    title: 'Speaker Collective Speaker',
    location: 'Ohio',
    email: 'zac@dreamon.world',
    id: 14,
  },
]
