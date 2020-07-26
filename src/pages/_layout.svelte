<script>
    import Nav from '../components/Nav.svelte';
    import { isActive } from '@sveltech/routify';
</script>

{#if !$isActive('./index')} <!-- Show navbar on all pages but index-->
<Nav/>
{/if}

<slot></slot>