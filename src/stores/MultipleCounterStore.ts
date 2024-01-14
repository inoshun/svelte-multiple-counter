import { writable } from 'svelte/store'

type Counter = {
  id: number
  title: string
  count: number
}

const createMultipleCounter = () => {
  let uid = 1
  const defaultTitle = 'new'

  const { subscribe, update } = writable<Counter[]>([
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

  // カウンタータイトル変更
  const changeCounterTitle = (targetCounter: Counter, newTitle: string) => {
    update((multipleCounter) => {
      return multipleCounter.map((counter) => {
        return counter === targetCounter
          ? {
              ...counter,
              title: newTitle,
            }
          : counter
      })
    })
  }

  return {
    subscribe,
    incrementCount,
    decrementCount,
    resetCount,
    deleteCounter,
    addCounter,
    changeCounterTitle,
  }
}

export const multipleCounter = createMultipleCounter()
