<script lang="ts">
    import { count } from "$lib/stores/count";

    function increment() {
        $count = $count + 1;
    }
</script>

<div class="fixed-top text-center mt-3">
    <button
        class="btn btn-lg btn-outline-primary shadow-none"
        on:click={increment}
    >
        Count: {$count}
    </button>
</div>

<slot />
