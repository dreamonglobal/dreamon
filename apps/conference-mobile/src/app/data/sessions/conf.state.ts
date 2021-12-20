import { Speaker } from '@dreamon/conference-speakers'
import { Location } from '../../models/Location'
import { Schedule, Session } from '../../models/Schedule'
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
