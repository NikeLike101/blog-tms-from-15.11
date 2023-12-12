const { middlewareHandler } = require('./methodsForTest');

describe('methodsForTest', () => {
  it('should 10 return false', () => {
    let isAllowedId10
    const handler = (isAllowed) => isAllowedId10 = isAllowed
    middlewareHandler(10, handler)
    console.log(isAllowedId10);
    expect(isAllowedId10).toBeFalsy()
  });
  it('should -10 return false', () => {
    let isAllowedId10
    const handler = (isAllowed) => isAllowedId10 = isAllowed
    middlewareHandler(-10, handler)
    console.log(isAllowedId10);
    expect(isAllowedId10).toBeFalsy()
  });

  it('should convert negative works correct', () => {
    let isAllowedNegative
    let allowedIdConverted
    const handler = (isAllowed, allowedId) => {
      isAllowedNegative = isAllowed;
      allowedIdConverted = allowedId
    }
    middlewareHandler(-1, handler)

    expect(allowedIdConverted).toBeGreaterThan(0)
  });

  it('should handler be called 1 times with positive not allowed id', () => {
    const handler = jest.fn()

    middlewareHandler(12, handler)

    expect(handler).toBeCalledTimes(1)
  });
})