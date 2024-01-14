<script lang="ts">
  import type { MultipleCounterStore } from 'src/stores/MultipleCounterStore'
  import Counter from 'src/components/Counter.svelte'
  export let multipleCounterStore: MultipleCounterStore
</script>

{#each $multipleCounterStore as counter (counter.id)}
  <Counter
    title={counter.title}
    count={counter.count}
    onInputTitle={(e) => multipleCounterStore.changeCounterTitle(counter, e.currentTarget.value)}
    onClickIncrement={() => multipleCounterStore.incrementCount(counter)}
    onClickDecrement={() => multipleCounterStore.decrementCount(counter)}
    onClickReset={() => multipleCounterStore.resetCount(counter)}
    onClickDelete={() => multipleCounterStore.deleteCounter(counter)}
  />
{/each}
