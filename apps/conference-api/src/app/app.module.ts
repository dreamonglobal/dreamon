import { Module } from '@nestjs/common'

import { ConferenceController } from './conference.controller'
import { ConferenceService } from './conference.service'

@Module({
  imports: [],
  controllers: [ConferenceController],
  providers: [ConferenceService],
})
export class AppModule {}
