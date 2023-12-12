const methods = require('./addTimeToExpireToStorage')


describe("addTimeToExpireToStorage", () => {
  it('should return false if key empty', () => {
    expect(methods.getLocalStorageWithTime('')).toBeFalsy()
  });
})