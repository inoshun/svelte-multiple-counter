<script lang="ts">
  import { multipleCounterStore } from 'src/stores/MultipleCounterStore'
  import CounterList from 'src/components/CounterList.svelte'
  import NewCounterButton from 'src/components/NewCounterButton.svelte'
  import CounterTitleList from 'src/components/CounterTitleList.svelte'
  import SumOfCount from 'src/components/SumOfCount.svelte'
</script>

<div class="text-center">
  <h1 class="text-[64px] leading-normal">Multiple Counter</h1>
  <CounterList {multipleCounterStore} />
  <NewCounterButton onClick={multipleCounterStore.addCounter} />
  <CounterTitleList counters={$multipleCounterStore} />
  <SumOfCount counters={$multipleCounterStore} />
</div>
