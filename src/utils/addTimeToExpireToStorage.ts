


export const setLocalStorageWithTime = (key: string, value: string, timeToAlive: number) => {

  localStorage.setItem(key, JSON.stringify({ value: value, timeToExpire: Date.now() + timeToAlive }))
}
export const getLocalStorageWithTime = (key: string): false | string => {

  const rawData = localStorage.getItem(key)
  console.log(typeof rawData, 'zxc');
  if (rawData === null || rawData === undefined || rawData.length === 0) return false
  const { value, timeToExpire } =  JSON.parse(rawData)
  if (Date.now() >= timeToExpire) {
    localStorage.setItem(key, '')
    return false
  }
  return value
}