import { createSelector } from 'reselect'
import { AppState } from './state'
import { Speaker, SpeakerName } from '@dreamon/conference-speakers'
import {
  Schedule,
  ScheduleGroup,
  Session,
  Track,
} from '@dreamon/conference-schedule'

const getSchedule = (state: AppState): Schedule => {
  return state.data.schedule
}
export const getSpeakers = (state: AppState): Speaker[] => state.data.speakers
const getSessions = (state: AppState): Session[] => state.data.sessions
const getFilteredTracks = (state: AppState): Track[] =>
  state.data.filteredTracks
const getFavoriteIds = (state: AppState): number[] => state.data.favorites
const getSearchText = (state: AppState): string => state.data.searchText

export const getFilteredSchedule = createSelector(
  getSchedule,
  getFilteredTracks,
  (schedule: Schedule, filteredTracks: Track[]): Schedule => {
    const groups: ScheduleGroup[] = []
    schedule.groups.forEach((group: ScheduleGroup) => {
      const sessions: Session[] = []
      group.sessions.forEach((session) => {
        session.tracks.forEach((track) => {
          if (
            filteredTracks.indexOf(track) > -1 &&
            sessions.indexOf(session) === -1
          ) {
            sessions.push(session)
          }
        })
      })
      if (sessions.length) {
        const groupToAdd: ScheduleGroup = {
          time: group.time,
          sessions,
        }
        groups.push(groupToAdd)
      }
    })
    return {
      date: schedule.date,
      groups,
    } as Schedule
  }
)

export const getSearchedSchedule = createSelector(
  getFilteredSchedule,
  getSearchText,
  (schedule, searchText) => {
    if (!searchText) {
      return schedule
    }
    const groups: ScheduleGroup[] = []
    schedule.groups.forEach((group) => {
      const sessions = group.sessions.filter(
        (s) => s.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1
      )
      if (sessions.length) {
        const groupToAdd: ScheduleGroup = {
          time: group.time,
          sessions,
        }
        groups.push(groupToAdd)
      }
    })
    return {
      date: schedule.date,
      groups,
    } as Schedule
  }
)

export const getScheduleList = createSelector(
  getSearchedSchedule,
  (schedule) => schedule
)

export const getGroupedFavorites = createSelector(
  getScheduleList,
  getFavoriteIds,
  (schedule, favoriteIds) => {
    const groups: ScheduleGroup[] = []
    schedule.groups.forEach((group) => {
      const sessions = group.sessions.filter(
        (s) => favoriteIds.indexOf(s.id) > -1
      )
      if (sessions.length) {
        const groupToAdd: ScheduleGroup = {
          time: group.time,
          sessions,
        }
        groups.push(groupToAdd)
      }
    })
    return {
      date: schedule.date,
      groups,
    } as Schedule
  }
)

const getIdParam = (_state: AppState, props: any) => {
  return props.match.params['id']
}

export const getSession = createSelector(
  getSessions,
  getIdParam,
  (sessions: Session[], id: string): Session | undefined => {
    return sessions.find((s: Session) => s.id === Number(id))
  }
)

export const getSessionSpeakers = createSelector(
  getSession,
  getSpeakers,
  (sessions, speakers): Speaker[] => {
    return speakers.filter(
      (speaker: Speaker) =>
        sessions && sessions?.speakerNames?.includes(speaker.name)
    )
  }
)

export const getSpeaker = createSelector(
  getSpeakers,
  getIdParam,
  (speakers: Speaker[], slug: string) =>
    speakers.find((speaker: Speaker) => speaker.slug === slug)
)

export const getSpeakerSessions = createSelector(getSessions, (sessions) => {
  const speakerSessions: { [key: string]: Session[] } = {}

  sessions.forEach((session: Session) => {
    session.speakerNames &&
      session.speakerNames.forEach((name) => {
        if (speakerSessions[name]) {
          speakerSessions[name].push(session)
        } else {
          speakerSessions[name] = [session]
        }
      })
  })
  return speakerSessions
})
