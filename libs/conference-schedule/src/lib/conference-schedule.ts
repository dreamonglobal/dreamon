import { SpeakerName } from '@dreamon/conference-speakers'

export type Location =
  | 'Main Auditorium'
  | 'Small Auditorium'
  | 'Pre-K Room'
  | 'Lobby'

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
          description:
            "Have you ever looked at your life and wondered what happened to the dream you once had? Or maybe you're wondering if that dream you had for your life was ever realistic to begin with. Life has a way of making us feel defeated and inadequate.  The enemy is looking for any and every opportunity to steal your dreams, aspirations, and purpose in Christ. Discovering a dream is often easier than keeping it alive! In this session we'll talk about some big dreamers in the bible and obstacles they faced to keep their dreams alive...just like us!",
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
          name: "You're never too old to dream",
          location: 'Lobby',
          speakerNames: ['Joyce Peak'],
          timeStart: '10:30 am',
          timeEnd: '11:30 am',
          tracks: ['Ministry', 'Missions'],
          id: 3,
        },

        {
          name: 'Engaging With Your Local School',
          location: 'Main Auditorium',
          description:
            'Whether your children attend private or public school it is crucial that parents, particularly Christian parents, are involved in the district. Whether its being watchmen, serving like Christ, building relationships, or simply being an active parent there are many ways for parents to get involved in their local district. In this breakout we will talk about creative ways to serve your schools, ways to create movements of change, and how to best get plugged in as a parent or community member.',
          timeStart: '10:30am',
          timeEnd: '11:30am',
          speakerNames: ['Craig Flack'],
          tracks: ['Parenting'],
          id: 4,
        },
        {
          name: 'Combining Dreams in Business and Ministry',
          location: 'Small Auditorium',
          speakerNames: ['Jay Turner', 'Wes Woods', 'Nathan Thompson'],
          timeStart: '10:30 am',
          timeEnd: '11:30 am',
          tracks: ['Business', 'Missions'],
          id: 5,
        },
        {
          name: 'Dreaming of a Pure Life',
          location: 'Pre-K Room',
          speakerNames: ['Judy Zircher'],
          description: `In this breakout session, we will discover how to actually possess the promise in Matthew 5:8, “Blessed are the pure in heart, for they shall see God.”  Current culture is filled with messages contrary to the Word of God.  These images and perspectives pollute our God-given identity, and keep us from living the abundant life.  Together we will:
          layout a biblical blueprint for creating a household of purity,
          tackle hot-topic issues that interfere with God’s plan for our lives,
          and Find hope and encouragement knowing we are not alone in the battle to live a pure life.`,
          timeStart: '10:30 am',
          timeEnd: '11:30 am',
          tracks: ['Youth', 'Men', 'Moms', 'Parenting'],
          id: 6,
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
          id: 7,
        },
        {
          name: 'Derek Spencer Concert',
          location: 'Main Auditorium',
          speakerNames: ['Derek Spencer'],
          timeStart: '12:15pm',
          timeEnd: '12:45pm',
          tracks: [],
          id: 8,
        },
      ],
    },
    {
      time: '1:00 pm',
      sessions: [
        {
          name: 'Resurrecting Dead Dreams',
          location: 'Main Auditorium',
          speakerNames: ['Daniel Lucien'],
          timeStart: '1:00 pm',
          timeEnd: '2:30 pm',
          tracks: ['Keynote'],
          id: 9,
        },
      ],
    },
    {
      time: '2:30 pm',
      sessions: [
        {
          name: 'Dreaming With Worship',
          location: 'Main Auditorium',
          speakerNames: [
            'Zac Howard',
            'Emily Howard',
            'Lucas Gray',
            'Lilli Gray',
          ],
          timeStart: '2:30 pm',
          timeEnd: '3:30 pm',
          tracks: ['Worship'],
          id: 10,
        },
        {
          name: 'Pursuing Your Dreams As A Man',
          location: 'Lobby',
          speakerNames: ['Jason Harris'],
          timeStart: '2:30 pm',
          timeEnd: '3:30 pm',
          tracks: ['Men'],
          id: 11,
        },
        {
          name: 'In It and Not of It',
          location: 'Pre-K Room',
          speakerNames: ['Garrett Gaton'],
          timeStart: '2:30 pm',
          timeEnd: '3:30 pm',
          tracks: ['Men', 'Ministry'],
          id: 12,
        },
        {
          name: 'Dreaming as a Young Adult',
          location: 'Small Auditorium',
          speakerNames: ['Derek Spencer'],
          timeStart: '2:30 pm',
          timeEnd: '3:30 pm',
          tracks: ['Worship'],
          id: 13,
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
          id: 14,
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
            'John Peak',
          ],
          timeStart: '5:00 pm',
          timeEnd: '5:30 pm',
          tracks: ['Keynote'],
          id: 15,
        },
      ],
    },
  ],
}
