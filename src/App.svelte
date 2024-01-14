<script lang="ts">
  // import { multipleCounter } from 'src/stores/MultipleCounterStore'
</script>

<div class="text-center">
  <h1 class="text-[64px] leading-normal">Multiple Counter</h1>
  <div
    class="flex justify-between items-center w-96 m-auto mb-2 py-1 pl-4 rounded bg-gray-100 shadow-lg"
  >
    <input type="text" class="w-32 px-1 text-gray-600" />
    <span class="text-lg font-bold">0</span>
    <div class="flex">
      <button type="button" class="btn bg-red-500cd rounded-l">+</button>
      <button type="button" class="btn bg-blue-500">-</button>
      <button type="button" class="btn bg-yellow-500 rounded-r">0</button>
      <span class="flex justify-between items-center text-gray-500 cursor-pointer px-4">x</span>
    </div>
  </div>
  <button type="button" class="w-96 bg-green-400 rounded text-white">new counter</button>
  <p>title list: news, new, new, new, new, new, new, new, new, new</p>
  <p>sum of count: 0</p>
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
