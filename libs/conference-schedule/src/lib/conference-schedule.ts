import { SpeakerName } from '@dreamon/conference-speakers'

export type Location =
  | 'Main Auditorium'
  | 'Room 301'
  | 'Room 303'
  | 'Loft'
  | 'Choir Room'
  | 'Media Room'
  | 'Lobby'
  | 'Clothing Room'
export type Track =
  | 'Youth'
  | 'Ministry'
  | 'Media'
  | 'Missions'
  | 'Business'
  | 'Keynote'
  | 'Moms'
  | 'Men'
  | 'Worship'
  | 'Parenting'

export type Session = {
  id: number
  timeStart: string
  timeEnd: string
  name: string
  location: Location
  description?: string
  speakerNames?: SpeakerName[]
  tracks: Track[]
}

export type ScheduleGroup = {
  time: string
  sessions: Session[]
}

export type Schedule = {
  date: string
  groups: ScheduleGroup[]
}

export const schedule: Schedule = {
  date: '2022-02-19',
  groups: [
    {
      time: '8:00 am',
      sessions: [
        {
          name: 'Registration',
          description: 'Event registration will be held in the lobby',
          timeStart: '8:00 am',
          timeEnd: '9:00 am',
          location: 'Lobby',
          tracks: [],
          id: 1,
        },
      ],
    },
    {
      time: '9:00 am',
      sessions: [
        {
          name: 'The Art of Finding a Dream and Keeping It',
          location: 'Main Auditorium',
          speakerNames: ['Ashley Powell'],
          timeStart: '9:00 am',
          timeEnd: '10:15 am',
          tracks: ['Keynote'],
          id: 2,
        },
      ],
    },
    {
      time: '10:30 am',
      sessions: [
        {
          name: 'Dreaming as an Artist',
          location: 'Loft',
          speakerNames: ['Derek Spencer'],
          timeStart: '10:30 am',
          timeEnd: '11:30 am',
          tracks: ['Worship'],
          id: 3,
        },
        {
          name: 'Dreaming In Media',
          location: 'Media Room',
          speakerNames: ['John Peak'],
          timeStart: '10:30 am',
          timeEnd: '11:30 am',
          tracks: ['Media'],
          id: 4,
        },
        {
          name: 'Engaging With Your Local School',
          location: 'Choir Room',
          description:
            'Whether your children attend private or public school it is crucial that parents, particularly Christian parents, are involved in the district. Whether its being watchmen, serving like Christ, building relationships, or simply being an active parent there are many ways for parents to get involved in their local district. In this breakout we will talk about creative ways to serve your schools, ways to create movements of change, and how to best get plugged in as a parent or community member.',
          timeStart: '10:30am',
          timeEnd: '11:30am',
          speakerNames: ['Craig Flack'],
          tracks: ['Parenting'],
          id: 5,
        },
        {
          name: 'Pursuing Your Dreams As A Man',
          location: 'Clothing Room',
          speakerNames: ['Jason Harris'],
          timeStart: '10:30am',
          timeEnd: '11:30am',
          tracks: ['Men'],
          id: 6,
        },
        {
          name: 'Dreaming of a Pure Life',
          location: 'Room 303',
          speakerNames: ['Judy Zircher'],
          description: `In this breakout session, we will discover how to actually possess the promise in Matthew 5:8, “Blessed are the pure in heart, for they shall see God.”  Current culture is filled with messages contrary to the Word of God.  These images and perspectives pollute our God-given identity, and keep us from living the abundant life.  Together we will:
          layout a biblical blueprint for creating a household of purity,
          tackle hot-topic issues that interfere with God’s plan for our lives,
          and Find hope and encouragement knowing we are not alone in the battle to live a pure life.`,
          timeStart: '2:30 pm',
          timeEnd: '3:30 pm',
          tracks: ['Youth', 'Men', 'Moms', 'Parenting'],
          id: 7,
        },
      ],
    },
    {
      time: '11:45 am',
      sessions: [
        {
          name: 'Lunch',
          location: 'Lobby',
          timeStart: '11:45 am',
          timeEnd: '12:45 pm',
          tracks: [],
          id: 8,
        },
        {
          name: 'Derek Spencer Concert',
          location: 'Main Auditorium',
          speakerNames: ['Derek Spencer'],
          timeStart: '12:15pm',
          timeEnd: '12:45pm',
          tracks: [],
          id: 9,
        },
      ],
    },
    {
      time: '1:00 pm',
      sessions: [
        {
          name: 'Keynote #2',
          location: 'Main Auditorium',
          speakerNames: ['Daniel Lucien'],
          timeStart: '1:00 pm',
          timeEnd: '2:00 pm',
          tracks: ['Keynote'],
          id: 10,
        },
      ],
    },
    {
      time: '2:30 pm',
      sessions: [
        {
          name: 'Dreaming as a Mom',
          location: 'Clothing Room',
          speakerNames: ['Hanna Swartz', 'Ashley Powell'],
          timeStart: '10:30 am',
          timeEnd: '11:30 am',
          tracks: ['Moms'],
          id: 11,
        },
        {
          name: 'Dreaming With Worship',
          location: 'Loft',
          speakerNames: [
            'Zac Howard',
            'Emily Howard',
            'Lucas Gray',
            'Lilli Gray',
          ],
          timeStart: '2:30 pm',
          timeEnd: '3:30 pm',
          tracks: ['Worship'],
          id: 12,
        },
        {
          name: 'Combining Dreams in Business and Ministry',
          location: 'Choir Room',
          speakerNames: ['Jay Turner', 'Wes Woods', 'Nathan Thompson'],
          timeStart: '2:30 pm',
          timeEnd: '3:30 pm',
          tracks: ['Business', 'Ministry'],
          id: 13,
        },
        {
          name: 'Dreaming in Business',
          location: 'Room 301',
          speakerNames: ['Garrett Gaton'],
          timeStart: '2:30 pm',
          timeEnd: '3:30 pm',
          tracks: ['Business'],
          id: 14,
        },
        {
          name: "You're never too old to dream",
          location: 'Room 303',
          speakerNames: ['Joyce Peak'],
          timeStart: '2:30 pm',
          timeEnd: '3:30 pm',
          tracks: ['Ministry', 'Missions'],
          id: 15,
        },
      ],
    },
    {
      time: '3:30',
      sessions: [
        {
          name: 'The Opportunity to Dream with Jesus',
          location: 'Main Auditorium',
          speakerNames: ['Ben Swartz'],
          timeStart: '3:30 pm',
          timeEnd: '5:00 pm',
          tracks: ['Keynote'],
          id: 16,
        },
      ],
    },
    {
      time: '5:00',
      sessions: [
        {
          name: 'Q & A',
          location: 'Main Auditorium',
          description:
            "Here's your chance to ask the Dream On Team your questions",
          speakerNames: [
            'Ben Swartz',
            'Ashley Powell',
            'Hanna Swartz',
            'Jordan Powell',
          ],
          timeStart: '5:00 pm',
          timeEnd: '5:30 pm',
          tracks: ['Keynote'],
          id: 17,
        },
      ],
    },
  ],
}
