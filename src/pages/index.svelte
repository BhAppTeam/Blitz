<script>
    import { goto } from '@sveltech/routify';
    import Login from '../components/Login.svelte';
    let user;
</script>

<style>
    #centerall {
        height: 100vh;
        padding: 0;
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
    }
</style>


<div id="centerall">
    <Login bind:user/> <!-- need user variable to check status -->
</div>


{#if user}
    <!-- redirect to code-page -->
    {$goto("../start")}
{/if}
