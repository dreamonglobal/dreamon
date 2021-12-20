export type Speaker = {
  name: string
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

const speakers: Speaker[] = [
  {
    name: 'Ben Swartz',
    slug: 'ben-swartz',
    image: 'https://dreamon.world/images/volunteers/ben.jpg',
    instagram: 'swartzyben',
    facebook: '',
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
    facebook: '',
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
    facebook: '',
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
    facebook: '',
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
    facebook: '',
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
    facebook: '',
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
    facebook: '',
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
    facebook: '',
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
    facebook: '',
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
    instagram: '',
    facebook: '',
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
    instagram: '',
    facebook: '',
    description:
      'Judy Zircher is the Abstinence Educator at Relationships Under Construction as well as the Founder of Purity Ally and Dream On: Speaker Collective Speaker and Author',
    title: 'Speaker Collective Speaker',
    location: 'Ohio',
    email: 'judy@dreamon.world',
    id: 11,
  },
]

export function conferenceSpeakers(): Speaker[] {
  return speakers
}
