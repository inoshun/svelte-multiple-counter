import { writable, type Writable } from 'svelte/store'

export type Counter = {
  id: number
  title: string
  count: number
}

export type MultipleCounterStore = {
  subscribe: Writable<Counter[]>['subscribe']
  set: Writable<Counter[]>['set']
  incrementCount: (targetCounter: Counter) => void
  decrementCount: (targetCounter: Counter) => void
  resetCount: (targetCounter: Counter) => void
  deleteCounter: (targetCounter: Counter) => void
  addCounter: () => void
}

const createMultipleCounterStore = (): MultipleCounterStore => {
  let uid = 1
  const defaultTitle = 'new'

  const { subscribe, update, set } = writable<Counter[]>([
    {
      id: uid++,
      title: defaultTitle,
      count: 0,
    },
  ])

  // カウント加算
  const incrementCount = (targetCounter: Counter) => {
    update((multipleCounter) => {
      return multipleCounter.map((counter) => {
        return counter === targetCounter
          ? {
              ...counter,
              count: counter.count + 1,
            }
          : counter
      })
    })
  }

  // カウント減算
  const decrementCount = (targetCounter: Counter) => {
    update((multipleCounter) => {
      return multipleCounter.map((counter) => {
        return counter === targetCounter && counter.count >= 1
          ? {
              ...counter,
              count: counter.count - 1,
            }
          : counter
      })
    })
  }

  // カウントリセット
  const resetCount = (targetCounter: Counter) => {
    update((multipleCounter) => {
      return multipleCounter.map((counter) => {
        return counter === targetCounter
          ? {
              ...counter,
              count: 0,
            }
          : counter
      })
    })
  }

  // カウンター削除
  const deleteCounter = (targetCounter: Counter) => {
    update((multipleCounter) => {
      return multipleCounter.filter((counter) => counter !== targetCounter)
    })
  }

  // カウンター追加
  const addCounter = () => {
    update((multipleCounter) => {
      return multipleCounter.concat({
        id: uid++,
        title: defaultTitle,
        count: 0,
      })
    })
  }

  return {
    subscribe,
    set,
    incrementCount,
    decrementCount,
    resetCount,
    deleteCounter,
    addCounter,
  }
}

export const multipleCounterStore = createMultipleCounterStore()
