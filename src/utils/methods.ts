

const array = [3,1,6,-3,5,1,9]
// [^-3, 1, | 1,| 3, 5, 6, 9$]
// [^3, | 5,| 6, 9$]
// [^ | 9 |$]

const arrayOfUsers = [{id: 1, name: 'zxc'}, {id: 2, name: 'asd'}, {id: 3, name: 'wqe'}, {id: 4, name: 'tre'}, {id: 1_000_000, name: 'qwe'}]
array.map(item => item +1)


const search = (newSearchNumber: number) => {
  let foundedValue = undefined

  array.forEach(item => {                    // O(n) 6
    if (item === newSearchNumber) {
      foundedValue = 'founded'
      // return foundedValue
    }
  }) //6
  array.find(item => item === newSearchNumber) // O(n) 5



    // Binary search O(log n)
  const sortedArray = structuredClone(array.sort())
  let start = 0
  let end = sortedArray.length - 1

  while (start <= end) {
    let middle = Math.floor((start + end) / 2)
    if (sortedArray[middle] === newSearchNumber) {
      return middle
    } else if (sortedArray[middle] < newSearchNumber) {
          start = middle + 1
    } else {
      end = middle - 1
    }
  }

  return foundedValue
}

search(678431)

// сортировка пузырьком
const bubbleSort = (arr: number[]) => { // сложность === O(n^2)
  // arr.length  === n
  // O(n^2)  --- раз
  for (let i = 0; i < arr.length; i++) {    // n
    for (let j = 0; j < arr.length - i; j++) { // n -1
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
}




bubbleSort(array)




// function Stack (this: { storage: number[], push: (value: number) => void, pop: () => number }) {
//
//   this.storage = [];
//
//   this.push = (value: number) => {
//     this.storage[this.storage.length] = value
//   }
//   this.pop = () => {
//     this.storage = this.storage.slice(0, this.storage.length-2)
//     return this.storage[this.storage.length-1]
//   }
//   return this
// }
class Stack {
  private storage: number[];
  constructor() {

    this.storage = [];
  }

  push = (value: number) => {
    this.storage[this.storage.length] = value
  }
  pop = () => {
    const foundElement = this.storage[this.storage.length-1]
    this.storage = this.storage.slice(0, this.storage.length-2)
    return foundElement
  }
}

const newStack = new Stack()
// []
newStack.push(3)
// [3]
newStack.push(10)
// [3, 10]
newStack.push(2)
// [3, 10, 2]
newStack.pop()
// [3, 10] => 2
newStack.pop()
// [3] => 10
newStack.pop()
// [] => 3




type TreeItem = {id: number, masterId?: number, name: string, children: TreeItem[]}

const tree:TreeItem[] = [
  {id: 1,
    name: 'fr',
    children: [
      {id: 12, name: '31', masterId: 1, children: []},
      {id: 13, name: '312', masterId: 1, children: []}
    ]
  },
  {id: 2,
    name: 'fr',
    children: [
      {id: 22, name: '31', masterId: 2, children: []},
      {id: 23, name: '312', masterId: 2, children: []}
    ]
  },
  {id: 3,
    name: 'fr',
    children: [
      {id: 32, name: '31', masterId: 3, children: []},
      {id: 33, name: '312', masterId: 3, children: []}
    ]
  },

]


class Queue {
  private storage: number[]
  constructor() {
    this.storage = []
  }
  in(item: number) {
    this.storage.push(item)
  }
  out() {
    return this.storage.shift()
  }
}

const newQueue = new Queue()
// []
newQueue.in(3)
// [3]
newQueue.in(4)
// [3,4]
newQueue.out()
// [4] => 3
newQueue.in(1)
// [4, 1]
newQueue.out()
// [1] => 4
newQueue.out()
// [] => 1


const newCol = new Set([1,3,4,5])
newCol.has(3)
newCol.add(1)

const newMap = new Map()
  newMap.set(Date.now(), 'hello')
  newMap.get(Date.now())
  newMap.delete(Date.now())
  newMap.has(Date.now())


const newv2Map = new WeakMap()

newv2Map.set({ asd: 'asd'}, 'hello')
newv2Map.set({ asd: 'a'}, 'ho')
newv2Map.get({asd: 'asd'})
newv2Map.has({asd: 'asd'})
newv2Map.delete({asd: 'asd'})




const zxc = {
  [Date.now()]: 'hello'
}














