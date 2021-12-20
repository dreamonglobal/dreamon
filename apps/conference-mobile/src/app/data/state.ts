import { Schedule, Session } from '@dreamon/conference-schedule'
import { Speaker } from '@dreamon/conference-speakers'
import { combineReducers } from './combineReducers'
import { sessionsReducer } from './sessions/sessions.reducer'
import { userReducer } from './user/user.reducer'

export const initialState: AppState = {
  data: {
    schedule: { groups: [], date: '' } as Schedule,
    sessions: [] as Session[],
    speakers: [] as Speaker[],
    favorites: [],
    locations: [],
    allTracks: [],
    filteredTracks: [],
    mapCenterId: 0,
    loading: false,
    menuEnabled: true,
  },
  user: {
    hasSeenTutorial: false,
    darkMode: false,
    isLoggedin: false,
    loading: false,
  },
}

export const reducers = combineReducers({
  data: sessionsReducer,
  user: userReducer,
})

export type AppState = ReturnType<typeof reducers>
