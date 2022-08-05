import EventBusService from "../event-bus"

export const EventBusServiceMock = {
  emit: jest.fn(),
  subscribe: jest.fn(),
  withTransaction: function () {
    return this
  },
} as unknown as EventBusService

const mock = jest.fn().mockImplementation(() => {
  return EventBusServiceMock
})

export default mock
