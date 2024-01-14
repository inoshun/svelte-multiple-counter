<script lang="ts">
  export let onClick: () => void
</script>

<button type="button" class="w-96 bg-green-400 rounded text-white" on:click={onClick}
  >new counter</button
>
