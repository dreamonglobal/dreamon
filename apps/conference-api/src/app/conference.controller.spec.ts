import { Test, TestingModule } from '@nestjs/testing'

import { ConferenceController } from './conference.controller'
import { ConferenceService } from './conference.service'

describe('ConferenceController', () => {
  let app: TestingModule

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [ConferenceController],
      providers: [ConferenceService],
    }).compile()
  })

  // describe('getData', () => {
  //   it('should return "Welcome to conference-api!"', () => {
  //     const appController = app.get<AppController>(AppController)
  //     expect(appController.getData()).toEqual({
  //       message: 'Welcome to conference-api!',
  //     })
  //   })
  // })

  describe('getSpeakers', () => {
    it('should return speakers from speakers service', () => {
      // arrange
      const controller = app.get<ConferenceController>(ConferenceController)
      const service = app.get<ConferenceService>(ConferenceService)
      const expected = service.getSpeakers()

      // act
      const actual = controller.getSpeakers()

      // assert
      expect(actual).toEqual(expected)
    })
  })

  describe('getSchedule', () => {
    it('should return schedule form schedule service', () => {
      // arrange
      const controller = app.get<ConferenceController>(ConferenceController)
      const service = app.get<ConferenceService>(ConferenceService)
      const expected = service.getSchedule()

      // act
      const actual = controller.getSchedule()

      // assert
      expect(actual).toEqual(expected)
    })
  })
})
