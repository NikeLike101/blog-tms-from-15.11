

const allowedIds = [1,2,3,4,5,6,7,8,9,0,11]

export const middlewareHandler = (id: number, handler: (isCorrect: boolean, id: number| null) => void) => {
  if (id > 0) {
    if (allowedIds.includes(id)) {
      handler(true, id)
    } else{
      handler(false, null)
    }


  }

  if (allowedIds.includes(Math.abs(id))) {
    handler(true, Math.abs(id))
  }
  // handler(false, null)
}