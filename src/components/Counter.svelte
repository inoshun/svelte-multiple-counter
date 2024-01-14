<script lang="ts">
  import type { FormEventHandler } from 'svelte/elements'

  export let title: string
  export let count: number
  export let onInputTitle: FormEventHandler<HTMLInputElement>
  export let onClickIncrement: () => void
  export let onClickDecrement: () => void
  export let onClickReset: () => void
  export let onClickDelete: () => void
</script>

<div
  class="flex justify-between items-center w-96 m-auto mb-2 py-1 pl-4 rounded bg-gray-100 shadow-lg"
>
  <input type="text" class="w-32 px-1 text-gray-600" value={title} on:input={onInputTitle} />
  <span class="text-lg font-bold">{count}</span>
  <div class="flex">
    <button type="button" class="btn bg-red-500 rounded-l" on:click={onClickIncrement}>+</button>
    <button type="button" class="btn bg-blue-500" on:click={onClickDecrement}>-</button>
    <button type="button" class="btn bg-yellow-500 rounded-r" on:click={onClickReset}>0</button>
    <button class="flex justify-between items-center text-gray-500 px-4" on:click={onClickDelete}
      >x</button
    >
  </div>
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
