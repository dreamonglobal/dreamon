import { Controller, Get } from '@nestjs/common'

import { ConferenceService } from './conference.service'

@Controller('conference')
export class ConferenceController {
  constructor(private readonly conferenceService: ConferenceService) {}

  @Get('speakers')
  getSpeakers() {
    return this.conferenceService.getSpeakers()
  }

  @Get('schedule')
  getSchedule() {
    return this.conferenceService.getSchedule()
  }
}
