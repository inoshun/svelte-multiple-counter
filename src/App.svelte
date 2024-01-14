<script lang="ts">
  import { multipleCounter } from 'src/stores/MultipleCounterStore'
</script>

<div class="text-center">
  <h1 class="text-[64px] leading-normal">Multiple Counter</h1>
  {#each $multipleCounter as counter (counter.id)}
    <div
      class="flex justify-between items-center w-96 m-auto mb-2 py-1 pl-4 rounded bg-gray-100 shadow-lg"
    >
      <input type="text" class="w-32 px-1 text-gray-600" bind:value={counter.title} />
      <span class="text-lg font-bold">{counter.count}</span>
      <div class="flex">
        <button
          type="button"
          class="btn bg-red-500 rounded-l"
          on:click={() => multipleCounter.incrementCount(counter)}>+</button
        >
        <button
          type="button"
          class="btn bg-blue-500"
          on:click={() => multipleCounter.decrementCount(counter)}>-</button
        >
        <button
          type="button"
          class="btn bg-yellow-500 rounded-r"
          on:click={() => multipleCounter.resetCount(counter)}>0</button
        >
        <button
          class="flex justify-between items-center text-gray-500 px-4"
          on:click={() => multipleCounter.deleteCounter(counter)}>x</button
        >
      </div>
    </div>
  {/each}

  <button
    type="button"
    class="w-96 bg-green-400 rounded text-white"
    on:click={multipleCounter.addCounter}>new counter</button
  >
  <p>
    title list:&nbsp;
    {#each $multipleCounter as counter (counter.id)}
      <span class="mr-1 after:content-[','] last-of-type:mr-0 last-of-type:after:content-none"
        >{counter.title}</span
      >
    {/each}
  </p>
  <p>
    sum of count:&nbsp;
    {$multipleCounter.reduce((accumulator, currentValue) => accumulator + currentValue.count, 0)}
  </p>
</div>

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
