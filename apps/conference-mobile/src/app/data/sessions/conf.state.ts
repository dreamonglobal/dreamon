import { Schedule, Session } from '@dreamon/conference-schedule'
import { Speaker } from '@dreamon/conference-speakers'
export interface ConfState {
  schedule: Schedule
  sessions: Session[]
  speakers: Speaker[]
  favorites: number[]
  locations: Location[]
  filteredTracks: string[]
  searchText?: string
  mapCenterId?: number
  loading?: boolean
  allTracks: string[]
  menuEnabled: boolean
}
