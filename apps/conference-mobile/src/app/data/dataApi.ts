import { Storage } from '@capacitor/storage'
import { Schedule, schedule, Session } from '@dreamon/conference-schedule'
import { speakers } from '@dreamon/conference-speakers'

const HAS_LOGGED_IN = 'hasLoggedIn'
const HAS_SEEN_TUTORIAL = 'hasSeenTutorial'
const USERNAME = 'username'

export const getConfData = async () => {
  const sessions = parseSessions(schedule)
  const allTracks = sessions
    .reduce((all, session) => all.concat(session.tracks), [] as string[])
    .filter((trackName, index, array) => array.indexOf(trackName) === index)
    .sort()

  const data = {
    schedule,
    sessions,
    speakers,
    allTracks,
    filteredTracks: [...allTracks],
  }
  return data
}

export const getUserData = async () => {
  const response = await Promise.all([
    Storage.get({ key: HAS_LOGGED_IN }),
    Storage.get({ key: HAS_SEEN_TUTORIAL }),
    Storage.get({ key: USERNAME }),
  ])
  const isLoggedin = (await response[0].value) === 'true'
  const hasSeenTutorial = (await response[1].value) === 'true'
  const username = (await response[2].value) || undefined
  const data = {
    isLoggedin,
    hasSeenTutorial,
    username,
  }
  return data
}

export const setIsLoggedInData = async (isLoggedIn: boolean) => {
  await Storage.set({ key: HAS_LOGGED_IN, value: JSON.stringify(isLoggedIn) })
}

export const setHasSeenTutorialData = async (hasSeenTutorial: boolean) => {
  await Storage.set({
    key: HAS_SEEN_TUTORIAL,
    value: JSON.stringify(hasSeenTutorial),
  })
}

export const setUsernameData = async (username?: string) => {
  if (!username) {
    await Storage.remove({ key: USERNAME })
  } else {
    await Storage.set({ key: USERNAME, value: username })
  }
}

function parseSessions(schedule: Schedule) {
  const sessions: Session[] = []
  schedule.groups.forEach((g) => {
    g.sessions.forEach((s) => sessions.push(s))
  })
  return sessions
}
