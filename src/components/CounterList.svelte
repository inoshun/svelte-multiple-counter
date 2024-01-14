<script lang="ts">
  import type { MultipleCounterStore } from 'src/stores/MultipleCounterStore'
  export let multipleCounterStore: MultipleCounterStore
</script>

{#each $multipleCounterStore as counter (counter.id)}
  <div
    class="flex justify-between items-center w-96 m-auto mb-2 py-1 pl-4 rounded bg-gray-100 shadow-lg"
  >
    <input type="text" class="w-32 px-1 text-gray-600" bind:value={counter.title} />
    <span class="text-lg font-bold">{counter.count}</span>
    <div class="flex">
      <button
        type="button"
        class="btn bg-red-500 rounded-l"
        on:click={() => multipleCounterStore.incrementCount(counter)}
      >
        +
      </button>
      <button
        type="button"
        class="btn bg-blue-500"
        on:click={() => multipleCounterStore.decrementCount(counter)}
      >
        -
      </button>
      <button
        type="button"
        class="btn bg-yellow-500 rounded-r"
        on:click={() => multipleCounterStore.resetCount(counter)}
      >
        0
      </button>
      <button
        class="flex justify-between items-center text-gray-500 px-4"
        on:click={() => multipleCounterStore.deleteCounter(counter)}
      >
        x
      </button>
    </div>
  </div>
{/each}

<style>
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 34px;
    height: 35px;
    text-align: center;
    color: white;
  }
</style>
