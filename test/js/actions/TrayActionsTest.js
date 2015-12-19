jest.dontMock('../../../src/js/actions/TrayActions')
  .dontMock('../../../src/js/constants/NevergreenConstants')

describe('tray actions', () => {

  let subject, AppDispatcher, Constants, promiseMock, validate

  beforeEach(() => {
    subject = require('../../../src/js/actions/TrayActions')
    AppDispatcher = require('../../../src/js/dispatcher/AppDispatcher')
    Constants = require('../../../src/js/constants/NevergreenConstants')
    validate = require('validate.js')
    promiseMock = {
      then: jest.genMockFunction(),
      catch: jest.genMockFunction()
    }
    promiseMock.then.mockReturnValue(promiseMock)
    promiseMock.catch.mockReturnValue(promiseMock)
  })

  it('dispatches invalid input action when validation fails', () => {
    validate.mockReturnValue('some-validation-message')

    subject.addTray('some-url', 'some-username', 'some-password')

    expect(AppDispatcher.dispatch).toBeCalledWith({
      type: Constants.TrayInvalidInput,
      url: 'some-url',
      username: 'some-username',
      password: 'some-password',
      messages: 'some-validation-message'
    })
  })

  it('dispatches tray remove action when removing a tray', () => {
    subject.removeTray('some-id')

    expect(AppDispatcher.dispatch).toBeCalledWith({
      type: Constants.TrayRemove,
      trayId: 'some-id'
    })
  })

})
