<script lang="ts">
  import type { Counter } from 'src/stores/MultipleCounterStore'
  export let counters: Counter[]
</script>

<p>
  sum of count:&nbsp;
  {counters.reduce((accumulator, currentValue) => accumulator + currentValue.count, 0)}
</p>
