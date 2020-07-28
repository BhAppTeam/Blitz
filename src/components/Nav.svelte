<script>
    import { auth } from '../firebase';
    import { authState } from 'rxfire/auth';
    import Logout from './Logout.svelte';
    import { isActive } from '@sveltech/routify';

    let user;
    authState(auth).subscribe(u => user = u);
    let isOpen = false;
    function toggleNav(){
        isOpen = !isOpen;
    }

</script>



<nav class="navbar is-primary" id="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
    {#if user}
        <a href="../joinEvent" class="navbar-item">Logo</a>
    {:else}
        <a href="./" class="navbar-item">Logo</a>
    {/if}

        <span class="navbar-burger"
        class:is-active={isOpen}
        on:click={toggleNav}
        aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>

        </span>
    </div>

    <div class="navbar-menu" class:is-active={isOpen}>
        <div class="navbar-start">
            <a href="./joinEvent" class="navbar-item" class:active={$isActive("./joinEvent")}>Join Event</a>
            <a href="./createEvent" class="navbar-item" class:active={$isActive("./createEvent")}>Create Event</a>

            <a href="../profile" class="navbar-item" class:active={$isActive("../profile")}>Profile</a>
            <a href="../about" class="navbar-item" class:active={$isActive("../about")}>About Us</a>
        </div>

        <div class="navbar-end">
            {#if !user}
            <a href="./" class="navbar-item">
                <button class="button is-primary is-outlined" class:active={$isActive("./")}>
                    Sign In
                </button>
            </a>
            {/if}
        </div>
    </div>

</nav>