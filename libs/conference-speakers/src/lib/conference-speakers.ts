export type SpeakerName =
  | 'Ben Swartz'
  | 'Ashley Powell'
  | 'Hanna Swartz'
  | 'Daniel Lucien'
  | 'Lucas Gray'
  | 'Lilli Gray'
  | 'Derek Spencer'
  | 'John Peak'
  | 'Judy Zircher'
  | 'Zac Howard'
  | 'Emily Howard'
  | 'Craig Flack'
  | 'Jason Harris'
  | 'Garrett Gaton'
  | 'Jay Turner'
  | 'Wes Woods'
  | 'Nathan Thompson'
  | 'Joyce Peak'

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
    image: 'https://dreamon.world/images/volunteers/daniel-lucien.jpg',
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
    id: 5,
  },
  {
    name: 'Emily Howard',
    slug: 'emily-howard',
    image: 'https://dreamon.world/images/volunteers/emily-howard.jpg',
    instagram: 'https://www.instagram.com/zacandemilyhowardworship/',
    facebook: 'https://www.facebook.com/DOMusicCollective',
    description:
      'Emily Howard and her husband Zac serve as the Worship Pastors at Woodlawn Church in Canton Ohio and a Dream On: Music Collective Artists',
    title: 'Speaker Collective Speaker',
    location: 'Ohio',
    email: 'zac@dreamon.world',
    id: 6,
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
    id: 7,
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
    id: 8,
  },
  {
    name: 'Derek Spencer',
    slug: 'derek-spencer',
    image: 'https://dreamon.world/images/volunteers/derek-spencer.jpg',
    instagram: 'derekaspencer_',
    facebook: 'https://www.facebook.com/derek.spencer.129',
    description:
      'Derek Spencer serves as the Student Pastor at Real Life Church in Bowling Green, Kentucky and a Dream On: Music Collective Artist',
    title: 'Music Collective Artist',
    location: 'Kentucky',
    email: 'derek@dreamon.world',
    id: 9,
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
    id: 10,
  },
  {
    name: 'Judy Zircher',
    slug: 'judy-zircher',
    image:
      'http://conference.dreamon.world/static/fac0ff66950d614ea9d11bb71cfe3c16/4ba8b/judy-zircher.webp',
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
    name: 'Garrett Gaton',
    slug: 'garrett-gaton',
    image:
      'http://conference.dreamon.world/static/e0f0984552d894188e957bc6555eaac5/4ba8b/garrett-gaton.webp',
    instagram: 'https://www.instagram.com/gatton_clan_leader/',
    facebook: 'https://www.facebook.com/garrett.gatton',
    description:
      'Garrett Gaton is a realtor in Lima Ohio and a Dream On: Speaker Collective Speaker',
    title: 'Speaker Collective Speaker',
    location: 'Ohio',
    email: 'garrett@dreamon.world',
    id: 14,
  },
  {
    name: 'Jay Turner',
    slug: 'jay-turner',
    image:
      'http://conference.dreamon.world/static/654b183323a8346f0728e16fa5dbfc14/4ba8b/jay-turner.webp',
    facebook: 'https://www.facebook.com/Jerrad.Turner',
    instagram: '',
    description:
      'Jay Turner and his wife Crissy serve as a member of the United Grounds Non-Profit and the United Grounds Coffee Company',
    title: 'United Grounds',
    location: 'Ohio',
    email: 'admin@unitedgroundsnp.com',
    id: 15,
  },
  {
    name: 'Wes Woods',
    slug: 'wes-woods',
    image:
      'http://conference.dreamon.world/static/b04d2ce8cffc8b7a364c32f1634e1a94/4ba8b/wes-woods.webp',
    facebook: 'https://www.facebook.com/hollywes.woods',
    instagram: 'https://www.instagram.com/woodstrio/',
    description:
      'Wes and his wife Holly serve as a member of the United Grounds Non-Profit and the United Grounds Coffee Company',
    title: 'United Grounds',
    location: 'Ohio',
    email: 'admin@unitedgroundsnp.com',
    id: 16,
  },
  {
    name: 'Nathan Thompson',
    slug: 'nathan-thompson',
    image:
      'http://conference.dreamon.world/static/8e5ad37c024380fecd9c850bc867f06b/4ba8b/nathan-thompson.webp',
    facebook: 'https://www.facebook.com/thompsonandrea2',
    instagram: '',
    description:
      'Nathan and his wife Andrea serve as a member of the United Grounds Non-Profit and the United Grounds Coffee Company',
    title: 'United Grounds',
    location: 'Ohio',
    email: 'admin@unitedgroundsnp.com',
    id: 17,
  },
]
