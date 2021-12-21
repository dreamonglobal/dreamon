import { Injectable } from '@nestjs/common'
import { Speaker, speakers } from '@dreamon/conference-speakers'
import { Schedule, schedule } from '@dreamon/conference-schedule'

@Injectable()
export class ConferenceService {
  getSpeakers(): Speaker[] {
    return speakers
  }

  getSchedule(): Schedule {
    return schedule
  }
}
