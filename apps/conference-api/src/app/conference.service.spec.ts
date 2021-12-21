import { schedule } from '@dreamon/conference-schedule'
import { speakers } from '@dreamon/conference-speakers'
import { Test } from '@nestjs/testing'

import { ConferenceService } from './conference.service'

describe('ConferenceService', () => {
  let service: ConferenceService

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [ConferenceService],
    }).compile()

    service = app.get<ConferenceService>(ConferenceService)
  })

  describe('getSpeakers', () => {
    it('should return speakers from conference-speakers lib', () => {
      // arrange
      const expected = speakers

      // act
      const actual = service.getSpeakers()

      // assert
      expect(actual).toEqual(expected)
    })
  })

  describe('getSchedule', () => {
    it('should return schedule from conference-schedule lib', () => {
      // arrange
      const expected = schedule

      // act
      const actual = service.getSchedule()

      // assert
      expect(actual).toEqual(expected)
    })
  })
})
