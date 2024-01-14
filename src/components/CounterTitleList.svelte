<script lang="ts">
  import type { Counter } from 'src/stores/MultipleCounterStore'
  export let counters: Counter[]
</script>

<p>
  <span>title list: </span>
  {#each counters as counter (counter.id)}
    <span class="mr-1 after:content-[','] last-of-type:mr-0 last-of-type:after:content-none"
      >{counter.title}</span
    >
  {/each}
</p>
