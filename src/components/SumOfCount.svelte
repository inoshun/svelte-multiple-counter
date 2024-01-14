<script lang="ts">
  import type { Counter } from 'src/stores/MultipleCounterStore'
  export let counters: Counter[]
</script>

<p>
  <span>sum of count: </span>
  <span>{counters.reduce((accumulator, currentValue) => accumulator + currentValue.count, 0)}</span>
</p>
