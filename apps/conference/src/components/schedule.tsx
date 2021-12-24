import React from 'react'
import { schedule } from '@dreamon/conference-schedule'

/* This example requires Tailwind CSS v2.0+ */
// const activityItems = [
//   {
//     id: 1,
//     title: 'Registration',
//     icon: <NewspaperIcon className="h-6 w-6" />,
//     description: 'Lobby',
//     time: '8:00am',
//   },
//   {
//     id: 2,
//     title: 'Keynote #1',
//     icon: <SpeakerphoneIcon className="h-6 w-6" />,
//     description: 'Main Auditorium',
//     time: '9:00am',
//   },
//   {
//     id: 3,
//     title: 'Breakout Session #1',
//     icon: <UserGroupIcon className="h-6 w-6" />,
//     description: 'Various sessions located throughout the facility',
//     time: '10:30am',
//   },
//   {
//     id: 4,
//     title: 'Lunch',
//     icon: <CakeIcon className="h-6 w-6" />,
//     description: 'A box lunch included as part of registration',
//     time: '11:45am',
//   },
//   {
//     id: 5,
//     title: 'Keynote #2',
//     icon: <SpeakerphoneIcon className="h-6 w-6" />,
//     description: 'Main Auditorium',
//     time: '1:00pm',
//   },
//   {
//     id: 6,
//     title: 'Breakout Session #2',
//     icon: <UserGroupIcon className="h-6 w-6" />,
//     description: 'Various sessions located throughout the facility',
//     time: '2:15pm',
//   },
//   {
//     id: 7,
//     title: 'Keynote #3',
//     icon: <SpeakerphoneIcon className="h-6 w-6" />,
//     description: 'Main Auditorium',
//     time: '3:30pm',
//   },
//   {
//     id: 8,
//     title: 'Q & A',
//     icon: <ChatAlt2Icon className="h-6 w-6" />,
//     description: 'Main Auditorium',
//     time: '4:45pm',
//   },
// ]

const Schedule = () => {
  return (
    <div
      id="schedule"
      className="pb-16 bg-gradient-to-r from-teal-500 to-cyan-600 lg:pb-0 lg:z-10 lg:relative my-24"
    >
      <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
        <div>
          <h2 className="text-base font-semibold tracking-wider text-cyan-600 uppercase">
            What You'll Do
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
            Conference Schedule
          </p>
          <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
            Below is a schedule outlining the days events.
          </p>
        </div>
        <div className="text-left">
          <ul className="divide-y divide-gray-200 mt-12">
            {schedule.groups.map((group) =>
              group.sessions.map((session) => (
                <li key={session.id} className="py-4">
                  <div className="flex space-x-3">
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-md font-medium">{session.name}</h3>
                        <p className="text-sm text-gray-500">
                          {session.timeStart}
                        </p>
                      </div>
                      <p className="text-sm text-gray-500">
                        {session.description}
                      </p>
                      {session.tracks.map((track) => (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                          {track}
                        </span>
                      ))}
                    </div>
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Schedule
