import { SpeakerName } from '@dreamon/conference-speakers'

export type Location =
  | 'Main Auditorium'
  | 'Room 301'
  | 'Room 303'
  | 'Loft'
  | 'Choir Room'
  | 'Media Room'
  | 'Lobby'
export type Track =
  | 'Youth'
  | 'Ministry'
  | 'Media'
  | 'Missions'
  | 'Business'
  | 'Keynote'
  | 'Moms'
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
          name: 'Keynote #1',
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
          name: 'Dreaming as a Mom',
          location: 'Room 301',
          speakerNames: ['Ashley Powell', 'Hanna Swartz'],
          timeStart: '10:30 am',
          timeEnd: '11:30 am',
          tracks: ['Moms'],
          id: 3,
        },
        {
          name: 'Dreaming With Worship',
          location: 'Loft',
          speakerNames: ['Derek Spencer'],
          timeStart: '10:30 am',
          timeEnd: '11:30 am',
          tracks: ['Worship'],
          id: 4,
        },
        {
          name: 'Dreaming With Media',
          location: 'Media Room',
          speakerNames: ['John Peak'],
          timeStart: '10:30 am',
          timeEnd: '10:30 am',
          tracks: ['Media'],
          id: 5,
        },
        {
          name: 'The Importance of Purity',
          location: 'Room 303',
          speakerNames: ['Judy Zircher'],
          timeStart: '10:30 am',
          timeEnd: '11:30 am',
          tracks: ['Youth', 'Moms'],
          id: 6,
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
      time: '2:15 pm',
      sessions: [
        {
          name: 'Engaging with Culture',
          location: 'Loft',
          speakerNames: ['Rob Kennedy'],
          timeStart: '2:15 pm',
          timeEnd: '3:15 pm',
          tracks: ['Missions', 'Ministry'],
          id: 11,
        },
        {
          name: 'Dreaming With Worship',
          location: 'Loft',
          speakerNames: ['Zac Howard', 'Lucas Gray', 'Lilli Gray'],
          timeStart: '10:30 am',
          timeEnd: '11:30 am',
          tracks: ['Worship'],
          id: 12,
        },
      ],
    },
    {
      time: '3:30',
      sessions: [
        {
          name: 'Keynote #3',
          location: 'Main Auditorium',
          speakerNames: ['Ben Swartz'],
          timeStart: '3:30 pm',
          timeEnd: '4:45 pm',
          tracks: ['Keynote'],
          id: 13,
        },
      ],
    },
    {
      time: '4:45',
      sessions: [
        {
          name: 'Q & A',
          location: 'Main Auditorium',
          description:
            "Here's your chance to ask the Dream On Team your questions",
          timeStart: '4:45 pm',
          timeEnd: '5:15 pm',
          tracks: ['Keynote'],
          id: 14,
        },
      ],
    },
  ],
}
